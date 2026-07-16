import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Philosophy from "../components/About";
import Strategy from "../components/Live";
import ValueProps from "../components/ValueProps";
import ClientStories from "../components/Mixes";
import LeadMagnet from "../components/LeadMagnet";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Application from "../components/Booking";
import Footer from "../components/Footer";
import { appSteps } from "../data";
import { SITE_URL } from "../siteConfig";

// HowTo schema — makes the application journey eligible for rich results and
// extractable by voice/answer engines (AEO).
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to become a Limitless Trading member",
  description:
    "The five-step process to apply for and join Limitless Trading Group — from first contact to becoming a professional systematic trader.",
  totalTime: "P1D",
  step: appSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
    url: `${SITE_URL}/#apply`,
  })),
};

// WebPage + Speakable — flags the primary answerable content for voice search.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Limitless Trading Group — Systematic Forex Trading, Education & Fund Management",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "en-GB",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#faq"],
  },
};

export default function Page() {
  return (
    <div className="bg-void text-text min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Philosophy />
        <Strategy />
        <ValueProps />
        <ClientStories />
        <LeadMagnet />
        <Insights />
        <FAQ />
        <Application />
      </main>
      <Footer />
    </div>
  );
}
