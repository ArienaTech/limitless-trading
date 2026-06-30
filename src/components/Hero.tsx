"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Waveform from "./Waveform";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const duration = 1800;
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = eased * to;
            setDisplay(suffix === "%" ? val.toFixed(2) : Math.round(val).toLocaleString());
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, suffix]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const trustStats = [
  { display: <Counter to={2.4} suffix="B+" />, label: "Capital Managed", prefix: "$" },
  { display: <Counter to={847} />, label: "Active Members" },
  { display: <Counter to={12} suffix=" YR" />, label: "Track Record" },
  { display: <Counter to={99.97} suffix="%" />, label: "Platform Uptime" },
];

function AnimatedHeadline() {
  return (
    <h1
      className="display text-white uppercase leading-[0.88]"
      style={{ fontSize: "clamp(48px, 11vw, 180px)" }}
      aria-label="Limitless"
    >
      <span style={{ display: "inline-block", overflow: "hidden" }}>
        <motion.span
          style={{ display: "inline-block" }}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Limitless
        </motion.span>
      </span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Limitless Trading — Systematic Forex Trading"
      className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col pt-16"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 20%, #5C0A0A 0%, #2D0000 45%, #000000 80%)" }}
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.06, mixBlendMode: "screen" }}
          autoPlay loop muted playsInline poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, transparent 50%)" }} />
      </div>

      <Waveform count={80} />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gutter px-5 sm:px-8">
        <motion.div {...fade(0.1)} className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="mono text-[9px] sm:text-[10px] text-text-soft tracking-[0.1em] sm:tracking-[0.15em]">Q3 2026 COHORT — LIMITED SPOTS</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.01, delay: 0.15 }}>
          <AnimatedHeadline />
        </motion.div>

        <motion.p {...fade(0.5)} className="text-text-soft text-[14px] sm:text-[16px] mt-5 sm:mt-6 max-w-sm sm:max-w-lg leading-relaxed">
          Systematic forex trading for serious investors. FCA regulated.
          Founded in London, 2014.
        </motion.p>

        <motion.div {...fade(0.62)} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <motion.a
            href="#apply"
            className="btn-gold mono px-6 sm:px-8 py-3 sm:py-4 inline-block text-[10px] sm:text-[11px] tracking-[0.15em] w-full sm:w-auto text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Apply for Access →
          </motion.a>
          <a
            href="#strategy"
            className="mono text-[10px] sm:text-[11px] text-text-soft hover:text-gold transition-colors tracking-[0.1em]"
          >
            See How It Works ↓
          </a>
        </motion.div>

        <motion.p {...fade(0.72)} className="mono text-[8px] sm:text-[9px] text-text-dim mt-4 sm:mt-5 tracking-[0.08em] sm:tracking-[0.1em] px-4 text-center">
          BY APPLICATION ONLY · NO UPFRONT PAYMENT · FULLY CONFIDENTIAL
        </motion.p>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 border-t border-border"
        role="region"
        aria-label="Trust statistics"
      >
        <div className="gutter py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${i < trustStats.length - 1 ? "md:border-r md:border-border" : ""}`}
            >
              <span className="display text-gold font-bold" style={{ fontSize: "clamp(18px, 3vw, 36px)" }}>
                {stat.prefix}{stat.display}
              </span>
              <span className="label mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
