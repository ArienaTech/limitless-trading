// ─── Gallery asset manifest — single source of truth ─────────────────────────
// Every image that appears anywhere on the site (brand marks, partner logos,
// photography, editorial stock) is registered here once. The gallery page
// renders from this list, and /api/gallery/download uses it as a strict
// allowlist — a file that is not in this list cannot be served or bundled.
//
// Every asset is self-hosted from public/. Nothing here points at a
// third-party host, so the site has no external image dependency.
//
// To add an asset: drop the file in public/ and register it here with the
// page(s) it appears on. Nothing else needs to change.

export const GALLERY_CATEGORIES = [
  "Brand",
  "Partners",
  "Photography",
  "Editorial",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryAsset {
  /** Stable slug — used as the download API's lookup key. */
  id: string;
  /** Path within public/, e.g. "/limitless-wordmark.svg". */
  src: string;
  title: string;
  alt: string;
  category: GalleryCategory;
  /** Where the asset appears on the site — shown under each tile. */
  usedOn: string;
  format: "SVG" | "PNG" | "JPG";
  /** Filename the browser saves it as (also the entry name inside the ZIP). */
  filename: string;
  /** Logos read better letterboxed; photography fills the tile. */
  fit: "contain" | "cover";
}

export const galleryAssets: GalleryAsset[] = [
  // ── Brand ──────────────────────────────────────────────────────────────────
  {
    id: "wordmark",
    src: "/limitless-wordmark.svg",
    title: "Limitless Wordmark",
    alt: "Limitless Trading primary wordmark",
    category: "Brand",
    usedOn: "Navbar · Footer · Insights",
    format: "SVG",
    filename: "limitless-wordmark.svg",
    fit: "contain",
  },
  {
    id: "favicon",
    src: "/limitless-favicon.svg",
    title: "Limitless Favicon",
    alt: "Limitless Trading favicon mark",
    category: "Brand",
    usedOn: "Browser tab · Apple touch icon",
    format: "SVG",
    filename: "limitless-favicon.svg",
    fit: "contain",
  },
  // NOTE (open item): the PWA manifest now points at the favicon above. If
  // dedicated 192px/512px app icons are produced later, drop them in public/,
  // reference them from manifest.json, and register them here to list them.

  // ── Partners ───────────────────────────────────────────────────────────────
  {
    id: "partner-moneta-markets",
    src: "/partner-moneta-markets.svg",
    title: "Moneta Markets",
    alt: "Moneta Markets partner logo",
    category: "Partners",
    usedOn: "Homepage · Partners strip",
    format: "SVG",
    filename: "partner-moneta-markets.svg",
    fit: "contain",
  },
  {
    id: "partner-skool",
    src: "/partner-skool.svg",
    title: "Skool",
    alt: "Skool partner logo",
    category: "Partners",
    usedOn: "Homepage · Partners strip",
    format: "SVG",
    filename: "partner-skool.svg",
    fit: "contain",
  },
  {
    id: "partner-bw365",
    src: "/partner-bw365.svg",
    title: "Ben Wooliss BW 365",
    alt: "Ben Wooliss BW 365 partner logo",
    category: "Partners",
    usedOn: "Homepage · Partners strip",
    format: "SVG",
    filename: "partner-bw365.svg",
    fit: "contain",
  },
  {
    id: "partner-moneta-funded",
    src: "/partner-moneta-funded.svg",
    title: "Moneta Funded",
    alt: "Moneta Funded partner logo",
    category: "Partners",
    usedOn: "Homepage · Partners strip",
    format: "SVG",
    filename: "partner-moneta-funded.svg",
    fit: "contain",
  },

  // ── Photography ────────────────────────────────────────────────────────────
  {
    id: "hero-background",
    src: "/hero-background.png",
    title: "Hero Background",
    alt: "Limitless Trading hero background",
    category: "Photography",
    usedOn: "Homepage · Hero",
    format: "PNG",
    filename: "hero-background.png",
    fit: "cover",
  },
  {
    id: "founder",
    src: "/founder-portrait.png",
    title: "Founder Portrait",
    alt: "Limitless Trading founder — London, UK",
    category: "Photography",
    usedOn: "About · Homepage",
    format: "PNG",
    filename: "founder-portrait.png",
    fit: "cover",
  },
  {
    id: "package-01",
    src: "/package-01-vip-community.png",
    title: "Package 01 — VIP Community",
    alt: "VIP community and signals package imagery",
    category: "Photography",
    usedOn: "Homepage · Ecosystem",
    format: "PNG",
    filename: "package-01-vip-community.png",
    fit: "cover",
  },
  {
    id: "package-02",
    src: "/package-02-funded-trading.png",
    title: "Package 02 — Funded Trading",
    alt: "Fast tracked funded trading package imagery",
    category: "Photography",
    usedOn: "Homepage · Ecosystem",
    format: "PNG",
    filename: "package-02-funded-trading.png",
    fit: "cover",
  },
  {
    id: "package-03",
    src: "/package-03-fund-management.png",
    title: "Package 03 — Fund Management",
    alt: "Automated trading and VIP fund management imagery",
    category: "Photography",
    usedOn: "Homepage · Ecosystem",
    format: "PNG",
    filename: "package-03-fund-management.png",
    fit: "cover",
  },
  {
    id: "dee-01",
    src: "/dee-portrait-01.png",
    title: "Dee — Portrait 01",
    alt: "Limitless Trading portrait",
    category: "Photography",
    usedOn: "Homepage · Live",
    format: "PNG",
    filename: "dee-portrait-01.png",
    fit: "cover",
  },
  {
    id: "dee-02",
    src: "/dee-portrait-02.png",
    title: "Dee — Portrait 02",
    alt: "Limitless Trading portrait",
    category: "Photography",
    usedOn: "Homepage · FAQ",
    format: "PNG",
    filename: "dee-portrait-02.png",
    fit: "cover",
  },

  // ── Editorial ──────────────────────────────────────────────────────────────
  // Third-party stock (Unsplash) used as article artwork — licensed to Unsplash
  // terms, not Limitless-owned. Kept in its own category so it is obvious.
  {
    id: "editorial-systematic",
    src: "/editorial-systematic-trading.jpg",
    title: "Systematic Trading",
    alt: "Systematic trading chart",
    category: "Editorial",
    usedOn: "Homepage · Insights",
    format: "JPG",
    filename: "editorial-systematic-trading.jpg",
    fit: "cover",
  },
  {
    id: "editorial-psychology",
    src: "/editorial-trading-psychology.jpg",
    title: "Trading Psychology",
    alt: "Trading psychology and decision systems",
    category: "Editorial",
    usedOn: "Homepage · Insights",
    format: "JPG",
    filename: "editorial-trading-psychology.jpg",
    fit: "cover",
  },
  {
    id: "editorial-risk",
    src: "/editorial-risk-adjusted-returns.jpg",
    title: "Risk-Adjusted Returns",
    alt: "Risk-adjusted returns visualization",
    category: "Editorial",
    usedOn: "Homepage · Insights",
    format: "JPG",
    filename: "editorial-risk-adjusted-returns.jpg",
    fit: "cover",
  },
];

export const galleryAssetById = new Map(galleryAssets.map((a) => [a.id, a]));

/** Categories that actually have assets, in manifest order. */
export const activeGalleryCategories = GALLERY_CATEGORIES.filter((c) =>
  galleryAssets.some((a) => a.category === c)
);
