---
name: semantic-accessibility-seo
description: Deep reference on HTML5 semantics, web accessibility (WCAG, WAI-ARIA), screen readers, keyboard navigation, focus management, accessible forms, HTML attributes, technical SEO, on-page SEO, AI Search/answer-engine optimization, structured data (schema.org), and SEO for LMS/educational content. Use whenever a task touches HTML quality, semantic markup, accessibility, or SEO on any page or component in this project.
---

# Semantic HTML, Accessibility & SEO

Web-standards-first reference for HTML semantics, accessibility, and SEO across this repository — landings, platform pages, and shared components alike. See [AGENTS.md](../../../AGENTS.md) for the platform's architecture. This reference is grounded primarily in the HTML spec, WCAG (current version), WAI-ARIA, and schema.org — with Astro-specific notes only where the framework changes how to apply them.

## Fundamental principle

**Correct native HTML first. ARIA only when no native element expresses the same semantics.**

Never use ARIA to patch an incorrect HTML structure when a native element already solves it:

- `<button>` before `<div role="button">`.
- `<nav>` before `<div role="navigation">`.
- `<main>` before `<div role="main">`.
- `<header>`, `<footer>`, `<aside>`, `<article>`, `<section>` before their `role="..."` equivalents.
- `<figure>`/`<figcaption>` before manually-labeled image blocks.
- `<details>`/`<summary>` before a JS-built accordion when a native disclosure will do.
- `<dialog>` before a hand-rolled modal, when its native behavior (focus trapping, `::backdrop`, ESC to close) fits the case.

## Landing styling constraint: Tailwind CSS

When this Skill is used on a file inside `src/landings/[slug]/**`, the `astro-landing-pages` Skill is also binding.

> Todas las Landing Pages deben estilizarse utilizando la última versión estable de Tailwind CSS. El CSS nativo está prohibido como solución habitual y únicamente puede utilizarse como excepción técnica justificada cuando Tailwind no pueda resolver correctamente una necesidad concreta.

Implement focus, visibility, contrast, motion, responsive, form-state, and other accessibility styling in landings with Tailwind utilities and variants such as `focus-visible:`, `disabled:`, `aria-*:`, `dark:`, `motion-reduce:`, and responsive prefixes. Do not introduce native CSS when Tailwind can express the requirement.

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

Put element-specific accessibility utilities directly in Astro markup. Use a real Astro component for reused structure or behavior, and use official Tailwind extensions only for the purpose they are designed to serve. Do not introduce class-only constants, style-only variant objects, external blocks of Tailwind strings, or renamed equivalents in TypeScript/JavaScript. A landing accessibility task is incomplete while such unnecessary abstractions remain in the touched implementation.

A native-CSS exception must identify a real Tailwind limitation, remain minimal and local, include an adjacent justification comment, and be documented in the landing README and handoff. This rule does not migrate or change platform/catalog styling outside a separately stated scope.

### Landing responsive constraint: Tailwind CSS v4 mobile-first

> Las Landing Pages deben construirse utilizando el sistema responsive mobile-first nativo de Tailwind CSS. Las utilities sin prefijo representan Mobile y los prefijos `sm:`, `md:`, `lg:`, `xl:` y `2xl:` aplican estilos desde ese breakpoint hacia arriba. Está prohibido utilizar breakpoints arbitrarios como `min-[1400px]:*`, `min-[1024px]:*` o equivalentes cuando la necesidad pueda resolverse mediante los breakpoints nativos de Tailwind. Si el proyecto necesita realmente un breakpoint adicional reutilizable, debe declararse mediante `--breakpoint-*` dentro de `@theme` y utilizarse posteriormente como una variante Tailwind normal. Utilizar Container Queries cuando el diseño dependa del ancho disponible para un componente en lugar del ancho completo del viewport.

