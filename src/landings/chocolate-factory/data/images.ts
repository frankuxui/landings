// Photographs sourced from Unsplash via the `unsplash-images` Skill. Search
// query, selection reasoning, and download-tracking are handled during the
// editorial task that populates this file — production only ever renders
// the persisted `src` below (images.unsplash.com), never the API.
import type { UnsplashImage } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const heroImage: UnsplashImage = {
  id: "XhWntGj2N98",
  src: "https://images.unsplash.com/photo-1551578657-a7e74acb0135?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dGVtcGVyZWQlMjBjaG9jb2xhdGUlMjBibG9jayUyMGRhcmslMjBnbG9zc3l8ZW58MXwwfHx8MTc4NzQ3NjU3MHww&ixlib=rb-4.1.0&w=1400&h=1050&fit=crop&auto=format&q=80",
  alt: "Bloque de chocolate negro atemperado, brillante, recién desmoldado",
  width: 6000,
  height: 4000,
  author: "Kaffee Meister",
  authorUrl: `https://unsplash.com/@kaffeemeister?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-chocolate-XhWntGj2N98?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/XhWntGj2N98/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dGVtcGVyZWQlMjBjaG9jb2xhdGUlMjBibG9jayUyMGRhcmslMjBnbG9zc3l8ZW58MXwwfHx8MTc4NzQ3NjU3MHww",
}

export const originImage: UnsplashImage = {
  id: "5VORokHbWEs",
  src: "https://images.unsplash.com/photo-1543840312-56c8bf2c350d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2FjYW8lMjBwb2RzJTIwaGFydmVzdCUyMHNvcnRpbmclMjB0YWJsZXxlbnwxfDB8fHwxNzg3NDc2NTcxfDA&ixlib=rb-4.1.0&w=1000&h=1333&fit=crop&auto=format&q=80",
  alt: "Cajón lleno de vainas de cacao maduras e inmaduras recién cosechadas",
  width: 5677,
  height: 3677,
  author: "Tomáš Malík",
  authorUrl: `https://unsplash.com/@malcoo?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-crate-filled-with-lots-of-ripe-and-unripe-fruit-5VORokHbWEs?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/5VORokHbWEs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2FjYW8lMjBwb2RzJTIwaGFydmVzdCUyMHNvcnRpbmclMjB0YWJsZXxlbnwxfDB8fHwxNzg3NDc2NTcxfDA",
}

export const factoryArtisanImage: UnsplashImage = {
  id: "TZ_cG3DXGyc",
  src: "https://images.unsplash.com/photo-1736788266037-9086fd28aee7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2hvY29sYXRpZXIlMjBoYW5kcyUyMGNyYWZ0aW5nJTIwY2hvY29sYXRlJTIwd29ya3Nob3B8ZW58MXwwfHx8MTc4NzQ3NjU3Mnww&ixlib=rb-4.1.0&w=1000&h=750&fit=crop&auto=format&q=80",
  alt: "Chocolatero cortando y terminando piezas de chocolate a mano en el obrador",
  width: 6240,
  height: 4160,
  author: "Cemrecan Yurtman",
  authorUrl: `https://unsplash.com/@cmrcn_?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-man-in-an-apron-is-making-chocolates-TZ_cG3DXGyc?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/TZ_cG3DXGyc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2hvY29sYXRpZXIlMjBoYW5kcyUyMGNyYWZ0aW5nJTIwY2hvY29sYXRlJTIwd29ya3Nob3B8ZW58MXwwfHx8MTc4NzQ3NjU3Mnww",
}

export const factoryIndustrialImage: UnsplashImage = {
  id: "oLS6IxceVNs",
  src: "https://images.unsplash.com/photo-1652211955967-99c892925469?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww&ixlib=rb-4.1.0&w=1000&h=750&fit=crop&auto=format&q=80",
  alt: "Interior de una línea de producción industrial de alimentos con maquinaria en acero inoxidable",
  width: 5922,
  height: 3948,
  author: "Arno Senoner",
  authorUrl: `https://unsplash.com/@arnosenoner?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-group-of-men-in-a-factory-oLS6IxceVNs?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/oLS6IxceVNs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww",
}

