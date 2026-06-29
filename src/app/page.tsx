import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Music from "../components/Music";
import Live from "../components/Live";
import About from "../components/About";
import Mixes from "../components/Mixes";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Music />
        <Live />
        <About />
        <Mixes />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
