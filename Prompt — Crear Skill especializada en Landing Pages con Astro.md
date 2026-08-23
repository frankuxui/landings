Quiero que crees una **Skill especializada en diseñar, desarrollar, revisar y mantener Landing Pages profesionales construidas con Astro**.

No construyas ahora ninguna Landing Page concreta.

Tu objetivo es crear la Skill y sus instrucciones para que posteriormente pueda ser reutilizada por agentes cuando tengan que trabajar sobre cualquiera de las landings de este repositorio.

La Skill debe estar especializada en la **última versión estable de Astro disponible en el proyecto**.

Antes de definir reglas dependientes de una API o característica concreta de Astro, verifica la documentación oficial correspondiente a la versión utilizada.

# Responsabilidad de la Skill

La Skill deberá saber cómo crear Landing Pages:

- visualmente atractivas;
- modernas;
- responsive;
- accesibles;
- semánticas;
- mantenibles;
- modulares;
- optimizadas;
- reutilizables;
- correctamente aisladas del resto del proyecto.

Debe entender que este repositorio contiene múltiples Landing Pages independientes dentro de una plataforma de exposición.

Nunca debe asumir que una landing puede modificar libremente los estilos globales del proyecto.

# Astro

Especializa la Skill en las mejores prácticas actuales de Astro.

Debe priorizar:

- componentes `.astro`;
- HTML semántico;
- CSS;
- JavaScript mínimo;
- Islands Architecture;
- hidratación únicamente cuando realmente sea necesaria;
- optimización de imágenes;
- optimización de fuentes;
- layouts;
- componentes;
- composición;
- reutilización;
- separación clara entre contenido, presentación e interacción.

No debe introducir React, Vue, Svelte u otros frameworks simplemente porque resulte cómodo.

Una integración adicional deberá utilizarse únicamente cuando exista una necesidad real.

# Anatomía de una Landing Page

La Skill debe saber trabajar con bloques como:

- Header.
- Navbar.
- Hero.
- Main.
- Sections.
- Aside.
- Features.
- Services.
- Products.
- Benefits.
- About.
- Gallery.
- Statistics.
- Pricing.
- Testimonials.
- FAQ.
- Contact.
- Forms.
- Newsletter.
- CTA.
- Footer.

Estos elementos NO tienen que aparecer obligatoriamente en todas las landings.

La Skill deberá decidir cuáles son necesarios según:

- producto;
- servicio;
- audiencia;
- objetivo;
- conversión;
- categoría;
- contenido.

# Categorías

La Skill debe estar preparada inicialmente para crear landings de estas categorías:

1. E-commerce.
2. Portfolio.
3. SaaS / Producto digital.
4. Blog / Editorial.
5. Negocios / Servicios.

Debe comprender las diferencias de UX, contenido, jerarquía y conversión entre cada categoría.

# Arquitectura

Cada Landing Page debe permanecer aislada dentro de su propia estructura.

Debe respetar la arquitectura establecida por el repositorio.

Cada landing podrá disponer de sus propios:

- components;
- sections;
- layouts;
- assets;
- images;
- icons;
- styles;
- scripts;
- content/data;
- config;
- theme.

Nunca debe colocar automáticamente componentes específicos de una landing dentro de carpetas globales.

# Sistema de diseño

Cada landing debe poder definir su propio sistema de diseño.

La Skill deberá trabajar coherentemente con:

- design tokens;
- CSS custom properties;
- typography;
- spacing;
- colors;
- surfaces;
- borders;
- radius;
- shadows;
- grid;
- containers;
- breakpoints;
- iconography;
- motion.

Evita valores arbitrarios repetidos cuando puedan representarse mediante tokens locales.

# Light / Dark

Cada landing debe poder soportar:

- Light Theme.
- Dark Theme.

Los temas deben estar encapsulados dentro del scope correspondiente a esa landing.

Nunca debe cambiar el tema global de toda la plataforma para cambiar el tema de una demostración.

Debe evitar colisiones entre:

- variables CSS;
- clases;
- estilos;
- themes.

# Responsive Design

Toda landing creada mediante esta Skill debe diseñarse realmente para:

- Mobile.
- Tablet.
- Laptop.
- Desktop.
- Pantallas grandes.

No quiero que Desktop sea diseñado primero y posteriormente se intente arreglar Mobile con overrides.

La Skill debe revisar activamente:

- overflow horizontal;
- tamaños tipográficos;
- grid;
- flex;
- containers;
- imágenes;
- navegación;
- botones;
- formularios;
- espacios;
- tablas;
- overlays;
- modales;
- dropdowns;
- elementos fixed/sticky;
- touch targets.

