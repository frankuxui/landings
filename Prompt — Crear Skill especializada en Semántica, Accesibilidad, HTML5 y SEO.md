Quiero que crees una **Skill especializada en Semántica HTML, Accesibilidad Web, HTML5, atributos HTML, lectores de pantalla y SEO técnico/contenido** para este repositorio.

No quiero que ahora audites ni modifiques ninguna página concreta.

Quiero que construyas únicamente la Skill, con instrucciones claras, estrictas y reutilizables para que posteriormente pueda ser utilizada por agentes cuando tengan que crear, revisar, corregir o mejorar páginas del proyecto.

La Skill debe estar especialmente preparada para trabajar en proyectos modernos construidos con **Astro**, aunque sus principios deben basarse principalmente en estándares web.

# Áreas de especialización

La Skill debe especializarse profundamente en:

- HTML5.
- Semántica HTML.
- Accesibilidad web.
- WCAG actuales.
- WAI-ARIA.
- Atributos HTML.
- Lectores de pantalla.
- Navegación mediante teclado.
- SEO técnico.
- SEO on-page.
- SEO para Google.
- SEO orientado a motores de búsqueda basados en IA.
- AI Search / Answer Engines.
- contenido interpretable por LLMs.
- structured data.
- schema.org.
- SEO para LMS y plataformas educativas.

# Principio fundamental

La Skill debe seguir esta prioridad:

**HTML semántico correcto primero, ARIA después únicamente cuando sea necesario.**

Nunca debe utilizar ARIA para corregir una estructura HTML incorrecta cuando exista un elemento HTML nativo adecuado.

Por ejemplo:

- `<button>` antes que `div role="button"`.
- `<nav>` antes que `div role="navigation"`.
- `<main>` antes que `div role="main"`.
- `<header>`.
- `<footer>`.
- `<aside>`.
- `<article>`.
- `<section>`.
- `<figure>`.
- `<figcaption>`.
- `<details>`.
- `<summary>`.
- `<dialog>` cuando sea apropiado.

# HTML5

La Skill debe saber determinar correctamente cuándo utilizar:

- `html`.
- `head`.
- `body`.
- `header`.
- `nav`.
- `main`.
- `section`.
- `article`.
- `aside`.
- `footer`.
- `figure`.
- `figcaption`.
- `picture`.
- `source`.
- `time`.
- `address`.
- `details`.
- `summary`.
- `dialog`.
- `form`.
- `fieldset`.
- `legend`.
- `label`.
- `button`.
- `progress`.
- `meter`.
- `mark`.
- `blockquote`.
- listas ordenadas y no ordenadas.
- tablas semánticas.

Debe evitar abusar de:

- `div`.
- `span`.
- wrappers sin significado.
- elementos interactivos implementados con elementos no interactivos.

# Estructura semántica

Debe revisar y garantizar:

- un `main` claro por documento;
- landmarks correctamente definidos;
- estructura lógica del contenido;
- uso correcto de `section`;
- uso correcto de `article`;
- relación entre headings y secciones;
- jerarquía de headings;
- navegación comprensible;
- landmarks distinguibles;
- contenido con significado incluso sin CSS.

La Skill debe detectar páginas visualmente correctas pero semánticamente deficientes.

# Headings

Debe comprobar:

- presencia lógica de `h1`;
- jerarquía `h1` → `h2` → `h3`;
- headings utilizados por significado y no por tamaño visual;
- headings descriptivos;
- ausencia de saltos estructurales injustificados.

No debe cambiar el nivel de un heading únicamente para conseguir un determinado tamaño visual.

El tamaño se controla mediante CSS.

# Atributos HTML

La Skill debe conocer y revisar correctamente atributos como:

- `lang`.
- `dir`.
- `title`.
- `alt`.
- `width`.
- `height`.
- `loading`.
- `decoding`.
- `fetchpriority`.
- `href`.
- `target`.
- `rel`.
- `download`.
- `type`.
- `name`.
- `value`.
- `autocomplete`.
- `inputmode`.
- `pattern`.
- `required`.
- `disabled`.
- `readonly`.
- `checked`.
- `selected`.
- `placeholder`.
- `min`.
- `max`.
- `step`.
- `aria-*`.
- `role`.
- `tabindex`.
- `hidden`.
- `inert`.
- `popover`.

Debe conocer cuándo un atributo:

- es obligatorio;
- es recomendable;
- es redundante;
- es incorrecto;
- genera problemas de accesibilidad.

# Imágenes

Debe revisar correctamente:

- `alt`;
- imágenes decorativas;
- imágenes informativas;
- imágenes funcionales;
- imágenes enlazadas;
- SVG;
- iconos;
- `figure`;
- `figcaption`;
- dimensiones intrínsecas;
- responsive images;
- lazy loading.

Las imágenes decorativas deben poder ser ignoradas correctamente por tecnologías asistivas.

No debe generar textos alternativos redundantes o artificiales.

# Enlaces

