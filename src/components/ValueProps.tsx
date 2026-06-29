import { valuePillars } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function ValueProps() {
  return (
    <section id="values" className="gutter py-24 sm:py-32 bg-void-2">
      <SectionLabel index="05" title="VALUE" meta="What you receive as a member" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Three Pillars.
          <br />
          <span className="text-gold">One Framework.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-16">
          Membership with LTG is not access to a product — it is access to a
          complete trading infrastructure. Every element is designed to work
          together, compounding in value over time.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valuePillars.map((pillar, i) => (
          <Reveal key={pillar.index} index={i}>
            <div className="border border-border bg-surface p-8 h-full flex flex-col gap-6 group hover:border-gold transition-colors duration-300">
              <div className="flex items-start justify-between">
                <span className="display font-bold text-gold" style={{ fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 1 }}>
                  {pillar.title}
                </span>
                <span className="mono text-[10px] text-text-dim">{pillar.index}</span>
              </div>

              <div className="h-px w-full bg-border group-hover:bg-gold transition-colors duration-300" />

              <p className="mono text-[10px] text-gold">{pillar.tagline}</p>

              <p className="text-text-soft text-[14px] leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
