import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Affiliate & IB Terms | Limitless Trading",
  description:
    "Terms governing participation in the Limitless Trading Group affiliate marketing and introducing broker (IB) programmes.",
  alternates: { canonical: "https://limitlesstrading.com/legal/affiliate-terms" },
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

const sections: LegalSection[] = [
  {
    heading: "1. Scope",
    blocks: [
      {
        p: `These terms govern participation in the ${legal.brand} affiliate marketing programme and introducing broker (IB) / white-label programmes (together, the "Programme"). By joining the Programme you agree to these terms, our Terms & Conditions, and our Acceptable Use Policy.`,
      },
    ],
  },
  {
    heading: "2. Eligibility and approval",
    blocks: [
      {
        p: "Participation is subject to application and approval. You must be at least 18 years old and legally able to enter into a contract. We may accept or decline any applicant at our discretion, and may require identity and tax information before approving payouts.",
      },
    ],
  },
  {
    heading: "3. Your obligations when promoting",
    blocks: [
      { p: "When promoting our Services, you must:" },
      {
        ul: [
          "Only make accurate, honest, and non-misleading statements about us and our Services.",
          "Not guarantee profits, returns, or any specific financial outcome.",
          "Clearly disclose your affiliate or commercial relationship with us, as required by the Advertising Standards Authority (ASA) and consumer protection law.",
          "Include appropriate risk warnings when referring to trading or the financial markets.",
          "Not use spam, misleading advertising, cookie stuffing, trademark bidding, or any unlawful marketing methods.",
          "Comply with all applicable laws, including data protection and financial promotion rules in your audience's jurisdiction.",
        ],
      },
    ],
  },
  {
    heading: "4. Commissions and payment",
    blocks: [
      {
        p: "Commission rates, qualifying actions, and payment terms are set out in your Programme dashboard or agreement. Commissions are only earned on genuine, completed, and non-refunded transactions or validly introduced clients. We may withhold or reverse commissions relating to fraudulent, refunded, charged-back, or invalid activity.",
      },
      {
        p: "You are responsible for your own taxes on any commissions you receive. Payments may be subject to a minimum threshold and verification of your details.",
      },
    ],
  },
  {
    heading: "5. Introducing broker arrangements",
    blocks: [
      {
        p: "Where the Programme involves introducing clients to a licensed broker or partner, the underlying broker relationship and any regulatory protections are governed by that broker's own terms. You must not present yourself as authorised to give financial advice or as acting on behalf of the broker unless expressly permitted in writing.",
      },
    ],
  },
  {
    heading: "6. Intellectual property and brand use",
    blocks: [
      {
        p: "We grant you a limited, revocable, non-exclusive licence to use our approved marketing materials and brand assets solely to promote our Services in accordance with these terms. You must not modify our brand assets or use them in any way that damages our reputation.",
      },
    ],
  },
  {
    heading: "7. Term and termination",
    blocks: [
      {
        p: "Either party may terminate participation in the Programme at any time on written notice. We may suspend or terminate your participation immediately and withhold outstanding commissions if you breach these terms or engage in fraudulent or unlawful activity. Accrued, validly earned commissions will be paid in accordance with the standard payment terms.",
      },
    ],
  },
  {
    heading: "8. Liability and indemnity",
    blocks: [
      {
        p: "You are an independent contractor and not our employee, agent, or partner in the legal sense. You agree to indemnify us against any claims, losses, or costs arising from your promotional activities or breach of these terms. Our liability to you is limited as set out in our Terms & Conditions.",
      },
    ],
  },
  {
    heading: "9. Governing law",
    blocks: [
      {
        p: (
          <>
            These terms are governed by the laws of {legal.jurisdiction} and should be read together
            with our {link("/legal/terms", "Terms & Conditions")}.
          </>
        ),
      },
    ],
  },
  {
    heading: "10. Contact",
    blocks: [
      { p: <>Questions about the Programme can be sent to {mail(legal.email.general)}.</> },
    ],
  },
];

export default function AffiliateTerms() {
  return (
    <LegalDoc
      title="Affiliate & IB Terms"
      updated={legal.lastUpdated}
      self="/legal/affiliate-terms"
      sections={sections}
    />
  );
}
