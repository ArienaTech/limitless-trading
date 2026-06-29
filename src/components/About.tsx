import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const beliefs = [
  "Markets reward consistency — not prediction.",
  "Consistency comes from discipline.",
  "Discipline comes from process.",
  "Process creates long-term performance.",
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="03" title="PHILOSOPHY" meta="What we believe" />

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
                <span className="mono text-[10px] text-gold mt-1 shrink-0">
                  0{i + 1}
                </span>
                <span className="display font-medium text-white text-[18px] leading-snug">
                  {line}
                </span>
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
          {/* IMAGE: Founder or senior partner portrait. Dark, premium office environment.
              Serious expression. Soft directional lighting from the left.
              Subject looking slightly off-camera, confident posture.
              Style: editorial/corporate, not stock-photo. Dark background. */}
          <ImagePlaceholder
            label="FOUNDER / PORTRAIT"
            sublabel="Editorial portrait — founder or senior partner&#10;Dark office, premium lighting, confident posture"
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
