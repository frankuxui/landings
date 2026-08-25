# Grandparent Care - Accompaniment for families (business)

Landing page for a fictional initiative (**Grandparent Care**) that gives
talks on aging with dignity, provides personal accompaniment for older
adults who spend long stretches of the day alone, guides families through
difficult conversations, and runs small group activities against
loneliness. Aimed at families, grandchildren, communities, schools, and
workplaces.

## Structure

- `index.astro` - self-contained root document (a full `<html>`), with no
  dependency on the platform's layout.
- `sections/` - one section per page block: Header, Hero, Importance
  (why grandparents matter), Services (what we do), Stories (immersive
  carousel of fictional accounts), Signs (gentle observations worth a
  closer conversation), Tips (staggered practical-care cards), Workshops
  (talks agenda), Gallery (emotional photography), Benefits (accompaniment
  figures), Testimonials (family quotes), Quote (large standalone phrase),
  Resources (guides and checklists), FAQ, CTAFinal (also the `#contact`
  anchor), Footer.
- `components/` - pieces reused for real structure, content, or semantics:
  `Photo.astro`/`PhotoCredit.astro` (photograph + Unsplash attribution),
  `ServiceCard.astro`, `SignItem.astro`, `TipCard.astro`,
  `WorkshopCard.astro`, `StorySlide.astro`, `TestimonialCard.astro`,
  `ResourceCard.astro`, `BenefitStat.astro`, and the floating
  `BackToTop.astro` control.
- `data/` - this landing's typed content (navigation, services, signs, tips,
  workshops, stories, testimonials, benefits, resources, FAQ, Unsplash image
  metadata).
- `styles/tailwind.css` - this landing's local, **complete and
  self-contained** Tailwind CSS v4 visual system: semantic tokens (`:root` /
  `[data-theme="dark"]` / `@theme inline`), fluid typography sized for a
  quiet editorial voice, its own breakpoints/containers, easing, the
  `reveal`/`photo-tone` utilities, and the opt-in "Warmth" color palette. It
  imports no file from outside this folder — no dependency on the platform
  or on any other landing.
- `scripts/` - `theme.ts` (the header's Light/Dark toggle, persisted to
  `localStorage`, plus the preview shell's `postMessage` bridge, both
  applied only to this document), `palette.ts` (equivalent bridge for the
  "Warmth" color palette selector), `menu.ts` (accessible full-screen mobile
  navigation panel), `navIndicator.ts` (GSAP underline that follows the
  active link on desktop), `reveal.ts` (scroll reveals via
  `IntersectionObserver`), `textReveal.ts` (word-stagger reveal for section
  headings), `heroReveal.ts` (line-by-line headline reveal, image clip-path
  reveal with scroll parallax, fading scroll cue), `quoteReveal.ts`
  (line-by-line reveal for the large standalone "Quote" section),
  `galleryReveal.ts` (per-image clip-path reveal + scroll parallax for the
  emotional gallery), `statsCounter.ts` (GSAP count-up for the "Benefits"
  figures), `storiesSlider.ts` (Swiper Core stories carousel), and
  `backToTop.ts` (the floating "back to top" control).
- `types.ts` - this landing's own local content types (not shared with the
  platform).

## Styling system

Tailwind CSS v4 is this landing's design and composition system.
`styles/tailwind.css` centralizes the semantic tokens via
`@theme`/`@theme inline` and any specialized capability via `@utility`
(`reveal`, `photo-tone`). There is no `@layer components`: every button,
form, and section style is applied as utilities directly in each Astro
component/section's markup.

Applied criteria:

- Design token -> `@theme` / `@theme inline`.
- Specialized utility -> `@utility` (`reveal`, `photo-tone`).
- Specific styling -> utilities directly in `class`.
- Reusable structure, content, logic, or semantics -> Astro component.

There is no `ui.ts`, `styles.ts`, `classes.ts`, or TypeScript object storing
visual variants. Every button/button-like link uses exactly one of the four
official variants (`primary`, `secondary`, `ghost`, `tertiary`); badges,
tags, and cards are differentiated through surface, contrast, spacing, and
hierarchy — never a border, except `ResourceCard`'s single hairline border
(the `tertiary` treatment).

