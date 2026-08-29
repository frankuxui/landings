// Budapest — Unsplash image metadata.
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

export interface HistoricalImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  title: string
  date: string
  author: string
  sourceName: string
  sourceUrl: string
  license: string
  licenseUrl: string
}

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

// Hero — Parliament and Danube panorama at golden hour
export const heroImage: UnsplashImage = {
  id: "sMyQb3i9bNA",
  src: "https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBkYW51YmUlMjBwYXJsaWFtZW50JTIwcGFub3JhbWF8ZW58MHwwfHx8MTc4Nzk5MTQzMXww&ixlib=rb-4.1.0",
  alt: "The Hungarian Parliament Building on the banks of the Danube River at golden hour",
  width: 5131,
  height: 3423,
  color: "#c07340",
  author: "Ervin Lukacs",
  authorUrl: `https://unsplash.com/@lukerv4?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/hungarian-parliament-building-in-budapest-sMyQb3i9bNA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/sMyQb3i9bNA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBkYW51YmUlMjBwYXJsaWFtZW50JTIwcGFub3JhbWF8ZW58MHwwfHx8MTc4Nzk5MTQzMXww",
}

// Danube section — aerial view of Budapest and the Danube
export const danubeImage: UnsplashImage = {
  id: "VPETME4zVWM",
  src: "https://images.unsplash.com/photo-1551867633-194f125bddfa?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjBkYW51YmUlMjByaXZlciUyMHdpZGV8ZW58MHwwfHx8MTc4Nzk5MTQ4Mnww&ixlib=rb-4.1.0",
  alt: "Aerial view of Budapest showing bridges spanning the Danube between Buda and Pest",
  width: 5439,
  height: 3626,
  color: "#59738c",
  author: "Bence Balla-Schottner",
  authorUrl: `https://unsplash.com/@ballaschottner?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/aerial-photography-of-buildings-viewing-bridge-and-sea-during-daytime-VPETME4zVWM?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/VPETME4zVWM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjBkYW51YmUlMjByaXZlciUyMHdpZGV8ZW58MHwwfHx8MTc4Nzk5MTQ4Mnww",
}

// Buda side — Castle and hill from the Danube
export const budaCastleImage: UnsplashImage = {
  id: "TEVvej3thGI",
  src: "https://images.unsplash.com/photo-1590935175663-5a80aca9a944?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYSUyMGNhc3RsZSUyMGJ1ZGFwZXN0JTIwaGlsbHxlbnwwfDB8fHwxNzg3OTkxNDU5fDA&ixlib=rb-4.1.0",
  alt: "Buda Castle perched on the hillside overlooking the Danube with boats below",
  width: 5959,
  height: 3973,
  color: "#738ca6",
  author: "Adam Hornyak",
  authorUrl: `https://unsplash.com/@adamhornyak?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/white-and-brown-concrete-building-near-body-of-water-under-white-clouds-and-blue-sky-during-TEVvej3thGI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/TEVvej3thGI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYSUyMGNhc3RsZSUyMGJ1ZGFwZXN0JTIwaGlsbHxlbnwwfDB8fHwxNzg3OTkxNDU5fDA",
}

// Pest side — Parliament building close-up from across the Danube
export const parliamentImage: UnsplashImage = {
  id: "afUfiI7IXjI",
  src: "https://images.unsplash.com/photo-1581684395079-85c26f8f69f0?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA&ixlib=rb-4.1.0",
  alt: "Hungarian Parliament Building reflected in the winter Danube",
  width: 5148,
  height: 3596,
  color: "#8ca6c0",
  author: "Mihaly Koles",
  authorUrl: `https://unsplash.com/@mihaly_koles?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/brown-and-white-concrete-building-near-body-of-water-during-daytime-afUfiI7IXjI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/afUfiI7IXjI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA",
}

