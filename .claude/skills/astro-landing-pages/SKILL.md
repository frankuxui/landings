---
name: astro-landing-pages
description: Design, build, modify, and audit Astro landing pages inside this project's multi-landing gallery platform. Use whenever a task touches a specific landing — creating, redesigning, adding/modifying sections, fixing responsive or mobile issues, improving accessibility, animations, dark mode, auditing, or any landing-specific work.
---

# Astro Landing Pages

Rules for working on individual landing pages inside this repo's landing-page gallery platform. This platform hosts many independent landings side by side — never assume there is only one.

**Philosophy:** same language + same architecture + same naming + same Design System + same technical rules + completely independent landings + different designs.

All landings belong to the same project and share the same rules and Design System. What changes between landings is the design, composition, content, structure, sections, animations, and interaction. What never changes is the technical language or the base system.

---

## 1. Language: English only

Every landing must be entirely in English. This includes: visible content, navigation, headings, CTAs, forms, buttons, labels, messages, metadata, `alt` text, editorial content, IDs and anchors (when human-readable), file names, component names, and content variables.

Mixing languages is prohibited. Detecting mixed languages during an audit is an error to fix.

## 2. Naming conventions

All landings use exactly the same naming convention. If multiple landings contain conceptually the same section, the file must be named identically.

Correct: `Hero.astro`, `Header.astro`, `About.astro`, `Products.astro`, `Testimonials.astro`, `Contact.astro`, `Footer.astro`

Never: `HeroSection.astro`, `MainHero.astro`, `CoffeeHero.astro`, `TestimonialsSection.astro`

Rules:

- PascalCase for `.astro` components
- camelCase for functions, variables, and TS modules
- Names exclusively in English
- Semantic names not tied to the landing's theme when they represent common concepts

### The landing's displayed name matches its slug

The brand/site name shown on the page — `Header.astro`'s logo text, `Footer.astro`'s logo/copyright, `<title>`/`og:title`, and `src/content/landings/[slug].json`'s `name`/`title` — is the Title Case form of the landing's own slug, not an invented fictional brand. `coffee-producer` → "Coffee Producer", `solar-energy` → "Solar Energy", `silver-print` → "Silver Print". This keeps the gallery's identity (the slug) and the landing's on-page identity (what a visitor reads) always in sync, so a landing is instantly recognizable from either its URL or its own header — a fictional brand name (e.g. "Terraltura" for `coffee-producer`) is a mismatch to fix, not a stylistic choice to keep. Fictional place names, product names, or other flavor content used *inside* the landing's copy (e.g. a coffee origin's regional name) are unaffected by this rule — it governs only the landing's own displayed identity.

### No logo marks — the wordmark is the logo

Landings never get a designed logo icon/glyph/mark (a monogram badge, an abstract symbol, an icon standing in for the brand). The "logo" in `Header.astro` (and `Footer.astro`) is the landing's name as plain text — styled with weight/tracking/size like any other piece of type, never paired with a circular initial badge, an `@lucide/astro` icon, or any decorative mark next to it. This is deliberate: designing a bespoke mark per landing is real design work this gallery doesn't need, and an icon badge is exactly the kind of element that breaks first when a header is squeezed at a narrow width (fixed-size circle + wordmark + nav competing for the same row). A landing with an icon/badge next to its name is out of contract — remove the mark, keep the text.

## 3. Folder structure

Every landing follows this canonical structure:

```
src/landings/[slug]/
├── index.astro
├── README.md
├── sections/
├── components/
├── data/
├── scripts/
├── styles/
└── assets/
```

Complex landings may add subfolders when justified. Base folder names are fixed — never substitute alternatives like `ui/`, `blocks/`, `content/`, `css/`, or `helpers/` for responsibilities already covered. Empty folders must not exist.

Each landing also has a metadata file at `src/content/landings/[slug].json` (catalog data: category, tags, thumbnail, status).

## 4. Isolation

Each landing is an independent island. Sharing between landings is completely prohibited: components, sections, styles, Tailwind CSS, scripts, functions, data, assets, specific types, and configuration.

