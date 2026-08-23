import type { Product } from "../types"
import { productImages } from "./images"

export const products: Product[] = [
  {
    name: "Origen Único — Sierra Alta",
    origin: "Parcela de ejemplo, 1.900 m",
    roast: "Tueste medio-claro",
    format: "Bolsa de 250 g, grano entero",
    description:
      "Un single origin de nuestras parcelas más altas, recolectado en su punto justo de maduración y secado con calma para conservar matices.",
    tastingNotes: ["Cacao", "Caramelo", "Fruta roja"],
    image: productImages.origenUnico,
  },
  {
    name: "Espresso Terraltura",
    origin: "Mezcla de fincas asociadas",
    roast: "Tueste medio-oscuro",
    format: "Bolsa de 250 g, grano entero o molido",
    description:
      "Pensado para máquina de espresso: cuerpo denso, crema persistente y un dulzor que equilibra la intensidad del tueste.",
    tastingNotes: ["Chocolate negro", "Avellana", "Caña de azúcar"],
    image: productImages.espressoTerraltura,
  },
  {
    name: "Clásico Vientoclaro",
    origin: "Parcelas del valle medio, 1.400–1.600 m",
    roast: "Tueste medio",
    format: "Bolsa de 250 g, grano entero o molido",
    description:
      "Nuestro café del día a día: equilibrado, versátil y agradable tanto en filtro como en cafetera italiana.",
    tastingNotes: ["Manzana", "Miel", "Almendra"],
    image: productImages.clasicoVientoclaro,
  },
  {
    name: "Edición Especial — Lote de altura",
    origin: "Parcela familiar de ejemplo, proceso honey",
    roast: "Tueste claro",
    format: "Bolsa de 200 g, micro-lote limitado",
    description:
      "Un micro-lote de tirada corta, procesado en honey y seleccionado a mano grano a grano en nuestra finca fundacional.",
    tastingNotes: ["Jazmín", "Mango", "Panela"],
    image: productImages.edicionEspecial,
  },
]
