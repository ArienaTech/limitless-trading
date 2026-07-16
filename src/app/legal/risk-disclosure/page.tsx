import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Risk Disclosure | Limitless Trading",
  description: "Important risk information for clients and prospective members of Limitless Trading Group.",
  alternates: { canonical: "https://limitlesstrading.com/legal/risk-disclosure" },
};

export default function RiskDisclosure() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main className="gutter pt-36 pb-32 max-w-3xl">
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">LEGAL</span>
        <h1 className="display uppercase text-text mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95 }}>
          Risk Disclosure
        </h1>
        <p className="mono text-[10px] text-text-dim mb-16">Last updated: June 2026</p>

        <div className="flex flex-col gap-10 text-text-soft text-[14px] leading-relaxed">
          <div className="border border-gold/40 bg-surface p-6">
            <p className="text-text font-medium text-[15px]">
              <strong>Important:</strong> Trading forex and other financial instruments carries significant risk of loss. 
              You should only trade or invest capital you can afford to lose. Past performance is not indicative of future results.
            </p>
          </div>

          {[
            { title: "1. Capital at risk", body: "All trading and investment activity involves risk of capital loss. There is no guarantee that you will make a profit or recover any amount invested. The value of investments and any income from them can fall as well as rise." },
            { title: "2. Forex and leveraged products", body: "Foreign exchange (forex) trading involves significant risk due to leverage, market volatility, and the 24-hour nature of global currency markets. Leverage amplifies both potential profits and potential losses. A small adverse movement in the market can result in a loss greater than your initial deposit." },
            { title: "3. Systematic and algorithmic trading", body: "While systematic strategies aim to remove emotional bias, they are not immune to losses. Historical performance of any trading system does not guarantee future results. Systems may perform differently across different market conditions." },
            { title: "4. Managed capital", body: "Where capital is managed through our services, trading decisions are made according to the agreed strategy. While professional diligence is exercised, performance cannot be guaranteed and there is no protection against market losses." },
            { title: "5. No financial advice", body: "Nothing on this website constitutes financial advice, investment advice, or a recommendation to buy or sell any financial instrument. You should seek independent professional advice before making any investment decision." },
            { title: "6. Licensing", body: "Limitless Trading Group works with trusted and reputable licensed partners and brokers to ensure we operate within their regulations and standards of service. Our number-one pillar is to ensure that every individual introduced into the financial markets is educated and aware of the risks." },
            { title: "7. Past performance", body: "Any performance data, statistics, or case studies presented on this website or in our materials relate to past performance only. Past performance is not a reliable indicator of future results. Performance figures may be based on simulated or live results and both carry uncertainty." },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="display font-bold text-text text-[18px] mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="display font-bold text-text text-[18px] mb-3">8. Contact</h2>
            <p>For any enquiries relating to this disclosure: <a href="mailto:compliance@ltgtrading.com" className="text-gold hover:underline">compliance@ltgtrading.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
