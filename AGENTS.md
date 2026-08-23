# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **platform for exposing, demoing, and distributing Astro Landing Pages** — a catalog/gallery of many independent landing page designs grouped by category, not a single landing page. Astro v7, static output, Node >= 22.12.0. No component-framework integrations by default (Astro components only) — a landing may introduce one locally only with real justification. The standing styling and icon dependencies are Tailwind CSS and `@lucide/astro`; see the `astro-landing-pages` Skill for their binding rules.

> Todas las Landing Pages deben estilizarse utilizando la última versión estable de Tailwind CSS. El CSS nativo está prohibido como solución habitual y únicamente puede utilizarse como excepción técnica justificada cuando Tailwind no pueda resolver correctamente una necesidad concreta.

This Tailwind rule applies only to `src/landings/**`; it does not authorize migrating the catalog, preview toolbar, platform components, or platform-global styles. Use the current official Tailwind/Astro integration documented in the Skill and do not introduce legacy configuration patterns.

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

TypeScript and JavaScript inside a landing are for logic, types, data, and behavior—not disguised stylesheets. A landing creation, modification, or audit is incomplete while it introduces or leaves behind an unnecessary Tailwind class-string abstraction.

**Every landing is strictly monochrome** — white, black, and grayscale only, no chromatic colors anywhere, in either theme. This is deliberate: the platform is a gallery of design ideas/structures to download and personalize, not a set of finished brand identities — see the `astro-landing-pages` Skill for the full rule.

Landing-specific work (creating, modifying, auditing a landing) should generally go through the `landing-page-specialist` subagent (`.claude/agents/landing-page-specialist.md`), which in turn uses the `astro-landing-pages` Skill (`.claude/skills/astro-landing-pages/SKILL.md`) for the detailed rules. Read the Skill before doing landing work even outside that agent.

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro ...    # Run Astro CLI commands (e.g. astro add, astro check)
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

### The core rule: isolation

Each landing is an independent module. A change to one landing must never leak into another landing, the catalog, or platform-global styles/components. See the `astro-landing-pages` Skill for the full detail.

### The other core rule: one shared design system, many different designs

All Landing Pages belong to the same visual system. They must use exactly the same semantic tokens, color variables, Light/Dark values, grayscale scale, typography scale, breakpoints, and fundamental Tailwind rules — declared once in `src/styles/landing-design-system.css` and imported unchanged by every landing. A new Landing Page must never introduce, remove, rename, or modify a global design-system token; any change to that contract is a global decision applied to every landing at once, never a per-landing choice. Differentiation between landings comes from composition, architecture, hierarchy, layout, spacing, content, interaction, and motion — never from inventing a separate color identity or an independent typography scale. **MISMO DESIGN SYSTEM, DISTINTO DISEÑO.** Full detail, the exact locked token contract, and the audit checklist live in the `astro-landing-pages` Skill.

### Where things live

```
src/
├── content.config.ts              # `landings` content collection (glob loader over src/content/landings/*.json)
├── content/landings/*.json        # one metadata file per landing — id/filename == slug
├── data/categories.ts             # fixed taxonomy: ecommerce, portfolio, saas, blog, business
├── landings/[slug]/               # one folder per landing — fully self-contained implementation
│   └── index.astro                # the landing's own root component (full <html> document)
├── layouts/
│   ├── Layout.astro                # catalog shell (used by platform pages only)
│   └── PreviewLayout.astro         # bare shell for the preview route
├── components/platform/           # catalog-only components (Navbar, LandingCard, PreviewShell, ...) — never used inside a landing
├── pages/
│   ├── index.astro                 # catalog home
│   └── landings/
│       ├── index.astro             # /landings — full grid + filters
│       ├── category/[category].astro  # /landings/category/[category]
│       └── [slug]/
│           ├── index.astro         # /landings/[slug] — detail page
│           ├── preview.astro       # /landings/[slug]/preview — toolbar + iframe demo
│           └── render.astro        # /landings/[slug]/render — isolated raw render (iframe target only)
└── styles/
    ├── global.css                  # platform-only tokens/reset — a landing never imports this
    └── landing-design-system.css   # shared Landing Pages design-system contract (colors, Light/Dark, fluid type scale, base structural tokens) — every landing imports this, none redefines it; see the astro-landing-pages Skill
```

