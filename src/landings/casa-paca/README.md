# Casa Paca

A Business/Services landing for a humble, humorous neighborhood bar in a small Spanish village. The composition treats the restaurant as a place, not a brand: a menu that runs out when it runs out, the regulars who fill it every day, the woman who actually cooks the food, and the plain rules that keep it all working.

**Content language:** this landing's visible copy (headings, body text, CTAs, alt text, photo captions) is in Spanish, a deliberate choice for this landing's subject and tone — a village bar's humor doesn't survive translation. File names, component names, folder structure, IDs/anchors, code, and comments stay in English, following the platform's technical conventions.

## Sections

- `Header`: a deliberately fixed dark bar-entrance band — wordmark, primary navigation with a GSAP hover/focus underline, theme toggle, and a bold bordered "Ven a comer" CTA. On narrow viewports the menu button opens a fullscreen dark panel with large links, animated in with a staggered GSAP entrance.
- `Hero`: fixed dark band, a word-by-word split-text headline entrance, two new Bree Serif secondary lines, bold uppercase CTAs ("Ver lo que hay" / "Reservar si te acuerdas"), a clip-path hero photograph, and three handwritten-style annotations pinned to the image.
- `Menu` (`#menu`, "Lo que hay"): fixed dark chalkboard-style band — dense, irregular type sizes per dish, dashed rule under the header, three grouped lists (starters, mains, desserts) with plain prices and dry asides.
- `Philosophy` (`#philosophy`, "Nuestra filosofía"): fixed black band; four editorial lines revealed progressively as the section pins and scrubs with scroll (GSAP ScrollTrigger).
- `Neighbors` (`#neighbors`, "La gente"): a total editorial redesign — the giant, cropped "La gente." wordmark moves opposite the scroll direction (parallax-reverse) behind three asymmetrically placed regulars, each a rotated photo with an overlapping floating story card, instead of a symmetric card grid.
- `Stories` (`#stories`, "Historias del bar"): full-bleed, keyboard- and touch-accessible Swiper with three bar anecdotes — photo on one side, solid black text panel on the other (stacked on mobile), a live slide counter, and no autoplay.
- `Kitchen` (`#kitchen`, "Aquí cocina alguien de verdad"): an inverted panel introducing Paca, the cook, and four facts about her.
- `Tips` (`#tips`, "Consejos antes de venir"): a numbered 01–05 list of practical advice, revealed on scroll.
- `History` (`#history`, "De dónde venimos"): sticky intro beside a five-entry timeline, 1978–2026, with the year given strong typographic presence (`--text-figure` scale).
- `Village` (`#village`, "El pueblo"): a wide, slow-parallax photograph of the village street around the bar.
- `Gallery` (`#gallery`, "El álbum"): an intentionally irregular photo grid — plates, hands, kitchen, tiles, a regular, tables, the street — alternating slow/fast parallax speeds per tile.
- `Rules` (`#rules`, "Normas de la casa"): a comic two-column list of house rules.
- `Testimonials` (`#testimonials`, "¿Qué dicen de nosotros?"): four short, first-name-only quotes.
- `CTAFinal` (`#cta`): a full-width, slow-parallax closing photograph on an inverted surface, headline, a bold bordered CTA, and a caveat about calling ahead.
- `Footer`: address/contact placeholders, opening hours, footer navigation, closing line, and the consolidated photo-credits list.

## Structure

- `index.astro`: isolated full document, metadata, synchronous theme/palette restore.
- `sections/`: one file per section, named after its general concept (not the landing's theme).
- `components/`: `Photo.astro` (attributed Unsplash rendering, with an optional `figureClass` prop for layouts that need the whole `<figure>` to stretch — used by `Stories`' full-bleed split slide) and `BackToTop.astro`.
- `data/content.ts`: explicitly typed menu, neighbors, bar stories, tips, history, testimonials, and house rules.
- `data/images.ts`: persisted Unsplash metadata and attribution for every photograph used.
- `scripts/`: local theme, palette, mobile menu (`menu.ts`, GSAP fullscreen panel), header hover/entrance motion (`header.ts`), GSAP/ScrollTrigger motion (`motion.ts`), Swiper, and back-to-top behavior.
- `styles/tailwind.css`: local Tailwind v4 design contract, typography scale, grayscale default, and the "Bar de pueblo" palette.

## Dependencies and interaction

Tailwind CSS provides layout and styling; `@lucide/astro` provides icons. GSAP + ScrollTrigger drive: the hero's word-by-word split entrance, the hero split/clip-path image reveal and handwritten note entrances, `Header`'s own slide-down entrance and per-link hover/focus underline (`gsap.quickTo`), the mobile fullscreen menu's staggered link entrance, scroll-triggered list reveals, and a differentiated-speed parallax system (`[data-parallax="slow"|"fast"]` for photography, `[data-parallax-reverse]` for `Neighbors`' giant heading moving against scroll direction) gated to `min-width: 48rem` so mobile scrolling stays free of drift. All motion is gated behind `prefers-reduced-motion`. `Philosophy` uses a dedicated pinned, scrubbed ScrollTrigger timeline: the section pins in place while each line's opacity/position animates in step with scroll progress, falling back to fully visible static text (no pin, no animation) when `prefers-reduced-motion` is set. Swiper Core powers the touch- and keyboard-accessible, full-bleed bar-stories carousel (with a live "01 / 03" slide counter kept in sync via Swiper's `init`/`slideChange` events), no autoplay. The landing supports standalone Light/Dark switching (button in `Header`), preview `postMessage` theme and palette switching, and local persistence via `localStorage`.

