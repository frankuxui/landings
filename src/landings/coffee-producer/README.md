# Coffee Producer - Single-Origin Coffee (business)

The gallery's flagship landing: a fictional specialty-coffee brand
(**Coffee Producer**) that grows, selects, and roasts its own coffee in a
fictional mountain region (the Altos de Vientoclaro). Aimed at coffee
drinkers, cafés, restaurants, and distributors.

## Structure

- `index.astro` - self-contained root document (full `<html>`), no
  dependency on the platform layout.
- `sections/` - one section per page block (Header, Hero, About, OurCoffee,
  Process, Products, Values, Stats, Testimonials, CTAFinal, Contact,
  Footer).
- `components/` - pieces reused for real structure, content, or semantics:
  product card, process step, value, stat, testimonial, image placeholder,
  and form field.
- `data/` - this landing's typed content (navigation, process, products,
  values, stats, testimonials).
- `styles/tailwind.css` - this landing's local, self-contained Tailwind
  CSS v4 visual system: declares its own tokens (`:root`/
  `[data-theme="dark"]`/`@theme inline`/`@theme`), breakpoints, container,
  fluid typography scale, easing, and the `reveal` utility, without
  importing any file outside this folder. Token names are the gallery's
  shared vocabulary; the values belong to this landing only.
- `scripts/` - `theme.ts` (listens for the preview shell's theme
  `postMessage` and applies it only to this document), `reveal.ts`
  (scroll reveals via `IntersectionObserver`, respects
  `prefers-reduced-motion`), `navIndicator.ts` (GSAP scroll-aware active
  nav pill), `productsSlider.ts` (Swiper Core product carousel, no
  autoplay), `statsCounter.ts` (GSAP count-up for the stats grid), and
  `menu.ts` (accessible mobile menu).
- `types.ts` - this landing's local content types (not shared with the
  platform).

## Styling system

Tailwind CSS v4 is this landing's design and composition system.
`styles/tailwind.css` is its only stylesheet and is fully self-contained:
it imports no file from the platform or any other landing. It locally
declares tokens with `:root`/`[data-theme="dark"]`/`@theme inline`/`@theme`
(semantic colors, typography, breakpoints, container, spacing, easing,
fluid heading scale) and the `reveal` utility with `@utility`. Swiper
Core's own theming (Products pagination) is resolved with minimal local
CSS, since Tailwind exposes no utilities for those custom properties.
One-off styles remain as utilities directly in the Astro markup.

Criteria applied:

- Design token -> `@theme` / `@theme inline` (local to this landing).
- Specialized reusable behavior -> `@utility`.
- One-off styling -> utilities directly in `class`.
- Reusable structure, content, logic, or semantics -> Astro component.

There are no `ui.ts`, `styles.ts`, `classes.ts`, visual-variant TypeScript
objects, `@layer components`, or Astro components created solely to
encapsulate classes. The official button variants (`primary`, `secondary`,
`ghost`, `tertiary`) are applied as Tailwind utilities directly in the
markup; each usage keeps its real semantic HTML (`<a>` for navigation,
`<button>` for actions).

## Available CSS variables

Declared locally in `styles/tailwind.css` (same names as the rest of the
gallery, values owned by this landing): `--background`,
`--background-alt`, `--foreground`, `--muted`, `--border`, `--surface`,
`--surface-strong`, `--control`, `--control-hover`, `--ring`, `--primary`,
`--primary-foreground`, `--emphasis`, `--disabled`, `--disabled-foreground`,
`--inverted`, `--inverted-foreground`, `--inverted-surface`, `--placeholder`,
`--placeholder-foreground`, `--placeholder-inverse` (with overrides under
`[data-theme="dark"]`), plus `--font-base`/`--font-display`/`--font-mono`,
`--breakpoint-footer/cards/nav/stats/display`, `--spacing-section`,
`--spacing-container-x`, `--container-landing/copy/heading/hero-heading`,
`--ease-landing`, and the `--text-headline-1/2/3`/`--text-figure` scale.

## Color palettes

This landing does not define optional color palettes: it uses exclusively
the default monochrome palette (`palettes: []` in its metadata).

## Fictional data and privacy

This landing is a design demo. It does not include `Organization`
JSON-LD or simulate a real company with registration data, social URLs, or
plausible contact details. Contact sections use clearly fictional
placeholders: `email@example.com`, `+00 000 000 000`, `Example Address`,
`City, Country`, `Instagram`, and `LinkedIn`.

## Notes

- The `thumbnail` image used by the catalog card and detail page is a
  hotlinked Unsplash photograph (`images.unsplash.com`), with its credit
  (`thumbnailCredit`) persisted in
  `src/content/landings/coffee-producer.json`. No copy is hosted under
  `public/`.
- All content images are real, credited Unsplash photographs at their
  real aspect ratio, rendered with the landing's monochrome treatment.
- Supports Light and Dark themes, each designed independently.
- Uses only the official button variants `primary`, `secondary`, `ghost`,
  and `tertiary`. Only `tertiary` uses a border; cards, badges, and labels
  are differentiated through surface, contrast, spacing, and hierarchy.
- Strictly monochrome: white, black, and grayscale only.
