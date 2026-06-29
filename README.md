# VØID — DJ / Producer Website

A full artist website for **VØID**, a fictional Berlin-based DJ and electronic
music producer. Pure black foundation, a single acid-green accent, and an
aesthetic that reads like a signal oscilloscope crossed with high-end artist
editorial — precise, dark, and alive.

## Tech Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **PWA** via `@ducanh2912/next-pwa` (service worker, offline support, installable)
- **Tailwind CSS 3** for styling
- **Motion** (`motion/react`, formerly Framer Motion) for animation
- **lucide-react** for icons
- **`next/font/google`** for optimised font loading (Space Grotesk, Space Mono)

## Design System

| Token         | Value     | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| `--void`      | `#000000` | Page background                          |
| `--surface`   | `#111111` | Cards / strips                           |
| `--border`    | `#1f1f1f` | 1px borders                              |
| `--text`      | `#f0f0f0` | Body text                                |
| `--acid`      | `#aaff00` | The single accent — CTAs, dots, waveform |

Type: **Space Grotesk** (display / body) + **Space Mono** (data / labels).
Zero border-radius everywhere. No gradients except the hero video fades and one
frosted nav.

## Sections

1. **Navbar** — fixed, frosted on scroll, glitch brand, active-section dot.
2. **Hero** — video background, 80-bar animated waveform, glitch headline.
3. **Event Ticker** — seamless horizontal marquee of upcoming dates.
4. **Music** — monospaced track table with scan-line hover.
5. **Live** — stacked show cards + collapsible past-shows table.
6. **About** — two-column bio with stats.
7. **Mixes** — three mix cards with noise-texture covers.
8. **Booking** — contact rows + enquiry form.
9. **Footer** — clip-path line-reveal wordmark + link columns.

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build (generates service worker)
npm run start    # serve the production build
npm run lint     # eslint
```

## Notes

- **Hero video**: drop a file at `public/hero.mp4` (dark, cinematic club
  footage). The hero renders fine without it — the layer is at 18% opacity with
  `mix-blend-mode: screen`, so it only adds texture.
- **Images**: the About and Mixes sections use styled placeholders with the
  original art-direction briefs in the source. Swap in real assets as needed.
- **PWA**: the service worker (`public/sw.js`) is auto-generated at build time.
  `public/manifest.json` defines the installable app. Place PNG icons at
  `public/icons/icon-192.png` and `public/icons/icon-512.png` for best browser
  support (SVGs are used as placeholders).
- **Theming**: the artist name `VØID` appears as text and in `data-text`
  attributes (for the glitch effect). The accent `#aaff00` is defined once in
  `tailwind.config.js` and `src/app/globals.css` — change both to re-skin.
- External links (Soundcloud, Discogs, Resident Advisor) point out rather than
  embedding third-party iframes.
