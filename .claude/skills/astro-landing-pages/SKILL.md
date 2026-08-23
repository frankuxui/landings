---
name: astro-landing-pages
description: Design, build, modify, and audit Astro landing pages inside this project's multi-landing gallery platform. Use whenever a task touches a specific landing — Hero, Header/Navbar, Testimonials, CTA, About, Contact, FAQ, Pricing, responsive fixes, dark mode, animations, accessibility, performance, SEO, or a full landing audit. Covers the 5 initial categories (E-commerce, Portfolio, SaaS/Producto digital, Blog/Editorial, Negocios/Servicios).
---

# Astro Landing Pages

Specialized knowledge for working on individual landing pages inside this repo's landing-page gallery platform (see [AGENTS.md](../../../AGENTS.md) for the platform architecture). This platform hosts many independent landings side by side — never assume there is only one.

## Design tokens: same names everywhere, independent values per landing — mandatory, no shared file

> Las landings son totalmente independientes entre sí, por lo tanto, no podrán tener conexiones entre ellas ni compartir componentes, estilos o datos. No se utilizará el fichero `landing-design-system.css` ni se compartirá entre landings. Cada landing tendrá su propia estructura de carpetas, estilos, datos, variables, scripts, secciones, funciones y componentes.
>
> Todas las landings sí tendrán las mismas variables CSS y el mismo tema dark por defecto — esto permite maquetar más rápido reutilizando los mismos nombres, aunque sus valores sean diferentes en cada landing.

**There is no shared design-system file.** `src/styles/landing-design-system.css` does not exist and must never be reintroduced — no landing imports a platform-level token file, another landing's token file, or any file outside its own folder for colors, typography scale, breakpoints, spacing, easing, or the `reveal` utility. This was previously the one documented exception to landing isolation; it no longer is. Isolation is now absolute — see "Ground rule: isolation" below, which has no exception left.

