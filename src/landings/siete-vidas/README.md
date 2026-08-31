# Siete Vidas

Siete Vidas is an independent Astro landing for the gallery: an editorial cat archive built from large typography, monochrome photography, controlled chaos, scientific notes, and clearly labeled fictional story fragments.

## Structure

- `index.astro` owns the complete document, metadata, font loading, theme restore, palette restore, and script imports.
- `sections/Header.astro`, `sections/Experience.astro`, and `sections/Footer.astro` define the page experience. `Experience.astro` is intentionally a long editorial composition rather than a stack of reusable blocks.
- `components/Photo.astro`, `PhotoCredit.astro`, and `BackToTop.astro` provide semantic image attribution and the floating scroll control.
- `data/content.ts` stores typed editorial content, facts, stories, expressions, and archive records.
- `data/images.ts` stores all persisted Unsplash image metadata and exports `allImages` for the required footer credit list.
- `scripts/` contains isolated client behavior for theme, palette, fullscreen menu, reveal, GSAP motion, Swiper progress/slide transitions, layered cards, accessible accordions, and back-to-top.
- `styles/tailwind.css` contains the full local Tailwind v4 design-token contract, the Blue Cat palette, Swiper theming, accordion/card hooks, and documented native CSS exceptions.

## Design

The default state is strictly monochrome: soft black, off-white, smoke gray, stone gray, and mid gray. The optional `blue-cat` palette is inspired by feline eyes, low light, Russian blue fur, and moonlit interiors. Palette color reaches selected editorial surfaces through guarded palette utilities while the default state remains grayscale.

The tone is contemporary editorial rather than pet-store: a layered hero with a dominant cat image, giant condensed headings, metadata at the edges, a campaign-like black-cat spread, floating photo compositions, offset seven-lives cards, interactive curiosity cards, personality profiles, horizontal logic panels, vertical and horizontal Swipers with progress bars, chaotic night pacing, slow sleep pacing, and a final archive grid.

## Dependencies

This landing uses Astro, Tailwind CSS, GSAP with ScrollTrigger, Swiper Core, and `@lucide/astro`. It deliberately loads Manrope for body text, Barlow Condensed for editorial headlines, and Anton for oversized impact words because the brief requires a poster-like typographic system.

## Accessibility

The landing uses semantic landmarks, real buttons for actions, visible focus states, Escape support and focus trap for the fullscreen menu, keyboard-enabled Swipers, keyboard/tap cards, semantic `<details>/<summary>` accordions with animated content, captions below every image, a consolidated footer credit list, and a `prefers-reduced-motion` path that disables decorative GSAP motion while keeping navigation, Swipers, cards, and accordions usable.

## Scientific Sources

The factual claims are conservative summaries from veterinary/academic references consulted during build:

- VCA Hospitals on cats as crepuscular rather than strictly nocturnal.
- VCA Hospitals on typical cat sleep duration and activity bursts.
- VCA Hospitals on cat ear musculature and independent movement.
- MSD Veterinary Manual on cat eye structure, rod cells, low-light vision, and the tapetum lucidum.
- Cornell Feline Health Center and veterinary behavior references for stress, pain, purring context, and feline behavior framing.

Fictional entries are explicitly labeled as editorial stories or archive files.

## Images

Photography comes from Unsplash and is hotlinked from `images.unsplash.com` with visible per-photo captions plus a page-level "Photo credits" list. Attribution and UTM links must remain intact when this landing is reused or downloaded.

## Technical Exceptions

`styles/tailwind.css` includes landing-local native CSS for `clip-path` reveal hooks, Swiper custom properties, progress-bar sizing, card expansion hooks, scrollbar styling, and accordion marker removal because those APIs are not cleanly represented by static Tailwind utilities without repeating arbitrary values in markup.
