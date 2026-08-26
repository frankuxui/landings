# Pet Care Haven - Professional pet care (business)

Landing for a fictional pet-care brand (**Pet Care Haven**): daily walks,
day care, bathing and grooming, boarding/hotel, personalized attention, and
wellbeing follow-up for dogs and cats. Aimed at families looking for a
trustworthy caregiver for their pet.

## Structure

- `index.astro` — self-contained root document (a full `<html>`), with no
  dependency on the platform layout.
- `sections/` — one section per page block: `Header`, `Hero`, `Scenes`
  ("A day of care", pinned/sticky with GSAP + ScrollTrigger), `Services`,
  `Gallery`, `Stories` (Swiper), `Testimonials` (Swiper), `Trust` (animated
  figures), `Process` (how it works), `Editorial` (emotional piece), `Team`,
  `CTAFinal`, `Contact`, `Footer`.
- `components/` — pieces reused for real structure, content, or semantics:
  `Photo` (a figure with its Unsplash credit below it, in normal flow),
  `PhotoCredit` (the attribution line, extracted so it can be composed
  either inside `Photo`'s own figcaption or inside a card's own below-photo
  footer strip without duplicating markup), `ServiceCard`, `PetTile`,
  `StorySlide`, `TestimonialSlide`, `StatFigure`, `ProcessStep`,
  `CaregiverCard`, `BackToTop`.
- `data/` — typed content for the landing: navigation, the day-of-care
  scenes, services, gallery pets, stories, testimonials, trust figures,
  process steps, the caregiver team, the Contact section's photograph, and
  the Unsplash photograph metadata used throughout the landing, plus a
  consolidated `images.ts` that collects every distinct photo for the
  footer's "Photo credits" list.
- `styles/tailwind.css` — this landing's local Tailwind CSS v4 visual
  system, complete and self-contained: semantic tokens (`:root` /
  `[data-theme="dark"]` / `@theme inline`), fluid typography, its own
  breakpoints and containers, easing, and the `reveal` utility. It imports
  nothing from outside this folder.
