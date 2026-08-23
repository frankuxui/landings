Quiero que analices y estructures profesionalmente este proyecto creado con **Astro**, utilizando la última versión estable disponible y las mejores prácticas actuales del ecosistema Astro.

El proyecto será una **plataforma de exposición, demostración y distribución de Landing Pages**.

No quiero que empieces diseñando landings todavía. Primero quiero que prepares una arquitectura escalable, modular y mantenible que permita añadir muchas landings en el futuro sin convertir el proyecto en un monolito difícil de mantener.

## Objetivo principal

La aplicación tendrá un sitio principal que actuará como catálogo de Landing Pages.

La página principal `/` deberá disponer inicialmente de:

- Header / Navbar.
- Hero principal.
- Título explicando qué es el proyecto.
- Descripción indicando que es una colección y exposición de Landing Pages.
- Sección para descubrir las landings.
- Categorías.
- Grid/listado de Landing Pages.
- Footer.

El Hero debe dejar claro que se trata de una plataforma donde explorar, visualizar y consultar diferentes diseños de Landing Pages construidas con Astro.

## Categorías iniciales

Crea una arquitectura que permita trabajar inicialmente con estas 5 categorías:

1. E-commerce.
2. Portfolio.
3. SaaS / Producto digital.
4. Blog / Editorial.
5. Negocios / Servicios.

Las categorías deben poder crecer posteriormente sin tener que modificar la arquitectura principal.

## Arquitectura de las Landing Pages

Cada landing debe estar completamente organizada en su propia carpeta.

Por ejemplo conceptualmente:

`landings/[landing-slug]/`

Cada landing debe poder contener independientemente:

- Components.
- Sections.
- Layouts.
- Assets.
- Images.
- Icons.
- Styles.
- Scripts.
- Data/content.
- Configuración.
- Theme.
- Tipografías si fueran necesarias.
- README o documentación de la landing.

No quiero una arquitectura donde todos los componentes, estilos e imágenes de todas las landings terminen mezclados globalmente.

Cada landing debe funcionar como una unidad independiente.

## Aislamiento

Esto es especialmente importante.

Los estilos de una Landing Page NO deben:

- modificar el sitio principal;
- modificar otra landing;
- sobrescribir variables CSS globales;
- generar colisiones entre clases;
- contaminar otros layouts.

Las variables de diseño de cada landing deberán estar correctamente encapsuladas.

Cada landing debe poder tener independientemente:

- colores;
- tipografía;
- border radius;
- spacing;
- sombras;
- breakpoints cuando sean necesarios;
- light theme;
- dark theme.

El tema seleccionado para una landing NO debe cambiar el tema del sitio principal.

## Sistema Light / Dark

Cada landing debe soportar de manera independiente:

- Light.
- Dark.

El cambio deberá realizarse únicamente dentro del contexto de la landing que está siendo visualizada.

Diseña la arquitectura necesaria para evitar que:

`document.documentElement`

o cualquier sistema global termine cambiando el tema del catálogo principal.

Prefiere una estrategia de scope mediante atributos, wrappers, CSS custom properties o una arquitectura equivalente correctamente aislada.

## Página de demostración

Cuando el usuario abra una landing, no quiero mostrar simplemente la página.

Quiero una experiencia de preview similar a las plataformas profesionales de exposición de templates.

La página de demostración tendrá una interfaz propia alrededor de la landing.

Debe existir una **Toolbar de Preview**.

La toolbar permitirá:

- volver al catálogo;
- mostrar nombre de la landing;
- seleccionar vista Mobile;
- seleccionar vista Tablet;
- seleccionar vista Desktop;
- cambiar Light / Dark de la landing;
- abrir información de la landing;
- abrir el panel de código.

Las vistas Mobile, Tablet y Desktop deben permitir visualizar realmente cómo responde la landing dentro de diferentes dimensiones de viewport.

No quiero simplemente cambiar clases CSS para aparentar dispositivos.

Analiza cuál es la arquitectura más limpia para conseguir un preview correctamente aislado, valorando soluciones como `iframe` si técnicamente resulta más apropiado.

## Preview Responsive

Define tamaños coherentes para:

- Mobile.
- Tablet.
- Desktop.

La transición entre tamaños debe sentirse fluida.

El contenedor de preview debe:

- permanecer centrado;
- poder reducir y aumentar su anchura;
- mostrar claramente el viewport;
- permitir scroll interno cuando corresponda;
- no romper el layout de la aplicación principal.

## Panel lateral de código

Dentro de la página de demostración deberá existir un **aside fixed** que inicialmente pueda estar cerrado.

El usuario podrá abrirlo desde la toolbar.

El aside deberá permitir consultar:

- estructura de carpetas;
- archivos de la landing;
- componentes;
- sections;
- estilos;
- configuración;
- código fuente.

Debe diseñarse pensando en incorporar posteriormente:

- explorador de archivos;
- syntax highlighting;
- copiar archivo;
- copiar componente;
- copiar código;
- copiar landing;
- descargar landing.

