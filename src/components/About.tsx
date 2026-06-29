import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function About() {
  return (
    <section id="about" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="04" title="ARTIST" meta="Berlin, DE" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
        <Reveal className="order-2 lg:order-1">
          <h2
            className="display uppercase text-white mb-8"
            style={{ fontSize: "clamp(48px, 6vw, 90px)", lineHeight: 0.95 }}
          >
            VØID
          </h2>

          <p className="text-text-soft text-[15px] leading-relaxed max-w-xl">
            VØID is a Berlin-based DJ and producer working at the intersection
            of industrial techno, dub, and modern classical. Residencies at
            Tresor and Panorama Bar since 2019.
          </p>
          <p className="text-text-soft text-[15px] leading-relaxed max-w-xl mt-5">
            Releases on Ostgut Ton, Blueprint, Semantica and Prologue. Known for
            sets that move between club science and something approaching
            silence — then back again.
          </p>

          <div className="flex gap-12 mt-10">
            <div>
              <div className="display text-acid text-5xl">8</div>
              <div className="label mt-2">Years active</div>
            </div>
            <div>
              <div className="display text-acid text-5xl">47</div>
              <div className="label mt-2">Shows in 2025</div>
            </div>
          </div>

          <a
            href="#"
            className="inline-block mono text-[11px] text-acid link-underline mt-10"
          >
            Download Press Kit ↓
          </a>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:mt-16">
          <ImagePlaceholder
            label="ARTIST / PORTRAIT"
            className="aspect-[3/4] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
