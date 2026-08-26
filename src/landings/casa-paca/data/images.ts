import type { UnsplashImage } from "../types"

const utm = "utm_source=astro_landings_gallery&utm_medium=referral"
const profile = (url: string): string => `${url}?${utm}`
const source = (url: string): string => `${url}?${utm}`

export const heroImage: UnsplashImage = {
  id: "RhLliVRhrNM",
  src: "https://images.unsplash.com/photo-1769161019678-deab4df5622a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8dmlsbGFnZSUyMGJhciUyMHRlcnJhY2UlMjB0YWJsZXMlMjBjaGFpcnMlMjBzdHJlZXR8ZW58MXwwfHx8MTc4NzY5OTIxNHww&ixlib=rb-4.1.0",
  alt: "Terraza de un bar de pueblo con mesas y sillas a la sombra, listas para comer",
  width: 11648,
  height: 8736,
  color: "#262626",
  author: "Haberdoedas",
  authorUrl: profile("https://unsplash.com/@haberdoedas"),
  sourceUrl: source(
    "https://unsplash.com/photos/outdoor-cafe-seating-with-umbrellas-and-tables-RhLliVRhrNM",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/RhLliVRhrNM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8dmlsbGFnZSUyMGJhciUyMHRlcnJhY2UlMjB0YWJsZXMlMjBjaGFpcnMlMjBzdHJlZXR8ZW58MXwwfHx8MTc4NzY5OTIxNHww",
}

export const pacoImage: UnsplashImage = {
  id: "KOYRApO8VUc",
  src: "https://images.unsplash.com/photo-1759843541031-de4ca8594930?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWxkZXJseSUyMG1hbiUyMHBvcnRyYWl0JTIwc2l0dGluZyUyMGJhciUyMGNhZmV8ZW58MXwxfHx8MTc4NzY5OTE4MXww&ixlib=rb-4.1.0",
  alt: "Un hombre mayor ajustándose las gafas en la luz cálida y tenue de un bar de barrio",
  width: 4000,
  height: 5000,
  color: "#402626",
  author: "Collins Lesulie",
  authorUrl: profile("https://unsplash.com/@clesulie"),
  sourceUrl: source(
    "https://unsplash.com/photos/man-in-vest-adjusts-glasses-in-dimly-lit-room-KOYRApO8VUc",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/KOYRApO8VUc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWxkZXJseSUyMG1hbiUyMHBvcnRyYWl0JTIwc2l0dGluZyUyMGJhciUyMGNhZmV8ZW58MXwxfHx8MTc4NzY5OTE4MXww",
}

export const carmenLolaImage: UnsplashImage = {
  id: "F9BtEEetsGE",
  src: "https://images.unsplash.com/photo-1764173040319-4db683637611?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8dHdvJTIwb2xkZXIlMjB3b21lbiUyMGZyaWVuZHMlMjBsYXVnaGluZyUyMG91dGRvb3JzfGVufDF8MHx8fDE3ODc2OTkxODF8MA&ixlib=rb-4.1.0",
  alt: "Dos mujeres mayores sonriendo y riendo juntas al aire libre",
  width: 6123,
  height: 4082,
  color: "#597326",
  author: "Centre for Ageing Better",
  authorUrl: profile("https://unsplash.com/@ageing_better"),
  sourceUrl: source(
    "https://unsplash.com/photos/two-smiling-elderly-women-stand-in-a-park-F9BtEEetsGE",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/F9BtEEetsGE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8dHdvJTIwb2xkZXIlMjB3b21lbiUyMGZyaWVuZHMlMjBsYXVnaGluZyUyMG91dGRvb3JzfGVufDF8MHx8fDE3ODc2OTkxODF8MA",
}

export const julianImage: UnsplashImage = {
  id: "-T7jsRHbvHs",
  src: "https://images.unsplash.com/photo-1764173039868-451001f8b3a7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8bWFuJTIwc2l0dGluZyUyMGJhciUyMGNvdW50ZXIlMjBiZWVyJTIwZ2xhc3N8ZW58MXwwfHx8MTc4NzY5OTE4Mnww&ixlib=rb-4.1.0",
  alt: "Un hombre mayor charlando en una mesa del bar, vaso en mano",
  width: 5472,
  height: 3648,
  color: "#260c0c",
  author: "Centre for Ageing Better",
  authorUrl: profile("https://unsplash.com/@ageing_better"),
  sourceUrl: source(
    "https://unsplash.com/photos/elderly-man-talking-at-a-table-in-a-pub--T7jsRHbvHs",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/-T7jsRHbvHs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8bWFuJTIwc2l0dGluZyUyMGJhciUyMGNvdW50ZXIlMjBiZWVyJTIwZ2xhc3N8ZW58MXwwfHx8MTc4NzY5OTE4Mnww",
}

export const storyBreadImage: UnsplashImage = {
  id: "z65RVuno1v4",
  src: "https://images.unsplash.com/photo-1441122538760-c0466b6b44b9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZW1wdHklMjBicmVhZCUyMGJhc2tldCUyMHJ1c3RpYyUyMHdvb2RlbiUyMHRhYmxlfGVufDF8MHx8fDE3ODc2OTkxODN8MA&ixlib=rb-4.1.0",
  alt: "Una cesta de pan tostado sobre una mesa de madera desgastada",
  width: 5472,
  height: 3648,
  color: "#262626",
  author: "Brooke Cagle",
  authorUrl: profile("https://unsplash.com/@brookecagle"),
  sourceUrl: source(
    "https://unsplash.com/photos/brown-toast-bread-in-gray-steel-basket-z65RVuno1v4",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/z65RVuno1v4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZW1wdHklMjBicmVhZCUyMGJhc2tldCUyMHJ1c3RpYyUyMHdvb2RlbiUyMHRhYmxlfGVufDF8MHx8fDE3ODc2OTkxODN8MA",
}

export const storyWeddingImage: UnsplashImage = {
  id: "tnM8vpfQvts",
  src: "https://images.unsplash.com/photo-1761121575313-04109e79d9b2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8b3V0ZG9vciUyMHJ1c3RpYyUyMHZpbGxhZ2UlMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXwwfHx8MTc4NzY5OTE4M3ww&ixlib=rb-4.1.0",
  alt: "Mesas largas preparadas al aire libre para una boda, bajo una luz de atardecer",
  width: 5492,
  height: 3591,
  color: "#404026",
  author: "Lucas T Photography",
  authorUrl: profile("https://unsplash.com/@lucastphotography"),
  sourceUrl: source(
    "https://unsplash.com/photos/outdoor-wedding-ceremony-setup-with-sunset-lighting-tnM8vpfQvts",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/tnM8vpfQvts/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8b3V0ZG9vciUyMHJ1c3RpYyUyMHZpbGxhZ2UlMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXwwfHx8MTc4NzY5OTE4M3ww",
}

export const storyTableImage: UnsplashImage = {
  id: "bWccSy5Ivcc",
  src: "https://images.unsplash.com/photo-1675965218658-bd6f516742ac?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cnVzdGljJTIwcmVzdGF1cmFudCUyMHRhYmxlJTIwd2luZSUyMGdsYXNzZXN8ZW58MXwwfHx8MTc4NzY5OTIxNHww&ixlib=rb-4.1.0",
  alt: "Una mesa de madera puesta con copas de vino",
  width: 5760,
  height: 3840,
  color: "#260c0c",
  author: "CJ Toscano",
  authorUrl: profile("https://unsplash.com/@cjtoscano"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-wooden-table-topped-with-glasses-of-wine-bWccSy5Ivcc",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/bWccSy5Ivcc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cnVzdGljJTIwcmVzdGF1cmFudCUyMHRhYmxlJTIwd2luZSUyMGdsYXNzZXN8ZW58MXwwfHx8MTc4NzY5OTIxNHww",
}

export const kitchenImage: UnsplashImage = {
  id: "Bttg7j_0TTs",
  src: "https://images.unsplash.com/photo-1775318254650-13a52d890a1f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWxkZXJseSUyMHdvbWFuJTIwY29va2luZyUyMHRyYWRpdGlvbmFsJTIwa2l0Y2hlbnxlbnwxfDB8fHwxNzg3Njk5MjE1fDA&ixlib=rb-4.1.0",
  alt: "Una mujer mayor preparando comida en los fogones de una cocina sencilla",
  width: 5184,
  height: 3456,
  color: "#264026",
  author: "DOKYUNG KIM",
  authorUrl: profile("https://unsplash.com/@jindujiong"),
  sourceUrl: source(
    "https://unsplash.com/photos/an-elderly-woman-is-preparing-food-in-a-kitchen-Bttg7j_0TTs",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Bttg7j_0TTs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWxkZXJseSUyMHdvbWFuJTIwY29va2luZyUyMHRyYWRpdGlvbmFsJTIwa2l0Y2hlbnxlbnwxfDB8fHwxNzg3Njk5MjE1fDA",
}

export const villageImage: UnsplashImage = {
  id: "7BmyH3_Lhso",
  src: "https://images.unsplash.com/photo-1786476484616-ea48621b26d4?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c21hbGwlMjBldXJvcGVhbiUyMHZpbGxhZ2UlMjBzcXVhcmUlMjBwbGF6YXxlbnwxfDB8fHwxNzg3Njk5MjE1fDA&ixlib=rb-4.1.0",
  alt: "Una calle empedrada del pueblo con edificios tradicionales y mesas al aire libre",
  width: 3840,
  height: 2560,
  color: "#c0a68c",
  author: "Dawid Tkocz",
  authorUrl: profile("https://unsplash.com/@dawidtkocz"),
  sourceUrl: source(
    "https://unsplash.com/photos/cobblestone-street-in-mittenwald-7BmyH3_Lhso",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/7BmyH3_Lhso/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c21hbGwlMjBldXJvcGVhbiUyMHZpbGxhZ2UlMjBzcXVhcmUlMjBwbGF6YXxlbnwxfDB8fHwxNzg3Njk5MjE1fDA",
}

export const handsImage: UnsplashImage = {
  id: "zTG8dSz10tQ",
  src: "https://images.unsplash.com/photo-1513844316321-dd2466411c4c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8aGFuZHMlMjBrbmVhZGluZyUyMGRvdWdoJTIwYmFrZXJ5fGVufDF8MHx8fDE3ODc2OTkyMTZ8MA&ixlib=rb-4.1.0",
  alt: "Manos amasando pan sobre una encimera enharinada en una panadería de pueblo",
  width: 5184,
  height: 3456,
  color: "#c0c0a6",
  author: "Victor Rodríguez Iglesias",
  authorUrl: profile("https://unsplash.com/@victorrdez"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-person-kneading-dough-on-top-of-a-counter-zTG8dSz10tQ",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/zTG8dSz10tQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8aGFuZHMlMjBrbmVhZGluZyUyMGRvdWdoJTIwYmFrZXJ5fGVufDF8MHx8fDE3ODc2OTkyMTZ8MA",
}

export const counterImage: UnsplashImage = {
  id: "-HldkjqxnXI",
  src: "https://images.unsplash.com/photo-1745629161091-fc3b166a52a9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8dHJhZGl0aW9uYWwlMjBiYXIlMjBjb3VudGVyJTIwdGlsZXMlMjBzcGFpbnxlbnwxfDB8fHwxNzg3Njk5MjE3fDA&ixlib=rb-4.1.0",
  alt: "Azulejos pintados a mano en azul y blanco sobre una pared del bar",
  width: 8256,
  height: 6192,
  color: "#594040",
  author: "Ahmet Ölçüm",
  authorUrl: profile("https://unsplash.com/@ahmetolcum"),
  sourceUrl: source(
    "https://unsplash.com/photos/blue-and-white-floral-tiles-decorate-a-wall--HldkjqxnXI",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/-HldkjqxnXI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8dHJhZGl0aW9uYWwlMjBiYXIlMjBjb3VudGVyJTIwdGlsZXMlMjBzcGFpbnxlbnwxfDB8fHwxNzg3Njk5MjE3fDA",
}

export const platesImage: UnsplashImage = {
  id: "y_7KLDoPlAc",
  src: "https://images.unsplash.com/photo-1664741662725-bd131742b7b7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aG9tZW1hZGUlMjBzdGV3JTIwcGxhdGUlMjBydXN0aWMlMjB0YWJsZXxlbnwxfDB8fHwxNzg3Njk5MjE3fDA&ixlib=rb-4.1.0",
  alt: "Un guiso casero servido con pan sobre una mesa rústica",
  width: 5619,
  height: 3746,
  color: "#40260c",
  author: "Laura Ohlman",
  authorUrl: profile("https://unsplash.com/@ohlmanphotography"),
  sourceUrl: source("https://unsplash.com/photos/a-bowl-of-food-y_7KLDoPlAc"),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/y_7KLDoPlAc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aG9tZW1hZGUlMjBzdGV3JTIwcGxhdGUlMjBydXN0aWMlMjB0YWJsZXxlbnwxfDB8fHwxNzg3Njk5MjE3fDA",
}

export const tablesImage: UnsplashImage = {
  id: "dij-Mm_BkV4",
  src: "https://images.unsplash.com/photo-1771520283028-7189aee2ef01?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZW1wdHklMjByZXN0YXVyYW50JTIwdGFibGVzJTIwd29vZGVuJTIwaW50ZXJpb3J8ZW58MXwwfHx8MTc4NzY5OTIxOHww&ixlib=rb-4.1.0",
  alt: "Un comedor tradicional vacío con mesas y sillas sencillas de madera",
  width: 11310,
  height: 8483,
  color: "#26260c",
  author: "Preillumination SeTh",
  authorUrl: profile("https://unsplash.com/@7seth"),
  sourceUrl: source(
    "https://unsplash.com/photos/empty-traditional-restaurant-with-wooden-tables-and-chairs-dij-Mm_BkV4",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/dij-Mm_BkV4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZW1wdHklMjByZXN0YXVyYW50JTIwdGFibGVzJTIwd29vZGVuJTIwaW50ZXJpb3J8ZW58MXwwfHx8MTc4NzY5OTIxOHww",
}

export const ctaGroupImage: UnsplashImage = {
  id: "F2lsSOd2DS8",
  src: "https://images.unsplash.com/photo-1681657687044-9bde75edb38e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8bGFyZ2UlMjBncm91cCUyMGZyaWVuZHMlMjBkaW5uZXIlMjB0YWJsZSUyMHJlc3RhdXJhbnR8ZW58MXwwfHx8MTc4NzY5OTIxOHww&ixlib=rb-4.1.0",
  alt: "Una mesa larga llena de gente comiendo junta al aire libre",
  width: 4608,
  height: 2592,
  color: "#26260c",
  author: "Bohdan",
  authorUrl: profile("https://unsplash.com/@undiabler"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-eating-food-F2lsSOd2DS8",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/F2lsSOd2DS8/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8bGFyZ2UlMjBncm91cCUyMGZyaWVuZHMlMjBkaW5uZXIlMjB0YWJsZSUyMHJlc3RhdXJhbnR8ZW58MXwwfHx8MTc4NzY5OTIxOHww",
}

export const neighborImages: UnsplashImage[] = [
  pacoImage,
  carmenLolaImage,
  julianImage,
]
export const storyImages: UnsplashImage[] = [
  storyBreadImage,
  storyTableImage,
  counterImage,
]
export const galleryImages: UnsplashImage[] = [
  platesImage,
  handsImage,
  kitchenImage,
  storyWeddingImage,
  neighborImages[2],
  tablesImage,
  villageImage,
]
export const allImages: UnsplashImage[] = [
  heroImage,
  pacoImage,
  carmenLolaImage,
  julianImage,
  storyBreadImage,
  storyWeddingImage,
  storyTableImage,
  kitchenImage,
  villageImage,
  handsImage,
  counterImage,
  platesImage,
  tablesImage,
  ctaGroupImage,
]
