# Terraltura - Café de origen (business)

Landing insignia de la galería: una marca ficticia de café de especialidad
(**Terraltura**) que cultiva, selecciona y tuesta su propio café en una
región de montaña ficticia (los Altos de Vientoclaro). Dirigida a
consumidores de café, cafeterías, restaurantes y distribuidores.

## Estructura

- `index.astro` - documento raíz autocontenido (`<html>` completo), sin
  dependencias del layout de la plataforma.
- `sections/` - una sección por bloque de la página (Header, Hero, About,
  NuestroCafe, Proceso, Productos, Valores, Estadisticas, Testimonios,
  CTAFinal, Contacto, Footer).
- `components/` - piezas reutilizadas por estructura, contenido o semántica
  real: tarjetas de producto, paso de proceso, valor, estadística,
  testimonio, placeholder de imagen y campo de formulario.
- `data/` - contenido tipado de la landing (navegación, proceso, productos,
  valores, estadísticas, testimonios).
- `styles/tailwind.css` - sistema visual local y autocontenido de Tailwind
  CSS v4: declara sus propios tokens (`:root`/`[data-theme="dark"]`/`@theme
inline`/`@theme`), breakpoints, contenedor, escala tipográfica fluida,
  easing y la utility `reveal`, sin importar ningún fichero fuera de esta
  carpeta. Los nombres de los tokens son el vocabulario compartido de la
  galería; los valores pertenecen solo a esta landing.
- `scripts/` - `theme.ts` (escucha el `postMessage` de tema del shell de
  previsualización y lo aplica solo al propio documento), `reveal.ts`
  (reveals al hacer scroll vía `IntersectionObserver`, respeta
  `prefers-reduced-motion`) y `menu.ts` (menú móvil accesible).
- `types.ts` - tipos locales del contenido de esta landing (no se comparten
  con la plataforma).

## Sistema de estilos

Tailwind CSS v4 es el sistema de diseño y composición visual de la landing.
`styles/tailwind.css` es el único fichero de estilos de la landing y es
totalmente autónomo: no importa `src/styles/landing-design-system.css` ni
ningún otro fichero de la plataforma o de otra landing. Declara localmente
los tokens con `:root`/`[data-theme="dark"]`/`@theme inline`/`@theme`
(colores semánticos, tipografía, breakpoints, contenedor, spacing, easing,
escala tipográfica fluida) y la utility `reveal` con `@utility`. Las
capacidades especiales de Swiper (paginación de `Productos`) se resuelven con
CSS local mínimo, ya que Tailwind no expone utilities para esas custom
properties. Los estilos específicos que aparecen una sola vez permanecen como
utilities directamente en el markup Astro.

Criterio aplicado:

- Design token -> `@theme` / `@theme inline` (local a esta landing).
- Utility especializada -> `@utility`.
- Estilo específico -> utilities directamente en `class`.
- Estructura, contenido, lógica o semántica reutilizable -> componente Astro.

No hay `ui.ts`, `styles.ts`, `classes.ts`, objetos TypeScript de variantes
visuales, `@layer components` ni componentes Astro creados solo para
encapsular clases. Las variantes de botón oficiales (`primary`, `secondary`,
`ghost`, `tertiary`) se aplican como utilities de Tailwind directamente en el
markup; cada uso conserva su HTML semántico real (`<a>` para navegación,
`<button>` para acciones).

## Variables CSS disponibles

Declaradas localmente en `styles/tailwind.css` (mismos nombres que el resto
de la galería, valores propios de esta landing): `--background`,
`--background-alt`, `--foreground`, `--muted`, `--border`, `--surface`,
`--surface-strong`, `--control`, `--control-hover`, `--ring`, `--primary`,
`--primary-foreground`, `--emphasis`, `--disabled`, `--disabled-foreground`,
`--inverted`, `--inverted-foreground`, `--inverted-surface`, `--placeholder`,
`--placeholder-foreground`, `--placeholder-inverse` (con overrides bajo
`[data-theme="dark"]`), más `--font-sans`/`--font-display`/`--font-mono`,
`--breakpoint-footer/cards/nav/stats/display`, `--spacing-section`,
`--spacing-container-x`, `--container-landing/copy/heading/hero-heading`,
`--ease-landing` y la escala `--text-headline-1/2/3`/`--text-figure`.

## Paletas de color

Esta landing no define paletas de color opcionales: usa exclusivamente la
paleta monocromática por defecto (`palettes: []` en su metadata).

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
  `src/content/landings/coffee-producer.json`. No se aloja ninguna copia en
  `public/`.
- Todas las imágenes de contenido son placeholders con proporción real,
  listos para sustituirse por `<img>`/`Image`/`Picture` sin rediseñar nada.
- Soporta tema claro y oscuro, ambos diseñados de forma independiente.
- Utiliza únicamente las variantes oficiales de botón `primary`,
  `secondary`, `ghost` y `tertiary`. Solo `tertiary` usa borde; cards,
  badges y labels se diferencian mediante superficies, contraste, spacing y
  jerarquía.
- La landing es estrictamente monocromática: blanco, negro y escala de grises.
