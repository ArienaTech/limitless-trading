import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Partners from "../components/Partners";
import Philosophy from "../components/About";
import ValueProps from "../components/ValueProps";
import Strategy from "../components/Live";
import ClientStories from "../components/Mixes";
import Performance from "../components/Performance";
import Insights from "../components/Insights";
import Application from "../components/Booking";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main>
        {/* 01 — Hero */}
        <Hero />
        {/* Trust metrics marquee */}
        <Ticker />
        {/* Partners strip */}
        <Partners />
        {/* 03 — Brand Philosophy */}
        <Philosophy />
        {/* 04 — Strategy / Problem We Solve */}
        <Strategy />
        {/* 05 — Core Value Proposition */}
        <ValueProps />
        {/* 06 — Client Success Stories */}
        <ClientStories />
        {/* 07 — Performance & Transparency */}
        <Performance />
        {/* 08 — Educational Insights */}
        <Insights />
        {/* 09 — Application Process + Final CTA */}
        <Application />
      </main>
      <Footer />
    </div>
  );
}
