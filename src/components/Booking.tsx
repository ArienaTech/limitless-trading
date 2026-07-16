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
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const profile = String(data.get("profile") ?? "").trim();
    const goals = String(data.get("goals") ?? "").trim();

    // Static site (no backend): route the enquiry through the user's mail client
    // so leads actually reach the team instead of being silently dropped.
    const subject = encodeURIComponent(`Membership application — ${name || "New enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nI am a: ${profile}\n\nWhat brings you to Limitless:\n${goals}\n`
    );
    window.location.href = `mailto:hello@ltgtrading.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative bg-surface border-y border-border overflow-hidden">
      {/* Subtle crimson glow — echoes hero, signals final destination */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 20% 50%, #f3e7e7 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 gutter py-16 sm:py-28 lg:py-36">
        <Reveal>
          <div className="mb-16 max-w-4xl mx-auto text-center">
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">
              LIMITED MEMBERSHIP
            </span>
            <h2
              className="display uppercase text-text mb-5"
              style={{ fontSize: "clamp(36px, 6vw, 90px)", lineHeight: 0.95 }}
            >
              This Isn&apos;t For
              <br />
              <span className="text-gold">Everyone.</span>
            </h2>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <p className="text-text-soft text-[15px] leading-relaxed">
                Our goal is to build a community of purpose-driven individuals that develop the
                skill of forex trading to use as the vehicle to financial freedom and a better
                quality of life.
              </p>
              <p className="text-text-soft text-[15px] leading-relaxed">
                Our criteria differ for each service and education platform to ensure we protect
                the livelihood of each student/client &amp; our own reputation within the industry.
              </p>
              <p className="text-text-soft text-[15px] leading-relaxed">
                The trading industry is rapidly growing and fuelled by greed and deceit for
                financial gain, so we focus on the pillars of education first, executing second,
                and scaling with longevity and risk-management infrastructure over chasing profits.
              </p>
            </div>
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
                    <div className="display font-medium text-text text-[15px] mb-1">{step.title}</div>
                    <div className="text-text-soft text-[13px] leading-relaxed">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* FLAG (client to confirm): unverified claim — keep, rewrite, or remove per client decision. */}
            <div className="border border-gold/20 bg-void p-6 mb-8">
              <p className="display font-medium text-text text-[15px] mb-2">
                &ldquo;We turned away more applications than we accepted last quarter.&rdquo;
              </p>
              <span className="mono text-[9px] text-text-dim">— LTG, MEMBERSHIP DIRECTOR</span>
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
              <p className="display font-bold text-text text-[18px] mb-1">Start your application</p>
              <p className="text-text-soft text-[13px] mb-6">Takes 2 minutes. No commitment. Fully confidential.</p>

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Field label="Full name" htmlFor="apply-name">
                  <input
                    id="apply-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    autoCapitalize="words"
                    className="field w-full px-3 py-3 text-[14px]"
                    required
                  />
                </Field>

                <Field label="Email address" htmlFor="apply-email">
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    className="field w-full px-3 py-3 text-[14px]"
                    required
                  />
                </Field>

                <Field label="I am a..." htmlFor="apply-profile">
                  <select
                    id="apply-profile"
                    name="profile"
                    className="field w-full px-3 py-3 text-[14px]"
                    defaultValue="Active retail trader"
                  >
                    <option>Active retail trader</option>
                    <option>Professional investor</option>
                    <option>Business owner / entrepreneur</option>
                    <option>Family office</option>
                    <option>Complete beginner</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="What brings you to Limitless?" htmlFor="apply-goals">
                  <textarea
                    id="apply-goals"
                    name="goals"
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

                {submitted && (
                  <p
                    className="text-[12px] text-text-soft text-center leading-relaxed"
                    role="status"
                    aria-live="polite"
                  >
                    Your email app should now open with your application ready to send. If it
                    doesn&apos;t, email us directly at{" "}
                    <a href="mailto:hello@ltgtrading.com" className="text-gold hover:underline">
                      hello@ltgtrading.com
                    </a>
                    .
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
