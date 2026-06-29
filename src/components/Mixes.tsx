import { clientStories } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function ClientStories() {
  return (
    <section id="stories" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="06" title="CLIENTS" meta="Success stories" />

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
        <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mt-6 mb-12">
          These are the experiences of LTG members, shared with their permission.
          No performance claims — just honest accounts of how systematic trading
          changed their approach to capital.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientStories.map((story, i) => (
          <Reveal key={story.initials} index={i}>
            <article className="mix-card bg-surface border border-border h-full flex flex-col">
              {/* top accent bar */}
              <div className="h-[3px] w-full bg-border">
                <div className="h-full bg-gold" style={{ width: "100%" }} />
              </div>

              {/* header */}
              <div className="p-6 border-b border-border flex items-start justify-between gap-4">
                <div>
                  <div
                    className="display font-bold text-gold"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1 }}
                  >
                    {story.initials}
                  </div>
                  <p className="mono text-[10px] text-text-soft mt-2">
                    {story.background}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="display font-bold text-white text-2xl">
                    {story.stat}
                  </div>
                  <div className="mono text-[9px] text-text-dim mt-1 max-w-[100px]">
                    {story.statLabel}
                  </div>
                </div>
              </div>

              {/* challenge & outcome */}
              <div className="p-6 flex flex-col gap-5 flex-1">
                <div>
                  <span className="mono text-[9px] text-gold block mb-2">
                    THE CHALLENGE
                  </span>
                  <p className="text-text-soft text-[13px] leading-relaxed">
                    {story.challenge}
                  </p>
                </div>
                <div>
                  <span className="mono text-[9px] text-gold block mb-2">
                    THE OUTCOME
                  </span>
                  <p className="text-text-soft text-[13px] leading-relaxed">
                    {story.outcome}
                  </p>
                </div>
              </div>

              {/* quote */}
              <div className="px-6 pb-6">
                <blockquote className="border-l-2 border-gold pl-4">
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