// Chain Bridge — illuminated at night
export const chainBridgeImage: UnsplashImage = {
  id: "kDP_lvDzh2c",
  src: "https://images.unsplash.com/photo-1507622560124-621e26755fb8?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2hhaW4lMjBicmlkZ2UlMjBidWRhcGVzdCUyMG5pZ2h0fGVufDB8MHx8fDE3ODc5OTE0NTh8MA&ixlib=rb-4.1.0",
  alt: "Chain Bridge illuminated at night spanning the Danube with city lights reflected in the water",
  width: 4879,
  height: 3253,
  color: "#260c0c",
  author: "Dan Freeman",
  authorUrl: `https://unsplash.com/@danfreemanphoto?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/landscape-photo-of-bridge-with-lights-kDP_lvDzh2c?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/kDP_lvDzh2c/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2hhaW4lMjBicmlkZ2UlMjBidWRhcGVzdCUyMG5pZ2h0fGVufDB8MHx8fDE3ODc5OTE0NTh8MA",
}

// Liberty Bridge — aerial view at night
export const libertyBridgeImage: UnsplashImage = {
  id: "3aubsNmGuLE",
  src: "https://images.unsplash.com/photo-1520986840182-5b15f734c85c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA&ixlib=rb-4.1.0",
  alt: "Liberty Bridge in Budapest illuminated at night from an aerial perspective",
  width: 5502,
  height: 3638,
  color: "#0c0c26",
  author: "Lucas Davies",
  authorUrl: `https://unsplash.com/@lucas_davies?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/aerial-photography-of-lighted-concrete-bridge-3aubsNmGuLE?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/3aubsNmGuLE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA",
}

// Margaret Bridge — daytime view across the Danube
export const margaretBridgeImage: UnsplashImage = {
  id: "Rxq6wvbPuJI",
  src: "https://images.unsplash.com/photo-1576431222164-bb15dd111a9f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA&ixlib=rb-4.1.0",
  alt: "A bridge spanning the Danube in Budapest with the city skyline in the background",
  width: 5184,
  height: 3456,
  color: "#738ca6",
  author: "Thomas Winkler",
  authorUrl: `https://unsplash.com/@thomsonwinkler?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-view-of-a-bridge-spanning-over-a-river-Rxq6wvbPuJI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Rxq6wvbPuJI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA",
}

// Fisherman's Bastion
export const bastionImage: UnsplashImage = {
  id: "z1xQYqkehLc",
  src: "https://images.unsplash.com/photo-1577366643984-84350d3ebf2e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZmlzaGVybWFucyUyMGJhc3Rpb24lMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYwfDA&ixlib=rb-4.1.0",
  alt: "The white turrets and arches of Fisherman's Bastion in Budapest",
  width: 5888,
  height: 3925,
  color: "#a6c0d9",
  author: "Tobias Reich",
  authorUrl: `https://unsplash.com/@electerious?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/white-concrete-castle-z1xQYqkehLc?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/z1xQYqkehLc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZmlzaGVybWFucyUyMGJhc3Rpb24lMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYwfDA",
}

// Matthias Church
export const matthiasChurchImage: UnsplashImage = {
  id: "c6SLlKgIcwI",
  src: "https://images.unsplash.com/photo-1726318580020-1d478afd17f3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bWF0dGhpYXMlMjBjaHVyY2glMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDgxfDA&ixlib=rb-4.1.0",
  alt: "The ornate Gothic spires of Matthias Church in the Buda Castle District",
  width: 3984,
  height: 2656,
  color: "#738ca6",
  author: "Balint Miko",
  authorUrl: `https://unsplash.com/@balint_miko?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-view-of-a-large-building-with-many-spires-c6SLlKgIcwI?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/c6SLlKgIcwI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bWF0dGhpYXMlMjBjaHVyY2glMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDgxfDA",
}

// Heroes' Square
export const heroesSquareImage: UnsplashImage = {
  id: "PBIJDcnAkEg",
  src: "https://images.unsplash.com/photo-1578569820955-d4fef90dcfef?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aGVyb2VzJTIwc3F1YXJlJTIwYnVkYXBlc3R8ZW58MHwwfHx8MTc4Nzk5MTQ3N3ww&ixlib=rb-4.1.0",
  alt: "The Millennium Monument and colonnades at Heroes Square in Budapest",
  width: 4743,
  height: 3162,
  color: "#738ca6",
  author: "Bram van Geerenstein",
  authorUrl: `https://unsplash.com/@bramvg?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/architectural-photography-of-statues-PBIJDcnAkEg?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/PBIJDcnAkEg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8aGVyb2VzJTIwc3F1YXJlJTIwYnVkYXBlc3R8ZW58MHwwfHx8MTc4Nzk5MTQ3N3ww",
}

