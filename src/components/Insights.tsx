import Image from "next/image";
import { insights } from "../data";
import Reveal from "./Reveal";

const insightImages = [
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    alt: "Systematic trading chart — consistent trend line",
  },
  {
    src: "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?auto=format&fit=crop&w=800&q=80",
    alt: "The psychology of trading — code and decision systems",
  },
  {
    src: "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?auto=format&fit=crop&w=800&q=80",
    alt: "Risk-adjusted returns — abstract financial data visualization",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="gutter py-24 sm:py-32 bg-void-2">

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Think Before
          <br />
          <span className="text-gold">You Trade.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[14px] mb-16 max-w-xl">
          Members receive weekly market intelligence and trading education. Understanding the framework is the first step.
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
                <a href="#apply" className="mono text-[10px] text-gold link-underline self-start mt-2">
                  Read as a member →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
