// Egypt — Unsplash image metadata.
// Every photograph used in this landing, persisted so the production build
// never calls api.unsplash.com. Attribution is rendered both per-photo
// (figcaption below each image) and as a consolidated "Photo credits" list
// under the footer. See the unsplash-images Skill for the full contract.

export interface UnsplashImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  color?: string
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

// Hero — Pyramids of Giza, cinematic wide angle, warm desert tones
export const heroImage: UnsplashImage = {
  id: "7EkyXZYeYsw",
  src: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cHlyYW1pZHMlMjBnaXphJTIwZGVzZXJ0JTIwY2luZW1hdGljfGVufDB8MHx8fDE3ODc5MTg0MDh8MA&ixlib=rb-4.1.0",
  alt: "The Great Pyramids of Giza rising from the desert under a warm sky with small figures walking below",
  width: 8606,
  height: 5737,
  color: "#d9a673",
  author: "Damir Babacic",
  authorUrl: `https://unsplash.com/@onemorephoto?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/people-walking-on-desert-during-daytime-7EkyXZYeYsw?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/7EkyXZYeYsw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cHlyYW1pZHMlMjBnaXphJTIwZGVzZXJ0JTIwY2luZW1hdGljfGVufDB8MHx8fDE3ODc5MTg0MDh8MA",
}

// Architecture — Karnak temple columns
export const karnakImage: UnsplashImage = {
  id: "JXQoqzSzpAw",
  src: "https://images.unsplash.com/photo-1584719763904-2799b453ba8d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8a2FybmFrJTIwdGVtcGxlJTIwY29sdW1ucyUyMGVneXB0fGVufDB8MHx8fDE3ODc5MTg0MjV8MA&ixlib=rb-4.1.0",
  alt: "Massive stone columns with hieroglyphic carvings at Karnak Temple under blue sky",
  width: 4032,
  height: 3024,
  color: "#8c400c",
  author: "Mo Gabrail",
  authorUrl: `https://unsplash.com/@gabrail?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-concrete-pillars-under-blue-sky-during-daytime-JXQoqzSzpAw?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/JXQoqzSzpAw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8a2FybmFrJTIwdGVtcGxlJTIwY29sdW1ucyUyMGVneXB0fGVufDB8MHx8fDE3ODc5MTg0MjV8MA",
}

// Architecture — Abu Simbel facade with colossal Ramses II statues
export const abuSimbelImage: UnsplashImage = {
  id: "yIzB-XB8P-I",
  src: "https://images.unsplash.com/photo-1777924986961-f36b95948146?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8YWJ1JTIwc2ltYmVsJTIwZWd5cHQlMjBmYWNhZGV8ZW58MHwwfHx8MTc4NzkxODQyNnww&ixlib=rb-4.1.0",
  alt: "Colossal statues of Ramses II carved into the rock face at Abu Simbel",
  width: 5303,
  height: 2907,
  color: "#c0a673",
  author: "Xiaoqian Shen",
  authorUrl: `https://unsplash.com/@shenxq0825?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/colossal-statues-of-ramses-ii-at-abu-simbel-egypt-yIzB-XB8P-I?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/yIzB-XB8P-I/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8YWJ1JTIwc2ltYmVsJTIwZWd5cHQlMjBmYWNhZGV8ZW58MHwwfHx8MTc4NzkxODQyNnww",
}

// Architecture — Luxor temple statues at dusk
export const luxorImage: UnsplashImage = {
  id: "lmI1572-5EI",
  src: "https://images.unsplash.com/photo-1681403507733-943ebe8a1819?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bHV4b3IlMjB0ZW1wbGUlMjBlZ3lwdCUyMGNvbHVtbnN8ZW58MHwwfHx8MTc4NzkxODQyNnww&ixlib=rb-4.1.0",
  alt: "Ancient statues standing guard at Luxor Temple against the Egyptian sky",
  width: 6000,
  height: 4000,
  color: "#738ca6",
  author: "Jordi Orts Segalés",
  authorUrl: `https://unsplash.com/@jordiorts?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-row-of-statues-in-front-of-a-pyramid-lmI1572-5EI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/lmI1572-5EI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bHV4b3IlMjB0ZW1wbGUlMjBlZ3lwdCUyMGNvbHVtbnN8ZW58MHwwfHx8MTc4NzkxODQyNnww",
}

