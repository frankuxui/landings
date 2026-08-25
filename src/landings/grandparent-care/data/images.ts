// Photographs sourced from Unsplash via the `unsplash-images` Skill. Search
// query, selection reasoning, and download-tracking are handled during the
// editorial task that populates this file — production only ever renders
// the persisted `src` below (images.unsplash.com), never the API.
import type { UnsplashImage } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const heroImage: UnsplashImage = {
  id: "L4nwL3195U0",
  src: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JhbmRtb3RoZXIlMjBncmFuZGNoaWxkJTIwaHVnJTIwd2FybSUyMHN1bmxpZ2h0fGVufDF8MHx8fDE3ODc2ODE3MzZ8MA&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=faces&auto=format&q=80",
  alt: "A grandmother laughing as she hugs her grandchild close, cheek to cheek",
  width: 3872,
  height: 2592,
  author: "Ekaterina Shakharova",
  authorUrl: `https://unsplash.com/@minigirl?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/elderly-woman-hugging-young-child-L4nwL3195U0?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/L4nwL3195U0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JhbmRtb3RoZXIlMjBncmFuZGNoaWxkJTIwaHVnJTIwd2FybSUyMHN1bmxpZ2h0fGVufDF8MHx8fDE3ODc2ODE3MzZ8MA",
}

export const importanceImage: UnsplashImage = {
  id: "EljMmcGmeGA",
  src: "https://images.unsplash.com/photo-1761692980299-2a09a152e6a5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWxkZXJseSUyMGhhbmRzJTIwaG9sZGluZyUyMHlvdW5nJTIwaGFuZCUyMGNsb3NlJTIwdXB8ZW58MXwyfHx8MTc4NzY4MTc1Nnww&ixlib=rb-4.1.0&w=1200&h=1200&fit=crop&auto=format&q=80",
  alt: "Close-up of an older hand and a younger hand clasped together",
  width: 4774,
  height: 4774,
  author: "Luigi Ritchie",
  authorUrl: `https://unsplash.com/@luigir?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/close-up-of-elderly-hands-clasped-together-EljMmcGmeGA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/EljMmcGmeGA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZWxkZXJseSUyMGhhbmRzJTIwaG9sZGluZyUyMHlvdW5nJTIwaGFuZCUyMGNsb3NlJTIwdXB8ZW58MXwyfHx8MTc4NzY4MTc1Nnww",
}

export const signsImage: UnsplashImage = {
  id: "jF_RWE4UFa4",
  src: "https://images.unsplash.com/photo-1756362635644-8ce1ed7d2da0?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWxkZXJseSUyMHdvbWFuJTIwc2l0dGluZyUyMGJ5JTIwd2luZG93JTIwbmF0dXJhbCUyMGxpZ2h0JTIwdGhvdWdodGZ1bHxlbnwxfDF8fHwxNzg3NjgxNzYxfDA&ixlib=rb-4.1.0&w=1000&h=1250&fit=crop&crop=faces&auto=format&q=80",
  alt: "An older woman sitting quietly by a window, looking out in thought",
  width: 4160,
  height: 6240,
  author: "Lena Polishko",
  authorUrl: `https://unsplash.com/@ilona_a?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/elderly-woman-sitting-in-sunlight-near-a-window-jF_RWE4UFa4?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/jF_RWE4UFa4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZWxkZXJseSUyMHdvbWFuJTIwc2l0dGluZyUyMGJ5JTIwd2luZG93JTIwbmF0dXJhbCUyMGxpZ2h0JTIwdGhvdWdodGZ1bHxlbnwxfDF8fHwxNzg3NjgxNzYxfDA",
}

export const workshopsImage: UnsplashImage = {
  id: "GJaWV0YoBeU",
  src: "https://images.unsplash.com/photo-1764173039543-f9f197744e1b?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29tbXVuaXR5JTIwd29ya3Nob3AlMjBzZW5pb3JzJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8MHx8fDE3ODc2ODE3NjJ8MA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
  alt: "Three older adults sitting together, talking and smiling during a group session",
  width: 6123,
  height: 4082,
  author: "Centre for Ageing Better",
  authorUrl: `https://unsplash.com/@ageing_better?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/three-seniors-talking-and-smiling-together-GJaWV0YoBeU?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/GJaWV0YoBeU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29tbXVuaXR5JTIwd29ya3Nob3AlMjBzZW5pb3JzJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8MHx8fDE3ODc2ODE3NjJ8MA",
}

