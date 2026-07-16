"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const navLinks = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "What We Offer", href: "/#values" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "/#faq" },
  { label: "Apply", href: "/#apply" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Refund & Cancellation", href: "/legal/refund-policy" },
  { label: "Affiliate & IB Terms", href: "/legal/affiliate-terms" },
  { label: "Complaints Procedure", href: "/legal/complaints" },
  { label: "Regulatory & Licensing", href: "/legal/regulatory" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/limitlesstrading" },
  { label: "Twitter / X", href: "https://twitter.com/limitlesstrading" },
  { label: "Instagram", href: "https://instagram.com/limitlesstrading" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[#2b2620]"
      style={{ background: "#15130f" }}
      role="contentinfo"
      aria-label="Site footer"
    >
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
            src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/logo3.svg"
            alt="Limitless Trading"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </motion.div>

        <p className="text-[14px] leading-relaxed max-w-md mb-16" style={{ color: "#b7b0a1" }}>
          Systematic forex trading, education, and fund management for serious traders.
          Founded in 2023 and built on the pillars of education first, disciplined
          execution, and risk management over chasing profits. London, UK — serving a
          purpose-driven community worldwide.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Navigate */}
          <div>
            <h3 className="label mb-5" style={{ color: "#9c9484" }}>Navigate</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] hover:text-gold transition-colors" style={{ color: "#b7b0a1" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="label mb-5" style={{ color: "#9c9484" }}>Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] hover:text-gold transition-colors" style={{ color: "#b7b0a1" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="label mb-5" style={{ color: "#9c9484" }}>Follow</h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[13px] hover:text-gold transition-colors"
                    style={{ color: "#b7b0a1" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing */}
          <div>
            <h3 className="label mb-5" style={{ color: "#9c9484" }}>Licensing</h3>
            <p className="mono text-[10px] leading-relaxed mb-4" style={{ color: "#b7b0a1" }}>
              We work with trusted and reputable licensed partners &amp; brokers to ensure we are
              working within their regulations and standards of service. Our #1 pillar is to
              ensure that every individual introduced into the financial markets are educated
              and aware of the risks.
            </p>
            <p className="mono text-[10px] mt-4 leading-relaxed" style={{ color: "#8a8374" }}>
              Capital at risk. Past performance is not indicative of future results.
              This website does not constitute financial advice.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2b2620] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="mono text-[10px]" style={{ color: "#8a8374" }}>
            © 2026 Limitless Trading Group Ltd. All rights reserved. London, United Kingdom.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/#faq" className="mono text-[10px] hover:text-gold transition-colors" style={{ color: "#8a8374" }}>FAQ</Link>
            <a href="mailto:hello@ltgtrading.com" className="mono text-[10px] hover:text-gold transition-colors" style={{ color: "#8a8374" }}>
              hello@ltgtrading.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
