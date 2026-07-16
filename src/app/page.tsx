import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Philosophy from "../components/About";
import Strategy from "../components/Live";
import ValueProps from "../components/ValueProps";
import Results from "../components/Results";
import ClientStories from "../components/Mixes";
import LeadMagnet from "../components/LeadMagnet";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Application from "../components/Booking";
import RiskDisclaimer from "../components/RiskDisclaimer";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Philosophy />
        <Strategy />
        <ValueProps />
        <Results />
        <ClientStories />
        <LeadMagnet />
        <Insights />
        <FAQ />
        <Application />
        <RiskDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