Accessibility fixes on landings that involve responsive behavior — focus indicators that must remain perceivable at every size, hit-area growth on touch, error/live-region layout on Mobile, reduced-motion styling per breakpoint, responsive touch targets, keyboard-friendly navigation across breakpoints — must be resolved through the Tailwind v4 mobile-first system: unprefixed utilities for Mobile, `sm:`/`md:`/`lg:`/`xl:`/`2xl:` for viewport adaptations, `max-*` variants for ranges, `@container` + `@sm:`/`@md:`/`@max-*`/named containers for component-driven layout, and `@theme` (`--breakpoint-*`, `--container-*`) for reusable custom breakpoints in `rem`. Do not introduce `min-[Xpx]:` / `max-[Xpx]:` substitutes when the native system fits, do not target specific devices, do not add manual media queries where a Tailwind variant works, and do not declare breakpoints in TypeScript. Touch targets remain ≥44×44px; zoom must remain enabled; overlays must be dismissible via keyboard and touch at every breakpoint. Preview-shell resize behaves like a container change — prefer container queries where a component's behavior actually depends on its own width. The `astro-landing-pages` Skill holds the full responsive decision sequence and audit rules; when a landing is touched, treat that Skill as binding.

## HTML5 semantic elements

Use each for what it means, not for its default styling (presentation belongs to the active styling system—Tailwind utilities inside landings):