export const galleryImages: UnsplashImage[] = [
  {
    id: "utfDkuAMgJg",
    src: "https://images.unsplash.com/photo-1746192703686-a36ab0189bcd?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8c2VuaW9yJTIwY291cGxlJTIwZW1icmFjaW5nJTIwZ2FyZGVuJTIwdGVuZGVyfGVufDF8MHx8fDE3ODc2ODE3OTd8MA&ixlib=rb-4.1.0&w=1400&h=1750&fit=crop&crop=faces&auto=format&q=80",
    alt: "An elderly couple sharing a gentle kiss in a garden",
    width: 4827,
    height: 3847,
    author: "Alan Morales",
    authorUrl: `https://unsplash.com/@alanmoraales?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/an-elderly-couple-shares-a-loving-kiss-utfDkuAMgJg?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/utfDkuAMgJg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8c2VuaW9yJTIwY291cGxlJTIwZW1icmFjaW5nJTIwZ2FyZGVuJTIwdGVuZGVyfGVufDF8MHx8fDE3ODc2ODE3OTd8MA",
  },
  {
    id: "EZDpRN10sSc",
    src: "https://images.unsplash.com/photo-1785094342212-27f295b7fd52?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bXVsdGlnZW5lcmF0aW9uYWwlMjBmYW1pbHklMjBwb3J0cmFpdCUyMGdyYW5kcGFyZW50cyUyMGdyYW5kY2hpbGRyZW4lMjBvdXRkb29yc3xlbnwxfDB8fHwxNzg3NjgxNzk4fDA&ixlib=rb-4.1.0&w=1600&h=1067&fit=crop&auto=format&q=80",
    alt: "Three generations of one family standing together on a sunny lawn",
    width: 3000,
    height: 2000,
    author: "Didier VEILLON",
    authorUrl: `https://unsplash.com/@didpics?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/a-multi-generational-family-stands-together-on-a-sunny-lawn-EZDpRN10sSc?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/EZDpRN10sSc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bXVsdGlnZW5lcmF0aW9uYWwlMjBmYW1pbHklMjBwb3J0cmFpdCUyMGdyYW5kcGFyZW50cyUyMGdyYW5kY2hpbGRyZW4lMjBvdXRkb29yc3xlbnwxfDB8fHwxNzg3NjgxNzk4fDA",
  },
  {
    id: "0nvqzhZjWzw",
    src: "https://images.unsplash.com/photo-1758874960533-a0925d4f645c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JhbmRtb3RoZXIlMjBjb29raW5nJTIwa2l0Y2hlbiUyMGdyYW5kY2hpbGQlMjB0b2dldGhlcnxlbnwxfDB8fHwxNzg3NjgxNzk5fDA&ixlib=rb-4.1.0&w=1400&h=1750&fit=crop&auto=format&q=80",
    alt: "A grandmother and her granddaughter baking together in the kitchen",
    width: 3840,
    height: 2160,
    author: "Vitaly Gariev",
    authorUrl: `https://unsplash.com/@silverkblack?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/grandmother-and-granddaughter-baking-together-in-kitchen-0nvqzhZjWzw?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/0nvqzhZjWzw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JhbmRtb3RoZXIlMjBjb29raW5nJTIwa2l0Y2hlbiUyMGdyYW5kY2hpbGQlMjB0b2dldGhlcnxlbnwxfDB8fHwxNzg3NjgxNzk5fDA",
  },
]

export const storyImages: Record<string, UnsplashImage> = {
  eleanor: {
    id: "yp8R_PT0wHU",
    src: "https://images.unsplash.com/photo-1749189516333-168cfd97de0b?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8c2VuaW9yJTIwd29tYW4lMjBsYXVnaGluZyUyMHBvcnRyYWl0JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8MXx8fDE3ODc2ODE3NTl8MA&ixlib=rb-4.1.0&w=1000&h=1250&fit=crop&crop=faces&auto=format&q=80",
    alt: "An older woman smiling warmly at the camera",
    width: 3376,
    height: 6000,
    author: "litoon dev",
    authorUrl: `https://unsplash.com/@litoondev?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/an-older-woman-smiles-at-the-camera-yp8R_PT0wHU?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/yp8R_PT0wHU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8c2VuaW9yJTIwd29tYW4lMjBsYXVnaGluZyUyMHBvcnRyYWl0JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8MXx8fDE3ODc2ODE3NTl8MA",
  },
  arthur: {
    id: "5meDpvny9Dc",
    src: "https://images.unsplash.com/photo-1638136591747-729bf897db2d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c2VuaW9yJTIwbWFuJTIwcG9ydHJhaXQlMjB3YXJtJTIwc21pbGUlMjB3aW5kb3clMjBsaWdodHxlbnwxfDF8fHwxNzg3NjgxNzU5fDA&ixlib=rb-4.1.0&w=1000&h=1250&fit=crop&crop=faces&auto=format&q=80",
    alt: "An older man with a warm expression, looking directly at the camera",
    width: 3597,
    height: 5396,
    author: "Omar Abozeid",
    authorUrl: `https://unsplash.com/@omar_abozeid?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/an-old-man-with-a-beard-and-a-black-shirt-5meDpvny9Dc?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/5meDpvny9Dc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c2VuaW9yJTIwbWFuJTIwcG9ydHJhaXQlMjB3YXJtJTIwc21pbGUlMjB3aW5kb3clMjBsaWdodHxlbnwxfDF8fHwxNzg3NjgxNzU5fDA",
  },
  margaret: {
    id: "sBkSyfPzakI",
    src: "https://images.unsplash.com/photo-1695556746353-b45f7a329777?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VuaW9yJTIwd29tYW4lMjBwb3J0cmFpdCUyMG91dGRvb3IlMjBuYXR1cmFsJTIwbGlnaHQlMjBncmF5JTIwaGFpciUyMHNtaWxpbmd8ZW58MXwxfHx8MTc4NzY4MTgyMHww&ixlib=rb-4.1.0&w=1000&h=1250&fit=crop&crop=faces&auto=format&q=80",
    alt: "An older woman with white hair, smiling gently outdoors",
    width: 4480,
    height: 5600,
    author: "Hosein Sediqi",
    authorUrl: `https://unsplash.com/@hoseinsediqii?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/an-older-woman-with-white-hair-and-a-smile-sBkSyfPzakI?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/sBkSyfPzakI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VuaW9yJTIwd29tYW4lMjBwb3J0cmFpdCUyMG91dGRvb3IlMjBuYXR1cmFsJTIwbGlnaHQlMjBncmF5JTIwaGFpciUyMHNtaWxpbmd8ZW58MXwxfHx8MTc4NzY4MTgyMHww",
  },
}

