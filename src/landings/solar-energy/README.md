# Solar Energy - Photovoltaic solar power (business)

Landing for a fictional brand (**Solar Energy**) dedicated to the analysis,
design, installation, and monitoring of photovoltaic solar energy systems.
Aimed at homes, businesses, industries, and organizations looking to reduce
their reliance on the conventional electrical grid and move toward the
energy transition.

## Art direction

Technical, architectural, and editorial composition: large-scale typography,
square corners (`rounded-sm`/`rounded-xs`, never `rounded-full`), technical
labels in `font-mono`, step/section numbering, and a deliberate rhythm of
**full-width** sections (Hero, Energy transition, Solutions, Installations,
Impact, Trust, Final CTA) against **contained** sections (Header, Technology,
Process, Testimonials, Editorial, Contact, Footer). Strictly monochrome:
white, black, and grayscale, no exceptions.

## Structure

- `index.astro` - self-contained root document (full `<html>`), with no
  dependency on the platform's layout.
- `sections/` - Header, Hero, Transition (climate commitment), Technology,
  Solutions, Process (sticky column + GSAP progress rail), Installations
  (asymmetric mosaic), Impact (headline figure + secondary figures),
  Testimonials (Swiper Core), Editorial (articles, contained section), Trust
  (strip of sectors served), CTAFinal, Contact, Footer.
- `components/` - pieces reused for real structure, content, or semantics:
  technical spec block, solution row, process row, installation tile, stat
  figure, testimonial slide, editorial article block, and the shared `Photo`
  component (real Unsplash photography, replacing the earlier placeholder),
  plus the floating `BackToTop` control.
- `data/` - the landing's typed content (navigation, technology, solutions,
  process, installations, impact, testimonials, articles, sectors) and
  `images.ts` (persisted Unsplash metadata for every photograph used).
- `styles/tailwind.css` - self-contained local Tailwind CSS v4 design system:
  declares its own tokens (`:root`/`[data-theme="dark"]`/`@theme
inline`/`@theme`), breakpoints, containers, fluid typography scale, easing,
  and the `reveal` utility, without importing any file outside this folder,
  plus the local Swiper pagination theming (Testimonials), the one genuinely
  local exception. Token names are the gallery's shared vocabulary; the
  values belong only to this landing.
- `scripts/` - `theme.ts` (the header's own Light/Dark toggle, persisted to
  `localStorage`, plus the preview shell's `postMessage` bridge), `reveal.ts`
  (scroll reveals via `IntersectionObserver`), `menu.ts` (accessible mobile
  menu), `navIndicator.ts` (active-section indicator in the header),
  `processProgress.ts` (vertical progress rail with ScrollTrigger for
  "Process"), `parallax.ts` (subtle parallax on large photographs),
  `statsCounter.ts` (GSAP count-up for "Impact"), and `backToTop.ts` (the
  floating back-to-top control). All use `gsap.matchMedia()`, clean up their
  ScrollTriggers/timelines, and respect `prefers-reduced-motion`.
- `types.ts` - this landing's own local content types (not shared with the
  platform).

## Shared design system

This landing is part of the same visual system as the rest of the gallery,
but is fully autonomous and independent: `styles/tailwind.css` imports only
`tailwindcss` and locally declares its own token contract (semantic colors,
Light/Dark, typography, easing, breakpoints, and containers) — it imports no
file from the platform or from any other landing. Token names are the
gallery's shared vocabulary (`--background`, `--foreground`, `--surface`,
`--muted`, `--primary`, etc.); the concrete values belong only to this
landing. Uses **Wix Madefor Text** exclusively, loaded in `<head>` with the
same `<link>` block as every other landing.

Criteria applied to local CSS:

- Design token -> declared locally in `styles/tailwind.css` (same name as
  the rest of the gallery, value owned by this landing), reused via
  utilities (`bg-background`, `text-foreground`, `bg-surface`, `text-muted`,
  `bg-primary`, `bg-placeholder`, `bg-placeholder-inverse`, etc.).
- Swiper-exclusive visual pattern (pagination) -> minimal, documented local
  CSS in `tailwind.css`.
- Specific styling -> utilities directly in each Astro element's `class`. No
  file uses `@layer components`.
- Reusable structure, content, or behavior -> Astro component.

There is no `ui.ts`, `styles.ts`, `classes.ts`, or TypeScript object of
visual variants, and no Astro component created solely to encapsulate
classes.

## Buttons and borders

Only the official `primary`, `secondary`, `ghost`, and `tertiary` variants.
Only the "Testimonials" navigation controls (previous/next) use the
`tertiary` variant with a border (`border border-border`); every other
button or button-styled link has no border. Badges, labels, and cards are
differentiated through surface, contrast, typography, and spacing — never a
border.

## Images

Every photographic slot is a real Unsplash photograph sourced through the
`unsplash-images` Skill: aerial solar farms, residential/commercial/
industrial rooftop installations, a shared community rooftop, and a
monitoring dashboard. Metadata (id, `src`, dimensions, author, source, and
download-tracking links) is persisted in `data/images.ts`. Every photo
carries its own discreet caption below it (never overlaid on top), rendered
by the shared `components/Photo.astro`, plus a consolidated "Photo credits"
list under `Footer.astro`. Anyone reusing this landing outside the gallery
must preserve this attribution.

## Fictional data and privacy

This landing is a design demo. It ships no `Organization` JSON-LD and does
not simulate a real company with registration data, social URLs, or
plausible contact details. Contact sections use clearly fictional
placeholders: `email@example.com`, `+00 000 000 000`, `Example Address`,
`City, Country`, `Instagram`, and `LinkedIn`. Testimonials are identified by
a neutral role ("Residential customer", "Operations manager"...), never a
full name.

## Notes

- The `thumbnail` image used by the catalog card and detail page is a
  hotlinked Unsplash photograph (`images.unsplash.com`), with its credit
  (`thumbnailCredit`) persisted in `src/content/landings/solar-energy.json`.
  No copy is hosted under `public/`.
- Supports Light and Dark themes, both designed with their own intention,
  and its own visible toggle button in `Header.astro` (persisted to
  `localStorage`, synchronously restored before first paint) alongside the
  platform preview shell's `postMessage` bridge.
- The "Process" section uses a `lg:sticky` left column while the taller
  right column scrolls — the sticky-columns pattern for content of
  mismatched height.
- A floating "back to top" button (`components/BackToTop.astro` +
  `scripts/backToTop.ts`) appears after the reader scrolls past one
  viewport height.
- The landing is strictly monochrome: white, black, and grayscale.