export const articleImages: Record<string, UnsplashImage> = {
  cacaoPods: {
    id: "3XpYFyIzSLQ",
    src: "https://images.unsplash.com/photo-1612942601088-ab13681275ec?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2FjYW8lMjBwb2RzJTIwaGFydmVzdCUyMHNvcnRpbmclMjB0YWJsZXxlbnwxfDB8fHwxNzg3NDc2NTcxfDA&ixlib=rb-4.1.0&w=1200&h=750&fit=crop&auto=format&q=80",
    alt: "Granos de cacao secos junto a semillas tostadas sobre mesa de madera",
    width: 3648,
    height: 2432,
    author: "Leonard Asuque",
    authorUrl: `https://unsplash.com/@leonardasuque?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/brown-coffee-beans-on-brown-wooden-table-3XpYFyIzSLQ?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/3XpYFyIzSLQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2FjYW8lMjBwb2RzJTIwaGFydmVzdCUyMHNvcnRpbmclMjB0YWJsZXxlbnwxfDB8fHwxNzg3NDc2NTcxfDA",
  },
  temperingMachine: {
    id: "xD5SWy7hMbw",
    src: "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww&ixlib=rb-4.1.0&w=1200&h=750&fit=crop&auto=format&q=80",
    alt: "Detalle de maquinaria industrial de acero usada en el proceso de templado",
    width: 5616,
    height: 3744,
    author: "Crystal Kwok",
    authorUrl: `https://unsplash.com/@spacexuan?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/gray-industrial-machine-xD5SWy7hMbw?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/xD5SWy7hMbw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww",
  },
  conchingDrum: {
    id: "bCgsKqFzUcg",
    src: "https://images.unsplash.com/photo-1651525670114-2b8117390b28?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww&ixlib=rb-4.1.0&w=1200&h=750&fit=crop&auto=format&q=80",
    alt: "Interior de fábrica con maquinaria de proceso continuo en funcionamiento",
    width: 5919,
    height: 3946,
    author: "Arno Senoner",
    authorUrl: `https://unsplash.com/@arnosenoner?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-people-in-a-factory-bCgsKqFzUcg?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/bCgsKqFzUcg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8Zm9vZCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZSUyMGNvbnZleW9yJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXwwfHx8MTc4NzQ3NjU4OXww",
  },
  cacaoPercentage: {
    id: "umtQ35YdAI4",
    src: "https://images.unsplash.com/photo-1646988073828-eabcf70d9e52?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8Y2FjYW8lMjBwZXJjZW50YWdlJTIwZGFyayUyMGNob2NvbGF0ZSUyMHNhbXBsZXMlMjBncmlkfGVufDF8MHx8fDE3ODc0NzY1OTF8MA&ixlib=rb-4.1.0&w=1200&h=750&fit=crop&auto=format&q=80",
    alt: "Primer plano de una tableta de chocolate marcada con su porcentaje de cacao",
    width: 5184,
    height: 3888,
    author: "Brett Jordan",
    authorUrl: `https://unsplash.com/@brett_jordan?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/a-close-up-of-a-chocolate-bar-with-the-number-55-on-it-umtQ35YdAI4?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/umtQ35YdAI4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8Y2FjYW8lMjBwZXJjZW50YWdlJTIwZGFyayUyMGNob2NvbGF0ZSUyMHNhbXBsZXMlMjBncmlkfGVufDF8MHx8fDE3ODc0NzY1OTF8MA",
  },
  qualityControl: {
    id: "R530_OH5Pk4",
    src: "https://images.unsplash.com/photo-1772986206858-a53535416178?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=1200&h=750&fit=crop&auto=format&q=80",
    alt: "Trozos de chocolate negro partidos, dispuestos para su cata y control de calidad",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-chocolate-pieces-and-white-squares-on-fabric-R530_OH5Pk4?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/R530_OH5Pk4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
}

export const productImages: Record<string, UnsplashImage> = {
  darkBar: {
    id: "le9uZiYdsEQ",
    src: "https://images.unsplash.com/photo-1772986206364-581899b9118c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=900&h=1200&fit=crop&auto=format&q=80",
    alt: "Trozos de tableta de chocolate negro 85% dispuestos sobre tela oscura",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-pieces-of-dark-chocolate-scattered-on-dark-fabric-le9uZiYdsEQ?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/le9uZiYdsEQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
  milkBar: {
    id: "T8bH5l-G7wQ",
    src: "https://images.unsplash.com/photo-1772986236859-df5e8cc48a45?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=900&h=1200&fit=crop&auto=format&q=80",
    alt: "Trozos de chocolate con leche partidos sobre tela oscura",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-chocolate-bars-and-pieces-on-dark-fabric-T8bH5l-G7wQ?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/T8bH5l-G7wQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
  cacaoPaste: {
    id: "_GGdi0ijd2g",
    src: "https://images.unsplash.com/photo-1772986258886-264bc0b4e530?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=900&h=1200&fit=crop&auto=format&q=80",
    alt: "Trozos de cacao puro sin aditivos esparcidos sobre tela oscura",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-chocolate-pieces-scattered-on-dark-red-fabric-_GGdi0ijd2g?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/_GGdi0ijd2g/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
  specialEdition: {
    id: "iT5sy8XOyJE",
    src: "https://images.unsplash.com/photo-1772986237447-65b8a172d75c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=900&h=1200&fit=crop&auto=format&q=80",
    alt: "Trozos de chocolate de edición especial con higo, sobre tela oscura",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-pieces-of-chocolate-and-white-chocolate-on-fabric-iT5sy8XOyJE?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/iT5sy8XOyJE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
  limitedBox: {
    id: "ZrafmOhLPO4",
    src: "https://images.unsplash.com/photo-1772986206808-f293da379724?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA&ixlib=rb-4.1.0&w=900&h=1200&fit=crop&auto=format&q=80",
    alt: "Selección de piezas de chocolate de colección limitada sobre tela oscura",
    width: 5472,
    height: 3648,
    author: "Tamanna Rumee",
    authorUrl: `https://unsplash.com/@tamanna_rumee?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/broken-chocolate-bars-and-pieces-on-dark-fabric-ZrafmOhLPO4?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/ZrafmOhLPO4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnMlMjBicm9rZW4lMjBwaWVjZXMlMjBwcm9kdWN0fGVufDF8MHx8fDE3ODc0NzY1OTB8MA",
  },
}