Every landing declares its **entire** token set locally, inside its own `src/landings/[slug]/styles/tailwind.css`: `:root` (Light values), `[data-theme="dark"]` (Dark values), the matching `@theme inline` color-utility mapping, `@custom-variant dark`, the fluid heading scale, `--font-sans`/`--font-display`/`--font-mono`, any shared-named breakpoints/spacing/container tokens it uses, `--ease-landing`, and the `reveal` `@utility` — copied structurally from another landing (or from this Skill's reference block below) and then owned entirely by that landing from that point on. Nothing here is `@import`ed from anywhere outside the landing's own folder.

### What stays constant: the name contract

Every landing that needs a given role uses the **exact same token name** for it — this is what lets you move between landings and immediately know `bg-surface`, `text-muted`, `bg-primary` without relearning each landing's vocabulary. Reuse these names verbatim, never invent a landing-branded synonym (no `--coffee-background`, no `--chocolate-surface`, no `--ease-onix`):

- Color roles: `--background`, `--background-alt`, `--foreground`, `--muted`, `--border`, `--surface`, `--surface-strong`, `--control`, `--control-hover`, `--ring`, `--primary`, `--primary-foreground`, `--emphasis`, `--disabled`, `--disabled-foreground`, `--inverted`, `--inverted-foreground`, `--inverted-surface`, `--placeholder`, `--placeholder-foreground`, `--placeholder-inverse`, exposed via the matching `@theme inline` mapping (`bg-background`, `text-foreground`, `bg-surface`, `bg-primary`, `bg-placeholder`, etc.).
- `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));` — the same Light/Dark mechanism, declared independently in every landing.
- Typography scale: `--text-headline-1`, `--text-headline-2`, `--text-headline-3`, `--text-figure`, plus `--font-sans`/`--font-display` (Wix Madefor Text — see "Shared typography" below) and `--font-mono`.
- Reusable named breakpoints beyond Tailwind's native `sm`/`md`/`lg`/`xl`/`2xl`, when a landing needs one: `--breakpoint-footer`, `--breakpoint-cards`, `--breakpoint-nav`, `--breakpoint-stats`, `--breakpoint-display`.
- `--spacing-section`, `--spacing-container-x`, `--container-landing`, `--container-copy`, `--container-heading`, `--container-hero-heading`.
- `--ease-landing` — the shared name for each landing's own signature motion curve.
- The `reveal` `@utility` (scroll-reveal progressive enhancement), declared locally, built on that landing's own `--ease-landing`.

### What's independent now: the values

Each landing chooses its own values for every token above, declared only in its own `tailwind.css`. In practice, most landings will still pick equivalent grayscale shades and the same structural numbers by convention — but that is now each landing's own choice, not an enforced import. A landing's values are never "wrong" for differing from another landing's; they are only wrong if they break the monochrome rule (below) or invent a new token name instead of reusing one of the names above.

**Never**, regardless of independent values: introduce a chromatic color into any of these tokens outside the opt-in palette system (see "Optional per-landing color palettes" below), rename a token from the list above, or leave a role from that list undeclared when the landing's markup uses its utility.

### Reference block — copy and then own it

Every new landing starts from a copy of this structure in its own `styles/tailwind.css` (values below are a reasonable grayscale starting point — a landing may use different shades, this is a template, not a shared source of truth):

```css
@import "tailwindcss";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  --background: var(--color-neutral-50);
  --background-alt: var(--color-neutral-100);
  --foreground: var(--color-neutral-900);
  --muted: var(--color-neutral-600);
  --border: var(--color-neutral-500);

  --surface: var(--color-white);
  --surface-strong: var(--color-neutral-100);
  --control: var(--color-neutral-200);
  --control-hover: var(--color-neutral-300);
  --ring: var(--color-neutral-900);

  --primary: var(--color-neutral-900);
  --primary-foreground: var(--color-white);
  --emphasis: var(--color-black);

  --disabled: var(--color-neutral-300);
  --disabled-foreground: var(--color-neutral-500);

  --inverted: var(--color-neutral-950);
  --inverted-foreground: var(--color-white);
  --inverted-surface: var(--color-neutral-900);

  --placeholder: var(--color-neutral-900);
  --placeholder-foreground: var(--color-white);
  --placeholder-inverse: rgb(255 255 255 / 0.72);
}

[data-theme="dark"] {
  --background: var(--color-neutral-950);
  --background-alt: var(--color-neutral-900);
  --foreground: var(--color-neutral-100);
  --muted: var(--color-neutral-300);
  --border: var(--color-neutral-500);

  --surface: var(--color-neutral-900);
  --surface-strong: var(--color-neutral-800);
  --control: var(--color-neutral-800);
  --control-hover: var(--color-neutral-700);
  --ring: var(--color-neutral-300);

  --primary: var(--color-neutral-100);
  --primary-foreground: var(--color-neutral-950);
  --emphasis: var(--color-white);

  --disabled: var(--color-neutral-700);
  --disabled-foreground: var(--color-neutral-400);

  --inverted: var(--color-neutral-100);
  --inverted-foreground: var(--color-neutral-950);
  --inverted-surface: var(--color-neutral-200);

  --placeholder: var(--color-neutral-300);
  --placeholder-foreground: var(--color-neutral-900);
  --placeholder-inverse: rgb(10 10 10 / 0.65);
}

@theme inline {
  --color-background: var(--background);
  --color-background-alt: var(--background-alt);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);

  --color-surface: var(--surface);
  --color-surface-strong: var(--surface-strong);
  --color-control: var(--control);
  --color-control-hover: var(--control-hover);
  --color-ring: var(--ring);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-emphasis: var(--emphasis);

  --color-disabled: var(--disabled);
  --color-disabled-foreground: var(--disabled-foreground);

  --color-inverted: var(--inverted);
  --color-inverted-foreground: var(--inverted-foreground);
  --color-inverted-surface: var(--inverted-surface);

  --color-placeholder: var(--placeholder);
  --color-placeholder-foreground: var(--placeholder-foreground);
  --color-placeholder-inverse: var(--placeholder-inverse);
}

@theme {
  --font-sans: "Wix Madefor Text", sans-serif;
  --font-display: "Wix Madefor Text", sans-serif;
  --font-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  --breakpoint-footer: 45rem;
  --breakpoint-cards: 47.5rem;
  --breakpoint-nav: 56.25rem;
  --breakpoint-stats: 67.5rem;
  --breakpoint-display: 87.5rem;

  --spacing-section: 7rem;
  --spacing-container-x: 1.5rem;

  --container-landing: 100rem;
  --container-copy: 66ch;
  --container-heading: 28ch;
  --container-hero-heading: 18ch;

  --ease-landing: cubic-bezier(0.22, 1, 0.36, 1);

  --text-headline-1: clamp(3rem, 1.9rem + 4.68vw, 6rem);
  --text-headline-2: clamp(1.875rem, 1.19rem + 2.93vw, 3.75rem);
  --text-headline-3: clamp(1.25rem, 1.02rem + 0.98vw, 1.875rem);
  --text-figure: clamp(2.5rem, 1.6rem + 3.9vw, 4.5rem);
}

@utility reveal {
  transform: translateY(0);
  opacity: 1;

  .js-reveal-ready & {
    transform: translateY(calc(var(--spacing) * 6));
    opacity: 0;
    transition-property: opacity, transform;
    transition-duration: 700ms;
    transition-timing-function: var(--ease-landing);
  }

  .js-reveal-ready &.is-visible {
    transform: translateY(0);
    opacity: 1;
  }

  @variant motion-reduce {
    transform: translateY(0) !important;
    opacity: 1 !important;
    transition-property: none !important;
  }
}

/* Only genuinely landing-local exceptions go below this line (e.g. Swiper
   pagination theming, a scrollbar-hiding rule for a horizontal rail). */
```

### No custom radius/shadow tokens — use Tailwind's own default scale

Do not declare landing-local `--radius-*` tokens (no `--radius-button`, `--radius-field`, `--radius-card`, `--radius-block`, or equivalents) or a landing-local `--shadow-*` token for a single-use value. Tailwind v4 already ships a complete radius scale (`rounded-none/xs/sm/md/lg/xl/2xl/3xl/full`) and shadow scale (`shadow-xs/sm/md/lg/xl/2xl`) — these are the shared "ingredients" every landing reuses. A landing gets its own pill-shaped buttons, sharp "mold" corners, or soft rounded cards by picking a **different step from this same built-in scale** directly in markup (`rounded-full` for a pill button in one landing, `rounded-xs` for a sharp industrial one in another) — never by inventing a same-named-different-value custom token. A single-use shadow (e.g. a hairline header separator) is a one-off value applied as an arbitrary Tailwind utility directly in the element's `class` (`shadow-[0_1px_0_0_rgb(0_0_0/0.08)]`), per the existing one-off-styling rule below — it does not belong in `@theme` at all.

### What SÍ can — and must — change between landings

Landings must still look strikingly different from one another. Composition, Hero structure, disposición, grids, number of columns, section order, spacing between blocks, section widths, Full Width vs. contained, sticky sections, cards, articles, Swipers (including their own pagination-bullet size/opacity/shape — that's component composition, not a shared token), placeholders, navigation, visual hierarchy, negative space, rhythm, asymmetry, GSAP/parallax/ScrollTrigger logic, typographic layout, content, and storytelling are all fully open per landing. One landing can be editorial/artisanal, another industrial/modular, another technical/Full-Width — as long as all of them reuse the same token **names**.

Reusing the same token names and Tailwind rules does **not** mean copying Hero, Cards, Navbar, Footer, layouts, sections, or animations between landings — and it does not mean literally sharing a file. It means precisely the opposite:

**Same names, independent values, independent everything else.**

### Auditing token drift — mandatory whenever a landing is created, modified, or audited

Compare the landing's own `styles/tailwind.css` against the name contract above and against its own past state — never against another landing's file or compiled output:

1. the landing's `tailwind.css` does not `@import` `landing-design-system.css`, another landing's `tailwind.css`, or any file outside its own folder — zero cross-landing or shared-file dependency of any kind;
2. it declares its own complete `:root`, `[data-theme="dark"]`, `@theme inline`, and `@custom-variant dark` — nothing is missing because "it's supposed to come from the shared file" (there is no shared file);
3. every token it declares uses one of the shared **names** from "What stays constant" above — no landing-branded synonym, no renamed role;
4. no landing-local `--radius-*`/`--shadow-*` custom token exists — check for Tailwind's own default radius/shadow utilities used directly instead;
5. every color token stays strictly monochrome (see the rule below) — values may legitimately differ from another landing's, but never introduce a hue outside the opt-in palette system;
6. any content the landing's `tailwind.css` contains beyond the token block is genuinely landing-local (e.g. Swiper pagination-bullet composition, a scrollbar-hiding rule for a landing-specific horizontal rail);
7. the landing's `<head>` loads Wix Madefor Text via the shared `<link>` block (see "Shared typography" below) and nothing else — no second font family, no CSS `@import` font load, no bundled webfont;
8. run `npm run build` and confirm this landing's compiled CSS bundle has zero references to another landing's folder or to a platform-level stylesheet.

### Shared typography — one typeface, no exceptions

> Todas las landings deben utilizar exclusivamente Wix Madefor Text como tipografía principal. Misma tipografía y sistema tipográfico para todas las landings; únicamente cambia el diseño.

Every landing uses **[Wix Madefor Text](https://fonts.google.com/specimen/Wix+Madefor+Text)** ([license](https://fonts.google.com/specimen/Wix+Madefor+Text/license)) as its one and only reading typeface — no landing may introduce a different font family, Google or otherwise, to differentiate its design. Personality between landings comes from size, weight (400–800), italic, tracking, line-height, composition, hierarchy, and spacing applied to this same typeface — never from swapping the typeface itself. This is a repeated **convention** every landing implements independently (its own `<link>` tags, its own `--font-sans`/`--font-display` declaration) — not a shared file dependency, so it does not conflict with landing isolation.

**Loading:** every landing's own `index.astro` loads the exact same Google Fonts `<link>` tags in its `<head>`, with variable-weight (400–800) and italic support:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap"
  rel="stylesheet"
/>
```

Load it via `<link>` in `<head>` only — never duplicate the load with a CSS `@import url(...)` in the landing's `tailwind.css` or anywhere else. Since each landing is rendered as its own isolated `<html>` document (see the platform architecture), each one's `<head>` legitimately carries this same `<link>` block; that is not a duplicate load in the sense to avoid — the sense to avoid is a _second, different_ font request inside the same document (a stray `@import`, a second Google Fonts family, a bundled `@font-face`) stacked on top of the `<link>` tags.

**Tailwind tokens:** the font family is declared independently, identically, in each landing's own `tailwind.css`:

```css
@theme {
  --font-sans: "Wix Madefor Text", sans-serif;
  --font-display: "Wix Madefor Text", sans-serif;
}
```

A landing uses the resulting `font-sans` utility (Tailwind's default body/UI text utility) directly — never declares a landing-branded font token. The `--font-mono` accent (for numbering/technical labels) is available under that same shared name in every landing that wants it — declared locally, per landing.

**Audit whenever a landing is created, modified, or audited:** grep the landing for `fonts.googleapis.com`/`@import url` — there must be exactly one `<link>`-based load of Wix Madefor Text in `<head>` and zero CSS `@import` font loads; grep for any other font-family declaration (`font-family:`, a second `@theme` font token, a bundled webfont file) and remove it; confirm `<html>`/`<body>` (or the equivalent root element) actually applies `font-sans` so the typeface is in effect.

## Visual rule: monochrome only — the default for every landing, with one documented opt-in exception

> Las Landing Pages de este proyecto son deliberadamente monocromáticas. Solo se permiten blanco, negro y escala de grises. El objetivo es mostrar ideas de diseño neutrales y descargables que posteriormente cada usuario pueda adaptar a su propia identidad visual.

Every landing in this project — current and future — is designed exclusively in **white, black, and grayscale** (including transparencies derived from those tones) as its default, unmodified state. This is not a stylistic default a landing casually overrides; it's a hard constraint of the platform. The **one** documented exception is the opt-in color-palette system described in "Optional per-landing color palettes" below: a landing may additionally define chromatic palettes a visitor explicitly selects from the platform's palette selector — grayscale still remains the mandatory default every visitor sees first, and every rule in this section still governs everything **outside** that one opt-in system (no landing hardcodes a chromatic color anywhere else, no landing uses color to distinguish anything by default).

**Never**, in any landing:

- brand colors, chromatic accents, or color gradients
- any hue — no greens, blues, reds, yellows, browns, etc.
- color used to distinguish a CTA, an icon, a state, or a section from the rest

**Why:** this platform is a gallery of design _ideas_ — composition, structure, and patterns — not finished brand identities. A user browses it to get inspired and download code, then applies their own colors and branding afterward. Spending effort on a bespoke color palette per landing works against that goal and produces something a downloader has to undo before making it their own.

**Where personality comes from instead:** composition, typography, hierarchy, spacing, grids, proportions, images/placeholders, surface contrast, restrained shadows, visual rhythm, layout variety, interactivity, animation, and transitions. A monochrome landing should still feel distinctive and full of character — achieve that through these levers, not through color. Borders are never the default separation device; the component restrictions below are binding.

**Components** (this applies to all of them, without exception): buttons, links, icons, forms, inputs, badges, cards, navigation, hover/active/focus states, tabs, accordions, modals, tooltips, decorative graphics, image placeholders, CTAs. Differentiate interactive states through contrast, surface, opacity, weight, underline, scale, motion, or other visual resources — never through color. A border is allowed on a button only when it is the official `tertiary` variant; badges, labels, and cards never use borders.

**Light/Dark, if a landing has the switcher:**

- Light works only with white, black, and grayscale.
- Dark works only with black, white, and grayscale — it must never introduce an additional color. Design Dark with its own intention (different surface/contrast balance than Light, not just an inverted Light — see the Light/Dark section below), but never a different hue.
- The switch is driven purely by contrast, surfaces, backgrounds, borders, text weight/tone, shadows, and gray levels.

**Accessibility still applies in full:** keep sufficient contrast between text and background, controls and background, focus states, important borders, and interactive elements. The absence of color must never make a state or action harder to understand — that's exactly what contrast, borders, weight, underline, scale, and motion are for.

**Icons:** `@lucide/astro` icons must also stay strictly monochrome — inherit the landing's grayscale tokens (typically via `currentColor` or an explicit gray-scale value), never a chromatic icon color.

## Visual rule: borders and official button system — mandatory, no exceptions

> Las Landing Pages no utilizan borders como recurso visual por defecto. Buttons, badges, labels y cards deben resolverse mediante contraste, superficies, jerarquía y composición. Solo la variante `tertiary` de botón puede utilizar border.

This applies automatically to every new landing and every future modification or audit of an existing landing.

### Global border prohibitions

Never use a border on:

- a button, unless that button is the official `tertiary` variant;
- a badge;
- a label, including form-adjacent, metadata, eyebrow, category, and equivalent label-like UI;
- a card of any kind, including product, testimonial, feature, statistic, process, content, pricing, and CTA cards or any visually equivalent container.

Do not use borders as the default way to separate components. Cards and equivalent grouped surfaces must establish separation through the most appropriate combination of background contrast, grayscale, spacing, composition, restrained shadow where genuinely useful, surface changes, and visual hierarchy. Never mechanically replace every removed border with a shadow.

### Official button variants

The complete and only global button vocabulary is:

`primary | secondary | ghost | tertiary`

Do not create additional variants, aliases, or one-off visual button styles unless a future global project rule explicitly defines them. Every button and button-like link must be intentionally assigned to one of these four variants, including navigation actions, hero CTAs, card actions, form submissions, pagination controls, and icon-only controls.

#### `primary`

- Highest visual hierarchy.
- Light: dark background with light content.
- Dark: light background with dark content.
- No border in any state.

#### `secondary`

- Lower hierarchy than `primary`, expressed with grayscale surface contrast.
- Light: a light-gray surface with adequate contrast.
- Dark: a suitable grayscale surface that remains distinct without competing with `primary`.
- No border in any state.

#### `ghost`

- Low hierarchy; transparent or nearly transparent background.
- No border in any state.
- Hover, focus, and active feedback comes from subtle surface, opacity, or contrast changes.

#### `tertiary`

- The only button variant allowed to use a visible border.
- Visually lighter than `primary` and `secondary`.
- Its border stays monochrome and sufficiently contrasted in Light and Dark.

### Required interactive states

Every official button variant must define and preserve perceptible `default`, `hover`, `focus-visible`, `active`, and `disabled` states in both themes. Use only white, black, grayscale, opacity, contrast, and subtle transformation or movement where appropriate.

- Prefer a high-contrast, offset `outline` for keyboard focus, or an equivalent non-border indicator. It must not become the component's resting border.
- Disabled controls must be visually and semantically disabled.
- State styling must not introduce a border on `primary`, `secondary`, or `ghost`.
- Motion must respect `prefers-reduced-motion` and must not be the sole state indicator.

### Badges, labels, and cards

Badges and labels use background, contrast, typography, font weight, spacing, radius, and grayscale—never border. Cards use composition and surface hierarchy—never border and not automatically a shadow.

### Audit requirement

Whenever a landing is created, modified, or audited, explicitly check:

1. every button or button-like link maps to exactly one official variant;
2. only `tertiary` buttons have a border;
3. badges and labels have no border;
4. cards and visually equivalent grouped surfaces have no border;
5. all five interactive states work in Light and Dark;
6. removing borders did not reduce hierarchy, accessibility, or responsive clarity.

## Ground rule: isolation — absolute, no exceptions

> Las landings son totalmente independientes entre sí, por lo tanto, no podrán tener conexiones entre ellas ni compartir componentes, estilos o datos. Cada landing tendrá su propia estructura de carpetas y contendrá todos los archivos necesarios para funcionar de forma autónoma. Ninguna landing puede depender de componentes, estilos, datos, variables, funciones o configuraciones pertenecientes a otra landing.

Every landing lives entirely inside `src/landings/[slug]/` and contains **everything** it needs to run on its own — no exception, nothing deferred to "the platform will provide it":

- components
- styles (its own `tailwind.css` — see "Design tokens" above)
- CSS variables/design tokens
- Tailwind configuration
- data
- functions/scripts
- assets
- `README.md` (see "`README.md` — mandatory for every landing" above)
- color palettes (its own grayscale default, plus any opt-in palettes — see "Optional per-landing color palettes" below)

— plus one metadata file at `src/content/landings/[slug].json`, outside the landing folder itself, which is platform catalog data (category, tags, thumbnail, status), not part of the landing's own runtime. Every item in the list above belongs to that landing **alone, with no exception**. This is what makes a future "download this landing" feature possible with zero untangling: a downloaded landing's folder must already be a fully self-contained island — build it, and nothing else, and it works.

**Never let a change to one landing touch, or a landing depend on:**

- another landing's folder, for any reason — not components, not scripts, not data, not styles, not types
- a shared platform-level design-token file — there is none; `src/styles/landing-design-system.css` does not exist and must never be reintroduced (see "Design tokens: same names everywhere, independent values per landing" above)
- the platform catalog (`src/pages/index.astro`, `src/pages/landings/**`)
- platform components (`src/components/platform/**`)
- `src/styles/global.css` or any platform CSS variable

If a problem seems to require touching something global or reaching into another landing, the fix almost always belongs inside the landing's own architecture instead — usually by copying the needed structure into that landing's own folder and then owning it independently. Global CSS is not a dumping ground for one landing's bug fix, and no landing is a dependency of another.

There used to be one documented exception here — a shared `landing-design-system.css` token file every landing imported. That exception is retired. Every landing now declares its full token set locally; only the token **names** are shared, as a convention, never a file.

## File naming: every file in English, always

> Todas las secciones de las landings deben estar nombradas en inglés, aunque el id sea en español; todos absolutamente todos los ficheros en inglés.

Every file inside a landing — `sections/*.astro`, `components/*.astro`, `data/*.ts`, `scripts/*.ts`, everything — is named in English, with no exception, regardless of what language the landing's content or copy is written in. `sections/Contact.astro`, `sections/Process.astro`, `sections/Stats.astro`, `sections/Testimonials.astro` — never `sections/Contacto.astro`, `sections/Proceso.astro`, `sections/Estadisticas.astro`, `sections/Testimonios.astro`. This applies to every current and future landing.

**IDs, `href` anchors, and visible copy stay in whatever language the landing's content is written in** — this rule is only about the physical filename and, for consistency, the matching imported component/variable name in the parent `index.astro` (e.g. `import Contact from "./sections/Contact.astro"` rendering a `<section id="contacto">`). Never rename an `id`/anchor to match the filename, and never translate visible content to satisfy this rule — a Spanish-content landing keeps `id="proceso"`/`href="#proceso"` in its nav data and markup exactly as authored; only the file on disk (and the import/tag identifier referencing it) is English.

When creating a new landing, name every file in English from the first draft — don't write Spanish-named files intending to rename them "later." When auditing an existing landing, grep its `sections/`, `components/`, `data/`, and `scripts/` folders for non-English filenames and rename them, updating every `import`/component-tag reference in `index.astro` (and any cross-file import) to match — verify with `astro check`/`tsc`/`build` afterward that nothing broke.

## `README.md` — mandatory for every landing

> Cada landing debe incluir su propio archivo `README.md`, documentando su estructura de carpetas, configuración específica, estilos utilizados, variables CSS disponibles, paletas de colores disponibles, componentes propios, y cualquier configuración necesaria para su correcto funcionamiento.

Every landing has its own `src/landings/[slug]/README.md` — not optional, not "add it later." A landing task (creation, modification, or audit) is not complete while its `README.md` is missing or out of date with what the task changed. It documents, at minimum:

1. **Folder structure** — the landing's own `components/`, `sections/`, `data/`, `scripts/`, `styles/`, `assets/` layout, with a one-line note on what belongs in each.
2. **Landing-specific configuration** — anything a contributor (or a future downloader) needs to know to run this landing on its own: dependencies beyond the project baseline (e.g. Swiper, GSAP), any native-CSS exception and why it exists, any non-obvious build/runtime requirement.
3. **Styles used** — the styling approach (Tailwind utility-first, `@theme`/`@utility` usage) and a pointer to `styles/tailwind.css` as the landing's own design-system entry.
4. **Available CSS variables** — the token names this landing declares in `:root`/`[data-theme="dark"]` (reusing the shared name contract from "Design tokens" above) and, briefly, what each role means.
5. **Available color palettes** — if the landing has the optional palette system (see "Optional per-landing color palettes" below): every palette id/name it defines and its 5 `--color-*` values. If it only has the grayscale default, say so explicitly rather than omitting the section.
6. **The landing's own components** — a short list of its `components/*.astro` with a one-line purpose each, distinct from `sections/*.astro` (page sections) if both exist.
7. **Anything else required for correct operation** — env vars, external services, known constraints.

Keep it landing-specific and self-contained: a `README.md` that just says "see the platform docs" fails the point of it — the whole reason it exists is so this landing's folder is independently understandable without reading anything outside it (see "Ground rule: isolation" below). When a task changes the folder structure, the token set, the palette list, or the component list, update `README.md` in the same task — don't leave it describing a previous state.

## Catalog cover image: `assets/cover.png`

Where a landing has a curated cover image at `src/landings/[slug]/assets/cover.png` (a real, monochrome, art-directed piece — a separate artifact from the in-landing content photography governed by "Images — real photography via the `unsplash-images` Skill" below), that image is the landing's thumbnail/preview artwork for the platform catalog:

1. Copy it to `public/landings/[slug]/cover.png` (the platform-servable location — same convention already used for `thumbnail.svg` before this rule existed).
2. Point `thumbnail` and `previewImage` in `src/content/landings/[slug].json` at `/landings/[slug]/cover.png`.
3. Point the landing's own `thumbnailUrl` (used for its `og:image` meta tag) at the same `/landings/[slug]/cover.png` path in `index.astro`.
4. Remove the now-superseded `public/landings/[slug]/thumbnail.svg` and any README mention of it.

If a landing has no curated `assets/cover.png`, its catalog `thumbnail` may instead be sourced through the `unsplash-images` Skill and persisted on the content-collection entry (`thumbnail`, `thumbnailAlt`, `thumbnailWidth`, `thumbnailHeight`, `thumbnailCredit` — see `src/types/unsplash.ts` and `src/content.config.ts`) exactly like any other Unsplash-sourced photo in the project; it is not required to be a hand-art-directed PNG. Never invent or hand-write a substitute thumbnail URL outside that Skill's flow.

## Before touching any code

1. Identify exactly which landing is affected (its slug / `src/landings/[slug]/`).
2. Read its metadata (`src/content/landings/[slug].json`) and its `README.md` — every landing has one (see "`README.md` — mandatory for every landing" above); if it's missing, that's a gap to fix as part of the task, not a step to skip.
3. Read its existing components/sections and styles before writing anything new.
4. Identify its design tokens (colors, spacing, radius, typography) — reuse them, don't invent parallel ones.
5. Check its breakpoints and how Light/Dark is currently scoped.
6. Note any existing animations/interactions.
7. Decide what must NOT change (approved sections, existing behavior outside the task's scope).

Don't restructure a whole landing when a localized fix solves the problem. If the task changes the landing's folder structure, tokens, palettes, or component list, update its `README.md` before considering the task done.

## Astro-first

Prioritize native Astro capabilities over client-side JavaScript or extra frameworks:

- Plain `.astro` components and HTML5 semantics first.
- No island hydration unless a section genuinely needs client interactivity — and then the smallest `client:*` directive that works, scoped to that one component.
- No React/Vue/Svelte/etc. added "for convenience" — only with a real technical justification, and only for that one landing.
- Ship zero JS when semantic HTML and Tailwind states/variants alone solve it (accordions via `<details>`, anchor-based tabs, `:target`, and utility-driven reveals where reasonable).
- Check the Astro documentation for the version installed in this project (`astro` in `package.json`) before relying on a recent API — don't assume behavior from memory.

## Styling system: Tailwind CSS — mandatory

> Todas las Landing Pages deben estilizarse utilizando la última versión estable de Tailwind CSS. El CSS nativo está prohibido como solución habitual y únicamente puede utilizarse como excepción técnica justificada cuando Tailwind no pueda resolver correctamente una necesidad concreta.

This rule applies to every current and future landing and to every creation, modification, refactor, and audit. It affects landing styling only; do not migrate the catalog, preview toolbar, platform components, or platform-global styles unless a separate task explicitly requests it.

### Version and Astro integration

- Keep `tailwindcss` and `@tailwindcss/vite` on the latest stable matching version. Before changing their configuration or upgrading them, verify the current stable version in the npm registry and read the official Tailwind and Astro documentation for that release.
- Use the current Tailwind v4 CSS-first architecture: the official `@tailwindcss/vite` plugin under `vite.plugins` in `astro.config.mjs`, plus `@import "tailwindcss";` in the landing styling entry.
- Do not introduce legacy `@astrojs/tailwind`, `tailwind.config.js`, PostCSS/autoprefixer setup, or v3 `@tailwind base/components/utilities` directives unless the installed stable version's official documentation explicitly requires them in the future.
- Keep the Tailwind entry and any landing-specific theme configuration isolated from platform styling. Use v4 theme variables/directives when a reusable design token is justified.
- The preview theme mechanism continues to set `data-theme` on the landing document. Theme styling is driven primarily by semantic CSS variable tokens that change value under `[data-theme="dark"]` (see "Design tokens: semantic variables — mandatory" below), not by pairing every utility with a `dark:` counterpart. Still define the Tailwind `dark` custom variant for that attribute in the landing entry — it remains available for the rare exception a semantic token can't express (e.g. a one-off shadow or border intensity) — but it is the exception, not the default mechanism.

### Utility-first implementation

Use Tailwind utilities as the normal and primary solution for layout, grid, flexbox, spacing, typography, responsive behavior, monochrome colors, permitted borders, radius, shadows, sizing, positioning, overflow, transforms, transitions, animations, and interactive states.

- Responsive behavior uses Tailwind breakpoint and container-query variants. Manual media queries are prohibited unless Tailwind has a documented technical limitation for the exact need.
- Use `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `aria-*:`, `group`, `peer`, `dark:`, and `motion-reduce:` variants where appropriate.
- Prefer named theme utilities and Tailwind's spacing/type scale. Use arbitrary values only when the composition genuinely needs a value that no suitable utility or token represents — **except colors, which are never arbitrary; see below.**
- Class names must remain statically detectable by Tailwind. Do not construct utility names dynamically from string fragments.
- Preserve the project's monochrome and border/button rules through Tailwind utilities; Tailwind does not relax either rule.

#### No arbitrary Tailwind color values — mandatory, no exceptions

> Está prohibido utilizar valores arbitrarios de Tailwind para colores. Los colores deben utilizar siempre las variables definidas en el sistema de estilos de la propia landing.

Never write a raw color literal directly in an arbitrary-value utility — no hex, no `rgb()`/`rgba()`, no `oklch()`, no named CSS color, anywhere in a landing's markup:

```html
<!-- Prohibited -->
<div class="bg-[#333333]"></div>
<p class="text-[rgb(20,20,20)]"></p>
```

Every color in a landing's markup resolves through that landing's own token system — either a named Tailwind utility generated by its `@theme inline` mapping (`bg-surface`, `text-muted`, `border-border`) or, for the rare case no named utility exists for the exact property/token combination needed, an arbitrary-value utility that references the CSS custom property by name, never a literal value:

```html
<!-- Correct: still arbitrary-value syntax, but resolves through the token, not a literal -->
<div class="bg-[var(--surface-strong)]"></div>
```

This is not a stylistic preference — it's what keeps a downloaded landing re-themeable by editing only its `tailwind.css`: if a color is ever hardcoded as a literal in markup, changing the token no longer changes that element, and the landing silently drifts from its own design system. Audit whenever a landing is created, modified, or audited: grep the landing for `-\[#`, `-\[rgb`, `-\[rgba`, `-\[oklch`, `-\[hsl` inside `class`/`class:list` attributes — any match is a violation to fix, either by switching to the matching named utility or to `[var(--token-name)]`.

### Reuse without CSS shortcuts

The main Tailwind CSS file of each landing is that landing's visual design system. It should centralize reusable visual decisions when they actually exist: theme tokens, typography, custom breakpoints, spacing, radius, shadows, easings, animations, custom variants, and custom utilities. Do not leave the Tailwind file as a bare import when the landing has repeated visual language that belongs in Tailwind. **Do not use `@layer components` for component-style classes** — apply utilities directly to elements in markup instead.

Use this decision model:

1. Design token -> Tailwind v4 `@theme` so it generates named utilities.
2. Specialized behavior/capability -> `@utility`, especially when it should compose with variants like `motion-reduce:`, `hover:`, or responsive prefixes (e.g. a custom `reveal` utility for scroll-triggered animations).
3. One-off or recurring styling -> Tailwind utilities directly in Astro `class` attributes (preferred — keeps styling visible at the element level).
4. Repeated structure, content, logic, behavior, or semantic responsibility -> an Astro component.

**Never:** create `@layer components` classes like `.btn`, `.btn-primary`, `.section-header`, `.field-control`, or similar abstraction layers. These hide styling from the markup and make composition harder to follow. Write the utilities directly in `class` attributes instead, keeping all styling decisions visible where they're applied.

> Está prohibido almacenar clases Tailwind en constantes, objetos o archivos TypeScript/JavaScript usados únicamente como sistema de estilos. Tailwind debe utilizarse directamente en el markup o extenderse mediante las capacidades oficiales de Tailwind como `@theme`, `@layer components` y `@utility`. Cuando exista reutilización estructural real, debe crearse un componente Astro en lugar de abstraer únicamente strings de clases.

> No crear archivos `ui.ts`, `styles.ts`, `classes.ts` o equivalentes cuyo propósito principal sea almacenar strings de clases Tailwind.
> El sistema visual reutilizable de una landing debe centralizarse en su configuración CSS de Tailwind utilizando `@theme`, `@layer components`, `@utility` y las capacidades oficiales de Tailwind CSS.

> No crear componentes Astro únicamente para encapsular o reutilizar clases Tailwind.

> La semántica HTML debe permanecer independiente de la apariencia. Un enlace debe seguir siendo `<a>` y una acción `<button>`, aunque ambos compartan exactamente el mismo estilo visual.

> Cuando dos elementos únicamente comparten apariencia, reutilizar estilos mediante Tailwind en lugar de crear una abstracción de componente.

Criterio obligatorio para landings: design token -> `@theme`; patrón visual reutilizable -> `@layer components`; utility especializada -> `@utility`; estilo específico -> utilities directamente en `class`; estructura, contenido, lógica o comportamiento reutilizable -> componente Astro. Ninguna tarea de creación, modificación o auditoría de una landing está terminada si introduce o conserva componentes Astro cuya única responsabilidad sea esconder strings de clases Tailwind.

> En las landings ficticias está prohibido generar datos personales, empresariales, de contacto o structured data plausibles que puedan coincidir accidentalmente con entidades reales. Utilizar placeholders claramente ficticios y añadir datos reales únicamente cuando hayan sido proporcionados explícitamente por el usuario.

Las Landing Pages de esta plataforma son demostraciones de diseño. No inventes ni incluyas automáticamente direcciones postales completas, teléfonos, emails con dominios aparentemente reales, perfiles o URLs de redes sociales, URLs de empresas ficticias, CIF/NIF, nombres completos de personas, coordenadas, información legal, datos registrales ni datos de contacto plausibles que puedan pertenecer a terceros. Para secciones de contacto usa placeholders inequívocos como `correo@ejemplo.com`, `+00 000 000 000`, `Dirección de ejemplo`, `Ciudad, País`, `Instagram` o `LinkedIn`, sin convertirlos en perfiles reales.

No generes automáticamente JSON-LD o structured data de `Organization`, `LocalBusiness`, `Person`, `PostalAddress`, `telephone`, `email`, `sameAs`, `logo` o `url` para una marca ficticia. Solo añade esos datos cuando correspondan a una entidad real y hayan sido proporcionados explícitamente por el usuario. En landings ficticias pueden mantenerse `title`, `description`, headings, Open Graph básico, estructura semántica y canonical de plataforma cuando corresponda, siempre que no impliquen que la empresa ficticia existe realmente. Una auditoría de landing debe retirar datos ficticios excesivamente realistas y structured data simulado.

Do not create class-only helpers, style-only variant maps, or large Tailwind strings outside markup, and do not move the same architecture into a differently named file. TypeScript and JavaScript in a landing are for logic, types, data, and behavior. An Astro component is justified by reusable structure or behavior, not merely by the opportunity to relocate classes. Avoid both duplicated enormous class strings and premature abstraction.

Do not create component-layer classes for styles that appear only once or merely to shorten markup. Use `@layer components` and `@apply` deliberately for repeated landing-level visual patterns; otherwise keep utility classes directly in Astro markup.

### Native CSS exception

Native CSS is allowed only for a real, concrete limitation that Tailwind cannot correctly express.

When an exception is necessary:

1. keep the CSS minimal and local to the affected landing;
2. add a brief adjacent comment naming the Tailwind limitation and why the CSS is required;
3. never use the exception for layout, spacing, typography, responsive behavior, or states that existing Tailwind utilities/variants already support;
4. record the exception in the landing README and in the task handoff;
5. re-evaluate it when Tailwind is upgraded.

A landing task is not complete if it adds an unnecessary CSS file, a large `<style>` block, manual layout/spacing/typography classes, duplicated styles, unjustified arbitrary values, or any native CSS that Tailwind can express.

### Design tokens: semantic variables — mandatory, same names, declared independently per landing

> Las Landing Pages deben utilizar tokens semánticos expuestos mediante `@theme inline`. Light/Dark se resuelve cambiando los valores de las variables CSS bajo `[data-theme="dark"]`, manteniendo las mismas utilities Tailwind en el markup.

This is the mandatory theming architecture for every current and future landing. It replaces pairing every utility with a `dark:` counterpart (`bg-white dark:bg-black`, `text-black dark:text-white`) as the default mechanism: the markup's classes stay identical between themes, and only the underlying CSS variable values change.

**Every landing declares this full block itself, in its own `styles/tailwind.css`** — `:root` base values, `[data-theme="dark"]` overrides, and the `@theme inline` mapping that turns each `--name` variable into the matching `bg-name` / `text-name` / `border-name` Tailwind utility. There is no shared file to import; see "Design tokens: same names everywhere, independent values per landing" at the top of this Skill for the full reference block to copy:

```css
@import "tailwindcss";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  /* this landing's own Light values */
}

[data-theme="dark"] {
  /* this landing's own Dark values */
}

@theme inline {
  /* this landing's own name -> utility mapping */
}
```

and then uses the resulting utilities directly in markup, unchanged across themes:

```astro
<body class="bg-background text-foreground">
  <section class="bg-surface">
    <p class="text-muted">
      <button class="bg-primary text-primary-foreground"></button>
    </p>
  </section></body
>
```

If a landing's composition seems to need "one more gray" or an additional surface level, resolve it first through the existing tokens, contrast, opacity, and composition (`bg-foreground/10`, `bg-surface-strong`, `text-muted`, `border-border/50`, etc.) before concluding a new token is needed. A genuinely new token is added locally, inside that landing's own `tailwind.css` — it does not require touching any other landing, because there is no shared file left to keep in sync.

#### Image placeholders use `bg-placeholder`

> Los placeholders de imágenes utilizarán `bg-placeholder`: casi negro en Light y gris claro en Dark. Cuando el placeholder se encuentre sobre una superficie invertida, utilizar una variante inversa con transparencia manteniendo siempre contraste suficiente.

Every image placeholder in every landing uses the same token — never a different arbitrary gray per placeholder:

```astro
<div class="bg-placeholder text-placeholder-foreground">Image placeholder</div>
```

- **Light:** `--placeholder` is approximately `bg-neutral-900` (near-black) — strong, unmistakable contrast against the light page.
- **Dark:** `--placeholder` is approximately `bg-neutral-300` (light gray) — strong, unmistakable contrast against the dark page.
- The goal is a placeholder that reads clearly as "image coming here" and communicates the future composition at a glance, in both themes.

**Inverted surfaces:** when a placeholder sits inside a section whose background is already inverted relative to the page (a dark band inside Light, a light band inside Dark), the standard `bg-placeholder` would lose contrast against that surface. In that case use an inverse variant with transparency instead of hardcoding a one-off `bg-white/70` or `bg-black/60` directly in the component:

```css
:root {
  --placeholder-inverse: rgb(255 255 255 / 0.72);
}

[data-theme="dark"] {
  --placeholder-inverse: rgb(10 10 10 / 0.65);
}

@theme inline {
  --color-placeholder-inverse: var(--placeholder-inverse);
}
```

```astro
<div class="bg-placeholder-inverse"></div>
```

Conceptually: light section → dark placeholder; dark section → light placeholder; an inverted band inside either theme → the opposite value with enough transparency to integrate against that surface without losing contrast. Define `--placeholder-inverse` (and any other inverse token a landing's composition genuinely needs) once in the token system and reuse it — don't hardcode the transparency value again in each component that happens to sit on an inverted surface.

#### Architecture rule: name by intent, not by value

Token and utility names must express intent, not a concrete value. Prefer `bg-background`, `text-foreground`, `bg-surface`, `text-muted`, `border-border`, `bg-primary`, `bg-placeholder` over sprinkling `bg-white`, `bg-neutral-950`, `text-neutral-600`, `border-neutral-300` directly across a landing's markup. The concrete color a token resolves to must be changeable from the token system alone, without touching a single component — that's what lets someone download a landing and re-skin it by editing only `:root`/`[data-theme="dark"]`, never hunting through every section for a raw gray value.

This does not forbid raw Tailwind grayscale utilities everywhere (a one-off, genuinely non-reusable shade is still fine as a direct utility per the decision model above) — it forbids treating raw grayscale utilities as the landing's primary theming mechanism for anything that represents a reusable role (page background, foreground text, a surface level, a muted tone, a border tone, the primary action color, the image-placeholder color). If a color plays one of those roles anywhere in the landing, it belongs in the token system, not repeated as a raw utility.

#### Still monochrome, still Tailwind-native, still not TypeScript

- Every token value remains strictly monochrome — white, black, grayscale, and transparencies derived from those tones only (see the monochrome rule above). Do not introduce a chromatic value into any token.
- Keep the layering exactly as established: base variables in `:root`, Dark overrides in `[data-theme="dark"]`, exposure as utilities via `@theme inline`, reusable visual patterns in `@layer components`, specialized capabilities in `@utility`, one-off styling directly as Tailwind utilities in Astro markup.
- Never store these values in TypeScript. Do not create `ui.ts`, `styles.ts`, `theme.ts`, `classes.ts`, or an equivalent file whose purpose is holding color constants or class strings — the visual system belongs to Tailwind/CSS, per the existing prohibition on disguised stylesheets above.

### Responsive design: Tailwind CSS v4, mobile-first — mandatory

> Las Landing Pages deben construirse utilizando el sistema responsive mobile-first nativo de Tailwind CSS. Las utilities sin prefijo representan Mobile y los prefijos `sm:`, `md:`, `lg:`, `xl:` y `2xl:` aplican estilos desde ese breakpoint hacia arriba. Está prohibido utilizar breakpoints arbitrarios como `min-[1400px]:*`, `min-[1024px]:*` o equivalentes cuando la necesidad pueda resolverse mediante los breakpoints nativos de Tailwind. Si el proyecto necesita realmente un breakpoint adicional reutilizable, debe declararse mediante `--breakpoint-*` dentro de `@theme` y utilizarse posteriormente como una variante Tailwind normal. Utilizar Container Queries cuando el diseño dependa del ancho disponible para un componente en lugar del ancho completo del viewport.

This rule applies to every current and future landing, and to every creation, modification, refactor, and audit. Before working on any responsive behavior in a landing, verify the installed stable Tailwind version (`tailwindcss` in `package.json`) and consult the official Tailwind v4 responsive-design and theme documentation for that release. Base every decision on the current stable API — not on v3 patterns, memory, or custom systems.

#### Mobile-first: the base state is Mobile

The unprefixed utility is the Mobile design. Prefixes only apply from that breakpoint upward — `sm:` never means "styles for mobile", it means "apply from `sm` upward". Design the base state first, then adapt progressively.

```html
<!-- Correct: Mobile centers text, sm and up left-aligns it -->
<p class="text-center sm:text-left">...</p>

<!-- Correct: Mobile is flex-col, md and up flex-row -->
<div class="flex flex-col md:flex-row">...</div>

<!-- Wrong: sm: centers only from 640px up, leaves Mobile unstyled -->
<p class="sm:text-center">...</p>
```

#### Default breakpoints (Tailwind v4 stable)

Use the native breakpoints as the primary system:

| Prefix | Min width | Media query                        |
| ------ | --------- | ---------------------------------- |
| `sm`   | 40rem     | `@media (width >= 40rem)` (640px)  |
| `md`   | 48rem     | `@media (width >= 48rem)` (768px)  |
| `lg`   | 64rem     | `@media (width >= 64rem)` (1024px) |
| `xl`   | 80rem     | `@media (width >= 80rem)` (1280px) |
| `2xl`  | 96rem     | `@media (width >= 96rem)` (1536px) |

Design based on how the content responds, not on specific devices — no `iPhone`, `iPad`, `MacBook`, `1440`, `1920`, or `Samsung` targeting. A breakpoint exists because the layout needs to change, not because a device exists.

#### Arbitrary breakpoints (`min-[Xpx]:`, `max-[Xpx]:`) — prohibited when native ones fit

Do not introduce `min-[1400px]:text-lg`, `min-[1100px]:grid-cols-3`, `max-[900px]:hidden`, or equivalent arbitrary breakpoint variants when the same behavior is achievable through `sm:`, `md:`, `lg:`, `xl:`, `2xl:`, the `max-*` range variants, or a container query. Arbitrary breakpoints must not be introduced for convenience; the native responsive system is the first tool.

#### Custom breakpoints via `@theme` — the only allowed extension mechanism

If — after checking that the native breakpoints cannot represent the recurring need — the landing truly requires an additional breakpoint, add it as a semantic Tailwind variant in the landing's Tailwind entry:

```css
@import "tailwindcss";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 120rem;
}
```

```html
<div class="xs:grid-cols-2 3xl:grid-cols-6">...</div>
```

Custom breakpoints must respond to a real, recurring need, be reused across the landing, live in `@theme`, and use `rem` (the unit Tailwind's default breakpoints use). Do not mix arbitrary units, do not scatter `min-[Xrem]:` throughout the markup as a substitute, and do not define breakpoints in TypeScript/JavaScript as `const BREAKPOINT_* = 1400`.

#### Breakpoint ranges via `max-*` variants

To limit a style to a specific range, stack a breakpoint variant with a `max-*` variant instead of writing a manual media query:

```html
<div class="md:max-xl:flex">...</div>
<!-- md up to just below xl -->

<div class="md:max-lg:grid">...</div>
<!-- only the md range -->
```

Available range variants: `max-sm`, `max-md`, `max-lg`, `max-xl`, `max-2xl`. Use them only when the styling truly must not apply above a certain breakpoint.

#### Responsive is cumulative — don't over-declare

A prefix applies from that breakpoint upward. Do not repeat the same value at every breakpoint. Add a breakpoint entry only when the design actually changes there.

```html
<!-- Correct -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>
<div class="text-sm md:text-base xl:text-lg">...</div>

<!-- Wrong: redundant repetition at every breakpoint -->
<div
  class="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg"
>
  ...
</div>
```

#### Container Queries — when the layout depends on the component's own width

Use container queries when a component's appearance must depend on the space available to it — not on the viewport. This is especially important for cards, reusable modules, blocks placed inside variable grids, and any component whose width does not necessarily match the viewport (including anything shown inside the platform's resizable preview).

```html
<div class="@container">
  <article class="flex flex-col @md:flex-row">...</article>
</div>
```

Container queries also follow the mobile-first model — the base state is the small-container state, and `@sm:`, `@md:`, `@lg:`, `@xl:`, `@2xl:` … apply from that container size upward. Use `@max-*` variants for container-range styling:

```html
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">...</div>
</div>
```

Do not write manual `@container (min-width: …)` CSS unless a real technical limitation prevents the variants from expressing the need.

**Named containers** — only when nested containers require disambiguating which one a variant reacts to:

```html
<div class="@container/main">
  <div class="flex flex-col @sm/main:flex-row">...</div>
</div>
```

If the landing needs additional container sizes, extend them via the `--container-*` namespace in `@theme` (see the Theme variables section) instead of scattering arbitrary values.

#### Breakpoint vs. container query — decision

- Viewport-driven layout change → `sm:` / `md:` / `lg:` / `xl:` / `2xl:` (and their `max-*` variants).
- Component-driven layout change (depends on the component's own width) → `@container` + `@sm:` / `@md:` / …

Do not use a viewport media query to solve a problem that is actually about a component's own width, and do not use a container query when the change truly depends on the viewport.

#### Theme variables — same names first, landing-local values always

The base font, color, fluid-heading, easing, and named-breakpoint/container tokens each live in that landing's own `@theme`/`@theme inline` block (see "Design tokens: same names everywhere, independent values per landing" above) — reuse the shared **name** for a role that already has one instead of inventing a synonym. A landing reaches for a new `@theme` entry when it has a **genuinely landing-specific, structurally reusable** value that isn't already covered by one of those shared names or by Tailwind's own default scale — for example a landing-specific named breakpoint tied to one component's own content threshold, declared via `--breakpoint-*` the same way the reference `--breakpoint-nav`/`--breakpoint-cards`/etc. are (reuse the shared name first if an equivalent need already exists there).

Radius and shadow are **not** landing-`@theme` territory: Tailwind v4's own default scale (`rounded-none/xs/sm/md/lg/xl/2xl/3xl/full`, `shadow-xs/sm/md/lg/xl/2xl`) is the shared "ingredient set" every landing already has — get a pill button, a sharp industrial corner, or a soft card by picking a different built-in step directly in markup, never by declaring a same-role custom `--radius-*`/`--shadow-*` token. A one-off shadow value belongs as an arbitrary utility in `class` (see the Native CSS / arbitrary-value guidance below), not in `@theme`.

Do not build a parallel system in TypeScript. Breakpoints and container sizes in particular belong to the Tailwind theme, not to `const BREAKPOINT_DESKTOP = 1400` or similar.

#### Arbitrary values — permitted, but not to bypass the system

`w-[…]`, `max-w-[…]`, `grid-cols-[…]`, and other arbitrary values remain allowed when they represent a genuinely specific design need that no suitable utility or project token expresses. They must not become the escape hatch for the responsive system: `min-[Xpx]:` and `max-[Xpx]:` as breakpoint substitutes are prohibited when `sm/md/lg/xl/2xl`, a `max-*` range, a container query, or a `@theme` breakpoint solves the case.

#### Layout utilities

Prefer Tailwind's layout utilities combined with the native breakpoints:

`grid`, `flex`, `grid-cols-*`, `col-span-*`, `flex-col`, `flex-row`, `gap-*`, `space-*`, `order-*`, `hidden`, `block`, `flex`, `grid`, `w-*`, `max-w-*`, `min-w-*`, `h-*`, `min-h-*`, `max-h-*`.

**Show / hide** — use `hidden lg:flex`, `lg:hidden`, etc., instead of `max-[1023px]:*` / `min-[1024px]:*`.

**Typography, spacing, grid** — add a breakpoint only where the composition actually changes:

```html
<h1 class="text-4xl md:text-5xl lg:text-7xl">...</h1>
<section class="py-16 md:py-24 lg:py-32">...</section>
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">...</div>
```

**Visual order** — `order-*` may reorder the visual layout, but keep the HTML source order logical for screen readers, keyboard, and SEO. Do not use `order-*` to compensate for incorrect source order.

**Sticky columns** — the base is normal flow; activate sticky from the breakpoint where it makes sense (`lg:sticky lg:top-… lg:self-start`). Do not force `max-[1023px]:static`; mobile-first already handles the base.

#### Responsive is not only width

On every responsive change, actively review: typography, line length, spacing, navigation, overflow, images, cards, sections, sticky, fixed, dialogs, dropdowns, tables, buttons, touch targets, animations, GSAP, viewport height, orientation.

#### Preview visualizer

Landings run inside a resizable preview. `window.innerWidth` does not necessarily represent the space available to a specific component. When a component's behavior truly depends on the space it is given, use container queries. The responsive system must keep working correctly when the user manually resizes the preview.

#### GSAP and responsive

When GSAP animations depend on breakpoints, use `gsap.matchMedia()`, keep any JavaScript breakpoints synchronized with the Tailwind system only when it is strictly necessary, avoid magic numbers like `1400`, and clean up ScrollTriggers/timelines on layout changes. Do not introduce a JS breakpoint that differs from the visual system without a documented technical reason.

#### Decision sequence — apply before writing any responsive style

1. Is it the Mobile / base state? → utility without prefix.
2. Does it change with the viewport? → `sm:` / `md:` / `lg:` / `xl:` / `2xl:`.
3. Must it exist only within a range? → breakpoint + `max-*` variant.
4. Does it depend on the component's own width? → `@container` + `@sm:` / `@md:` / … (with `@max-*` and named containers where needed).
5. Is a new reusable breakpoint required? → declare it in `@theme` via `--breakpoint-*` (or `--container-*` for container sizes).
6. Reusable visual pattern? → `@layer components`.
7. Missing utility that composes with variants? → `@utility`.
8. One-off styling? → utilities directly in the markup.
9. Tailwind genuinely cannot express it? → native CSS as a documented exception (see the Native CSS exception section).

#### Auditing existing landings for arbitrary breakpoints

Search each landing for `min-[…]:` and `max-[…]:` usages as breakpoints and classify each case:

1. replaceable by `sm` / `md` / `lg` / `xl` / `2xl`;
2. replaceable by a `max-*` range;
3. candidate for a container query;
4. real need for a custom breakpoint declared in `@theme`;
5. legitimate arbitrary value that should remain.

Correct only the cases that represent a bad practice. Do not automatically rewrite every arbitrary value, and do not change composition, hierarchy, spacing, sizes, behavior, or visual identity as a side effect — the migration must improve the responsive architecture without altering the approved design.

#### Validation

After applying these rules, run `npx astro check`, `npx tsc --noEmit`, `npx prettier --check .`, and `npm run build`, all clean. Then verify the landings across `< sm`, `sm`, `md`, `lg`, `xl`, `2xl`, intermediate ranges, and manual preview resizes. Check specifically for horizontal overflow, layout jumps, cut text, deformed images, broken grids, sticky/fixed behavior, navigation, GSAP behavior, and container queries. A landing is not finished if it only works correctly on Desktop — responsive must be part of the architecture from the first component, following the model: Mobile base → progressive adaptation via Tailwind → container queries when the component's context requires them.

### Tailwind audit requirement

For every landing creation, modification, or audit:

1. inspect all landing `.css` files and `<style>` blocks;
2. verify **no `@layer components` exists** — all button, form, section, and UI styling must be applied directly via Tailwind utilities in Astro `class` attributes, not abstracted into component classes;
3. inspect landing `.ts` and `.js` files for class-only constants, style-only variant objects, large external class strings, and files such as `ui.ts`, `styles.ts`, `theme.ts`, `classes.ts`, or equivalents;
4. remove native CSS that Tailwind utilities can express and remove every disguised stylesheet abstraction;
5. verify every remaining native declaration has a documented technical justification;
6. verify responsive, Light/Dark, interactive, and reduced-motion behavior uses Tailwind variants;
7. verify Light/Dark theming flows through the semantic token system (`:root` / `[data-theme="dark"]` / `@theme inline`) rather than `dark:`-paired utilities, and that raw grayscale utilities aren't standing in for a reusable role a token should express;
8. verify every section that needs a photograph uses a real, correctly attributed Unsplash image sourced via the `unsplash-images` Skill rather than a permanent placeholder; any remaining `bg-placeholder`/`bg-placeholder-inverse` usage has a stated technical reason (loading/skeleton state, content genuinely still pending) rather than being the default;
9. **verify the landing's `styles/tailwind.css` declares its own complete color tokens, `@theme inline` mapping, `@custom-variant dark`, headline/figure typography tokens, and `--ease-*`, using the shared token **names** (never a shared file, never another landing's file) — and that no `--radius-*`/`--shadow-*` custom token exists**; anything left beyond the token block must be genuinely landing-local (Swiper composition, a landing-specific scrollbar rule, a landing-specific one-off breakpoint);
10. run a production build so Tailwind source detection and generated utilities are proven;
11. verify the rendered landing at Mobile, Tablet, Laptop, and Desktop in Light and Dark.

## Design tokens: same names, independent per landing (recap)

Every landing works with the same token **vocabulary**, declared **locally, independently, in its own `tailwind.css`** — never imported from a shared file (see "Design tokens: same names everywhere, independent values per landing" above for the full contract and reference block):

- the **grayscale-only** semantic color palette (`--background`, `--foreground`, `--surface`, `--surface-strong`, `--muted`, `--border`, `--primary`, `--primary-foreground`, `--inverted`, `--inverted-surface`, `--placeholder`, `--placeholder-foreground`, `--placeholder-inverse`, and the rest of the fixed name set — see the monochrome rule above, no chromatic tokens outside the opt-in palette system, no landing-added roles)
- the fluid heading typography scale (`--text-headline-1/2/3`, `--text-figure`)
- the spacing rhythm and container widths (`--spacing-section`, `--container-landing`, `--container-copy`, `--container-heading`, `--container-hero-heading`)
- the named breakpoints (`--breakpoint-footer/cards/nav/stats/display`)
- an easing curve under the name `--ease-landing`, and the `reveal` scroll utility built on it

A landing composes with these exact ingredient **names** — which heading step goes on its Hero, which container width its articles use, whether it needs a named breakpoint at all, which native Tailwind radius/shadow step its buttons and cards use — to build a completely different design, with its own independently chosen values. It does not invent a new token name, its own radius/shadow tokens, or a landing-branded easing name. If a landing genuinely needs a new reusable role no existing name covers, it adds that token locally, inside its own file — it is that landing's own addition, not a request to change a shared file that no longer exists.

Avoid repeated arbitrary values when a named Tailwind utility or a token will do. Don't reach for a raw grayscale utility (`bg-neutral-950`, `text-neutral-600`, …) for anything that plays a reusable role — that belongs in the landing's own token system instead. Composition, layout, and content are where each landing's identity actually comes from — see "What SÍ can — and must — change between landings" above.

## Light / Dark

- Each landing can support Light and Dark independently.
- The mechanism: the landing's own root document listens for the platform's `postMessage({ type: 'preview:theme', theme })` (sent by `ThemeSelector`/`PreviewShell`) and toggles `data-theme` on **its own** `document.documentElement` — never on the parent/platform document.
- Never write code that reaches for `window.top.document` or otherwise escapes the landing's own document to change theme.
- **Styling mechanism:** Light/Dark is resolved through the semantic token system, not by pairing utilities with `dark:`. The same `bg-background`, `text-foreground`, `bg-surface`, `text-muted`, `bg-primary`, `bg-placeholder`, etc. appear unchanged in the markup for both themes; only the CSS variable values change between `:root` and `[data-theme="dark"]`. Reach for the `dark:` custom variant only for a genuine one-off that no token expresses — never as the default way to theme a component.
- Verify both themes actually render correctly — don't ship a Dark theme that's just an unstyled inverse of Light.
- Both themes stay strictly monochrome (white/black/grayscale — see the rule above); the change between them is driven only by contrast, surfaces, and gray levels, never by introducing color.

## Optional per-landing color palettes — the one deliberate exception to "monochrome only"

> A partir de ahora, cuando un usuario lo active desde el selector de paletas del preview, una landing puede mostrar una identidad cromática opcional. La escala de grises sigue siendo la paleta por defecto de todas las landings; el resto de paletas son un añadido opt-in, nunca automático.

The monochrome rule above ("Visual rule: monochrome only — mandatory, no exceptions") still governs a landing's **default, unmodified state** — every landing renders strictly in white/black/grayscale until a visitor explicitly picks a different palette from the platform's palette selector. This section is the one documented, narrow exception: a landing **may** additionally define one or more chromatic palettes a visitor can opt into. It does not relax the monochrome rule for anything else (a landing still never hardcodes a chromatic color outside this system, still never uses color to distinguish state by default, still ships grayscale as the experience every visitor sees first).

### The 5-token contract — same names everywhere, only values differ

Every landing that opts into this system defines exactly these 5 custom properties, always under these exact names:

```css
--color-primary;
--color-secondary;
--color-tertiary;
--color-accent;
--color-light;
```

- Never rename, add, or remove one of these 5 for a "palette-enabled" landing — the platform's Options sidebar and any future tooling assume this exact contract.
- These are a **separate namespace from that landing's own design tokens** (`--background`, `--foreground`, `--primary`, `--placeholder`, etc., declared locally per "Design tokens: same names everywhere, independent values per landing" above). `--color-primary` happens to share a name with the Tailwind theme-registration key that landing's own `@theme inline` block uses to generate `bg-primary`/`text-primary` — but Tailwind's compiled utilities for those bind to `--primary` directly, not `--color-primary`, so declaring this block never silently retints existing monochrome components. A component only participates in the palette system by explicitly referencing one of the 5 tokens (e.g. `bg-[var(--color-primary)]`, `text-[var(--color-light)]`) — nothing does so automatically.
- Declare the 5 tokens in the landing's own `styles/tailwind.css` as a documented native-CSS exception, following the pattern below — this is landing-local, opt-in data, never shared with another landing.

### Structure: one `:root` default + one attribute selector per palette

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
  --color-secondary: #bb9457;
  --color-tertiary: #432818;
  --color-accent: #99582a;
  --color-light: #ffe6a7;
}
```

- `grayscale` is mandatory and is always the id that resolves to the same values as `:root` (so "no palette selected yet" and "grayscale explicitly selected" render identically).
- Every additional palette (`cocoa`, or any future one) is its own `html[data-palette="…"]` block, values only, never touching the shared design-system tokens.
- **Define a `[data-theme="dark"]` variant for every palette**, exactly mirroring how the shared `--primary`/`--primary-foreground` tokens invert between Light and Dark: `primary` and `light` swap roles, `secondary` and `accent` swap roles, `tertiary` stays the same mid-tone. A palette without a Dark variant is incomplete — shipping only the Light values breaks contrast the moment a visitor combines that palette with Dark mode.

```css
html[data-theme="dark"],
html[data-theme="dark"][data-palette="grayscale"] {
  --color-primary: #f5f5f5;
  --color-secondary: #a3a3a3;
  --color-tertiary: #737373;
  --color-accent: #404040;
  --color-light: #171717;
}

html[data-theme="dark"][data-palette="cocoa"] {
  --color-primary: #ffe6a7;
  --color-secondary: #99582a;
  --color-tertiary: #432818;
  --color-accent: #bb9457;
  --color-light: #6f1d1b;
}
```

### Metadata: `palettes` on the content-collection entry

A landing's selectable palettes are declared in its own `src/content/landings/[slug].json`, validated by `content.config.ts`'s `paletteSchema` and typed as `PaletteOption`/`PaletteColors` (`src/types/palette.ts`):

```json
"palettes": [
  { "id": "grayscale", "name": "Escala de grises", "colors": { "primary": "#171717", "secondary": "#404040", "tertiary": "#737373", "accent": "#a3a3a3", "light": "#f5f5f5" } },
  { "id": "cocoa", "name": "Cacao", "colors": { "primary": "#6f1d1b", "secondary": "#bb9457", "tertiary": "#432818", "accent": "#99582a", "light": "#ffe6a7" } }
]
```

- `palettes` defaults to `[]` for every landing not yet migrated to this system — an empty array means the platform renders no palette-selector button for that landing at all. Adding this feature to a landing is opt-in, per landing, one at a time.
- `colors` here must be kept in sync with the CSS values in that landing's own `styles/tailwind.css` — the JSON drives the platform's picker swatches/labels; the CSS drives what actually renders. A landing task that changes one without the other is incomplete.
- Never invent a palette id/name/color that wasn't explicitly requested — this is real, visible design data, not fictional placeholder content.

### Mechanism: mirrors the Light/Dark theme bridge exactly

Selection lives in the platform's **Options sidebar** (`OptionsPanel.astro`'s "Personalizar colores" section, rendered via `PaletteOptions.astro`) — not the toolbar, not a separate modal, never inside the landing itself. `OptionsPanel` renders `PaletteOptions` when the landing's `palettes` array is non-empty, and falls back to `ComingSoonNotice` otherwise:

