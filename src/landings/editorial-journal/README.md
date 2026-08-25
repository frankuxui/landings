# Editorial Journal (blog)

A landing for **Editorial Journal**, a fictional weekly digital journal
covering design, architecture, culture, technology, ideas, and the people
shaping them. Built as a reading-first editorial experience — feature
reports, a long-form article, an interview, a running "dispatch" of short
notes, an issue archive, opinion columns, and an editor's picks spotlight —
rather than a generic blog landing template.

## Art direction

Editorial composition: large fluid headlines, `font-mono` used for issue
numbering/metadata/eyebrows (a shared, non-branded accent token), numbered
story rows instead of cards, a deliberate mix of section widths (full-width
bands, contained sections, and a narrow `max-w-copy` reading column for the
long-form piece), and restrained GSAP used only where it earns its place:
a headline entrance on the Hero, a subtle parallax drift on the two largest
photographs, and an active-topic indicator inside the sticky "Dispatch"
index. Strictly monochrome by default: white, black, and grayscale — with
two opt-in thematic palettes (see "Color palette" below).

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
- `components/` — reused for real structure/content: `Photo` (real Unsplash
  photography, monochrome by default via `photo-tone`), `PhotoCredit`
  (photographer + Unsplash attribution line), `StoryRow`, `ArchiveSlide`,
  `OpinionColumn`, `EditorPickItem`, `BackToTop`.
- `data/` — typed content (`nav`, `topics`, `stories`, `dispatch`,
  `archive`, `opinions`, `editorsPicks`, `interview`, `feature`, `media`),
  plus `images.ts` collecting every Unsplash photo used in the landing for
  the Footer's consolidated "Photo credits" list.
- `styles/tailwind.css` — this landing's own complete design-token contract
  (colors, Light/Dark, fluid heading scale, base structural tokens), the
  optional color-palette layer, the `photo-tone` monochrome/recolor utility,
  and the minimal, documented local Swiper pagination theming for the
  Archive slider. Fully self-contained — no import of any file outside this
  landing's own folder.