Debe revisar:

- texto del enlace;
- contexto;
- enlaces vacíos;
- icon-only links;
- enlaces externos;
- `target="_blank"`;
- `rel`;
- navegación mediante teclado;
- foco.

Evita textos genéricos como:

- "haz clic aquí";
- "leer más";

cuando no sean comprensibles fuera de contexto.

# Botones

Debe diferenciar estrictamente:

- navegación;
- acciones.

Navegación normalmente utiliza enlaces.

Acciones normalmente utilizan botones.

Debe revisar:

- `type="button"`;
- `type="submit"`;
- estado disabled;
- nombre accesible;
- icon-only buttons;
- estados expandido/cerrado;
- controles personalizados.

# Formularios

Debe comprobar:

- `label`;
- asociación `for/id`;
- `fieldset`;
- `legend`;
- `autocomplete`;
- `name`;
- `type`;
- `inputmode`;
- instrucciones;
- errores;
- required;
- validación;
- mensajes de error;
- estados loading;
- estados disabled;
- feedback de éxito;
- navegación por teclado;
- lectores de pantalla.

El placeholder nunca debe sustituir al label.

Los errores deben poder identificarse y asociarse con el campo correspondiente.

# Teclado

La Skill debe comprobar funcionamiento mediante:

- Tab.
- Shift + Tab.
- Enter.
- Space.
- Escape.
- flechas cuando corresponda.

Debe detectar:

- keyboard traps;
- elementos inaccesibles;
- focus perdido;
- focus oculto;
- orden incorrecto de tabulación.

# Focus

Debe garantizar:

- focus visible;
- orden lógico;
- focus management;
- restauración de focus;
- focus inicial cuando corresponda;
- ausencia de `outline: none` sin alternativa.

# Skip links

Debe saber cuándo implementar:

- "Saltar al contenido".
- "Saltar a navegación".

Especialmente en páginas con navegación extensa.

# Lectores de pantalla

La Skill debe pensar explícitamente en usuarios de:

- NVDA.
- JAWS.
- VoiceOver.
- TalkBack.

Debe revisar:

- nombres accesibles;
- roles;
- estados;
- propiedades;
- live regions;
- announcements;
- navegación por headings;
- navegación por landmarks;
- formularios;
- dialogs;
- accordions;
- tabs;
- menus;
- carousels;
- notifications.

# Accessible Name

Debe comprender correctamente la prioridad de:

- contenido visible;
- `<label>`;
- `aria-label`;
- `aria-labelledby`.

No debe utilizar `aria-label` innecesariamente si ya existe un nombre accesible visible correcto.

# ARIA

Debe conocer correctamente:

- `aria-label`.
- `aria-labelledby`.
- `aria-describedby`.
- `aria-expanded`.
- `aria-controls`.
- `aria-current`.
- `aria-hidden`.
- `aria-live`.
- `aria-atomic`.
- `aria-selected`.
- `aria-pressed`.
- `aria-invalid`.
- `aria-required`.
- `aria-busy`.

Debe evitar ARIA inválido, redundante o contradictorio con HTML nativo.

# Componentes interactivos

Debe revisar especialmente:

- Navbar.
- Dropdowns.
- Menus.
- Accordions.
- Tabs.
- Carousels.
- Sliders.
- Modals.
- Dialogs.
- Tooltips.
- Popovers.
- Combobox.
- Autocomplete.
- Search.
- Toasts.
- Pagination.
- Filters.

Debe aplicar patrones reconocidos de accesibilidad.

# Mobile

La accesibilidad debe comprobarse también en dispositivos táctiles.

Debe revisar:

- touch targets;
- zoom;
- orientation;
- overlays;
- navegación;
- inputs;
- modals;
- scroll;
- gestos.

No debe depender exclusivamente de hover.

# Motion

Debe comprobar:

`prefers-reduced-motion`.

Las animaciones no deben:

- bloquear lectura;
- provocar pérdida de focus;
- ocultar contenido importante;
- depender únicamente del movimiento para comunicar información.

# Color

Debe revisar:

- contraste de texto;
- contraste de controles;
- estados hover;
- focus;
- disabled;
- selected;
- error;
- success.

La información nunca debe depender únicamente del color.

# SEO técnico

La Skill debe revisar:

- `<title>`;
- meta description;
- canonical;
- robots;
- sitemap;
- Open Graph;
- Twitter Cards;
- hreflang cuando corresponda;
- URLs;
- status codes;
- redirects;
- indexabilidad;
- headings;
- internal linking;
- imágenes;
- performance;
- Core Web Vitals.

# SEO on-page

Debe analizar:

- intención de búsqueda;
- title;
- description;
- H1;
- headings;
- contenido principal;
- entidades;
- contexto;
- keywords;
- enlaces internos;
- anchor text;
- imágenes;
- contenido duplicado;
- thin content.

No debe practicar keyword stuffing.

# SEO para Google

Debe priorizar contenido:

