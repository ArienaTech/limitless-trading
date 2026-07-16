import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal, entityDescription } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Regulatory & Licensing Information | Limitless Trading",
  description:
    "Information about Limitless Trading Group's status, our work with licensed partners and brokers, and the scope of our activities.",
  alternates: { canonical: "https://limitlesstrading.com/legal/regulatory" },
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
    {legal.brand} is an education-first trading group. We are not a regulated financial services firm
    and do not hold client money. We work with trusted, licensed partners and brokers, and any
    regulated activity is carried out by those partners under their own authorisations.
  </>
);

const sections: LegalSection[] = [
  {
    heading: "1. Who we are",
    blocks: [
      { p: `${entityDescription}` },
    ],
  },
  {
    heading: "2. The nature of our activities",
    blocks: [
      {
        p: "We provide education, community, signals, tools, and connections to licensed partners. Our core focus is educating individuals and helping them become more informed, disciplined participants in the financial markets. We do not provide personal financial advice or discretionary regulated investment services in our own name.",
      },
    ],
  },
  {
    heading: "3. Working with licensed partners and brokers",
    blocks: [
      {
        p: "We work with trusted and reputable licensed partners and brokers to ensure we operate within their regulations and standards of service. Where you open or operate a trading account, or receive a regulated service, that service is provided by the relevant partner or broker under their own licence, terms, and regulatory protections — not by us.",
      },
      {
        p: "You should review the terms, disclosures, and regulatory status of any partner or broker before entering into a relationship with them.",
      },
    ],
  },
  {
    heading: "4. Our number-one pillar: education and risk awareness",
    blocks: [
      {
        p: (
          <>
            Our number-one pillar is to ensure that every individual introduced into the financial
            markets is educated and aware of the risks. Trading carries a high risk of loss — please
            read our {link("/legal/risk-disclosure", "Risk Disclosure")} and{" "}
            {link("/legal/disclaimer", "Disclaimer")} in full.
          </>
        ),
      },
    ],
  },
  {
    heading: "5. Financial promotions",
    blocks: [
      {
        p: "We take care that our communications are clear, fair, and not misleading. Where our content touches on the financial markets, it is provided for education and information only and should not be read as an inducement or personal recommendation to engage in any particular investment activity.",
      },
    ],
  },
  {
    heading: "6. Anti-money laundering and know-your-customer",
    blocks: [
      {
        p: "Our partners and brokers operate their own anti-money laundering (AML) and know-your-customer (KYC) procedures. You may be asked to provide identity and verification documents when opening an account with them, and you agree to co-operate with any such lawful requests.",
      },
    ],
  },
  {
    heading: "7. Contact",
    blocks: [
      {
        p: (
          <>
            For any regulatory or compliance enquiries, please contact {mail(legal.email.compliance)}.
          </>
        ),
      },
    ],
  },
];

export default function Regulatory() {
  return (
    <LegalDoc
      title="Regulatory & Licensing"
      updated={legal.lastUpdated}
      self="/legal/regulatory"
      intro={intro}
      sections={sections}
    />
  );
}
