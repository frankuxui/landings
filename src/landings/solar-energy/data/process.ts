import type { ProcessStep } from "../types"

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Análisis",
    description:
      "Estudiamos el consumo, la orientación y la superficie disponible para saber si el proyecto tiene sentido antes de proponer nada.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Dimensionamos paneles, inversores y, si aplica, almacenamiento, con una simulación de producción y ahorro específica del proyecto.",
  },
  {
    number: "03",
    title: "Instalación",
    description:
      "Montaje de estructura, módulos y cableado por equipo propio, con control de calidad en cada fase del proceso.",
  },
  {
    number: "04",
    title: "Puesta en marcha",
    description:
      "Conexión, pruebas de rendimiento y verificación de todos los parámetros antes de dejar la instalación en funcionamiento.",
  },
  {
    number: "05",
    title: "Monitorización",
    description:
      "Seguimiento de la producción real frente a la estimada desde el primer día, con alertas ante cualquier desviación relevante.",
  },
  {
    number: "06",
    title: "Optimización",
    description:
      "Ajustes periódicos de configuración y mantenimiento preventivo para sostener el rendimiento durante toda la vida útil.",
  },
]
