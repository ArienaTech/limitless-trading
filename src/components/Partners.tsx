"use client";

import Image from "next/image";
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
          className="flex flex-col items-center gap-4 mb-10 text-center"
        >
          <span className="mono text-[10px] text-text-soft tracking-[0.3em]">
            IN PARTNERSHIP WITH
          </span>
          <div className="w-12 h-px bg-border" />
        </motion.div>

        {/* Partner logos — rendered in their original colours; `mono` logos get a
            muted grey filter so coloured marks blend with the monochrome ones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-8 lg:gap-0">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center lg:border-r lg:border-border last:border-r-0 px-4 sm:px-6 group cursor-default"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                unoptimized
                className="h-12 sm:h-14 w-auto max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={
                  partner.mono
                    ? { filter: "brightness(0) invert(0.28) sepia(0.16) saturate(0.7)" }
                    : undefined
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
