import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles } from "./articles";
import { SITE_URL } from "../../siteConfig";

export const metadata: Metadata = {
  title: "Insights — Systematic Trading Education & Market Intelligence | Limitless",
  description:
    "Institutional-grade trading education from Limitless. Guides on systematic trading, forex risk management, algorithmic execution, and the psychology of consistent performance.",
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    title: "Limitless Insights — Systematic Trading Education",
    description: "Guides, frameworks, and market intelligence for serious traders.",
    url: `${SITE_URL}/insights`,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/insights#blog`,
  name: "Limitless Insights",
  description:
    "Institutional-grade trading education and market intelligence from Limitless Trading Group.",
  url: `${SITE_URL}/insights`,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    url: `${SITE_URL}/insights/${a.slug}`,
    articleSection: a.category,
    datePublished: a.date,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
  ],
};

export default function InsightsPage() {
  return (
    <div className="bg-void text-text min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden gutter pt-40 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #f3e7e7 0%, #faf6f1 55%, #fff 100%)" }}
          />
          <div className="relative z-10">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">MEMBER INTELLIGENCE</span>
            <h1
              className="display uppercase text-text mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92 }}
            >
              The edge is in
              <br />
              <span className="text-gold">the knowledge.</span>
            </h1>
            <p className="text-text-soft text-[16px] max-w-xl leading-relaxed">
              Institutional-grade education, market intelligence, and frameworks for serious traders.
              Full access available to Limitless members.
            </p>
          </div>
        </section>

        <section className="gutter py-24 bg-void">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.slug} className="bg-surface border border-border flex flex-col group hover:border-gold transition-colors duration-300">
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[9px] text-gold">{article.category}</span>
                    <span className="mono text-[9px] text-text-dim">{article.readTime}</span>
                  </div>
                  <h2 className="display font-medium text-[17px] text-text leading-snug flex-1">
                    {article.title}
                  </h2>
                  <p className="text-text-soft text-[13px] leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="mono text-[9px] text-text-dim">{article.date}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="mono text-[10px] text-gold link-underline"
                      aria-label={`Read more: ${article.title}`}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border border-gold/30 bg-surface p-10 text-center">
            <p className="display font-bold text-text text-[22px] mb-3">Want full access to every insight?</p>
            <p className="text-text-soft text-[14px] mb-8 max-w-md mx-auto">Members receive weekly intelligence reports, live trade breakdowns, and the complete Limitless Framework library.</p>
            <Link href="/#apply" className="btn-gold-solid mono px-8 py-4 inline-block text-[11px] tracking-[0.15em]">Apply for Access →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
