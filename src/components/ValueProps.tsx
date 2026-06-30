import Reveal from "./Reveal";
import Image from "next/image";

const cards = [
  {
    tag: "THE ENGINE",
    title: "Automated Execution",
    description:
      "Machine-precision execution that works the markets 24/7 — no emotion, no hesitation, no human error.",
    access: "By Application",
    accessSub: "ENQUIRY ONLY · NO PAYMENTS",
    features: [
      "Proprietary auto-trader, fully managed",
      "24/7 global market coverage",
      "Built-in risk discipline",
    ],
    cta: "ENQUIRE",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img.png",
    title: "Education & Community",
    description:
      "We don't sell signals — we build traders. A vetted community and a structured path to genuine mastery.",
    access: "By Application",
    accessSub: "CRITERIA-BASED ACCESS",
    features: [
      "Structured education, fundamentals to pro",
      "Live market breakdowns & trade reasoning",
      "Vetted, exclusive community",
      "Direct mentorship from live traders",
    ],
    cta: "APPLY FOR ACCESS",
    ctaHref: "#apply",
    featured: true,
    badge: "★ FLAGSHIP · MEMBER FAVOURITE",
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img2.png",
  },
  {
    tag: "MANAGED CAPITAL",
    title: "Fund Management",
    description:
      "Professional, hands-off management for qualifying members — the same systematic edge, applied to your capital.",
    access: "By Application",
    accessSub: "QUALIFYING MEMBERS ONLY",
    features: [
      "Hands-off professional management",
      "Transparent, real-time reporting",
      "Institutional risk discipline",
    ],
    cta: "REQUEST CRITERIA",
    ctaHref: "#apply",
    featured: false,
    image: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/WhatWeDo-img3.png",
  },
];

export default function ValueProps() {
  return (
    <section id="values" className="gutter py-24 sm:py-32 bg-void-2">
      <Reveal>
        <p className="mono text-[10px] text-text-soft tracking-[0.3em] mb-6 text-center">
          WHAT WE DO
        </p>
        <h2
          className="display uppercase text-center mb-16"
          style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.95 }}
        >
          <span className="text-white">THE LIMITLESS </span>
          <span className="text-gold">STANDARD.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {cards.map((card, i) => (
          <Reveal key={card.tag} index={i}>
            <div
              className={`relative flex flex-col h-full transition-colors duration-300 ${
                card.featured
                  ? "border border-gold/60 bg-[#1a0a0a]"
                  : "border border-border bg-[#0f0d0b] hover:border-border-hi"
              }`}
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              {/* Badge */}
              {card.featured && card.badge && (
                <div
                  className="flex items-center justify-center gap-2 py-2.5 px-4"
                  style={{ background: "#5C0A0A" }}
                >
                  <span className="mono text-[9px] text-gold tracking-[0.2em]">
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-void/50" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Tag */}
                <span className="mono text-[9px] text-gold tracking-[0.2em]">{card.tag}</span>

                {/* Title */}
                <h3
                  className="display font-bold text-white"
                  style={{ fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: 1.1 }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-text-soft text-[13px] leading-relaxed">{card.description}</p>

                {/* Access label */}
                <div className="pt-1">
                  <p
                    className="text-gold mb-0.5"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                    }}
                  >
                    {card.access}
                  </p>
                  <span className="mono text-[9px] text-text-dim tracking-[0.15em]">
                    {card.accessSub}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-border" />

                {/* Feature list */}
                <ul className="flex flex-col gap-2 flex-1">
                  {card.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[13px] text-text-soft border border-border px-4 py-3"
                      style={{ borderRadius: "999px" }}
                    >
                      <span className="text-gold text-[11px]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={card.ctaHref}
                  className={`mt-4 w-full py-4 text-center mono text-[10px] tracking-[0.2em] transition-colors duration-200 block ${
                    card.featured
                      ? "bg-gold text-void hover:bg-gold-dim"
                      : "border border-border-hi text-text hover:border-gold hover:text-gold"
                  }`}
                  style={{ borderRadius: "999px" }}
                >
                  {card.cta}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
