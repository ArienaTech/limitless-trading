"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Download, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import {
  activeGalleryCategories,
  galleryAssets,
  type GalleryCategory,
} from "../galleryAssets";

type Filter = "All" | GalleryCategory;

const filters: Filter[] = ["All", ...activeGalleryCategories];

// SVGs bypass the image optimiser (it rejects SVG by default) — the same
// treatment the navbar logo already uses.
const isVector = (format: string) => format === "SVG";

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [bundling, setBundling] = useState(false);
  const [bundleError, setBundleError] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? galleryAssets : galleryAssets.filter((a) => a.category === filter)),
    [filter]
  );

  // The ZIP is assembled on request, so fetch it as a blob rather than
  // navigating — that way the button can show real progress and real errors.
  async function downloadBundle() {
    setBundling(true);
    setBundleError(null);
    try {
      const query = filter === "All" ? "all=1" : `category=${encodeURIComponent(filter)}`;
      const res = await fetch(`/api/gallery/download?${query}`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        filter === "All" ? "limitless-assets.zip" : `limitless-${filter.toLowerCase()}.zip`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setBundleError("Bundle unavailable — try downloading images individually.");
    } finally {
      setBundling(false);
    }
  }

  return (
    <>
      {/* Filters + bundle download */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter assets by category">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`mono text-[10px] px-4 py-2 border transition-colors ${
                  active
                    ? "border-gold text-gold bg-surface"
                    : "border-border text-text-soft hover:border-border-hi hover:text-text"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <button
            onClick={downloadBundle}
            disabled={bundling}
            className="btn-gold-solid mono px-6 py-3 text-[11px] tracking-[0.15em] inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-wait"
          >
            {bundling ? (
              <>
                <Loader2 size={13} className="animate-spin" aria-hidden="true" />
                Preparing ZIP…
              </>
            ) : (
              <>
                <Download size={13} aria-hidden="true" />
                Download {filter === "All" ? "all" : filter} ({visible.length})
              </>
            )}
          </button>
          <p className="mono text-[9px] text-text-dim" role="status">
            {bundleError ?? "Single ZIP · original resolution"}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((asset, i) => (
          <Reveal key={asset.id} index={i % 3} className="h-full">
            <figure className="group h-full flex flex-col bg-surface border border-border hover:border-gold transition-colors duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-void-2">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  fill
                  unoptimized={isVector(asset.format)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={
                    asset.fit === "cover"
                      ? "object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      : "object-contain p-10"
                  }
                />
                <span className="absolute top-3 left-3 mono text-[9px] px-2 py-1 bg-void/85 border border-border text-text-soft">
                  {asset.format}
                </span>
              </div>

              <figcaption className="p-5 flex flex-col gap-2 flex-1">
                <span className="mono text-[9px] text-gold">{asset.category}</span>
                <h3 className="display font-bold text-text text-[16px] leading-snug">
                  {asset.title}
                </h3>
                <p className="mono text-[9px] text-text-dim">{asset.usedOn}</p>

                <a
                  href={`/api/gallery/download?id=${encodeURIComponent(asset.id)}`}
                  download={asset.filename}
                  className="mono text-[10px] text-gold link-underline inline-flex items-center gap-1.5 mt-auto pt-4"
                  aria-label={`Download ${asset.title} as ${asset.format}`}
                >
                  <Download size={12} aria-hidden="true" />
                  Download
                </a>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </>
  );
}
