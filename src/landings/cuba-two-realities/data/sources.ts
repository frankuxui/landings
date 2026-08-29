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
    kicker: "Población",
    value: "10.9M",
    body: "El perfil de país de UNFPA de 2025 estima la población de Cuba en 10.9 millones. Las estimaciones oficiales cubanas e independientes divergen a medida que la emigración se acelera.",
    sourceId: "unfpa-2025",
  },
  {
    kicker: "Viviendas",
    value: "800K",
    body: "AP citó la cifra de un funcionario de vivienda cubano: un déficit de 800.000 viviendas; datos oficiales de 2020 indicaban que casi el 40% de las viviendas estaba en estado regular o malo.",
    sourceId: "ap-housing-2023",
  },
  {
    kicker: "Apagones",
    value: "5",
    body: "HRW documentó cinco apagones nacionales entre octubre de 2024 y septiembre de 2025, junto con graves problemas de acceso a alimentos, medicinas y electricidad.",
    sourceId: "hrw-2026",
  },
  {
    kicker: "Derechos",
    value: "529",
    body: "Amnistía cita el recuento del Observatorio Cubano de Derechos Humanos: 529 detenciones arbitrarias durante 2025.",
    sourceId: "amnesty-2025",
  },
]

export const voices: VoiceFragment[] = [
  {
    number: "01",
    title: "La cola",
    place: "Comida, medicinas, transporte",
    text: "Aquí no aparece ningún testigo inventado. Este fragmento es una síntesis editorial de reportajes documentados sobre el tiempo dedicado a conseguir lo básico.",
    sourceId: "amnesty-2025",
    imageId: "streetLife",
  },
  {
    number: "02",
    title: "La casa",
    place: "La Habana",
    text: "Un hogar puede convertirse en una sala de espera para la reparación, la reubicación o el colapso. La estadística es oficial; el miedo lo reporta AP.",
    sourceId: "ap-housing-2023",
    imageId: "oldHavana",
  },
  {
    number: "03",
    title: "La partida",
    place: "A través de 90 millas",
    text: "La migración aparece aquí como ausencia, no como espectáculo: menos sillas en las mesas, familiares mayores que se quedan, llamadas que cruzan el agua.",
    sourceId: "hrw-2026",
    imageId: "malecon",
  },
  {
    number: "04",
    title: "El censor",
    place: "Expresión pública",
    text: "La sección hace referencia a restricciones documentadas sobre la disidencia, la reunión pacífica y el periodismo independiente, sin nombrar casos no verificados.",
    sourceId: "amnesty-2025",
    imageId: "trinidad",
  },
]
