"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
  /** Lift (px) applied on hover. */
  lift?: number;
  radius?: number;
}

/** Perspective tilt card with a pointer-tracking glare highlight. */
export default function TiltCard({ children, className, max = 5, lift = 6, radius = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rx = useSpring(0, { stiffness: 160, damping: 18, mass: 0.5 });
  const ry = useSpring(0, { stiffness: 160, damping: 18, mass: 0.5 });
  const ty = useSpring(0, { stiffness: 260, damping: 22 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glow = useSpring(0, { stiffness: 200, damping: 25 });

  const glare = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(255, 252, 240, 0.32), transparent 62%)`;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
    gx.set((px + 0.5) * 100);
    gy.set((py + 0.5) * 100);
  };

  const onMouseEnter = () => {
    ty.set(-lift);
    glow.set(1);
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
    ty.set(0);
    glow.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className ?? ""}`}
      style={{ rotateX: rx, rotateY: ry, y: ty, transformPerspective: 1100, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: glare, opacity: glow, borderRadius: radius }}
      />
    </motion.div>
  );
}
