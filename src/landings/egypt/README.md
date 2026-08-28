# Egypt — Beneath the Sands

An immersive, cinematic, monumental digital experience about Ancient Egypt. This landing explores five thousand years of civilization through pyramids, pharaohs, gods, hieroglyphs, and the treasures buried beneath the sand.

## Category

Portfolio / Documentary

## Chromatic Exception

This landing intentionally uses chromatic colors as a user-approved exception to the gallery's monochrome rule. The color palette is grounded in Ancient Egyptian color symbolism:

- **Gold (#C6A15B)** — royalty, eternity, divine flesh
- **Sand (#D6BE91)** — desert warmth, the mundane world
- **Lapis Lazuli (#183B56)** — night sky, cosmos, protection
- **Egyptian Turquoise (#277F7A)** — rebirth, Nile water
- **Red Ochre (#9A432F)** — ritual, power, life force
- **Black Obsidian (#11100E)** — death, underworld, mystery

The grayscale palette is still the default state; the "Nile" palette is switchable via the preview toolbar.

## Typography

- **Display:** Marcellus SC (Google Fonts) — monumental titles, pharaoh names, chapter headings
- **Body:** Cormorant Garamond (Google Fonts) — narrative text, descriptions, quotes

## Sections

| #   | Section       | ID              | Description                                            |
| --- | ------------- | --------------- | ------------------------------------------------------ |
| -   | Header        | -               | Fixed navigation with theme toggle, chapter links      |
| 0   | Hero          | `#home`         | Full viewport with Pyramids of Giza, GSAP parallax     |
| 1   | Timeline      | `#timeline`     | "5,000 Years" chronology with progressive GSAP reveals |
| 2   | Architecture  | `#architecture` | Monumental numbers, sticky text/photo composition      |
| 3   | Pharaohs      | `#pharaohs`     | Tutankhamun, Hatshepsut, Ramses II, Cleopatra VII      |
| 4   | Gods          | `#gods`         | Horizontal scroll (GSAP pinned), ambient color shifts  |
| 5   | Book of Dead  | `#afterlife`    | Text deciphering effect, the Negative Confession       |
| 6   | Weighing      | -               | Balance metaphor, GSAP tilt animation                  |
| 7   | Treasures     | `#treasures`    | Swiper gallery of relics                               |
| 8   | Hieroglyphs   | `#hieroglyphs`  | Glyph translations, Rosetta Stone narrative            |
| 9   | Sky           | -               | Night scene with CSS star field                        |
| 10  | Valley        | -               | Valley of the Kings descent, KV62                      |
| 11  | Discovery     | -               | 1922 — Howard Carter, progressive reveal               |
| 12  | Still Beneath | -               | "We have not found everything"                         |
| -   | Footer        | -               | Chapter navigation, photo credits                      |

## Dependencies

- **Tailwind CSS** — all styling
- **GSAP + ScrollTrigger** (npm) — parallax, pinned sections, reveals, animated numbers
- **Swiper Core** (npm) — Treasures gallery
- **@lucide/astro** — icons (ArrowUp, ChevronLeft/Right, Menu, X, Moon, Sun)

## Scripts

| Script               | Purpose                                |
| -------------------- | -------------------------------------- |
| `theme.ts`           | Light/Dark toggle + postMessage bridge |
| `palette.ts`         | Color palette bridge                   |
| `reveal.ts`          | IntersectionObserver scroll reveal     |
| `backToTop.ts`       | Floating back-to-top button            |
| `gsapAnimations.ts`  | All GSAP/ScrollTrigger animations      |
| `treasuresSlider.ts` | Swiper initialization                  |
| `menu.ts`            | Mobile navigation toggle               |

## Light/Dark

Full support via `data-theme` attribute. Toggle button in Header. Persisted to `localStorage` with synchronous restore.

## Images

All photographs sourced from Unsplash via hotlinked URLs. Attribution rendered per-photo (figcaption below each image) and as a consolidated "Photo credits" list in the footer. Metadata persisted in `data/images.ts`.

## Accessibility

- Semantic HTML5 landmarks and headings
- ARIA labels on all interactive elements
- Full keyboard navigation
- `prefers-reduced-motion`: all GSAP animations, parallax, and CSS animations disabled
- Skip-to-content link
- Visible focus rings
- Touch targets >= 44px

## Native CSS Exceptions

- Star field animation (`@keyframes twinkle`) — Tailwind has no keyframe for this
- Swiper pagination custom properties
- Scrollbar hiding (`.scroll-hide`)
- GSAP pin overflow fix (`.gsap-pin-active`)
- Egypt thematic custom properties (`--egypt-*`) — fixed chromatic colors for this landing's unique visual identity
