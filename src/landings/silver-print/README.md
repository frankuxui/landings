# Silver Print

A curated marketplace for fine art photography — digital files and archival prints from contemporary photographers. This landing page is a design demonstration: all photographer names, editorial content, prices, and company details are entirely fictional.

---

## Folder structure

```
src/landings/silver-print/
├── data/
│   ├── collections.ts      — 7 photo collection definitions (Architecture, Nature, Street, Portrait, Travel, Minimal, Black & White)
│   ├── featuredWorks.ts    — 4 featured artworks for the sticky scroll section
│   ├── gallery.ts          — 12 gallery/shop items with editorial grid ratios
│   ├── nav.ts              — Landing-internal navigation links
│   ├── photographers.ts    — 5 fictional photographer profiles
│   └── spotlight.ts        — 6 Swiper carousel slides
├── sections/
│   ├── Header.astro        — Sticky transparent→opaque navbar, mobile menu, theme toggle
│   ├── Hero.astro          — Full-bleed photography hero (≥95svh) with GSAP clip-path reveal
│   ├── Collections.astro   — 7 collections: 1 large featured + 6 smaller, hover/touch overlays
│   ├── FeaturedWorks.astro — Sticky left info panel + right scrolling photos (GSAP ScrollTrigger)
│   ├── Gallery.astro       — Asymmetric editorial grid (CSS Grid, dynamic aspect-ratio via data)
│   ├── Spotlight.astro     — Swiper carousel with prev/next controls and custom pagination
│   ├── Photographers.astro — 5 photographer cards, horizontal scroll on mobile
│   ├── Manifesto.astro     — Large typographic section with GSAP word-by-word reveal
│   ├── PrintInfo.astro     — Print quality features + format/price table, sticky left column
│   ├── CTAFinal.astro      — Full-bleed image CTA section
│   └── Footer.astro        — Nav links, Unsplash attribution, copyright
├── styles/
│   └── tailwind.css        — This landing's complete design-token contract (see below)
├── types.ts                — All local TypeScript interfaces and types
└── README.md               — This file
```

---

## Configuration

### Dependencies

All dependencies are at the repository level (`package.json`):

| Package                             | Purpose                                                                      |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| `gsap`                              | Hero clip-path reveal, parallax, sticky works section, manifesto word reveal |
| `swiper`                            | Spotlight carousel                                                           |
| `@lucide/astro`                     | All icons (Camera, ArrowRight, Menu, X, Moon, Sun, etc.)                     |
| `tailwindcss` + `@tailwindcss/vite` | CSS-first Tailwind v4 styling                                                |

### Landing ID / slug

`silver-print` — matches `src/content/landings/silver-print.json` and `src/landings/silver-print/`.

### Theme persistence

The landing persists its theme preference in `localStorage` under the key `sp-theme` (values: `"light"` | `"dark"`). The `<script is:inline>` in `<head>` reads this key synchronously to prevent a flash-of-wrong-theme. The `window.addEventListener("message")` script in `<body>` accepts `{type: "set-theme", theme}` messages from the platform's preview shell to sync the theme toggle.

---

## CSS variables (design tokens)

All tokens declared locally in `styles/tailwind.css`. Token _names_ follow the platform-wide vocabulary; _values_ are independent to this landing.

### Light theme (`:root`)

| Token                                  | Usage                                        |
| -------------------------------------- | -------------------------------------------- |
| `--background`                         | Page background (neutral-50)                 |
| `--background-alt`                     | Alternating section background (neutral-100) |
| `--foreground`                         | Primary text (neutral-950)                   |
| `--muted`                              | Secondary text (neutral-600)                 |
| `--border`                             | Dividers and borders (neutral-400)           |
| `--surface`                            | Card/panel surfaces (white)                  |
| `--surface-strong`                     | Elevated surfaces (neutral-100)              |
| `--control`                            | Interactive control default (neutral-200)    |
| `--control-hover`                      | Interactive control hover (neutral-300)      |
| `--ring`                               | Focus ring (neutral-950)                     |
| `--primary`                            | Primary action background (neutral-950)      |
| `--primary-foreground`                 | Primary action text (white)                  |
| `--emphasis`                           | Maximum contrast (black)                     |
| `--disabled` / `--disabled-foreground` | Disabled states                              |
| `--inverted`                           | Inverted section background (black)          |
| `--inverted-foreground`                | Inverted section text (white)                |
| `--inverted-surface`                   | Inverted surface (neutral-900)               |
| `--placeholder`                        | Image placeholder bg (neutral-900)           |
| `--placeholder-foreground`             | Image placeholder text (white)               |
| `--placeholder-inverse`                | Placeholder on dark bg (white/72%)           |

### Dark theme (`[data-theme="dark"]`)

Mirrors the Light theme with inverted grayscale scales: `--background` → black, `--foreground` → neutral-100, `--primary` → neutral-50, `--primary-foreground` → neutral-950, etc.

### Additional tokens

