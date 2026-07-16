"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Waveform from "./Waveform";
import Particles from "./Particles";
import Magnetic from "./Magnetic";

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
  { display: <Counter to={5} suffix="M+" />, label: "Capital Managed", prefix: "$" },
  { display: <Counter to={1000} suffix="+" />, label: "Active Members" },
];

// Single letter reveal
function AnimatedLetter({ char, index }: { char: string; index: number }) {
  return (
    <motion.span
      style={{
        display: "inline-block",
        color: "var(--text)",
      }}
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + index * 0.04,
      }}
    >
      {char}
    </motion.span>
  );
}

function AnimatedHeadline() {
  const letters = "Limitless".split("");

  return (
    <div
      style={{ position: "relative", display: "inline-block", lineHeight: 0.88 }}
      aria-label="Limitless"
    >
      {/* White magnetic letters — always visible */}
      <h1
        className="display uppercase select-none"
        style={{ fontSize: "clamp(48px, 11vw, 180px)", lineHeight: 0.88, margin: 0, letterSpacing: "0.02em" }}
        aria-hidden="true"
      >
        {letters.map((char, i) => (
          <AnimatedLetter key={i} char={char} index={i} />
        ))}
      </h1>

      {/* Subtle wave shimmer — a soft translucent white band that ripples upward then fades */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        {/* White text inside — same colour so it just reinforces the base layer */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            fontSize: "clamp(48px, 11vw, 180px)",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "var(--text)",
            lineHeight: 0.88,
            whiteSpace: "nowrap",
          }}
        >
          Limitless
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll cinematics — background sinks and zooms, content lifts and fades
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Mouse parallax — layers drift at different depths
  const mx = useSpring(0, { stiffness: 55, damping: 18, mass: 0.6 });
  const my = useSpring(0, { stiffness: 55, damping: 18, mass: 0.6 });
  const bgMX = useTransform(mx, (v) => v * -1);
  const bgMY = useTransform(my, (v) => v * -1);
  const fgMX = useTransform(mx, (v) => v * 0.45);
  const fgMY = useTransform(my, (v) => v * 0.45);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Limitless Trading — Systematic Forex Trading"
      className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col pt-16"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }} aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={{ x: bgMX, y: bgMY }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/hero_bg.png"
            alt=""
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.85)" }}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.55)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #ffffff 0%, transparent 45%)" }} />
        <div className="aurora absolute left-1/2 top-1/3 w-[70vw] h-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <Particles />
      </motion.div>

      <Waveform count={80} />

      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gutter px-5 sm:px-8"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: 0.15 }}
          style={{ x: fgMX, y: fgMY }}
        >
          <AnimatedHeadline />
        </motion.div>

        <motion.p {...fade(0.5)} className="text-text-soft text-[15px] sm:text-[18px] mt-5 sm:mt-6 max-w-sm sm:max-w-lg leading-relaxed">
          Learn first, execute second, scale forever.
        </motion.p>

        <motion.div {...fade(0.62)} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Magnetic className="block w-full sm:w-auto" strength={8}>
            <motion.a
              href="#apply"
              className="btn-gold-solid mono px-6 sm:px-8 py-3 sm:py-4 inline-block text-[10px] sm:text-[11px] tracking-[0.15em] w-full sm:w-auto text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Apply for Access →
            </motion.a>
          </Magnetic>
          <Magnetic strength={6} ripple={false}>
            <a
              href="#strategy"
              className="mono text-[10px] sm:text-[11px] text-text-soft hover:text-gold transition-colors tracking-[0.1em]"
            >
              See How It Works ↓
            </a>
          </Magnetic>
        </motion.div>

        <motion.p {...fade(0.72)} className="mono text-[8px] sm:text-[9px] text-text-dim mt-4 sm:mt-5 tracking-[0.08em] sm:tracking-[0.1em] px-4 text-center">
          BY APPLICATION ONLY · NO UPFRONT PAYMENT · FULLY CONFIDENTIAL
        </motion.p>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 border-t border-border"
        role="region"
        aria-label="Trust statistics"
      >
        <div className="gutter py-5 sm:py-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-0 max-w-2xl mx-auto">
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
