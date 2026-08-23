import type { Product } from "../types"
import { productImages } from "./images"

export const products: Product[] = [
  {
    name: "Negro 85%",
    cacaoContent: "85% cacao",
    format: "Tableta 100 g",
    description:
      "Origen único, tueste corto y conchado largo para un negro intenso sin amargor agresivo.",
    notes: ["Cacao tostado", "Frutos secos", "Final seco"],
    image: productImages.darkBar,
  },
  {
    name: "Leche Ónix",
    cacaoContent: "45% cacao",
    format: "Tableta 100 g",
    description:
      "Nuestro clásico de leche: cremoso, equilibrado, pensado para el consumo diario.",
    notes: ["Caramelo", "Leche entera", "Vainilla"],
    image: productImages.milkBar,
  },
  {
    name: "Cacao de Origen",
    cacaoContent: "100% cacao",
    format: "Bolsa 200 g",
    description:
      "Pasta de cacao pura de una sola finca, para repostería profesional y preparación en taza.",
    notes: ["Sin aditivos", "Trazabilidad de finca", "Uso profesional"],
    image: productImages.cacaoPaste,
  },
  {
    name: "Tableta Especial",
    cacaoContent: "70% cacao",
    format: "Tableta 90 g",
    description:
      "Micro-lote de temporada con inclusión de higo seco y una capa de templado más fina de lo habitual.",
    notes: ["Higo seco", "Templado fino", "Tirada corta"],
    image: productImages.specialEdition,
  },
  {
    name: "Colección Limitada",
    cacaoContent: "Selección de 4 piezas",
    format: "Estuche 160 g",
    description:
      "Cuatro orígenes distintos en formato bombón, presentados en un estuche de fábrica numerado.",
    notes: ["Cuatro orígenes", "Estuche numerado", "Edición limitada"],
    image: productImages.limitedBox,
  },
]
