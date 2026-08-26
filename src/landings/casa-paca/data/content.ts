export type MenuItem = {
  name: string
  price: string
  note?: string
}
export type MenuGroup = {
  category: string
  items: MenuItem[]
}

export type Neighbor = {
  name: string
  detail: string
  story: string
}

export type BarStory = {
  title: string
  date: string
  text: string
  quip: string
}

export type Tip = {
  title: string
  guidance: string
}

export type HistoryEntry = {
  year: string
  event: string
}

export type Testimonial = {
  quote: string
  name: string
}

export const menu: MenuGroup[] = [
  {
    category: "Para picar",
    items: [
      {
        name: "Croquetas",
        price: "6,50 €",
        note: "De jamón. O eso nos ha dicho Paca.",
      },
      { name: "Albóndigas", price: "7,00 €" },
      { name: "Tortilla", price: "5,50 €" },
      { name: "Pan con todo", price: "1,50 €" },
    ],
  },
  {
    category: "De cuchara y de sartén",
    items: [
      {
        name: "Callos",
        price: "8,50 €",
        note: "Si preguntas qué llevan, igual es mejor que no los pidas.",
      },
      {
        name: "Arroz del domingo",
        price: "9,00 €",
        note: "Se acaba antes de que empieces a pensarlo.",
      },
      { name: "Pollo al ajillo", price: "8,00 €" },
      {
        name: "Pescado del día",
        price: "9,50 €",
        note: "El que haya.",
      },
    ],
  },
  {
    category: "Para terminar",
    items: [
      {
        name: "Flan",
        price: "3,00 €",
        note: "Casero de verdad. El molde todavía tiene años de garantía.",
      },
      { name: "Natillas", price: "3,00 €" },
    ],
  },
]

export const neighbors: Neighbor[] = [
  {
    name: "Paco",
    detail: "67 años · cliente desde siempre",
    story: "Viene por las lentejas. Eso dice él.",
  },
  {
    name: "Carmen y Lola",
    detail: "vecinas de toda la vida",
    story:
      "Se sientan siempre juntas y saben más del pueblo que el ayuntamiento.",
  },
  {
    name: "Julián",
    detail: "el de la mesa del rincón",
    story: "Pidió una cerveza hace quince años y todavía no se ha ido.",
  },
]

export const barStories: BarStory[] = [
  {
    title: "El día que faltó pan.",
    date: "Un martes cualquiera, hace un par de años",
    text: "Se acabó a media mañana. Alguien fue corriendo al horno de la esquina y volvió con lo justo para aguantar la comida.",
    quip: "Duró ocho minutos. El pueblo todavía habla de aquello.",
  },
  {
    title: "La mesa del fondo.",
    date: "Cada sábado, más o menos, desde hace años",
    text: "Es la última antes de la cocina y la más incómoda de alcanzar. Aun así, casi nunca hace falta apartarla.",
    quip: "Nadie sabe por qué, pero siempre acaba ocupada.",
  },
  {
    title: "La cafetera.",
    date: "Desde que alguien recuerda",
    text: "Lleva más años en la barra que la mitad de los clientes. Se apaga sola, se enciende sola y nadie se atreve a cambiarla.",
    quip: "Hace más ruido que café, pero ahí sigue.",
  },
]

export const tips: Tip[] = [
  {
    title: "Ven con hambre",
    guidance: "Las raciones no están pensadas para quien pica.",
  },
  {
    title: "No preguntes por el menú degustación",
    guidance: "Aquí hay menú del día. Y algún día, ni eso.",
  },
  {
    title: "Avisa si tienes prisa",
    guidance: "Se puede ir rápido. Pero hay que decirlo antes de sentarse.",
  },
  {
    title: "Deja sitio para el postre",
    guidance: "El flan no perdona a quien se llena antes de tiempo.",
  },
  {
    title: "Saluda",
    guidance: "Aquí se entra saludando. Es lo único obligatorio.",
  },
]

export const history: HistoryEntry[] = [
  { year: "1978", event: "Se abre el bar." },
  { year: "1986", event: "Compramos otras seis sillas." },
  { year: "1999", event: "Llegó la primera cafetera que no daba miedo." },
  {
    year: "2012",
    event: "Pintamos la fachada. El pueblo tardó semanas en acostumbrarse.",
  },
  { year: "2026", event: "Seguimos aquí." },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vine a comer y me quedé tres horas. Nadie me echó, así que supongo que estuvo bien.",
    name: "Miguel",
  },
  {
    quote:
      "Pedimos de todo un poco. Se acabó de todo un poco. Volveremos antes de que se acabe otra vez.",
    name: "Ana y Pedro",
  },
  {
    quote: "El flan me ha hecho llorar. Del bueno, no del otro.",
    name: "Julián",
  },
  {
    quote:
      "Pregunté si tenían menú degustación. Me miraron raro y me trajeron callos. Hice bien en callarme.",
    name: "Carlos",
  },
]

export const rules: string[] = [
  "El pan se comparte.",
  "Se paga aunque conozcas al camarero.",
  "No se discute la tortilla.",
  "Puedes traer a tu abuela si cocina mejor que nosotros. No lo dudamos.",
  "El postre se pide aunque estés lleno. Ya te las apañarás.",
  "Queda prohibido decir 'experiencia gastronómica' dentro del local.",
]
