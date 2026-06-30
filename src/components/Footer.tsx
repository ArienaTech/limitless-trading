"use client";

import Image from "next/image";
import { motion } from "motion/react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "What We Do", href: "#values" },
  { label: "Performance", href: "#performance" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { label: "Regulatory Info", href: "/legal/regulatory" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/limitlesstrading" },
  { label: "Twitter / X", href: "https://twitter.com/limitlesstrading" },
  { label: "Instagram", href: "https://instagram.com/limitlesstrading" },
];

export default function Footer() {
  return (
    <footer className="bg-void border-t border-border" role="contentinfo" aria-label="Site footer">
      <div className="gutter pt-20 pb-10">

        {/* Brand */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden mb-6"
        >
          <Image
            src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg"
            alt="Limitless Trading"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </motion.div>

        <p className="text-text-soft text-[14px] leading-relaxed max-w-md mb-16">
          Systematic trading for serious investors. FCA regulated, institutionally 
          executed, and built on twelve years of transparent, rules-based performance.
          London, UK — serving members worldwide.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">
          {/* Navigate */}
          <div>
            <h3 className="label mb-5">Navigate</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-text-soft hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="label mb-5">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-text-soft hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="label mb-5">Follow</h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[13px] text-text-soft hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="label mb-5">Regulatory</h3>
            <p className="mono text-[10px] text-text-soft leading-relaxed mb-4">
              LTG Trading Ltd is authorised and regulated by the Financial Conduct
              Authority. Registered in England and Wales.
            </p>
            <a
              href="https://register.fca.org.uk"
              target="_blank"
              rel="noreferrer noopener"
              className="mono text-[9px] text-gold link-underline"
            >
              Verify on FCA Register →
            </a>
            <p className="mono text-[10px] text-text-dim mt-4 leading-relaxed">
              Capital at risk. Past performance is not indicative of future results.
              This website does not constitute financial advice.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="mono text-[10px] text-text-dim">
            © 2026 LTG Trading Ltd. All rights reserved. London, United Kingdom.
          </span>
          <div className="flex items-center gap-6">
            <a href="#faq" className="mono text-[10px] text-text-dim hover:text-gold transition-colors">FAQ</a>
            <a href="mailto:hello@ltgtrading.com" className="mono text-[10px] text-text-dim hover:text-gold transition-colors">
              hello@ltgtrading.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