1. The visitor picks a palette from the list in the Options sidebar → `PaletteOptions` dispatches a `preview:palette` DOM `CustomEvent`.
2. `PreviewShell` relays it into the iframe via `postMessage({ type: 'preview:palette', palette: id })` — the same bridge pattern as `preview:theme`.
3. The landing owns a small `scripts/palette.ts` that listens for that message and toggles `data-palette` on **its own** `document.documentElement` only — never `window.top` or any parent/ancestor document (same isolation rule as the theme bridge).
4. Unlike theme, palette choice is also **persisted** (`localStorage`, a landing-scoped key such as `"[slug]:palette"`) so a downloaded/standalone copy of the landing keeps remembering it outside the platform, and so a synchronous, no-flash `<script is:inline>` in `<head>` can restore it before first paint (a deferred end-of-`<body>` script would cause a visible flash on reload).
5. After applying any palette (via the postMessage command or the initial storage restore), the landing script reports the result back with `window.parent.postMessage({ type: 'preview:palette-sync', palette: id })` so the Options sidebar mirrors the landing's real current state instead of assuming it.

See `src/landings/chocolate-factory/scripts/palette.ts`, `src/landings/chocolate-factory/index.astro` (the inline head script), and `src/components/platform/PaletteOptions.astro`/`OptionsPanel.astro` for the reference implementation — copy this pattern verbatim when adding the system to another landing, only substituting that landing's own storage key, palette ids, and color values. `LandingPreviewProps.palettes` threads from `pages/landings/[slug]/preview.astro` through `PreviewShell` to `OptionsPanel`.

