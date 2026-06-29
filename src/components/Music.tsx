import { trustItems } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Trust() {
  return (
    <section id="trust" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="02" title="INFRASTRUCTURE" meta="Why you can trust us" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Built for Institutions.
          <br />
          <span className="text-gold">Available to You.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-12">
          Every element of LTG&rsquo;s infrastructure answers one question: why should
          you trust us with your capital? The answer is found in our regulation,
          our technology, our risk controls, and our transparency.
        </p>
      </Reveal>

      <div className="border-t border-border">
        {trustItems.map((item, i) => (
          <Reveal key={item.index} index={i}>
            <div className="track-row group border-b border-border grid grid-cols-1 md:grid-cols-[60px_200px_1fr] items-start gap-4 py-6">
              <span className="track-num mono text-[11px] text-text-dim transition-colors">
                {item.index}
              </span>

              <div className="flex flex-col gap-1">
                <span className="mono text-[10px] text-gold">{item.category}</span>
                <span className="display font-medium text-[16px] text-white">
                  {item.name}
                </span>
              </div>

              <span className="text-text-soft text-[14px] leading-relaxed md:pl-4">
                {item.detail}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
