import Image from "next/image";
import { metrics } from "../data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

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
          {/* Platform dashboard — systematic trading interface, dark UI, charts */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border mb-6">
            <Image
              src="https://images.unsplash.com/photo-1748439435495-722cc1728b7e?auto=format&fit=crop&w=1000&q=80"
              alt="LTG systematic trading platform dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-void/30" />
            <div className="absolute top-4 left-4">
              <span className="mono text-[9px] text-gold">PLATFORM / LIVE VIEW</span>
            </div>
          </div>

          {/* Regulatory badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface border border-border p-5 flex flex-col items-center justify-center gap-2 text-center">
              <span className="display font-bold text-gold text-[22px]">FCA</span>
              <span className="mono text-[9px] text-text-soft">Authorised & Regulated</span>
              <span className="mono text-[9px] text-text-dim">Ref #987654</span>
            </div>
            <div className="bg-surface border border-border p-5 flex flex-col items-center justify-center gap-2 text-center">
              <span className="display font-bold text-gold text-[15px] leading-tight">ISO 27001</span>
              <span className="mono text-[9px] text-text-soft">Security Certified</span>
              <span className="mono text-[9px] text-text-dim">Annual audit · 2022</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
