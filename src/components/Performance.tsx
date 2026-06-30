import Image from "next/image";
import { metrics } from "../data";
import Reveal from "./Reveal";
import { motion } from "motion/react";

export default function Performance() {
  return (
    <section id="performance" className="relative overflow-hidden gutter py-32 sm:py-40 bg-void">
      {/* Subtle echo of hero gradient — anchors the dark section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, #3A0505 0%, #0D0000 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                <motion.div
                  className="bg-void p-6 flex flex-col gap-1 cursor-default"
                  whileHover={{ backgroundColor: "#0a0505" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="display font-bold text-gold"
                    style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 1 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {metric.value}
                  </motion.span>
                  <span className="display font-medium text-white text-[13px]">{metric.label}</span>
                  <span className="mono text-[9px] text-text-dim mt-1">{metric.note}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal index={1} className="lg:mt-8">
          {/* Platform dashboard — systematic trading interface, dark UI, charts */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border mb-6">
            <Image
              src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Image2.png"
              alt="LTG Trading platform dashboard"
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

          {/* Trust signals strip */}
          <div className="mt-4 border border-border bg-surface grid grid-cols-2 gap-px">
            {[
              { label: "AUTOMATED FOREX EXECUTION", sub: "24/7 global markets" },
              { label: "99.97% UPTIME", sub: "Since launch, 2014" },
              { label: "PROFESSIONAL FUND MANAGEMENT", sub: "Qualifying members" },
              { label: "EXCLUSIVE VIP COMMUNITY", sub: "Criteria-based access" },
            ].map((item) => (
              <div key={item.label} className="p-4 border-border">
                <span className="mono text-[9px] text-gold block tracking-[0.1em]">{item.label}</span>
                <span className="mono text-[9px] text-text-dim mt-1 block">{item.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
