"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const beliefs = [
  "Most traders lose — not from lack of intelligence, but lack of process.",
  "Process removes emotion. Emotion is what kills accounts.",
  "Discipline applied consistently is the only edge that compounds.",
  "We built the system so you don't have to fight yourself.",
];

function MaskedHeadline() {
  const lines = [
    { text: "Winners don't leave it", color: "text-white" },
    { text: "to chance.", color: "text-gold" },
  ];
  return (
    <h2
      className="display uppercase mx-auto"
      style={{ fontSize: "clamp(32px, 7vw, 100px)", lineHeight: 0.92, maxWidth: "900px" }}
      aria-label="Winners don't leave it to chance."
    >
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            className={line.color}
            style={{ display: "block" }}
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-void">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% 0%, #4A0808 0%, #1E0000 50%, #000000 100%)" }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 60%, #000 100%)" }}
      />

      {/* Opening Statement */}
      <div className="relative z-10 gutter pt-24 sm:pt-36 pb-16 sm:pb-24 text-center border-b border-border">
        <Reveal>
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6 sm:mb-8">
            THE LIMITLESS PHILOSOPHY
          </span>
        </Reveal>
        <MaskedHeadline />
        <motion.p
          className="text-text-soft text-[14px] sm:text-[15px] mt-6 sm:mt-8 mx-auto max-w-xl leading-relaxed px-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          The market doesn&apos;t care how smart you are. It rewards systems, not intentions.
          This is the philosophy every Limitless member trades by.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 gutter py-16 sm:py-32 lg:py-40">
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <h2
              className="display uppercase text-white mb-5"
              style={{ fontSize: "clamp(36px, 6vw, 82px)", lineHeight: 0.95 }}
            >
              Built on
              <br />
              <span className="text-gold">Four Truths.</span>
            </h2>
            <p className="text-text-soft text-[14px] mb-8 leading-relaxed max-w-md">
              Every decision Limitless makes — every system, every trade, every member we accept —
              is built on these four principles. They&apos;re not motivational. They&apos;re structural.
            </p>

            <div className="flex flex-col gap-0 border-t border-border">
              {beliefs.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 sm:gap-5 py-4 sm:py-5 border-b border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <motion.span
                    className="mono text-[10px] text-gold mt-1 shrink-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    0{i + 1}
                  </motion.span>
                  <span className="display font-medium text-white text-[15px] sm:text-[18px] leading-snug">{line}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 sm:gap-10 mt-8 sm:mt-10 flex-wrap">
              {[
                { value: "2014", label: "Founded" },
                { value: "$2.4B+", label: "Capital managed" },
                { value: "847", label: "Active members" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="display text-gold font-bold" style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>{stat.value}</div>
                  <div className="label mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal index={1} className="lg:mt-8">
            <motion.div
              className="relative w-full overflow-hidden border border-border"
              style={{ aspectRatio: "4/5", maxHeight: "600px" }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/LTG%20Trading%20Founder.png"
                alt="Limitless Trading — Founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-void/10" style={{ backdropFilter: "brightness(1.1)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <span className="mono text-[9px] block" style={{ color: "#4a4a4a" }}>LIMITLESS TRADING · FOUNDER</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
