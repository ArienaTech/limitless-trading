import Image from "next/image";
import { clientStories } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

// Contextual images representing each client's world
const storyImages = [
  {
    src: "https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?auto=format&fit=crop&w=800&q=80",
    alt: "Institutional portfolio management — multiple screens and data",
  },
  {
    src: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?auto=format&fit=crop&w=800&q=80",
    alt: "Business professional — strategic capital allocation",
  },
  {
    src: "https://images.unsplash.com/photo-1689732888407-310424e3a372?auto=format&fit=crop&w=800&q=80",
    alt: "Active trader — candlestick chart analysis on screen",
  },
];

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
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={storyImages[i].src}
                  alt={storyImages[i].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-void/60" />
                <div className="absolute top-4 left-4">
                  <span className="display font-bold text-gold text-[32px] leading-none">{story.initials}</span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="display font-bold text-white text-[20px]">{story.stat}</div>
                  <div className="mono text-[9px] text-text-dim">{story.statLabel}</div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <p className="mono text-[10px] text-text-soft leading-relaxed">{story.background}</p>
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
