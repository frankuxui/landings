// Pet Care Haven — "Stories worth telling", the large-format Swiper
// section. Names and quotes are fictional; photographs are real, sourced
// via the unsplash-images Skill.
import type { Story } from "../types"

export const stories: Story[] = [
  {
    id: "olivia",
    petName: "Olivia",
    headline: "The one who lost her fear of the sea",
    quote:
      "She arrived not wanting to go near the shore. Three months later, she's the first to dip her paws in the water.",
    image: {
      id: "JchDHwIKJxs",
      src: "https://images.unsplash.com/photo-1596432353865-033bbd1a9fa7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZG9nJTIwcnVubmluZyUyMGJlYWNoJTIwd2F2ZXMlMjBqb3lmdWx8ZW58MXwwfHx8MTc4NzY0NjU5Nnww&ixlib=rb-4.1.0",
      alt: "Dog running joyfully along a beach shoreline",
      width: 5472,
      height: 3648,
      color: "#737373",
      author: "Maggie Riordan",
      authorUrl:
        "https://unsplash.com/@maggie_riordan?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/brown-short-coated-dog-on-beach-during-daytime-JchDHwIKJxs?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/JchDHwIKJxs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8ZG9nJTIwcnVubmluZyUyMGJlYWNoJTIwd2F2ZXMlMjBqb3lmdWx8ZW58MXwwfHx8MTc4NzY0NjU5Nnww",
    },
  },
  {
    id: "willow",
    petName: "Willow",
    headline: "The window-watcher",
    quote:
      "When the family travels, she stays with us and never misses a single bird from her favorite window.",
    image: {
      id: "7I_kuz5u0HQ",
      src: "https://images.unsplash.com/photo-1764045929730-8f2a490616c5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwc2l0dGluZyUyMHdpbmRvdyUyMHN1bmxpZ2h0JTIwaG9tZXxlbnwxfDB8fHwxNzg3NjQ2NTk3fDA&ixlib=rb-4.1.0",
      alt: "Tabby cat sitting and looking out a window",
      width: 5312,
      height: 3984,
      color: "#d9d9c0",
      author: "Linus Belanger",
      authorUrl:
        "https://unsplash.com/@linusbelanger?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-tabby-cat-sits-looking-out-a-window-7I_kuz5u0HQ?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/7I_kuz5u0HQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwc2l0dGluZyUyMHdpbmRvdyUyMHN1bmxpZ2h0JTIwaG9tZXxlbnwxfDB8fHwxNzg3NjQ2NTk3fDA",
    },
  },
  {
    id: "rocky",
    petName: "Rocky",
    headline: "The one who broke his own record",
    quote:
      "He started refusing to jump over even a low obstacle. Now he clears the whole course without hesitating.",
    image: {
      id: "-3cM5_5dEEQ",
      src: "https://images.unsplash.com/photo-1764377720157-b10acb5c32a9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwYWdpbGl0eSUyMGp1bXAlMjBvYnN0YWNsZSUyMG91dGRvb3J8ZW58MXwwfHx8MTc4NzY0NjYwN3ww&ixlib=rb-4.1.0",
      alt: "Dog jumping over an agility bar outdoors",
      width: 6000,
      height: 4000,
      color: "#26260c",
      author: "Marco Grosso",
      authorUrl:
        "https://unsplash.com/@marcozzolo90?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-yellow-lab-jumps-over-an-agility-bar--3cM5_5dEEQ?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/-3cM5_5dEEQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwYWdpbGl0eSUyMGp1bXAlMjBvYnN0YWNsZSUyMG91dGRvb3J8ZW58MXwwfHx8MTc4NzY0NjYwN3ww",
    },
  },
  {
    id: "hazel-and-bruno",
    petName: "Hazel and Bruno",
    headline: "The friendship no one expected",
    quote:
      "They arrived weeks apart and today they're inseparable — a cat and a dog who decided to be family.",
    image: {
      id: "9gz3wfHr65U",
      src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwYW5kJTIwY2F0JTIwdG9nZXRoZXIlMjBmcmllbmRzaGlwfGVufDF8MHx8fDE3ODc2NDY2MDd8MA&ixlib=rb-4.1.0",
      alt: "White dog and gray cat hugging each other on the grass",
      width: 2896,
      height: 1704,
      color: "#262626",
      author: "Krista Mangulsone",
      authorUrl:
        "https://unsplash.com/@krista?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/white-dog-and-gray-cat-hugging-each-other-on-grass-9gz3wfHr65U?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/9gz3wfHr65U/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwYW5kJTIwY2F0JTIwdG9nZXRoZXIlMjBmcmllbmRzaGlwfGVufDF8MHx8fDE3ODc2NDY2MDd8MA",
    },
  },
  {
    id: "juniper",
    petName: "Juniper",
    headline: "The one who learned to rest",
    quote:
      "She used to pace the room for hours. Now she falls asleep on the first pillow she finds.",
    image: {
      id: "R0FrIEyOAmI",
      src: "https://images.unsplash.com/photo-1765329096637-eb0af50c6d79?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cmVzY3VlJTIwZG9nJTIwcmVjb3ZlcnklMjBibGFua2V0JTIwY296eSUyMGhvbWV8ZW58MXwwfHx8MTc4NzcyODE5M3ww&ixlib=rb-4.1.0",
      alt: "Dog resting its head on a pillow, completely at ease indoors",
      width: 6000,
      height: 4000,
      color: "#c0c0a6",
      author: "Daisy D",
      authorUrl:
        "https://unsplash.com/@ddddaisy?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-dog-rests-its-head-on-a-pillow-indoors-R0FrIEyOAmI?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/R0FrIEyOAmI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cmVzY3VlJTIwZG9nJTIwcmVjb3ZlcnklMjBibGFua2V0JTIwY296eSUyMGhvbWV8ZW58MXwwfHx8MTc4NzcyODE5M3ww",
    },
  },
  {
    id: "clementine",
    petName: "Clementine",
    headline: "The one who trusted hands again",
    quote:
      "She flinched at every touch when she arrived. Now she leans into every hand that reaches for her.",
    image: {
      id: "YdzqRIJ6oEA",
      src: "https://images.unsplash.com/photo-1757487212389-175a647038c2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8c2VuaW9yJTIwY2F0JTIwYWRvcHRpb24lMjBjYWxtJTIwbGFwJTIwY29tZm9ydHxlbnwxfDB8fHwxNzg3NzI4MjAzfDA&ixlib=rb-4.1.0",
      alt: "Relaxed cat resting calmly against a person's arm",
      width: 6048,
      height: 4024,
      color: "#404040",
      author: "Jeremy Mowery",
      authorUrl:
        "https://unsplash.com/@jermowery?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-relaxed-cat-rests-on-a-persons-arm-YdzqRIJ6oEA?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/YdzqRIJ6oEA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8c2VuaW9yJTIwY2F0JTIwYWRvcHRpb24lMjBjYWxtJTIwbGFwJTIwY29tZm9ydHxlbnwxfDB8fHwxNzg3NzI4MjAzfDA",
    },
  },
]