## Typography

Headings, dish names, featured prices, comic asides/quips, and the "Lo que hay" / "Normas de la casa" content use **Bree Serif** (`--font-display`), a warm, humorous slab-serif that leans into the bar's tone. Body copy, navigation, hours, address, and secondary controls use **Source Sans 3** (`--font-base`/`--font-sans`). Both load through a single combined Google Fonts `<link>`, never `@import`. Bree Serif ships only a single (regular) weight and no italic in Google Fonts — bold/italic treatments on `font-display` text are browser-synthesized from that one weight, an accepted trade-off for this font's character.

## Palette

Grayscale is the first-seen state for every visitor, as required across the gallery. Casa Paca additionally ships one fully wired, contrast-verified thematic palette, switchable via the platform's palette selector and `data-palette` mechanism:

- **Bar de pueblo** (default color option): house-wine red (`#7b2d26`), sun-baked terracotta (`#c2674f`), toasted counter wood (`#6a4a3c`), hand-painted azulejo blue (`#477998`), faded shutter green (`#657153`), aged cream wall (`#e8d8b8`). `--color-primary`/`--color-light` hold roughly 6:1 contrast against each other in both Light and Dark, verified for the primary CTA button and the `palette-surface-primary`/`palette-surface-light` sections (`Kitchen`, `History`, `CTAFinal`).

Two additional palettes from the original brief are documented here as ready-to-swap alternates rather than wired into `data-palette`, because their hues (all genuine mid-luminance "Sunday lunch" tones) cannot clear 4.5:1 text contrast against each other with this landing's `--color-primary`/`--color-light` button convention. Anyone downloading this landing can substitute either block directly into `styles/tailwind.css`, replacing the `html[data-palette="bar-de-pueblo"]` rule (and its `[data-theme="dark"]` pair):

**Domingo familiar** — tomate maduro `#d94f3d`, mostaza casera `#d5a62a`, verde oliva `#788b4a`, azul cielo `#79a9c2`, rosa mantel `#d9a0a6`, marfil `#efe2c6`.

**Tasca nocturna** — granate oscuro `#6a252b`, verde botella `#304c3b`, ocre `#b88432`, azul pizarra `#4b6671`, beige humo `#cdbd9a`, rojo teja `#a84c3d`.

## Photography

Fourteen real Unsplash photographs, selected through the editorial API workflow: a village bar terrace, three regulars, three bar-story scenes, the cook at her stove, the village street, and a small irregular gallery (dough, tiles, a stew, empty tables). Metadata, alt text, and download locations are persisted in `data/images.ts`; every image renders a visible caption below it, and the footer contains the consolidated credit list. Photography stays grayscale by default and recovers color when the "Bar de pueblo" palette is active. Anyone reusing this landing must preserve the hotlinked image URLs and all credits.

## Responsive and image treatment

Mobile-first throughout. Sticky short-column/long-content pairs (`Neighbors`, `History`) apply only at `lg:`. Every photograph sits in an explicit aspect-ratio frame with `object-cover`, intrinsic dimensions, a responsive Unsplash `srcset`, and a visible credit in normal flow below the frame — never overlaid on the photo itself. Two sections (`Kitchen`, `CTAFinal`) frame their photograph in a light `bg-surface` card so the caption keeps correct contrast even while the surrounding section is inverted.

## Privacy

All contact details in `Footer` (address, phone, email) are unambiguous placeholders (`Dirección de ejemplo`, `Ciudad, País`, `+00 000 000 000`, `correo@ejemplo.com`). Neighbor and testimonial names are first names only, invented for this demonstration, and are not paired with the photographs used elsewhere in the landing. No structured data / JSON-LD is generated for this fictional business.

## Technical exceptions

Native CSS is limited to the palette variable selectors, `photo-tone`/`palette-surface-*` utilities, and Swiper pagination theming, which Tailwind utilities cannot express cleanly.

`Header`, `Hero`, `Menu`, `Philosophy`, and the text panel of each `Stories` slide use a fixed `bg-neutral-950`/`text-neutral-50` (rather than the theme-aware `--inverted` token) because the redesign's identity is a literal, always-dark village-bar entrance, independent of the active Light/Dark theme — all remain strictly monochrome, so this stays inside the grayscale contract, it just deliberately doesn't invert with the theme the way `Kitchen`/`CTAFinal`'s `bg-inverted` panels do. This intentionally front-loads the page with a dark, "walking into the bar at night" run (Header → Hero → Menu → Philosophy) before returning to daylight tones for `Neighbors`, `Tips`, `History`, `Village`, and `Gallery`, then closing dark again at `Stories`, `Kitchen`, and `CTAFinal` — the alternation the redesign asked for, at a page-rhythm level rather than section-by-section.

## Typography scale

`--text-headline-1/2/3`/`--text-figure` were pushed to a much larger, more extreme scale for this redesign (`--text-headline-1` now reaches `7.5rem`) so Bree Serif can genuinely lead the page — the giant "La gente." wordmark in `Neighbors`, the `Menu`/`Stories` headers, and the hero headline all lean on the top of this scale. Values remain a per-landing choice (per the gallery's Design System contract) and stay fixed for this landing.

## Image reuse note

`Stories`' "La cafetera" slide and `Gallery` were rebalanced using the landing's existing Unsplash bank (no new API search was available in this session) — `counterImage` (the bar's tiled counter) now illustrates the coffee-machine anecdote, and `storyWeddingImage` (a long outdoor table) moved into the `Gallery` collage in its place. No metadata was altered; only which section renders which already-persisted photo changed.