// St. Stephen's Basilica — aerial view
export const basilicaImage: UnsplashImage = {
  id: "oOTo9nR7f9Q",
  src: "https://images.unsplash.com/photo-1553355202-f869c36581ca?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3QlMjBzdGVwaGVucyUyMGJhc2lsaWNhJTIwYnVkYXBlc3R8ZW58MHwwfHx8MTc4Nzk5MTQ3OHww&ixlib=rb-4.1.0",
  alt: "Aerial view of St. Stephen's Basilica dome amid the rooftops of Budapest",
  width: 3795,
  height: 2973,
  color: "#8ca6c0",
  author: "Philipp Trubchenko",
  authorUrl: `https://unsplash.com/@seresigo?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/aerial-photography-of-buildings-oOTo9nR7f9Q?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/oOTo9nR7f9Q/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3QlMjBzdGVwaGVucyUyMGJhc2lsaWNhJTIwYnVkYXBlc3R8ZW58MHwwfHx8MTc4Nzk5MTQ3OHww",
}

// Opera House interior — chandelier
export const operaImage: UnsplashImage = {
  id: "3Ln7THcq28w",
  src: "https://images.unsplash.com/photo-1654467983985-a1fe5c23a205?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBvcGVyYSUyMGhvdXNlfGVufDB8MHx8fDE3ODc5OTE0ODB8MA&ixlib=rb-4.1.0",
  alt: "Ornate chandelier inside the Hungarian State Opera House in Budapest",
  width: 6000,
  height: 4000,
  color: "#260c0c",
  author: "TE LUN OU YANG",
  authorUrl: `https://unsplash.com/@telun_photo?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-chandelier-hanging-from-the-ceiling-of-a-building-3Ln7THcq28w?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/3Ln7THcq28w/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBvcGVyYSUyMGhvdXNlfGVufDB8MHx8fDE3ODc5OTE0ODB8MA",
}

// Winter Budapest — foggy bridge
export const winterImage: UnsplashImage = {
  id: "UfjN6fAJSUU",
  src: "https://images.unsplash.com/photo-1545327080-f740290e6b8a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA&ixlib=rb-4.1.0",
  alt: "A Budapest bridge in winter fog with bare trees and muted light",
  width: 7360,
  height: 4912,
  color: "#a6bfd9",
  author: "Daniel Olah",
  authorUrl: `https://unsplash.com/@danesduet?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/black-bridge-during-foggy-day-UfjN6fAJSUU?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/UfjN6fAJSUU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA",
}

// Winter panorama — snowy city view
export const winterPanoramaImage: UnsplashImage = {
  id: "8TibqBJzWIY",
  src: "https://images.unsplash.com/photo-1523650092835-8ff285f4fc04?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA&ixlib=rb-4.1.0",
  alt: "Budapest from above in winter with snow-covered rooftops and the Danube",
  width: 3872,
  height: 2592,
  color: "#8ca6c0",
  author: "Dan Novac",
  authorUrl: `https://unsplash.com/@dnovac?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/high-angle-photography-of-dome-building-near-bridge-and-body-of-water-8TibqBJzWIY?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/8TibqBJzWIY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjB3aW50ZXIlMjBzbm93JTIwZGFudWJlfGVufDB8MHx8fDE3ODc5OTE0NjB8MA",
}

