"use client";

import { useState } from "react";
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
    <section id="apply" className="bg-surface border-y border-border">
      <div className="gutter py-24 sm:py-32">

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <Reveal>
            <h2
              className="display uppercase text-white mb-4"
              style={{ fontSize: "clamp(48px, 6vw, 90px)", lineHeight: 0.95 }}
            >
              Ready to
              <br />
              <span className="text-gold">Apply?</span>
            </h2>
            <p className="text-text-soft text-[14px] mb-10 max-w-sm">
              LTG is selective. We assess fit, not just capital. The process is simple, confidential, and carries no commitment.
            </p>

            {/* Steps */}
            <div className="border-t border-border mb-10">
              {appSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-5 py-4 border-b border-border">
                  <span className="display text-gold font-bold text-[22px] shrink-0 w-8">{step.num}</span>
                  <div>
                    <div className="display font-medium text-white text-[15px]">{step.title}</div>
                    <div className="text-text-soft text-[12px] mt-0.5">{step.description}</div>
                  </div>
                </div>
              ))}
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
            <form
              onSubmit={onSubmit}
              className="bg-void border border-border p-6 sm:p-8 flex flex-col gap-4"
            >
              <Field label="Full name">
                <input className="field w-full px-3 py-3 text-[14px]" required />
              </Field>

              <Field label="Email address">
                <input type="email" className="field w-full px-3 py-3 text-[14px]" required />
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
                  rows={3}
                  placeholder="Briefly describe your situation and goals."
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
                Confidential · No spam · No commitment
              </p>
            </form>
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
