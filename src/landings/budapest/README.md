# Budapest — The City Between Two Worlds

An editorial, architectural, and historical landing page exploring Budapest, Hungary. The experience reveals the city through its contrasts: Buda vs Pest, winter vs summer, empire vs modernity — all united by the Danube.

## Category

Portfolio / Editorial

## Sections

1. **Header** — floating capsule navigation with coordinates, theme toggle, and mobile menu
2. **Hero** — cinematic fullscreen with Parliament/Danube panorama and giant BUDAPEST typography
3. **River** — the Danube as narrative spine, three beats (Buda/Danube/Pest), aerial photo
4. **BudaPest** — split-screen composition: Buda (hills, castle) vs Pest (avenues, Parliament)
5. **Bridges** — Swiper slider featuring Chain Bridge, Liberty Bridge, Margaret Bridge, Elizabeth Bridge
6. **Monuments** — architectural showcase: Fisherman's Bastion, Matthias Church, Heroes' Square, St. Stephen's Basilica, Opera House
7. **Unification** — 1873 historical section: giant year, three cities becoming one
8. **Details** — architecture in detail: Art Nouveau doorways, spiral staircases, wrought iron
9. **Words** — large editorial phrase about Budapest's essence
10. **Seasons** — winter/summer contrast with dedicated photography
11. **Thermal** — Szechenyi and Gellert baths with sticky column pattern
12. **Cafe** — Central European cafe culture and intellectual tradition
13. **Stories** — four editorial travel stories (labeled as fiction)
14. **Footer** — editorial last chapter with giant BUDAPEST, coordinates, credits

## Components

- `BackToTop.astro` — floating back-to-top button

## Typography

- **Bodoni Moda** (Google Fonts) — display/headline typeface, weights 400-900
- **Manrope** (Google Fonts) — body/navigation typeface, weights 200-800

## Color Palettes

Three thematic palettes switchable via the preview toolbar:

1. **Grayscale** (default) — standard monochrome
2. **Archive** — warm documentary tones (paper, editorial blacks)
3. **Winter** — cold Danube blues (steel, fog, ice)
4. **Summer** — warm terracotta and gold (wine red, architectural orange)

## Dependencies

- Tailwind CSS (via @tailwindcss/vite)
- Swiper Core (bridges slider)
- @lucide/astro (icons)

## Scripts

- `theme.ts` — light/dark toggle + postMessage bridge
- `palette.ts` — palette switching + postMessage bridge
- `reveal.ts` — scroll-reveal with IntersectionObserver
- `backToTop.ts` — floating back-to-top button visibility
- `menu.ts` — mobile navigation toggle
- `bridgesSlider.ts` — Swiper instance for the Bridges section

## Images

All photographs sourced from Unsplash with proper attribution. See `data/images.ts` for the complete metadata registry. Credits rendered both per-photo (figcaption) and as a consolidated list in the footer.

## Light / Dark

Both themes supported via `data-theme` attribute. Toggle button in the header. Theme persisted to `localStorage` with synchronous restore before first paint.

## Accessibility

- Skip to main content link
- Semantic HTML5 landmarks
- ARIA labels on interactive controls
- Keyboard navigation for all interactive elements
- Focus-visible outlines
- prefers-reduced-motion: reveal animations and smooth scroll disabled
- Minimum 44px touch targets
- Photo credits visible and keyboard-accessible