### When adding this to a new landing

1. Confirm the request explicitly asks for chromatic palettes on this landing — this is not a default feature to add proactively.
2. Add `palettes` to that landing's metadata JSON (grayscale first, then any requested chromatic palette(s)).
3. Add the `:root`/`[data-palette="…"]`/`[data-theme="dark"]…` blocks to that landing's own `styles/tailwind.css`, as a documented native-CSS exception (see "Native CSS exception" above) — values must exactly match the JSON.
4. Copy `scripts/palette.ts` and the inline head-script restore pattern from an existing palette-enabled landing (currently `chocolate-factory`), adjusting only the storage key.
5. Import the script alongside `scripts/theme` in the landing's `index.astro`.
6. Decide, deliberately, which components actually consume the 5 tokens (e.g. the official `primary` button variant via `bg-[var(--color-primary)] text-[var(--color-light)]`) — don't leave the tokens wired to nothing, and don't reach further than what was asked for.
7. Verify all 4 combinations (each palette × Light/Dark) render with correct contrast, and that grayscale still renders identically to the landing's pre-existing monochrome design.

## Anatomy — pick only what the landing needs

Available blocks: Header/Navbar, Hero, Main, Sections, Aside, Features, Services, Products, Benefits, About, Gallery, Statistics, Pricing, Testimonials, FAQ, Contact, Forms, Newsletter, CTA, Footer.