No implementes funcionalidades ficticias.

Si alguna funcionalidad requiere una fase posterior, prepara solamente la arquitectura necesaria.

## Descarga

La arquitectura debe permitir que posteriormente el usuario pueda descargar una landing completa conservando una estructura limpia similar a:

- components/
- sections/
- layouts/
- assets/
- styles/
- scripts/
- config/

La landing descargada debe poder reutilizarse con la menor dependencia posible respecto a la plataforma que la muestra.

Por esta razón debes evitar acoplar innecesariamente las landings al código interno del catálogo.

## Componentes de una landing

La arquitectura debe estar preparada para crear landings que puedan contener, dependiendo del diseño:

- Header.
- Navbar.
- Hero.
- Main.
- Sections.
- Feature sections.
- Product sections.
- Services.
- About.
- Aside.
- Gallery.
- Pricing.
- Statistics.
- Benefits.
- Testimonials.
- FAQ.
- CTA.
- Contact.
- Newsletter.
- Forms.
- Footer.

No significa que todas las landings deban contener obligatoriamente todos estos bloques.

Cada landing deberá utilizar únicamente los bloques necesarios para su objetivo.

## Metadata

Diseña un sistema para que cada landing tenga metadata propia, por ejemplo:

- id;
- slug;
- name;
- title;
- description;
- category;
- tags;
- technologies;
- thumbnail;
- preview image;
- creation date;
- updated date;
- author;
- available themes;
- featured;
- status.

Determina cuál es la mejor solución de Astro para administrar estos datos.

Valora especialmente las capacidades nativas actuales de Astro para colecciones de contenido/datos si son apropiadas.

## Rutas

Quiero una estructura de rutas limpia.

Define una propuesta para:

- `/`
- `/landings`
- `/landings/[category]`
- página de detalle;
- página de demostración/preview;
- ruta interna que renderiza únicamente la landing para poder aislarla del shell del preview.

La URL debe permitir identificar claramente qué landing estamos visualizando.

## Assets

Cada landing debe conservar sus propios assets.

Ejemplo conceptual:

`landings/saas-dashboard/assets/`

No quiero una carpeta global llena de imágenes pertenecientes a decenas de landings diferentes.

Solo los recursos realmente globales de la plataforma deberán vivir en los assets globales.

## Componentes globales

Debe existir una separación evidente entre:

### Platform

Componentes pertenecientes a la plataforma:

- Navbar principal.
- LandingCard.
- CategoryFilter.
- PreviewToolbar.
- DeviceSelector.
- ThemeSelector.
- CodeExplorer.
- CodePanel.
- PreviewShell.
- LandingMetadata.
- etc.

### Landing

Componentes específicos de cada diseño.

Nunca mezcles ambas responsabilidades.

## JavaScript

Astro debe seguir siendo el núcleo de la arquitectura.

Prioriza:

- HTML generado por Astro;
- CSS;
- JavaScript mínimo;
- Islands Architecture únicamente cuando sea necesaria interactividad.

No conviertas innecesariamente el proyecto en una SPA.

Si introduces React, Vue, Svelte u otra integración, debe existir una justificación técnica clara.

## Rendimiento

La plataforma deberá estar preparada para obtener buenos resultados en:

- Core Web Vitals.
- Lighthouse.
- carga inicial;
- imágenes;
- fuentes;
- JavaScript enviado al cliente;
- lazy loading;
- CLS;
- LCP;
- INP.

Una landing no debería cargar JavaScript o assets pertenecientes a otras landings.

## Accesibilidad

La arquitectura deberá facilitar:

- HTML5 semántico;
- navegación mediante teclado;
- focus visible;
- skip links;
- labels;
- ARIA únicamente cuando sea necesario;
- prefers-reduced-motion;
- contraste adecuado;
- lectores de pantalla.

## SEO

El catálogo principal debe quedar preparado para:

- metadata;
- Open Graph;
- canonical;
- sitemap;
- robots;
- structured data cuando corresponda.

Cada landing deberá poder definir su propia metadata.

## Vercel

Inicialmente el proyecto será desplegado en **Vercel**.

Configura únicamente lo realmente necesario.

Evita complejidad de infraestructura prematura.

## Organización esperada

Antes de modificar archivos:

1. Inspecciona el proyecto actual.
2. Comprueba la versión instalada de Astro.
3. Consulta la documentación oficial correspondiente a esa versión cuando sea necesario.
4. Analiza qué funcionalidades deben resolverse mediante capacidades nativas de Astro.
5. Diseña la arquitectura.
6. Muéstrame primero el árbol de carpetas propuesto.
7. Explica brevemente la responsabilidad de cada carpeta importante.
8. Después implementa la estructura.
9. Evita archivos, dependencias y abstracciones innecesarias.
10. Verifica que el proyecto siga compilando correctamente.

Quiero una arquitectura preparada para albergar una colección grande de Landing Pages, pero sin sobrearquitectura.

Prioriza siempre:

**aislamiento + escalabilidad + simplicidad + rendimiento + mantenibilidad.**