// Pet Care Haven — the six scenes of "A day of care", the pinned
// storytelling section. Photography sourced via the unsplash-images Skill;
// every field below comes straight from the Unsplash API response captured
// at selection time (search → pick → download tracking → persist).
import type { Scene } from "../types"

export const scenes: Scene[] = [
  {
    id: "walks",
    index: "01",
    title: "Daily walks",
    description:
      "Every walk is paced to your companion: calm routes for the more sensitive ones, active outings for those who need to burn energy.",
    benefit: "Daily exercise without reorganizing your schedule.",
    image: {
      id: "Ax_Gugvx0CI",
      src: "https://images.unsplash.com/photo-1768679363900-2c52cd753de8?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwd2Fsa2luZyUyMGxlYXNoJTIwY2l0eSUyMHN0cmVldHxlbnwxfDB8fHwxNzg3NjQ2NTA4fDA&ixlib=rb-4.1.0",
      alt: "Person walking their dog on a city corner at sunset",
      width: 5472,
      height: 3648,
      color: "#262626",
      author: "Lina Bob",
      authorUrl:
        "https://unsplash.com/@anbb?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/man-with-dog-on-street-corner-at-sunset-Ax_Gugvx0CI?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/Ax_Gugvx0CI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwd2Fsa2luZyUyMGxlYXNoJTIwY2l0eSUyMHN0cmVldHxlbnwxfDB8fHwxNzg3NjQ2NTA4fDA",
    },
  },
  {
    id: "day-care",
    index: "02",
    title: "Day care",
    description:
      "Small, compatible groups, with supervised free play throughout the day. A new dog is never left without a slow, careful introduction.",
    benefit: "Real socialization, no cages and no dead time.",
    image: {
      id: "bUueTEY-FOc",
      src: "https://images.unsplash.com/photo-1667230228326-c881966e2a29?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bXVsdGlwbGUlMjBkb2dzJTIwcGxheWluZyUyMHBhcmt8ZW58MXwwfHx8MTc4NzY0NjUyMHww&ixlib=rb-4.1.0",
      alt: "Group of dogs playing together in a park during the day",
      width: 4526,
      height: 3017,
      color: "#a68c73",
      author: "Rui Alves",
      authorUrl:
        "https://unsplash.com/@asfotosde1enorme?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-group-of-dogs-in-a-park-bUueTEY-FOc?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/bUueTEY-FOc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bXVsdGlwbGUlMjBkb2dzJTIwcGxheWluZyUyMHBhcmt8ZW58MXwwfHx8MTc4NzY0NjUyMHww",
    },
  },
  {
    id: "bath",
    index: "03",
    title: "Bathing and grooming",
    description:
      "Neutral shampoos, temperature-controlled drying, and an unhurried pace for those who find bath time stressful. Brushing, nails, and ears in the same visit.",
    benefit: "A well-groomed coat, without the stress of the tub at home.",
    image: {
      id: "Eb7WQOqwnp0",
      src: "https://images.unsplash.com/photo-1672426637959-49f39230ad7e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwYmF0aCUyMGdyb29taW5nJTIwd2F0ZXJ8ZW58MXwwfHx8MTc4NzY0NjUyOHww&ixlib=rb-4.1.0",
      alt: "Brown dog standing next to a tub prepared for bath time",
      width: 5119,
      height: 3413,
      color: "#c0c0c0",
      author: "Ottr Dan",
      authorUrl:
        "https://unsplash.com/@ottrdan?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-brown-dog-standing-next-to-a-bath-tub-filled-with-water-Eb7WQOqwnp0?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/Eb7WQOqwnp0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwYmF0aCUyMGdyb29taW5nJTIwd2F0ZXJ8ZW58MXwwfHx8MTc4NzY0NjUyOHww",
    },
  },
  {
    id: "boarding",
    index: "04",
    title: "Boarding and travel",
    description:
      "Calm rooms, their own blanket, and the same feeding and walking routine they follow at home, even while you're away for several days.",
    benefit: "Guilt-free vacations: your pet's routine never breaks.",
    image: {
      id: "s9Tf1eBDFqw",
      src: "https://images.unsplash.com/photo-1581888227599-779811939961?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwcmVzdGluZyUyMGNvenklMjBiZWQlMjBpbmRvb3J8ZW58MXwwfHx8MTc4NzY0NjUyOXww&ixlib=rb-4.1.0",
      alt: "Dog resting comfortably in a bed with a gray blanket",
      width: 5124,
      height: 3843,
      color: "#d9d9d9",
      author: "Jamie Street",
      authorUrl:
        "https://unsplash.com/@jamie452?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/dog-resting-in-grey-dog-bed-s9Tf1eBDFqw?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/s9Tf1eBDFqw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwcmVzdGluZyUyMGNvenklMjBiZWQlMjBpbmRvb3J8ZW58MXwwfHx8MTc4NzY0NjUyOXww",
    },
  },
  {
    id: "personalized-attention",
    index: "05",
    title: "Personalized attention",
    description:
      "Every pet has its own profile: allergies, fears, medication, favorite toy. Every caregiver reads it before receiving them, not just the first time.",
    benefit: "Never 'just another dog': it's yours, with its full history.",
    image: {
      id: "dz4HSShbvqk",
      src: "https://images.unsplash.com/photo-1722251517797-97723b773dd7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8cGVyc29uJTIwaHVnZ2luZyUyMGRvZyUyMGFmZmVjdGlvbiUyMGNsb3NlJTIwdXB8ZW58MXwwfHx8MTc4NzY0NjUzOHww&ixlib=rb-4.1.0",
      alt: "Close-up of a hand affectionately petting a dog",
      width: 6240,
      height: 4160,
      color: "#c0d9f3",
      author: "Mariest",
      authorUrl:
        "https://unsplash.com/@mariestttt?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-close-up-of-a-person-petting-a-dog-dz4HSShbvqk?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/dz4HSShbvqk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8cGVyc29uJTIwaHVnZ2luZyUyMGRvZyUyMGFmZmVjdGlvbiUyMGNsb3NlJTIwdXB8ZW58MXwwfHx8MTc4NzY0NjUzOHww",
    },
  },
  {
    id: "wellbeing-follow-up",
    index: "06",
    title: "Wellbeing follow-up",
    description:
      "After every long stay or routine change, a brief summary: how they ate, how they slept, how they got on with the others. No surprises at pickup.",
    benefit: "Real peace of mind, not just a nice photo at the end of the day.",
    image: {
      id: "loJL4ijUobg",
      src: "https://images.unsplash.com/photo-1630438994394-3deff7a591bf?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmV0ZXJpbmFyaWFuJTIwZXhhbWluaW5nJTIwZG9nJTIwY2hlY2t1cHxlbnwxfDB8fHwxNzg3NjQ2NTM5fDA&ixlib=rb-4.1.0",
      alt: "Calm dog wearing a polka-dot shirt in a consultation setting",
      width: 4240,
      height: 2832,
      color: "#d9d9d9",
      author: "Karsten Winegeart",
      authorUrl:
        "https://unsplash.com/@_karsten?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/white-and-black-short-coated-dog-wearing-white-and-black-polka-dot-shirt-loJL4ijUobg?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/loJL4ijUobg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmV0ZXJpbmFyaWFuJTIwZXhhbWluaW5nJTIwZG9nJTIwY2hlY2t1cHxlbnwxfDB8fHwxNzg3NjQ2NTM5fDA",
    },
  },
]