Not every landing needs all of these. Choose based on category, audience, objective, and conversion goal — never apply the full list by default.

## Category notes

| Category                | UX priorities                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| E-commerce              | product clarity, trust signals, price/CTA prominence, urgency without being pushy, fast path to purchase |
| Portfolio               | visual craft, case studies, restrained chrome that doesn't compete with the work, clear contact path     |
| SaaS / Producto digital | value prop in the first screen, feature clarity, social proof, low-friction signup/demo CTA              |
| Blog / Editorial        | readability, typography hierarchy, content density, minimal chrome around the reading experience         |
| Negocios / Servicios    | trust, local/professional credibility, clear service description, easy contact/booking                   |

## Design quality — avoid generic templates

Do not default to Hero → three feature cards → logo strip → testimonials → pricing → CTA for every landing. Each landing should have real visual identity: distinct composition, rhythm, and hierarchy suited to its category and content — not a reskin of the same template. Avoid decoration without function: gratuitous gradients, glassmorphism, or exaggerated shadows added just because they're common.

Remember the landing is strictly monochrome (see the rule above) — personality here comes from composition, typography, hierarchy, spacing, grids, proportions, surface contrast, restrained shadows, rhythm, and interaction, never from a color palette. Don't spend effort designing a bespoke brand palette for a landing; that time belongs to structure and composition instead.

