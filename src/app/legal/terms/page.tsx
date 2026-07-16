import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { SITE_URL } from "../../../siteConfig";
import { legal, entityDescription } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Terms & Conditions | Limitless Trading",
  description:
    "The terms and conditions governing your use of the Limitless Trading Group website, services, community, education, and programmes. Governed by the laws of England and Wales.",
  alternates: { canonical: `${SITE_URL}/legal/terms` },
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
    heading: "1. About these terms",
    blocks: [
      {
        p: `These Terms & Conditions ("Terms") govern your access to and use of the ${legal.brand} website and our services. By accessing our website, purchasing a product, or using any of our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.`,
      },
      { p: `${entityDescription}` },
    ],
  },
  {
    heading: "2. Definitions",
    blocks: [
      {
        ul: [
          '"Services" means our VIP community and signals, trading mastery and education, funded trading programme, VIP fund management, automated trading, shop products, and affiliate and introducing broker programmes.',
          '"Content" means all material we provide, including courses, videos, signals, analysis, and community discussion.',
          '"Partners" means the trusted, licensed brokers and third parties we work with.',
          '"You" and "your" means the individual or entity using our website or Services.',
        ],
      },
    ],
  },
  {
    heading: "3. Eligibility",
    blocks: [
      {
        p: "You must be at least 18 years old and legally able to enter into a binding contract to use our Services. You are responsible for ensuring that your use of our Services is lawful in your country of residence. Our Services are not directed at any person in any jurisdiction where their use would be contrary to local law.",
      },
    ],
  },
  {
    heading: "4. Nature of our Services — education, not financial advice",
    blocks: [
      {
        p: "Our Services are educational and informational in nature. We provide education, community, tools, and, where applicable, connections to licensed partners and brokers.",
      },
      {
        p: (
          <>
            Nothing we provide constitutes financial, investment, tax, or legal advice, or a personal
            recommendation to buy, sell, or hold any financial instrument. You are solely responsible
            for your own trading and investment decisions. Please read our {link("/legal/disclaimer", "Disclaimer")}{" "}
            and {link("/legal/risk-disclosure", "Risk Disclosure")} carefully before using our Services.
          </>
        ),
      },
    ],
  },
  {
    heading: "5. Our partners and brokers",
    blocks: [
      {
        p: "We work with trusted and reputable licensed partners and brokers to ensure we operate within their regulations and standards of service. Where you choose to open or operate a trading account through one of our partners, your relationship for that account is governed by that partner's own terms and regulatory framework. We are not responsible for the acts, omissions, or services of any third-party partner or broker.",
      },
    ],
  },
  {
    heading: "6. Accounts and registration",
    blocks: [
      {
        p: "To access certain Services you may need to create an account or join a community channel. You agree to provide accurate information, keep it up to date, and keep your login credentials confidential. You are responsible for all activity that takes place under your account.",
      },
    ],
  },
  {
    heading: "7. Fees, payments, and subscriptions",
    blocks: [
      {
        p: "The price of products and services is displayed at the point of purchase. Where a service is provided on a recurring subscription basis, you authorise us (or our payment providers) to charge the applicable fee for each billing period until you cancel. All fees are stated inclusive or exclusive of VAT as indicated at checkout.",
      },
      {
        p: "If you are a consumer, you may have statutory rights to cancel certain purchases and to obtain a refund under applicable UK consumer protection law, including the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013. Any specific cancellation and refund terms will be made available to you at the point of purchase.",
      },
    ],
  },
  {
    heading: "8. Acceptable use",
    blocks: [
      { p: "You must use our website, community, and Services lawfully and responsibly. In particular, you must not:" },
      {
        ul: [
          "Use our Services in any way that breaches any applicable law or regulation, or for any unlawful or fraudulent purpose.",
          "Copy, resell, redistribute, or share our Content, including signals and course materials, outside the community or without our written permission.",
          "Post content that is unlawful, misleading, defamatory, obscene, or infringing of any third party's rights.",
          "Impersonate any person, or provide personal financial advice to other members.",
          "Attempt to gain unauthorised access to, interfere with, or disrupt our Services or systems.",
          "Harass, abuse, or threaten other members or our team.",
        ],
      },
      { p: "We may suspend or terminate your access if you breach these Terms." },
    ],
  },
  {
    heading: "9. Intellectual property",
    blocks: [
      {
        p: `All Content, trademarks, logos, and materials provided through our Services are owned by or licensed to ${legal.brand} and are protected by intellectual property laws. We grant you a limited, personal, non-transferable, non-exclusive licence to access and use the Content for your own personal, non-commercial learning. You must not copy, redistribute, resell, or share the Content, including signals and course materials, without our prior written permission.`,
      },
    ],
  },
  {
    heading: "10. Community content",
    blocks: [
      {
        p: "You retain ownership of content you post in our community channels but grant us a worldwide, royalty-free licence to use, display, and moderate it for the purpose of operating the community. You are responsible for the content you post and must ensure it is lawful and does not infringe the rights of others.",
      },
    ],
  },
  {
    heading: "11. Disclaimers",
    blocks: [
      {
        p: "Our Services are provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, we make no warranties, express or implied, regarding the accuracy, reliability, or availability of our website, Content, or Services, or that any particular result, performance, or profit will be achieved.",
      },
    ],
  },
  {
    heading: "12. Limitation of liability",
    blocks: [
      {
        p: "Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded or limited under the laws of England and Wales.",
      },
      {
        p: "Subject to the above, we shall not be liable for any trading or investment losses, loss of profit, loss of data, or any indirect or consequential loss arising out of or in connection with your use of our Services. Our total liability to you for any claim shall not exceed the amount you paid to us for the relevant Service in the 12 months preceding the claim.",
      },
      {
        p: "If you are a consumer, these Terms do not affect your statutory rights under the Consumer Rights Act 2015 and other applicable consumer protection law.",
      },
    ],
  },
  {
    heading: "13. Indemnity",
    blocks: [
      {
        p: "You agree to indemnify us against any claims, losses, or costs arising from your breach of these Terms, your misuse of the Services, or your infringement of any third-party rights.",
      },
    ],
  },
  {
    heading: "14. Suspension and termination",
    blocks: [
      {
        p: "We may suspend or terminate your access to the Services at any time if you breach these Terms or where we are required to do so by law. You may stop using the Services at any time. Provisions that by their nature should survive termination will continue to apply.",
      },
    ],
  },
  {
    heading: "15. Changes to the Services and Terms",
    blocks: [
      {
        p: "We may update our Services and these Terms from time to time. The current version will always be available on this page. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    heading: "16. Complaints",
    blocks: [
      {
        p: (
          <>
            If you are unhappy with any aspect of our Services, please contact us at{" "}
            {mail(legal.email.general)} and we will do our best to put things right.
          </>
        ),
      },
    ],
  },
  {
    heading: "17. Governing law and jurisdiction",
    blocks: [
      {
        p: `These Terms, and any dispute or claim arising out of or in connection with them, are governed by and construed in accordance with the laws of ${legal.jurisdiction}. The courts of ${legal.jurisdiction} shall have exclusive jurisdiction, save that if you are a consumer resident elsewhere in the UK you may bring proceedings in your local courts.`,
      },
    ],
  },
  {
    heading: "18. Contact",
    blocks: [
      { p: <>Questions about these Terms can be sent to {mail(legal.email.general)}.</> },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms & Conditions"
      updated={legal.lastUpdated}
      self="/legal/terms"
      sections={sections}
    />
  );
}
