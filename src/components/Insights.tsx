import { insights } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Insights() {
  return (
    <section id="insights" className="gutter py-24 sm:py-32 bg-void-2">
      <SectionLabel index="08" title="INSIGHTS" meta="Education & market intelligence" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Think Before
          <br />
          <span className="text-gold">You Trade.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-16">
          LTG members receive weekly market intelligence, trading education, and
          risk management analysis. Whether you are new to systematic trading or
          experienced — understanding the framework is the first step.
        </p>
      </Reveal>

      <div className="border-t border-border">
        {insights.map((insight, i) => (
          <Reveal key={insight.index} index={i}>
            <article className="track-row group border-b border-border py-8 grid grid-cols-1 md:grid-cols-[60px_160px_1fr_120px] items-center gap-6">
              <span className="track-num mono text-[11px] text-text-dim transition-colors">
                {insight.index}
              </span>

              <span className="mono text-[10px] text-gold">
                {insight.category}
              </span>

              <div>
                <h3 className="display font-medium text-[17px] text-white mb-2">
                  {insight.title}
                </h3>
                <p className="text-text-soft text-[13px] leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>

              <span className="mono text-[10px] text-text-dim md:text-right">
                {insight.readTime}
              </span>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-6">
        <a
          href="#apply"
          className="mono text-[11px] text-gold link-underline"
        >
          Access full insight library as a member →
        </a>
      </div>
    </section>
  );
}
