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
- The shared Design System file (`src/styles/landing-design-system.css`) — the one allowed platform-level dependency
- Platform types from `src/types/` when genuinely shared

A landing never depends on:
- Another landing's folder, for any reason
- Platform catalog pages (`src/pages/`)
- Platform components (`src/components/platform/`)
- Platform styles (`src/styles/global.css`)

## 5. Tailwind CSS

All landings use the latest stable Tailwind CSS defined by the project. Tailwind is the primary tool for: layout, spacing, typography, sizing, grids, flexbox, responsive, states, transforms, transitions, animation styling, Light/Dark, surfaces, and contrast.

Native CSS is allowed only when Tailwind cannot correctly express a specific technical need — never for convenience. When used, keep it minimal, landing-local, with a comment explaining the limitation, and document it in the README.

### Integration

Use Tailwind v4 CSS-first architecture: `@tailwindcss/vite` under `vite.plugins` in `astro.config.mjs`. Each landing's `styles/tailwind.css` starts with:

```css
@import "tailwindcss";
@import "../../../styles/landing-design-system.css";
```

Do not introduce legacy `@astrojs/tailwind`, `tailwind.config.js`, PostCSS/autoprefixer, or v3 directives.

### Styling rules

- Utilities directly in Astro `class` attributes as the primary approach
- Design tokens → `@theme` (declared in the shared Design System, not per-landing)
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

Use tokens, the Tailwind scale, official breakpoints, `@theme`, and existing utilities. If a genuinely new reusable value is needed, incorporate it into the shared Design System — never hardcode it in markup.

Do not declare landing-local `--radius-*` or `--shadow-*` tokens. Tailwind's built-in scales (`rounded-*`, `shadow-*`) are the shared ingredient set. A landing gets its look by picking different steps from these scales directly in markup.

## 7. Responsive

Always mobile-first. Use `sm:`, `md:`, `lg:`, `xl:`, `2xl:` as the primary system. Do not improvise breakpoints with `min-[...]:` or `max-[...]:` when Tailwind's native system suffices.

Use Container Queries (`@container`) when layout depends on the component's available space rather than the viewport.

Mobile, Tablet, Laptop, and Desktop have equal importance. Design from Mobile upward — unprefixed utilities are the Mobile state.

Custom breakpoints, when genuinely needed, go in `@theme` via `--breakpoint-*` in `rem`. The shared Design System already provides: `--breakpoint-footer`, `--breakpoint-cards`, `--breakpoint-nav`, `--breakpoint-stats`, `--breakpoint-display`.

## 8. Design System

All landings import and use the shared Design System at `src/styles/landing-design-system.css`. This file is the single source of truth — no landing modifies, extends, removes, or renames any token declared in it.

What the Design System provides (identical across every landing):
- Semantic color palette (`:root` and `[data-theme="dark"]`)
- `@theme inline` mapping (generates `bg-background`, `text-foreground`, `bg-surface`, etc.)
- `@custom-variant dark`
- Font family (`--font-sans`, `--font-display`, `--font-mono`)
- Fluid heading scale (`--text-headline-1/2/3`, `--text-figure`)
- Structural tokens (`--spacing-section`, `--container-landing`, `--container-copy`, etc.)
- Named breakpoints (`--breakpoint-footer/cards/nav/stats/display`)
- Easing (`--ease-landing`)
- `reveal` scroll utility

**A landing cannot modify the Design System to achieve its own personality.** Personality comes from: composition, layouts, grids, relative sizes, spacing, rhythm, hierarchy, sections, photography, animations, sticky, Swiper, GSAP. Same ingredients, different designs.

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

Each landing must contain its own functional Light/Dark selector, independent of the platform's preview toolbar. The landing listens for `postMessage({ type: 'preview:theme', theme })` and toggles `data-theme` on its own `document.documentElement` only — never `window.top`.

Both themes stay strictly monochrome. Dark is not just an inverted Light — design it with its own intention.

## 11. Typography

All landings use exclusively **Wix Madefor Text** (weights 400–800 + italic). No other font families.

Every landing's `index.astro` loads it via these `<link>` tags in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap"
  rel="stylesheet"
/>
```

Never via CSS `@import url(...)`. Never a second font family. The font tokens `--font-sans`/`--font-display` are declared in the shared Design System.

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
- [ ] Design System: imports `landing-design-system.css`, no local overrides of shared tokens
- [ ] Monochrome: no chromatic colors outside opt-in palettes
- [ ] Light/Dark: both themes render correctly, own selector functional
- [ ] Typography: Wix Madefor Text only, loaded via `<link>`
- [ ] Images: real Unsplash photos with attribution (or justified placeholder)
- [ ] Icons: `@lucide/astro` only, correct accessibility
- [ ] Typing: clean `tsc`, no `any`, explicit callback types
- [ ] Privacy: no plausible fictional data
- [ ] Semantics/accessibility: landmarks, headings, keyboard, focus, contrast, touch targets
- [ ] Responsive: Mobile, Tablet, Laptop, Desktop — no overflow, no breakage
- [ ] Sticky columns: applied to every short-header/long-content pattern at `lg:`
- [ ] Console: no errors or warnings
- [ ] README: present and current

---

## Borders and button system

Borders are not the default visual separator. Never use a border on badges, labels, or cards.

### Official button variants: `primary | secondary | ghost | tertiary`

No additional variants, aliases, or one-off styles.

| Variant | Hierarchy | Border | Light | Dark |
|-----------|-----------|--------|-------------------------------|-------------------------------|
| `primary` | Highest | Never | Dark surface, light content | Light surface, dark content |
| `secondary` | Lower | Never | Grayscale surface | Grayscale surface |
| `ghost` | Low | Never | Transparent/near-transparent | Transparent/near-transparent |
| `tertiary` | Lightest | Allowed | Monochrome border | Monochrome border |

Every button must implement: `default`, `hover`, `focus-visible`, `active`, and `disabled` states in both themes. Motion respects `prefers-reduced-motion`.

## Sticky columns pattern

When a section has a short column (heading, description, counter) beside a considerably longer column (list, steps, cards, testimonials), the short column must be `sticky` on desktop.

Always use `lg:` (1024px) — the platform's Desktop threshold. Never `xl:`. Pair the grid split and sticky on the same breakpoint. Never force sticky on Mobile/Tablet. Never apply when both columns have comparable height.

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

| Category | UX priorities |
|---|---|
| E-commerce | Product clarity, trust, price/CTA prominence, fast purchase path |
| Portfolio | Visual craft, case studies, restrained chrome, clear contact |
| SaaS | Value prop first screen, feature clarity, social proof, low-friction CTA |
| Blog/Editorial | Readability, typography hierarchy, content density, minimal chrome |
| Business/Services | Trust, credibility, clear service description, easy contact |

## Before touching code

1. Identify which landing is affected
2. Read its metadata JSON and README
3. Read existing components, sections, and styles
4. Identify current tokens and breakpoints
5. Note existing animations/interactions
6. Determine what must not change

## Design quality

Do not default to Hero → three cards → logos → testimonials → pricing → CTA. Each landing should have distinct composition, rhythm, and hierarchy suited to its category. Personality comes from structure and composition, not color.
