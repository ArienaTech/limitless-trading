"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const contacts = [
  { label: "MANAGEMENT", email: "management@void-music.com" },
  { label: "PRESS", email: "press@void-music.com" },
  { label: "GENERAL", email: "hello@void-music.com" },
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="bg-surface border-y border-border">
      <div className="gutter py-24 sm:py-32">
        <SectionLabel index="06" title="CONTACT" meta="Response within 48h" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <Reveal>
            <h2
              className="display uppercase text-white mb-6"
              style={{ fontSize: "clamp(48px, 6vw, 90px)", lineHeight: 0.95 }}
            >
              Bookings.
            </h2>
            <p className="text-text-soft text-[15px] leading-relaxed max-w-md">
              For booking enquiries, festival slots, residency proposals, and
              press. Response within 48 hours.
            </p>

            <div className="mt-10 border-t border-border">
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
                    className="mono text-[11px] text-text hover:text-acid transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>

            <p className="mono text-[11px] text-text-dim mt-8">
              European booking: Agency XYZ · +49 30 000 0000
            </p>
          </Reveal>

          {/* Right form */}
          <Reveal index={1}>
            <form
              onSubmit={onSubmit}
              className="bg-void border border-border p-6 sm:p-8 flex flex-col gap-4"
            >
              <Field label="Event name">
                <input className="field w-full px-3 py-3 text-[14px]" required />
              </Field>

              <Field label="Event date">
                <input
                  type="date"
                  className="field w-full px-3 py-3 text-[14px]"
                />
              </Field>

              <Field label="Venue / City">
                <input className="field w-full px-3 py-3 text-[14px]" />
              </Field>

              <Field label="Expected attendance">
                <input
                  type="number"
                  min={0}
                  className="field w-full px-3 py-3 text-[14px]"
                />
              </Field>

              <Field label="Type">
                <select className="field w-full px-3 py-3 text-[14px]" defaultValue="Headline">
                  <option>Headline</option>
                  <option>Support</option>
                  <option>B2B</option>
                  <option>Residency</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  rows={4}
                  placeholder="Tell us about the event, the room, the crowd."
                  className="field w-full px-3 py-3 text-[14px] resize-none"
                />
              </Field>

              <button
                type="submit"
                className="display font-bold uppercase w-full py-4 bg-acid text-void hover:bg-acid-dim transition-colors mt-2"
              >
                {submitted ? "Enquiry Sent ✓" : "Send Enquiry →"}
              </button>
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
