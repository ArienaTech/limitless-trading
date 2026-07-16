import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─── Reusable legal document layout ───────────────────────────────────────────
// Every legal page renders through this so headings, spacing and structure stay
// identical across the whole legal suite.

export type LegalBlock =
  | { p: ReactNode }
  | { ul: ReactNode[] }
  | { subhead: string };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

const relatedLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Refund & Cancellation Policy", href: "/legal/refund-policy" },
  { label: "Affiliate & IB Terms", href: "/legal/affiliate-terms" },
  { label: "Complaints Procedure", href: "/legal/complaints" },
  { label: "Regulatory & Licensing", href: "/legal/regulatory" },
];

export default function LegalDoc({
  title,
  updated,
  intro,
  sections,
  self,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  sections: LegalSection[];
  /** href of the current page, so it is excluded from the related list */
  self?: string;
}) {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main className="gutter pt-36 pb-32 max-w-3xl">
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">LEGAL</span>
        <h1
          className="display uppercase text-text mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95 }}
        >
          {title}
        </h1>
        <p className="mono text-[10px] text-text-dim mb-12">Last updated: {updated}</p>

        {intro && (
          <div className="border border-gold/40 bg-surface p-6 mb-12 text-text-soft text-[14px] leading-relaxed">
            {intro}
          </div>
        )}

        <div className="flex flex-col gap-10 text-text-soft text-[14px] leading-relaxed">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="display font-bold text-text text-[18px] mb-3">{section.heading}</h2>
              <div className="flex flex-col gap-3">
                {section.blocks.map((block, i) => {
                  if ("subhead" in block) {
                    return (
                      <h3 key={i} className="display font-medium text-text text-[15px] mt-2">
                        {block.subhead}
                      </h3>
                    );
                  }
                  if ("ul" in block) {
                    return (
                      <ul key={i} className="flex flex-col gap-2 pl-1">
                        {block.ul.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="text-gold shrink-0">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{block.p}</p>;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Related legal documents */}
        <div className="mt-20 pt-10 border-t border-border">
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
            RELATED DOCUMENTS
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {relatedLinks
              .filter((l) => l.href !== self)
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="mono text-[10px] text-text-soft hover:text-gold transition-colors tracking-[0.08em]"
                >
                  {l.label}
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
