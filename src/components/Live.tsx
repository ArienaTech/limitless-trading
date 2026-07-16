"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const failureReasons = [
  { num: "01", title: "Emotion over logic" },
  { num: "02", title: "Overtrading with too much confidence" },
  { num: "03", title: "Closing profit too early" },
  { num: "04", title: "Increased risk and gambling" },
  { num: "05", title: "Lack of consistency and strategy" },
];

export default function Strategy() {
  return (
    <section id="strategy" className="gutter pt-16 pb-16 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40 bg-void">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <Reveal>
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">THE PROBLEM</span>
          <h2
            className="display uppercase text-text mb-4 sm:mb-6"
            style={{ fontSize: "clamp(36px, 7vw, 110px)", lineHeight: 0.95 }}
          >
            Why Most Traders
            <br />
            <span className="text-gold">Never Make It.</span>
          </h2>
          <p className="text-text-soft text-[15px] mb-10 leading-relaxed max-w-md">
            Only 1% of traders that enter the forex markets will develop longevity. At LTG
            we believe it&apos;s not the strategy the trader uses, but their mindset, psychology
            &amp; emotional control that sets them back. Our approach is to master the individual
            before mastering the trader.
          </p>

          <div className="border-t border-border">
            {failureReasons.map((reason, i) => (
              <motion.div
                key={reason.num}
                className="show-card border-b border-border py-4 flex items-center gap-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                <span className="mono text-[11px] text-gold shrink-0">{reason.num}</span>
                <span className="display font-medium text-[16px] text-text">{reason.title}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-text-soft text-[14px] mt-8 leading-relaxed max-w-md">
            Sound familiar? You&apos;re not alone — and it&apos;s not your fault. 
            The game is designed to punish discretion. The only answer is a system.
          </p>
        </Reveal>

        <Reveal index={1}>
          {/* OPEN ITEM (§6): swap this placeholder for the over-the-shoulder shot
              of Dee trading at his setup once supplied by the client. */}
          <div className="relative aspect-[4/3] w-full overflow-hidden mb-8">
            <ImagePlaceholder
              label="AT THE DESK"
              sublabel="Over-the-shoulder trading shot — coming soon"
              className="w-full h-full"
            />
          </div>

          <div className="border border-gold/30 bg-surface p-8">
            <span className="mono text-[10px] text-gold block mb-4">THE LTG SOLUTION</span>
            <h3
              className="display uppercase text-text mb-4"
              style={{ fontSize: "clamp(22px, 3vw, 38px)", lineHeight: 1 }}
            >
              We build our traders&apos; success through our complete ecosystem.
            </h3>
            <p className="text-text-soft text-[13px] mb-6 leading-relaxed">
              Our system executes with zero emotion, zero fatigue, and zero deviation from the rules — 
              24 hours a day, across every market condition.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Rules-based execution — no improvisation, ever</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Algorithms act in milliseconds — emotion removed entirely</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Independent risk controls active on every trade, always</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