- útil;
- claro;
- original;
- estructurado;
- accesible;
- contextualizado;
- fácil de rastrear;
- comprensible.

Debe evitar técnicas de manipulación SEO.

# SEO para IA

La Skill también debe optimizar para sistemas de búsqueda y respuesta basados en IA.

Debe favorecer:

- respuestas claras;
- estructura lógica;
- headings descriptivos;
- definiciones precisas;
- contexto explícito;
- entidades identificables;
- listas cuando sean apropiadas;
- tablas cuando ayuden;
- FAQ reales;
- contenido autocontenido;
- relaciones claras entre conceptos.

Debe facilitar que motores basados en IA puedan comprender:

- quién;
- qué;
- dónde;
- cuándo;
- cómo;
- por qué.

Debe evitar texto ambiguo o excesivamente promocional cuando perjudique la comprensión del contenido.

# Structured Data

Debe conocer schema.org y utilizar JSON-LD cuando corresponda.

Debe poder trabajar con tipos como:

- Organization.
- Person.
- WebSite.
- WebPage.
- BreadcrumbList.
- Article.
- BlogPosting.
- Product.
- Offer.
- FAQPage.
- LocalBusiness.
- Service.
- Event.
- Course.
- LearningResource.

Nunca debe añadir structured data que no corresponda realmente al contenido visible.

# SEO para LMS

La Skill debe estar especializada también en contenido destinado a:

- LMS.
- plataformas educativas;
- cursos;
- módulos;
- lecciones;
- documentación educativa;
- academias;
- formación online.

Debe estructurar contenido educativo para que sea comprensible tanto por usuarios como por motores de búsqueda y sistemas de IA.

Debe contemplar:

- Course.
- LearningResource.
- EducationalOccupationalProgram cuando corresponda.
- breadcrumbs.
- jerarquía curso → módulo → lección.
- autores.
- nivel.
- duración.
- objetivos.
- requisitos.
- resultados de aprendizaje.
- fecha de actualización.
- contenido relacionado.
- navegación anterior/siguiente.
- progreso cuando exista.

# Estructura de LMS

Cuando se trabaje con contenido educativo, debe favorecer una jerarquía clara:

Curso
→ Módulo
→ Lección
→ Sección
→ Actividad / recurso

Debe evitar páginas educativas sin estructura semántica clara.

# Metadatos educativos

Cuando sean relevantes, debe considerar:

- título del curso;
- descripción;
- autor/instructor;
- duración;
- nivel;
- idioma;
- objetivos;
- requisitos;
- categoría;
- fecha de publicación;
- fecha de actualización.

# SEO y accesibilidad

La Skill debe entender que SEO y accesibilidad frecuentemente se refuerzan mutuamente.

Por ejemplo:

- HTML semántico.
- headings.
- textos alternativos.
- labels.
- enlaces descriptivos.
- estructura lógica.
- performance.

Debe evitar soluciones SEO que perjudiquen la accesibilidad.

# Astro

Cuando trabaje en Astro debe aprovechar correctamente:

- layouts.
- componentes.
- props.
- slots.
- assets.
- Image.
- Picture.
- content collections cuando sean apropiadas.
- metadata.
- generación estática.

Debe evitar JavaScript cliente innecesario.

# Auditoría

Cuando esta Skill sea utilizada para auditar una página deberá comprobar al menos:

1. HTML5.
2. Semántica.
3. Landmarks.
4. Headings.
5. Atributos.
6. Links.
7. Buttons.
8. Forms.
9. Images.
10. SVG.
11. Keyboard.
12. Focus.
13. Screen readers.
14. ARIA.
15. Color contrast.
16. Motion.
17. Responsive accessibility.
18. Metadata.
19. SEO técnico.
20. SEO on-page.
21. Structured data.
22. AI SEO.
23. LMS SEO cuando corresponda.
24. Performance relacionado con SEO.

# Severidad

Los problemas detectados deben clasificarse cuando corresponda como:

- Crítico.
- Alto.
- Medio.
- Bajo.
- Mejora.

Debe priorizar problemas que:

- impidan utilizar la página;
- bloqueen lectores de pantalla;
- bloqueen navegación mediante teclado;
- invaliden formularios;
- perjudiquen indexación;
- introduzcan semántica incorrecta.

# Restricciones

No debe:

- añadir ARIA innecesariamente;
- llenar el HTML de atributos sin sentido;
- utilizar roles redundantes;
- cambiar contenido únicamente por SEO sin justificarlo;
- sacrificar UX por keywords;
- crear structured data falso;
- alterar diseño visual si no es necesario para solucionar el problema;
- convertir todos los elementos en componentes innecesariamente.

# Objetivo final

Crea una Skill que pueda utilizarse como referencia técnica estricta para desarrollar y auditar páginas web con especial énfasis en:

**HTML5 + semántica + accesibilidad + lectores de pantalla + atributos HTML + SEO tradicional + SEO para IA + SEO educativo/LMS.**