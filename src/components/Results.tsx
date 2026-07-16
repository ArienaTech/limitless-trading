"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

// ─── Member Results slide (shell) ─────────────────────────────────────────────
// Section 9: a members-results slide sits alongside the testimonials slide.
// OPEN ITEM: Dee is gathering verified visual results and video testimonials.
// Swap the placeholder tiles below for the real result screenshots/clips when
// they are supplied.

const resultSlots = [
  { label: "MEMBER RESULT 01", sub: "Verified member result — coming soon" },
  { label: "MEMBER RESULT 02", sub: "Verified member result — coming soon" },
  { label: "MEMBER RESULT 03", sub: "Verified member result — coming soon" },
  { label: "MEMBER RESULT 04", sub: "Verified member result — coming soon" },
];

export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-32 lg:py-40 bg-void-2 overflow-hidden">
      <Reveal>
        <div className="gutter text-center mb-10 sm:mb-16">
          <p className="mono text-[10px] text-gold tracking-[0.3em] mb-6">MEMBER RESULTS</p>
          <h2
            className="display text-text mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 72px)", lineHeight: 1.1, fontWeight: 700 }}
          >
            Real members. Real results.
          </h2>
          <p className="text-text-soft text-[14px] sm:text-[15px] max-w-xl mx-auto leading-relaxed">
            Verified member results and video testimonials are being gathered and will be
            published here.
          </p>
        </div>
      </Reveal>

      {/* Results slide — horizontal scroll on mobile, grid on desktop */}
      <div className="gutter">
        <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2">
          {resultSlots.map((slot, i) => (
            <motion.div
              key={slot.label}
              className="shrink-0 w-[80%] sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <ImagePlaceholder
                label={slot.label}
                sublabel={slot.sub}
                className="w-full aspect-[3/4]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