// Thermal baths — Szechenyi outdoor pool
export const thermalImage: UnsplashImage = {
  id: "YJ9ujIUvMtg",
  src: "https://images.unsplash.com/photo-1629182585837-96b0f31301b9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3plY2hlbnlpJTIwdGhlcm1hbCUyMGJhdGglMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYyfDA&ixlib=rb-4.1.0",
  alt: "The grand Neo-Baroque facade of Szechenyi Thermal Bath in Budapest",
  width: 3621,
  height: 2716,
  color: "#c0a673",
  author: "Linda Gerbec",
  authorUrl: `https://unsplash.com/@lsgerbec?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/people-walking-on-park-during-daytime-YJ9ujIUvMtg?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/YJ9ujIUvMtg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c3plY2hlbnlpJTIwdGhlcm1hbCUyMGJhdGglMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYyfDA",
}

// Cafe Budapest — atmospheric interior
export const cafeImage: UnsplashImage = {
  id: "8Q46XGCLVPA",
  src: "https://images.unsplash.com/photo-1633895365434-568d92210a76?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHwwfHx8MTc4Nzk5MTQ2M3ww&ixlib=rb-4.1.0",
  alt: "Atmospheric interior of a historic Budapest cafe with vintage decor and warm lighting",
  width: 5629,
  height: 3753,
  color: "#402626",
  author: "Nick Night",
  authorUrl: `https://unsplash.com/@nicknight?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/a-room-that-has-a-bunch-of-pictures-on-the-wall-8Q46XGCLVPA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/8Q46XGCLVPA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YnVkYXBlc3QlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHwwfHx8MTc4Nzk5MTQ2M3ww",
}

// Architecture detail — ornate metal gate
export const gateDetailImage: UnsplashImage = {
  id: "TQxphxcnWHc",
  src: "https://images.unsplash.com/photo-1783496116753-ad0f06ab9211?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBhcnQlMjBub3V2ZWF1fGVufDB8MHx8fDE3ODc5OTE0NjJ8MA&ixlib=rb-4.1.0",
  alt: "Ornate dark metal gate with decorative glass panels in a Budapest building",
  width: 6048,
  height: 4032,
  color: "#402626",
  author: "Carrie Borden",
  authorUrl: `https://unsplash.com/@carrie_borden?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/ornate-dark-metal-gate-with-decorative-glass-panels-TQxphxcnWHc?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/TQxphxcnWHc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YnVkYXBlc3QlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBhcnQlMjBub3V2ZWF1fGVufDB8MHx8fDE3ODc5OTE0NjJ8MA",
}

// Architecture detail — spiral staircase
export const staircaseImage: UnsplashImage = {
  id: "O5wxoO9S0CU",
  src: "https://images.unsplash.com/photo-1782805091256-7de8c21f7e34?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YnVkYXBlc3QlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBhcnQlMjBub3V2ZWF1fGVufDB8MHx8fDE3ODc5OTE0NjJ8MA&ixlib=rb-4.1.0",
  alt: "A dramatic spiral staircase with ornate wrought iron railings in Budapest",
  width: 4644,
  height: 3096,
  color: "#402626",
  author: "Michael Shtern",
  authorUrl: `https://unsplash.com/@mic222?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/looking-down-a-dramatic-spiral-staircase-with-ornate-railings-O5wxoO9S0CU?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/O5wxoO9S0CU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YnVkYXBlc3QlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBhcnQlMjBub3V2ZWF1fGVufDB8MHx8fDE3ODc5OTE0NjJ8MA",
}

