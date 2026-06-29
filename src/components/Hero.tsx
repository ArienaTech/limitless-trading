import { motion } from "motion/react";
import Waveform from "./Waveform";

const topBar = [
  "VØID",
  "DJ / PRODUCER",
  "BERLIN, DE",
  "BOOKING OPEN",
  "▸ SPRING TOUR 2026",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {/*
          Video brief: DJ performing at a dark club, turntables in foreground,
          crowd silhouettes backlit by strobe, slow motion, extremely dark and
          cinematic. Drop the file at /public/hero.mp4 to enable.
        */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.18, mixBlendMode: "screen" }}
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, transparent 30%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #000 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Waveform */}
      <Waveform count={80} />

      {/* Top bar */}
      <div className="relative z-10 border-b border-border">
        <div className="gutter h-10 flex items-center overflow-hidden">
          <div className="mono text-text-soft text-[10px] flex items-center gap-3 whitespace-nowrap">
            {topBar.map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="text-text-dim">·</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gutter">
        <motion.div
          {...fade(0.1)}
          className="flex items-center gap-2 mb-8"
        >
          <span className="pulse-dot" />
          <span className="mono text-[10px] text-text-soft">
            AVAILABLE FOR BOOKING
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.18)}
          className="glitch display text-white uppercase leading-[0.82]"
          style={{ fontSize: "clamp(72px, 18vw, 260px)" }}
          data-text="VØID"
        >
          VØID
        </motion.h1>

        <motion.div
          {...fade(0.3)}
          className="mt-8 w-full max-w-md flex flex-col items-center gap-5"
        >
          <div className="h-px w-full bg-border" />
          <p
            className="mono text-text-soft text-[11px]"
            style={{ letterSpacing: "0.4em" }}
          >
            TECHNO · INDUSTRIAL · AMBIENT
          </p>
        </motion.div>
      </div>

      {/* Bottom split bar */}
      <motion.div
        {...fade(0.42)}
        className="relative z-10 border-t border-border"
      >
        <div className="gutter py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-text-soft text-[12px]">
            <span className="text-text-dim">NEXT SHOW —</span> FRI 09 MAY /{" "}
            <span className="text-text">FABRIC, LONDON</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#live"
              className="btn-acid mono px-4 py-2"
            >
              TICKETS →
            </a>
            <a
              href="#mixes"
              className="btn-ghost mono px-4 py-2"
            >
              STREAM →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
