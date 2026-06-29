import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const failureReasons = [
  { num: "01", title: "Emotional decision-making" },
  { num: "02", title: "Overtrading" },
  { num: "03", title: "Inconsistent execution" },
  { num: "04", title: "Poor risk management" },
  { num: "05", title: "No systematic framework" },
];

export default function Strategy() {
  return (
    <section id="strategy" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="04" title="STRATEGY" meta="The problem we solve" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <h2
            className="display uppercase text-text mb-4"
            style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
          >
            Why Most Traders
            <br />
            <span className="text-gold">Fail.</span>
          </h2>
          <p className="text-text-soft text-[14px] mb-10">
            Over 80% of individual traders lose money over any rolling five-year period. The reason is rarely a lack of intelligence. It is the absence of a system.
          </p>

          <div className="border-t border-border">
            {failureReasons.map((reason) => (
              <div key={reason.num} className="show-card border-b border-border py-4 flex items-center gap-5">
                <span className="mono text-[11px] text-gold shrink-0">{reason.num}</span>
                <span className="display font-medium text-[16px] text-white">{reason.title}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal index={1}>
          {/* IMAGE: Two-panel contrast image.
              Left half: stressed trader, red screens, cluttered desk, harsh light.
              Right half: clean trading dashboard, upward chart, calm dark environment.
              No text on image. Colour split: red/warm left, gold/dark right.
              OR: Abstract — chaos of random charts vs. single clean trend line. */}
          <ImagePlaceholder
            label="CONTRAST / PROBLEM vs SOLUTION"
            sublabel="Left: stressed trader, red screens, chaos&#10;Right: clean dashboard, upward trend, calm environment"
            className="aspect-[4/3] w-full mb-8"
          />

          <div className="border border-gold/30 bg-surface p-8">
            <span className="mono text-[10px] text-gold block mb-4">THE LTG DIFFERENCE</span>
            <h3
              className="display uppercase text-white mb-6"
              style={{ fontSize: "clamp(24px, 3vw, 42px)", lineHeight: 0.95 }}
            >
              Process eliminates the problem.
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Rules-based systematic execution — no improvisation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Algorithms act in milliseconds — emotion removed entirely</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Independent risk controls and daily oversight — always within limits</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
