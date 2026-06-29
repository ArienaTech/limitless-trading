import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#music");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="gutter flex items-center justify-between h-16">
        <a
          href="#top"
          className="glitch display text-[17px] text-white tracking-tight"
          data-text="VØID"
        >
          VØID
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`mono link-underline flex items-center gap-1 transition-colors ${
                  isActive ? "text-text is-active" : "text-text-soft hover:text-text"
                }`}
              >
                {isActive && <span className="text-acid">▸</span>}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="#booking"
            className="btn-acid mono px-4 py-2 inline-block"
          >
            Booking →
          </a>
        </div>

        <button
          className="md:hidden text-text"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[110] bg-void flex flex-col md:hidden">
          <div className="gutter flex items-center justify-between h-16">
            <span className="display text-[17px] text-white">VØID</span>
            <button
              className="text-text"
              aria-label="Close menu"
              onClick={close}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="display text-4xl uppercase text-text hover:text-acid transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={close}
              className="btn-acid mono px-6 py-3 mt-4"
            >
              Booking →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
