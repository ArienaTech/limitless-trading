"use client";

import Reveal from "./Reveal";

// ─── Risk Disclaimer ──────────────────────────────────────────────────────────
// Section shell ready for the client's final risk disclaimer copy (open item).
// Replace the placeholder paragraphs below when the approved wording is supplied.

const placeholderParagraphs = [
  "Trading forex and other leveraged financial products carries a high level of risk and may not be suitable for all investors. You could lose some or all of your invested capital, so you should not invest money that you cannot afford to lose.",
  "Limitless Trading Group provides education and works alongside trusted, licensed partners and brokers. Nothing on this website constitutes financial, investment, or trading advice, or a recommendation to buy or sell any financial instrument.",
  "Past performance is not a reliable indicator of future results. Any examples, results, or testimonials shown are for illustration only and are not a guarantee of future performance.",
];

export default function RiskDisclaimer() {
  return (
    <section
      id="risk-disclaimer"
      aria-label="Risk disclaimer"
      className="bg-void-2 border-y border-border"
    >
      <div className="gutter py-16 sm:py-24">
        <Reveal>
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
            RISK DISCLAIMER
          </span>
          <h2
            className="display uppercase text-text mb-8"
            style={{ fontSize: "clamp(26px, 4vw, 52px)", lineHeight: 1 }}
          >
            Understand the risk.
          </h2>
        </Reveal>

        <Reveal index={1}>
          <div className="max-w-3xl flex flex-col gap-4">
            {/* PLACEHOLDER COPY — replace with client-supplied risk disclaimer. */}
            {placeholderParagraphs.map((p, i) => (
              <p key={i} className="text-text-soft text-[13px] sm:text-[14px] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