### Documented native-CSS exceptions

- `.horizontal-rail` hides the native scrollbar on any future horizontally
  scrollable rail on Mobile/Tablet (`scrollbar-width`,
  `::-webkit-scrollbar`) — Tailwind has no utility for these properties.
- `.stories-slider` / `.stories-slider-pagination` set Swiper Core's own CSS
  custom properties (`--swiper-pagination-*`) to this landing's monochrome
  tokens, instead of leaving Swiper's default blue.

## Per-landing color palette

Strictly monochrome by default (white, black, grayscale, in both themes).
The optional, opt-in **"Warmth"** palette — switchable through the
platform's palette selector — is built from color psychology around home,
comfort, and groundedness rather than a literal skin/hair-tone reference: a
grounded terracotta-brown (trust, warmth, stability) as primary, a dusty
rose (tenderness, care) as secondary, a deep olive-brown (heritage,
permanence) as tertiary, a muted sage (calm, renewal) as a restrained
accent, and a warm ivory (comfort, home) as light. Each color inverts
between Light and Dark the same way the shared `--primary`/`--light` tokens
do elsewhere in the gallery.

## Differentiation from the rest of the gallery

Shares the same technical philosophy and monochrome system as the rest of
the gallery, but with its own architecture and composition: a full-bleed
stacked editorial Hero (headline above a wide photograph, not a symmetric
two-column split), icon-led service cards instead of photographic ones, a
photographic "Stories" carousel kept deliberately distinct from a
text-only "Testimonials" quote grid, a large full-bleed standalone "Quote"
section as a mid-page pause, an asymmetric clip-path-revealed photo gallery,
and a native `<details>`/`<summary>` FAQ accordion that needs zero
JavaScript.

## Fictional data and privacy

This landing is a design demo. It does not include `Organization` JSON-LD
or simulate a real company with registration data, social URLs, or
plausible contact information. Contact sections use clearly fictional
placeholders: `hello@example.com`, `+00 000 000 000`, `Example Address`,
`City, Country`, `Instagram`, and `LinkedIn`. Every name in "Stories" and
"Testimonials" is a clearly fictional placeholder, not tied to any real
person.

## Notes

- Every content photograph is a real Unsplash photo, hotlinked
  (`images.unsplash.com`), rendered through `components/Photo.astro` (or the
  section's own `<img>` for the full-bleed Hero/Gallery/CTAFinal
  treatments) with a visible, keyboard-reachable credit shown via
  `components/PhotoCredit.astro` below the photo, in normal document flow —
  never overlaid on top of it. A consolidated "Photo credits" list, built
  from the `allImages` array in `data/images.ts`, sits below the footer's
  own content as a second, page-level point of attribution.
- The `thumbnail` image used by the catalog card and the detail page is
  also a hotlinked Unsplash photograph, with its credit
  (`thumbnailCredit`) persisted in
  `src/content/landings/grandparent-care.json`. No copy is stored in
  `public/`.
- Supports Light and Dark themes, each designed with its own intention. The
  header carries its own visible toggle button (`data-theme-toggle`),
  persisted to `localStorage` and restored synchronously before first paint
  so a standalone reload never flashes the wrong theme; it also mirrors the
  platform preview shell's `postMessage` bridge.
- All motion (headline/quote/heading reveals, hero and gallery clip-paths,
  parallax, stat count-up, story slide transitions) is skipped for
  `prefers-reduced-motion: reduce`, with every element rendering immediately
  in its final, readable state — this script-driven "hidden" state is never
  set by baseline CSS.
- The floating "back to top" button appears once the reader scrolls past
  one viewport height, fades/scales in on this landing's `--ease-landing`
  curve, is a real `<button>`, and is removed from the tab order while
  hidden.
- The FAQ accordion is a native `<details>`/`<summary>` element: fully
  functional and keyboard-operable without any JavaScript; the chevron
  rotation is pure CSS via Tailwind's `open:` variant.
