import type { UnsplashImage } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"
const profile = (url: string): string => `${url}?${UTM}`
const source = (url: string): string => `${url}?${UTM}`
const unsplashUrl = `https://unsplash.com/?${UTM}`

export const heroMainImage: UnsplashImage = {
  id: "e3OUQGT9bWU",
  src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBmcmllbmRzJTIwZ3JvdXAlMjBsYXVnaGluZyUyMG91dGRvb3JzJTIwc3VubGlnaHR8ZW58MXwwfHx8MTc4ODI1NDY2OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Four young friends laughing together on the grass on a sunny afternoon",
  width: 5090,
  height: 3393,
  color: "#f3f3f3",
  author: "Helena Lopes",
  authorUrl: profile("https://unsplash.com/@helenalopesph"),
  sourceUrl: source(
    "https://unsplash.com/photos/three-men-and-one-woman-laughing-during-daytime-e3OUQGT9bWU",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/e3OUQGT9bWU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBmcmllbmRzJTIwZ3JvdXAlMjBsYXVnaGluZyUyMG91dGRvb3JzJTIwc3VubGlnaHR8ZW58MXwwfHx8MTc4ODI1NDY2OXww",
}

export const laughingFriendsImage: UnsplashImage = {
  id: "Isbx9diUnhU",
  src: "https://images.unsplash.com/photo-1753351057311-8fd3c46bc4e2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBmcmllbmRzJTIwY2FmZSUyMHRhYmxlJTIwbGF1Z2hpbmclMjBjb2ZmZWV8ZW58MXwwfHx8MTc4ODI1NDY3MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Young friends talking and laughing over shared food at a cafe table",
  width: 3800,
  height: 2138,
  color: "#262640",
  author: "Vitaly Gariev",
  authorUrl: profile("https://unsplash.com/@silverkblack"),
  sourceUrl: source(
    "https://unsplash.com/photos/friends-are-sharing-pizza-and-conversation-at-a-restaurant-Isbx9diUnhU",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/Isbx9diUnhU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBmcmllbmRzJTIwY2FmZSUyMHRhYmxlJTIwbGF1Z2hpbmclMjBjb2ZmZWV8ZW58MXwwfHx8MTc4ODI1NDY3MXww",
}

export const laughingWomenImage: UnsplashImage = {
  id: "770jbAj_wvQ",
  src: "https://images.unsplash.com/photo-1583606784123-7c244f00d29c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8dHdvJTIweW91bmclMjB3b21lbiUyMGxhdWdoaW5nJTIwdG9nZXRoZXIlMjBjYW5kaWR8ZW58MXwwfHx8MTc4ODI1NDY3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Two young women grinning side by side among trees in daylight",
  width: 5472,
  height: 3648,
  color: "#f3f3f3",
  author: "Omar Lopez",
  authorUrl: profile("https://unsplash.com/@omarlopez1"),
  sourceUrl: source(
    "https://unsplash.com/photos/2-women-smiling-and-standing-near-trees-during-daytime-770jbAj_wvQ",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/770jbAj_wvQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8dHdvJTIweW91bmclMjB3b21lbiUyMGxhdWdoaW5nJTIwdG9nZXRoZXIlMjBjYW5kaWR8ZW58MXwwfHx8MTc4ODI1NDY3MHww",
}

export const movementImage: UnsplashImage = {
  id: "_4jRJ55AwhI",
  src: "https://images.unsplash.com/photo-1758272421078-8f54e6adfc4a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8eW91bmclMjB3b21hbiUyMGRhbmNpbmclMjBqb3lmdWwlMjBtb3ZlbWVudCUyMHN0cmVldHxlbnwxfDB8fHwxNzg4MjU0NjcyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A young woman dancing down a city street with her earphones in",
  width: 3800,
  height: 2138,
  color: "#262640",
  author: "Vitaly Gariev",
  authorUrl: profile("https://unsplash.com/@silverkblack"),
  sourceUrl: source(
    "https://unsplash.com/photos/woman-in-sunglasses-using-smartphone-outdoors-_4jRJ55AwhI",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/_4jRJ55AwhI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8eW91bmclMjB3b21hbiUyMGRhbmNpbmclMjBqb3lmdWwlMjBtb3ZlbWVudCUyMHN0cmVldHxlbnwxfDB8fHwxNzg4MjU0NjcyfDA",
}

export const sunlightImage: UnsplashImage = {
  id: "Lvc7orGiCag",
  src: "https://images.unsplash.com/photo-1730292422337-5423e0f845f3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBwZW9wbGUlMjBoaWtpbmclMjBoaWxsdG9wJTIwc3Vuc2V0JTIwZnJpZW5kc3xlbnwxfDB8fHwxNzg4MjU0NjczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A group of friends hiking up a grassy hill together",
  width: 6000,
  height: 4000,
  color: "#26260c",
  author: "Vladyslav Tobolenko",
  authorUrl: profile("https://unsplash.com/@tobolenkoph"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-group-of-people-walking-up-a-hill-Lvc7orGiCag",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/Lvc7orGiCag/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBwZW9wbGUlMjBoaWtpbmclMjBoaWxsdG9wJTIwc3Vuc2V0JTIwZnJpZW5kc3xlbnwxfDB8fHwxNzg4MjU0NjczfDA",
}

export const familyImage: UnsplashImage = {
  id: "9YbCVhUpLtY",
  src: "https://images.unsplash.com/photo-1623228816815-e8b5a10081e4?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JvdXAlMjB5b3VuZyUyMGZyaWVuZHMlMjBncm91cCUyMGh1ZyUyMGNpcmNsZSUyMG91dGRvb3JzfGVufDF8MHx8fDE3ODgyNTQ2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A group of friends standing in a close circle on the grass",
  width: 5464,
  height: 3640,
  color: "#404026",
  author: "Dmitriy Frantsev",
  authorUrl: profile("https://unsplash.com/@vapricot"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-group-of-people-standing-in-a-circle-in-the-grass-9YbCVhUpLtY",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/9YbCVhUpLtY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Z3JvdXAlMjB5b3VuZyUyMGZyaWVuZHMlMjBncm91cCUyMGh1ZyUyMGNpcmNsZSUyMG91dGRvb3JzfGVufDF8MHx8fDE3ODgyNTQ2NzV8MA",
}

export const hugImage: UnsplashImage = {
  id: "UxA6W4sts8M",
  src: "https://images.unsplash.com/photo-1779154205338-db21a172c453?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8eW91bmclMjBmcmllbmRzJTIwanVtcGluZyUyMGRhbmNpbmclMjBmaWVsZCUyMGpveXxlbnwxfDB8fHwxNzg4MjU0NjcwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Two young women spinning around with their arms open in a sunlit field",
  width: 5184,
  height: 3456,
  color: "#d9d9d9",
  author: "ola szkolda",
  authorUrl: profile("https://unsplash.com/@olaszkolda"),
  sourceUrl: source(
    "https://unsplash.com/photos/two-young-women-spinning-happily-in-a-sunny-field-UxA6W4sts8M",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/UxA6W4sts8M/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8eW91bmclMjBmcmllbmRzJTIwanVtcGluZyUyMGRhbmNpbmclMjBmaWVsZCUyMGpveXxlbnwxfDB8fHwxNzg4MjU0NjcwfDA",
}

export const conversationImage: UnsplashImage = {
  id: "EevqLpQ-6zo",
  src: "https://images.unsplash.com/photo-1654432008892-5cf90d13df6b?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8dHdvJTIweW91bmclMjBmcmllbmRzJTIwdGFsa2luZyUyMGJlbmNoJTIwY29udmVyc2F0aW9ufGVufDF8MHx8fDE3ODgyNTQ2NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Two young men sitting on a bench deep in an easy conversation",
  width: 6000,
  height: 4000,
  color: "#737373",
  author: "Or Hakim",
  authorUrl: profile("https://unsplash.com/@orhakim"),
  sourceUrl: source(
    "https://unsplash.com/photos/two-young-men-sitting-on-a-bench-talking-to-each-other-EevqLpQ-6zo",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/EevqLpQ-6zo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8dHdvJTIweW91bmclMjBmcmllbmRzJTIwdGFsa2luZyUyMGJlbmNoJTIwY29udmVyc2F0aW9ufGVufDF8MHx8fDE3ODgyNTQ2NzN8MA",
}

export const tableImage: UnsplashImage = {
  id: "tud72enI7JM",
  src: "https://images.unsplash.com/photo-1687963476981-7e839fc0e309?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBwZW9wbGUlMjBjb25jZXJ0JTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwaGFuZHN8ZW58MXwwfHx8MTc4ODI1NDY3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A festival crowd with their hands raised toward the stage",
  width: 6240,
  height: 4160,
  color: "#0c73f3",
  author: "Eric BARBEAU",
  authorUrl: profile("https://unsplash.com/@ericbarbeau"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-crowd-of-people-raising-their-hands-in-the-air-tud72enI7JM",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/tud72enI7JM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBwZW9wbGUlMjBjb25jZXJ0JTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwaGFuZHN8ZW58MXwwfHx8MTc4ODI1NDY3NHww",
}

export const outdoorGatheringImage: UnsplashImage = {
  id: "-N3fQ5Iw0PM",
  src: "https://images.unsplash.com/photo-1611083517823-b432dc3b7320?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBmcmllbmRzJTIwcnVubmluZyUyMGJlYWNoJTIwc3VtbWVyJTIwbGF1Z2hpbmd8ZW58MXwwfHx8MTc4ODI1NDY3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Three young friends walking side by side along the shoreline",
  width: 6720,
  height: 4480,
  color: "#c0c0c0",
  author: "Nilton Castro",
  authorUrl: profile("https://unsplash.com/@niltucastro"),
  sourceUrl: source(
    "https://unsplash.com/photos/3-women-standing-on-beach-during-daytime--N3fQ5Iw0PM",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/-N3fQ5Iw0PM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8eW91bmclMjBmcmllbmRzJTIwcnVubmluZyUyMGJlYWNoJTIwc3VtbWVyJTIwbGF1Z2hpbmd8ZW58MXwwfHx8MTc4ODI1NDY3NHww",
}

export const quietRestImage: UnsplashImage = {
  id: "nSfo9ykCvdE",
  src: "https://images.unsplash.com/photo-1780929401758-d09b118199f9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8eW91bmclMjBwZXJzb24lMjByZWxheGluZyUyMGdyYXNzJTIwcGFyayUyMGNhbG0lMjBzdW1tZXJ8ZW58MXwwfHx8MTc4ODI1NDY3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A young woman sitting on park grass in warm golden light",
  width: 6000,
  height: 4000,
  color: "#f3f3f3",
  author: "Ainur Iman",
  authorUrl: profile("https://unsplash.com/@mynameisiknow"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-woman-enjoys-the-golden-hour-sitting-on-park-grass-nSfo9ykCvdE",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/nSfo9ykCvdE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8eW91bmclMjBwZXJzb24lMjByZWxheGluZyUyMGdyYXNzJTIwcGFyayUyMGNhbG0lMjBzdW1tZXJ8ZW58MXwwfHx8MTc4ODI1NDY3Mnww",
}

export const coupleImage: UnsplashImage = {
  id: "qXe3Pw5sZvE",
  src: "https://images.unsplash.com/photo-1761839258513-099c3121d72d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8aGFwcHklMjB5b3VuZyUyMGNvdXBsZSUyMGxhdWdoaW5nJTIwcGFya3xlbnwxfDB8fHwxNzg4MjU0NjcxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "A young couple laughing together outdoors on a sunny day",
  width: 8192,
  height: 5464,
  color: "#f3f3f3",
  author: "Land O'Lakes, Inc.",
  authorUrl: profile("https://unsplash.com/@landolakesinc"),
  sourceUrl: source(
    "https://unsplash.com/photos/young-couple-laughing-outdoors-on-a-sunny-day-qXe3Pw5sZvE",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/qXe3Pw5sZvE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8aGFwcHklMjB5b3VuZyUyMGNvdXBsZSUyMGxhdWdoaW5nJTIwcGFya3xlbnwxfDB8fHwxNzg4MjU0NjcxfDA",
}

export const beachRunImage: UnsplashImage = {
  id: "qbwJAKN2l9U",
  src: "https://images.unsplash.com/photo-1758337707113-6b18ead9cf62?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBmcmllbmRzJTIwcnVubmluZyUyMGJlYWNoJTIwc3VtbWVyJTIwbGF1Z2hpbmd8ZW58MXwwfHx8MTc4ODI1NDY3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Two friends walking barefoot along the beach near the waves",
  width: 6000,
  height: 4000,
  color: "#a6c0d9",
  author: "Oxana Melis",
  authorUrl: profile("https://unsplash.com/@oksdesign"),
  sourceUrl: source(
    "https://unsplash.com/photos/two-women-walking-on-the-beach-near-the-ocean-qbwJAKN2l9U",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/qbwJAKN2l9U/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8eW91bmclMjBmcmllbmRzJTIwcnVubmluZyUyMGJlYWNoJTIwc3VtbWVyJTIwbGF1Z2hpbmd8ZW58MXwwfHx8MTc4ODI1NDY3NHww",
}

export const createImage: UnsplashImage = {
  id: "a8JFTKDUEDA",
  src: "https://images.unsplash.com/photo-1758525863361-04d3f01735b5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8eW91bmclMjBwZW9wbGUlMjBwbGF5aW5nJTIwZ3VpdGFyJTIwbXVzaWMlMjB0b2dldGhlcnxlbnwxfDB8fHwxNzg4MjU0Njc1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&crop=entropy&q=80",
  alt: "Two young women sitting on stairs playing guitar together",
  width: 3840,
  height: 2160,
  color: "#f3f3f3",
  author: "Vitaly Gariev",
  authorUrl: profile("https://unsplash.com/@silverkblack"),
  sourceUrl: source(
    "https://unsplash.com/photos/two-women-playing-guitar-on-stairs-a8JFTKDUEDA",
  ),
  unsplashUrl,
  downloadLocation:
    "https://api.unsplash.com/photos/a8JFTKDUEDA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8eW91bmclMjBwZW9wbGUlMjBwbGF5aW5nJTIwZ3VpdGFyJTIwbXVzaWMlMjB0b2dldGhlcnxlbnwxfDB8fHwxNzg4MjU0Njc1fDA",
}

export const allImages: UnsplashImage[] = [
  heroMainImage,
  laughingFriendsImage,
  laughingWomenImage,
  movementImage,
  sunlightImage,
  familyImage,
  hugImage,
  conversationImage,
  tableImage,
  outdoorGatheringImage,
  quietRestImage,
  coupleImage,
  beachRunImage,
  createImage,
]
