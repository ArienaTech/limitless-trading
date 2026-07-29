import { readFile } from "node:fs/promises";
import path from "node:path";
import { type NextRequest } from "next/server";
import {
  galleryAssetById,
  galleryAssets,
  GALLERY_CATEGORIES,
  type GalleryAsset,
  type GalleryCategory,
} from "../../../../galleryAssets";
import { createZip } from "./zip";

// Streams a gallery asset back as an attachment, or bundles the whole set
// (optionally one category) into a ZIP.
//
//   /api/gallery/download?id=wordmark      → single file
//   /api/gallery/download?all=1            → every asset, zipped
//   /api/gallery/download?category=Brand   → one category, zipped
//
// Only ids/sources registered in galleryAssets.ts are servable: the request
// never supplies a URL or a path, so this cannot be turned into an open proxy
// or used to read outside /public.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIME: Record<GalleryAsset["format"], string> = {
  SVG: "image/svg+xml",
  PNG: "image/png",
  JPG: "image/jpeg",
};

const FETCH_TIMEOUT_MS = 20_000;

async function loadAsset(asset: GalleryAsset): Promise<Buffer> {
  if (asset.src.startsWith("/")) {
    // Local asset — src comes from the manifest, so there is no user-controlled
    // path segment to traverse with.
    return readFile(path.join(process.cwd(), "public", asset.src));
  }

  const res = await fetch(asset.src, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Upstream ${res.status} for ${asset.id}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function attachmentHeaders(filename: string, type: string, length: number) {
  return {
    "Content-Type": type,
    "Content-Length": String(length),
    "Content-Disposition": `attachment; filename="${filename}"`,
    "Cache-Control": "public, max-age=3600",
  };
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const id = params.get("id");
  const category = params.get("category");
  const all = params.get("all");

  // ── Single asset ──────────────────────────────────────────────────────────
  if (id) {
    const asset = galleryAssetById.get(id);
    if (!asset) {
      return new Response("Unknown asset", { status: 404 });
    }
    try {
      const data = await loadAsset(asset);
      return new Response(new Uint8Array(data), {
        headers: attachmentHeaders(asset.filename, MIME[asset.format], data.length),
      });
    } catch (error) {
      console.error(`[gallery] failed to load ${asset.id}:`, error);
      return new Response("Asset temporarily unavailable", { status: 502 });
    }
  }

  // ── Bundle ────────────────────────────────────────────────────────────────
  if (!all && !category) {
    return new Response("Missing id, category, or all parameter", { status: 400 });
  }

  let selection = galleryAssets;
  let zipName = "limitless-assets.zip";

  if (category) {
    if (!(GALLERY_CATEGORIES as readonly string[]).includes(category)) {
      return new Response("Unknown category", { status: 404 });
    }
    selection = galleryAssets.filter((a) => a.category === (category as GalleryCategory));
    zipName = `limitless-${category.toLowerCase()}.zip`;
  }

  const results = await Promise.all(
    selection.map(async (asset) => {
      try {
        // Category folders keep the extracted bundle readable.
        return {
          name: `${asset.category.toLowerCase()}/${asset.filename}`,
          data: await loadAsset(asset),
        };
      } catch (error) {
        // One unreachable asset shouldn't sink the whole bundle.
        console.error(`[gallery] skipping ${asset.id} in bundle:`, error);
        return null;
      }
    })
  );

  const entries = results.filter((e): e is { name: string; data: Buffer } => e !== null);
  if (entries.length === 0) {
    return new Response("No assets could be retrieved", { status: 502 });
  }

  const zip = createZip(entries);
  return new Response(new Uint8Array(zip), {
    headers: {
      ...attachmentHeaders(zipName, "application/zip", zip.length),
      // Tells the client when the bundle is partial (an upstream image failed).
      "X-Assets-Included": `${entries.length}/${selection.length}`,
    },
  });
}
