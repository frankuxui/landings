# Cuba Two Realities

Independent Astro landing for the gallery, built as an editorial documentary experience about the contrast between Cuba as postcard and Cuba as lived reality.

## Structure

- `index.astro` owns the full document, font loading, theme/palette restore and script imports.
- `sections/` contains the narrative acts: hero, postcard, streets, comparison, two tables, geography, Havana housing, redesigned daily life, blackout, generational memory, voices, departure, words, beauty, culture, gallery, sources and footer.
- `components/` contains only semantic reuse: photo rendering, photo credit and back-to-top.
- `data/images.ts` persists image metadata and license credits.
- `data/sources.ts` persists documentary sources, notes and voice fragments.
- `scripts/` contains isolated progressive enhancement for GSAP, ScrollTrigger, Swiper, menu, comparator, word previews, theme, palette and back-to-top.
- `styles/tailwind.css` contains the landing-local Tailwind v4 design contract.

## Editorial Rules

The page avoids invented testimony, invented statistics and unlicensed photojournalism. Voice slides are marked as editorial fragments based on documentation. Economic crisis is contextualized as multi-causal, including internal policy, state control, infrastructure deterioration, tourism decline, pandemic effects, energy dependence, the U.S. embargo and sanctions.

## Dependencies

Uses Astro, Tailwind CSS, GSAP, ScrollTrigger, Swiper Core and `@lucide/astro`. No framework islands are introduced. Typography uses Google Fonts: Archivo Black for primary statements, Roboto Condensed for strong metadata/subheads, IBM Plex Sans for body copy and Source Serif 4 only for limited intimate editorial fragments.

## Photography

Photography is sourced from Wikimedia Commons and rendered from its original public file paths with visible per-photo attribution and a consolidated footer credit list. Unsplash was not used because `UNSPLASH_ACCESS_KEY` was unavailable in the environment, so the official Unsplash API/download-tracking flow could not be completed.

## Theme And Palette

Light and Dark are supported through semantic tokens. The default state is grayscale. The optional `caribbean-archive` palette adds desaturated Caribbean, aged facade and paper tones through the gallery palette mechanism.

## Technical Exceptions

The CSS includes small landing-local native rules for Swiper variables, the before/after comparison clip-path and documented motion utilities that Tailwind cannot express directly.

## Latest Redesign Pass

- `Gallery.astro` now behaves as a large documentary archive with uneven slide widths, mixed ratios, progress, numbering and GSAP-enhanced slide transitions.
- `Elders.astro` now tells a four-generation sequence with a sticky right-side image stack and ScrollTrigger-driven memory layers.
- `Living.astro` was rebuilt so long text never sits on complex photography; the image remains sticky while independent scenes enter with varied motion.
- `Blackout.astro` now includes a quiet dark sequence where image luminance drops and words reveal slowly.
