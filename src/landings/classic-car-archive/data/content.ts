import {
  dashboardImage,
  finaleImage,
  garageHeroImage,
  italianGarageImage,
  mercedesArchiveImage,
  restorationCarImage,
  roadImage,
  sandingImage,
  steeringImage,
  workshopImage,
} from "./images"
import type {
  ArchiveFilter,
  DetailNote,
  EngineSound,
  EventItem,
  Exhibition,
  FactNote,
  FeaturedVehicle,
  GarageStory,
  Journey,
  Restoration,
  TimelineMoment,
  Vehicle,
} from "../types"

export const vehicles: Vehicle[] = [
  {
    marque: "Alfa Romeo",
    model: "Giulia Sprint",
    year: "1967",
    country: "Italy",
    displacement: "1.6 L",
    power: "109 hp",
    acquired: "Acquired 2004",
    note: "It was not the one he was looking for. That is exactly why it stayed.",
    image: italianGarageImage,
  },
  {
    marque: "Mercedes-Benz",
    model: "280 SL",
    year: "1969",
    country: "Germany",
    displacement: "2.8 L",
    power: "168 hp",
    acquired: "Acquired 2011",
    note: "Arrived in boxes, left the workshop asking politely for a long road.",
    image: mercedesArchiveImage,
  },
  {
    marque: "Porsche",
    model: "911 S",
    year: "1971",
    country: "Germany",
    displacement: "2.2 L",
    power: "180 hp",
    acquired: "Acquired 2016",
    note: "The car that made every short errand become a detour.",
    image: roadImage,
  },
]

export const featuredVehicles: FeaturedVehicle[] = [
  {
    ...vehicles[0],
    number: "03",
    highlight:
      "Twin-cam engine, narrow pedals, and a cabin that smells like old maps.",
  },
  {
    ...vehicles[1],
    number: "07",
    highlight: "A roadster restored slowly enough to remember every washer.",
  },
  {
    ...vehicles[2],
    number: "11",
    highlight:
      "Flat-six impatience, thin pillars, endless conversations at fuel stops.",
  },
]

export const timelineMoments: TimelineMoment[] = [
  {
    year: "1998",
    title: "The first classic",
    text: "A tired coupe behind a workshop, one soft tire, too much dust, and no good reason to say no.",
    image: garageHeroImage,
  },
  {
    year: "2003",
    title: "First full restoration",
    text: "The moment tools stopped being accessories and became part of the collection.",
    image: workshopImage,
  },
  {
    year: "2008",
    title: "First international rally",
    text: "A weekend that proved old engines make friends faster than introductions.",
    image: roadImage,
  },
  {
    year: "2013",
    title: "Ten cars, zero free weekends",
    text: "The private garage became an archive with keys, labels, notebooks, and opinions.",
    image: italianGarageImage,
  },
  {
    year: "2018",
    title: "First public display",
    text: "A small exhibition, a borrowed lighting rig, and strangers telling their own car stories.",
    image: mercedesArchiveImage,
  },
  {
    year: "2022",
    title: "The photographic archive",
    text: "Every dashboard, engine plate, tool mark, and restoration scar began to be documented.",
    image: dashboardImage,
  },
  {
    year: "2026",
    title: "Still running",
    text: "The collection keeps moving because a classic car is not a sculpture. It needs road.",
    image: finaleImage,
  },
]

export const restorations: Restoration[] = [
  {
    vehicle: "Mercedes-Benz 280 SL · 1969",
    duration: "18 months",
    status: "Road ready",
    text: "It arrived in boxes. It left under its own power.",
    specs: [
      "Rebuilt inline-six",
      "Hand-finished chrome",
      "Original trim preserved",
    ],
    image: restorationCarImage,
  },
  {
    vehicle: "Alfa Romeo Giulia Sprint · 1967",
    duration: "11 months",
    status: "Final tuning",
    text: "The paint was easy. The patience was expensive.",
    specs: ["Carburetor rebuild", "Period-correct cabin", "Suspension refresh"],
    image: sandingImage,
  },
  {
    vehicle: "Archive workshop notes",
    duration: "Ongoing",
    status: "Never finished",
    text: "Every restored part gets tagged, photographed, and argued about twice.",
    specs: ["Engine plates", "Original invoices", "Service notebooks"],
    image: workshopImage,
  },
]

