import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-void text-text min-h-screen flex flex-col items-center justify-center text-center gutter py-24">
      <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">ERROR 404</span>
      <h1
        className="display uppercase text-text mb-5"
        style={{ fontSize: "clamp(48px, 12vw, 140px)", lineHeight: 0.9 }}
      >
        Off the
        <br />
        <span className="text-gold">plan.</span>
      </h1>
      <p className="text-text-soft text-[15px] sm:text-[16px] max-w-md leading-relaxed mb-10">
        The page you were looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
        track.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <Link
          href="/"
          className="btn-gold-solid mono px-8 py-4 inline-block text-[11px] tracking-[0.15em]"
        >
          Back to Home →
        </Link>
        <Link
          href="/insights"
          className="mono text-[11px] text-text-soft hover:text-gold transition-colors tracking-[0.1em]"
        >
          Read the Insights ↓
        </Link>
      </div>
    </div>
  );
}
