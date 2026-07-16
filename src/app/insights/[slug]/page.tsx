import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Reveal from "../../../components/Reveal";
import { articles, articleSlugs, getArticle, type ArticleBlock } from "../articles";
import { SITE_URL } from "../../../siteConfig";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Insight Not Found" };

  const url = `${SITE_URL}/insights/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["Limitless Trading Group"],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          className="display uppercase text-text mt-14 mb-4"
          style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.05 }}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="display font-medium text-text text-[18px] sm:text-[20px] mt-10 mb-3">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold shrink-0 mt-2.5" aria-hidden="true" />
              <span className="text-text-soft text-[15px] sm:text-[16px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-gold pl-6 my-10">
          <p
            className="display font-medium text-text"
            style={{ fontSize: "clamp(19px, 2.4vw, 26px)", lineHeight: 1.3 }}
          >
            {block.text}
          </p>
        </blockquote>
      );
    default:
      return (
        <p className="text-text-soft text-[15px] sm:text-[16px] leading-relaxed my-5 max-w-2xl">
          {block.text}
        </p>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/insights/${article.slug}`;
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Limitless Trading Group", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Limitless Trading Group",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/logo3.svg",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <div className="bg-void text-text min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <article className="gutter pt-32 sm:pt-40 pb-16 sm:pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 mono text-[10px] text-text-dim">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/insights" className="hover:text-gold transition-colors">Insights</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gold" aria-current="page">{article.category}</li>
            </ol>
          </nav>

          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono text-[10px] text-gold tracking-[0.2em]">{article.category}</span>
              <span className="mono text-[10px] text-text-dim">{article.readTime}</span>
              <span className="mono text-[10px] text-text-dim">{article.date}</span>
            </div>
            <h1
              className="display uppercase text-text mb-6"
              style={{ fontSize: "clamp(30px, 5.5vw, 68px)", lineHeight: 0.98 }}
            >
              {article.title}
            </h1>
            <p className="text-text-soft text-[16px] sm:text-[18px] leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Key takeaways — answer-first block for AEO/GEO */}
          <aside
            className="max-w-2xl border border-gold/30 bg-surface p-6 sm:p-8 mb-12"
            aria-label="Key takeaways"
          >
            <span className="mono text-[10px] text-gold tracking-[0.2em] block mb-4">KEY TAKEAWAYS</span>
            <ul className="flex flex-col gap-3">
              {article.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mono text-[11px] text-gold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-text-soft text-[14px] sm:text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Body */}
          <div>
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Compliance note */}
          <p className="mono text-[10px] text-text-dim leading-relaxed max-w-2xl mt-14 pt-6 border-t border-border">
            This article is for educational purposes only and does not constitute financial,
            investment, or trading advice. Trading carries a high risk of loss. Past performance is
            not a reliable indicator of future results.
          </p>
        </article>

        {/* Conversion CTA */}
        <section className="gutter pb-24" aria-label="Apply for access">
          <Reveal scale className="border border-gold/30 bg-surface p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <p className="display font-bold text-text text-[22px] sm:text-[26px] mb-3">
              Put the theory into practice.
            </p>
            <p className="text-text-soft text-[14px] sm:text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
              Members get the complete Limitless Framework library, weekly intelligence reports, and
              live trade breakdowns. By application only — no upfront payment.
            </p>
            <Link href="/#apply" className="btn-gold-solid mono px-8 py-4 inline-block text-[11px] tracking-[0.15em]">
              Apply for Access →
            </Link>
          </Reveal>
        </section>

        {/* Related reading — internal linking for SEO */}
        <section className="gutter pb-28" aria-label="Related insights">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">CONTINUE READING</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((a, i) => (
              <Reveal key={a.slug} index={i}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="bg-surface border border-border hover:border-gold transition-colors duration-300 p-6 flex flex-col gap-3 group h-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-[9px] text-gold">{a.category}</span>
                    <span className="mono text-[9px] text-text-dim">{a.readTime}</span>
                  </div>
                  <h2 className="display font-medium text-[17px] text-text leading-snug group-hover:text-gold transition-colors">
                    {a.title}
                  </h2>
                  <span className="mono text-[10px] text-gold link-underline mt-2">Read more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
