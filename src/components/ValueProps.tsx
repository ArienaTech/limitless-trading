"use client";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Image from "next/image";
import { motion } from "motion/react";

const cards = [
  {
    tag: "PACKAGE 01",
    title: "Fast Tracked Live Trading",
    description:
      "Everything you need to start trading live — our VIP community and signals, full trading mastery, and access to fund management and automated systems.",
    access: "By Application",
    accessSub: "ENQUIRY ONLY · NO PAYMENTS",
    features: [
      "Complete access to VIP community & signals channel (includes get started course & 24/7 support every step of the way)",
      "Complete access to LTG trading mastery",
      "Access to VIP fund management & automated trading systems",
    ],
    cta: "ENQUIRE",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Lgt_img1.png",
  },
  {
    tag: "PACKAGE 02",
    title: "Fast Tracked Funded Trading",
    description:
      "Get funded faster. Full access to our funded community alongside the VIP community, signals, and complete trading mastery.",
    access: "By Application",
    accessSub: "ENQUIRY ONLY · NO PAYMENTS",
    features: [
      "Complete access to LTG funded community",
      "Complete access to VIP community & signals channel (includes get started course & 24/7 support every step of the way)",
      "Complete access to LTG trading mastery",
    ],
    cta: "APPLY FOR ACCESS",
    ctaHref: "#apply",
    featured: true,
    badge: "★ MOST POPULAR",
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Lgt_img2.png",
  },
  {
    tag: "PACKAGE 03",
    title: "Automated Trading & VIP Fund Management",
    description:
      "Hands-off, professionally managed trading and automated systems for qualifying members — the same systematic edge, applied to your capital.",
    access: "By Application",
    accessSub: "QUALIFYING MEMBERS ONLY",
    // TODO: package bullets to be supplied by client (open item).
    features: [
      "Full package details coming soon",
    ],
    cta: "REQUEST CRITERIA",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Lgt_img4.png",
  },
];

export default function ValueProps() {
  return (
    <section id="values" className="gutter py-16 sm:py-32 lg:py-40 bg-void-2">
      <Reveal>
        <p className="mono text-[10px] text-text-soft tracking-[0.3em] mb-6 text-center">
          WHAT WE OFFER
        </p>
        <h2
          className="display uppercase text-center mb-16"
          style={{ fontSize: "clamp(32px, 7vw, 96px)", lineHeight: 0.95 }}
        >
          <span className="text-text">LTG </span>
          <span className="text-gold">ECOSYSTEM.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
        {cards.map((card, i) => (
          <Reveal key={card.tag} index={i} scale>
            <TiltCard className="h-full">
            <motion.div
              className={`relative flex flex-col h-full ${
                card.featured
                  ? "border border-gold/60 bg-[#fbf7ee]"
                  : "border border-border bg-white"
              }`}
              style={{ borderRadius: "12px", overflow: "hidden" }}
              whileHover={{ borderColor: card.featured ? "rgba(154,123,46,0.9)" : "rgba(154,123,46,0.5)" }}
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
                  style={{ background: "var(--gold-dim)" }}
                >
                  <span className="mono text-[9px] tracking-[0.2em]" style={{ color: "#f6ead0" }}>
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
                  className="display font-bold text-text"
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
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
