import { Play } from "lucide-react";
import { mixes } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const covers = [
  "MIX / 01 — ABSTRACT NOISE",
  "MIX / 02 — VINYL MACRO",
  "MIX / 03 — BOOTH MOTION",
];

const progress = [0, 0, 0];

export default function Mixes() {
  return (
    <section id="mixes" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="05" title="MIXES" meta="Recorded sets & podcasts" />

      <Reveal>
        <h2
          className="display uppercase text-text mt-10 mb-12"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Mixes.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mixes.map((mix, i) => (
          <Reveal key={mix.title} index={i}>
            <article className="mix-card bg-surface border border-border h-full flex flex-col">
              {/* progress bar */}
              <div className="h-[3px] w-full bg-border">
                <div
                  className="h-full bg-acid"
                  style={{ width: `${progress[i]}%` }}
                />
              </div>

              {/* cover */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-70" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(100% 100% at 30% 30%, rgba(170,255,0,0.08), transparent 60%)",
                  }}
                />
                <span className="absolute left-3 top-3 label">{covers[i]}</span>
                <div className="mix-play absolute inset-0 flex items-center justify-center opacity-0 transition-opacity">
                  <span className="w-14 h-14 flex items-center justify-center border border-acid text-acid bg-void/40">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
              </div>

              {/* meta */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="display font-medium text-[16px] text-white">
                  {mix.title}
                </h3>
                <p className="mono text-[11px] text-text-soft">{mix.context}</p>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="mono text-[11px] text-text-dim">
                    {mix.date}
                  </span>
                  <span className="mono text-[11px] text-acid">
                    {mix.runtime}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://soundcloud.com"
          target="_blank"
          rel="noreferrer"
          className="mono text-[11px] text-acid link-underline"
        >
          All mixes on Soundcloud →
        </a>
      </div>
    </section>
  );
}
