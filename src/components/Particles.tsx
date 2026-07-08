"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
  phase: number;
}

/** Lightweight gold-dust particle field. Single canvas, transform-free,
 *  pauses off-screen and when the tab is hidden. Disabled entirely for
 *  reduced-motion users. */
export default function Particles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const count = Math.min(70, Math.floor(rect.width / 22));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (0.6 + Math.random() * 1.3) * dpr,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: -(0.04 + Math.random() * 0.12) * dpr,
        o: 0.12 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // gentle repel around the pointer
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const range = 120 * dpr;
        if (d2 < range * range && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = ((range - d) / range) * 0.6;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
        if (p.y < -4) p.y = canvas.height + 4;
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
        const twinkle = 0.65 + 0.35 * Math.sin(p.phase + t * 0.0012);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(154, 123, 46, ${p.o * twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    size();
    start();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", size);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", size);
    };
  }, [reduced]);

  if (reduced) return null;

  return <canvas ref={canvasRef} aria-hidden="true" className={className ?? "absolute inset-0 w-full h-full"} />;
}