export const details: DetailNote[] = [
  {
    label: "Steering",
    text: "Thin rim, honest feedback, and no button trying to be clever.",
    image: steeringImage,
  },
  {
    label: "Gauges",
    text: "A speedometer can be more persuasive than an entire brochure.",
    image: dashboardImage,
  },
  {
    label: "Patina",
    text: "A scratch is only a flaw until the story catches up.",
    image: mercedesArchiveImage,
  },
]

export const engineSounds: EngineSound[] = [
  {
    engine: "V6 · 1967",
    vehicle: "Alfa Romeo Giulia Sprint",
    bars: [32, 54, 42, 78, 49, 64, 36],
  },
  {
    engine: "Flat-six · 1971",
    vehicle: "Porsche 911 S",
    bars: [48, 82, 65, 92, 70, 56, 44],
  },
  {
    engine: "V8 · 1965",
    vehicle: "American coupe",
    bars: [72, 38, 88, 54, 96, 42, 68],
  },
]

export const events: EventItem[] = [
  {
    date: "14 SEP 2026",
    title: "Mountain Classics",
    place: "Example Sierra Route",
    vehicle: "Porsche 911 S · 1971",
    image: roadImage,
  },
  {
    date: "03 OCT 2026",
    title: "Night at the Workshop",
    place: "Private garage session",
    vehicle: "Mercedes-Benz 280 SL · 1969",
    image: workshopImage,
  },
  {
    date: "21 NOV 2026",
    title: "Analog Wheels Fair",
    place: "City, Country",
    vehicle: "Alfa Romeo Giulia Sprint · 1967",
    image: italianGarageImage,
  },
]

export const exhibitions: Exhibition[] = [
  {
    year: "2018",
    title: "Chrome Under Dust",
    place: "Local cultural hall",
    vehicles: "4 vehicles, 36 archive prints",
    image: mercedesArchiveImage,
  },
  {
    year: "2022",
    title: "Dashboard Notes",
    place: "Workshop open archive",
    vehicles: "Interior studies and restoration notebooks",
    image: dashboardImage,
  },
  {
    year: "2026",
    title: "Keep Them Running",
    place: "Traveling display concept",
    vehicles: "Road cars, rally notes, sound recordings",
    image: finaleImage,
  },
]

export const journeys: Journey[] = [
  {
    distance: "1,842 km",
    route: "Tuscany loop",
    vehicle: "Porsche 911 S · 1971",
    text: "A 1970s car, no air conditioning, and a plan that looked better on paper.",
    image: roadImage,
  },
  {
    distance: "912 km",
    route: "Coastal weekend",
    vehicle: "Alfa Romeo Giulia Sprint · 1967",
    text: "Half the luggage stayed home so the tools could come along.",
    image: italianGarageImage,
  },
  {
    distance: "640 km",
    route: "Mountain pass",
    vehicle: "Mercedes-Benz 280 SL · 1969",
    text: "The car climbed calmly. The passenger did not.",
    image: mercedesArchiveImage,
  },
]

export const garageStories: GarageStory[] = [
  {
    title: "The car that never started on Sundays.",
    text: "Monday to Saturday, perfect. Sunday morning, suddenly a philosopher.",
  },
  {
    title: "Five hours to change one part.",
    text: "The part took ten minutes. Finding it took four hours and fifty.",
  },
  {
    title: "Do not buy another car.",
    text: "A sentence heard approximately fourteen times and obeyed approximately never.",
  },
]

export const facts: FactNote[] = [
  {
    number: "042",
    title: "Carburetor variations",
    text: "The tiny difference that turns a normal conversation into a lecture.",
  },
  {
    number: "1968",
    title: "Original paint options",
    text: "Some color names were better poetry than marketing departments deserved.",
  },
  {
    number: "7 mm",
    title: "The difficult screw",
    text: "A size remembered because losing one cost an entire afternoon.",
  },
  {
    number: "2.2 L",
    title: "The happy range",
    text: "Small enough to sing, serious enough to get you home late.",
  },
]

export const archiveFilters: ArchiveFilter[] = [
  { label: "Decade", values: ["1950s", "1960s", "1970s", "1980s"] },
  {
    label: "Maker",
    values: ["Alfa Romeo", "Mercedes-Benz", "Porsche", "Jaguar"],
  },
  {
    label: "Country",
    values: ["Italy", "Germany", "United Kingdom", "United States"],
  },
  { label: "Body", values: ["Coupe", "Roadster", "Saloon", "GT"] },
  {
    label: "Condition",
    values: ["Original", "Restored", "In progress", "Documented"],
  },
]
