import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { SITE_URL } from "../../../siteConfig";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Cookie Policy | Limitless Trading",
  description:
    "How Limitless Trading Group uses cookies and similar technologies, in line with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.",
  alternates: { canonical: `${SITE_URL}/legal/cookie-policy` },
};

const mail = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-gold hover:underline">
    {addr}
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "1. What are cookies?",
    blocks: [
      {
        p: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve efficiency, and to provide reporting information. Similar technologies include pixels, tags, and local storage — we refer to all of these as \"cookies\" in this policy.",
      },
    ],
  },
  {
    heading: "2. How we use cookies",
    blocks: [
      {
        p: `${legal.brand} uses cookies to operate our website, remember your preferences, understand how our website is used, and — where you consent — to support marketing. We use cookies in accordance with the Privacy and Electronic Communications Regulations 2003 (PECR) and the UK GDPR.`,
      },
    ],
  },
  {
    heading: "3. Categories of cookies we use",
    blocks: [
      { subhead: "Strictly necessary cookies" },
      {
        p: "These are required for our website to function, such as maintaining security and remembering your cookie choices. They do not require consent and cannot be switched off in our systems.",
      },
      { subhead: "Functional cookies" },
      {
        p: "These allow us to remember choices you make (such as language or region) to provide a more personal experience.",
      },
      { subhead: "Analytics and performance cookies" },
      {
        p: "These help us understand how visitors use our website — for example, which pages are most visited — so we can improve it. The information is aggregated and, where possible, anonymised.",
      },
      { subhead: "Marketing cookies" },
      {
        p: "These may be set through our website by us or our advertising partners to build a profile of your interests and show you relevant content on other sites. They are only used with your consent.",
      },
    ],
  },
  {
    heading: "4. Consent",
    blocks: [
      {
        p: "When you first visit our website, we will ask for your consent to set non-essential cookies. You can accept, reject, or manage your preferences at any time. Strictly necessary cookies will always be active. Withdrawing consent will not affect the lawfulness of processing carried out before withdrawal.",
      },
    ],
  },
  {
    heading: "5. Third-party cookies",
    blocks: [
      {
        p: "Some cookies are set by third-party services that appear on our pages, such as analytics providers and embedded content or community platforms. We do not control these cookies, and you should review the relevant third party's own cookie and privacy policies.",
      },
    ],
  },
  {
    heading: "6. Managing cookies in your browser",
    blocks: [
      {
        p: "Most web browsers allow you to control cookies through their settings. You can set your browser to block or delete cookies. Please note that disabling certain cookies may affect the functionality of our website. Guidance for managing cookies is available at aboutcookies.org and allaboutcookies.org.",
      },
    ],
  },
  {
    heading: "7. Changes to this policy",
    blocks: [
      {
        p: "We may update this Cookie Policy from time to time to reflect changes in technology or law. The latest version will always be published on this page.",
      },
    ],
  },
  {
    heading: "8. Contact",
    blocks: [
      {
        p: (
          <>
            If you have questions about our use of cookies, please contact us at {mail(legal.email.privacy)}.
            For more on how we handle personal data, see our{" "}
            <a href="/legal/privacy-policy" className="text-gold hover:underline">
              Privacy Policy
            </a>
            .
          </>
        ),
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalDoc
      title="Cookie Policy"
      updated={legal.lastUpdated}
      self="/legal/cookie-policy"
      sections={sections}
    />
  );
}
