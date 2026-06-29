import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const failureReasons = [
  {
    num: "01",
    title: "Emotional decision-making",
    detail:
      "Fear and greed override analysis. Trades are held too long or closed too early based on how the trader feels, not what the data shows.",
  },
  {
    num: "02",
    title: "Overtrading",
    detail:
      "The compulsion to act — to do something — leads to low-conviction trades that erode capital and compound transaction costs.",
  },
  {
    num: "03",
    title: "Inconsistent execution",
    detail:
      "Good strategies fail when applied intermittently. Rules abandoned during drawdowns or market volatility undo months of disciplined work.",
  },
  {
    num: "04",
    title: "Poor risk management",
    detail:
      "Position sizing errors, undefined stop-loss levels, and uncorrelated exposure accumulation are responsible for the majority of catastrophic losses.",
  },
  {
    num: "05",
    title: "No systematic framework",
    detail:
      "Without a repeatable, testable process, performance cannot be analysed, improved, or trusted. Luck masquerades as skill until conditions change.",
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="04" title="STRATEGY" meta="The problem we solve" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Why Most Traders
          <br />
          <span className="text-gold">Fail.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-12">
          Research consistently shows that over 80% of individual traders lose money
          over any rolling five-year period. The reason is rarely a lack of
          intelligence or effort. It is the absence of a system that removes the
          human element from execution.
        </p>
      </Reveal>

      <div className="border-t border-border mb-16">
        {failureReasons.map((reason, i) => (
          <Reveal key={reason.num} index={i}>
            <div className="show-card border-b border-border py-6 grid grid-cols-1 md:grid-cols-[60px_240px_1fr] items-start gap-4">
              <span className="mono text-[12px] text-gold">{reason.num}</span>
              <span className="display font-medium text-[16px] text-white">
                {reason.title}
              </span>
              <span className="text-text-soft text-[14px] leading-relaxed">
                {reason.detail}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The solution */}
      <Reveal>
        <div className="border border-border bg-surface p-8 sm:p-12">
          <span className="mono text-[10px] text-gold mb-4 block">THE LTG DIFFERENCE</span>
          <h3
            className="display uppercase text-white mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 0.95 }}
          >
            Process Eliminates the Problem.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="mono text-[10px] text-gold mb-2">SYSTEMATIC RULES</div>
              <p className="text-text-soft text-[14px] leading-relaxed">
                Every entry, exit, and position size is determined by a tested, documented ruleset. No improvisation. No exceptions.
              </p>
            </div>
            <div>
              <div className="mono text-[10px] text-gold mb-2">ALGORITHMIC EXECUTION</div>
              <p className="text-text-soft text-[14px] leading-relaxed">
                Algorithms execute decisions in milliseconds, eliminating the hesitation and second-guessing that costs discretionary traders the most.
              </p>
            </div>
            <div>
              <div className="mono text-[10px] text-gold mb-2">CONTINUOUS OVERSIGHT</div>
              <p className="text-text-soft text-[14px] leading-relaxed">
                Independent risk controls, daily reporting, and a formal review process ensure strategies remain within defined parameters at all times.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
