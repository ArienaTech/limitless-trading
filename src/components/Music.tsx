import Reveal from "./Reveal";

export default function Trust() {
  return (
    <section id="trust" className="gutter py-20 sm:py-28 bg-void">
      <Reveal>
        <h2
          className="display uppercase text-text"
          style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
        >
          Built for Institutions.
          <br />
          <span className="text-gold">Available to You.</span>
        </h2>
      </Reveal>
    </section>
  );
}
