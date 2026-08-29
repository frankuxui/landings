import type { DocumentaryNote, SourceReference, VoiceFragment } from "../types"

export const sources: SourceReference[] = [
  {
    id: "hrw-2026",
    label: "World Report 2026: Cuba",
    publisher: "Human Rights Watch",
    date: "2026",
    url: "https://www.hrw.org/world-report/2026/country-chapters/cuba",
    note: "Documents repression, political imprisonment, blackouts, shortages, emigration and the role of the U.S. embargo.",
  },
  {
    id: "amnesty-2025",
    label: "Human Rights in Cuba: 2025",
    publisher: "Amnesty International",
    date: "2026",
    url: "https://www.amnesty.org/en/location/americas/central-america-and-the-caribbean/cuba/report-cuba/",
    note: "Reports arbitrary detention, restrictions on expression and assembly, shortages, blackouts and prison conditions.",
  },
  {
    id: "ap-housing-2023",
    label: "Havana homes crumble as residents fear collapse",
    publisher: "Associated Press",
    date: "2023",
    url: "https://apnews.com/article/cuba-housing-havana-buildings-collapse-maintenance-f2a1077414ed8848f29bade3796ef020",
    note: "Cites Cuban housing officials and 2020 government figures on housing deficit and home condition.",
  },
  {
    id: "unfpa-2025",
    label: "Cuba Population 2025",
    publisher: "United Nations Population Fund",
    date: "2025",
    url: "https://www.unfpa.org/data/world-population/CU",
    note: "Provides a UN population estimate and age-structure context.",
  },
]

export const notes: DocumentaryNote[] = [
  {
    kicker: "Population",
    value: "10.9M",
    body: "UNFPA's 2025 country profile estimates Cuba's population at 10.9 million. Cuban official and independent estimates diverge as emigration accelerates.",
    sourceId: "unfpa-2025",
  },
  {
    kicker: "Viviendas",
    value: "800K",
    body: "AP reported a Cuban housing official's figure of an 800,000-home deficit; 2020 government figures said nearly 40% of homes were fair or poor.",
    sourceId: "ap-housing-2023",
  },
  {
    kicker: "Apagones",
    value: "5",
    body: "HRW documented five nationwide blackouts between October 2024 and September 2025, alongside serious access problems for food, medicine and electricity.",
    sourceId: "hrw-2026",
  },
  {
    kicker: "Derechos",
    value: "529",
    body: "Amnesty cites the Cuban Observatory of Human Rights' count of 529 arbitrary detentions during 2025.",
    sourceId: "amnesty-2025",
  },
]

export const voices: VoiceFragment[] = [
  {
    number: "01",
    title: "The line",
    place: "Food, medicine, transport",
    text: "No invented witness appears here. This fragment is an editorial synthesis of documented reporting on time spent obtaining basics.",
    sourceId: "amnesty-2025",
    imageId: "streetLife",
  },
  {
    number: "02",
    title: "The house",
    place: "Havana",
    text: "A home can become a waiting room for repair, relocation or collapse. The statistic is official; the fear is reported by AP.",
    sourceId: "ap-housing-2023",
    imageId: "oldHavana",
  },
  {
    number: "03",
    title: "The departure",
    place: "Across 90 miles",
    text: "Migration appears here as absence, not spectacle: fewer chairs at tables, older relatives staying, calls crossing water.",
    sourceId: "hrw-2026",
    imageId: "malecon",
  },
  {
    number: "04",
    title: "The censor",
    place: "Public expression",
    text: "The section references documented restrictions on dissent, peaceful assembly and independent journalism, without naming unverified cases.",
    sourceId: "amnesty-2025",
    imageId: "trinidad",
  },
]
