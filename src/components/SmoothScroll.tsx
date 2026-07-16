"use client";

import { MotionConfig, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  // Always begin a fresh visit at the top. Browsers otherwise restore the
  // previous scroll position on reload, which could drop a returning visitor
  // mid-page. Skipped when the URL targets a specific section (e.g. /#apply).
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({ lerp: 0.11 });
    if (!window.location.hash) lenis.scrollTo(0, { immediate: true });

    let raf = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    // Route same-page anchor clicks through Lenis so they glide instead of jumping
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.querySelector<HTMLElement>(url.hash);
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(el, { offset: -64, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reduced]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
