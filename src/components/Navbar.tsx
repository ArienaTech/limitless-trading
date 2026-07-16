"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Magnetic from "./Magnetic";
import { navItems, navLinks, type NavItem } from "../data";

// A subtle "soon" tag marks pages that are structured in the architecture but
// toggled off until their content and brand assets are supplied (per client).
function SoonTag() {
  return (
    <span className="mono text-[8px] text-text-dim tracking-[0.2em] uppercase shrink-0">
      soon
    </span>
  );
}

// Curated grouping of the full architecture into two balanced columns. Labels
// reference navItems (single source of truth) so nothing drifts out of sync.
const menuGroups: { heading: string; labels: string[] }[] = [
  {
    heading: "Explore",
    labels: ["Home", "About", "Our Partners", "Shop", "Contact", "FAQ"],
  },
  {
    heading: "The Ecosystem",
    labels: [
      "LTG Ecosystem",
      "VIP Community & Signals",
      "Trading Mastery & Education",
      "Funded",
      "VIP Fund Management",
      "Affiliate Marketing Programme",
    ],
  },
];

function TopRow({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const base =
    "group flex items-center justify-between gap-3 rounded-md px-3 py-2 transition-colors";
  const inner = (
    <>
      <span
        className={`mono text-[11px] tracking-[0.08em] leading-snug ${
          item.ready ? "text-text-soft group-hover:text-text" : "text-text-dim"
        }`}
      >
        {item.label}
      </span>
      {!item.ready && <SoonTag />}
    </>
  );

  if (item.ready) {
    return (
      <Link href={item.href} onClick={onNavigate} className={`${base} hover:bg-surface`}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} cursor-default`}>{inner}</div>;
}

function ChildRow({
  child,
  onNavigate,
}: {
  child: { label: string; href: string; ready?: boolean };
  onNavigate: () => void;
}) {
  const inner = (
    <>
      <span
        className={`mono text-[10px] tracking-[0.05em] leading-snug ${
          child.ready ? "text-text-soft group-hover:text-gold" : "text-text-dim"
        }`}
      >
        {child.label}
      </span>
      {!child.ready && <SoonTag />}
    </>
  );
  const base = "group flex items-center justify-between gap-3 py-1.5";
  if (child.ready) {
    return (
      <Link href={child.href} onClick={onNavigate} className={base}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} cursor-default`}>{inner}</div>;
}

// Full-architecture dropdown panel (desktop).
function FullMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  const byLabel = new Map(navItems.map((i) => [i.label, i]));

  return (
    <div className="grid grid-cols-2 divide-x divide-border w-[600px] max-w-[92vw]">
      {menuGroups.map((group) => (
        <div key={group.heading} className="p-5">
          <p className="mono text-[9px] text-gold tracking-[0.28em] uppercase px-3 mb-3">
            {group.heading}
          </p>
          <div className="flex flex-col">
            {group.labels.map((label) => {
              const item = byLabel.get(label);
              if (!item) return null;
              return (
                <div key={label}>
                  <TopRow item={item} onNavigate={onNavigate} />
                  {item.children && (
                    <div className="ml-3 mb-1 flex flex-col border-l border-border pl-4 pr-3">
                      {item.children.map((child) => (
                        <ChildRow key={child.label} child={child} onNavigate={onNavigate} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// Mobile accordion row.
function MobileItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div className="w-full border-b border-border">
      <div className="flex items-center justify-between">
        {item.ready ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            className="display text-[22px] uppercase text-text hover:text-gold transition-colors py-4 flex-1"
          >
            {item.label}
          </Link>
        ) : (
          <span className="display text-[22px] uppercase text-text-dim py-4 flex-1 flex items-center gap-3">
            {item.label} <SoonTag />
          </span>
        )}
        {hasChildren && (
          <button
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded((v) => !v)}
            className="p-3 text-text-soft"
          >
            <ChevronDown
              size={20}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <div className="flex flex-col gap-3 pb-4 pl-4">
          {item.children!.map((child) =>
            child.ready ? (
              <Link
                key={child.label}
                href={child.href}
                onClick={onNavigate}
                className="mono text-[12px] text-text-soft hover:text-gold transition-colors"
              >
                {child.label}
              </Link>
            ) : (
              <span
                key={child.label}
                className="mono text-[12px] text-text-dim flex items-center gap-2"
              >
                {child.label} <SoonTag />
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [menuOpen, setMenuOpen] = useState(false); // desktop full menu
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close desktop menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          open
            ? "bg-void border-b border-border"
            : scrolled
              ? "bg-void/80 backdrop-blur-md border-b border-border shadow-[0_1px_24px_rgba(34,31,25,0.05)]"
              : "bg-transparent border-b border-transparent"
        }`}
        role="banner"
      >
        <nav
          className="gutter flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          {/* NOTE (open item): client asked to match nav logo colour to the hero
              wordmark treatment — confirm exact intent/asset with Dee. */}
          <Link href="/" aria-label="Limitless Trading — home" className="flex items-center">
            <Image
              src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/logo3.svg"
              alt="Limitless Trading"
              width={120}
              height={48}
              priority
              unoptimized
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Quick links — the ready subset */}
            <div className="hidden lg:flex items-center gap-7" role="list">
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

            {/* Full-architecture dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 mono text-[10px] text-text-soft hover:text-text transition-colors tracking-[0.1em]"
              >
                Menu
                <ChevronDown
                  size={13}
                  className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-full mt-3 bg-void border border-border shadow-[0_12px_48px_rgba(34,31,25,0.12)]"
                    role="menu"
                  >
                    <FullMenuPanel onNavigate={() => setMenuOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Magnetic strength={6}>
              <Link
                href="/#apply"
                className="btn-gold mono px-4 py-2 inline-block text-[10px] tracking-[0.1em]"
                aria-label="Apply for Limitless Trading membership"
              >
                Apply →
              </Link>
            </Magnetic>
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

      {/* Mobile menu — full architecture accordion */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99] bg-void flex flex-col md:hidden overflow-y-auto"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <div className="h-16 shrink-0" />
          <nav className="flex flex-col px-6 pb-10" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <MobileItem key={item.label} item={item} onNavigate={close} />
            ))}
            <Link
              href="/#apply"
              onClick={close}
              className="btn-gold mono px-6 py-3 mt-8 inline-block text-center"
            >
              Apply →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
