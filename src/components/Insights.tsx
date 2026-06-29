import { insights } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const insightImages = [
  "INSIGHT / SYSTEMATIC vs DISCRETIONARY",
  "INSIGHT / PSYCHOLOGY OF TRADING",
  "INSIGHT / RISK-ADJUSTED RETURNS",
];

const insightImageDesc = [
  "Abstract: two lines on dark chart — erratic vs. steady systematic trend\nGold steady line wins over time",
  "Close-up: human eye reflecting a trading screen\nIntense, moody, dark — the cost of emotion",
  "Minimalist: Sharpe ratio curve on dark background\nClean, analytical, precise",
];

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
        <p className="text-text-soft text-[14px] mb-16 max-w-xl">
          Members receive weekly market intelligence and trading education. Understanding the framework is the first step.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, i) => (
          <Reveal key={insight.index} index={i}>
            <article className="mix-card bg-surface border border-border h-full flex flex-col group">
              {/* IMAGE: Editorial article thumbnail — see sublabel per article */}
              <ImagePlaceholder
                label={insightImages[i]}
                sublabel={insightImageDesc[i]}
                className="aspect-[16/9]"
              />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="mono text-[9px] text-gold">{insight.category}</span>
                  <span className="mono text-[9px] text-text-dim">{insight.readTime}</span>
                </div>
                <h3 className="display font-medium text-[15px] text-white leading-snug flex-1">
                  {insight.title}
                </h3>
                <a href="#apply" className="mono text-[10px] text-gold link-underline self-start mt-2">
                  Read as a member →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
