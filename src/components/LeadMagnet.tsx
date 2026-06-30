"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      aria-label="Free trading framework download"
      className="relative overflow-hidden bg-void border-y border-border"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, #2A0505 0%, transparent 70%)" }}
      />
      <div className="relative z-10 gutter py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-5">FREE RESOURCE</span>
            <h2
              className="display uppercase text-white mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 0.95 }}
            >
              The Limitless
              <br />
              <span className="text-gold">Trading Framework.</span>
            </h2>
            <p className="text-text-soft text-[14px] leading-relaxed max-w-md">
              The exact belief system, risk rules, and execution principles that underpin every 
              trade we make. Free for serious traders. No fluff — just the framework.
            </p>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                "The 5 rules that eliminate emotional trading",
                "How to size positions for long-term survival",
                "Why consistency beats prediction — with data",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-soft text-[13px]">
                  <span className="text-gold text-[10px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1}>
            {!submitted ? (
              <form
                onSubmit={onSubmit}
                className="bg-surface border border-border p-8 flex flex-col gap-4"
                aria-label="Download the Limitless Trading Framework"
              >
                <p className="display font-bold text-white text-[18px]">Get the free framework</p>
                <p className="text-text-soft text-[13px]">Enter your email. We&apos;ll send it immediately.</p>
                <label className="flex flex-col gap-2">
                  <span className="label">Email address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="field w-full px-4 py-3 text-[14px]"
                    aria-label="Your email address"
                  />
                </label>
                <button
                  type="submit"
                  className="display font-bold uppercase w-full py-4 bg-gold text-void hover:bg-gold-dim transition-colors"
                >
                  Send Me the Framework →
                </button>
                <p className="mono text-[9px] text-text-dim text-center">
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              </form>
            ) : (
              <div className="bg-surface border border-gold/40 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[260px]">
                <span className="text-gold text-[32px]">✓</span>
                <p className="display font-bold text-white text-[20px]">Framework sent.</p>
                <p className="text-text-soft text-[14px]">Check your inbox. And when you&apos;re ready —</p>
                <a href="#apply" className="btn-gold mono px-6 py-3 inline-block mt-2">
                  Apply for Membership →
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
EOF