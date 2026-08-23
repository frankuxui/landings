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
- `styles/tailwind.css` - sistema visual local de Tailwind CSS v4: tokens,
  breakpoints, contenedor, botones oficiales, encabezados de sección,
  campos, variante `dark` por `data-theme` y utilities especiales.
- `scripts/` - `theme.ts` (escucha el `postMessage` de tema del shell de
  previsualización y lo aplica solo al propio documento), `reveal.ts`
  (reveals al hacer scroll vía `IntersectionObserver`, respeta
  `prefers-reduced-motion`) y `menu.ts` (menú móvil accesible).
- `types.ts` - tipos locales del contenido de esta landing (no se comparten
  con la plataforma).

## Sistema de estilos

Tailwind CSS v4 es el sistema de diseño y composición visual de la landing. El
archivo `styles/tailwind.css` centraliza los tokens con `@theme`, los patrones
visuales reutilizados con `@layer components` y las capacidades especiales con
`@utility`. Los estilos específicos que aparecen una sola vez permanecen como
utilities directamente en el markup Astro.

Criterio aplicado:

- Design token -> `@theme`.
- Patrón visual reutilizable -> `@layer components`.
- Utility especializada -> `@utility`.
- Estilo específico -> utilities directamente en `class`.
- Estructura, contenido, lógica o semántica reutilizable -> componente Astro.

No hay `ui.ts`, `styles.ts`, `classes.ts`, objetos TypeScript de variantes
visuales ni componentes Astro creados solo para encapsular clases. Los estilos
compartidos de botones viven en Tailwind como `.btn`, `.btn-primary`,
`.btn-secondary`, `.btn-ghost` y `.btn-tertiary`; cada uso conserva su HTML
semántico real (`<a>` para navegación, `<button>` para acciones).

## Datos ficticios y privacidad

Esta landing es una demo de diseño. No incluye JSON-LD de `Organization` ni
simula una empresa real con datos registrales, URLs sociales o contacto
plausible. Las secciones de contacto utilizan placeholders claramente
ficticios: `correo@ejemplo.com`, `+00 000 000 000`, `Dirección de ejemplo`,
`Ciudad, País`, `Instagram` y `LinkedIn`.

## Notas

- La imagen de `thumbnail`/`previewImage` usada por la tarjeta del catálogo y el
  detalle vive en `public/landings/coffee-producer/cover.png` (portada
  curada de la landing, distinta de los placeholders de contenido).
- Todas las imágenes de contenido son placeholders con proporción real,
  listos para sustituirse por `<img>`/`Image`/`Picture` sin rediseñar nada.
- Soporta tema claro y oscuro, ambos diseñados de forma independiente.
- Utiliza únicamente las variantes oficiales de botón `primary`,
  `secondary`, `ghost` y `tertiary`. Solo `tertiary` usa borde; cards,
  badges y labels se diferencian mediante superficies, contraste, spacing y
  jerarquía.
- La landing es estrictamente monocromática: blanco, negro y escala de grises.
