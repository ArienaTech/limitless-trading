import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Limitless Trading",
  description: "How Limitless Trading (LTG Trading Ltd) collects, uses, and protects your personal data. FCA regulated. GDPR compliant.",
  alternates: { canonical: "https://limitlesstrading.com/legal/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-void text-text min-h-screen">
      <Navbar />
      <main className="gutter pt-36 pb-32 max-w-3xl">
        <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">LEGAL</span>
        <h1 className="display uppercase text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95 }}>
          Privacy Policy
        </h1>
        <p className="mono text-[10px] text-text-dim mb-16">Last updated: June 2026</p>

        <div className="flex flex-col gap-12 text-text-soft text-[14px] leading-relaxed">
          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">1. Who we are</h2>
            <p>Limitless Trading (trading as LTG Trading Ltd) is a company registered in England and Wales and authorised and regulated by the Financial Conduct Authority. When we refer to &quot;we&quot;, &quot;us&quot; or &quot;Limitless&quot; in this policy, we mean LTG Trading Ltd. Our registered address is London, United Kingdom.</p>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">2. What data we collect</h2>
            <p className="mb-3">We collect the following categories of personal data when you interact with our website or apply for membership:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {["Full name and email address (application form)", "Background and trading experience (application form)", "Capital allocation intention (application form)", "Goals and objectives (application form)", "Website usage data (analytics)", "Communication history (email correspondence)"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-gold shrink-0">—</span>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">3. How we use your data</h2>
            <p className="mb-3">We use your personal data to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {["Process and assess your membership application", "Communicate with you about your application and membership", "Provide our trading services and educational programmes", "Comply with our FCA regulatory obligations", "Improve our website and services", "Send relevant updates and market intelligence (with your consent)"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-gold shrink-0">—</span>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">4. Legal basis for processing</h2>
            <p>We process your data on the following legal bases under UK GDPR: (a) performance of a contract or pre-contractual steps at your request; (b) compliance with our legal obligations as an FCA-regulated firm; (c) our legitimate interests in operating and improving our business; and (d) your consent, where we have obtained it.</p>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">5. Data retention</h2>
            <p>We retain personal data for as long as necessary to provide our services and comply with our legal and regulatory obligations. FCA regulations require us to retain certain records for a minimum of five years. Application data from unsuccessful applications is deleted within 12 months.</p>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">6. Your rights</h2>
            <p className="mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {["Access the personal data we hold about you", "Correct inaccurate personal data", "Request deletion of your personal data (subject to legal obligations)", "Object to or restrict our processing of your data", "Data portability", "Withdraw consent at any time where processing is based on consent"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-gold shrink-0">—</span>{item}</li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:compliance@ltgtrading.com" className="text-gold hover:underline">compliance@ltgtrading.com</a>.</p>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">7. Cookies</h2>
            <p>We use essential cookies to ensure our website functions correctly and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="display font-bold text-white text-[18px] mb-4">8. Contact</h2>
            <p>For privacy-related queries, contact our compliance team at <a href="mailto:compliance@ltgtrading.com" className="text-gold hover:underline">compliance@ltgtrading.com</a> or write to us at our registered office in London, United Kingdom. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-gold hover:underline">ico.org.uk</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
