import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Limitless Trading",
  description:
    "The rules for using the Limitless Trading Group website, community channels, and services responsibly and lawfully.",
  alternates: { canonical: "https://limitlesstrading.com/legal/acceptable-use" },
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
        p: `This Acceptable Use Policy sets out the standards that apply when you use the ${legal.brand} website, community channels, educational platforms, and services. It applies alongside our Terms & Conditions. By using our Services, you agree to comply with this policy.`,
      },
    ],
  },
  {
    heading: "2. Prohibited uses",
    blocks: [
      { p: "You must not use our Services:" },
      {
        ul: [
          "In any way that breaches any applicable local, national, or international law or regulation.",
          "For any unlawful or fraudulent purpose, or with any unlawful or fraudulent effect.",
          "To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material (spam).",
          "To knowingly transmit any data or material that contains viruses, trojans, or other harmful programs.",
          "To gain unauthorised access to, interfere with, damage, or disrupt any part of our Services or any equipment or network on which they are stored.",
          "To harass, abuse, threaten, or defame any person, or to promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.",
        ],
      },
    ],
  },
  {
    heading: "3. Community conduct",
    blocks: [
      { p: "When participating in our community channels and educational platforms, you must not:" },
      {
        ul: [
          "Share, resell, or redistribute our signals, course materials, or other Content outside the community.",
          "Post content that is unlawful, misleading, defamatory, obscene, or infringing of any third party's rights.",
          "Impersonate any person or misrepresent your affiliation with any person or entity.",
          "Provide personal financial advice to other members or hold yourself out as authorised to do so.",
          "Solicit other members for unrelated schemes, or promote competing services without our permission.",
        ],
      },
    ],
  },
  {
    heading: "4. Intellectual property",
    blocks: [
      {
        p: "All Content provided through our Services is protected by intellectual property rights. You may use it for your own personal learning only. Copying, recording, screen-capturing for redistribution, or otherwise sharing our Content is strictly prohibited and may result in immediate termination of access and legal action.",
      },
    ],
  },
  {
    heading: "5. Suspension and enforcement",
    blocks: [
      {
        p: "We will determine, at our discretion, whether there has been a breach of this policy. Where a breach has occurred, we may take action including issuing a warning, removing content, suspending or permanently withdrawing your access, and, where appropriate, reporting the matter to law enforcement authorities.",
      },
    ],
  },
  {
    heading: "6. Reporting misuse",
    blocks: [
      {
        p: (
          <>
            If you become aware of any misuse of our Services or content that breaches this policy,
            please report it to us at {mail(legal.email.general)}.
          </>
        ),
      },
    ],
  },
  {
    heading: "7. Changes to this policy",
    blocks: [
      {
        p: "We may revise this policy at any time. Please check this page regularly to ensure you understand the standards that apply when you use our Services.",
      },
    ],
  },
];

export default function AcceptableUse() {
  return (
    <LegalDoc
      title="Acceptable Use Policy"
      updated={legal.lastUpdated}
      self="/legal/acceptable-use"
      sections={sections}
    />
  );
}