export const ctaImage: UnsplashImage = {
  id: "xt935Csz8WA",
  src: "https://images.unsplash.com/photo-1786912029495-3b20c7328ac2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8Z3JhbmRwYXJlbnRzJTIwZ3JhbmRjaGlsZHJlbiUyMGhvbGRpbmclMjBoYW5kcyUyMHdhbGtpbmclMjB0b2dldGhlciUyMG91dGRvb3J8ZW58MXwwfHx8MTc4NzY4MTg0NHww&ixlib=rb-4.1.0&w=2000&h=1000&fit=crop&auto=format&q=80",
  alt: "An older couple holding hands as they walk together across a sunlit plaza",
  width: 10590,
  height: 3910,
  author: "Heng Chiu",
  authorUrl: `https://unsplash.com/@chiuchuuu?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/older-couple-walking-in-city-plaza-xt935Csz8WA?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/xt935Csz8WA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8Z3JhbmRwYXJlbnRzJTIwZ3JhbmRjaGlsZHJlbiUyMGhvbGRpbmclMjBoYW5kcyUyMHdhbGtpbmclMjB0b2dldGhlciUyMG91dGRvb3J8ZW58MXwwfHx8MTc4NzY4MTg0NHww",
}

// Every Unsplash photograph rendered in this landing, for the consolidated
// "Photo credits" list in Footer.astro (unsplash-images Skill §9.5) — each
// photo also carries its own discreet caption via components/Photo.astro;
// this list is the required second, page-level point of attribution.
export const allImages: UnsplashImage[] = [
  heroImage,
  importanceImage,
  signsImage,
  workshopsImage,
  ...galleryImages,
  ...Object.values(storyImages),
  ctaImage,
]
