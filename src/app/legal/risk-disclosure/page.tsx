import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { SITE_URL } from "../../../siteConfig";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Risk Disclosure | Limitless Trading",
  description:
    "Important risk information for clients and prospective members of Limitless Trading Group. Trading carries a high risk of loss.",
  alternates: { canonical: `${SITE_URL}/legal/risk-disclosure` },
};

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const intro = (
  <>
    <strong className="text-text">Important:</strong> Trading forex and other financial instruments
    carries a significant risk of loss and is not suitable for everyone. You should only trade or
    invest capital you can afford to lose. Past performance is not indicative of future results.
  </>
);

const sections: LegalSection[] = [
  {
    heading: "1. Capital at risk",
    blocks: [
      {
        p: "All trading and investment activity involves risk of capital loss. There is no guarantee that you will make a profit or recover any amount invested. The value of investments and any income from them can fall as well as rise.",
      },
    ],
  },
  {
    heading: "2. Forex and leveraged products",
    blocks: [
      {
        p: "Foreign exchange (forex) trading involves significant risk due to leverage, market volatility, and the 24-hour nature of global currency markets. Leverage amplifies both potential profits and potential losses. A small adverse movement in the market can result in a loss greater than your initial deposit.",
      },
    ],
  },
  {
    heading: "3. Education and signals",
    blocks: [
      {
        p: "Our education, community, and signals are provided for informational and educational purposes only. They do not constitute a personal recommendation or financial advice. Any decision to act on information provided is made at your own risk and discretion.",
      },
    ],
  },
  {
    heading: "4. Systematic and automated trading",
    blocks: [
      {
        p: "While systematic and automated strategies aim to remove emotional bias, they are not immune to losses. The historical performance of any trading system or strategy does not guarantee future results, and systems may perform differently across different market conditions.",
      },
    ],
  },
  {
    heading: "5. Fund management",
    blocks: [
      {
        p: "Where capital is managed through our VIP fund management service, trading decisions are made according to the agreed strategy. While professional diligence is exercised, performance cannot be guaranteed and there is no protection against market losses.",
      },
    ],
  },
  {
    heading: "6. No financial advice",
    blocks: [
      {
        p: "Nothing on this website or in our materials constitutes financial advice, investment advice, or a recommendation to buy or sell any financial instrument. You should seek independent professional advice before making any investment decision.",
      },
    ],
  },
  {
    heading: "7. Licensing",
    blocks: [
      {
        p: `${legal.brand} works with trusted and reputable licensed partners and brokers to ensure we operate within their regulations and standards of service. Our number-one pillar is to ensure that every individual introduced into the financial markets is educated and aware of the risks. Any account you open with a partner or broker is governed by that provider's own terms and regulatory protections.`,
      },
    ],
  },
  {
    heading: "8. Past performance",
    blocks: [
      {
        p: "Any performance data, statistics, results, or case studies presented on this website or in our materials relate to past performance only. Past performance is not a reliable indicator of future results, and results may be based on simulated or live performance, both of which carry uncertainty.",
      },
    ],
  },
  {
    heading: "9. Contact",
    blocks: [
      {
        p: (
          <>
            For any questions relating to this disclosure, please contact us at{" "}
            {mail(legal.email.compliance)}.
          </>
        ),
      },
    ],
  },
];

export default function RiskDisclosure() {
  return (
    <LegalDoc
      title="Risk Disclosure"
      updated={legal.lastUpdated}
      self="/legal/risk-disclosure"
      intro={intro}
      sections={sections}
    />
  );
}