A landing never imports from `src/landings/other-landing/...`. No landing depends on another to function. This is fundamental — each landing must be downloadable independently.

A landing may depend on:

- Platform types from `src/types/` when genuinely shared

A landing never depends on:

- Another landing's folder, for any reason
- Any file inside `src/styles/` — including `global.css` and any shared CSS
- Platform catalog pages (`src/pages/`)
- Platform components (`src/components/platform/`)

## 5. Tailwind CSS

All landings use the latest stable Tailwind CSS defined by the project. Tailwind is the primary tool for: layout, spacing, typography, sizing, grids, flexbox, responsive, states, transforms, transitions, animation styling, Light/Dark, surfaces, and contrast.

Native CSS is allowed only when Tailwind cannot correctly express a specific technical need — never for convenience. When used, keep it minimal, landing-local, with a comment explaining the limitation, and document it in the README.

### Integration

Use Tailwind v4 CSS-first architecture: `@tailwindcss/vite` under `vite.plugins` in `astro.config.mjs`. Each landing's `styles/tailwind.css` starts with:

```css
@import "tailwindcss";
```

Followed immediately by the landing's own complete design-system contract. No import of any shared CSS file — the design system lives entirely inside the landing's own `styles/tailwind.css`.

Do not introduce legacy `@astrojs/tailwind`, `tailwind.config.js`, PostCSS/autoprefixer, or v3 directives.

### Mandatory block order in `styles/tailwind.css`

Every landing's `styles/tailwind.css` uses this exact top-level block order — not a per-landing preference, part of the shared contract:

```css
@import "tailwindcss";

/* explanatory header comment — self-containment, token names vs. values */

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  /* semantic Light tokens */
}

[data-theme="dark"] {
  /* semantic Dark tokens */
}

@theme inline {
  /* bridges :root/[data-theme="dark"] tokens into Tailwind-generated utilities */
}

@theme {
  /* --font-base, --font-sans, --font-display, --font-mono */
  /* --breakpoint-* */
  /* --spacing-*, --container-* */
  /* --ease-landing */
  /* --text-headline-*, --text-figure */
}

@utility reveal {
  /* scroll-reveal utility */
}

/* other landing-local @utility blocks, @keyframes, and documented
   native-CSS exceptions (e.g. Swiper pagination theming) */
```

`:root` always comes before `@theme` — the semantic Light tokens are independent of this landing's own `@theme` primitives (they consume Tailwind's built-in color palette, e.g. `--color-neutral-50`), so they read first as the baseline, followed by Dark, then the bridge, then this landing's raw design primitives. A landing whose file deviates from this order is out of contract and must be reordered — this is a structural rule, not a stylistic choice left to each landing.

`:root` and `[data-theme="dark"]` hold only the semantic color tokens — never `color-scheme`, never `font-family`, never a paired `html, body { ... }` rule. Both concerns are already covered by Tailwind utilities on `<html>`/`<body>` in `index.astro` (see "Shared typography" and the folder-structure `<html>`/`<body>` classes below) — a native CSS rule duplicating them is redundant and drifts out of sync.

### Styling rules

