import type { TechSpec } from "../types"

export const techSpecs: TechSpec[] = [
  {
    number: "01",
    title: "Paneles fotovoltaicos",
    description:
      "Módulos de alta eficiencia orientados y dimensionados según la radiación real de cada cubierta, no según una plantilla genérica.",
  },
  {
    number: "02",
    title: "Inversores",
    description:
      "Convierten la corriente continua generada en corriente alterna útil, con seguimiento del punto de máxima potencia en cada tramo del día.",
  },
  {
    number: "03",
    title: "Monitorización",
    description:
      "Lectura continua de producción y consumo, visible desde cualquier dispositivo, para detectar desviaciones antes de que afecten al rendimiento.",
  },
  {
    number: "04",
    title: "Almacenamiento",
    description:
      "Baterías dimensionadas para desplazar el consumo hacia las horas sin sol, cuando el perfil energético del proyecto lo justifica.",
  },
]