## Images — real photography via the `unsplash-images` Skill, placeholders only as a technical fallback

> Las Landing Pages terminadas deben utilizar imágenes reales seleccionadas mediante la Skill oficial de Unsplash. Los placeholders dejan de ser la estrategia visual por defecto.

**This supersedes the previous "placeholders only, no external providers" rule.** A finished landing does not ship with permanent gray placeholder boxes standing in for photography — it ships with real, correctly attributed photographs sourced through the [`unsplash-images`](../unsplash-images/SKILL.md) Skill. That Skill owns the entire image lifecycle (search, selection, download tracking, attribution, UTM, persisted metadata, production hotlinking); this Skill only says _when_ a landing needs a photo and how the result integrates with the landing's own architecture, tokens, and monochrome system.

When a section genuinely needs a photograph — Hero, feature imagery, product/article imagery, galleries, process/about imagery, portraits/testimonials that call for a real photo, editorial covers, archive/back-issue art, banners — read and follow `unsplash-images` in full before selecting anything:

1. Analyze the section and decide what the photo must depict (subject, framing, orientation, mood).
2. Search via the official Unsplash API with a precise, section-specific query — never a one-word query, never reused verbatim across unrelated sections.
3. Request a small candidate set, select the best fit, and fire the required `download_location` tracking request.
4. Persist the complete metadata (`src`, `alt`, `width`, `height`, `author`, `authorUrl`, `sourceUrl`, `unsplashUrl`, `downloadLocation`) inside the landing's own `data/`/`types.ts`, per that landing's isolation (see "Ground rule: isolation" below) — never importing a platform-level type or reaching into another landing's data.
5. Render the persisted `photo.urls`-derived URL directly (hotlinked, `images.unsplash.com`) with explicit `width`/`height` to avoid CLS, `object-cover`/`object-position` as the layout requires, and a visible, keyboard-reachable photographer + Unsplash credit (`<figure>`/`<figcaption>` or an equivalent caption block) — never hidden via `display:none`/`opacity:0`/`aria-hidden`.
6. Apply the landing's monochrome treatment to the hotlinked image via Tailwind (`grayscale`, contrast utilities, etc.) exactly like any other visual element — never edit, recolor, or rehost the original file.

