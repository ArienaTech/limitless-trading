import { trustItems } from "../data";
import Reveal from "./Reveal";

export default function Trust() {
  return (
    <section id="trust" className="gutter py-24 sm:py-32 bg-void">

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-12"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Built for Institutions.
          <br />
          <span className="text-gold">Available to You.</span>
        </h2>
      </Reveal>

      <div className="border-t border-border">
        {trustItems.map((item, i) => (
          <Reveal key={item.index} index={i}>
            <div className="track-row group border-b border-border grid grid-cols-1 md:grid-cols-[60px_180px_1fr] items-center gap-4 py-5">
              <span className="track-num mono text-[11px] text-text-dim transition-colors">
                {item.index}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="mono text-[9px] text-gold">{item.category}</span>
                <span className="display font-medium text-[15px] text-white">{item.name}</span>
              </div>
              <span className="text-text-soft text-[13px] leading-snug">{item.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
