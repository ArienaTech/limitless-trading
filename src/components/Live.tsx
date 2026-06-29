"use client";

import { useState } from "react";
import { shows, pastShows } from "../data";
import type { ShowType } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

function TypePill({ type }: { type: ShowType }) {
  const base = "mono text-[10px] px-2 py-1 whitespace-nowrap";
  if (type === "RESIDENCY") {
    return <span className={`${base} bg-acid text-void`}>{type}</span>;
  }
  if (type === "HEADLINE") {
    return <span className={`${base} border border-acid text-acid`}>{type}</span>;
  }
  return (
    <span className={`${base} border border-border text-text-soft`}>{type}</span>
  );
}

export default function Live() {
  const [showPast, setShowPast] = useState(false);

  return (
    <section id="live" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="03" title="LIVE" meta="2026 dates" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-12"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Upcoming Shows.
        </h2>
      </Reveal>

      <div className="border-t border-border">
        {shows.map((show, i) => (
          <Reveal key={`${show.date}-${show.venue}`} index={i}>
            <div className="show-card border-b border-border py-6 flex flex-col gap-4 md:grid md:grid-cols-[120px_1fr_auto_auto] md:items-center md:gap-6">
              <span className="mono text-[12px] text-acid">{show.date}</span>

              <span className="display font-medium text-[20px] text-white">
                {show.venue},{" "}
                <span className="text-text-soft">{show.city}</span>
              </span>

              <TypePill type={show.type} />

              <a
                href="#booking"
                className="mono text-[11px] text-text hover:text-acid transition-colors link-underline self-start md:self-auto"
              >
                TICKETS →
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <button
        onClick={() => setShowPast((v) => !v)}
        className="mono text-[11px] text-text-soft hover:text-acid transition-colors mt-8"
      >
        {showPast ? "− HIDE PAST SHOWS" : `+ PAST SHOWS (47)`}
      </button>

      {showPast && (
        <div className="mt-6 border-t border-border">
          {pastShows.map((p) => (
            <div
              key={`${p.date}-${p.venue}`}
              className="grid grid-cols-[120px_1fr_auto] gap-4 py-3 border-b border-border mono text-[11px] text-text-dim"
            >
              <span>{p.date}</span>
              <span className="text-text-soft">{p.venue}</span>
              <span>{p.city}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
