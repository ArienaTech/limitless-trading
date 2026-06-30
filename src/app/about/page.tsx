import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About Limitless — Our Story, Philosophy & Team | London, UK",
  description:
    "Founded in London in 2014, Limitless is a systematic trading firm built on one belief: process beats prediction. Meet the founder and learn how we built a decade of consistent, rules-based performance.",
  alternates: { canonical: "https://limitlesstrading.com/about" },
  openGraph: {
    title: "About Limitless Trading — Founded 2014, London UK",
    description: "Our story, our philosophy, and the team behind twelve years of systematic trading.",
    url: "https://limitlesstrading.com/about",
  },
};

const timeline = [
  { year: "2014", event: "Limitless founded in London. First systematic strategy goes live." },
  { year: "2016", event: "FCA authorisation achieved. First external capital managed." },
  { year: "2018", event: "Inner Circle education programme launched. First 50 members enrolled." },
  { year: "2020", event: "Automated execution engine upgraded. Coverage expanded to 24/7 global markets." },
  { year: "2022", event: "ISO 27001 security certification achieved. $1B+ capital milestone reached." },
  { year: "2024", event: "Global membership passes 800. Managed Capital programme opened to qualifying members." },
  { year: "2026", event: "Limitless rebrand. New platform. Same systematic edge." },
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
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #4A0808 0%, #1E0000 50%, #000 100%)" }}
          />
          <div className="relative z-10 max-w-4xl">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">ABOUT LIMITLESS</span>
            <h1
              className="display uppercase text-white mb-8"
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
                className="display uppercase text-white mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95 }}
              >
                A trader who
                <br />
                <span className="text-gold">built the system</span>
                <br />
                he needed.
              </h2>
              <div className="flex flex-col gap-5 text-text-soft text-[15px] leading-relaxed">
                <p>
                  The founder of Limitless began trading the London forex markets in the early 2000s. 
                  Like most traders, the first years were defined by discretionary decisions, emotional 
                  exits, and the humbling reality that intelligence alone is not an edge.
                </p>
                <p>
                  The turning point came not from a better indicator or a secret strategy — it came 
                  from accepting that the human brain is simply not built for consistent high-frequency 
                  decision-making under pressure. The answer was to build a system that didn&apos;t need him.
                </p>
                <p>
                  By 2014, the systematic framework that would become Limitless was live. FCA authorisation 
                  followed in 2016. Twelve years later, the same rules-based philosophy underpins every 
                  trade executed, every member trained, and every pound of capital managed.
                </p>
              </div>

              <div className="flex gap-10 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>12+</div>
                  <div className="label mt-1">Years trading</div>
                </div>
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>FCA</div>
                  <div className="label mt-1">Authorised</div>
                </div>
                <div>
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>847</div>
                  <div className="label mt-1">Members</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
              <Image
                src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/LTG%20Trading%20Founder.png"
                alt="Limitless Trading founder — London, UK"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-void/10" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
              <div className="absolute bottom-5 left-5">
                <span className="mono text-[9px] block" style={{ color: "#4a4a4a" }}>LIMITLESS TRADING · FOUNDER</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="gutter py-32 bg-void-2">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">WHAT WE STAND FOR</span>
          <h2
            className="display uppercase text-white mb-16"
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
                <h3 className="display font-bold text-white text-[22px] mb-4">{v.title}</h3>
                <p className="text-text-soft text-[14px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="gutter py-32 bg-void">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">COMPANY HISTORY</span>
          <h2
            className="display uppercase text-white mb-16"
            style={{ fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 0.95 }}
          >
            Twelve years.
            <br />
            <span className="text-gold">One system.</span>
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
            className="display uppercase text-white mb-6"
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
