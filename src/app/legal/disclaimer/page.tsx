import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { SITE_URL } from "../../../siteConfig";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Disclaimer | Limitless Trading",
  description:
    "Educational-purpose and no-financial-advice disclaimer for the Limitless Trading Group website and services.",
  alternates: { canonical: `${SITE_URL}/legal/disclaimer` },
};

const link = (href: string, label: string) => (
  <a href={href} className="text-gold hover:underline">
    {label}
  </a>
);

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const intro = (
  <>
    The information provided by {legal.brand} is for general educational and informational purposes
    only. It is not financial, investment, tax, or legal advice, and it is not a recommendation to
    buy, sell, or hold any financial instrument.
  </>
);

const sections: LegalSection[] = [
  {
    heading: "1. No financial advice",
    blocks: [
      {
        p: `${legal.brand} provides education, community, and tools. Nothing we publish or provide — including courses, videos, market analysis, signals, or community discussion — constitutes personal financial advice or a personal recommendation. We do not take into account your individual circumstances, objectives, or financial situation.`,
      },
      {
        p: "You should seek advice from an independent, appropriately authorised professional before making any financial decision.",
      },
    ],
  },
  {
    heading: "2. Your responsibility",
    blocks: [
      {
        p: "All trading and investment decisions you make are your own, and you are solely responsible for them. You should carry out your own research and due diligence and only trade with capital you can afford to lose.",
      },
    ],
  },
  {
    heading: "3. No guarantee of results",
    blocks: [
      {
        p: (
          <>
            We make no guarantee of any particular outcome, profit, or performance. Trading carries a
            high risk of loss. Please read our {link("/legal/risk-disclosure", "Risk Disclosure")} for
            full details of the risks involved.
          </>
        ),
      },
    ],
  },
  {
    heading: "4. Testimonials and results",
    blocks: [
      {
        p: "Any testimonials, results, or case studies shown on our website reflect individual experiences and are not typical or guaranteed. Individual results will vary and depend on many factors outside our control.",
      },
    ],
  },
  {
    heading: "5. Third-party partners and links",
    blocks: [
      {
        p: "We work with licensed partners and brokers and may link to third-party websites and platforms. We are not responsible for the content, products, services, or regulatory protections of any third party. Any account you open with a partner is governed by that partner's own terms.",
      },
    ],
  },
  {
    heading: "6. Accuracy of information",
    blocks: [
      {
        p: "While we take reasonable care to ensure the information we provide is accurate and up to date, we do not warrant that it is complete, current, or error-free. Market information can change rapidly.",
      },
    ],
  },
  {
    heading: "7. Contact",
    blocks: [
      { p: <>Questions about this disclaimer can be sent to {mail(legal.email.general)}.</> },
    ],
  },
];

export default function Disclaimer() {
  return (
    <LegalDoc
      title="Disclaimer"
      updated={legal.lastUpdated}
      self="/legal/disclaimer"
      intro={intro}
      sections={sections}
    />
  );
}