// Hieroglyphs — ancient Egyptian wall carvings
export const hieroglyphsImage: UnsplashImage = {
  id: "_NJ2G1MoKxA",
  src: "https://images.unsplash.com/photo-1767938072703-1b046dffc161?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWd5cHRpYW4lMjBoaWVyb2dseXBocyUyMHN0b25lJTIwd2FsbCUyMGFuY2llbnR8ZW58MHwwfHx8MTc4NzkxODQ0NXww&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian hieroglyphs with painted figures and symbols on a temple wall",
  width: 5184,
  height: 3888,
  color: "#737373",
  author: "Suzi Kim",
  authorUrl: `https://unsplash.com/@kimsuzi08?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/ancient-egyptian-hieroglyphs-with-figures-and-symbols-_NJ2G1MoKxA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/_NJ2G1MoKxA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWd5cHRpYW4lMjBoaWVyb2dseXBocyUyMHN0b25lJTIwd2FsbCUyMGFuY2llbnR8ZW58MHwwfHx8MTc4NzkxODQ0NXww",
}

// Tutankhamun golden mask — museum display
export const tutankhamunImage: UnsplashImage = {
  id: "XADT1R4FTT4",
  src: "https://images.unsplash.com/photo-1786454474755-b76d7d6dedc0?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8dHV0YW5raGFtdW4lMjBtYXNrJTIwZ29sZCUyMHBoYXJhb2h8ZW58MHx8fHwxNzg3OTE4NDY5fDA&ixlib=rb-4.1.0",
  alt: "The golden funerary mask of Tutankhamun displayed in a dimly lit museum",
  width: 4640,
  height: 6960,
  color: "#260c0c",
  author: "Ludovic Delot",
  authorUrl: `https://unsplash.com/@delot?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/tutankhamun-golden-mask-in-museum-XADT1R4FTT4?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/XADT1R4FTT4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8dHV0YW5raGFtdW4lMjBtYXNrJTIwZ29sZCUyMHBoYXJhb2h8ZW58MHx8fHwxNzg3OTE4NDY5fDA",
}

// Desert under stars — night sky
export const desertStarsImage: UnsplashImage = {
  id: "x00aHcPllOo",
  src: "https://images.unsplash.com/photo-1567712631541-12e7def8aa20?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZGVzZXJ0JTIwc3RhcnMlMjBuaWdodCUyMHNreSUyMG1pbGt5JTIwd2F5fGVufDB8MHx8fDE3ODc5MTg0NDZ8MA&ixlib=rb-4.1.0",
  alt: "A vast desert landscape under a star-filled night sky with the Milky Way visible",
  width: 4320,
  height: 2700,
  color: "#262626",
  author: "David Billings",
  authorUrl: `https://unsplash.com/@dav_billings?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/mountain-photography-nighttime-x00aHcPllOo?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/x00aHcPllOo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZGVzZXJ0JTIwc3RhcnMlMjBuaWdodCUyMHNreSUyMG1pbGt5JTIwd2F5fGVufDB8MHx8fDE3ODc5MTg0NDZ8MA",
}

// Valley of the Kings — tomb entrance with painted hieroglyphic walls
export const valleyKingsImage: UnsplashImage = {
  id: "5aEHOQrb2Qk",
  src: "https://images.unsplash.com/photo-1632944398987-494eebe663be?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmFsbGV5JTIwa2luZ3MlMjBlZ3lwdCUyMGx1eG9yfGVufDB8MHx8fDE3ODc5MTg0NDd8MA&ixlib=rb-4.1.0",
  alt: "Stone staircase descending into an ancient Egyptian tomb with painted hieroglyphic walls",
  width: 6086,
  height: 4057,
  color: "#594026",
  author: "Dmitrii Zhodzishskii",
  authorUrl: `https://unsplash.com/@dmitrii_zhodzishskii?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/ancient-egyptian-tomb-with-painted-walls-5aEHOQrb2Qk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/5aEHOQrb2Qk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmFsbGV5JTIwa2luZ3MlMjBlZ3lwdCUyMGx1eG9yfGVufDB8MHx8fDE3ODc5MTg0NDd8MA",
}

