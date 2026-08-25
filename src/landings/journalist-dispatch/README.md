# Journalist Dispatch - Independent Journalist Portfolio (portfolio)

A large-format editorial portfolio for a fictional independent journalist
and field reporter (**Journalist Dispatch**). Built around investigation,
credibility, and field experience rather than a conventional
blog/newspaper layout: giant asymmetric type, a documentary photo essay
rendered in strict monochrome, sticky scroll-synced storytelling, a
horizontal coverage timeline, and a browsable, filterable archive.

## Structure

- `index.astro` - self-contained root document (full `<html>`), no
  dependency on the platform layout.
- `sections/` - one section per page block: `Header`, `Hero`, `Manifesto`,
  `Feature` (the current lead dispatch, sticky text synced to a scrolling
  photo sequence), `Stories` (asymmetric selected-stories grid), `
Investigations` (dark, near-infographic long-form section with animated
  counters), `Gallery` (full-bleed Swiper photojournalism exhibition),
  `FieldNotes` (travel diary), `Timeline` (horizontal-scroll coverage
  line), `Quote` (fragment-revealed editorial quote), `Publications`,
  `Awards`, `About` (sticky portrait beside a narrative bio), `Archive`
  (filterable reportage index), `Newsletter`, `Contact`, `Footer`.
- `components/` - real structural/behavioral reuse only: `Photo` (Unsplash
  image + visible credit caption, never overlaid), `StoryItem` (the three
  layout variants of a selected story), `TimelineStop` (one stop on the
  coverage timeline).
- `data/` - this landing's typed content: navigation, the lead dispatch,
  selected stories, investigations, gallery slides, field notes, coverage
  timeline, publications, awards, the archive, and all persisted Unsplash
  photo metadata (`images.ts`).
- `styles/tailwind.css` - this landing's local, self-contained Tailwind
  CSS v4 visual system: declares its own tokens (`:root`/
  `[data-theme="dark"]`/`@theme inline`/`@theme`), canonical breakpoints,
  a large editorial fluid typography scale, easing, and the `reveal`
  utility, without importing any file outside this folder.
- `scripts/` - `theme.ts` (Light/Dark bridge), `reveal.ts` (baseline
  IntersectionObserver reveals), `navIndicator.ts` (GSAP scroll-aware nav
  pill), `menu.ts` (accessible mobile menu), `heroReveal.ts` (clip-path
  photo reveal, word-by-word masthead reveal, parallax), `manifestoReveal
.ts` (line-by-line statement reveal), `featureScroll.ts` (sticky text
  synced to a crossfading photo sequence), `investigationsCounter.ts`
  (GSAP count-up), `gallerySwiper.ts` (Swiper Core exhibition slider, no
  autoplay), `timelineScroll.ts` (GSAP pinned horizontal-scroll timeline,
  `lg:` and up only), `quoteReveal.ts` (fragment-by-fragment quote
  reveal), `archiveFilter.ts` (plain category filter).
- `types.ts` - this landing's local content types (not shared with the
  platform).

## Styling system

Tailwind CSS v4 is this landing's design and composition system.
`styles/tailwind.css` is its only stylesheet and is fully self-contained.
Design tokens live in `@theme`/`@theme inline`, the reusable `reveal` and
`focus-underline` behaviors live in `@utility`, and Swiper's own pagination
theming (Photojournalism) is resolved with minimal, documented local CSS
since Tailwind exposes no utilities for Swiper's custom properties. One-off
styles remain as utilities directly in the markup. There are no `ui.ts`,
`styles.ts`, `classes.ts`, `@layer components`, or Astro components created
solely to encapsulate classes.

The typography scale is intentionally large for a portfolio built around a
single, bold masthead name and full-bleed photography
(`--text-headline-1` up to `8.5rem` for the hero name and the closing
footer word), while `--text-headline-3` stays restrained (up to `1.75rem`)
so it never overruns the dense Archive rows or Story cards.

## Animation

GSAP + ScrollTrigger is the primary animation system, tuned to be slow and
editorial (never elastic or bouncy): a clip-path hero photo reveal with a
word-by-word masthead entrance, a line-by-line Manifesto reveal, a sticky
lead-dispatch panel that crossfades through a photo sequence as the reader
scrolls, animated counters in Investigations, a GSAP-pinned horizontal
scroll for the Coverage timeline (Desktop only — Mobile/Tablet get a plain
swipeable horizontal row), and a fragment-revealed editorial Quote. Swiper
Core drives the full-bleed Photojournalism gallery (manual navigation
only: drag, buttons, pagination, and keyboard — no autoplay). Every
enhancement uses `gsap.matchMedia()` and is skipped for
`prefers-reduced-motion: reduce`, with the page fully readable and
navigable without any of it.

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

This landing is a design demo. It does not include `Organization`/`Person`
JSON-LD or simulate a real journalist, outlet, or organization. The
journalist is never given a plausible full personal name — content
consistently uses first-person voice or role references ("the desk"). All
outlet names (`The Northbound Review`, `Continental Dispatch`, `Field &
Ledger`, `Harbor & Wire Syndicate`) and award/organization names are
invented and generic. Contact sections use clearly fictional placeholders:
`desk@example.com`, `+00 000 000 000`, `City, Country`, `Instagram`, and
`LinkedIn`.

## Images

All photography is sourced from Unsplash through the `unsplash-images`
Skill: real, credited, hotlinked `images.unsplash.com` photographs,
persisted with full attribution metadata in `data/images.ts`. Every photo
renders under a `grayscale`/`contrast-125` treatment to keep the landing
strictly monochrome regardless of the source photo's original tonality.
Every photo carries a visible caption below it (never overlaid on top),
and the Footer renders a consolidated "Photo credits" list built from
`data/images.ts`'s `allImages` array. Anyone reusing this landing's code
must preserve this attribution.

## Notes

- The `thumbnail` image used by the catalog card and detail page is the
  same hotlinked Unsplash hero photograph, with its credit persisted in
  `src/content/landings/journalist-dispatch.json`. No copy is hosted under
  `public/`.
- Supports Light and Dark themes, each designed independently, with the
  landing's own toggle in `Header.astro` (persisted to `localStorage`,
  restored synchronously before first paint) alongside the platform
  preview's `postMessage` bridge.
- Uses only the official button variants `primary`, `secondary`, `ghost`,
  and `tertiary`. Cards, badges, and labels are differentiated through
  surface, contrast, spacing, and hierarchy rather than borders.
- Strictly monochrome: white, black, and grayscale only, in both themes.