| Token                            | Value                           |
| -------------------------------- | ------------------------------- |
| `--font-sans` / `--font-display` | Wix Madefor Text                |
| `--breakpoint-nav`               | `64rem` (1024px)                |
| `--spacing-section`              | `8rem`                          |
| `--container-landing`            | `100rem`                        |
| `--ease-landing`                 | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--text-headline-1`              | `clamp(2.75rem, … , 6.5rem)`    |
| `--text-headline-2`              | `clamp(2rem, … , 4rem)`         |
| `--text-headline-3`              | `clamp(1.375rem, … , 2rem)`     |

### Custom utilities

- `reveal` — scroll reveal animation (opacity + translateY), respects `prefers-reduced-motion`
- `@custom-variant can-hover` — fires only on `(hover: hover) and (pointer: fine)` — used for hover overlays on collection/gallery cards
- `[data-spotlight-pagination]` — Swiper pagination bullet styling scoped to the Spotlight carousel
- `.no-scrollbar` — hides scrollbar on the Photographers horizontal scroll rail

---

## Available palettes

This landing uses **grayscale only** (no opt-in colour palettes). `palettes: []` in the metadata JSON.

---

## Sections and animation

### Header

- Fixed/sticky; transparent with mix-blend-difference at top, becomes opaque (`bg-background/95`) after 80px scroll
- Mobile menu: full-screen overlay, accessible with `aria-expanded`/`aria-hidden`
- Theme toggle: reads/writes `sp-theme` localStorage, applies `data-theme` to `document.documentElement`

### Hero

- Full-bleed photography (≥95svh), GSAP `clipPath: inset(100%…→0%)` image reveal on load
- Text elements fade + translate-Y in stagger sequence (delay 0.5s after image starts)
- Subtle parallax on scroll via GSAP ScrollTrigger (`yPercent: 12`, scrub: true)
- Respects `prefers-reduced-motion`: all GSAP bypassed, elements set to final state immediately

### Collections

- 1 large featured card (left) + 6 smaller cards (right) in asymmetric CSS Grid
- Hover overlay: info hidden by default on hover-capable devices, always visible on touch (`@custom-variant can-hover`)
- Reveal: ScrollTrigger `[data-reveal]` + `.is-visible` toggling the `reveal` utility

### Featured Works (sticky)

- Left column: `lg:sticky lg:top-28` info panel with title, author, technique, price, CTA
- Right column: 4 images scroll past; each image's entry triggers `activateWork(index)`
- Info panels cross-fade (opacity transition); navigation dots update accordingly
- Manual dot navigation also available; scrolls to the matching image

### Gallery

- 12 items in `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`
- Each item gets `col-span-2` (landscape) or `col-span-1` (portrait/square) based on `GalleryRatio`
- `aspect-ratio` applied inline from the item's `ratio` field (dynamic data — cannot be expressed as a static Tailwind class)
- Hover overlay: product name, author, description, price, add-to-cart button

### Spotlight (Swiper)

- `slidesPerView: "auto"` with custom slide widths (`!w-[min(90vw,640px)]` etc.)
- Prev/Next buttons reflect `swiper.isBeginning` / `swiper.isEnd` via `disabled` attribute
- Custom pagination scoped via `[data-spotlight-pagination]` — bullet styles in `tailwind.css`
- Swiper base CSS loaded via `<style>@import "swiper/css"</style>` in the section (Vite-processed)

### Manifesto

- Word-by-word GSAP reveal on the main heading (DOM manipulation into `<span>` wrappers)
- Paragraph fade-in on scroll
- Pull-quote slides in from left

### Photographers

- `.no-scrollbar` horizontal scroll rail on mobile; `lg:grid lg:grid-cols-5` on desktop
- Portrait-orientation images (3:4), hover bio overlay

### Print Info

- Left column sticky (`lg:sticky lg:top-28`); right column feature list
- Format table with alternating row tint

---

## Unsplash attribution

All photographs are sourced from [Unsplash](https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral). The complete attribution list is rendered in the Footer section. Photography credits:

- **Marcus Loke** — Hero, Spotlight (Geometric Visions I)
- **Jake Blucker** — Nature collection, Still Water Alp, Spotlight
- **Pedro Lastra** — Street collection, Nocturne, Spotlight
- **Alexandru Zdrobău** — Portrait collection, Presence No. 7
- **Andrik Langfield** — Travel collection, High Road
- **Debby Hudson** — Minimal collection, White Composition
- **Etienne Boulanger** — Black & White collection, Rain Market
- **The Roaming Platypus** — Architecture collection, Ascending Lines
- **Ales Krivec** — Fog Valley
- **Ivana Cajina** — Misty Road
- **Sahar Obrabi** — Grid Study
- **Atikh Bana** — Urban Drift
- **Warren Wong** — Threshold, Jin Hasegawa portrait
- **Ayo Ogunseinde** — Thomas Hart portrait
- **Christina Wocintechchat** — Emilia Novak portrait
- **Stefan Stefancik** — Marcus Okoro portrait
- **Giulia Bertelli** — Camille Beaumont portrait