// Desert panorama — rolling sand dunes for the "What Still Lies Beneath" section
export const desertOpenImage: UnsplashImage = {
  id: "pVr6wvUneMk",
  src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2FoYXJhJTIwZGVzZXJ0JTIwZHVuZXMlMjBlbXB0eSUyMGxhbmRzY2FwZXxlbnwwfDB8fHwxNzg3OTE4NDY4fDA&ixlib=rb-4.1.0",
  alt: "Endless sand dunes rolling toward the horizon under a pale sky",
  width: 5835,
  height: 3890,
  color: "#d9c0a6",
  author: "Wolfgang Hasselmann",
  authorUrl: `https://unsplash.com/@wolfgang_hasselmann?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/rolling-sand-dunes-in-desert-landscape-pVr6wvUneMk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/pVr6wvUneMk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2FoYXJhJTIwZGVzZXJ0JTIwZHVuZXMlMjBlbXB0eSUyMGxhbmRzY2FwZXxlbnwwfDB8fHwxNzg3OTE4NDY4fDA",
}

// Sphinx — for the timeline section
export const sphinxImage: UnsplashImage = {
  id: "GXIr_uawluA",
  src: "https://images.unsplash.com/photo-1562679299-266edbefd6d7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JlYXQlMjBzcGhpbnglMjBnaXphJTIwZWd5cHR8ZW58MHwwfHx8MTc4NzkxODQ0Nnww&ixlib=rb-4.1.0",
  alt: "The Great Sphinx of Giza standing guard before the pyramids",
  width: 6016,
  height: 4000,
  color: "#d9d9d9",
  author: "Adrian Dascal",
  authorUrl: `https://unsplash.com/@dascal?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/the-sphynx-egypt-GXIr_uawluA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/GXIr_uawluA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JlYXQlMjBzcGhpbnglMjBnaXphJTIwZWd5cHR8ZW58MHwwfHx8MTc4NzkxODQ0Nnww",
}

// Rosetta Stone — ancient carved stone
export const rosettaStoneImage: UnsplashImage = {
  id: "KOUvMTHK64I",
  src: "https://images.unsplash.com/photo-1588420914913-51f1d4f8f5cf?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cm9zZXR0YSUyMHN0b25lJTIwbXVzZXVtJTIwYXJ0aWZhY3R8ZW58MHx8fHwxNzg3OTE4NDY4fDA&ixlib=rb-4.1.0",
  alt: "Close-up of an ancient carved stone with inscriptions under museum lighting",
  width: 3583,
  height: 5430,
  color: "#a68c73",
  author: "Matteo Vistocco",
  authorUrl: `https://unsplash.com/@mrsunflower94?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-and-blue-mesh-textile-KOUvMTHK64I?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/KOUvMTHK64I/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cm9zZXR0YSUyMHN0b25lJTIwbXVzZXVtJTIwYXJ0aWZhY3R8ZW58MHx8fHwxNzg3OTE4NDY4fDA",
}

// Tomb paintings — burial chamber with painted walls
export const tombPaintingsImage: UnsplashImage = {
  id: "2K5kuh3NRvk",
  src: "https://images.unsplash.com/photo-1632944511358-0753f3f61283?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8dmFsbGV5JTIwa2luZ3MlMjBlZ3lwdCUyMGx1eG9yfGVufDB8MHx8fDE3ODc5MTg0NDd8MA&ixlib=rb-4.1.0",
  alt: "Vivid paintings and hieroglyphs decorating the walls of an ancient Egyptian burial chamber",
  width: 5837,
  height: 3891,
  color: "#40260c",
  author: "Dmitrii Zhodzishskii",
  authorUrl: `https://unsplash.com/@dmitrii_zhodzishskii?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-room-that-has-some-paintings-on-the-walls-2K5kuh3NRvk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/2K5kuh3NRvk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8dmFsbGV5JTIwa2luZ3MlMjBlZ3lwdCUyMGx1eG9yfGVufDB8MHx8fDE3ODc5MTg0NDd8MA",
}

