import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const philosophyLines = [
  {
    num: "01",
    statement: "Markets reward consistency — not prediction.",
    detail:
      "The search for the perfect entry, the next big move, the market-beating insight is the wrong pursuit. What compounds over time is consistent application of a sound process.",
  },
  {
    num: "02",
    statement: "Consistency comes from discipline.",
    detail:
      "Discipline is not a personality trait — it is a structural guarantee. Systems are disciplined by design. Humans are disciplined by effort. Only one of these scales.",
  },
  {
    num: "03",
    statement: "Discipline comes from process.",
    detail:
      "A documented, testable, repeatable process converts good intentions into reliable outcomes. Process is the infrastructure that makes performance reproducible.",
  },
  {
    num: "04",
    statement: "Process creates long-term performance.",
    detail:
      "Twelve years of live trading. The same methodology, refined but never abandoned. That continuity — through bull markets, crashes, volatility, and calm — is the proof.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="03" title="PHILOSOPHY" meta="What we believe" />

      <Reveal>
        <h2
          className="display uppercase text-white mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 6vw, 90px)", lineHeight: 0.95 }}
        >
          LTG
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-12">
          LTG Trading was founded in 2014 on the conviction that serious investors
          deserve access to the same systematic, institutional-grade approach that
          the world&rsquo;s best trading desks employ. We are not a fund. We are a
          framework — built on discipline, delivered with transparency.
        </p>
      </Reveal>

      <div className="border-t border-border mb-16">
        {philosophyLines.map((line, i) => (
          <Reveal key={line.num} index={i}>
            <div className="show-card border-b border-border py-8 grid grid-cols-1 md:grid-cols-[60px_1fr_1fr] items-start gap-6">
              <span className="mono text-[12px] text-gold">{line.num}</span>
              <span
                className="display font-medium text-white"
                style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
              >
                {line.statement}
              </span>
              <span className="text-text-soft text-[14px] leading-relaxed">
                {line.detail}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Company stats */}
      <Reveal>
        <div className="flex flex-wrap gap-12 mt-4">
          <div>
            <div className="display text-gold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              2014
            </div>
            <div className="label mt-2">Year founded</div>
          </div>
          <div>
            <div className="display text-gold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              12+
            </div>
            <div className="label mt-2">Years of live trading</div>
          </div>
          <div>
            <div className="display text-gold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              847
            </div>
            <div className="label mt-2">Active members</div>
          </div>
          <div>
            <div className="display text-gold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              $2.4B+
            </div>
            <div className="label mt-2">Capital managed</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
