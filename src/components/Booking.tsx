"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { appSteps } from "../data";
import Reveal from "./Reveal";

const contacts = [
  { label: "INVESTOR RELATIONS", email: "invest@ltgtrading.com" },
  { label: "COMPLIANCE", email: "compliance@ltgtrading.com" },
  { label: "GENERAL", email: "hello@ltgtrading.com" },
];

export default function Application() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative bg-surface border-y border-border overflow-hidden">
      {/* Subtle crimson glow — echoes hero, signals final destination */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 20% 50%, #2A0505 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 gutter py-16 sm:py-28 lg:py-36">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
              LIMITED MEMBERSHIP
            </span>
            <h2
              className="display uppercase text-white mb-5"
              style={{ fontSize: "clamp(36px, 6vw, 90px)", lineHeight: 0.95 }}
            >
              This Isn&apos;t For
              <br />
              <span className="text-gold">Everyone.</span>
            </h2>
            <p className="text-text-soft text-[15px] leading-relaxed max-w-lg">
              Limitless accepts a small number of new members each quarter. We don&apos;t assess capital size — 
              we assess mindset, commitment, and fit. If you&apos;re serious about trading with a real edge, 
              this is where it starts.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <Reveal>
            <div className="border-t border-border mb-10">
              {appSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-5 py-5 border-b border-border">
                  <span className="display text-gold font-bold text-[22px] shrink-0 w-8">{step.num}</span>
                  <div>
                    <div className="display font-medium text-white text-[15px] mb-1">{step.title}</div>
                    <div className="text-text-soft text-[13px] leading-relaxed">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-gold/20 bg-void p-6 mb-8">
              <p className="display font-medium text-white text-[15px] mb-2">
                &ldquo;We turned away more applications than we accepted last quarter.&rdquo;
              </p>
              <span className="mono text-[9px] text-text-dim">— LTG TRADING, MEMBERSHIP DIRECTOR</span>
            </div>

            <div className="border-t border-border">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center justify-between py-3 border-b border-border">
                  <span className="mono text-[11px] text-text-soft">{c.label}</span>
                  <a href={`mailto:${c.email}`} className="text-[14px] text-text hover:text-gold transition-colors">
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal index={1}>
            <div className="bg-void border border-border p-6 sm:p-8">
              <p className="display font-bold text-white text-[18px] mb-1">Start your application</p>
              <p className="text-text-soft text-[13px] mb-6">Takes 2 minutes. No commitment. Fully confidential.</p>

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Field label="Full name">
                  <input className="field w-full px-3 py-3 text-[14px]" required />
                </Field>

                <Field label="Email address">
                  <input type="email" className="field w-full px-3 py-3 text-[14px]" required />
                </Field>

                <Field label="I am a...">
                  <select className="field w-full px-3 py-3 text-[14px]" defaultValue="Active retail trader">
                    <option>Active retail trader</option>
                    <option>Professional investor</option>
                    <option>Business owner / entrepreneur</option>
                    <option>Family office</option>
                    <option>Complete beginner</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="What brings you to Limitless?">
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're looking to achieve and where you're at right now."
                    className="field w-full px-3 py-3 text-[14px] resize-none"
                  />
                </Field>

                <motion.button
                  type="submit"
                  className="display font-bold uppercase w-full py-4 bg-gold text-void hover:bg-gold-dim transition-colors mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {submitted ? "Application Received ✓" : "Request My Spot →"}
                </motion.button>

                <p className="mono text-[9px] text-text-dim text-center">
                  Confidential · No spam · No payment required
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label">{label}</span>
      {children}
    </label>
  );
}
