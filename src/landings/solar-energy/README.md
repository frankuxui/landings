# Heliogrid - Energía solar fotovoltaica (business)

Landing de una marca ficticia (**Heliogrid**) dedicada al análisis, diseño,
instalación y monitorización de soluciones de energía solar fotovoltaica.
Dirigida a hogares, empresas, industrias y organizaciones interesadas en
reducir su dependencia de la red eléctrica convencional y avanzar hacia la
transición energética.

## Dirección de arte

Composición tecnológica, arquitectónica y editorial: tipografía a gran
escala, esquinas rectas (`rounded-sm`/`rounded-xs`, nunca `rounded-full`),
etiquetas técnicas en `font-mono`, numeración de pasos y secciones, y ritmo
deliberado de secciones **Full Width** (Hero, Transición energética,
Soluciones, Instalaciones, Impacto, Confianza, CTA final) frente a secciones
**contenidas** (Header, Tecnología, Proceso, Testimonios, Editorial,
Contacto, Footer). Estrictamente monocromática: blanco, negro y escala de
grises, sin excepción.

## Estructura

- `index.astro` - documento raíz autocontenido (`<html>` completo), sin
  dependencias del layout de la plataforma.
- `sections/` - Header, Hero, Transicion (compromiso climático), Tecnologia,
  Soluciones, Proceso (columna sticky + rail de progreso GSAP), Instalaciones
  (mosaico asimétrico), Impacto (cifra principal + cifras secundarias),
  Testimonios (Swiper Core), Editorial (artículos, sección contenida),
  Confianza (franja de sectores atendidos), CTAFinal, Contacto, Footer.
- `components/` - piezas reutilizadas por estructura, contenido o semántica
  real: bloque técnico, fila de solución, fila de proceso, mosaico de
  instalación, cifra, slide de testimonio, artículo editorial y placeholder
  de imagen.
- `data/` - contenido tipado de la landing (navegación, tecnología,
  soluciones, proceso, instalaciones, impacto, testimonios, artículos,
  sectores).
- `styles/tailwind.css` - sistema visual local y autocontenido de Tailwind
  CSS v4: declara sus propios tokens (`:root`/`[data-theme="dark"]`/`@theme
inline`/`@theme`), breakpoints, contenedores, escala tipográfica fluida,
  easing y la utility `reveal`, sin importar ningún fichero fuera de esta
  carpeta, más el theming local de la pagination de Swiper (Testimonios), la
  única excepción genuinamente local. Los nombres de los tokens son el
  vocabulario compartido de la galería; los valores pertenecen solo a esta
  landing.
- `scripts/` - `theme.ts` (escucha el `postMessage` de tema del shell de
  previsualización y lo aplica solo al propio documento), `reveal.ts`
  (reveals al hacer scroll vía `IntersectionObserver`), `menu.ts` (menú móvil
  accesible), `navIndicator.ts` (indicador de sección activa en el header),
  `processProgress.ts` (rail de progreso vertical con ScrollTrigger para
  "Proceso"), `parallax.ts` (parallax sutil en los placeholders grandes) y
  `statsCounter.ts` (contador GSAP de "Impacto"). Todos usan
  `gsap.matchMedia()`, limpian sus ScrollTriggers/timelines y respetan
  `prefers-reduced-motion`.
- `types.ts` - tipos locales del contenido de esta landing (no se comparten
  con la plataforma).

## Sistema de diseño compartido

Esta landing forma parte del mismo sistema visual que el resto de la
galería, pero es totalmente autónoma e independiente: `styles/tailwind.css`
importa únicamente `tailwindcss` y declara localmente su propio contrato de
tokens (colores semánticos, Light/Dark, tipografía, easing, breakpoints y
contenedores) — no importa `src/styles/landing-design-system.css` ni ningún
otro fichero de la plataforma o de otra landing. Los nombres de los tokens
son el vocabulario compartido de la galería (`--background`, `--foreground`,
`--surface`, `--muted`, `--primary`, etc.); los valores concretos pertenecen
solo a esta landing. Usa exclusivamente **Wix Madefor Text**, cargada en
`<head>` con el mismo bloque `<link>` que el resto de landings.

Criterio aplicado para el CSS local:

- Design token -> declarado localmente en `styles/tailwind.css` (mismo
  nombre que el resto de la galería, valor propio de esta landing), se
  reutiliza vía utilities (`bg-background`, `text-foreground`, `bg-surface`,
  `text-muted`, `bg-primary`, `bg-placeholder`, `bg-placeholder-inverse`,
  etc.).
- Patrón visual exclusivo de Swiper (pagination) -> CSS local mínimo y
  documentado en `tailwind.css`.
- Estilo específico -> utilities directamente en el `class` de cada
  elemento Astro. No se usa `@layer components` en ningún archivo.
- Estructura, contenido o comportamiento reutilizable -> componente Astro.

No hay `ui.ts`, `styles.ts`, `classes.ts` ni objetos TypeScript de variantes
visuales, ni componentes Astro creados solo para encapsular clases.

## Botones y bordes

Únicamente las variantes oficiales `primary`, `secondary`, `ghost` y
`tertiary`. Solo los controles de navegación de "Testimonios" (anterior/
siguiente) usan la variante `tertiary` con borde (`border border-border`);
el resto de botones y enlaces con apariencia de botón no llevan borde.
Badges, labels y cards se diferencian mediante superficie, contraste,
tipografía y espaciado — nunca con borde.

## Datos ficticios y privacidad

Esta landing es una demo de diseño. No incluye JSON-LD de `Organization` ni
simula una empresa real con datos registrales, URLs sociales o contacto
plausible. Las secciones de contacto utilizan placeholders claramente
ficticios: `correo@ejemplo.com`, `+00 000 000 000`, `Dirección de ejemplo`,
`Ciudad, País`, `Instagram` y `LinkedIn`. Los testimonios se identifican por
un rol neutro ("Cliente residencial", "Responsable de operaciones"...),
nunca por un nombre completo.

## Notas

- La imagen de `thumbnail` usada por la tarjeta del catálogo y la página de
  detalle es una fotografía de Unsplash hotlinkeada (`images.unsplash.com`),
  con su crédito (`thumbnailCredit`) persistido en
  `src/content/landings/solar-energy.json`. No se aloja ninguna copia en
  `public/`.
- Todas las imágenes de contenido son placeholders (`bg-placeholder`/
  `bg-placeholder-inverse`) con proporción real, listos para sustituirse por
  `<img>`/`Image`/`Picture` sin rediseñar nada.
- Soporta tema claro y oscuro, ambos diseñados de forma independiente.
- La sección "Proceso" usa una columna izquierda `xl:sticky` mientras la
  columna derecha (más alta) se desplaza — patrón de columnas sticky
  selectivas por desequilibrio de contenido.
- La landing es estrictamente monocromática: blanco, negro y escala de
  grises.
