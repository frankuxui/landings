# Fishing Adventures

An English-language portfolio and personal-brand landing for a fishing creator. Its professional editorial composition treats fishing as a field practice: water knowledge, trip preparation, responsible access, equipment reasoning, community learning, and carefully framed collaboration work.

## Sections

- `Hero`: concise position, primary paths, lead photography, and field-condition motif.
- `About`: sticky editorial introduction, portrait, principles, and journal context.
- `Waters`: an offset four-part atlas of mountain, lake, river, and sea environments.
- `Highlights`: three substantial adventure studies pairing landscape photography with decisions and conditions.
- `Stories`: keyboard-accessible Swiper with full field notes, conditions, and lessons.
- `FieldGuide`: sticky equipment overview, four detailed kit entries, and five expert notes.
- `Gallery`: immersive, intentionally asymmetric visual log.
- `Community`: participation model, reader proof, and responsible-location principles.
- `Collaborations`: field testing, editorial stories, and small-group learning formats.
- `CTAFinal`: closing invitation for readers and considered partnerships.

## Structure

- `index.astro`: isolated full document, metadata, synchronous theme/palette restore.
- `sections/`: one semantically named Astro file per editorial domain, plus header, final CTA, and footer.
- `components/`: reusable, attributed Unsplash photo rendering and the accessible back-to-top control.
- `data/content.ts`: explicitly typed environments, adventure highlights, stories, gear, tips, and collaboration formats.
- `scripts/`: local theme, palette, menu, GSAP/ScrollTrigger motion, Swiper, and back-to-top behavior.
- `styles/tailwind.css`: local Tailwind v4 design contract, responsive typography, grayscale default, and the Lake Trail palette.

## Dependencies and interaction

Tailwind CSS provides layout and styling; `@lucide/astro` provides icons. GSAP + ScrollTrigger drive progressive hero/reveal motion with a reduced-motion branch. Swiper Core powers the touch and keyboard accessible fishing-stories carousel without autoplay. The landing supports standalone Light/Dark switching, preview `postMessage` theme and palette switching, and local persistence.

## Palette

Grayscale is the first-seen state. The optional six-hue Lake Trail palette uses Deep Lake, River Teal, Pine Moss, Sunset Copper, Stone Sand, and Mist Foam, with inverted Light/Dark roles and selected section-level surface changes.

## Photography limitation

The landing uses twelve real Unsplash photographs selected through the editorial API workflow. Metadata and download locations are persisted in `data/images.ts`; every image renders a visible caption, the footer contains the consolidated credit list, and the catalog thumbnail carries its own credit metadata. Photography remains grayscale by default and recovers its original color when the Lake Trail palette is selected. Anyone reusing this landing must preserve the hotlinked image URLs and all credits.

## Responsive and image treatment

The layout is mobile-first. Short editorial introductions become sticky only at the desktop breakpoint when paired with longer content. Every photograph sits in an explicit aspect-ratio frame with `object-cover`, intrinsic dimensions, responsive Unsplash sources, and visible credit below the frame. Headline tokens are intentionally restrained for a dense personal-editorial page, with tight line-height on every fluid heading.

## Technical exceptions

Native CSS is limited to Swiper custom properties, pagination focus styling, and palette variable selectors, which Tailwind utilities cannot express cleanly.
