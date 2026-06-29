import { metrics } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Performance() {
  return (
    <section id="performance" className="gutter py-24 sm:py-32 bg-void">
      <SectionLabel index="07" title="PERFORMANCE" meta="Operational metrics" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <h2
            className="display uppercase text-text mb-4"
            style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
          >
            Measurable.
            <br />
            <span className="text-gold">Transparent.</span>
          </h2>
          <p className="text-text-soft text-[14px] mb-12">
            We publish the metrics that demonstrate the quality of our infrastructure and execution. These are the numbers that matter.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border">
            {metrics.map((metric, i) => (
              <Reveal key={metric.label} index={i}>
                <div className="bg-void p-6 flex flex-col gap-1">
                  <span className="display font-bold text-gold" style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 1 }}>
                    {metric.value}
                  </span>
                  <span className="display font-medium text-white text-[13px]">{metric.label}</span>
                  <span className="mono text-[9px] text-text-dim mt-1">{metric.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal index={1} className="lg:mt-8">
          {/* IMAGE: Platform dashboard screenshot — dark UI.
              Shows: real-time P&L chart (upward trend), open positions table,
              risk gauge indicators, portfolio allocation breakdown.
              Style: clean, data-rich, dark theme with gold accents.
              This should look like a real product screenshot, not a generic chart.
              Alternatively: a short 10s screen recording / GIF of the platform in action. */}
          <ImagePlaceholder
            label="PLATFORM / DASHBOARD"
            sublabel="Product screenshot: dark UI, real-time P&L chart, positions table, risk gauges&#10;Gold accent colours, clean data-rich layout"
            className="aspect-[4/3] w-full"
            type="video"
          />

          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* IMAGE: Two supporting trust badges / certification logos.
                FCA logo + ISO 27001 certification mark on dark background.
                Clean, minimal layout — just the marks with short label beneath. */}
            <ImagePlaceholder
              label="BADGE / FCA REGULATED"
              sublabel="FCA authorisation badge or logo mark"
              className="aspect-[2/1]"
            />
            <ImagePlaceholder
              label="BADGE / ISO 27001"
              sublabel="ISO 27001 certification mark"
              className="aspect-[2/1]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
