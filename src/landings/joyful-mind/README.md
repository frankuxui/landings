# Joyful Mind

Joyful Mind is a self-contained Astro landing for the gallery platform. It frames emotional wellbeing through everyday joy: laughter, movement, rest, sunlight, conversation, and small rituals.

## Structure

- `index.astro` owns the full document, metadata, local font loading, theme restore, palette restore, and script imports.
- `sections/` contains the narrative sequence: Hero, Joy, Habits, Manifesto, Science, Stories, Horizontal, Mood, Gallery, Things, Moment, Remember, Community, CTAFinal, Header, and Footer.
- `components/Photo.astro` renders Unsplash photos with visible captions, `components/BackToTop.astro` renders the floating scroll control, and `components/Sparkles.astro` is a purely decorative, monochrome "connection" constellation layer (twinkle disabled under reduced motion, tints to the palette accent when a colour palette is active).
- `data/images.ts` persists Unsplash metadata and `data/content.ts` stores typed editorial content.
- `scripts/` contains isolated behavior for theme, palette, mobile menu, Swiper, GSAP animations, and back-to-top.
- `styles/tailwind.css` contains the landing-local Tailwind v4 design contract, typography scale, palette, photo treatment, and documented utilities.

## Design Notes

The default state is strictly monochrome to match the gallery contract. The `Alive` palette (preview toolbar) is a cohesive electric-blue family: a deep indigo anchor (`--color-primary`, inverts Light/Dark like `--inverted`), a soft blue-white `--color-light` that tracks `--background`, and the vivid steps blue → violet → coral plus a fresh teal. Every token holds AA contrast against the grayscale base and against the surfaces it is paired with. Photographs use `photo-tone` so they load grayscale by default and recover color only when a non-grayscale palette is selected.

Joy (the section under the hero) and Habits are deliberately spare: a single centred statement plus unadorned figures for Joy, and a four-column list of one-line prompts (mono index, label, note — no cards, no imagery) for Habits, in a restrained modern-product register. The horizontal section is photo-led: each panel is a large rounded photograph with a small caption row beneath it, no heavy card chrome.

The hero is full device height (`min-h-dvh`), centres one dominant photograph, and runs a three-state sequence built from **two independent timelines**:

1. **State A — load.** Every secondary photo sits at its outer/home corner, fully visible, inside a per-breakpoint safe area (desktop 56px, tablet 40px, mobile 20px).
2. **Intro timeline (automatic, ~1.1s, not scroll-linked).** The secondaries converge toward the central photo — **State B (compact)**. They never hide behind it, they only draw in. If the visitor has already scrolled when this would start, it is skipped and the cards are set straight to B.
3. **Scroll timeline (pin + scrub), created in the intro's `onComplete` so it starts from B's exact values (no jump).** As the visitor scrolls, the hero **pins** and the secondaries drift back out — **State C (spread)** — a touch wider than A, with every position clamped against the live viewport (never `overflow: hidden`). The next section does not appear until this reaches `progress === 1`; only then does the hero unpin and the page scroll on. The central photo is the anchor: at most a small scale / `y` shift.

`gsap.matchMedia()` splits the whole thing three ways — 4 secondary photos on desktop, 3 on tablet, 2 on mobile — and `ScrollTrigger.refresh()` runs after `document.fonts.ready` and on every resize (`invalidateOnRefresh` + function-based positions). Without JS or with reduced motion the photos stay in their State A composition.

Additional GSAP patterns handle manifesto text reveals, tab transitions, mood transitions, the community collage entrance, and a staggered fade-up for the gallery. The horizontal storytelling section pins and translates its track, and each panel's photo drifts vertically while its title and metadata slide horizontally at their own rates via `containerAnimation` for depth. `Mood` drives a single soft radial glow behind the section whose reach and intensity grow with the selected feeling (`data-mood` on the section; monochrome by default, palette hue when active).

`Gallery` is a fixed three-column contact sheet (portrait `3/4` frames, mono index, hairline rule, caption below) — no bento, no per-tile parallax. `Moment` is a one-small-thing prompt deck: a card shows a tiny doable nudge and "Give me another" shuffles to a random different one, with a CSS-transition fade so the swap never depends on a live animation ticker (icon spin is decorative). `Remember` is a list-plus-detail navigator: a numbered index of six reminders on the left, and the active reminder expanded on the right (tag, line, and the reason it helps) — panels stack in one CSS grid cell and cross-fade via a declared CSS transition on selection.

The whole page below the hero is deliberately restrained and modern: soft neutral grays (`--foreground` at `neutral-900`, panels on `surface-strong`/`background-alt`, no borders), `font-semibold` headings in sentence case, one shared eyebrow/heading rhythm, mono index numbers, and section-transition curves (`rounded-t-4xl`) as the recurring device. Image corners use small-to-medium radii; the large curves belong to the sections. The decorative `Sparkles` constellation appears behind the hero, Manifesto, Community, and the final CTA.

## Dependencies

This landing uses Astro, Tailwind CSS, `@lucide/astro`, GSAP with ScrollTrigger, and Swiper Core. It does not import platform layouts, platform CSS, or files from other landings.

## Imagery

Photography is hotlinked from Unsplash and rendered from persisted metadata in `data/images.ts` (15 photographs). The set is a dedicated young-adult, contemporary-lifestyle edit sourced through the official Unsplash API for this landing — friends laughing, dancing, walking, at the beach, playing, making music — with the download event triggered for every selection. Credits are shown below each image and consolidated again in the footer; preserve both attribution layers when reusing the code.