- `scripts/` — `theme.ts` (Light/Dark toggle + the preview shell's
  `postMessage` bridge, both scoped to this document only), `palette.ts`
  (color-palette toggle + `postMessage` bridge, mirroring `theme.ts`),
  `reveal.ts` (`IntersectionObserver` scroll reveals), `menu.ts` (accessible
  mobile nav), `navIndicator.ts` (active section underline in the header),
  `heroReveal.ts` (Hero headline entrance), `parallax.ts` (subtle drift on
  the Hero cover photo and the long-form article's photo),
  `dispatchProgress.ts` (active-topic tracking for the sticky Dispatch
  index), `archiveSlider.ts` (Swiper Core, no autoplay), `backToTop.ts`
  (floating "back to top" control). All GSAP scripts use
  `gsap.matchMedia()`, clean up their ScrollTriggers, and respect
  `prefers-reduced-motion`.
- `types.ts` — local content types (not shared with the platform),
  including `UnsplashImage`.

## Sticky columns

Two sections use the selective sticky-column pattern (`lg:sticky lg:top-24`
matching `lg:grid-cols-…`, reverting to normal flow below `lg`):

- **Dispatch** — the short topic index stays sticky while several short
  stories/quotes/notes scroll past on the right.
- **Interview** — the short portrait/intro column stays sticky while the
  longer Q&A list scrolls past on the right.

## Color palette

Grayscale is the default and mandatory first-seen state (see the
astro-landing-pages Skill §9). This landing also owns two opt-in thematic
palettes, switchable via the platform's palette selector
(`scripts/palette.ts`, persisted to `localStorage`), both grounded in this
journal's own print/editorial identity:

- **Broadsheet** (`primary #2b1c12`, `secondary #7a5233`,
  `tertiary #b08c5e`, `accent #a8461f`, `light #f3e6cc`) — sepia ink on aged
  newsprint. Warm bistre, tobacco, and ochre tones evoke trust, permanence,
  and print heritage: the paper this journal is descended from.
- **Proof Blue** (`primary #16233b`, `secondary #2f4d7a`,
  `tertiary #6b86a6`, `accent #3f6fb0`, `light #e8edf3`) — the deep cobalt
  of a blueprint or an editor's blue-pencil proofing mark. Intellectual
  rigor and precision, tying together this journal's coverage of
  architecture (blueprints) and editing (blue-pencil corrections).

Both palettes ship a `[data-theme="dark"]` variant (`primary`/`light` and
`secondary`/`accent` swap, `tertiary` stays) and are currently consumed by
every official `primary`-variant button/link: the skip link, Header's
mobile "Subscribe" CTA, Hero's "Read the feature" CTA, Feature's "Continue
reading" CTA, CTAFinal's "Explore the archive" CTA, and the Newsletter's
submit button. Photography recovers full color automatically the instant a
non-grayscale palette is active, via the same `photo-tone` utility that
keeps it grayscale by default.

## Photography

Every image slot renders a real photograph sourced from Unsplash through the
`unsplash-images` Skill — no placeholder boxes remain. Persisted metadata
lives in `data/media.ts`, `data/stories.ts`, and `data/archive.ts`; the
consolidated list for the Footer's "Photo credits" comes from
`data/images.ts`. Every photo carries a visible photographer + Unsplash
credit below it (never overlaid on top), plus a `title` tooltip, and is
rendered through `components/Photo.astro` with the `photo-tone` monochrome
treatment.

Sourced photographs:

- Hero cover — reading glasses on a stack of magazines and books
  (Kari Shea, `0TIAKTH3UdM`).
- Feature — a manual typewriter on a plain desk (Katrin Hauf,
  `jpkvklXwt98`).
- LongForm — a minimal gray concrete building facade (Simone Hutsch,
  `XK0faa4_mCQ`).
- Interview portrait — a dramatically lit portrait (Marcin Sajur,
  `tCdBZUcI3Xw`).
- LatestStories thumbnails — a black-and-white spiral staircase for the
  Architecture story (Hassaan Tahir, `GQaro7fRn4w`), a retired office chair
  for the Culture story (Adrian Holmes, `8raw7IqO-Yk`), a hand writing in a
  notebook for the People story (Thought Catalog, `505eectW54k`).
- Archive covers — six black-and-white architecture photographs, chosen
  from a single search for tonal/compositional consistency across the
  slider (Alaa Cherni `Mrzh7wMWcbs`, Robin Schreiner `L3UZr6CAkbU` and
  `yADXyB-BhV8`, Joakim Nådell `pW1w3RfUJEs`, blocks `P26JbxnaE4g`, Jonas
  Off `EKqFxqm-BFg`).

Anyone reusing this landing outside the platform must preserve every credit
above (per-photo caption and the Footer's consolidated list) alongside the
Unsplash-hotlinked images themselves.

## Buttons and borders

Only the official `primary`, `secondary`, `ghost`, and `tertiary` variants.
Border is used only on `tertiary` controls: the "View all stories" link in
Latest Stories and the Archive's previous/next icon buttons. Every other
button/button-like link is borderless. Badges, labels, and cards are
differentiated through surface, contrast, typography, and spacing — never a
border.

## Fictional data and privacy

Editorial Journal, its issue numbering, its bylines ("Editorial Team",
"Staff Writer", "Contributing Writer", "Guest Columnist"), and every
story/quote/interview in this landing are entirely fictional demo content.
No real names, addresses, phone numbers, plausible emails, social profiles,
or structured data are included. The Newsletter form is a static demo — it
doesn't submit anywhere.

## Notes

- The `thumbnail` image used by both the catalog card and the detail page is
  a hotlinked Unsplash photograph (`images.unsplash.com`), with its credit
  (`thumbnailCredit`) persisted in
  `src/content/landings/editorial-journal.json`. No copy is hosted under
  `public/`.
- Supports Light and Dark, each designed independently.
- Strictly monochrome by default, with two opt-in color palettes (see
  "Color palette" above).
- Includes a floating "back to top" control (`components/BackToTop.astro`,
  `scripts/backToTop.ts`), hidden until the reader scrolls past one
  viewport height.
