import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Limitless Trading",
  description:
    "Your cancellation and refund rights when purchasing products, subscriptions, and digital content from Limitless Trading Group, in line with UK consumer law.",
  alternates: { canonical: "https://limitlesstrading.com/legal/refund-policy" },
};

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "1. Introduction",
    blocks: [
      {
        p: `This policy explains your rights to cancel and obtain a refund when you purchase products, subscriptions, digital content, or services from ${legal.brand}. It applies alongside your statutory rights under UK consumer law, including the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.`,
      },
    ],
  },
  {
    heading: "2. Your 14-day right to cancel (cooling-off period)",
    blocks: [
      {
        p: "If you are a consumer, you generally have the right to cancel most purchases within 14 days of the date of purchase (or, for physical goods, 14 days from the day you receive them) without giving a reason.",
      },
    ],
  },
  {
    heading: "3. Digital content and immediate access",
    blocks: [
      {
        p: "Where you purchase digital content or access to online courses, community channels, or signals, and you ask for immediate access, you acknowledge that:",
      },
      {
        ul: [
          "You expressly request that we begin providing the digital content or service during the 14-day cancellation period; and",
          "You acknowledge that you will lose your right to cancel once the download or streaming of the content has begun, or once access has been granted.",
        ],
      },
      {
        p: "Where access has already been granted or content has already been delivered, a refund may not be available for that portion of the service.",
      },
    ],
  },
  {
    heading: "4. Subscriptions",
    blocks: [
      {
        p: "Subscription services renew automatically for the applicable billing period until cancelled. You may cancel a subscription at any time, and the cancellation will take effect at the end of your current billing period. Unless required by law, we do not provide partial refunds for the unused portion of a billing period.",
      },
    ],
  },
  {
    heading: "5. How to request a cancellation or refund",
    blocks: [
      {
        p: (
          <>
            To cancel or request a refund, contact us at {mail(legal.email.general)} with your order
            details and the reason for your request. We aim to acknowledge requests within five working
            days. Approved refunds are made to your original payment method within 14 days.
          </>
        ),
      },
    ],
  },
  {
    heading: "6. Faulty or misdescribed products",
    blocks: [
      {
        p: "If a product or service is faulty, not as described, or not fit for purpose, you are entitled to a repair, replacement, or refund in accordance with the Consumer Rights Act 2015. This is in addition to the cancellation rights described above.",
      },
    ],
  },
  {
    heading: "7. No refunds for trading losses",
    blocks: [
      {
        p: "Refunds relate only to the products and services you purchase from us. We do not provide refunds or compensation for any trading or investment losses you may incur, which are your own responsibility.",
      },
    ],
  },
  {
    heading: "8. Chargebacks",
    blocks: [
      {
        p: "If you believe a charge is incorrect, please contact us first so we can resolve it. Initiating a chargeback without contacting us may result in suspension of your access while the matter is investigated.",
      },
    ],
  },
  {
    heading: "9. Contact",
    blocks: [
      { p: <>Questions about this policy can be sent to {mail(legal.email.general)}.</> },
    ],
  },
];

export default function RefundPolicy() {
  return (
    <LegalDoc
      title="Refund & Cancellation Policy"
      updated={legal.lastUpdated}
      self="/legal/refund-policy"
      sections={sections}
    />
  );
}
