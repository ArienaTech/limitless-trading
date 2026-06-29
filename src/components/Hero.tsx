"use client";

import { motion } from "motion/react";
import Waveform from "./Waveform";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const trustStats = [
  { value: "$2.4B+", label: "Capital Managed" },
  { value: "847", label: "Active Members" },
  { value: "12 YR", label: "Track Record" },
  { value: "99.97%", label: "Platform Uptime" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col pt-16"
    >
      <div className="absolute inset-0 z-0">
        {/* Black + deep crimson radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, #5C0A0A 0%, #2D0000 45%, #000000 80%)",
          }}
        />
        {/* Optional video overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.06, mixBlendMode: "screen" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, transparent 50%)" }} />
      </div>

      <Waveform count={80} />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gutter">
        <motion.div {...fade(0.1)} className="flex items-center gap-2 mb-8">
          <span className="pulse-dot" />
          <span className="mono text-[10px] text-text-soft">APPLICATIONS OPEN</span>
        </motion.div>

        <motion.h1
          {...fade(0.18)}
          className="display text-white uppercase leading-[0.88]"
          style={{ fontSize: "clamp(52px, 11vw, 180px)" }}
        >
          Discipline
          <br />
          <span className="text-gold">Compounds.</span>
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="text-text-soft text-[15px] mt-8 max-w-md"
        >
          12 years. FCA regulated. Institutional-grade systematic trading.
        </motion.p>

        <motion.div {...fade(0.4)} className="mt-8 flex items-center gap-3">
          <a href="#apply" className="btn-gold mono px-5 py-3 inline-block">
            Apply for Access →
          </a>
          <a href="#strategy" className="btn-ghost mono px-5 py-3 inline-block">
            Our Approach →
          </a>
        </motion.div>
      </div>

      {/* Trust stats bar */}
      <motion.div {...fade(0.52)} className="relative z-10 border-t border-border">
        <div className="gutter py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < trustStats.length - 1 ? "md:border-r md:border-border" : ""
              }`}
            >
              <span className="display text-gold font-bold" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                {stat.value}
              </span>
              <span className="label mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