# Diseño

No quiero Landing Pages genéricas que parezcan templates repetitivos.

Cada diseño debe tener:

- identidad visual;
- jerarquía;
- ritmo;
- composición;
- intención;
- dirección artística coherente.

Evita abusar de:

- tarjetas sin necesidad;
- gradients gratuitos;
- glassmorphism gratuito;
- sombras exageradas;
- elementos flotantes decorativos sin función;
- layouts idénticos entre proyectos;
- componentes genéricos repetidos.

# UX

La Skill debe analizar:

- objetivo principal;
- CTA principal;
- CTA secundarios;
- recorrido visual;
- jerarquía;
- claridad del mensaje;
- densidad de información;
- confianza;
- conversión;
- navegación.

La composición de las secciones debe responder al objetivo de la landing.

# Accesibilidad

Debe aplicar correctamente:

- HTML5 semántico;
- headings jerárquicos;
- landmarks;
- labels;
- alt;
- botones reales;
- enlaces reales;
- focus;
- navegación por teclado;
- contraste;
- ARIA cuando corresponda;
- prefers-reduced-motion;
- lectores de pantalla.

ARIA no debe utilizarse para sustituir HTML semántico correcto.

# Animaciones

Cuando la landing tenga animaciones, deben mejorar la experiencia y no simplemente añadir movimiento.

Puede trabajar con CSS y, cuando el proyecto lo contemple, soluciones como GSAP.

Las animaciones deberán:

- mantenerse fluidas;
- evitar layout thrashing;
- respetar prefers-reduced-motion;
- funcionar correctamente en móvil;
- no bloquear contenido;
- no perjudicar navegación;
- no perjudicar accesibilidad;
- no provocar CLS innecesario.

# Rendimiento

Cada landing debe intentar mantener:

- JavaScript cliente mínimo;
- imágenes correctamente dimensionadas;
- lazy loading cuando corresponda;
- fuentes optimizadas;
- dependencias controladas;
- bundles pequeños;
- buen LCP;
- buen CLS;
- buen INP.

Una landing nunca debe cargar recursos pertenecientes a otras landings.

# SEO

Cuando corresponda, debe contemplar:

- title;
- description;
- canonical;
- Open Graph;
- social images;
- headings;
- contenido indexable;
- structured data apropiado.

# Formularios

Los formularios deben diseñarse pensando en:

- label;
- validación;
- errores;
- estados disabled;
- estados loading;
- feedback;
- teclado;
- autocomplete;
- accesibilidad.

# Código

La Skill debe favorecer:

- componentes pequeños cuando aporten claridad;
- componentes reutilizables;
- nombres descriptivos;
- baja complejidad;
- CSS localizado;
- separación de responsabilidades.

Debe evitar:

- abstracción prematura;
- componentes innecesarios;
- wrappers innecesarios;
- prop drilling absurdo;
- JavaScript cuando HTML/CSS sea suficiente;
- archivos gigantes;
- estilos globales específicos de una única landing.

# Auditoría

La Skill también debe ser capaz de revisar una landing existente.

Durante una auditoría debe comprobar al menos:

- arquitectura;
- Astro;
- semántica;
- accesibilidad;
- responsive;
- diseño;
- theme;
- aislamiento;
- rendimiento;
- imágenes;
- tipografía;
- animaciones;
- UX;
- SEO;
- código muerto;
- duplicación;
- dependencias innecesarias.

# Forma de trabajar

Antes de modificar una landing:

1. Examina su carpeta completa.
2. Entiende su objetivo.
3. Identifica su categoría.
4. Identifica su sistema visual.
5. Revisa los componentes existentes.
6. Revisa sus estilos.
7. Revisa sus assets.
8. Revisa responsive.
9. Revisa accesibilidad.
10. Revisa cualquier interacción existente.

Nunca reestructures una landing completa si una modificación localizada puede resolver correctamente el problema.

Cuando crees una nueva landing, primero define mentalmente:

- objetivo;
- público;
- mensaje;
- CTA;
- arquitectura de información;
- secciones;
- dirección visual;
- sistema de diseño;
- responsive;
- interacciones.

Después implementa.

# Restricción fundamental

Esta Skill trabaja dentro de una plataforma donde pueden convivir decenas o cientos de Landing Pages.

Por tanto, su regla principal será:

**cada Landing Page debe comportarse como un módulo visual y funcional independiente sin contaminar ninguna otra Landing Page ni la plataforma que la contiene.**

Crea la Skill de forma profesional, clara y reutilizable para que otros agentes puedan invocarla durante tareas relacionadas con Landing Pages.