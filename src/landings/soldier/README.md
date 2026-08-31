# Soldier

Soldier is a fictional, cinematic tactical briefing landing. It does not represent a real army, government, mission, war, or operational doctrine. The page frames readiness as an editorial journey from recruit to soldier to mission ready.

## Structure

- `index.astro` owns the complete HTML document, metadata, local font links, and script imports.
- `sections/Header.astro` implements the floating command bar and fullscreen command menu.
- `sections/Hero.astro` handles initial contact and the boot-style first frame.
- `sections/Experience.astro` contains the narrative chapters: initiation, training, field training, tactical modules, awareness, night operation, loadout, brotherhood, archive, mission, tension, statistics, timeline, recruitment, requirements, and final statement.
- `sections/Footer.astro` renders the minimal system footer and the required page-level Unsplash credits.
- `components/Photo.astro` renders persisted Unsplash images with sizing parameters and visible captions.
- `components/BackToTop.astro` renders the floating return control.
- `data/content.ts` stores typed narrative data.
- `data/images.ts` stores portable Unsplash metadata and attribution.
- `scripts/` contains isolated client behavior for theme, palette, menu, reveals, motion, Swiper, accordion, and back-to-top.
- `styles/tailwind.css` contains the landing-local Tailwind v4 contract, palette, utilities, and documented native-CSS exceptions.

## Dependencies

The landing uses Astro, Tailwind CSS, `@lucide/astro`, GSAP with ScrollTrigger, and Swiper Core. It adds no component framework and imports no shared landing code.

## Interaction

Desktop receives the full motion layer: pinned hero, horizontal field movement, image layering in training, ScrollTrigger status changes, Swiper galleries, animated details accordions, and timeline drawing. Mobile keeps the same content with reduced pinning and touch-friendly controls.

`prefers-reduced-motion` disables long pinned/parallax sequences while preserving menu, Swiper, accordions, navigation, and access to every chapter.

## Theme And Palette

The default state is strictly monochrome. The landing supports Light and Dark through `data-theme`, with a visible command-bar toggle and preview-toolbar postMessage bridge.

The optional `field` palette uses olive, moss, field brown, desert dust, signal amber, and dry sand as a restrained tactical color layer. It is activated only through `data-palette` and never replaces the grayscale first view.

## Imagery

Photography is hotlinked from Unsplash through persisted metadata in `data/images.ts`. Each image renders a visible caption below the image, and the footer renders a consolidated credits list. Credits must be preserved if the landing is reused.

Because `UNSPLASH_ACCESS_KEY` was not available during this implementation pass, download tracking could not be triggered from the official Unsplash API.

## Native CSS Exceptions

`styles/tailwind.css` includes local native CSS for scanlines, repeated tactical grids, Swiper CSS variables, and pseudo-element HUD treatments. Tailwind utilities handle layout, typography, spacing, color roles, and responsive behavior.