// Egyptian artifact — Isis figurine
export const scarabImage: UnsplashImage = {
  id: "RYfZxZwnPas",
  src: "https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8ZWd5cHRpYW4lMjBhcnRpZmFjdCUyMG11c2V1bSUyMGFuY2llbnR8ZW58MHx8fHwxNzg3OTE4NDcwfDA&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian Isis figurine displayed under warm museum lighting",
  width: 6016,
  height: 4000,
  color: "#40260c",
  author: "Color Crescent",
  authorUrl: `https://unsplash.com/@colorcrescent?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/goddess-isis-figurine-wallpaper-RYfZxZwnPas?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/RYfZxZwnPas/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8ZWd5cHRpYW4lMjBhcnRpZmFjdCUyMG11c2V1bSUyMGFuY2llbnR8ZW58MHx8fHwxNzg3OTE4NDcwfDA",
}

// Hatshepsut — temple at Deir el-Bahari, monumental statue
export const hatshepsutImage: UnsplashImage = {
  id: "ADa9bb3tqR4",
  src: "https://images.unsplash.com/photo-1629468855534-450d7c4c5f72?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aGF0c2hlcHN1dCUyMHRlbXBsZSUyMGVneXB0fGVufDB8MHx8fDE3ODc5MTkzOTd8MA&ixlib=rb-4.1.0",
  alt: "Monumental stone statue at the temple of Hatshepsut under blue sky",
  width: 2252,
  height: 4000,
  color: "#402626",
  author: "Ahmed Shabana",
  authorUrl: `https://unsplash.com/@ahmedmshabana?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-concrete-statue-under-blue-sky-during-daytime-ADa9bb3tqR4?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/ADa9bb3tqR4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aGF0c2hlcHN1dCUyMHRlbXBsZSUyMGVneXB0fGVufDB8MHx8fDE3ODc5MTkzOTd8MA",
}

// Cleopatra — Egyptian queen dark statue
export const cleopatraImage: UnsplashImage = {
  id: "LP2gES9b5cc",
  src: "https://images.unsplash.com/photo-1602156754420-1857e53ff971?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2xlb3BhdHJhJTIwZWd5cHRpYW4lMjBxdWVlbiUyMHN0YXR1ZXxlbnwwfDB8fHwxNzg3OTE5Mzk3fDA&ixlib=rb-4.1.0",
  alt: "Dark stone statue of an ancient Egyptian queen in profile",
  width: 2000,
  height: 2976,
  color: "#26260c",
  author: "Julia Kadel",
  authorUrl: `https://unsplash.com/@juliakadel?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/black-concrete-statue-of-man-LP2gES9b5cc?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/LP2gES9b5cc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2xlb3BhdHJhJTIwZWd5cHRpYW4lMjBxdWVlbiUyMHN0YXR1ZXxlbnwwfDB8fHwxNzg3OTE5Mzk3fDA",
}

// Ra — sun setting over the pyramids (golden solar imagery)
export const raImage: UnsplashImage = {
  id: "EAVwlrs7Rr8",
  src: "https://images.unsplash.com/photo-1678038592492-d73c063bb9e2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3Vuc2V0JTIwZWd5cHQlMjBweXJhbWlkcyUyMGdvbGRlbnxlbnwwfDB8fHwxNzg3OTE5Mzk4fDA&ixlib=rb-4.1.0",
  alt: "The sun setting over the pyramids of Giza casting golden light across the desert",
  width: 6240,
  height: 4160,
  color: "#c05959",
  author: "Andreea Munteanu",
  authorUrl: `https://unsplash.com/@andreeamun?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/the-sun-is-setting-over-the-pyramids-of-giza-EAVwlrs7Rr8?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/EAVwlrs7Rr8/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3Vuc2V0JTIwZWd5cHQlMjBweXJhbWlkcyUyMGdvbGRlbnxlbnwwfDB8fHwxNzg3OTE5Mzk4fDA",
}

