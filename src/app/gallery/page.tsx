import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import { SITE_URL } from "../../siteConfig";
import { galleryAssets } from "../../galleryAssets";

export const metadata: Metadata = {
  title: "Gallery — Brand, Partner & Photography Assets | Limitless Trading",
  description:
    "Every image used across the Limitless Trading site — logos, partner marks, photography and editorial artwork — viewable in one place and downloadable individually or as a single ZIP.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Limitless Trading — Image Gallery",
    description:
      "Browse and download the full set of images used across the Limitless Trading site.",
    url: `${SITE_URL}/gallery`,
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/gallery`,
  url: `${SITE_URL}/gallery`,
  name: "Limitless Trading Gallery",
  description:
    "The complete set of images used across the Limitless Trading site, available to download.",
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  associatedMedia: galleryAssets.map((asset) => ({
    "@type": "ImageObject",
    name: asset.title,
    description: asset.alt,
    contentUrl: asset.src.startsWith("/") ? `${SITE_URL}${asset.src}` : asset.src,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <div className="bg-void text-text min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden gutter pt-40 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #f3e7e7 0%, #faf6f1 55%, #fff 100%)" }}
          />
          <div className="relative z-10">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">BRAND & MEDIA</span>
            <h1
              className="display uppercase text-text mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92 }}
            >
              The gallery.
              <br />
              <span className="text-gold">Yours to take.</span>
            </h1>
            <p className="text-text-soft text-[16px] max-w-xl leading-relaxed">
              Every image used across the Limitless site — the wordmark, partner logos,
              photography, and editorial artwork — in one place. Download any single asset,
              or take the whole set as a ZIP.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="gutter py-24 bg-void">
          <Gallery />

          {/* Usage note — the editorial images are licensed stock, not ours. */}
          <p className="mono text-[9px] text-text-dim leading-relaxed max-w-2xl mt-16">
            Brand and partner marks are provided for press and partner use — please do not
            alter, recolour, or stretch them. Editorial images are third-party stock supplied
            under Unsplash licence terms and are not owned by Limitless Trading.
          </p>

          <div className="mt-16 border border-gold/30 bg-surface p-10 text-center">
            <p className="display font-bold text-text text-[22px] mb-3">
              Need an asset that isn&apos;t here?
            </p>
            <p className="text-text-soft text-[14px] mb-8 max-w-md mx-auto">
              Press kits, partner co-branding, and higher-resolution originals are available
              on request.
            </p>
            <Link
              href="/#apply"
              className="btn-gold-solid mono px-8 py-4 inline-block text-[11px] tracking-[0.15em]"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
