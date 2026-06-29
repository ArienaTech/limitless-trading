import { valuePillars } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const pillarImages = [
  "EXECUTE / ALGORITHM",
  "LEARN / INTELLIGENCE",
  "GROW / COMPOUND",
];

const pillarImageDesc = [
  "Close-up of algorithmic trading terminal\nCode scrolling, dark background, gold highlights",
  "Split: analyst reviewing chart data + clean performance graph\nDark, focused, premium",
  "Abstract compound growth curve\nSingle upward line on dark background, minimal",
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
              {/* IMAGE: Unique visual per pillar — see sublabel */}
              <ImagePlaceholder
                label={pillarImages[i]}
                sublabel={pillarImageDesc[i]}
                className="aspect-[16/9]"
              />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-baseline justify-between">
                  <span className="display font-bold text-gold text-[32px]">{pillar.title}</span>
                  <span className="mono text-[10px] text-text-dim">{pillar.index}</span>
                </div>
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