**Photo selection must read as one editorial choice per landing**, not a grab-bag: match lighting, contrast, framing style, and subject treatment across every photo used inside the same landing (see "Selecting and committing a photo" in `unsplash-images`).

**The API is an editorial-time tool only.** Searches happen during the creation/selection/replacement task; a finished landing's production build and every visitor render use only the persisted metadata and the hotlinked `images.unsplash.com` URL — zero calls to `api.unsplash.com` at build or runtime. See `unsplash-images` §3 for the exact allowed/forbidden contexts.

**Placeholders remain legitimate, but only for a stated technical reason, not as the default:**

- A genuine loading/skeleton state before an image resolves.
- A section still in active design/content work where the final photo hasn't been decided yet (flag this explicitly to the user — don't silently ship it as "done").
- A rare case where a photograph genuinely isn't the right content for that slot (an abstract/illustrative area that was never meant to be a photo in the first place).

When a placeholder is used for one of these reasons, it still follows the pre-existing placeholder contract: `bg-placeholder`/`text-placeholder-foreground` (or `bg-placeholder-inverse` on an inverted surface — see "Design tokens: semantic variables — mandatory" above), correct aspect ratio/dimensions, and short descriptive label text. What changes is that this is no longer the default, silent choice for "a landing needs an image" — it's an explicit, temporary, justified exception.

**Never:** invent an Unsplash URL, fabricate a photographer or metadata field, hardcode the architecture to a specific provider beyond Unsplash's own hotlinked URLs, or leave a finished section on a permanent placeholder without flagging why.

## Icons — `@lucide/astro` only

Use **`@lucide/astro`** for every icon in every landing. It's already a project dependency; if a future environment doesn't have it, install it first with:

```bash
npm install @lucide/astro
```

Before reaching for anything else, always prefer a Lucide icon component over:

- hand-written inline SVG,
- an emoji used as an icon,
- an image used to represent an icon,
- installing a different icon library.

Import only the specific icons a landing actually uses (named imports, e.g. `import { ArrowRight } from '@lucide/astro'`) — never a blanket/namespace import that pulls in icons the landing doesn't render.

Icons stay strictly monochrome, like everything else in the landing — inherit the landing's grayscale tokens (typically `currentColor`) instead of a chromatic icon color.

Icon accessibility:

