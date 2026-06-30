import Image from "next/image";
import { insights } from "../data";
import Reveal from "./Reveal";

const insightImages = [
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    alt: "Systematic trading chart",
  },
  {
    src: "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?auto=format&fit=crop&w=800&q=80",
    alt: "Trading psychology and decision systems",
  },
  {
    src: "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?auto=format&fit=crop&w=800&q=80",
    alt: "Risk-adjusted returns visualization",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="gutter py-24 sm:py-32 bg-void-2">
      <Reveal>
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">MEMBER INTELLIGENCE</span>
        <h2
          className="display uppercase text-text mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          The Edge Is
          <br />
          <span className="text-gold">In the Knowledge.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] mb-16 max-w-xl leading-relaxed">
          Members receive weekly intelligence reports, live trade breakdowns, and institutional-grade 
          education. This isn&apos;t content — it&apos;s the framework that separates serious traders from the rest.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, i) => (
          <Reveal key={insight.index} index={i}>
            <article className="mix-card bg-surface border border-border h-full flex flex-col group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={insightImages[i].src}
                  alt={insightImages[i].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-void/50" />
                <span className="absolute top-3 left-3 mono text-[9px] text-gold">{insight.category}</span>
                <span className="absolute top-3 right-3 mono text-[9px] text-text-dim">{insight.readTime}</span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="display font-medium text-[15px] text-white leading-snug flex-1">
                  {insight.title}
                </h3>
                <p className="text-text-soft text-[12px] leading-relaxed">{insight.excerpt}</p>
                <a href="#apply" className="mono text-[10px] text-gold link-underline self-start mt-2">
                  Unlock as a member →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Soft CTA nudge */}
      <Reveal>
        <div className="mt-16 border border-border bg-surface p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="display font-bold text-white text-[18px] mb-1">Ready to trade with an edge?</p>
            <p className="text-text-soft text-[13px]">Members get full access to every report, live session, and trade breakdown.</p>
          </div>
          <a href="#apply" className="btn-gold mono px-6 py-3 shrink-0 inline-block">
            Apply for Access →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
