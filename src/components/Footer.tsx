"use client";

import { motion } from "motion/react";

const linkCols = [
  {
    title: "Links",
    items: [
      { label: "Music", href: "#music" },
      { label: "Live", href: "#live" },
      { label: "About", href: "#about" },
      { label: "Booking", href: "#booking" },
    ],
  },
  {
    title: "Socials",
    items: [
      { label: "Soundcloud", href: "https://soundcloud.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Resident Advisor", href: "https://ra.co" },
      { label: "Discogs", href: "https://discogs.com" },
      { label: "Bandcamp", href: "https://bandcamp.com" },
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
            VØID
          </h2>
        </motion.div>

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
                      className="text-[14px] text-text-soft hover:text-acid transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label mb-4">Label</h3>
            <p className="mono text-[10px] text-text-soft leading-relaxed">
              VØID is represented by BLOC Agency for European bookings and
              PREMIER for US/international. All enquiries via booking form above.
            </p>
          </div>
        </div>
      </div>

      <div className="gutter border-t border-border py-5 flex items-center justify-between">
        <span className="mono text-[10px] text-text-dim">
          © 2026 VØID. All rights reserved.
        </span>
        <span className="mono text-[10px] text-text-dim">Berlin, DE</span>
      </div>
    </footer>
  );
}
