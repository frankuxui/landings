# Classic Car Archive

Classic Car Archive is a self-contained Astro landing page for a fictional
personal classic-car archive. It presents a private garage as a living museum:
collection notes, featured vehicles, restoration work, a timeline, events,
exhibitions, journeys, details, sounds, stories, and a browsable archive.

## Structure

- `index.astro` owns the full HTML document and imports only local landing
  files.
- `sections/` contains the page sections: Header, Hero, Collection, Featured,
  Origin, Timeline, Restorations, Details, Sounds, Events, Exhibitions,
  Journeys, Gallery, Stories, Archive, About, Community, CTAFinal, and Footer.
- `components/Photo.astro` renders Unsplash images with visible captions.
- `components/BackToTop.astro` renders the floating back-to-top button.
- `data/` stores navigation, editorial content, vehicle data, and persisted
  Unsplash image metadata.
- `scripts/` contains isolated client behavior for theme, palette, menu,
  reveal, GSAP motion, Swiper sliders, before/after comparison, and back to
  top.
- `styles/tailwind.css` contains the complete local Tailwind v4 design-token
  contract for this landing.

## Design

The first-seen state restores `data-theme="dark"` when no saved preference
exists, so the page opens as a black, high-contrast garage archive. Light mode
is still supported through the visible header toggle and through the platform
preview toolbar.

The default palette is grayscale. The optional `Garage Heritage` palette adds
small automotive accents inspired by racing red, aged instrument gold, British
racing green, petrol blue, burnt orange, and heritage cream. Palette color is
used deliberately for small emphasis, controls, Swiper active bullets, and a
few section-surface swaps.

Typography uses Google Fonts:

- Bowlby One SC for display headlines, years, and large numeric moments.
- IBM Plex Sans Condensed for navigation, metadata, paragraphs, and controls.

## Motion

GSAP and ScrollTrigger progressively enhance the experience with:

- Hero image mask reveal, scale, and parallax.
- Headline and metadata entrance.
- Scroll-built timeline line.
- Desktop horizontal timeline movement controlled by vertical scroll.
- Gentle gallery parallax and final-image scale.

All motion respects `prefers-reduced-motion`; content remains visible and
usable without JavaScript.

## Sliders

Swiper Core powers:

- Featured vehicles.
- Exhibitions.

Both sliders support drag, touch, keyboard navigation, pagination, and
accessible previous/next buttons.

## Unsplash

All real photography is hotlinked from `images.unsplash.com` with persisted
metadata in `data/images.ts`. Each rendered photo has a visible caption below
the image, and the footer includes the required consolidated photo credits
list. Credits and UTM links must be preserved when reusing this landing.

The Unsplash connector was used for search and selection. The shell environment
did not expose `UNSPLASH_ACCESS_KEY`, so no key is stored anywhere in this
landing.

## Technical Exceptions

`styles/tailwind.css` includes landing-local native CSS utilities for archive
texture, metallic divider lines, the mobile menu glass surface, Swiper
pagination variables, and photo/palette effects. These are kept local because
Tailwind utilities cannot express those third-party or layered-gradient
concerns cleanly without hiding values in class-string abstractions.
