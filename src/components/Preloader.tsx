"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;
const WORD = "LIMITLESS".split("");

export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduced ? 250 : 1250);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-void"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="overflow-hidden">
            <span
              className="display uppercase flex"
              style={{ fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "-0.03em" }}
            >
              {WORD.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-text"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.035 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </div>
          <motion.div
            className="mt-4 h-px bg-gold"
            initial={{ width: 0 }}
            animate={{ width: "min(240px, 40vw)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
