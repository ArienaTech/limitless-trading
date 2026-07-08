"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[160] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--gold), var(--copper))",
      }}
    />
  );
}