// Osiris — colorful Egyptian tomb mural with gods and figures
export const osirisImage: UnsplashImage = {
  id: "c-wf-F2nPjo",
  src: "https://images.unsplash.com/photo-1722684526355-0d196f28d9e6?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8b3NpcmlzJTIwZWd5cHRpYW4lMjB0b21iJTIwcGFpbnRpbmd8ZW58MHwwfHx8MTc4NzkxOTM5OHww&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian gods and figures depicted in a colorful tomb mural",
  width: 4464,
  height: 4853,
  color: "#d9c08c",
  author: "The New York Public Library",
  authorUrl: `https://unsplash.com/@nypl?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/ancient-egyptian-gods-and-figures-in-colorful-mural-c-wf-F2nPjo?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/c-wf-F2nPjo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8b3NpcmlzJTIwZWd5cHRpYW4lMjB0b21iJTIwcGFpbnRpbmd8ZW58MHwwfHx8MTc4NzkxOTM5OHww",
}

// Isis — ancient Egyptian stone carving relief
export const isisImage: UnsplashImage = {
  id: "O4CRoe-P_5o",
  src: "https://images.unsplash.com/photo-1675371627228-a4c5d9da99d2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aXNpcyUyMGVneXB0aWFuJTIwZ29kZGVzcyUyMHN0YXR1ZSUyMHJlbGllZnxlbnwwfDB8fHwxNzg3OTE5Mzk4fDA&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian stone relief carving depicting a figure with ritual implements",
  width: 3096,
  height: 5504,
  color: "#8c7373",
  author: "M abnodey",
  authorUrl: `https://unsplash.com/@abnodey?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-stone-carving-of-a-man-with-a-bow-and-arrow-O4CRoe-P_5o?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/O4CRoe-P_5o/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aXNpcyUyMGVneXB0aWFuJTIwZ29kZGVzcyUyMHN0YXR1ZSUyMHJlbGllZnxlbnwwfDB8fHwxNzg3OTE5Mzk4fDA",
}

// Anubis — stone statue of the jackal-headed god
export const anubisImage: UnsplashImage = {
  id: "lhigv4i9fnQ",
  src: "https://images.unsplash.com/photo-1758552878565-f039779b7b87?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW51YmlzJTIwZWd5cHRpYW4lMjBzdGF0dWUlMjBqYWNrYWx8ZW58MHwwfHx8MTc4NzkxOTM5OXww&ixlib=rb-4.1.0",
  alt: "Stone statue of Anubis the jackal-headed Egyptian god against a clear blue sky",
  width: 4160,
  height: 5824,
  color: "#8ca6c0",
  author: "Monody Le",
  authorUrl: `https://unsplash.com/@monodyle?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/stone-statue-of-anubis-against-a-clear-blue-sky-lhigv4i9fnQ?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/lhigv4i9fnQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW51YmlzJTIwZWd5cHRpYW4lMjBzdGF0dWUlMjBqYWNrYWx8ZW58MHwwfHx8MTc4NzkxOTM5OXww",
}

// Horus — Egyptian temple statue relief
export const horusImage: UnsplashImage = {
  id: "oCkZ6WicY8Q",
  src: "https://images.unsplash.com/photo-1626436819821-d2855be474c1?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aG9ydXMlMjBmYWxjb24lMjBlZ3lwdGlhbiUyMHRlbXBsZXxlbnwwfDB8fHwxNzg3OTE5Mzk5fDA&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian temple statue with carved figures and hieroglyphic reliefs",
  width: 5851,
  height: 3964,
  color: "#737373",
  author: "Tom Podmore",
  authorUrl: `https://unsplash.com/@tompodmore86?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-concrete-statue-of-man-oCkZ6WicY8Q?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/oCkZ6WicY8Q/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aG9ydXMlMjBmYWxjb24lMjBlZ3lwdGlhbiUyMHRlbXBsZXxlbnwwfDB8fHwxNzg3OTE5Mzk5fDA",
}

