// Photographs sourced from Unsplash via the `unsplash-images` Skill.
// Photographer profiles are entirely fictional — names, bios, and worksCount
// do not correspond to real individuals.
import type { Photographer } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const photographers: Photographer[] = [
  {
    id: "thomas-hart",
    name: "Thomas Hart",
    specialty: "Architecture",
    country: "Germany",
    worksCount: 143,
    bio: "Hart spent a decade documenting postwar housing projects in East Berlin before turning to the geometry of contemporary construction. His long-exposure work removes people from spaces designed for them — creating a productive tension between place and absence.",
    image: {
      id: "1552374196-1ab2a1c593e8",
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&h=750&q=80",
      alt: "Portrait of a male photographer in a minimal studio setting",
      width: 3456,
      height: 5184,
      author: "Ayo Ogunseinde",
      authorUrl: `https://unsplash.com/@armedshutter?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1552374196-1ab2a1c593e8?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1552374196-1ab2a1c593e8/download",
    },
  },
  {
    id: "emilia-novak",
    name: "Emilia Novak",
    specialty: "Portrait",
    country: "Czech Republic",
    worksCount: 98,
    bio: "Novak's portraits are negotiations. She spends hours with a subject before raising the camera — photographing the moment fatigue dissolves performance. Her Presence series spans seven years and five countries, and has never been exhibited twice in the same sequence.",
    image: {
      id: "1573496359142-b8d87734a5a2",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=750&q=80",
      alt: "Portrait of a female photographer with natural light from a window",
      width: 3456,
      height: 5184,
      author: "Christina Wocintechchat",
      authorUrl: `https://unsplash.com/@wocintechchat?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1573496359142-b8d87734a5a2?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1573496359142-b8d87734a5a2/download",
    },
  },
  {
    id: "marcus-okoro",
    name: "Marcus Okoro",
    specialty: "Street",
    country: "Nigeria",
    worksCount: 211,
    bio: "Born in Lagos, based everywhere. Okoro has not had a fixed address since 2019 — moving between cities with a single film camera and no fixed itinerary. He photographs the unguarded moment: not the decisive moment, but the one before anyone has decided anything.",
    image: {
      id: "1507003211169-0a1dd7228f2d",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=750&q=80",
      alt: "Close portrait of a man with a focused, introspective expression",
      width: 4000,
      height: 5333,
      author: "Stefan Stefancik",
      authorUrl: `https://unsplash.com/@stefanovic94?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1507003211169-0a1dd7228f2d?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1507003211169-0a1dd7228f2d/download",
    },
  },
  {
    id: "camille-beaumont",
    name: "Camille Beaumont",
    specialty: "Nature",
    country: "France",
    worksCount: 167,
    bio: "Beaumont studies meteorology alongside photography — understanding weather not as backdrop but as subject. She has documented the same Alpine ridge in every month for nine consecutive years, and is interested in what changes and what refuses to.",
    image: {
      id: "1544717305-2594e50b4f74",
      src: "https://images.unsplash.com/photo-1544717305-2594e50b4f74?auto=format&fit=crop&w=600&h=750&q=80",
      alt: "Portrait of a woman photographer outdoors in natural daylight",
      width: 3840,
      height: 5760,
      author: "Giulia Bertelli",
      authorUrl: `https://unsplash.com/@giulia_bertelli?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1544717305-2594e50b4f74?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1544717305-2594e50b4f74/download",
    },
  },
  {
    id: "jin-hasegawa",
    name: "Jin Hasegawa",
    specialty: "Minimal / Travel",
    country: "Japan",
    worksCount: 89,
    bio: "Hasegawa's training in graphic design is legible in every frame — negative space as argument, not accident. He travels slowly, on foot when possible, and refuses to photograph anything he has not sat in front of for at least an hour.",
    image: {
      id: "1519085360753-af0119f7cbe7",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80",
      alt: "Portrait of a man with calm expression and minimal background",
      width: 3264,
      height: 4896,
      author: "Warren Wong",
      authorUrl: `https://unsplash.com/@wflwong?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1519085360753-af0119f7cbe7?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1519085360753-af0119f7cbe7/download",
    },
  },
]
