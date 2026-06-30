"use client";

import Reveal from "./Reveal";
import Image from "next/image";
import { motion } from "motion/react";

const cards = [
  {
    tag: "THE ENGINE",
    title: "Automated Execution",
    description:
      "Machine-precision execution that works the markets 24/7 — no emotion, no hesitation, no human error.",
    access: "By Application",
    accessSub: "ENQUIRY ONLY · NO PAYMENTS",
    features: [
      "Proprietary auto-trader, fully managed",
      "24/7 global market coverage",
      "Built-in risk discipline",
    ],
    cta: "ENQUIRE",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img.png",
  },
  {
    tag: "THE INNER CIRCLE",
    title: "Education & Community",
    description:
      "We don't sell signals — we build traders. A vetted community and a structured path to genuine mastery.",
    access: "By Application",
    accessSub: "CRITERIA-BASED ACCESS",
    features: [
      "Structured education, fundamentals to pro",
      "Live market breakdowns & trade reasoning",
      "Vetted, exclusive community",
      "Direct mentorship from live traders",
    ],
    cta: "APPLY FOR ACCESS",
    ctaHref: "#apply",
    featured: true,
    badge: "★ FLAGSHIP · MEMBER FAVOURITE",
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img2.png",
  },
  {
    tag: "MANAGED CAPITAL",
    title: "Fund Management",
    description:
      "Professional, hands-off management for qualifying members — the same systematic edge, applied to your capital.",
    access: "By Application",
    accessSub: "QUALIFYING MEMBERS ONLY",
    features: [
      "Hands-off professional management",
      "Transparent, real-time reporting",
      "Institutional risk discipline",
    ],
    cta: "REQUEST CRITERIA",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img3.png",
  },
];

export default function ValueProps() {
  return (
    <section id="values" className="gutter py-16 sm:py-32 lg:py-40 bg-void-2">
      <Reveal>
        <p className="mono text-[10px] text-text-soft tracking-[0.3em] mb-6 text-center">
          WHAT WE DO
        </p>
        <h2
          className="display uppercase text-center mb-16"
          style={{ fontSize: "clamp(32px, 7vw, 96px)", lineHeight: 0.95 }}
        >
          <span className="text-white">THE LIMITLESS </span>
          <span className="text-gold">STANDARD.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
        {cards.map((card, i) => (
          <Reveal key={card.tag} index={i} scale>
            <motion.div
              className={`relative flex flex-col h-full ${
                card.featured
                  ? "border border-gold/60 bg-[#1a0a0a]"
                  : "border border-border bg-[#0f0d0b]"
              }`}
              style={{ borderRadius: "12px", overflow: "hidden" }}
              whileHover={{ y: -6, borderColor: card.featured ? "rgba(154,123,46,0.9)" : "rgba(154,123,46,0.5)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Featured glow pulse */}
              {card.featured && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ borderRadius: "12px", border: "1px solid" }}
                  animate={{ borderColor: ["rgba(154,123,46,0.3)", "rgba(154,123,46,0.7)", "rgba(154,123,46,0.3)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* Badge */}
              {card.featured && card.badge && (
                <div
                  className="flex items-center justify-center gap-2 py-2.5 px-4"
                  style={{ background: "#5C0A0A" }}
                >
                  <span className="mono text-[9px] text-gold tracking-[0.2em]">
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Image with hover scale */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <span className="mono text-[9px] text-gold tracking-[0.2em]">{card.tag}</span>
                <h3
                  className="display font-bold text-white"
                  style={{ fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: 1.1 }}
                >
                  {card.title}
                </h3>
                <p className="text-text-soft text-[13px] leading-relaxed">{card.description}</p>

                <div className="pt-1">
                  <p
                    className="text-gold mb-0.5"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(15px, 1.5vw, 18px)" }}
                  >
                    {card.access}
                  </p>
                  <span className="mono text-[9px] text-text-dim tracking-[0.15em]">{card.accessSub}</span>
                </div>

                <div className="h-px w-full bg-border" />

                <ul className="flex flex-col gap-2 flex-1">
                  {card.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      className="flex items-center gap-3 text-[13px] text-text-soft border border-border px-4 py-3"
                      style={{ borderRadius: "999px" }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + fi * 0.06, duration: 0.4 }}
                    >
                      <span className="text-gold text-[11px]">✓</span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={card.ctaHref}
                  className={`mt-4 w-full py-4 text-center mono text-[10px] tracking-[0.2em] transition-colors duration-200 block ${
                    card.featured
                      ? "bg-gold text-void hover:bg-gold-dim"
                      : "border border-border-hi text-text hover:border-gold hover:text-gold"
                  }`}
                  style={{ borderRadius: "999px" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {card.cta}
                </motion.a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
