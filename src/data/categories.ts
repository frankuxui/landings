import type { Category } from "../types/category"

export const categories: Category[] = [
  {
    slug: "ecommerce",
    label: "E-commerce",
    description:
      "Tiendas y páginas de producto orientadas a la conversión y la venta directa.",
  },
  {
    slug: "portfolio",
    label: "Portfolio",
    description:
      "Presentación de trabajo, proyectos y estudios de caso para creativos y profesionales.",
  },
  {
    slug: "saas",
    label: "SaaS / Producto digital",
    description:
      "Landing pages para productos y herramientas digitales, foco en funcionalidades y registro.",
  },
  {
    slug: "blog",
    label: "Blog / Editorial",
    description:
      "Diseños centrados en contenido, lectura y publicación editorial.",
  },
  {
    slug: "business",
    label: "Negocios / Servicios",
    description:
      "Presencia digital para negocios locales, consultoría y prestación de servicios.",
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((category: Category) => category.slug === slug)
}
