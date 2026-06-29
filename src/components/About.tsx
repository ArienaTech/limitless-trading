import Image from "next/image";
import Reveal from "./Reveal";

const beliefs = [
  "Markets reward consistency — not prediction.",
  "Consistency comes from discipline.",
  "Discipline comes from process.",
  "Process creates long-term performance.",
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-void">
      {/* Hero-matching background: deep crimson radial gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #4A0808 0%, #1E0000 50%, #000000 100%)",
        }}
      />
      {/* Bottom fade to black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 60%, #000 100%)" }}
      />

      {/* ── Opening Statement ── */}
      <div className="relative z-10 gutter pt-24 pb-20 text-center border-b border-border">
        <Reveal>
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-8">
            THE LIMITLESS PHILOSOPHY
          </span>
          <h2
            className="display uppercase text-white mx-auto"
            style={{ fontSize: "clamp(38px, 7vw, 100px)", lineHeight: 0.92, maxWidth: "900px" }}
          >
            Winners don&apos;t leave it
            <br />
            <span style={{ color: "var(--gold)" }}>to chance.</span>
          </h2>
        </Reveal>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 gutter py-24 sm:py-32">
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2
              className="display uppercase text-white mb-10"
              style={{ fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 0.95 }}
            >
              The Conviction
              <br />
              <span className="text-gold">Behind the System.</span>
            </h2>

            <div className="flex flex-col gap-0 border-t border-border">
              {beliefs.map((line, i) => (
                <div key={i} className="flex items-start gap-5 py-5 border-b border-border">
                  <span className="mono text-[10px] text-gold mt-1 shrink-0">0{i + 1}</span>
                  <span className="display font-medium text-white text-[18px] leading-snug">{line}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-10 mt-10">
              <div>
                <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>2014</div>
                <div className="label mt-1">Founded</div>
              </div>
              <div>
                <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>$2.4B+</div>
                <div className="label mt-1">Capital managed</div>
              </div>
              <div>
                <div className="display text-gold font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>847</div>
                <div className="label mt-1">Active members</div>
              </div>
            </div>
          </Reveal>

          <Reveal index={1} className="lg:mt-8">
            {/* Executive portrait — serious, authoritative, dark premium office */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1594759845217-e9c99af2b6a4?auto=format&fit=crop&w=800&q=80"
                alt="LTG Trading — senior partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-void/50" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #000 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-5 left-5">
                <span className="mono text-[9px] text-gold block mb-1">LTG TRADING</span>
                <span className="mono text-[9px] text-text-dim">London, UK · Est. 2014</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

