import Image from "next/image";
import { valuePillars } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

// Algorithmic code terminal / candlestick chart / abstract data growth
const pillarImages = [
  {
    src: "https://images.unsplash.com/photo-1767817099805-d79e31fb968c?auto=format&fit=crop&w=800&q=80",
    alt: "Algorithmic trading code on dark terminal",
  },
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    alt: "Stock market candlestick chart analysis",
  },
  {
    src: "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?auto=format&fit=crop&w=800&q=80",
    alt: "Abstract financial data growth visualization",
  },
];

export default function ValueProps() {
  return (
    <section id="values" className="gutter py-24 sm:py-32 bg-void-2">
      <SectionLabel index="05" title="VALUE" meta="What membership gives you" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-16"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Three Pillars.
          <br />
          <span className="text-gold">One Framework.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valuePillars.map((pillar, i) => (
          <Reveal key={pillar.index} index={i}>
            <div className="border border-border bg-surface h-full flex flex-col group hover:border-gold transition-colors duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={pillarImages[i].src}
                  alt={pillarImages[i].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-void/50" />
                <span className="absolute top-3 right-3 mono text-[9px] text-gold">{pillar.index}</span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="display font-bold text-gold text-[32px]">{pillar.title}</span>
                <div className="h-px w-full bg-border group-hover:bg-gold transition-colors duration-300" />
                <p className="text-text-soft text-[13px] leading-relaxed">{pillar.tagline}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
