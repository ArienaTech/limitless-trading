"use client";

import { useState } from "react";
import Reveal from "./Reveal";

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
    q: "Is Limitless FCA regulated?",
    a: "Yes. Limitless (trading as LTG Trading Ltd) is authorised and regulated by the Financial Conduct Authority (FCA). This means your capital is protected under CASS client money rules and we are subject to regular FCA oversight and reporting.",
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
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="gutter py-32 sm:py-40 bg-void-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Reveal>
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2
          className="display uppercase text-white mb-16"
          style={{ fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 0.95 }}
        >
          Everything You
          <br />
          <span className="text-gold">Need to Know.</span>
        </h2>
      </Reveal>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <Reveal key={i} index={i}>
            <div className="border-b border-border">
              <button
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="display font-medium text-white group-hover:text-gold transition-colors text-[16px] leading-snug"
                >
                  {faq.q}
                </span>
                <span
                  className="mono text-gold text-[18px] shrink-0 mt-0.5 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p className="text-text-soft text-[14px] leading-relaxed pb-6 max-w-2xl">
                  {faq.a}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-text-soft text-[14px]">Still have questions?</p>
          <a
            href="mailto:hello@ltgtrading.com"
            className="mono text-[10px] text-gold link-underline tracking-[0.1em]"
          >
            hello@ltgtrading.com →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