- Utilities directly in Astro `class` attributes as the primary approach
- Design tokens → `@theme` (declared locally in the landing's own `styles/tailwind.css`)
- Specialized reusable behavior → `@utility`
- One-off styling → utilities in `class`
- Reusable structure/content/logic/behavior → Astro component

**Prohibited:**

- `@layer components` for button/form/UI classes — all styling via utilities in markup
- Files like `ui.ts`, `styles.ts`, `classes.ts` storing Tailwind class strings
- Components created solely to encapsulate Tailwind classes
- Dynamically constructed utility names (must be statically detectable)
- `dark:` as the default theming mechanism (use semantic tokens instead; `dark:` only for genuine one-offs)

### No arbitrary color values

Never write raw color literals in arbitrary-value utilities — no hex, `rgb()`, `oklch()`, or named CSS colors in markup. Every color resolves through the token system: a named utility (`bg-surface`, `text-muted`) or `[var(--token-name)]` when no named utility fits.

## 6. No arbitrary Design System values

Prohibited:

```
bg-[#000000]  text-[#333333]  text-[10px]  p-[17px]  rounded-[13px]  min-[1400px]:text-lg
```

Use tokens, the Tailwind scale, official breakpoints, `@theme`, and existing utilities. If a genuinely new reusable value is needed, add it to the landing's local `@theme` block in `styles/tailwind.css` (and apply the same addition manually to every other landing if it belongs to the gallery contract) — never hardcode it in markup.

Do not declare landing-local `--radius-*` or `--shadow-*` tokens. Tailwind's built-in scales (`rounded-*`, `shadow-*`) are the shared ingredient set. A landing gets its look by picking different steps from these scales directly in markup.

## 7. Responsive

Always mobile-first. Use `sm:`, `md:`, `lg:`, `xl:`, `2xl:` as the primary system. Do not improvise breakpoints with `min-[...]:` or `max-[...]:` when Tailwind's native system suffices.

Use Container Queries (`@container`) when layout depends on the component's available space rather than the viewport.

Mobile, Tablet, Laptop, and Desktop have equal importance. Design from Mobile upward — unprefixed utilities are the Mobile state.

Custom breakpoints, when genuinely needed, go in `@theme` via `--breakpoint-*` in `rem`. The landing's own design-system contract already provides: `--breakpoint-footer`, `--breakpoint-cards`, `--breakpoint-nav`, `--breakpoint-stats`, `--breakpoint-display`.

## 8. Design System

Every landing owns a complete, self-contained copy of the design-system contract inside its own `styles/tailwind.css`. There is no shared CSS file — no landing imports from `src/styles/` or from any other landing. The duplication is intentional: a landing must remain fully functional when its folder is extracted in isolation.

The contract is identical across every landing:

- `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`
- Semantic color palette in `:root` (Light) and `[data-theme="dark"]` (Dark) — colors only, never `color-scheme` or `font-family`
- `@theme inline` mapping (generates `bg-background`, `text-foreground`, `bg-surface`, etc.)
- Font family in `@theme` (`--font-base`, `--font-sans: var(--font-base)`, `--font-display`, `--font-mono`)
- Fluid heading scale in `@theme` (`--text-headline-1/2/3`, `--text-figure`) — token **names** shared, values chosen per landing (see "Typography scale is per-landing" below)
- Structural tokens in `@theme` (`--spacing-section`, `--container-landing`, `--container-copy`, etc.)
- Named breakpoints in `@theme` (`--breakpoint-footer/cards/nav/stats/display`)
- Easing in `@theme` (`--ease-landing`)
- `@utility reveal` scroll utility

Every landing declares all of the above, in the block order given in §5 "Mandatory block order". A landing that is missing any of these blocks, or whose blocks are out of order, is incomplete. A landing that alters a token **name**, or the **value** of anything other than the typography scale, relative to the shared contract is in violation — those names and values are fixed for the entire gallery.

### Canonical values — breakpoints

These exact values are the gallery contract for every landing. Not a starting point, not a per-landing default — a locked value. A landing never changes them, never adds its own variant scale, and never tunes them "to fit" a particular composition.

```css
--breakpoint-footer: 45rem;
--breakpoint-cards: 47.5rem;
--breakpoint-nav: 56.25rem;
--breakpoint-stats: 67.5rem;
--breakpoint-display: 87.5rem;
```

If a landing genuinely needs a breakpoint step this set doesn't cover, that is a proposal to extend the gallery contract (apply it to all 7 landings at once, document it here first) — never a reason to give one landing its own numbers.

**Known debt:** `aperture-editions` and `silver-print` currently ship with different breakpoint values than the ones above. This is a contract violation to fix, not an alternate pattern to extend elsewhere — when work touches either landing, bring its values back in line with this table rather than treating its numbers as valid prior art.

### Typography scale is per-landing

`--text-headline-1/2/3` and `--text-figure` keep the same **names** everywhere (so markup — `class="text-headline-2"` — reads identically across landings), but their **clamp values are chosen per landing**, not copied from a shared table. Decide the scale the same way you'd decide any other design choice for that landing: what does its category, content density, and composition actually call for?

- An editorial/blog landing with long-form reading and a quiet, restrained voice wants smaller, tighter headline sizes than a bold SaaS hero built to be scanned in three seconds.
- A landing with a dense grid of cards (pricing tiers, product cards, stat blocks) needs a `text-headline-3`/body scale that stays legible at small card widths — oversized card headings are a common failure mode, watch for it specifically.
- A landing whose header logo, nav, and CTA all have to fit on one line at the `nav:` breakpoint needs its logotype and nav type sized with that constraint in mind — a large logo wordmark plus a full-size nav plus a CTA button is exactly how a header breaks first, before any content section does.

Pick real numbers (a `clamp(min, preferred, max)` per role, same shape as before) that fit the landing being designed, and treat them as fixed for *that* landing once chosen — still no arbitrary one-off `text-[32px]` in markup, still driven entirely through the `@theme` tokens. Differentiation between landings now comes from both composition *and* the typographic scale itself, not composition alone.

**`--font-sans` must be remapped to `--font-base`.** Every landing's `<html>`/`<body>` already carries the `font-sans` Tailwind utility (see folder-structure markup below) — without `--font-sans: var(--font-base)` in `@theme`, that utility silently falls back to Tailwind's default system sans-serif and Wix Madefor Text never actually renders in an isolated build. Do not "fix" this by adding a native `html, body { font-family: var(--font-base) }` rule instead — remap the token so the existing utility resolves correctly.

### `max-w-heading` goes on the heading element itself

`max-w-heading` (28ch) must be applied directly to the element carrying the fluid heading font-size (`text-headline-1/2/3`) — never to a wrapper `<div>` around the heading. `ch` is relative to the font-size of the element it's declared on: on a wrapper with the ordinary body font-size, 28ch resolves to a much narrower pixel width than on the actual `text-headline-2` element, so the heading's longest word overflows past its own container. This exact bug was found and fixed in `solar-energy/sections/Technology.astro` — audit every `max-w-heading` usage in a landing you touch and confirm it sits on the same tag as `text-headline-*`, not a containing `<div>`.

**A landing cannot deviate from the Design System contract to achieve its own personality.** Personality comes from: composition, layouts, grids, relative sizes, spacing, rhythm, hierarchy, sections, photography, animations, sticky, Swiper, GSAP. Same ingredients, different designs.

> **AUTONOMÍA > DRY.** Never extract the shared contract into a common file to avoid repeating it. The intentional duplication is what keeps every landing independently downloadable.

### Token vocabulary

Color roles: `--background`, `--background-alt`, `--foreground`, `--muted`, `--border`, `--surface`, `--surface-strong`, `--control`, `--control-hover`, `--ring`, `--primary`, `--primary-foreground`, `--emphasis`, `--disabled`, `--disabled-foreground`, `--inverted`, `--inverted-foreground`, `--inverted-surface`, `--placeholder`, `--placeholder-foreground`, `--placeholder-inverse`.

Never invent landing-branded synonyms (`--coffee-background`, `--chocolate-surface`, `--ease-onix`).

### Image placeholders

Use `bg-placeholder`/`text-placeholder-foreground`. On inverted surfaces, use `bg-placeholder-inverse`. Never hardcode one-off `bg-white/70` or `bg-black/60`.

### Token naming

Name by intent, not value. Prefer `bg-background`, `text-foreground`, `bg-surface` over `bg-white`, `bg-neutral-950`, `text-neutral-600`. A downloaded landing must be re-themeable by editing only the Design System tokens.

## 9. Monochrome

All landings use exclusively white, black, and grayscale. No chromatic colors — regardless of the landing's theme. A coffee landing does not use brown. A solar landing does not use green or yellow.

This applies to every component without exception: buttons, links, icons, forms, badges, cards, navigation, states, CTAs, decorative graphics, and placeholders. Differentiate interactive states through contrast, surface, opacity, weight, underline, scale, or motion — never color.

**One exception:** the opt-in color palette system (see §Optional palettes below).

## 10. Light / Dark

Every landing must support `data-theme="light"` and `data-theme="dark"` via the semantic token system. The markup stays identical between themes — only CSS variable values change.

Each landing must contain its own functional Light/Dark selector, independent of the platform's preview toolbar. Concretely, this means two things, both required — one is not a substitute for the other:

1. **A visible toggle button in the landing's own `Header.astro`** (e.g. a Moon/Sun icon button with `data-theme-toggle`), so the theme can be switched when the landing is viewed completely standalone — outside the platform preview iframe, or downloaded and opened on its own. A landing whose only theme-switching mechanism is listening for the platform's `postMessage` is incomplete: opened alone, it has no way to change theme at all.
2. **The `postMessage` bridge**, so the platform's own preview toolbar still works. The landing listens for `postMessage({ type: 'preview:theme', theme })` and toggles `data-theme` on its own `document.documentElement` only — never `window.top`.

The toggle button persists the choice to `localStorage` (a landing-local key, e.g. `[slug]-theme`) and restores it synchronously in `index.astro`'s `<head>` — inline, before first paint — so a standalone reload doesn't flash the wrong theme. Both the button's click handler and the `postMessage` listener should write to the same `localStorage` key, so either source of a theme change stays in sync with the other.

Both themes stay strictly monochrome. Dark is not just an inverted Light — design it with its own intention.

## 11. Typography

**Wix Madefor Text** (weights 400–800 + italic) is the gallery's default typeface, used unless a landing has a stated reason to differ. A landing may choose its own Google Font instead when its category/design calls for a different voice (e.g. `chocolate-factory` uses **Poppins** for a rounder, more confectionery-shop feel) — this is the same kind of per-landing design choice as the typography scale (§8 "Typography scale is per-landing"), not a contract violation. Within a single landing there is still only **one** typeface family for body/heading text (a `--font-display` distinct from `--font-base` is allowed for deliberate display/heading contrast, but both must be intentional, named choices — never an accidental second font).

Every landing's `index.astro` loads its chosen typeface via `<link>` tags in `<head>`, the same mechanism regardless of which font is chosen (shown here for the default):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap"
  rel="stylesheet"
/>
```

Never via CSS `@import url(...)`. Never more than one font family loaded per landing. The font tokens `--font-base`/`--font-sans`/`--font-display`/`--font-mono` are declared in each landing's own `styles/tailwind.css` (see §5 "Mandatory block order") — whatever family a landing picks, it flows through these same token names, never a landing-invented token name.

`<html>` and `<body>` in `index.astro` apply the font and color-scheme entirely through Tailwind utilities — never through a native CSS rule:

```html
<html lang="en" class="scroll-smooth overflow-x-clip scheme-light motion-reduce:scroll-auto dark:scheme-dark font-sans">
  ...
  <body class="min-h-full overflow-x-clip bg-background text-base leading-relaxed text-foreground antialiased font-sans">
```

`scheme-light`/`dark:scheme-dark` replace a native `color-scheme` declaration; `font-sans` (resolving to `--font-base` via the `--font-sans` remap in `@theme`) replaces a native `font-family` declaration. A landing that instead declares `color-scheme` or `font-family` inside `:root`/`html, body {}` in its `tailwind.css` is duplicating what the markup already does correctly — remove the CSS rule, don't add a second mechanism.

## 12. Images

Finished landings use real Unsplash photographs when the design requires photography. The `unsplash-images` Skill owns the complete lifecycle — search, selection, tracking, attribution, metadata, and production hotlinking.

Read and follow that Skill before selecting any image. Do not replicate its rules here.

Key integration points:

- Persist metadata inside the landing's own `data/` (isolation)
- Render hotlinked `images.unsplash.com` URLs with explicit `width`/`height`
- Apply monochrome treatment via Tailwind (`grayscale`, contrast)
- Visible, keyboard-reachable photographer + Unsplash credit
- Photos within a landing must read as one coherent editorial choice

`bg-placeholder` is legitimate only for stated technical reasons (loading state, photo not yet decided). Never as the default for "a landing needs an image."

## 13. Icons

All landings use exclusively `@lucide/astro`. Import only icons actually used.

Never: manual SVG, emojis as icons, Font Awesome, or other libraries.

Icons stay monochrome (`currentColor`). Decorative icons get `aria-hidden="true"`. Interactive icons get their accessible name from the containing control.

## 14. Strict typing

All code must be correctly typed: functions, props, events, data, arrays, collections, callbacks, configs, GSAP, Swiper.

- No `any` to hide errors
- No unresolved TypeScript/Astro warnings
- No `@ts-ignore` as routine practice
- Every `.map`/`.filter`/`.find`/`.forEach`/`.reduce`/`.sort` callback must declare an explicit parameter type
- Reuse `src/types/` for shared shapes

## 15. Privacy and fictional data

All landings are design demonstrations. Prohibited: inventing data that could coincidentally match real entities — phone numbers, plausible emails, complete addresses, social profiles, coordinates, tax IDs, full personal names, or corporate registration data.

Use clearly fictional placeholders: `email@example.com`, `+00 000 000 000`, `Example Address`, `City, Country`.

Do not generate JSON-LD or structured data (`Organization`, `LocalBusiness`, `Person`, etc.) for fictional brands. Only add such data for real entities explicitly provided by the user.

## 16. Semantics and accessibility

Every landing must correctly implement: HTML5 semantics, landmarks, headings, links, buttons, forms, keyboard navigation, focus management, screen readers, ARIA (only when necessary), `prefers-reduced-motion`, contrast, and touch targets (≥44px).

Semantic HTML stays independent of appearance. A link remains `<a>` and an action remains `<button>`, even when they share the same visual style.

## 17. Components

Create Astro components only when there is real reuse of structure, behavior, content, or semantic responsibility. Never create components solely to encapsulate Tailwind classes.

When two elements share only appearance, reuse styles via Tailwind — not a component abstraction.

## 18. GSAP and Swiper

**GSAP** is allowed for advanced animations: ScrollTrigger, parallax, timelines, scroll-aware navigation, sticky storytelling, transitions. Use only when it adds real value. CSS/Tailwind remains the first choice for simple animations.

Requirements: isolated inside the landing, `gsap.matchMedia()` for responsive/reduced-motion, cleanup of timelines/triggers/listeners, prefer `transform`/`opacity`, preserve content without JS.

**Swiper Core** is used for genuine sliders: products, reviews, testimonials, galleries, collections. No autoplay by default. Requirements: responsive via Swiper's `breakpoints`, accessible prev/next controls with `@lucide/astro` icons, monochrome pagination styled via tokens, correct resize behavior in the platform preview, isolated JS.

## 19. README

Every landing must contain an up-to-date `README.md` documenting: purpose, structure, sections, components, data, scripts, styles, assets, dependencies (Tailwind, GSAP, Swiper), Light/Dark, Unsplash usage, and any technical exceptions.

A task is not done if the README is missing or outdated.

## 20. Validation

Before considering a landing finished:

```bash
npx astro check
npx tsc --noEmit
npx prettier --check .
npm run build
```

Additionally verify:

- [ ] Language: 100% English
- [ ] Naming: consistent with conventions
- [ ] Folder structure: no empty folders, no renamed base folders
- [ ] Isolation: no cross-landing imports
- [ ] Tailwind: no `@layer components`, no class-string files, no arbitrary colors
- [ ] Arbitrary values: no hardcoded Design System values in markup
- [ ] Design System: complete local contract present in `styles/tailwind.css`, in the exact block order from §5 (`@import "tailwindcss"` → header comment → `@custom-variant dark` → `:root` → `[data-theme="dark"]` → `@theme inline` → `@theme` → `@utility reveal`); no import of any shared or external CSS file; token names and values match the gallery contract
- [ ] Typography mechanism: `@theme` remaps `--font-sans: var(--font-base)`; `--font-base`/`--font-sans`/`--font-display`/`--font-mono` all present; `<html>`/`<body>` use `scheme-light`/`dark:scheme-dark` + `font-sans` utilities; `:root`/`[data-theme="dark"]` contain no `color-scheme` or `font-family`, and there is no native `html, body { ... }` rule duplicating them; font loaded only via `<link>` in `index.astro`, never via CSS `@import url(...)`
- [ ] Canonical breakpoints: `--breakpoint-footer/cards/nav/stats/display` match the exact values in §8 "Canonical values" byte-for-byte — no landing-tuned variants
- [ ] Typography scale: `--text-headline-1/2/3`/`--text-figure` are present with the right token names, sized intentionally for this landing's category/content/composition (§8 "Typography scale is per-landing") — not copy-pasted from another landing, not an arbitrary one-off size in markup
- [ ] Monochrome: no chromatic colors outside opt-in palettes
- [ ] Light/Dark: both themes render correctly; the landing has its own visible toggle button in `Header.astro` (not just a `postMessage` listener) that persists to `localStorage` and restores synchronously before first paint
- [ ] Typography: a single intentional typeface (Wix Madefor Text by default, or another Google Font the landing has deliberately chosen), loaded only via `<link>`, never `@import`
- [ ] Heading containers: every `max-w-heading` sits on the same element as `text-headline-*`, never on a wrapper `<div>`
- [ ] Brand identity: the landing's displayed name (Header, Footer, `<title>`, metadata JSON `name`/`title`) is the Title Case form of its slug, not an invented fictional brand — and it's a text-only wordmark, no icon/badge/mark next to it
- [ ] Images: real Unsplash photos with attribution below the photo (never overlaid on top of it) plus a page-level "Photo credits" list under the footer — see the `unsplash-images` Skill §9
- [ ] Icons: `@lucide/astro` only, correct accessibility
- [ ] Typing: clean `tsc`, no `any`, explicit callback types
- [ ] Privacy: no plausible fictional data
- [ ] Semantics/accessibility: landmarks, headings, keyboard, focus, contrast, touch targets
- [ ] Responsive: Mobile, Tablet, Laptop, Desktop — no overflow, no breakage
- [ ] Sticky columns: applied to every short-header/long-content pattern at `lg:`
- [ ] Console: no errors or warnings
- [ ] README: present and current
- [ ] Back to top: floating button present, hidden until the scroll threshold, real `<button>`, accessible, `prefers-reduced-motion`-aware (see "Back to top button")

---

## Borders and button system

Borders are not the default visual separator. Never use a border on badges, labels, or cards.

### Official button variants: `primary | secondary | ghost | tertiary`

No additional variants, aliases, or one-off styles.

| Variant     | Hierarchy | Border  | Light                        | Dark                         |
| ----------- | --------- | ------- | ---------------------------- | ---------------------------- |
| `primary`   | Highest   | Never   | Dark surface, light content  | Light surface, dark content  |
| `secondary` | Lower     | Never   | Grayscale surface            | Grayscale surface            |
| `ghost`     | Low       | Never   | Transparent/near-transparent | Transparent/near-transparent |
| `tertiary`  | Lightest  | Allowed | Monochrome border            | Monochrome border            |

Every button must implement: `default`, `hover`, `focus-visible`, `active`, and `disabled` states in both themes. Motion respects `prefers-reduced-motion`.

## Sticky columns pattern

When a section has a short column (heading, description, counter) beside a considerably longer column (list, steps, cards, testimonials), the short column must be `sticky` on desktop.

Always use `lg:` (1024px) — the platform's Desktop threshold. Never `xl:`. Pair the grid split and sticky on the same breakpoint. Never force sticky on Mobile/Tablet. Never apply when both columns have comparable height.

## Back to top button

Every landing must have a floating "back to top" control, shared behavior across the gallery:

- **Hidden by default**, appears only after the user has scrolled past a threshold (e.g. one viewport height, or a fixed px distance — pick what suits the landing's page length; don't invent a per-landing token for it, a plain constant in the landing's own script is fine).
- **Fixed position**, floating above content (a corner, typically bottom-right), never part of normal document flow, never overlapping the footer's own content when it's visible near the bottom of the page.
- **Fade/scale in and out** on the same `--ease-landing` curve the rest of the landing uses for motion — appearing and disappearing is a transition, not a hard `display` toggle, except as the `motion-reduce` fallback.
- **A real `<button>`**, not a link, since it doesn't navigate to a URL — scrolls the viewport via `scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })` (or `window.scrollTo` equivalent), respecting `prefers-reduced-motion`.
- **Accessible**: `aria-label="Back to top"` (or equivalent in the landing's content language), visible focus ring, reachable by keyboard, and — since it appears/disappears — either `inert`/`aria-hidden` while hidden or simply removed from the tab order via the same visibility mechanism (don't leave a focusable-but-invisible button in the tab order).
- **Monochrome**, styled with the landing's own token system like every other control — an icon button (e.g. an up-chevron/arrow from `@lucide/astro`) using the `secondary`/`tertiary`/`ghost` button treatment from "Borders and button system", never a new one-off style.
- Implemented as its own small script (e.g. `scripts/backToTop.ts`) using a scroll listener (`passive: true`) toggling a class or `data-*` state — consistent with how this landing already handles other scroll-driven behavior (reveal, nav indicator), not a separate ad-hoc pattern.

## Astro-first

Prioritize native Astro capabilities. No island hydration unless a section genuinely needs client interactivity. No React/Vue/Svelte added for convenience. Ship zero JS when semantic HTML and Tailwind solve it.

## Cover image

When a landing has `src/landings/[slug]/assets/cover.png`: copy to `public/landings/[slug]/cover.png`, point `thumbnail`/`previewImage` in the metadata JSON and `og:image` at that path. Without a curated cover, source the thumbnail via the `unsplash-images` Skill.

## Optional per-landing color palettes

The one documented exception to the monochrome rule. Add only when explicitly requested. Grayscale remains the default every visitor sees first.

### 5-token contract

```css
--color-primary
--color-secondary
--color-tertiary
--color-accent
--color-light
```

Never rename, add, or remove these 5 tokens. They are a separate namespace from the Design System tokens.

### Structure

In the landing's `styles/tailwind.css` (as a documented native-CSS exception):

```css
:root,
html[data-palette="grayscale"] {
  --color-primary: #171717;
  --color-secondary: #404040;
  --color-tertiary: #737373;
  --color-accent: #a3a3a3;
  --color-light: #f5f5f5;
}

