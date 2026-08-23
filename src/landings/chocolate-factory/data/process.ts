import type { ProcessStep } from "../types"

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Selección",
    description:
      "Cada saco de cacao en grano se revisa por lote: humedad, fermentación y tamaño antes de entrar a fábrica.",
    iconLabel: "Selección",
  },
  {
    number: "02",
    title: "Tostado",
    description:
      "Perfiles de tueste propios para cada origen, ajustados grano a grano para revelar aroma sin quemar el cacao.",
    iconLabel: "Tostado",
  },
  {
    number: "03",
    title: "Molienda",
    description:
      "El grano descascarillado se muele hasta convertirse en licor de cacao: la base líquida de todo chocolate.",
    iconLabel: "Molienda",
  },
  {
    number: "04",
    title: "Refinado",
    description:
      "Rodillos de precisión reducen la textura hasta partículas imperceptibles al paladar, sin arenosidad.",
    iconLabel: "Refinado",
  },
  {
    number: "05",
    title: "Conchado",
    description:
      "Horas de mezcla continua a temperatura controlada que redondean sabor, aroma y textura final.",
    iconLabel: "Conchado",
  },
  {
    number: "06",
    title: "Templado",
    description:
      "Curvas exactas de temperatura estabilizan la manteca de cacao para lograr brillo, dureza y un corte limpio.",
    iconLabel: "Templado",
  },
  {
    number: "07",
    title: "Moldeado",
    description:
      "El chocolate templado se vierte en moldes propios, se vibra para eliminar aire y se enfría con control.",
    iconLabel: "Moldeado",
  },
  {
    number: "08",
    title: "Acabado",
    description:
      "Desmoldado, control visual pieza a pieza, envasado y trazabilidad de lote antes de salir de fábrica.",
    iconLabel: "Acabado",
  },
]
