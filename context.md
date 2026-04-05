# Élodie's Playhouse Cafe — Project Context

## What this is
A production-ready **coming soon** landing page for **Élodie's Playhouse Cafe** — Vernon BC's first play café for families. Built with Astro 6, deployed on Cloudflare Pages, source on GitHub.

## URLs
| | |
|---|---|
| **Live site** | https://elodies-playhouse-cafe.pages.dev/ |
| **GitHub repo** | https://github.com/Fawky/elodies-playhouse-cafe |
| **Final domain** | https://elodiesplayhousecafe.ca (GoDaddy — not yet pointed) |

## Business
- **Name:** Élodie's Playhouse Cafe
- **Location:** Vernon, BC, Canada
- **Concept:** Montessori-inspired play area + café. Parents sip drinks and connect while children play safely nearby.
- **Status:** Pre-opening — no launch date set yet
- **Key differentiator:** In-house counsellor offering mom groups and individual sessions

### Offerings (coming soon)
- Drop-in play
- Monthly memberships
- Birthday parties
- Mommy & Me classes
- Mom groups & individual counselling
- Donation days / community events
- Locally sourced food & drinks

## Tech stack
| | |
|---|---|
| **Framework** | Astro 6.1.3 (static output) |
| **Fonts** | Montserrat (headings) + Open Sans (body) via Google Fonts |
| **CSS** | All inline `<style>` blocks — no Tailwind, no external CSS |
| **Images** | Sharp (OG image generation) |
| **Deploy** | Cloudflare Pages (connected to GitHub main branch, auto-deploys) |

## Project structure
```
elodies-playhouse/
├── astro.config.mjs          # site: https://elodies-playhouse-cafe.pages.dev
├── package.json              # scripts: dev, build, preview, generate:og
├── scripts/
│   └── generate-og.mjs       # Generates public/og-image.png via sharp (1200×630)
├── public/
│   ├── favicon.svg           # SVG house logo mark
│   └── og-image.png          # Social preview image (regenerate with npm run generate:og)
└── src/
    ├── layouts/
    │   └── Layout.astro      # HTML shell, CSS custom properties, global reset,
    │                         # Google Fonts, animations, IntersectionObserver,
    │                         # all OG + Twitter meta tags
    └── pages/
        └── index.astro       # Full single-page site (all sections + all CSS)
```

## Design system

### Colors
| Token | Value | Purpose |
|---|---|---|
| `--color-surface` | `#FAF7F4` | Page background |
| `--color-surface-alt` | `#F2EBE3` | Section/card backgrounds |
| `--color-text` | `#1C1410` | Primary text |
| `--color-text-secondary` | `#6B5E54` | Secondary text, captions |
| `--color-border` | `#E0D4CA` | Dividers, input borders |
| `--color-accent` | `#7B3A1E` | CTAs, links, active states |
| `--color-accent-hover` | `#5C2A13` | Hover state |
| `--color-warm` | `#DFA882` | Brand peach (logo body colour) |
| `--color-gold` | `#C8960A` | Secondary highlight |

### Spacing scale (4px base)
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px` — all spacing uses only these values via `--space-N` tokens.

### Breakpoints
| | |
|---|---|
| Mobile | `< 640px` |
| Tablet | `≥ 640px` |
| Desktop | `≥ 1024px` |

## Page sections (index.astro)
1. **Sticky nav** — house SVG logo + "Get Early Access" CTA (anchors to `#early-access`)
2. **Hero** — fade-up entry animations, email capture form with validation + success state, large ghost logo watermark (15% opacity) positioned right on desktop / centred on mobile
3. **What to Expect** — 8 feature cards with inline SVG icons; 1-col → 2-col → 3-col responsive grid
4. **Our Promise / Heart** — two-panel emotional section; left: counsellor/wellbeing copy; right: "We are building a village." + Vernon location pin
5. **Early Access CTA** — deep brown `#7B3A1E` full-bleed section, second email form, house watermark
6. **Footer** — logo, `© [year]` via JS, "Design by Steep Creative" (https://steepcreative.com/), Facebook icon

## Key decisions & notes
- **No Tailwind** — all CSS lives in `<style>` blocks, scoped to components
- **`[hidden] { display: none !important }`** added globally to prevent `display: flex` overriding the HTML `hidden` attribute on form success states
- **Hero logo watermark** — the SVG logo (house mark only, no text) is rendered large and absolutely positioned inside `.hero-inner` (the max-width container), so it clips at the 1200px content boundary and never bleeds into gutters
- **OG image** — generated via `scripts/generate-og.mjs` using Sharp to convert SVG → PNG. Re-run with `npm run generate:og` if branding changes
- **Animations** — hero uses CSS `animation: fadeUp` with staggered delays; below-fold sections use IntersectionObserver + `.reveal` / `.visible` classes
- **WCAG AA** — all text passes 4.5:1 contrast on their backgrounds

## To-do / future work
- [ ] Point `elodiesplayhousecafe.ca` DNS to Cloudflare Pages (currently GoDaddy placeholder)
- [ ] Hook up email form to a real provider (Mailchimp, ConvertKit, etc.)
- [ ] Add Facebook link (currently `href="#"` placeholder)
- [ ] Update OG image URL back to `elodiesplayhousecafe.ca` once domain is pointed
- [ ] Add Instagram link when account is ready

## Commands
```bash
npm run dev           # local dev server
npm run build         # production build → dist/
npm run preview       # preview the production build
npm run generate:og   # regenerate public/og-image.png
```
