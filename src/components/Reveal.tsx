"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  index?: number;
  className?: string;
  y?: number;
  x?: number;
  scale?: boolean;
  once?: boolean;
}

export default function Reveal({
  children,
  index = 0,
  className,
  y = 28,
  x = 0,
  scale = false,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount: 0.08 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
    >
      {children}
    </motion.div>
  );
}
