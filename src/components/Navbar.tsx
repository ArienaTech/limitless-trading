"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/#values" },
  { label: "Performance", href: "/#performance" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-void focus:px-4 focus:py-2 focus:mono focus:text-[11px]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled || open
            ? "bg-void border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
        role="banner"
      >
        <nav
          className="gutter flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" aria-label="Limitless Trading — home" className="flex items-center">
            <Image
              src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg"
              alt="Limitless Trading"
              width={120}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <div key={link.href} role="listitem">
                <Link
                  href={link.href}
                  className="mono text-[10px] link-underline text-text-soft hover:text-text transition-colors tracking-[0.1em]"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/#apply"
              className="btn-gold mono px-4 py-2 inline-block text-[10px] tracking-[0.1em]"
              aria-label="Apply for Limitless Trading membership"
            >
              Apply →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text p-2"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — rendered OUTSIDE the header to avoid stacking context / backdrop-blur bleed */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99] bg-void flex flex-col md:hidden"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          {/* Spacer to push content below the header */}
          <div className="h-16" />
          <nav
            className="flex-1 flex flex-col items-center justify-center gap-10"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="display text-4xl uppercase text-text hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#apply"
              onClick={close}
              className="btn-gold mono px-6 py-3 mt-4 inline-block"
            >
              Apply →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
