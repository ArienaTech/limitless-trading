import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Complaints Procedure | Limitless Trading",
  description:
    "How to raise a complaint with Limitless Trading Group, how we handle it, and your options for independent resolution.",
  alternates: { canonical: "https://limitlesstrading.com/legal/complaints" },
};

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "1. Our commitment",
    blocks: [
      {
        p: `${legal.brand} is committed to providing a high standard of service. If something goes wrong, we want to know so we can put it right and improve. We treat every complaint seriously, fairly, and confidentially.`,
      },
    ],
  },
  {
    heading: "2. How to make a complaint",
    blocks: [
      {
        p: (
          <>
            Please send your complaint to {mail(legal.email.complaints)}. To help us investigate
            quickly, please include:
          </>
        ),
      },
      {
        ul: [
          "Your full name and the email address associated with your account.",
          "A clear description of your complaint and what has gone wrong.",
          "Any relevant dates, order numbers, or supporting information.",
          "What you would like us to do to put things right.",
        ],
      },
    ],
  },
  {
    heading: "3. How we handle your complaint",
    blocks: [
      {
        ul: [
          "We will acknowledge your complaint within five working days.",
          "We will investigate fairly and may contact you for further information.",
          "We aim to provide a full response within 28 days. If we need more time, we will let you know why and when you can expect a response.",
        ],
      },
    ],
  },
  {
    heading: "4. If you are still not satisfied",
    blocks: [
      {
        p: "If you are not satisfied with our final response, you may be able to escalate your complaint depending on its nature:",
      },
      {
        ul: [
          "Data protection complaints can be referred to the Information Commissioner's Office (ICO) at ico.org.uk.",
          "General consumer complaints may be referred to Citizens Advice or a relevant Alternative Dispute Resolution (ADR) provider.",
          "Complaints relating to a trading account held with one of our licensed partners or brokers should also be raised with that provider under their own complaints and regulatory framework.",
        ],
      },
    ],
  },
  {
    heading: "5. Complaints about our partners",
    blocks: [
      {
        p: "Where your complaint concerns a service provided by a licensed partner or broker, we will help direct you to the right place, but the final handling and any regulatory redress will be governed by that provider's own procedures and regulator.",
      },
    ],
  },
  {
    heading: "6. Contact",
    blocks: [
      { p: <>For all complaints, please contact {mail(legal.email.complaints)}.</> },
    ],
  },
];

export default function Complaints() {
  return (
    <LegalDoc
      title="Complaints Procedure"
      updated={legal.lastUpdated}
      self="/legal/complaints"
      sections={sections}
    />
  );
}
