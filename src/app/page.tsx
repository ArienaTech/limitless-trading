import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Philosophy from "../components/About";
import Strategy from "../components/Live";
import ValueProps from "../components/ValueProps";
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
        <Hero />
        <Partners />
        <Philosophy />
        <Strategy />
        <ValueProps />
        <ClientStories />
        <Performance />
        <Insights />
        <Application />
      </main>
      <Footer />
    </div>
  );
}
