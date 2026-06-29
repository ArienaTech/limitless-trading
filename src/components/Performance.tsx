import { metrics } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const transparencyItems = [
  {
    title: "Risk Management",
    body: "Every strategy operates within pre-defined risk parameters. Automated kill-switches trigger on drawdown thresholds. No single position exceeds defined exposure limits.",
  },
  {
    title: "Execution Methodology",
    body: "Rules-based algorithmic execution across multiple venues. Every order is routed for best execution. Full audit trail available on request.",
  },
  {
    title: "Reporting",
    body: "Daily P&L reports delivered to every member. Monthly strategy reviews. Quarterly audited performance statements. No black boxes.",
  },
  {
    title: "Security & Compliance",
    body: "Client assets held in segregated accounts at regulated custodians. FCA authorised. ISO 27001 certified. Annual third-party security audits.",
  },
];

export default function Performance() {
  return (
    <section id="performance" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="07" title="PERFORMANCE" meta="Operational metrics & transparency" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Measurable.
          <br />
          <span className="text-gold">Transparent.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-16">
          We do not make promises about future returns. We publish the metrics that
          demonstrate the quality of our infrastructure, execution, and operations.
          These are the numbers that matter.
        </p>
      </Reveal>

      {/* Operational metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border mb-20">
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} index={i}>
            <div className="bg-void p-6 flex flex-col gap-2">
              <span
                className="display font-bold text-gold"
                style={{ fontSize: "clamp(22px, 2.5vw, 36px)", lineHeight: 1 }}
              >
                {metric.value}
              </span>
              <span className="display font-medium text-white text-[13px] leading-snug">
                {metric.label}
              </span>
              <span className="mono text-[9px] text-text-dim mt-1">
                {metric.note}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Transparency breakdown */}
      <Reveal>
        <h3
          className="display uppercase text-white mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 0.95 }}
        >
          Full Transparency.
        </h3>
      </Reveal>

      <div className="border-t border-border">
        {transparencyItems.map((item, i) => (
          <Reveal key={item.title} index={i}>
            <div className="track-row border-b border-border grid grid-cols-1 md:grid-cols-[240px_1fr] items-start gap-4 py-6">
              <span className="display font-medium text-[15px] text-white">
                {item.title}
              </span>
              <span className="text-text-soft text-[14px] leading-relaxed">
                {item.body}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
