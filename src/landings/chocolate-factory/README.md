# Fundición Ónix - Chocolate de precisión (business)

Landing de una marca ficticia de chocolate de fábrica (**Fundición Ónix**),
ubicada en una región de montaña ficticia (Vado de Ceniza). Selecciona cacao
en grano, y lo transforma en fábrica propia hasta la tableta. Dirigida a
consumidores, tiendas especializadas, restauración, hoteles y distribuidores.

## Estructura

- `index.astro` - documento raíz autocontenido (`<html>` completo), sin
  dependencias del layout de la plataforma.
- `sections/` - una sección por bloque de la página (Header, Hero, Origen,
  Fábrica, Proceso, Productos, Editorial, Distribución, CTAFinal, Contacto,
  Footer).
- `components/` - piezas reutilizadas por estructura, contenido o semántica
  real: placeholder de imagen, paso de proceso, slide de producto, cifra de
  producción, fila de segmento B2B y artículo editorial.
- `data/` - contenido tipado de la landing (navegación, proceso, productos,
  cifras de producción, segmentos de distribución, piezas editoriales).
- `styles/tailwind.css` - sistema visual local de Tailwind CSS v4, **completo
  y autocontenido**: tokens semánticos (`:root` / `[data-theme="dark"]` /
  `@theme inline`), tipografía fluida, breakpoints y contenedores propios,
  easing y la utility `reveal` (`@utility`). No importa ningún fichero fuera
  de esta carpeta — en particular, no depende de
  `src/styles/landing-design-system.css` ni de ningún otro fichero
  compartido de la plataforma o de otra landing.
- `scripts/` - `theme.ts` (escucha el `postMessage` de tema del shell de
  previsualización y lo aplica solo al propio documento), `reveal.ts`
  (reveals al hacer scroll vía `IntersectionObserver`), `menu.ts` (panel de
  navegación móvil a pantalla completa, accesible), `navIndicator.ts`
  (subrayado GSAP que sigue al enlace activo en escritorio),
  `processScroll.ts` (scroll horizontal anclado con GSAP/ScrollTrigger para
  la sección "Proceso" en Laptop/Desktop), `productsSlider.ts` (carrusel de
  productos con Swiper Core) y `statsCounter.ts` (contador GSAP de las
  cifras de producción en fila).
- `types.ts` - tipos locales del contenido de esta landing (no se comparten
  con la plataforma).

## Sistema de estilos

Tailwind CSS v4 es el sistema de diseño y composición visual de la landing.
El archivo `styles/tailwind.css` centraliza los tokens semánticos con
`@theme`/`@theme inline` y las capacidades especiales con `@utility`
(`reveal`). No existe `@layer components`: todos los estilos de botones,
formularios y secciones se aplican como utilities directamente en el markup
Astro de cada componente/sección.

Criterio aplicado:

- Design token -> `@theme` / `@theme inline`.
- Utility especializada -> `@utility` (`reveal`).
- Estilo específico -> utilities directamente en `class`.
- Estructura, contenido, lógica o semántica reutilizable -> componente Astro.

No hay `ui.ts`, `styles.ts`, `classes.ts` ni objetos TypeScript de variantes
visuales. Cada botón/enlace-botón usa exactamente una de las cuatro variantes
oficiales (`primary`, `secondary`, `ghost`, `tertiary`); solo `tertiary`
(los controles del carrusel de productos) usa borde. Badges, labels y cards
se diferencian mediante superficies, contraste, spacing y jerarquía, nunca
con borde.

### Excepciones de CSS nativo documentadas

- `.process-rail` oculta la barra de scroll nativa del riel horizontal de
  "Proceso" en Mobile/Tablet (`scrollbar-width`, `::-webkit-scrollbar`) —
  Tailwind no expone utilities para estas propiedades.
- `.products-slider` / `.products-slider-pagination` fijan las variables CSS
  propias de Swiper Core (`--swiper-pagination-*`) sobre los tokens
  monocromos de la landing, en lugar de dejar el azul por defecto de Swiper.

## Diferenciación frente a otras landings de la galería

Comparte la misma filosofía técnica y monocromática que el resto de la
galería, pero con arquitectura y composición propias: Hero editorial
asimétrico (no simétrico a dos columnas), menú móvil a pantalla completa
(no un panel lateral), indicador de navegación en forma de subrayado (no de
píldora), sección "Proceso" con scroll horizontal anclado por GSAP en
Laptop/Desktop en lugar de una lista vertical, cifras de producción en fila
con divisores en lugar de una cuadrícula de tarjetas, tarjetas y bloques con
radios casi rectos ("de molde") en lugar de muy redondeados, y un pie de
página con wordmark grande y columnas separadas por una línea divisoria.

## Datos ficticios y privacidad

Esta landing es una demo de diseño. No incluye JSON-LD de `Organization` ni
simula una empresa real con datos registrales, URLs sociales o contacto
plausible. Las secciones de contacto utilizan placeholders claramente
ficticios: `correo@ejemplo.com`, `+00 000 000 000`, `Dirección de ejemplo`,
`Ciudad, País`, `Instagram` y `LinkedIn`.

## Notas

- La imagen de `thumbnail` usada por la tarjeta del catálogo y la página de
  detalle es una fotografía de Unsplash hotlinkeada (`images.unsplash.com`),
  con su crédito (`thumbnailCredit`) persistido en
  `src/content/landings/chocolate-factory.json`. No se aloja ninguna copia en
  `public/`.
- Todas las imágenes de contenido son placeholders (`bg-placeholder` /
  `bg-placeholder-inverse`) con proporción real, listos para sustituirse por
  `<img>`/`Image`/`Picture` sin rediseñar nada.
- Soporta tema claro y oscuro, ambos diseñados de forma independiente.
- La sección "Proceso" funciona por completo sin JavaScript ni con
  `prefers-reduced-motion` activado: el riel es un contenedor con scroll
  horizontal nativo y `scroll-snap`; el anclado GSAP es una mejora
  progresiva exclusiva de Laptop/Desktop con movimiento permitido.
- La landing es estrictamente monocromática: blanco, negro y escala de
  grises.
