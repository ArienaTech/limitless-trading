"use client";

import { motion } from "motion/react";

const linkCols = [
  {
    title: "Navigate",
    items: [
      { label: "Strategy", href: "#strategy" },
      { label: "Performance", href: "#performance" },
      { label: "Insights", href: "#insights" },
      { label: "Apply", href: "#apply" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Risk Disclosure", href: "#" },
      { label: "Regulatory Info", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-void border-t border-border">
      <div className="gutter pt-16 pb-8">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h2
            className="display uppercase text-white leading-none"
            style={{ fontSize: "8vw" }}
          >
            LTG Trading
          </h2>
        </motion.div>

        <p className="text-text-soft text-[14px] leading-relaxed max-w-lg mt-6">
          Systematic trading for serious investors. FCA regulated, institutionally
          executed, and built on twelve years of transparent, rules-based
          performance.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {linkCols.map((col) => (
            <div key={col.title}>
              <h3 className="label mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-[14px] text-text-soft hover:text-gold transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label mb-4">Regulatory</h3>
            <p className="mono text-[10px] text-text-soft leading-relaxed">
              LTG Trading Ltd is authorised and regulated by the Financial Conduct
              Authority (FCA Ref #987654). Registered in England and Wales.
            </p>
            <p className="mono text-[10px] text-text-dim mt-4 leading-relaxed">
              Capital at risk. Past performance is not indicative of future results.
              This website does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>

      <div className="gutter border-t border-border py-5 flex items-center justify-between">
        <span className="mono text-[10px] text-text-dim">
          © 2026 LTG Trading Ltd. All rights reserved.
        </span>
        <span className="mono text-[10px] text-text-dim">London, UK</span>
      </div>
    </footer>
  );
}
