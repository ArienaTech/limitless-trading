import { clientStories } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ClientStories() {
  return (
    <section id="stories" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="06" title="CLIENTS" meta="In their own words" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Real People.
          <br />
          <span className="text-gold">Real Results.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-text-soft text-[14px] mb-16 max-w-xl">
          Shared with permission. No performance projections — just honest accounts of what changed.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clientStories.map((story, i) => (
          <Reveal key={story.initials} index={i}>
            <article className="mix-card bg-surface border border-border h-full flex flex-col">
              {/* IMAGE: Anonymous client portrait — silhouette, blurred, or geometric avatar.
                  No identifying features. Dark background. Warm/gold tone.
                  Style: editorial, not stock photo. Each should feel distinct.
                  MH: office/formal setting. SR: business/entrepreneurial. AT: focused/desk. */}
              <ImagePlaceholder
                label={`CLIENT / ${story.initials}`}
                sublabel={`Anonymous portrait — ${story.background}\nSilhouette or blurred, editorial style`}
                className="aspect-[3/2]"
              />

              <div className="p-6 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <p className="mono text-[10px] text-text-soft leading-relaxed">{story.background}</p>
                  <div className="text-right shrink-0">
                    <div className="display font-bold text-gold text-[22px]">{story.stat}</div>
                    <div className="mono text-[9px] text-text-dim max-w-[90px]">{story.statLabel}</div>
                  </div>
                </div>

                <blockquote className="border-l-2 border-gold pl-4 mt-auto">
                  <p className="text-[13px] text-text leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