- `header` — introductory/navigational content for its nearest sectioning ancestor (or the page, as the banner landmark when it's a direct child of `body`).
- `nav` — a block of major navigation links. Not every group of links is a `nav` (e.g., footer link lists are often just lists).
- `main` — the one primary content region of the document. Exactly one per page, not nested inside `article`/`aside`/`nav`/`header`/`footer`.
- `section` — a thematic grouping of content that would appear in a document outline; it should generally have a heading. Don't use `section` as a generic styling wrapper — that's what `div` is for.
- `article` — self-contained content that would make sense distributed on its own (a blog post, a testimonial, a card in a feed).
- `aside` — content tangentially related to the surrounding content (pull quotes, related links, sidebars) — not just "the sidebar div."
- `footer` — footer content for its nearest sectioning ancestor (or the page's contentinfo).
- `figure`/`figcaption` — self-contained illustrative content (image, diagram, code snippet) with an optional caption. The figure must make sense referenced from the main flow.
- `details`/`summary` — native disclosure widget; `summary` is the always-visible trigger.
- `dialog` — native modal/non-modal dialog; use `.showModal()` for true modals (gets focus trapping and `::backdrop` for free).
- `time` — machine-readable dates/durations via `datetime`.
- `address` — contact information for the nearest `article`/`body`, not a generic postal-address label.
- `mark` — highlighted/relevant text (e.g., search-term matches), not decorative highlighting.
- `blockquote`/`cite` — quoted content and its source.
- `picture`/`source` — art-directed or format-negotiated responsive images.
- `progress`/`meter` — task completion vs. a scalar value within a range, respectively — not the same thing.
- Lists (`ul`/`ol`/`dl`) for actual list content — including nav menus, card grids, and step sequences. A repeated set of sibling items is usually a list.
- Tables (`table`/`caption`/`thead`/`tbody`/`th[scope]`) only for tabular data, never for layout.

Avoid: `div`/`span` as a default reflex when a semantic element fits; wrapper divs with no structural or styling purpose; interactive behavior implemented on non-interactive elements (`<div onclick>` instead of `<button>`).

## Semantic structure & landmarks

- Exactly one `main` per page.
- Landmarks (`header`/`nav`/`main`/`aside`/`footer`) should be distinguishable; when there are multiple of the same landmark type (e.g., two `nav`s), label each with `aria-label` so they're distinguishable in landmark navigation.
- Content should form a logical outline via headings and sectioning elements — structure should hold up even with CSS removed.
- A `section`/`article` typically starts with a heading that names it; a sectioning element with no heading and no independent identity is often better as a `div`.

## Headings

- One logical `h1` describing the page/document's primary subject.
- Nest in order: `h1 → h2 → h3`, no arbitrary skipping (`h2 → h4`).
- Headings exist for document structure and screen-reader/SEO navigation, not for visual size — control size with the active styling system (Tailwind utilities inside landings), not by picking a different heading level.
- Don't convert non-heading text into a heading purely for SEO weight, and don't skip a heading level just because a smaller/larger visual size is wanted at that point.

## HTML attributes

| Attribute              | When obligatory                              | When recommended                              | Notes                                                                          |
| ---------------------- | -------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------ |
| `lang`                 | On `<html>`, always                          | On any inline content in a different language | Missing `lang` breaks screen-reader pronunciation                              |
| `dir`                  | When content is RTL                          | —                                             | Rare in this project unless i18n is introduced                                 |
| `alt`                  | On every `<img>`                             | —                                             | `alt=""` for decorative, descriptive for informative/functional; never omit    |
| `width`/`height`       | On `<img>`/`<video>`                         | Always                                        | Prevents CLS by reserving intrinsic space                                      |
| `loading="lazy"`       | Below-the-fold images                        | —                                             | Never on the LCP/hero image                                                    |
| `decoding="async"`     | Non-critical images                          | —                                             |                                                                                |
| `fetchpriority="high"` | On the LCP image                             | —                                             | Use sparingly, only the true LCP candidate                                     |
| `href`                 | On every real link                           | —                                             | An `<a>` without `href` is not a link — not focusable, not a link semantically |
| `target="_blank"`      | Only when justified                          | —                                             | Must pair with `rel="noopener"` (or `noreferrer`)                              |
| `rel`                  | With `target="_blank"`                       | On external links generally                   | `noopener` prevents reverse-tabnabbing                                         |
| `autocomplete`         | Identity/contact/payment fields              | All predictable form fields                   | Improves both SEO-adjacent UX and accessibility                                |
| `inputmode`            | Numeric/tel/email fields on mobile           | —                                             | Improves the mobile keyboard shown, doesn't replace `type`                     |
| `type` (button)        | Every `<button>`                             | —                                             | Default is `submit`, which is often wrong inside forms                         |
| `tabindex`             | Only `0` or `-1`                             | —                                             | Never a positive value — it breaks natural tab order                           |
| `hidden`               | To remove from both visual and a11y tree     | —                                             | Different from `aria-hidden` (visual removal only via CSS)                     |
| `inert`                | To block interaction with background content | Behind an open modal                          | Removes the subtree from focus and AT                                          |
| `popover`              | Native popovers                              | —                                             | Gets light-dismiss and top-layer behavior for free                             |
| `role`/`aria-*`        | Only to fill a real semantic gap             | —                                             | See ARIA reference below                                                       |

An attribute is **redundant** when it restates what the element already implies (`role="button"` on `<button>`); **incorrect** when it contradicts the element's native behavior or state; **missing** when its absence breaks accessibility, layout stability, or crawlability.

## Images

- Decorative images: `alt=""` so assistive tech skips them entirely. Never omit `alt` — that reads the filename or URL aloud.
- Informative images: `alt` describes the content/meaning, concise, not "image of..." or "picture of...".
- Functional images (an icon inside a link/button that is the only content): `alt` describes the action/destination, not the icon's appearance.
- Linked images: the `alt` should describe the destination, not just the image.
- SVG: give meaning via `role="img"` + `aria-label`, or an internal `<title>`; `aria-hidden="true"` for purely decorative SVG (e.g., an icon next to visible text that already conveys the meaning).
- Use `figure`/`figcaption` when an image needs a visible caption tied to it programmatically.
- Responsive images: `srcset`/`sizes`, or `<picture>`/`<source>` for art direction or format fallback (prefer Astro's `Image`/`Picture` components, which generate these automatically).
- Never write a redundant or artificial alt text just to pad SEO — that hurts both AT users and content quality.

## Links

- Link text must be understandable out of context — avoid bare "click here" / "read more" unless immediately adjacent context makes the destination unambiguous (and prefer fixing it anyway).
- No empty links (`<a href="#">` with no accessible name).
- Icon-only links need an `aria-label` describing the destination/action.
- External links: consider a visible/programmatic indicator when it matters to the user; always pair `target="_blank"` with `rel="noopener"`.
- Links must be reachable and operable via keyboard (native `<a>` gets this for free — don't break it with `tabindex="-1"` or JS that swallows Enter).

## Buttons

- Navigation → `<a href>`. Actions (toggle, submit, open/close, mutate state) → `<button>`. Don't swap these roles.
- `type="button"` for non-submitting buttons inside a `<form>` (the implicit default is `submit`, a common bug source).
- `type="submit"` for the form's actual submit action.
- Disabled buttons use the `disabled` attribute, not just a visual style — a visually "disabled" but clickable button is a trap for everyone.
- Icon-only buttons need `aria-label`.
- Toggle/expand-collapse buttons should reflect state via `aria-expanded` (menus, accordions, disclosure triggers) or `aria-pressed` (true toggle buttons).
- Custom interactive controls built without a native element need the full ARIA pattern including keyboard handling — prefer the native element instead whenever one exists.

## Forms

- Every input has a visible `<label>` associated via `for`/`id` (or wraps the input). Placeholder text is never a substitute for a label — it disappears on input and often fails contrast.
- Group related controls (radio sets, checkbox sets) with `<fieldset>` + `<legend>`.
- Use correct `autocomplete` values on identity/contact/payment fields.
- Use `inputmode` to improve the mobile keyboard.
- Errors: associate the error message with its field via `aria-describedby`, mark the field `aria-invalid="true"`, and ensure the error is announced (focus management or a live region) — not just a color change.
- `required` fields get the `required` attribute plus a visible indicator (not color alone).
- Submit buttons reflect loading/disabled state during submission, and success/failure is announced, not only shown visually.
- The entire form must be operable by keyboard alone, start to submit.

## Keyboard

Expected behavior:

- `Tab`/`Shift+Tab` move focus forward/backward through interactive elements in a logical order.
- `Enter` activates links and buttons; `Space` activates buttons and toggles checkboxes.
- `Escape` dismisses overlays (menus, dialogs, popovers).
- Arrow keys move within composite widgets (tabs, menus, radio groups) per the relevant ARIA pattern.

Never consider a component accessible because it "works with the mouse." Explicitly test and fix:

- Keyboard traps (focus enters but can't leave via keyboard).
- Custom controls with no keyboard handling at all.
- Focus silently lost after a DOM update (element removed/re-rendered while focused).
- Focus landing on a visually hidden element.
- Broken tab order from `tabindex` values other than `0`/`-1`.

## Focus management

- Focus must always be visible — never remove the outline (`outline: none`) without a clear, equally visible replacement (a custom focus ring is fine; nothing is not).
- Focus order should follow visual/logical reading order.
- Opening a dialog/menu/drawer moves focus into it; closing it restores focus to the triggering element.
- On route/view changes, decide where initial focus should land (often the new heading or the main content) rather than leaving it stranded.
- `inert` on background content behind an open modal prevents it from being focused or read by AT while hidden behind the overlay.

## Skip links

Provide a "Skip to main content" (and, for extensive nav, "Skip to navigation") link as the first focusable element on pages with substantial navigation — visible on focus, targeting `main` (or the nav landmark).

## Screen readers

Think explicitly about NVDA, JAWS, VoiceOver, and TalkBack when reviewing any important component. For each interactive element, verify what gets announced:

- **Accessible name** — what is it called.
- **Role** — what kind of control it is.
- **State** — expanded/collapsed, checked, selected, pressed, invalid, busy.
- **Value** — current value for inputs/sliders/progress.
- **Description** — supplementary help text, if any.

Dynamic content that appears without a page reload (toasts, async validation, live search results) needs a live region (`aria-live="polite"` for non-urgent updates, `assertive` for critical/blocking ones) so it's actually announced. Use `aria-atomic="true"` when the whole region should be re-read on change, not just the diff.

Navigation by landmark and by heading (how many screen-reader users skim a page) must produce a coherent, useful outline.

## Accessible name computation

Priority order (highest wins):

1. `aria-labelledby` (if present, overrides everything else).
2. `aria-label`.
3. Associated `<label>` (for form controls) or visible text content (for links/buttons).
4. Other native naming (e.g., `alt` on `<img>`, `title` as a last resort).

Don't add `aria-label` when a correct visible label/text content already provides a good accessible name — that's redundant and risks the two falling out of sync. `aria-describedby` adds supplementary description; it never replaces the name.

## ARIA reference

| Attribute                 | Purpose                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `aria-label`              | Accessible name when no visible text can serve as one                                                            |
| `aria-labelledby`         | Accessible name sourced from another element's text; highest priority                                            |
| `aria-describedby`        | Supplementary description, not a name replacement                                                                |
| `aria-expanded`           | Disclosure/collapsible state on the trigger                                                                      |
| `aria-controls`           | Points from a trigger to the region it controls                                                                  |
| `aria-current`            | Marks the current item in a set (nav, steps, pagination)                                                         |
| `aria-hidden`             | Removes an element from the accessibility tree (visual removal is separate — a `hidden` element is also removed) |
| `aria-live`/`aria-atomic` | Announce dynamic content changes                                                                                 |
| `aria-selected`           | Selection state within a listbox/tab/grid pattern                                                                |
| `aria-pressed`            | Toggle-button state                                                                                              |
| `aria-invalid`            | Validation state on a form field                                                                                 |
| `aria-required`           | Redundant if `required` is present — prefer the native attribute                                                 |
| `aria-busy`               | Marks a region as being updated                                                                                  |

Rules: no ARIA is better than incorrect ARIA. Never use ARIA to contradict an element's native role or state. Never add a `role` that restates the element's implicit role. Validate that `aria-controls`/`aria-labelledby`/`aria-describedby` point to IDs that actually exist.

## Interactive component patterns

Apply the relevant WAI-ARIA Authoring Practices pattern — expected keyboard behavior, roles, and states — for:

- **Navbar/dropdowns** — trigger with `aria-expanded`/`aria-haspopup`, `Escape` closes, arrow keys move within the menu, focus returns to the trigger on close.
- **Mega menus** — same as dropdowns, at larger scale; verify tab order doesn't trap users inside a huge menu.
- **Accordions** — trigger is a `<button>` with `aria-expanded`, ideally inside `<h*>`; prefer native `<details>/<summary>` when styling allows.
- **Tabs** — `role="tablist"`/`tab`/`tabpanel`, arrow keys move between tabs, only the active tab is in the tab order (`tabindex="0"` on active, `-1` on others).
- **Carousels/sliders** — keyboard-operable controls, pause on hover/focus, respects `prefers-reduced-motion`, announces slide changes if content is meaningful.
- **Modals/dialogs** — focus trapped inside while open, `Escape` closes, focus restored on close; prefer native `<dialog>`.
- **Tooltips** — appear on both hover and focus, dismissible with `Escape`, don't hide essential content only in the tooltip.
- **Popovers** — prefer the native `popover` attribute for light-dismiss behavior.
- **Combobox/autocomplete** — correct `role="combobox"` wiring, arrow keys navigate suggestions, `Enter` selects, `Escape` closes.
- **Search** — a real `<form>`/`<input type="search">`, clear labeling, results announced.
- **Toasts/notifications** — live region, don't steal focus unless action is required, auto-dismiss timing must be generous or pausable.
- **Pagination** — real links/buttons, `aria-current="page"` on the active page.
- **Filters** — clear labels, announced result-count changes, keyboard-operable.

## Mobile accessibility

- Touch targets at least ~44×44px.
- Never block zoom (`user-scalable=no` is prohibited; `maximum-scale` must allow zooming).
- Don't lock orientation unless the content functionally requires it.
- Never convey information only via `:hover` — provide a touch-equivalent.
- Modals/overlays must be dismissible on touch devices (visible close control, not gesture-only).
- Use appropriate `inputmode`/`type` so the right mobile keyboard appears.

## Motion

- Respect `prefers-reduced-motion`: reduce or remove non-essential animation for users who request it.
- Animation must never block reading, steal/move focus unexpectedly, or hide essential content.
- Nothing should auto-play indefinitely without a way to pause it.
- Information should never depend solely on movement to be communicated.

## Color & contrast

- Text contrast: WCAG AA minimums — 4.5:1 for normal text, 3:1 for large text (≥18pt or ≥14pt bold).
- UI component/graphical-object contrast: 3:1 against adjacent colors.
- Every interactive state (hover, focus, disabled, selected, error, success) must independently meet contrast requirements — don't only test the default state.
- Information must never be conveyed by color alone — pair it with an icon, text, or pattern (e.g., error state = red **and** an icon **and** text, not red alone).

## Technical SEO

- `<title>` — unique per page, descriptive, roughly 50–60 characters.
- `<meta name="description">` — unique, compelling, roughly 120–160 characters.
- Canonical URL — one per page, self-referencing unless there's a real duplicate-content reason not to.
- `robots` meta — default to indexable; `noindex` only with a clear reason.
- Sitemap — all indexable pages included, kept in sync with routing.
- Open Graph — `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
- Twitter Card — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- `hreflang` — only if/when the project actually ships multilingual content.
- Clean, meaningful URLs/slugs; correct status codes (200/301/404); no redirect chains.
- Heading structure and internal linking must be crawlable and sensible.
- Image optimization (correct `alt`, dimensions, modern formats) doubles as an SEO signal.
- Performance: LCP, CLS, INP all factor into ranking and real user experience.

## On-page SEO

- Align content with the actual search intent behind the page's target queries.
- `title`/`H1` should share the same topic without being mechanically identical.
- Heading hierarchy should mirror the content's real structure, not be reverse-engineered from a keyword list.
- Prioritize useful, original, sufficiently thorough content — avoid thin or duplicate content across pages.
- Make entities and context explicit rather than assumed.
- Keywords appear naturally in headings and early content — never stuffed.
- Internal links use descriptive anchor text, not "click here."

## SEO for Google

Prioritize content that is useful, clear, original, well-structured, accessible, contextualized, and easy to crawl and understand. Avoid manipulation techniques: keyword stuffing, hidden text, cloaking, link schemes, doorway pages.

## SEO for AI search

Optimize so answer-engine/AI systems can extract and cite the content correctly. Favor:

- Clear, direct answers to the questions a reader would actually ask.
- Logical structure with descriptive, specific headings.
- Precise definitions of key terms.
- Explicit context: who, what, where, when, how, why — stated, not implied.
- Identifiable entities (named people, products, organizations, places).
- Lists and tables where they genuinely help structure information.
- Real FAQ content backed by content that's actually visible on the page — never fabricated.
- Self-contained sections that make sense extracted on their own.
- Explicit relationships between concepts rather than assumed reader inference.

Don't rewrite all content wholesale for AI consumption — preserve the page's tone and intent. Avoid ambiguous or excessively promotional language where it would hurt comprehension.

## Structured data (JSON-LD)

Always emit structured data as JSON-LD in a `<script type="application/ld+json">` block, never as microdata sprinkled through the markup.

Relevant schema.org types and when they apply:

- **Organization** / **Person** — identifies the site owner/author.
- **WebSite** / **WebPage** — base page-level markup.
- **BreadcrumbList** — when the page has a real breadcrumb trail.
- **Article** / **BlogPosting** — genuine articles/posts with visible author/date/body.
- **Product** / **Offer** — only when a real product/price exists on the page.
- **FAQPage** — only when the page shows a real, visible FAQ.
- **LocalBusiness** — only for a page representing an actual local business.
- **Service** — a described service offering.
- **Event** — a real event with date/location.
- **Course** / **LearningResource** — see LMS section below.

**Never add structured data that doesn't correspond to real, visible page content.** Adding `FAQPage` without a visible FAQ, `Product` without an actual product, `Course` without an actual course, or `Organization` when it doesn't apply is prohibited — it's misleading to search engines and can trigger a manual action.

## SEO for LMS / educational content

For course, module, lesson, or other educational content, also review:

- Clear curriculum hierarchy: **Course → Module → Lesson → Section → Activity/resource**.
- Breadcrumbs reflecting that hierarchy.
- `Course`, `LearningResource`, and (when applicable) `EducationalOccupationalProgram` schema.
- Instructor/author information.
- Level, duration, language.
- Learning objectives, prerequisites, learning outcomes.
- Related content and prev/next navigation between lessons.
- Publish date and last-updated date.
- Progress indicators where the platform tracks them.

Avoid educational content shipped with a generic content template and no real semantic structure — the curriculum hierarchy should be visible in the markup, not just the visual design.

## Educational metadata

When relevant and accurate: `educationalLevel`, `teaches`, `assesses`, `educationalAlignment`, `learningResourceType`, `timeRequired`, `typicalAgeRange`, `inLanguage`.

## SEO & accessibility synergy

The two frequently reinforce each other — treat improvements to one as often improving the other:

- Correct heading hierarchy helps both screen-reader navigation and crawler understanding.
- Meaningful `alt` text helps both AT users and image search.
- Clean landmark structure helps both AT navigation and content parsing.
- Semantic HTML in general is easier for browsers, people, assistive technology, and search/AI systems to understand — that's the whole point of this reference.

Never trade one for the other: don't ship an SEO "fix" that degrades accessibility, and don't add ARIA in a way that confuses crawlers about content structure.

## Astro-specific guidance

- Use layouts and `<slot />` for structural composition; keep `<html>`/`<head>`/metadata concerns in layouts, not duplicated per page.
- Favor plain `.astro` components; reach for framework islands only where genuine client interactivity is required, and only with the smallest `client:*` directive that works.
- Use Astro's `Image`/`Picture` components for automatic image optimization (dimensions, formats, responsive output) rather than hand-rolled `<img>` tags.
- Use content collections for structured, queryable metadata (titles, descriptions, dates, authors) rather than hardcoding it inline.
- Astro's static output means most pages are pre-rendered — lean on that for crawlability rather than client-rendered content that a crawler might not execute.
- Check the installed Astro version in `package.json` before relying on a recently introduced API — don't assume behavior from memory.

## Audit methodology

When auditing, check at least:

1. HTML5 element correctness.
2. Semantic structure/landmarks.
3. Landmark labeling (when duplicated).
4. Heading hierarchy.
5. HTML attributes (missing/incorrect/redundant).
6. Links (text, empty links, external-link handling).
7. Buttons (native use, type, disabled state, accessible name).
8. Forms (labels, errors, autocomplete, keyboard).
9. Images (alt correctness, dimensions, lazy loading).
10. SVG accessibility.
11. Keyboard operability.
12. Focus (visibility, order, management, restoration).
13. Screen-reader behavior (names, roles, states, live regions).
14. ARIA correctness (no redundancy/contradiction).
15. Color contrast across states.
16. Motion/`prefers-reduced-motion`.
17. Responsive accessibility (Mobile/Tablet/Desktop).
18. Metadata (title, description, canonical, robots).
19. Technical SEO.
20. On-page SEO.
21. Structured data validity and content match.
22. AI-search readability.
23. LMS/educational SEO, when applicable.
24. Performance factors relevant to SEO (LCP, CLS, INP).
25. For landings, Tailwind utility-first compliance and documented justification for every native-CSS exception.

## Severity classification

- **Crítico** — blocks access to core functionality for assistive-technology or keyboard users, or blocks indexing of key content, or violates a hard legal/compliance requirement. Fix immediately. Examples: no keyboard access to a primary action, missing `lang` on `<html>`, content that only renders after unexecuted client JS a crawler won't run.
- **Alto** — significantly degrades the experience for AT users or meaningfully harms SEO. Fix promptly. Examples: form inputs with no label, a heading jump from `h1` to `h4`, missing `alt` on an informative image, missing canonical on an indexable page.
- **Medio** — causes real friction but a workaround exists, or represents a missed SEO opportunity. Plan the fix. Examples: missing `autocomplete`, vague link text ("click here"), missing Open Graph tags.
- **Bajo** — minor deviation from best practice with small real-world impact. Fix opportunistically when touching the file. Examples: a redundant ARIA attribute, a missing `figcaption` where one would help, a meta description slightly over length.
- **Mejora** — not a defect, an enhancement opportunity for future work. Examples: adding structured data where none currently exists but would be valid, adding a skip link, refining alt-text quality.

Prioritize issues that block usage entirely, block screen readers, block keyboard navigation, invalidate forms, harm indexing, or introduce incorrect semantics — these outrank purely cosmetic or aspirational improvements.

## Restrictions

Do not:

- Add ARIA unnecessarily — if native HTML already expresses it, don't.
- Fill markup with attributes that add no real value.
- Add redundant roles on elements that already imply that role.
- Rewrite content for SEO purposes without a stated, justified reason.
- Sacrifice UX or content clarity to insert keywords.
- Add structured data that doesn't correspond to real, visible content.
- Change visual design beyond what's required to fix the identified problem (e.g., a contrast fix may require a color change — a full restyle does not follow from that).
- Convert a static component into a client island just to attach an accessibility attribute that doesn't require interactivity.
