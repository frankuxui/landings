// Terroir — Unsplash image metadata.
// Every photograph used in this landing, persisted so the production build
// never calls api.unsplash.com. Attribution is rendered both per-photo
// (credit below each image) and as a consolidated "Photo credits" list
// under the footer.

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

// Hero — dramatic vineyard landscape at sunset
export const heroImage: UnsplashImage = {
  id: "4_jhDO54BYg",
  src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.1.0",
  alt: "Filas de viñedos extendiendose hacia las montañas bajo un cielo dorado al atardecer",
  width: 5184,
  height: 3456,
  author: "Kym Ellis",
  authorUrl: `https://unsplash.com/@kymellis?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/vineyard-field-4_jhDO54BYg?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/4_jhDO54BYg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8dmlueWFyZCUyMGxhbmRzY2FwZXxlbnwwfDB8fHwxNzI0ODUyMDAwfDA",
}

// Terroir concept — soil/earth closeup
export const soilImage: UnsplashImage = {
  id: "rGhQgTsAj58",
  src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.1.0",
  alt: "Tierra rica y oscura de viñedo con textura visible de minerales",
  width: 5472,
  height: 3648,
  author: "Dylan de Jonge",
  authorUrl: `https://unsplash.com/@dylandejonge?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/soil-closeup-rGhQgTsAj58?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/rGhQgTsAj58/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Vineyard rows — geometric lines
export const vineyardRowsImage: UnsplashImage = {
  id: "ERtq27aQLn4",
  src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.1.0",
  alt: "Filas geometricas de viñedos formando lineas que se pierden en el horizonte",
  width: 4000,
  height: 6000,
  author: "David Kohler",
  authorUrl: `https://unsplash.com/@davidkohler?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/vineyard-rows-ERtq27aQLn4?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/ERtq27aQLn4/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Grapes on vine — harvest close-up
export const grapesImage: UnsplashImage = {
  id: "jTnHfbih3Ww",
  src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-4.1.0",
  alt: "Racimo de uvas tintas maduras colgando de la vid",
  width: 4000,
  height: 6000,
  author: "Maja Petric",
  authorUrl: `https://unsplash.com/@majapetric?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/grapes-on-vine-jTnHfbih3Ww?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/jTnHfbih3Ww/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Wine barrels in cellar
export const barrelsImage: UnsplashImage = {
  id: "PJhc0JV46_I",
  src: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?ixlib=rb-4.1.0",
  alt: "Filas de barricas de roble en una bodega oscura iluminada suavemente",
  width: 6000,
  height: 4000,
  author: "Aron Visuals",
  authorUrl: `https://unsplash.com/@aronvisuals?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/wine-barrels-PJhc0JV46_I?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/PJhc0JV46_I/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Wine being poured — fermentation / cellar
export const pouringImage: UnsplashImage = {
  id: "3uJEFpGqB1I",
  src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.1.0",
  alt: "Vino tinto siendo vertido en una copa de cristal",
  width: 4000,
  height: 6000,
  author: "Kym Ellis",
  authorUrl: `https://unsplash.com/@kymellis?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/wine-pouring-3uJEFpGqB1I?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/3uJEFpGqB1I/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Wine glass — tasting
export const glassImage: UnsplashImage = {
  id: "5Oe8KFH5998",
  src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.1.0",
  alt: "Copa de vino tinto sobre una mesa de madera con luz suave lateral",
  width: 4288,
  height: 2848,
  author: "Kelsey Knight",
  authorUrl: `https://unsplash.com/@kelseyknight?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/wine-glass-5Oe8KFH5998?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/5Oe8KFH5998/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Steep vineyard / Priorat-style terraces
export const steepVineyardImage: UnsplashImage = {
  id: "sVWA1zvMD3E",
  src: "https://images.unsplash.com/photo-1660903293997-efd8ee1abf9a?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEyfA&ixlib=rb-4.1.0",
  alt: "Viñedos escalonados sobre una ladera seca frente a una sierra rocosa",
  width: 2750,
  height: 1833,
  color: "#405973",
  author: "Mario La Pergola",
  authorUrl: `https://unsplash.com/@mlapergolaphoto?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-building-on-a-hill-sVWA1zvMD3E?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/sVWA1zvMD3E/download?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEyfA",
}

// Food pairing / gastronomy
export const foodImage: UnsplashImage = {
  id: "kcA-c3f_3FE",
  src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0",
  alt: "Plato de alta cocina con presentacion elegante junto a una copa de vino",
  width: 4928,
  height: 3264,
  author: "Jay Wennington",
  authorUrl: `https://unsplash.com/@jaywennington?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/food-plating-kcA-c3f_3FE?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/kcA-c3f_3FE/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Winemaker portrait — person working
export const winemakerImage: UnsplashImage = {
  id: "DtDlVpy-vvQ",
  src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0",
  alt: "Bodeguero examinando vino en una copa en la bodega",
  width: 3648,
  height: 5472,
  author: "Grape Things",
  authorUrl: `https://unsplash.com/@grapethings?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/winemaker-DtDlVpy-vvQ?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/DtDlVpy-vvQ/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Cellar portrait — people behind wine
export const cellarPortraitImage: UnsplashImage = {
  id: "cNgVMzYZf5w",
  src: "https://images.unsplash.com/photo-1771086061785-ac187f1969ad?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8d2luZW1ha2VyJTIwcG9ydHJhaXQlMjB3aW5lJTIwY2VsbGFyfGVufDF8MXx8fDE3ODc5NTQ4NTF8MA&ixlib=rb-4.1.0",
  alt: "Persona de bodega frente a estanterias de botellas antiguas",
  width: 2309,
  height: 2887,
  author: "Nina Antonian",
  authorUrl: `https://unsplash.com/@ninouke?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/woman-standing-in-front-of-wine-bottles-on-shelves-cNgVMzYZf5w?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/cNgVMzYZf5w/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8d2luZW1ha2VyJTIwcG9ydHJhaXQlMjB3aW5lJTIwY2VsbGFyfGVufDF8MXx8fDE3ODc5NTQ4NTF8MA",
}

// Harvest portrait — people behind wine
export const harvestPortraitImage: UnsplashImage = {
  id: "0GNF-lP1KkI",
  src: "https://images.unsplash.com/photo-1658994021973-2789b6512368?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8Z3JhcGUlMjBoYXJ2ZXN0JTIwd29ya2VyJTIwcG9ydHJhaXR8ZW58MXwxfHx8MTc4Nzk1NDg1Mnww&ixlib=rb-4.1.0",
  alt: "Vendimiador sosteniendo un racimo de uvas maduras en el viñedo",
  width: 3632,
  height: 5456,
  author: "Makis Panagopoulos",
  authorUrl: `https://unsplash.com/@notanexpertgr?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-man-holding-a-bunch-of-grapes-0GNF-lP1KkI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/0GNF-lP1KkI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8Z3JhcGUlMjBoYXJ2ZXN0JTIwd29ya2VyJTIwcG9ydHJhaXR8ZW58MXwxfHx8MTc4Nzk1NDg1Mnww",
}

// Wine bottle — closeup
export const bottleImage: UnsplashImage = {
  id: "3skig0Fy23o",
  src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.1.0",
  alt: "Botella de vino tinto con etiqueta elegante sobre fondo oscuro",
  width: 3456,
  height: 5184,
  author: "Lefteris kallergis",
  authorUrl: `https://unsplash.com/@lefterisk?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/wine-bottle-3skig0Fy23o?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/3skig0Fy23o/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Archived wine bottles — old wines gallery
export const archiveBottlesImage: UnsplashImage = {
  id: "CPMZguYURMw",
  src: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZHVzdHklMjB3aW5lJTIwYm90dGxlJTIwY2VsbGFyfGVufDF8MXx8fDE3ODc5NTQ2OTB8MA&ixlib=rb-4.1.0",
  alt: "Botellas antiguas guardadas en una estanteria oscura de bodega",
  width: 3648,
  height: 5472,
  author: "Klara Kulikova",
  authorUrl: `https://unsplash.com/@kkalerry?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/wine-bottles-on-rack-CPMZguYURMw?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/CPMZguYURMw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZHVzdHklMjB3aW5lJTIwYm90dGxlJTIwY2VsbGFyfGVufDF8MXx8fDE3ODc5NTQ2OTB8MA",
}

// Friends at table — testimonial
export const tableImage: UnsplashImage = {
  id: "OMXWJp28_Fk",
  src: "https://images.unsplash.com/photo-1598284443905-995dabe870fa?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEzfA&ixlib=rb-4.1.0",
  alt: "Comensales reunidos alrededor de una mesa mientras se sirve vino",
  width: 5760,
  height: 3840,
  color: "#f3f3f3",
  author: "Fantesca Estate & Winery",
  authorUrl: `https://unsplash.com/@fantesca?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/people-sitting-around-table-with-wine-glasses-and-wine-bottle-OMXWJp28_Fk?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/OMXWJp28_Fk/download?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEzfA",
}

// Old wine cellar — underground
export const cellarImage: UnsplashImage = {
  id: "uXchDIKs4GI",
  src: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-4.1.0",
  alt: "Bodega subterranea con arcos de piedra y barricas alineadas",
  width: 5472,
  height: 3648,
  author: "Hermes Rivera",
  authorUrl: `https://unsplash.com/@hermez777?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/old-cellar-uXchDIKs4GI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/uXchDIKs4GI/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Oak barrel closeup
export const oakImage: UnsplashImage = {
  id: "NW9Wh4CvT7k",
  src: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-4.1.0",
  alt: "Detalle de la superficie de una barrica de roble con marcas de tonelero",
  width: 4000,
  height: 6000,
  author: "Rodrigo Abreu",
  authorUrl: `https://unsplash.com/@rodrigospabreu?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/oak-barrel-NW9Wh4CvT7k?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/NW9Wh4CvT7k/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Vine leaves — detail
export const leavesImage: UnsplashImage = {
  id: "Hli3R6LKibo",
  src: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.1.0",
  alt: "Hojas de vid con tonos otoñales iluminadas a contraluz",
  width: 4608,
  height: 3072,
  author: "Karsten Wurth",
  authorUrl: `https://unsplash.com/@karsten_wuerth?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/vine-leaves-Hli3R6LKibo?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Hli3R6LKibo/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Winery architecture — modern
export const wineryImage: UnsplashImage = {
  id: "_lVEQkHG9nQ",
  src: "https://images.unsplash.com/photo-1605722751821-cd8df0b9f954?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEzfA&ixlib=rb-4.1.0",
  alt: "Bodega contemporanea de grandes voladizos junto a las hileras del viñedo",
  width: 7952,
  height: 5304,
  color: "#bae1ff",
  author: "Morgan Bok",
  authorUrl: `https://unsplash.com/@morganbokart?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/modern-building-beside-lush-green-vineyard-on-sunny-day-_lVEQkHG9nQ?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/_lVEQkHG9nQ/download?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3OTkwNTEzfA",
}

// Harvest workers
export const harvestImage: UnsplashImage = {
  id: "4SJozI2PVXE",
  src: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-4.1.0",
  alt: "Trabajadores recolectando uvas durante la vendimia al amanecer",
  width: 5472,
  height: 3648,
  author: "Sven Wilhelm",
  authorUrl: `https://unsplash.com/@svenwilhelm?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/harvest-workers-4SJozI2PVXE?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/4SJozI2PVXE/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Aerial vineyard
export const aerialImage: UnsplashImage = {
  id: "YoadQb46v6k",
  src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.1.0",
  alt: "Vista aerea de viñedos formando patrones geometricos en el paisaje",
  width: 4000,
  height: 6000,
  author: "Sven Wilhelm",
  authorUrl: `https://unsplash.com/@svenwilhelm?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/aerial-vineyard-YoadQb46v6k?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/YoadQb46v6k/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

// Cheese/charcuterie board — pairing
export const cheeseImage: UnsplashImage = {
  id: "Gg5-K6s2HXY",
  src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.1.0",
  alt: "Tabla de quesos y embutidos curados con aceitunas y pan artesano",
  width: 5184,
  height: 3456,
  author: "Toa Heftiba",
  authorUrl: `https://unsplash.com/@heftiba?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/cheese-board-Gg5-K6s2HXY?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Gg5-K6s2HXY/download?ixid=M3wxMDQwNDk5fDB8MXx8fHwxNzI0ODUyMDAwfDA",
}

export const allImages: UnsplashImage[] = [
  heroImage,
  soilImage,
  vineyardRowsImage,
  grapesImage,
  barrelsImage,
  pouringImage,
  glassImage,
  steepVineyardImage,
  foodImage,
  winemakerImage,
  cellarPortraitImage,
  harvestPortraitImage,
  bottleImage,
  archiveBottlesImage,
  tableImage,
  cellarImage,
  oakImage,
  leavesImage,
  wineryImage,
  harvestImage,
  aerialImage,
  cheeseImage,
]
