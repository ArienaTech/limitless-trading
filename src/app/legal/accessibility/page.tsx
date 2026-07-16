import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../../../components/LegalDoc";
import { legal } from "../../../legalMeta";

export const metadata: Metadata = {
  title: "Accessibility Statement | Limitless Trading",
  description:
    "Limitless Trading Group's commitment to making our website accessible, aiming to conform with WCAG 2.1 AA and the Equality Act 2010.",
  alternates: { canonical: "https://limitlesstrading.com/legal/accessibility" },
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
        p: `${legal.brand} is committed to making our website accessible to as many people as possible, regardless of ability or technology. We aim to meet our responsibilities under the Equality Act 2010 and to follow recognised good practice for web accessibility.`,
      },
    ],
  },
  {
    heading: "2. Standards we aim for",
    blocks: [
      {
        p: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities.",
      },
    ],
  },
  {
    heading: "3. Measures we take",
    blocks: [
      { p: "Steps we take to support accessibility include:" },
      {
        ul: [
          "Using semantic HTML and clear heading structure.",
          "Providing a visible \"skip to main content\" link for keyboard users.",
          "Designing for keyboard navigation and visible focus states.",
          "Aiming for sufficient colour contrast between text and background.",
          "Providing descriptive text alternatives for meaningful images.",
          "Using responsive layouts that adapt to different devices and zoom levels.",
        ],
      },
    ],
  },
  {
    heading: "4. Known limitations",
    blocks: [
      {
        p: "Despite our best efforts, some parts of our website may not yet be fully accessible. We are working to identify and resolve any issues. Some third-party content, embedded platforms, or community tools may not be fully within our control.",
      },
    ],
  },
  {
    heading: "5. Feedback and contact",
    blocks: [
      {
        p: (
          <>
            We welcome your feedback on the accessibility of our website. If you encounter any barriers
            or need information in an alternative format, please contact us at {mail(legal.email.general)}{" "}
            and we will do our best to help. We aim to respond within five working days.
          </>
        ),
      },
    ],
  },
  {
    heading: "6. Ongoing improvement",
    blocks: [
      {
        p: "Accessibility is an ongoing effort. We regularly review our website and will update this statement as improvements are made.",
      },
    ],
  },
];

export default function Accessibility() {
  return (
    <LegalDoc
      title="Accessibility Statement"
      updated={legal.lastUpdated}
      self="/legal/accessibility"
      sections={sections}
    />
  );
}