- **Decorative icons** (next to visible text that already conveys the meaning) must be hidden from assistive technology — pass `aria-hidden="true"` (Lucide's Astro components accept standard SVG attributes) and never let them add noise to the accessible name.
- **Interactive icons** (icon-only buttons/links, icon acting as the only content of a control) must get their accessible name from the control that contains them — `aria-label` on the `<button>`/`<a>`, not on the icon itself.

Design and verify Mobile, Tablet, Laptop, and Desktop together — don't design Desktop first and patch Mobile with overrides after. A task is not done if it works on Desktop but breaks Mobile.

Actively check on every change:

- horizontal overflow
- navigation (mobile menu behavior)
- typography scale
- grid/flex reflow
- image sizing/cropping
- buttons and touch targets (min ~44px)
- forms
- spacing rhythm
- fixed/sticky elements, selective desktop sticky columns, and viewport height quirks
- orientation changes

## Accessibility

Preserve or improve on every change:

- semantic HTML, landmark regions, logical heading hierarchy
- real `<button>`/`<a>` elements (never a `<div onclick>`)
- keyboard operability and visible focus states
- labels for all form fields
- sufficient contrast in both themes — between text and background, controls and background, focus states, and any permitted borders; within a monochrome palette this means real, checked contrast, not an assumption
- meaningful `alt` text (empty `alt=""` for decorative images)
- `prefers-reduced-motion` respected for any animation
- ARIA only to fill a real gap — never as a substitute for correct semantic HTML

## Performance

Watch for each change:

- client-side JavaScript kept minimal and scoped to the one landing
- images correctly sized, modern formats, lazy-loaded below the fold
- fonts optimized (subset/preload only what's used)
- no dependency creep
- Core Web Vitals: LCP (hero image/text render fast), CLS (reserve space, no layout jumps), INP (no janky handlers)
- a landing never loads JS or assets belonging to another landing

## Composition pattern: selective sticky columns — mandatory wherever it applies

> Cuando una sección tenga un encabezado o bloque de contexto corto junto a un contenido considerablemente más largo (lista, artículos, pasos de proceso, specs, testimonios), aprovecha ese desequilibrio con `sticky` en el encabezado, siempre en vista de escritorio.

This is not merely available — it is the required treatment whenever a section's own composition matches the pattern: a **short** column (section eyebrow, heading, description, compact context, a counter) sitting beside a **considerably longer** column (a list, `<ol>`/`<ul>` of steps, a grid of spec/article blocks, cards, testimonials, or any other repeated content that runs noticeably taller than the short column). The short column stays `sticky` while the user scrolls the long column past it. Every landing creation, modification, or audit must check this pattern and apply it where it's missing — don't skip it just because the original design didn't include it.

**Breakpoint — always `lg:` (1024px), never `xl:`:** the platform's own preview device switcher (`src/types/preview.ts`, `DEVICE_BREAKPOINTS`) classifies "Desktop" starting at `1024px` — exactly Tailwind's `lg` breakpoint. Using `xl:sticky`/`xl:grid-cols-…` (1280px) instead of `lg:` means the section stays single-column and non-sticky through most of what the platform itself calls "Desktop", which reads as a broken/missing sticky to anyone testing at a 1024–1279px width. Always pair the two-column grid switch and the `sticky` class on the same breakpoint, and always use `lg:` unless a specific, stated reason requires a wider threshold — in that case, keep the grid switch and the `sticky` class on that same wider breakpoint together, and if a GSAP script's `gsap.matchMedia()` enhancement is gated to "Desktop" for this same section, keep its `min-width` query numerically identical to that breakpoint too (e.g. `lg:` → `(min-width: 1024px)`), so the CSS layout, the sticky behavior, and any scroll-driven enhancement all agree on where "Desktop" starts.

Rules for sticky composition:

- Apply it as the default treatment for this specific imbalance pattern — not to every two-column section indiscriminately, and never when both columns have comparable height (that's not this pattern; forcing sticky there adds noise instead of clarity).
- `lg:grid-cols-[…]` for the column split and `lg:sticky lg:top-28` (or the project's equivalent fixed-header offset) on the short column, together — never split at one breakpoint and stick at another.
- Never force sticky on Mobile/Tablet; the short column scrolls normally below `lg`.
- Respect the section's natural bounds; the sticky element must not escape its section or overlap following content.
- Account for the fixed Header with an appropriate `top-*` offset.
- Verify smooth scrolling, no overlap with the Header, no horizontal overflow, Light/Dark, and Mobile/Tablet/Laptop/Desktop — specifically re-check behavior right at 1024px, the platform's actual Desktop threshold, not just at a wide window.

## Animation

Only when it serves a purpose (guiding attention, confirming an action, reinforcing hierarchy) — never movement for its own sake.

- smooth at 60fps, no layout thrashing
- correct behavior on resize and on mobile
- respects `prefers-reduced-motion`
- never blocks interaction or scrolling
- doesn't hurt CLS/INP

### Swiper Core for sliders and horizontal carousels

> Para carruseles de cards horizontales se utilizará Swiper Core con controles manuales, pagination y configuración responsive. No crear sliders manuales desde cero si Swiper ya resuelve correctamente la interacción.

Use **Swiper Core** (`swiper`) — already or newly installed with `npm install swiper` at the latest stable version — whenever a landing genuinely needs a horizontal slider/carousel: horizontal cards, product sliders, galleries, testimonials, collections, or slide-based scrollable content. Don't reach for it when a plain responsive grid/flex layout already solves the composition — a slider is justified by genuine overflow/browsing behavior, not decoration.

- Use Swiper Core directly; avoid wrapper libraries or framework-specific Swiper integrations (React/Vue Swiper components) — this project ships Astro components only.
- Keep every Swiper instance's JS isolated inside the owning landing (its own `<script>`/`scripts/*.ts`), imported and initialized only where used. Never add a global Swiper script or a shared cross-landing slider module.
- **No autoplay by default.** Navigation is manual: previous/next controls, pagination, touch/swipe drag, and keyboard when it fits the pattern.
- Previous/next controls use `@lucide/astro` icons (e.g. `ChevronLeft`/`ChevronRight`), a real accessible name (`aria-label`), a visible `focus-visible` state, and reflect Swiper's disabled state at the start/end of the track (Swiper's `navigation.disabledClass`, or manually toggling `disabled`/`aria-disabled` off `swiper.isBeginning`/`swiper.isEnd`) — never a control that silently does nothing at the edge.
- Pagination stays visible but strictly monochrome, styled through the landing's existing semantic tokens (`bg-foreground`/`bg-muted`/opacity, etc.) — never Swiper's default blue bullet color left unstyled.
- Configure `slidesPerView`/`spaceBetween` responsively via Swiper's own `breakpoints` option, matching the landing's already-established Tailwind breakpoint scale (native `sm`/`md`/`lg`/`xl`/`2xl` in px, or a landing's `@theme` custom breakpoint) so the slider's responsive steps stay conceptually aligned with the rest of the layout — don't invent unrelated pixel thresholds for Swiper alone.
- The slider must keep working correctly when the platform's resizable preview changes size — verify Swiper's own resize observer (`observer`/`observeParents` options, or a manual `swiper.update()` on resize) keeps `slidesPerView`, arrow disabled-state, and pagination in sync, not just on the real browser viewport.
- Style Swiper only with the landing's Tailwind tokens; where Swiper requires a small amount of unavoidable custom CSS (e.g. overriding a default Swiper CSS variable), keep it minimal, landing-local, and documented per the Native CSS exception rule above — never introduce hardcoded chromatic colors or bypass the semantic token system.
- No `ui.ts`/`styles.ts`/`classes.ts`-style file to store Swiper class strings — configuration objects and callbacks belong in the landing's own typed `scripts/*.ts`, styling stays in Tailwind/markup.

## GSAP for advanced animation

> GSAP está permitido y recomendado en las Landing Pages cuando una interacción avanzada, timeline o comportamiento vinculado al scroll lo justifique. CSS/Tailwind sigue siendo la primera opción para animaciones simples. GSAP debe utilizarse con cleanup, responsive, `prefers-reduced-motion`, accesibilidad y rendimiento correctamente resueltos.

CSS/Tailwind remains the first choice for simple transitions, hover states, opacity/transform reveals, and straightforward state changes. Use GSAP only when the landing genuinely benefits from advanced animation such as scroll-linked transitions, section-to-section animation, complex reveals, synchronized motion, pinned sections, parallax, timelines, navigation transitions, animated state changes, or active-section effects.

When GSAP is used:

- Keep all logic isolated inside the affected landing; never add global animation scripts.
- Install and use the latest stable GSAP version compatible with the project when it is not already present.
- Register plugins such as `ScrollTrigger` explicitly and use them only when the behavior truly depends on scroll.
- Use `gsap.matchMedia()` for responsive animation setups and for `prefers-reduced-motion`; avoid accumulating manual resize conditions and listeners.
- Clean up timelines, ScrollTriggers, matchMedia contexts, observers, and listeners when appropriate.
- Avoid duplicate ScrollTriggers, unnecessary observers/listeners, layout thrashing, and resize-fragile measurements.
- Prefer animating `transform` and `opacity`; if layout measurements are needed, recalculate them on refresh/resize and keep them cheap.
- Preserve accessible, usable content without JavaScript. Reduced-motion users should see content directly in its final usable state; avoid parallax, scrub, and complex timelines for them.
- Verify Mobile, Tablet, Laptop, Desktop, preview resize, Light/Dark, keyboard navigation, console output, and breakpoint changes.

A landing task that uses GSAP is not complete if it leaves duplicate ScrollTriggers, uncleaned listeners, resize-broken animations, breakpoint bugs, content inaccessible without JavaScript, or console errors/warnings.

Reference pattern: for scroll-aware navigation, a single shared rounded indicator may move behind real in-page anchor links according to the active section. Keep links as `<a href="#section">`, keep the indicator decorative, animate its `x` and `width` (or equivalent transform/size properties), and update the active link's accessible state such as `aria-current="location"`.

## SEO (per landing, where relevant)

`title`, `description`, canonical, Open Graph/social image, indexable content with correct heading structure, and structured data only where it genuinely applies.

## Forms

Real `<label>`s, inline validation and error messaging, disabled/loading states on submit, keyboard-friendly, correct `autocomplete` attributes, accessible error announcements.

## Code quality

Favor small components when they add clarity, real reuse (not premature abstraction), descriptive names, Tailwind utilities and typed variants, and clear separation of content vs. presentation vs. interaction.

Avoid: unnecessary wrappers, prop-drilling for its own sake, JS where semantic HTML and Tailwind suffice, giant files, and — again — landing-specific styling leaking into platform-global CSS.

## TypeScript, Astro, and formatting

No change is complete while it leaves behind untyped code, unnecessary `any`, TypeScript/Astro warnings, or output that doesn't match this project's Prettier config (`.prettierrc`):

- Type everything explicitly — component `Props`, function signatures, event handlers, `<script>` blocks. No implicit types, no `any` used to bypass an error, no unjustified type casts (`as X`). Prefer a runtime type guard over a blind cast when narrowing an untyped value (e.g. a DOM `dataset` string).
- **Mandatory for every landing and every content collection, with no exceptions:** any callback that iterates a collection or array — `.map`, `.filter`, `.find`, `.forEach`, `.reduce`, `.sort`, a `getCollection`/`getStaticPaths` filter callback — must declare an explicit parameter type, even where TypeScript would infer it correctly on its own. For example, write `landings.map((landing: LandingEntry) => …)` and `categories.map((category: Category) => …)`, not `landings.map((landing) => …)`. This keeps every file's typing explicit and readable on its own, not dependent on inference from somewhere else.
- Never suppress a type error with `@ts-ignore`, `@ts-expect-error`, or an equivalent workaround unless there is a real, stated technical reason that can't be fixed at the source.
- **Reuse `src/types/`** for anything reusable — landings, categories, themes, preview/device state, page metadata, and any other shape used by more than one file. Extend an existing file there instead of redeclaring an equivalent type. A type genuinely specific to one component (nothing else needs it) stays local to that component instead of moving to `src/types/`.
- Before considering a task done, run `npx astro check`, `npx tsc --noEmit`, and `npx prettier --check .` (or `--write` on the files touched) and confirm they're clean.

## Modifying an existing landing

- Change only what the task asks for.
- Don't redesign already-approved components as a side effect.
- Don't remove existing behavior without a stated reason.
- Don't add functionality that wasn't requested.
- Don't add dependencies the task doesn't need.

## Auditing a landing

When asked to audit a landing, review and report, prioritized by impact:
architecture/isolation, **`README.md` present and accurate (structure, configuration, styles, CSS variables, available palettes, own components, and any setup needed to run — see "`README.md` — mandatory for every landing" above)**, **no arbitrary Tailwind color literals (`-[#…]`, `-[rgb(…)]`, `-[oklch(…)]`, etc.) anywhere in markup — every color resolves through a named token utility or `[var(--token)]`**, **design-token compliance (the landing's `tailwind.css` declares its own complete color/typography-scale/easing/breakpoint tokens locally, using the shared token names, with zero import of a shared file or another landing's file — see "Design tokens: same names everywhere, independent values per landing" above)**, **English filenames across `sections/`/`components/`/`data/`/`scripts/`**, **`lg:sticky` applied to every genuine short-header/long-content two-column section**, Astro usage, **Tailwind utility-first compliance and justified native-CSS exceptions**, **semantic design-token compliance (`:root`/`[data-theme="dark"]`/`@theme inline`, no raw grayscale utility standing in for a reusable role, `bg-placeholder`/`bg-placeholder-inverse` reserved for genuine technical fallback states rather than standing in for finished photography)**, **real-photography compliance (sections that need a photo use an Unsplash image sourced via the `unsplash-images` Skill, with complete persisted metadata and visible attribution)**, semantics, accessibility, responsive behavior, design/UX quality, **monochrome compliance (no chromatic colors anywhere outside the opt-in palette system — see the rule above)**, **palette-system compliance where the landing has one (`palettes` metadata matches the CSS values exactly, every palette defines both Light and Dark variants, grayscale renders identically to the pre-palette design, `scripts/palette.ts` toggles only this document's own `<html>`)**, **border and official button-system compliance**, theme (Light/Dark) correctness, performance, images, typography, animations, SEO, dead code, duplication, unnecessary dependencies.

## After making changes

1. Re-read the modified code.
2. Check for obvious errors/type issues.
3. Run available verification (`npm run build`, `npm run astro -- check`).
4. Check the result across Mobile/Tablet/Desktop.
5. Confirm no horizontal overflow was introduced.
6. Check Light/Dark if the landing supports both.
7. Confirm basic accessibility wasn't regressed.
8. Confirm every button maps to `primary | secondary | ghost | tertiary`, all five states work, and only `tertiary` may have a border.
9. Confirm badges, labels, cards, and visually equivalent grouped surfaces have no border.
10. Audit landing CSS files and `<style>` blocks; **confirm no `@layer components` exists** — all styling must be Tailwind utilities in markup, not component classes.
11. Confirm every remaining native-CSS exception is minimal, local, and documented.
12. Confirm responsive, theme, interactive, and reduced-motion styling uses Tailwind variants.
13. Confirm theming uses the semantic token system (`:root` / `[data-theme="dark"]` / `@theme inline`) rather than `dark:`-paired utilities, and that any remaining `bg-placeholder`/`bg-placeholder-inverse` usage is a stated technical fallback, not a stand-in for finished photography.
    13b. Confirm every section that needs a photograph uses a real Unsplash image sourced via the `unsplash-images` Skill — persisted metadata complete, visible attribution present, `photo.urls`-derived URL hotlinked, no `api.unsplash.com` call anywhere in production code.
    13c. If the landing has an opt-in color-palette system: confirm `palettes` in its metadata JSON matches the CSS values exactly, every palette id has both a Light and a `[data-theme="dark"]` variant, grayscale renders identically to the pre-palette design, and `scripts/palette.ts` toggles `data-palette` on this landing's own `document.documentElement` only.
14. **Confirm the landing's `tailwind.css` declares its own complete color, typography-scale, easing, and named-breakpoint/container tokens locally (reusing the shared token names), with zero `@import` of a shared file or another landing's file, and zero `--radius-*`/`--shadow-*` custom tokens.**
15. **Confirm the landing's `<head>` loads Wix Madefor Text via the shared `<link>` block and nothing else** — no second font, no `@import` font load.
16. **Confirm every file in the landing (`sections/`, `components/`, `data/`, `scripts/`) has an English filename** — ids/anchors/copy stay in the landing's own content language.
17. **Confirm every two-column "short header + considerably longer content" section uses `lg:sticky` (1024px) on the short column, matching its `lg:grid-cols-…` split** — this is the default treatment for that pattern, not an optional extra.
18. Confirm no other landing or the platform shell was touched, and that the landing depends on nothing outside its own folder.
19. **Confirm `README.md` exists and reflects the current state** — folder structure, configuration, styles, CSS variables, available palettes, own components — updating it if the task changed any of these.
20. **Grep the touched files for arbitrary color literals** (`-[#`, `-[rgb`, `-[rgba`, `-[oklch`, `-[hsl` inside a `class`/`class:list`) — zero matches; every color must resolve through a token.
21. Report the files changed and the notable decisions made.

Work conservatively on existing code; work creatively when asked to design something new. The goal is always: **visually excellent, technically solid landing pages that never compromise the isolation, performance, or maintainability of the platform.**
