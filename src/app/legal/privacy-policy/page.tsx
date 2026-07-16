import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { SITE_URL } from "../../../siteConfig";
import { legal, entityDescription } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Privacy Policy | Limitless Trading",
  description:
    "How Limitless Trading Group collects, uses, shares, and protects your personal data. Compliant with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: `${SITE_URL}/legal/privacy-policy` },
};

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "1. Who we are",
    blocks: [
      { p: `${entityDescription} In this policy, "we", "us", "our" and "${legal.short}" refer to ${legal.brand}.` },
      {
        p: (
          <>
            We are the &quot;data controller&quot; responsible for your personal data. For any privacy
            matter you can contact us at {mail(legal.email.privacy)}.
          </>
        ),
      },
    ],
  },
  {
    heading: "2. Scope of this policy",
    blocks: [
      {
        p: `This policy explains how we handle personal data when you use our website, apply for or use our services (including our VIP community and signals, trading mastery and education, funded trading, VIP fund management, automated trading, our shop, and our affiliate and introducing broker programmes), or otherwise interact with us.`,
      },
      {
        p: `We are committed to protecting your privacy and handling your data in an open and transparent manner in accordance with UK data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
      },
    ],
  },
  {
    heading: "3. Personal data we collect",
    blocks: [
      { p: "Depending on how you interact with us, we may collect the following categories of personal data:" },
      {
        ul: [
          "Identity data — full name, date of birth, and, where required by our partners, identification documents.",
          "Contact data — email address, telephone number, and country of residence.",
          "Application data — your trading background, experience, objectives, and intended capital allocation.",
          "Transaction data — records of purchases from our shop, subscriptions, and payments (payment card details are processed by our payment providers, not stored by us).",
          "Community data — messages, posts, and content you share in our community channels.",
          "Technical data — IP address, browser type, device information, and usage data collected via cookies and similar technologies.",
          "Marketing data — your preferences in receiving marketing from us and your communication preferences.",
        ],
      },
      {
        p: "We do not intentionally collect special category data. Please do not share sensitive personal information with us unless specifically requested for a lawful purpose.",
      },
    ],
  },
  {
    heading: "4. How we collect your data",
    blocks: [
      { p: "We collect personal data when you:" },
      {
        ul: [
          "Complete an enquiry, application, or contact form on our website.",
          "Purchase a product or subscribe to a service.",
          "Join our community channels or educational programmes.",
          "Register for our affiliate or introducing broker programmes.",
          "Communicate with us by email, phone, or social media.",
          "Browse our website (via cookies and analytics).",
        ],
      },
    ],
  },
  {
    heading: "5. How we use your data and our legal bases",
    blocks: [
      { p: "We use your personal data for the following purposes, relying on the legal bases set out below:" },
      {
        ul: [
          "To assess and respond to your enquiry or application — performance of a contract or pre-contractual steps at your request.",
          "To provide our services, education, community access, and process orders — performance of a contract.",
          "To connect you with our licensed partners and brokers where you ask us to help set up a trading account — performance of a contract and your consent.",
          "To operate our affiliate and introducing broker programmes, including calculating and paying commissions — performance of a contract and our legitimate interests.",
          "To comply with our legal and regulatory obligations — legal obligation.",
          "To improve our website, services, and security — our legitimate interests.",
          "To send you relevant updates and marketing where you have consented or where permitted by law — consent or legitimate interests.",
        ],
      },
    ],
  },
  {
    heading: "6. Marketing communications",
    blocks: [
      {
        p: "Where required by law, we will only send you marketing communications with your consent. You can withdraw your consent or opt out at any time by using the unsubscribe link in our emails or by contacting us. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.",
      },
    ],
  },
  {
    heading: "7. Who we share your data with",
    blocks: [
      { p: "We may share your personal data with:" },
      {
        ul: [
          "Our trusted, licensed partners and brokers — where you ask us to help you open or operate a trading account, or where a service is delivered in partnership with them.",
          "Service providers and processors — including hosting, email, payment, analytics, and community-platform providers who process data on our behalf under contract.",
          "Professional advisers — including lawyers, accountants, and auditors where necessary.",
          "Authorities and regulators — where required by law or to protect our rights.",
        ],
      },
      {
        p: "We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not sell your personal data.",
      },
    ],
  },
  {
    heading: "8. International transfers",
    blocks: [
      {
        p: "Some of our partners and service providers may be located outside the United Kingdom. Where we transfer your personal data outside the UK, we ensure a similar degree of protection by relying on an adequacy decision or appropriate safeguards such as the International Data Transfer Agreement (IDTA) or UK Addendum to the EU Standard Contractual Clauses.",
      },
    ],
  },
  {
    heading: "9. Data retention",
    blocks: [
      {
        p: "We retain personal data only for as long as necessary to fulfil the purposes we collected it for, including to satisfy any legal, accounting, or reporting requirements. Certain records may be retained for a minimum of five to seven years where required by law. Application data from unsuccessful applications is generally deleted within 12 months.",
      },
    ],
  },
  {
    heading: "10. Your rights",
    blocks: [
      { p: "Under UK data protection law, you have the right to:" },
      {
        ul: [
          "Request access to your personal data.",
          "Request correction of inaccurate or incomplete data.",
          "Request erasure of your personal data in certain circumstances.",
          "Object to or restrict our processing of your data.",
          "Request the transfer of your data (data portability).",
          "Withdraw consent at any time where we rely on consent.",
        ],
      },
      {
        p: (
          <>
            To exercise any of these rights, contact us at {mail(legal.email.privacy)}. We will respond
            within one month. You will not usually have to pay a fee.
          </>
        ),
      },
    ],
  },
  {
    heading: "11. Cookies",
    blocks: [
      {
        p: (
          <>
            Our website uses cookies and similar technologies. For full details, please see our{" "}
            <a href="/legal/cookie-policy" className="text-gold hover:underline">
              Cookie Policy
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    heading: "12. Data security",
    blocks: [
      {
        p: "We have put in place appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. We limit access to your personal data to those who have a genuine business need to know it.",
      },
    ],
  },
  {
    heading: "13. Third-party links",
    blocks: [
      {
        p: "Our website and community channels may contain links to third-party websites, plug-ins, and applications. We are not responsible for their privacy practices and encourage you to read the privacy policy of every website you visit.",
      },
    ],
  },
  {
    heading: "14. Children",
    blocks: [
      {
        p: "Our services are intended for individuals aged 18 and over. We do not knowingly collect personal data from anyone under 18. If you believe we have collected data from a minor, please contact us so we can delete it.",
      },
    ],
  },
  {
    heading: "15. Changes to this policy",
    blocks: [
      {
        p: "We may update this policy from time to time. The latest version will always be published on this page with the &quot;last updated&quot; date shown above. We encourage you to review it periodically.",
      },
    ],
  },
  {
    heading: "16. Contact and complaints",
    blocks: [
      {
        p: (
          <>
            If you have any questions about this policy or how we handle your data, contact us at{" "}
            {mail(legal.email.privacy)}.
          </>
        ),
      },
      {
        p: (
          <>
            You also have the right to make a complaint to the Information Commissioner&apos;s Office
            (ICO), the UK supervisory authority for data protection, at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-gold hover:underline">
              ico.org.uk
            </a>
            . We would, however, appreciate the chance to address your concerns first.
          </>
        ),
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated={legal.lastUpdated}
      self="/legal/privacy-policy"
      sections={sections}
    />
  );
}