html[data-palette="cocoa"] {
  --color-primary: #6f1d1b;
  /* ... */
}
```

Every palette must have a `[data-theme="dark"]` variant (swap `primary`↔`light`, `secondary`↔`accent`, `tertiary` stays). A palette without a Dark variant is incomplete.

### Metadata

Declare in `src/content/landings/[slug].json` under `palettes`. Values must exactly match the CSS. Landings without palettes keep `palettes: []`.

### Mechanism

Mirrors the Light/Dark bridge: `PaletteOptions` dispatches `preview:palette` → `PreviewShell` relays via `postMessage` → landing's `scripts/palette.ts` toggles `data-palette` on its own `document.documentElement` only. Persisted to `localStorage` with synchronous restore in `<head>`. Reference implementation: `chocolate-factory`.

## Category guidance

| Category          | UX priorities                                                            |
| ----------------- | ------------------------------------------------------------------------ |
| E-commerce        | Product clarity, trust, price/CTA prominence, fast purchase path         |
| Portfolio         | Visual craft, case studies, restrained chrome, clear contact             |
| SaaS              | Value prop first screen, feature clarity, social proof, low-friction CTA |
| Blog/Editorial    | Readability, typography hierarchy, content density, minimal chrome       |
| Business/Services | Trust, credibility, clear service description, easy contact              |

## Before touching code

1. Identify which landing is affected
2. Read its metadata JSON and README
3. Read existing components, sections, and styles
4. Identify current tokens and breakpoints
5. Note existing animations/interactions
6. Determine what must not change

## Design quality

Do not default to Hero → three cards → logos → testimonials → pricing → CTA. Each landing should have distinct composition, rhythm, and hierarchy suited to its category. Personality comes from structure and composition, not color.
