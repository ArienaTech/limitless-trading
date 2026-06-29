"use client";

import { motion } from "motion/react";
import { partners } from "../data";

export default function Partners() {
  return (
    <section className="bg-void border-b border-border">
      <div className="gutter py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5 mb-10"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="mono text-[10px] text-text-soft tracking-[0.3em]">
            IN PARTNERSHIP WITH
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center text-center lg:border-r lg:border-border last:border-r-0 px-4 group"
            >
              <span
                className="display font-bold text-text group-hover:text-gold transition-colors duration-300"
                style={{ fontSize: "clamp(22px, 2.5vw, 34px)", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {partner.name}
              </span>
              <span className="mono text-[9px] text-text-soft mt-1.5 tracking-[0.2em]">
                {partner.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