// Elizabeth Bridge — night view with city
export const elizabethBridgeImage: UnsplashImage = {
  id: "fU9pbgetP1c",
  src: "https://images.unsplash.com/photo-1563734484236-8b271b3c1e7a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA&ixlib=rb-4.1.0",
  alt: "Elizabeth Bridge in Budapest at dusk with city lights beginning to glow",
  width: 5742,
  height: 3828,
  color: "#260c26",
  author: "Yanny Mishchuk",
  authorUrl: `https://unsplash.com/@yannym?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/black-and-brown-bridge-fU9pbgetP1c?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/fU9pbgetP1c/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bGliZXJ0eSUyMGJyaWRnZSUyMGJ1ZGFwZXN0fGVufDB8MHx8fDE3ODc5OTE0ODF8MA",
}

// Fisherman's Bastion — daytime architectural detail
export const bastionDayImage: UnsplashImage = {
  id: "2TmsyZXMNTE",
  src: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZmlzaGVybWFucyUyMGJhc3Rpb24lMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYwfDA&ixlib=rb-4.1.0",
  alt: "Fisherman's Bastion terrace with Neo-Romanesque towers overlooking Budapest",
  width: 6000,
  height: 4000,
  color: "#a6c0d9",
  author: "Emma Fabbri",
  authorUrl: `https://unsplash.com/@fabevent?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/fishermans-bastion-in-budapest-during-daytime-2TmsyZXMNTE?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/2TmsyZXMNTE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZmlzaGVybWFucyUyMGJhc3Rpb24lMjBidWRhcGVzdHxlbnwwfDB8fHwxNzg3OTkxNDYwfDA",
}

export const chainBridgeHistoricalImage: HistoricalImage = {
  id: "commons-a-lanchid-1949-nyaran",
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20L%C3%A1nch%C3%ADd%201949%20nyar%C3%A1n.jpg",
  alt: "Szechenyi Chain Bridge photographed in summer 1949 during Budapest's postwar reconstruction",
  width: 8298,
  height: 5589,
  title: "A Lanchid 1949 nyaran",
  date: "Summer 1949",
  author: "Racz Erzsebet",
  sourceName: "Wikimedia Commons",
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:A_L%C3%A1nch%C3%ADd_1949_nyar%C3%A1n.jpg",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
}

export interface FrameImage {
  title: string
  location: string
  shape: "landscape" | "portrait" | "wide" | "square"
  image: UnsplashImage
}

export const frameImages: FrameImage[] = [
  {
    title: "Parliament at the River",
    location: "Danube Embankment",
    shape: "wide",
    image: heroImage,
  },
  {
    title: "Castle Above the Water",
    location: "Buda Castle District",
    shape: "landscape",
    image: budaCastleImage,
  },
  {
    title: "Winter Bridge",
    location: "Danube, Budapest",
    shape: "landscape",
    image: winterImage,
  },
  {
    title: "Fisherman's Bastion",
    location: "Castle Hill",
    shape: "portrait",
    image: bastionImage,
  },
  {
    title: "Thermal Facade",
    location: "Szechenyi Baths",
    shape: "landscape",
    image: thermalImage,
  },
  {
    title: "The Opera Interior",
    location: "Andrassy Avenue",
    shape: "square",
    image: operaImage,
  },
  {
    title: "Iron and Glass",
    location: "Budapest doorway",
    shape: "portrait",
    image: gateDetailImage,
  },
  {
    title: "The River From Above",
    location: "Buda and Pest",
    shape: "wide",
    image: danubeImage,
  },
]

// All images for the consolidated credits list
export const allImages: UnsplashImage[] = [
  heroImage,
  danubeImage,
  budaCastleImage,
  parliamentImage,
  chainBridgeImage,
  libertyBridgeImage,
  margaretBridgeImage,
  bastionImage,
  matthiasChurchImage,
  heroesSquareImage,
  basilicaImage,
  operaImage,
  winterImage,
  winterPanoramaImage,
  thermalImage,
  cafeImage,
  gateDetailImage,
  staircaseImage,
  elizabethBridgeImage,
  bastionDayImage,
]