**Metadata vs. implementation split:** `src/content/landings/[slug].json` (queryable via `getCollection('landings')`) holds catalog metadata (category, tags, thumbnail, featured, status, dates...). `src/landings/[slug]/` holds the actual buildable page and is intentionally decoupled from the platform so it stays copyable/downloadable.

**Adding a landing** = add `src/landings/[new-slug]/index.astro` (+ its own `components/`, `sections/`, `styles/`, `assets/`, `data/`, `README.md` inside that folder) and a matching `src/content/landings/[new-slug].json`. No registry file to update — `render.astro` resolves the implementation via `import.meta.glob('/src/landings/*/index.astro')`. Every file inside the landing folder is named in English (ids/anchors/copy still follow the landing's own content language) — see the `astro-landing-pages` Skill.

### Preview / demo experience

`/landings/[slug]/preview` renders the `PreviewShell` platform component, which embeds `/landings/[slug]/render` (the landing's raw, isolated output) inside an `<iframe>`:

- **Device switching** resizes the iframe's container to real Mobile/Tablet/Desktop widths — actual responsive behavior, not faked CSS classes.
- **Theme switching** `postMessage`s into the iframe; each landing owns a small script that toggles `data-theme` on **its own** `document.documentElement`, scoped to that iframe's document. The platform's own theme is never touched by a landing's theme.
- A **code panel** (`CodePanel`/`CodeExplorer`) is scaffolded but intentionally not wired to real file reading/syntax highlighting/download yet — that's a later phase.

### Route collision note

Category listing is at `/landings/category/[category]` (not `/landings/[category]`) specifically so it never collides with the `/landings/[slug]` detail route — Astro resolves the static `category` segment before the dynamic `[slug]` one.

### Shared types: `src/types/`

Reusable types/interfaces/contracts (landings, categories, themes, preview, metadata, and other cross-cutting shapes) live centrally in `src/types/`, one file per domain, re-exported through `src/types/index.ts`. Component-specific types that no other file needs stay next to that component instead. When a new shared model or structure related to landings appears, extend or reuse `src/types/` — don't redeclare an equivalent type elsewhere.

## Code quality: TypeScript, Astro, and formatting

No task is done while it leaves behind untyped code, unnecessary `any`, TypeScript/Astro warnings, or Prettier-noncompliant formatting:

- Every new or modified file must be fully and explicitly typed — no implicit types, no `any` used to silence an error, no unjustified type casts.
- **Every callback that iterates a collection or array — `.map`, `.filter`, `.find`, `.forEach`, `.reduce`, `.sort`, a `getCollection`/`getStaticPaths` filter callback, etc. — must declare an explicit parameter type**, even when TypeScript could infer it correctly from context. This applies without exception to any code that creates or touches a landing (`src/landings/[slug]/`), its metadata (`src/content/landings/[slug].json` / the `landings` collection), or any other content collection added later. Type the parameter with the real shape (e.g. `(landing: LandingEntry) => …`, `(category: Category) => …`), reusing `src/types/` — never widen it to `any` just to satisfy the annotation.
- Don't suppress errors with `@ts-ignore`, `@ts-expect-error`, or equivalent — fix the underlying cause. Only bypass this with a real, stated technical justification.
- Reuse or extend `src/types/` for shared shapes instead of duplicating a type inline.
- Before considering a change finished, run and confirm clean: `npx astro check`, `npx tsc --noEmit`, and `npx prettier --check .` (or `--write` on the files you touched).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
