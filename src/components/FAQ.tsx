"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { EMAILS } from "../siteConfig";

const faqs = [
  {
    q: "What is systematic trading?",
    a: "Systematic trading is a method of trading financial markets using pre-defined, rules-based algorithms that execute trades automatically — removing human emotion and bias from every decision. Unlike discretionary trading, systematic strategies follow the same rules in every market condition.",
  },
  {
    q: "What makes Limitless different from other trading services?",
    a: "Limitless combines three things most providers offer separately: automated execution, institutional-grade education, and managed capital — all under one roof, available by application only. We don't sell signals. We build systems and serious traders.",
  },
  {
    q: "Do I need trading experience to join?",
    a: "No. Our Inner Circle education programme is designed for traders at every level — from complete beginners to professionals. Our Automated Execution and Managed Capital services are available to qualifying members regardless of their trading background.",
  },
  {
    q: "Is LTG licensed and regulated?",
    a: "We work with trusted and reputable licensed partners & brokers to ensure we are working within their regulations and standards of service. Our #1 pillar is to ensure that every individual introduced into the financial markets are educated and aware of the risks.",
  },
  {
    q: "How does the application process work?",
    a: "Submit a brief application describing your background and goals. We review every application within 48 hours and assess fit — not just capital size. Successful applicants are invited to a 30-minute strategy call with a senior partner before onboarding.",
  },
  {
    q: "What is a managed forex fund?",
    a: "A managed forex fund is a professionally managed account where an authorised firm trades the forex markets on your behalf using a systematic strategy. You retain ownership of your capital while the firm handles all execution, risk management, and reporting.",
  },
  {
    q: "How much capital do I need to get started?",
    a: "Minimum capital requirements vary by service. Our education and community memberships have no capital requirement. Managed Capital services are available to qualifying members — we discuss allocation during your strategy call.",
  },
  {
    q: "Can I withdraw my capital at any time?",
    a: "Withdrawal terms depend on your specific service agreement and are discussed during onboarding. We believe in full transparency around capital access and provide this information before any commitment is made.",
  },
  {
    q: "Where is Limitless Trading Group based?",
    a: "Limitless Trading Group is based in London, United Kingdom, and was founded in 2023. While we are London-based, we work with a purpose-driven community of members worldwide.",
  },
  {
    q: "Who holds my capital and funds?",
    a: "You retain ownership of your capital. Any trading account is opened with our trusted, licensed partners and brokers, and is governed by that provider's own terms and regulatory protections. We work within their regulations and standards of service.",
  },
  {
    q: "How is Limitless different from a signals service?",
    a: "We don't just sell signals. Limitless combines automated, rules-based execution, institutional-grade education, and managed capital under one roof. Our first pillar is education and risk awareness — signals alone don't build disciplined, consistent traders.",
  },
  {
    q: "Is trading with Limitless risky?",
    a: "Yes. Trading forex and leveraged products carries a high risk of loss and is not suitable for everyone — you should only trade capital you can afford to lose. Our entire approach is built around risk management and education precisely because the risk is real. Nothing we provide is financial advice.",
  },
  {
    q: "How much does membership cost?",
    a: "There is no upfront payment to apply, and enquiries are free. Costs vary by service — education and community access differ from managed capital arrangements — and are explained transparently during your strategy call before any commitment.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="gutter py-16 sm:py-32 lg:py-40 bg-void-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Reveal>
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2
          className="display uppercase text-text mb-16"
          style={{ fontSize: "clamp(32px, 6vw, 90px)", lineHeight: 0.95 }}
        >
          Everything You
          <br />
          <span className="text-gold">Need to Know.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,380px)] gap-10 lg:gap-16 items-start">
        <div>
          {faqs.map((faq, i) => (
            <Reveal key={i} index={i}>
              <div className="border-b border-border">
                <motion.button
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span className="display font-medium text-text group-hover:text-gold transition-colors text-[16px] leading-snug">
                    {faq.q}
                  </span>
                  <motion.span
                    className="mono text-gold text-[20px] shrink-0 mt-0.5 leading-none"
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-text-soft text-[14px] leading-relaxed pb-6 max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal index={1}>
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border lg:sticky lg:top-28">
            <Image
              src="/dee-portrait-02.png"
              alt="Dee — LTG Trading founder"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.85)" }}
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-text-soft text-[14px]">Still have questions?</p>
          <motion.a
            href={`mailto:${EMAILS.general}`}
            className="mono text-[10px] text-gold link-underline tracking-[0.1em]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {EMAILS.general} →
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
