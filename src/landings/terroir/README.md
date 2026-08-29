# Terroir

Wine-themed editorial landing page. An immersive storytelling experience about the world of wine: terroir, harvest, cellar, aging, pairing, and the people behind it. Content in Spanish.

## Category

Blog/Editorial

## Sections (21+)

| #   | Section      | File                          | Description                                                                        |
| --- | ------------ | ----------------------------- | ---------------------------------------------------------------------------------- |
| —   | Header       | `sections/Header.astro`       | Floating nav with reading progress bar, light/dark toggle, mobile menu             |
| 01  | Hero         | `sections/Hero.astro`         | Full-viewport vineyard image with diagonal clip-path, parallax                     |
| 02  | Terroir      | `sections/Terroir.astro`      | Educational section: five terroir concepts (soil, altitude, climate, grape, human) |
| 03  | Map          | `sections/Map.astro`          | Interactive Spanish wine regions (Rioja, Ribera, Priorat, Jerez)                   |
| 04  | Vineyards    | `sections/Vineyards.astro`    | Irregular photo gallery of vineyard landscapes                                     |
| 05  | Harvest      | `sections/Harvest.astro`      | ScrollTrigger pinned seasons sequence (winter-spring-summer-harvest)               |
| 06  | Grape        | `sections/Grape.astro`        | Grape varieties data (Tempranillo, Garnacha, Graciano, Carinena, Palomino)         |
| 07  | Crush        | `sections/Crush.astro`        | Dark section: destemming, crushing, maceration, fermentation steps                 |
| 08  | Fermentation | `sections/Fermentation.astro` | Scientific data about fermentation process                                         |
| 09  | Cellar       | `sections/Cellar.astro`       | Full-screen cellar image emerging from darkness                                    |
| 10  | Oak          | `sections/Oak.astro`          | Barrel types and their influence on wine                                           |
| 11  | Solera       | `sections/Solera.astro`       | Visual representation of Jerez solera system                                       |
| 12  | Aging        | `sections/Aging.astro`        | Wine aging stages (1-5-10-25 years)                                                |
| 13  | Old Wines    | `sections/OldWines.astro`     | Compact historical-wine Swiper with continuous progress bar                        |
| 14  | Priorat      | `sections/Priorat.astro`      | Full-width steep vineyard scene with a diagonal lower edge                         |
| 15  | Wineries     | `sections/Wineries.astro`     | Asymmetric winery architecture composition                                         |
| 16  | Pairing      | `sections/Pairing.astro`      | Food and wine pairings Swiper                                                      |
| 17  | Tasting      | `sections/Tasting.astro`      | How to taste wine (look, smell, taste, wait)                                       |
| 18  | People       | `sections/People.astro`       | Portraits with quotes from wine professionals                                      |
| 19  | Voices       | `sections/Voices.astro`       | Testimonial Swiper with background image                                           |
| 20  | Gallery      | `sections/Gallery.astro`      | Twelve-column editorial mosaic with contextual hover panels                        |
| 21  | Closing      | `sections/Closing.astro`      | "Tierra embotellada" — bottle that grows on scroll                                 |
| —   | Footer       | `sections/Footer.astro`       | Chapter navigation, photo credits, closing statement                               |

## Components

- `components/BackToTop.astro` — Floating back-to-top button

## Data

- `data/nav.ts` — Navigation link definitions
- `data/images.ts` — Unsplash image metadata for all photographs

## Scripts

- `scripts/theme.ts` — Light/Dark theme toggle + postMessage bridge
- `scripts/palette.ts` — Color palette switching + postMessage bridge
- `scripts/reveal.ts` — Scroll-reveal via IntersectionObserver
- `scripts/backToTop.ts` — Back-to-top button visibility
- `scripts/readingProgress.ts` — Reading progress bar at top
- `scripts/menu.ts` — Mobile navigation toggle
- `scripts/gsapAnimations.ts` — GSAP ScrollTrigger animations (hero parallax, harvest pinning, cellar reveal, aging bottle, closing bottle)
- `scripts/wineSlider.ts` — Swiper for old wines section
- `scripts/voicesSlider.ts` — Swiper for testimonials section
- `scripts/pairingSlider.ts` — Swiper for pairing section
- `scripts/mapInteraction.ts` — Interactive region switching for the map section

## Styles

- `styles/tailwind.css` — Complete design-system contract, palette tokens, utilities

## Typography

- **Display and body:** Wix Madefor Text (Google Fonts), following the restrained editorial rhythm used by Journalist Dispatch

## Color Palette

- **Grayscale** (default): Standard monochrome
- **Vendimia**: Wine-themed palette grounded in color psychology
  - Cellar Black `#110f0e` — depth, cellar darkness
  - Burgundy `#6e1628` — wine identity, passion
  - Barrel Oak `#6d4634` — wood, craft, aging
  - Garnet `#8b2438` — accent, warmth
  - Cork `#a67c5b` — warm secondary, earth
  - Cream `#f0e4d8` — light surface, warmth

## Dependencies

- Tailwind CSS (via `@tailwindcss/vite`)
- GSAP + ScrollTrigger (npm)
- Swiper Core (npm)
- @lucide/astro (icons)

## Light/Dark

Both themes supported. Toggle button in Header. Theme persisted to `localStorage` key `terroir:theme`. Synchronous restore before first paint.

## Unsplash

All photographs sourced from Unsplash. Credits rendered below each photo and consolidated in footer.

## Accessibility

- Skip-to-content link
- Semantic HTML5 landmarks
- Keyboard-navigable Swiper controls
- ARIA labels on all interactive elements
- prefers-reduced-motion support (GSAP animations disabled)
- Sufficient contrast in both themes
- Touch targets >= 44px

## Native CSS exceptions

- Reading progress bar: `transform: scaleX(var(--reading-progress))`
- Hero diagonal: `clip-path: polygon(...)`
- Priorat/Wineries transition: clipped Priorat edge with an overlapping, unclipped architecture section
- Swiper pagination theming: `--swiper-pagination-color`
- Old Wines progress bar and Voices bullet theming: Swiper-generated elements require direct selectors
- Gallery mosaic: named CSS Grid placements provide dense responsive composition
- Scoped People/Old Wines image transitions: prevents `filter` and `scale` transition conflicts
- Scrollbar hiding: `scrollbar-width: none`
- GSAP pin lock: `overflow-x: clip !important`
