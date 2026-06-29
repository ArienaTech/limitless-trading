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
    <section id="philosophy" className="gutter py-24 sm:py-32 bg-void">

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
    </section>
  );
}
