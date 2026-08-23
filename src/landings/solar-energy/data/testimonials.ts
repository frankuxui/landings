import type { Testimonial } from "../types"

// Identified by role only, never a full name, per the platform's rule
// against plausible fictional personal data.
export const testimonials: Testimonial[] = [
  {
    quote:
      "La instalación se dimensionó para nuestro consumo real, no para una media genérica. La factura bajó desde el primer ciclo de facturación.",
    role: "Cliente residencial",
  },
  {
    quote:
      "El seguimiento posterior a la puesta en marcha nos permite anticipar cualquier caída de rendimiento antes de que se note en la factura.",
    role: "Responsable de operaciones",
  },
  {
    quote:
      "Pudimos cubrir buena parte del consumo diurno del local sin alterar el horario de apertura durante la obra.",
    role: "Negocio local",
  },
  {
    quote:
      "El estudio inicial fue el más detallado que recibimos entre varias propuestas para la planta. Eso marcó la diferencia.",
    role: "Proyecto industrial",
  },
  {
    quote:
      "Repartir la generación entre los distintos portales del edificio se resolvió con más claridad de la que esperábamos.",
    role: "Comunidad energética",
  },
]
