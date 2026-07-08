"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** How far (px) the element is pulled toward the cursor. */
  strength?: number;
  /** Emit a gold ripple from the click point. */
  ripple?: boolean;
}

/** Magnetic hover wrapper with an optional click ripple.
 *  Pointer-only behaviour — keyboard and touch interactions are untouched. */
export default function Magnetic({ children, className, strength = 10, ripple = true }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 16, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx * strength * 2);
    y.set(ny * strength * 2);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!ripple || reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height) * 1.2;
    const ink = document.createElement("span");
    ink.className = "ripple-ink";
    ink.style.width = ink.style.height = `${d}px`;
    ink.style.left = `${e.clientX - rect.left - d / 2}px`;
    ink.style.top = `${e.clientY - rect.top - d / 2}px`;
    el.appendChild(ink);
    ink.addEventListener("animationend", () => ink.remove(), { once: true });
  };

  return (
    <motion.div
      ref={ref}
      className={`ripple-host ${className ?? "inline-block"}`}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onPointerDown={onPointerDown}
    >
      {children}
    </motion.div>
  );
}
