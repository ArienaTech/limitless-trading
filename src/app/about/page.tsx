import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImagePlaceholder from "../../components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Limitless — Our Story, Philosophy & Team | London, UK",
  description:
    "Founded in London in 2023, Limitless Trading Group is an education-first forex community built on one belief: master the individual before mastering the trader. Meet the team and learn what we stand for.",
  alternates: { canonical: "https://limitlesstrading.com/about" },
  openGraph: {
    title: "About Limitless Trading Group — Founded 2023, London UK",
    description: "Our story, our philosophy, and the team behind an education-first trading community.",
    url: "https://limitlesstrading.com/about",
  },
};

// NOTE (client to confirm): milestone copy below is placeholder pending final
// company-history wording. Kept free of regulatory/certification claims.
const timeline = [
  { year: "2023", event: "Limitless Trading Group founded in London on an education-first approach." },
  { year: "2024", event: "VIP community & signals and the LTG trading mastery programme launched." },
  { year: "2025", event: "Partnerships with trusted, licensed brokers. Funded programme introduced." },
  { year: "2026", event: "New platform and rebrand. Automated trading & VIP fund management expanded." },
];

const values = [
  {
    title: "Process over prediction",
    body: "Markets cannot be predicted. They can be systematically navigated. Every decision we make — in trading and in business — is governed by rules, not intuition.",
  },
  {
    title: "Transparency as standard",
    body: "Members receive daily P&L reporting, trade-level attribution, and risk data in real time. If we can't show you the numbers, we don't expect you to trust us.",
  },
  {
    title: "Selective by design",
    body: "We accept a small number of new members each quarter. Not because of capital thresholds — because strategic alignment and mindset matter more than wallet size.",
  },
  {
    title: "Education creates longevity",
    body: "A trader who understands why the system works will stay the course when markets get hard. We invest in your understanding, not just your returns.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden gutter pt-40 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #f3e7e7 0%, #faf6f1 50%, #fff 100%)" }}
          />
          <div className="relative z-10 max-w-4xl">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">ABOUT LIMITLESS</span>
            <h1
              className="display uppercase text-text mb-8"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92 }}
            >
              Built on one
              <br />
              <span className="text-gold">belief.</span>
            </h1>
            <p className="text-text-soft text-[18px] leading-relaxed max-w-2xl">
              Process beats prediction. Discipline compounds. And the traders who win long-term 
              are the ones who remove themselves from the equation. That&apos;s what Limitless is built on.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="gutter py-32 bg-void">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">THE FOUNDER</span>
              <h2
                className="display uppercase text-text mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95 }}
              >
                Traders who
                <br />
                <span className="text-gold">built the system</span>
                <br />
                they needed.
              </h2>
              <div className="flex flex-col gap-5 text-text-soft text-[15px] leading-relaxed">
                <p>
                  The team behind Limitless came up through the forex markets the hard way.
                  Like most traders, the early years were defined by discretionary decisions,
                  emotional exits, and the humbling reality that intelligence alone is not an edge.
                </p>
                <p>
                  The turning point came from a simple realisation: it&apos;s not the strategy a
                  trader uses, but their mindset, psychology, and emotional control that sets them
                  back. The answer was to master the individual before mastering the trader.
                </p>
                <p>
                  In 2023, that philosophy became Limitless Trading Group — an education-first
                  community built on results, trust, transparency, and longevity, working alongside
                  trusted, licensed partners and brokers.
                </p>
              </div>

              <div className="flex gap-10 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>2023</div>
                  <div className="label mt-1">Founded</div>
                </div>
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>1000+</div>
                  <div className="label mt-1">Members</div>
                </div>
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>4</div>
                  <div className="label mt-1">LTG Pillars</div>
                </div>
              </div>
            </div>

            {/* OPEN ITEM (§5): swap for a photo of Dee and his business partner. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <ImagePlaceholder
                label="THE FOUNDERS"
                sublabel="Photo of Dee & business partner — coming soon"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="gutter py-32 bg-void-2">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">WHAT WE STAND FOR</span>
          <h2
            className="display uppercase text-text mb-16"
            style={{ fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 0.95 }}
          >
            The principles
            <br />
            <span className="text-gold">we trade by.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((v, i) => (
              <div key={i} className="bg-void-2 p-10">
                <span className="mono text-[10px] text-gold block mb-4">0{i + 1}</span>
                <h3 className="display font-bold text-text text-[22px] mb-4">{v.title}</h3>
                <p className="text-text-soft text-[14px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="gutter py-32 bg-void">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">COMPANY HISTORY</span>
          <h2
            className="display uppercase text-text mb-16"
            style={{ fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 0.95 }}
          >
            The story
            <br />
            <span className="text-gold">so far.</span>
          </h2>
          <div className="border-t border-border max-w-3xl">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-10 py-6 border-b border-border">
                <span className="display font-bold text-gold text-[18px] shrink-0 w-16">{item.year}</span>
                <span className="text-text-soft text-[14px] leading-relaxed">{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="gutter py-32 bg-void-2 text-center">
          <h2
            className="display uppercase text-text mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95 }}
          >
            Ready to trade
            <br />
            <span className="text-gold">without limits?</span>
          </h2>
          <p className="text-text-soft text-[15px] mb-10 max-w-md mx-auto leading-relaxed">
            We accept a small number of new members each quarter. Applications take 2 minutes.
          </p>
          <Link href="/#apply" className="btn-gold mono px-8 py-4 inline-block">
            Apply for Access →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
