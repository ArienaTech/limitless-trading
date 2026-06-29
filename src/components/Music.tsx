import { Play } from "lucide-react";
import { tracks } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Music() {
  return (
    <section id="music" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="02" title="MUSIC" meta="Selected works, 2022—2026" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-12"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Selected Works.
        </h2>
      </Reveal>

      <div className="border-t border-border">
        {tracks.map((track, i) => (
          <Reveal key={track.num} index={i}>
            <div className="track-row group border-b border-border grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_180px_70px_110px_40px] items-center gap-4 py-5">
              <span className="track-num mono text-[11px] text-text-dim transition-colors">
                {track.num}
              </span>

              <span className="display font-medium text-[16px] text-white truncate">
                {track.title}
              </span>

              <span className="hidden md:block mono text-[11px] text-text-soft truncate">
                {track.label}
              </span>

              <span className="hidden md:block mono text-[11px] text-text-soft">
                {track.year}
              </span>

              <span className="hidden md:flex">
                <span className="mono text-[10px] text-text-soft border border-border px-2 py-1">
                  {track.format}
                </span>
              </span>

              <span className="track-play opacity-0 transition-opacity flex justify-end text-acid">
                <Play size={16} fill="currentColor" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-6">
        <a
          href="https://soundcloud.com"
          target="_blank"
          rel="noreferrer"
          className="mono text-[11px] text-acid link-underline"
        >
          Stream on Soundcloud →
        </a>
        <a
          href="https://discogs.com"
          target="_blank"
          rel="noreferrer"
          className="mono text-[11px] text-acid link-underline"
        >
          Discogs ↗
        </a>
      </div>
    </section>
  );
}
