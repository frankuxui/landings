# Folio — Editorial Journal (blog)

A landing for **Folio**, a fictional weekly digital journal covering design,
architecture, culture, technology, ideas, and the people shaping them. Built
as a reading-first editorial experience — feature reports, a long-form
article, an interview, a running "dispatch" of short notes, an issue
archive, opinion columns, and an editor's picks spotlight — rather than a
generic blog landing template.

## Art direction

Editorial composition: large fluid headlines, `font-mono` used for issue
numbering/metadata/eyebrows (a shared, non-branded accent token), numbered
story rows instead of cards, a deliberate mix of section widths (full-width
bands, contained sections, and a narrow `max-w-copy` reading column for the
long-form piece), and restrained GSAP used only where it earns its place:
a headline entrance on the Hero, a subtle parallax drift on the two largest
placeholders, and an active-topic indicator inside the sticky "Dispatch"
index. Strictly monochrome: white, black, and grayscale only.

## Structure

- `index.astro` — self-contained root document (full `<html>`), no
  dependency on the platform layout.
- `sections/` — Header, Hero, Feature ("this week's report"), LatestStories
  (numbered editorial rows), Topics (editorial index/nav, not cards),
  Dispatch (sticky topic index + scrolling short pieces — see below),
  LongForm (narrow reading column with a pull quote and side notes),
  Interview (sticky portrait/intro + scrolling Q&A), Archive (Swiper Core
  carousel of past issues), Opinion (short columns grid), EditorsPicks
  (inverted spotlight, deliberately different composition from
  LatestStories), Newsletter (accessible subscribe form), CTAFinal, Footer.
- `components/` — reused for real structure/content: `ImagePlaceholder`,
  `StoryRow`, `ArchiveSlide`, `OpinionColumn`, `EditorPickItem`.
- `data/` — typed content (`nav`, `topics`, `stories`, `dispatch`,
  `archive`, `opinions`, `editorsPicks`, `interview`, `feature`).
- `styles/tailwind.css` — imports only `src/styles/landing-design-system.css`
  plus the minimal, documented local Swiper pagination theming for the
  Archive slider.
- `scripts/` — `theme.ts` (applies the preview shell's `postMessage` theme
  to this document only), `reveal.ts` (`IntersectionObserver` scroll
  reveals), `menu.ts` (accessible mobile nav), `navIndicator.ts` (active
  section underline in the header), `heroReveal.ts` (Hero headline entrance),
  `parallax.ts` (subtle drift on the Hero cover and the long-form image),
  `dispatchProgress.ts` (active-topic tracking for the sticky Dispatch
  index), `archiveSlider.ts` (Swiper Core, no autoplay). All GSAP scripts
  use `gsap.matchMedia()`, clean up their ScrollTriggers, and respect
  `prefers-reduced-motion`.
- `types.ts` — local content types (not shared with the platform).

## Sticky columns

Two sections use the selective sticky-column pattern (`lg:sticky lg:top-24`
matching `lg:grid-cols-…`, reverting to normal flow below `lg`):

- **Dispatch** — the short topic index stays sticky while several short
  stories/quotes/notes scroll past on the right.
- **Interview** — the short portrait/intro column stays sticky while the
  longer Q&A list scrolls past on the right.

## Shared design system

Part of the same visual system as the rest of the gallery. `styles/tailwind.css`
only imports `tailwindcss` and `src/styles/landing-design-system.css` — no
color, Light/Dark, typography, easing, radius/shadow, or shared
breakpoint/container tokens are redeclared. Uses **Wix Madefor Text**
exclusively, loaded in `<head>` with the same `<link>` block as every other
landing. No `@layer components` anywhere; no `ui.ts`/`styles.ts`/`classes.ts`
or equivalent class-string files; no Astro component created solely to hide
Tailwind classes.

## Buttons and borders

Only the official `primary`, `secondary`, `ghost`, and `tertiary` variants.
Border is used only on `tertiary` controls: the "View all stories" link in
Latest Stories and the Archive's previous/next icon buttons. Every other
button/button-like link is borderless. Badges, labels, and cards are
differentiated through surface, contrast, typography, and spacing — never a
border.

## Fictional data and privacy

Folio, its issue numbering, its bylines ("Editorial Team", "Staff Writer",
"Contributing Writer", "Guest Columnist"), and every story/quote/interview
in this landing are entirely fictional demo content. No real names,
addresses, phone numbers, plausible emails, social profiles, or structured
data are included. The Newsletter form is a static demo — it doesn't submit
anywhere.

## Notes

- The catalog thumbnail (`public/landings/editorial-journal/thumbnail.svg`)
  is an original, monochrome SVG authored for this landing — no external
  provider or `assets/cover.png` exists yet for this landing.
- Every content image is a `bg-placeholder`/`bg-placeholder-inverse`
  placeholder at its real aspect ratio, ready to be swapped for a real
  `<img>`/`Image`/`Picture` without redesigning anything.
- Supports Light and Dark, each designed independently.
- Strictly monochrome: white, black, and grayscale only.