- `scripts/` — `theme.ts` (the header's own Light/Dark toggle, persisted to
  `localStorage`, plus the platform preview shell's `postMessage` bridge),
  `reveal.ts` (generic scroll reveals via `IntersectionObserver`),
  `heroReveal.ts` (the Hero's GSAP entrance: word-stagger via `SplitText`,
  clip-path + scale on the photograph, continuous float, and scroll
  parallax), `textReveal.ts` (reusable word-stagger for headings marked
  `[data-split-reveal]` in Scenes, Services, Process, and Editorial),
  `scenesPin.ts` (the GSAP + ScrollTrigger detail panel for "A day of care"
  on Laptop/Desktop), `statsCounter.ts` (the GSAP count-up for the "Trust"
  figures — it tracks only the `ScrollTrigger` instances it creates and
  kills only those on a `prefers-reduced-motion` change, so it never
  interferes with `ScrollTrigger`s owned by Hero/Scenes), `storiesSlider.ts`
  and `testimonialsSlider.ts` (Swiper Core carousels), `backToTop.ts` (the
  floating "back to top" control).
- `types.ts` — this landing's own content types (not shared with the
  platform or any other landing, aside from replicating the
  `unsplash-images` Skill's `UnsplashImage` shape).

## JavaScript-free navigation

`Header.astro`'s mobile menu is a native `<details>`/`<summary>`
disclosure, styled with Tailwind's `open:`/`group-open:` variants — it
depends on no script, unlike the menu pattern used in other landings in
this gallery. The primary "Book a visit" CTA only appears in the header
from `xl:` up, so the wordmark, nav links, and theme toggle never compete
for room right at the `nav:` breakpoint edge; it is still always reachable
through the mobile disclosure panel below that breakpoint.

## Styling system

Tailwind CSS v4 is this landing's design and composition system.
`styles/tailwind.css` centralizes semantic tokens with `@theme`/`@theme
inline` and specialized capability with `@utility` (`reveal`). There is no
`@layer components`: every style is applied as utilities directly in the
Astro markup of each component/section.

Criteria applied:

- Design token -> `@theme` / `@theme inline`.
- Specialized utility -> `@utility` (`reveal`).
- Specific styling -> utilities directly in `class`.
- Reusable structure, content, logic, or semantics -> Astro component.

Every button/button-styled link uses exactly one of the four official
variants (`primary`, `secondary`, `ghost`, `tertiary`). Badges, labels, and
cards are differentiated through surface, contrast, spacing, and hierarchy
— never a border, except on the mobile menu's `tertiary` controls, the
carousel buttons, and the Contact form's pet-type toggle pills.

### Documented native-CSS exceptions

- `.scene-rail` hides the native scrollbar of "A day of care"'s horizontal
  rail on Mobile/Tablet (`scrollbar-width`, `::-webkit-scrollbar`) —
  Tailwind exposes no utilities for these properties.
- `.stories-slider` / `.testimonials-slider` (and their pagination) set
  Swiper Core's own CSS custom properties (`--swiper-pagination-*`) onto
  this landing's monochrome tokens, instead of leaving Swiper's default
  blue.

## Differentiation from other landings in the gallery

Shares the same technical and monochrome philosophy as the rest of the
gallery, but with its own architecture and composition: a JavaScript-free
mobile menu (`<details>`/`<summary>`), a pinned/sticky "scenes" section
whose detail panel changes on scroll, a variable-size mosaic gallery
(rather than a flat grid), two Swiper carousels with distinct roles
(large-format stories and card-style testimonials), and a word-stagger
typographic treatment (GSAP `SplitText`) reused across several headings via
the `data-split-reveal` attribute.

## Images

Every photograph (Hero, "A day of care" scenes, services, pet gallery,
stories, the editorial piece, team, and final CTA) is a real Unsplash
photograph, sourced following the `unsplash-images` Skill: hotlinked from
`images.unsplash.com`, with its full metadata (`id`, `src`, `alt`, `width`,
`height`, `color`, `author`, `authorUrl`, `sourceUrl`, `unsplashUrl`,
`downloadLocation`) persisted in `data/`, and a visible, keyboard-reachable
credit below every photo (never overlaid on top of it) via
`components/PhotoCredit.astro`. A consolidated "Photo credits" list also
renders below the footer, built from `data/images.ts`'s `allImages` array.
Anyone reusing this landing must keep these credits.

Four service photographs reuse the exact same selection already made for
the matching scene in "A day of care" (same `id`, same credit) instead of
a new Unsplash search — it is the same photograph used in two contexts, not
a different photograph.

The pet gallery mosaic (`data/gallery.ts`) holds ten companions (five dogs,
five cats, mixing portraits, resting, and playful action shots), and
"Stories worth telling" (`data/stories.ts`) holds six stories — each set
was widened from a thinner initial pass to read as a fuller, richer
collection. The Contact section (`data/contact.ts`) also carries its own
supporting photograph.

## Fictional data and privacy

This landing is a design demo. It ships no `Organization` JSON-LD and does
not simulate a real company with registration data, social URLs, or
plausible contact details. Contact sections use clearly fictional
placeholders: `email@example.com`, `+00 000 000 000`, `Example Address`,
`City, Country`, `Instagram`, and `LinkedIn`. Pet names, owners, caregivers,
and testimonial quotes are entirely fictional; the team's caregivers are
paired with real Unsplash portraits of unrelated real people (the same
treatment as the reference photographer cast in the `aperture-editions`
landing).

## Notes

- Supports Light and Dark theme, each with its own functional selector: a
  visible Moon/Sun toggle button in `Header.astro` (persisted to
  `localStorage`, restored synchronously before first paint) plus the
  platform preview shell's `postMessage` bridge (`scripts/theme.ts`).
- A floating "back to top" button (`components/BackToTop.astro` +
  `scripts/backToTop.ts`) appears once the reader scrolls past one
  viewport height.
- This landing is strictly monochrome: white, black, and grayscale.
- "A day of care" works completely without JavaScript and with
  `prefers-reduced-motion` enabled: on Mobile/Tablet it is a horizontal
  rail with native scroll-snap, each scene carrying its own visible
  caption; the GSAP-pinned detail panel is a progressive enhancement
  exclusive to Laptop/Desktop with motion allowed.