// Nefertiti — busts displayed in a museum
export const nefertitiImage: UnsplashImage = {
  id: "jLbtMsqhIss",
  src: "https://images.unsplash.com/photo-1771738117895-48324bef9d36?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bmVmZXJ0aXRpJTIwYnVzdCUyMGVneXB0aWFufGVufDB8MHx8fDE3ODc5MTkzOTl8MA&ixlib=rb-4.1.0",
  alt: "Replicas of the bust of Nefertiti displayed in a museum row under warm lighting",
  width: 4128,
  height: 6192,
  color: "#c0a68c",
  author: "Joey Zhou",
  authorUrl: `https://unsplash.com/@joeyzzz?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/five-busts-of-nefertiti-displayed-in-a-row-jLbtMsqhIss?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/jLbtMsqhIss/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bmVmZXJ0aXRpJTIwYnVzdCUyMGVneXB0aWFufGVufDB8MHx8fDE3ODc5MTkzOTl8MA",
}

// Canopic-era golden figurines — museum display
export const canopicImage: UnsplashImage = {
  id: "3hCZj1URTfk",
  src: "https://images.unsplash.com/photo-1764992668649-3bd705f4e49e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWd5cHRpYW4lMjBhcnRpZmFjdHMlMjBtdXNldW0lMjBhbmNpZW50JTIwZ29sZGVufGVufDB8MHx8fDE3ODc5MTk0MDB8MA&ixlib=rb-4.1.0",
  alt: "Three golden ancient Egyptian figurines on display in a museum",
  width: 5184,
  height: 3456,
  color: "#f3d9c0",
  author: "Sui Xu",
  authorUrl: `https://unsplash.com/@sui_xu?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/three-golden-ancient-egyptian-figurines-on-display-3hCZj1URTfk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/3hCZj1URTfk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWd5cHRpYW4lMjBhcnRpZmFjdHMlMjBtdXNldW0lMjBhbmNpZW50JTIwZ29sZGVufGVufDB8MHx8fDE3ODc5MTk0MDB8MA",
}

// Ankh — ancient Egyptian papyrus scroll with figures and hieroglyphs
export const ankhImage: UnsplashImage = {
  id: "UlHxDEtBDM0",
  src: "https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW5raCUyMGVneXB0aWFuJTIwYXJ0aWZhY3QlMjBhbmNpZW50fGVufDB8MHx8fDE3ODc5MTk0MDB8MA&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian papyrus scroll with painted figures and hieroglyphs featuring the ankh symbol",
  width: 6000,
  height: 4000,
  color: "#c08c59",
  author: "Lea Kobal",
  authorUrl: `https://unsplash.com/@leyko?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/ancient-egyptian-papyrus-scroll-UlHxDEtBDM0?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/UlHxDEtBDM0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW5raCUyMGVneXB0aWFuJTIwYXJ0aWZhY3QlMjBhbmNpZW50fGVufDB8MHx8fDE3ODc5MTk0MDB8MA",
}

// Dark tomb wall — dense hieroglyphs for torch-reveal section
export const tombWallImage: UnsplashImage = {
  id: "ZthlXkc3Dmk",
  src: "https://images.unsplash.com/photo-1654612514062-7cc235e7b68c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWd5cHRpYW4lMjB0b21iJTIwd2FsbCUyMGhpZXJvZ2x5cGhzJTIwZGFya3xlbnwwfDB8fHwxNzg3OTE5NDAwfDA&ixlib=rb-4.1.0",
  alt: "Ancient Egyptian tomb wall densely covered in carved hieroglyphs and symbols",
  width: 6944,
  height: 9248,
  color: "#402626",
  author: "Ahmed Assem",
  authorUrl: `https://unsplash.com/@ahmed_assem?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-wall-that-has-some-writing-on-it-ZthlXkc3Dmk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/ZthlXkc3Dmk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWd5cHRpYW4lMjB0b21iJTIwd2FsbCUyMGhpZXJvZ2x5cGhzJTIwZGFya3xlbnwwfDB8fHwxNzg3OTE5NDAwfDA",
}

// All images — used by the consolidated "Photo credits" list in Footer.
export const allImages: UnsplashImage[] = [
  heroImage,
  karnakImage,
  abuSimbelImage,
  luxorImage,
  hieroglyphsImage,
  tutankhamunImage,
  desertStarsImage,
  valleyKingsImage,
  desertOpenImage,
  sphinxImage,
  rosettaStoneImage,
  tombPaintingsImage,
  scarabImage,
  hatshepsutImage,
  cleopatraImage,
  raImage,
  osirisImage,
  isisImage,
  anubisImage,
  horusImage,
  nefertitiImage,
  canopicImage,
  ankhImage,
  tombWallImage,
]
