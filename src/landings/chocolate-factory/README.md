# Chocolate Factory - Precision chocolate (business)

Landing page for a fictional factory-made chocolate brand (**Chocolate
Factory**), based in a fictional mountain region (Ashford Crossing). It
selects cacao beans and turns them into chocolate bars in its own factory.
Aimed at consumers, specialty shops, restaurants, hotels, and distributors.

## Structure

- `index.astro` - self-contained root document (a full `<html>`), with no
  dependency on the platform's layout.
- `sections/` - one section per page block (Header, Hero, Origin, Factory,
  Process, Products, Editorial, Distribution, CTAFinal, Contact, Footer).
- `components/` - pieces reused for real structure, content, or semantics:
  photograph renderer, process step card, product slide, production figure,
  B2B segment row, editorial article, and the floating back-to-top control.
- `data/` - this landing's typed content (navigation, process, products,
  production figures, distribution segments, editorial pieces, Unsplash
  image metadata).
- `styles/tailwind.css` - this landing's local, **complete and
  self-contained** Tailwind CSS v4 visual system: semantic tokens (`:root` /
  `[data-theme="dark"]` / `@theme inline`), fluid typography, its own
  breakpoints/containers, easing, and the `reveal` utility (`@utility`). It
  imports no file from outside this folder — no dependency on the platform
  or on any other landing.
- `scripts/` - `theme.ts` (the header's Light/Dark toggle, persisted to
  `localStorage`, plus the preview shell's `postMessage` bridge, both
  applied only to this document), `palette.ts` (equivalent bridge for the
  optional color palette selector), `reveal.ts` (scroll reveals via
  `IntersectionObserver`), `menu.ts` (accessible full-screen mobile
  navigation panel), `navIndicator.ts` (GSAP underline that follows the
  active link on desktop), `processScroll.ts` (GSAP/ScrollTrigger pinned
  horizontal scroll for the "Process" section on Laptop/Desktop),
  `productsSlider.ts` (Swiper Core product carousel), `statsCounter.ts`
  (GSAP count-up for the production figures row), and `backToTop.ts` (the
  floating "back to top" control's scroll-triggered visibility and smooth
  scroll behavior).
- `types.ts` - this landing's own local content types (not shared with the
  platform).

## Styling system

Tailwind CSS v4 is this landing's design and composition system.
`styles/tailwind.css` centralizes the semantic tokens via
`@theme`/`@theme inline` and any specialized capability via `@utility`
(`reveal`). There is no `@layer components`: every button, form, and
section style is applied as utilities directly in each Astro
component/section's markup.

Applied criteria:

- Design token -> `@theme` / `@theme inline`.
- Specialized utility -> `@utility` (`reveal`).
- Specific styling -> utilities directly in `class`.
- Reusable structure, content, logic, or semantics -> Astro component.

There is no `ui.ts`, `styles.ts`, `classes.ts`, or TypeScript object storing
visual variants. Every button/button-like link uses exactly one of the four
official variants (`primary`, `secondary`, `ghost`, `tertiary`); only
`tertiary` (the product carousel controls) uses a border. Badges, labels,
and cards are differentiated through surface, contrast, spacing, and
hierarchy — never a border.

### Documented native-CSS exceptions

- `.process-rail` hides the native scrollbar of the "Process" section's
  horizontal rail on Mobile/Tablet (`scrollbar-width`,
  `::-webkit-scrollbar`) — Tailwind has no utility for these properties.
- `.products-slider` / `.products-slider-pagination` set Swiper Core's own
  CSS custom properties (`--swiper-pagination-*`) to this landing's
  monochrome tokens, instead of leaving Swiper's default blue.

## Differentiation from the rest of the gallery

Shares the same technical philosophy and monochrome system as the rest of
the gallery, but with its own architecture and composition: an asymmetric
editorial Hero (not a symmetric two-column layout), a full-screen mobile
menu (not a side panel), an underline-style nav indicator (not a pill),
a "Process" section with a GSAP-pinned horizontal scroll on Laptop/Desktop
instead of a vertical list, production figures laid out in a single row
with dividers instead of a card grid, cards and blocks with near-square
("mold-cast") radii instead of heavily rounded corners, and a footer with a
large wordmark and columns separated by a divider line.

## Fictional data and privacy

This landing is a design demo. It does not include `Organization` JSON-LD
or simulate a real company with registration data, social URLs, or
plausible contact information. Contact sections use clearly fictional
placeholders: `email@example.com`, `+00 000 000 000`, `Example Address`,
`City, Country`, `Instagram`, and `LinkedIn`.

## Notes

- Every content photograph is a real Unsplash photo, hotlinked
  (`images.unsplash.com`), rendered through `components/Photo.astro` with a
  visible, keyboard-reachable credit shown as a discreet caption below the
  photo (never overlaid on top of it). A consolidated "Photo credits" list,
  built from the `allImages` array in `data/images.ts`, sits below the
  footer's own content as a second, page-level point of attribution.
- The `thumbnail` image used by the catalog card and the detail page is
  also a hotlinked Unsplash photograph, with its credit
  (`thumbnailCredit`) persisted in
  `src/content/landings/chocolate-factory.json`. No copy is stored in
  `public/`.
- Supports Light and Dark themes, each designed with its own intention. The
  header carries its own visible toggle button (`data-theme-toggle`),
  persisted to `localStorage` and restored synchronously before first paint
  so a standalone reload never flashes the wrong theme; it also mirrors the
  platform preview shell's `postMessage` bridge.
- The "Process" section works fully without JavaScript and with
  `prefers-reduced-motion` enabled: the rail is a native horizontally
  scrollable container with `scroll-snap`; the GSAP pin is a progressive
  enhancement exclusive to Laptop/Desktop with motion allowed.
- The floating "back to top" button appears once the reader scrolls past
  one viewport height, fades/scales in on this landing's `--ease-landing`
  curve, is a real `<button>`, and is removed from the tab order while
  hidden.
- This landing is strictly monochrome: white, black, and grayscale, with an
  optional opt-in "Cocoa" color palette available through the platform's
  palette selector (never applied by default).
