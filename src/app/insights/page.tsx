import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Insights — Systematic Trading Education & Market Intelligence | Limitless",
  description:
    "Institutional-grade trading education from Limitless. Guides on systematic trading, forex risk management, algorithmic execution, and the psychology of consistent performance.",
  alternates: { canonical: "https://limitlesstrading.com/insights" },
  openGraph: {
    title: "Limitless Insights — Systematic Trading Education",
    description: "Guides, frameworks, and market intelligence for serious traders.",
    url: "https://limitlesstrading.com/insights",
  },
};

const articles = [
  {
    slug: "why-systematic-trading-outperforms",
    category: "STRATEGY",
    title: "Why Systematic Trading Outperforms Over the Long Run",
    excerpt: "When the same rules are applied without exception, the compounding effect of consistency becomes mathematically dominant over discretionary approaches.",
    readTime: "6 MIN READ",
    date: "June 2026",
  },
  {
    slug: "anatomy-of-a-bad-trade",
    category: "PSYCHOLOGY",
    title: "The Anatomy of a Bad Trade: How Smart Investors Lose Money",
    excerpt: "Most losses are not caused by poor analysis. They are caused by the human response to uncertainty — reflexive decisions made in the gap between knowing the rules and following them.",
    readTime: "8 MIN READ",
    date: "May 2026",
  },
  {
    slug: "risk-adjusted-returns",
    category: "RISK",
    title: "Risk-Adjusted Returns: The Only Metric That Matters",
    excerpt: "Headline returns are marketing. Sharpe ratio, Sortino ratio, max drawdown — these are the professional standards. Here is how to read them, and why they change everything.",
    readTime: "5 MIN READ",
    date: "May 2026",
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden gutter pt-40 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #3A0606 0%, #0D0000 55%, #000 100%)" }}
          />
          <div className="relative z-10">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">MEMBER INTELLIGENCE</span>
            <h1
              className="display uppercase text-white mb-6"
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
                  <h2 className="display font-medium text-[17px] text-white leading-snug flex-1">
                    {article.title}
                  </h2>
                  <p className="text-text-soft text-[13px] leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="mono text-[9px] text-text-dim">{article.date}</span>
                    <a href={`/insights/${article.slug}`} className="mono text-[10px] text-gold link-underline">
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border border-gold/30 bg-surface p-10 text-center">
            <p className="display font-bold text-white text-[22px] mb-3">Want full access to every insight?</p>
            <p className="text-text-soft text-[14px] mb-8 max-w-md mx-auto">Members receive weekly intelligence reports, live trade breakdowns, and the complete Limitless Framework library.</p>
            <Link href="/#apply" className="btn-gold mono px-8 py-4 inline-block">Apply for Access →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
