"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

const testimonials = [
  {
    initial: "S",
    name: "Sarah M.",
    sub: "Inner Circle Member",
    tag: "AUTOMATED EXECUTION",
    quote: "The auto-trader does what I never could consistently — stay disciplined, 24 hours a day.",
  },
  {
    initial: "M",
    name: "Michael R.",
    sub: "Member · 8 months",
    tag: "VIP COMMUNITY",
    quote: "Genuinely exclusive. You feel you've been let into something most people never see.",
  },
  {
    initial: "E",
    name: "Emily T.",
    sub: "Managed Capital Client",
    tag: "FUND MANAGEMENT",
    quote: "Hands-off, transparent and consistent. Finally a team that treats my capital like their own.",
  },
  {
    initial: "D",
    name: "David L.",
    sub: "Member · 2 years",
    tag: "EDUCATION",
    quote: "From knowing nothing to managing a real account. Limitless gave me the foundation.",
  },
];

export default function ClientStories() {
  return (
    <section id="stories" className="py-16 sm:py-32 lg:py-40 bg-void overflow-hidden">
      {/* Header */}
      <Reveal>
        <div className="gutter text-center mb-10 sm:mb-16">
          <p className="mono text-[10px] text-gold tracking-[0.3em] mb-6">
            TRUSTED BY SERIOUS TRADERS
          </p>
          <h2
            className="display text-white mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 72px)", lineHeight: 1.1, fontWeight: 700 }}
          >
            Discipline. Community. Real results.
          </h2>
          <p
            className="text-gold"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(20px, 4vw, 56px)",
              lineHeight: 1.2,
            }}
          >
            They trade with Limitless.
          </p>
        </div>
      </Reveal>

      {/* Cards — horizontal scroll on mobile, 4-col on desktop */}
      <div className="gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col gap-5 p-6 h-full"
              style={{
                background: "#140c08",
                border: "1px solid #2a1f15",
                borderRadius: "12px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "#4a3520" }}
            >
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "1px solid var(--gold)",
                      background: "transparent",
                    }}
                  >
                    <span
                      className="display font-bold text-gold"
                      style={{ fontSize: "18px" }}
                    >
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="display font-semibold text-white text-[15px]">{t.name}</p>
                    <p className="text-text-soft text-[12px] mt-0.5">{t.sub}</p>
                  </div>
                </div>

                {/* Tag pill */}
                <div className="self-start">
                  <span
                    className="mono text-[9px] text-text-soft tracking-[0.15em] px-3 py-1.5"
                    style={{
                      border: "1px solid #2a1f15",
                      borderRadius: "999px",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-white leading-relaxed flex-1"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
