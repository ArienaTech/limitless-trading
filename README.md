# VØID — DJ / Producer Website

A full artist website for **VØID**, a fictional Berlin-based DJ and electronic
music producer. Pure black foundation, a single acid-green accent, and an
aesthetic that reads like a signal oscilloscope crossed with high-end artist
editorial — precise, dark, and alive.

## Tech Stack

- **React 18** + **Vite 6** + **TypeScript**
- **Tailwind CSS 3** for styling
- **Motion** (`motion/react`, formerly Framer Motion) for animation
- **lucide-react** for icons

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
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint     # eslint
npm run preview  # preview the production build
```

## Notes

- **Hero video**: drop a file at `public/hero.mp4` (dark, cinematic club
  footage). The hero renders fine without it — the layer is at 18% opacity with
  `mix-blend-mode: screen`, so it only adds texture.
- **Images**: the About and Mixes sections use styled placeholders with the
  original art-direction briefs in the source. Swap in real assets as needed.
- **Theming**: the artist name `VØID` appears as text and in `data-text`
  attributes (for the glitch effect). The accent `#aaff00` is defined once in
  `tailwind.config.js` and `src/index.css` — change both to re-skin.
- External links (Soundcloud, Discogs, Resident Advisor) point out rather than
  embedding third-party iframes.
