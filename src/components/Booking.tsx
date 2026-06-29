"use client";

import { useState } from "react";
import { appSteps } from "../data";
import SectionLabel from "./SectionLabel";
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
    <section id="apply" className="bg-surface border-y border-border">
      <div className="gutter py-24 sm:py-32">
        <SectionLabel index="09" title="APPLY" meta="No obligations — applications reviewed within 48h" />

        {/* Application steps */}
        <Reveal>
          <h2
            className="display uppercase text-white mt-10 mb-6"
            style={{ fontSize: "clamp(48px, 6vw, 90px)", lineHeight: 0.95 }}
          >
            How to Apply.
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-text-soft text-[15px] leading-relaxed max-w-2xl mb-12">
            LTG is selective because the right fit matters — for you and for us.
            The application process is straightforward, confidential, and carries
            no commitment until you choose to proceed.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {appSteps.map((step, i) => (
            <Reveal key={step.num} index={i}>
              <div className="border border-border bg-void p-6 h-full flex flex-col gap-4">
                <span className="display text-gold font-bold" style={{ fontSize: "clamp(32px, 3vw, 48px)" }}>
                  {step.num}
                </span>
                <h3 className="display font-medium text-white text-[18px]">
                  {step.title}
                </h3>
                <p className="text-text-soft text-[13px] leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — who it&rsquo;s for */}
          <Reveal>
            <h3
              className="display uppercase text-white mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95 }}
            >
              Who This Is For.
            </h3>
            <p className="text-text-soft text-[15px] leading-relaxed max-w-md mb-8">
              LTG is designed for serious investors who understand that sustainable
              returns require a systematic, disciplined approach. Whether you are
              an independent professional, a business owner allocating capital, or
              an experienced trader looking to remove emotion from execution — if
              you value process over speculation, we want to hear from you.
            </p>

            <div className="border-t border-border">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between py-4 border-b border-border"
                >
                  <span className="mono text-[11px] text-text-soft">
                    {c.label}
                  </span>
                  <a
                    href={`mailto:${c.email}`}
                    className="mono text-[11px] text-text hover:text-gold transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>

            <p className="mono text-[11px] text-text-dim mt-8">
              All applications are reviewed confidentially · No commitment required
            </p>
          </Reveal>

          {/* Right — form */}
          <Reveal index={1}>
            <form
              onSubmit={onSubmit}
              className="bg-void border border-border p-6 sm:p-8 flex flex-col gap-4"
            >
              <Field label="Full name">
                <input className="field w-full px-3 py-3 text-[14px]" required />
              </Field>

              <Field label="Email address">
                <input
                  type="email"
                  className="field w-full px-3 py-3 text-[14px]"
                  required
                />
              </Field>

              <Field label="Background">
                <select className="field w-full px-3 py-3 text-[14px]" defaultValue="Professional investor">
                  <option>Professional investor</option>
                  <option>Business owner / entrepreneur</option>
                  <option>Active retail trader</option>
                  <option>Family office</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label="Capital allocation in mind">
                <select className="field w-full px-3 py-3 text-[14px]" defaultValue="$100k — $500k">
                  <option>Under $100k</option>
                  <option>$100k — $500k</option>
                  <option>$500k — $2M</option>
                  <option>Over $2M</option>
                  <option>Prefer not to say</option>
                </select>
              </Field>

              <Field label="What are you looking to achieve?">
                <textarea
                  rows={4}
                  placeholder="Briefly describe your current situation and what you are looking for."
                  className="field w-full px-3 py-3 text-[14px] resize-none"
                />
              </Field>

              <button
                type="submit"
                className="display font-bold uppercase w-full py-4 bg-gold text-void hover:bg-gold-dim transition-colors mt-2"
              >
                {submitted ? "Application Received ✓" : "Submit Application →"}
              </button>

              <p className="mono text-[9px] text-text-dim text-center">
                Your information is kept strictly confidential. No spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label">{label}</span>
      {children}
    </label>
  );
}
