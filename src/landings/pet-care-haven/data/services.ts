// Pet Care Haven — the service catalog grid. Four services reuse the exact
// photograph already selected for the matching scene in "A day of care"
// (same subject, same attribution — no new Unsplash selection needed);
// three services use a photograph selected specifically for this section.
import type { Service } from "../types"

export const services: Service[] = [
  {
    id: "walks",
    name: "Daily walks",
    description:
      "Solo outings or compatible pairs, with a fixed or flexible schedule depending on your week.",
    benefit: "Consistent exercise, with no gaps in the agenda.",
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
    name: "Day care",
    description:
      "Small groups, supervised free play, and guided rest throughout the working day.",
    benefit: "Healthy socialization, with no cages involved.",
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
    id: "boarding",
    name: "Boarding / hotel",
    description:
      "Stays of one night or several weeks, with the same feeding and walking routine as at home.",
    benefit: "No abrupt changes, even when you travel far.",
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
    id: "bathing-grooming",
    name: "Bathing and grooming",
    description:
      "Neutral shampoos, temperature-controlled drying, brushing, nails, and ear cleaning in a single visit.",
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
    id: "supervised-feeding",
    name: "Supervised feeding",
    description:
      "Portions, schedules, and special diets exactly as you set them, with a record of every meal.",
    benefit: "Their diet is respected down to the detail, even away from home.",
    image: {
      id: "Qvbr5Uxgz_Q",
      src: "https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwZm9vZCUyMGJvd2wlMjBmZWVkaW5nfGVufDF8MHx8fDE3ODc2NDY1NjJ8MA&ixlib=rb-4.1.0",
      alt: "Dog eating from its bowl in a calm home setting",
      width: 4608,
      height: 3072,
      color: "#c0c0c0",
      author: "Ayla Verschueren",
      authorUrl:
        "https://unsplash.com/@moob?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-brown-and-white-dog-eating-food-out-of-a-bowl-Qvbr5Uxgz_Q?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/Qvbr5Uxgz_Q/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwZm9vZCUyMGJvd2wlMjBmZWVkaW5nfGVufDF8MHx8fDE3ODc2NDY1NjJ8MA",
    },
  },
  {
    id: "play-and-socializing",
    name: "Play and socializing",
    description:
      "Guided play sessions in compatible groups, designed to burn energy and reinforce good social habits.",
    benefit: "They learn to socialize through play, not just rules.",
    image: {
      id: "h5dS6qKpbNU",
      src: "https://images.unsplash.com/photo-1711832740932-f7f3fe63cdd5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9ncyUyMHBsYXlpbmclMjB0dWclMjB0b3klMjBvdXRkb29yfGVufDF8MHx8fDE3ODc2NDY1NTV8MA&ixlib=rb-4.1.0",
      alt: "Two dogs playing together with a stick outdoors",
      width: 6000,
      height: 4000,
      color: "#402626",
      author: "Marie Martin",
      authorUrl:
        "https://unsplash.com/@marie_martin1?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/two-dogs-are-playing-with-a-stick-in-their-mouth-h5dS6qKpbNU?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/h5dS6qKpbNU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9ncyUyMHBsYXlpbmclMjB0dWclMjB0b3klMjBvdXRkb29yfGVufDF8MHx8fDE3ODc2NDY1NTV8MA",
    },
  },
  {
    id: "puppy-and-senior-care",
    name: "Puppy and senior care",
    description:
      "Dedicated protocols for the two life stages that need the most attention: energy and learning for puppies, calm and comfort for the senior years.",
    benefit: "Every age has its own pace of care.",
    image: {
      id: "uXkJ41D5piY",
      src: "https://images.unsplash.com/photo-1642303009699-7d7fd6d4a243?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VuaW9yJTIwZG9nJTIwZ3JheSUyMG11enpsZSUyMHBvcnRyYWl0JTIwYmxhbmtldHxlbnwxfDB8fHwxNzg3NjQ2NTYzfDA&ixlib=rb-4.1.0",
      alt: "Calm dog resting close up on a sofa",
      width: 6000,
      height: 4000,
      color: "#c0c0c0",
      author: "Jack Plant",
      authorUrl:
        "https://unsplash.com/@jackplantt?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-close-up-of-a-dog-laying-on-a-couch-uXkJ41D5piY?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/uXkJ41D5piY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VuaW9yJTIwZG9nJTIwZ3JheSUyMG11enpsZSUyMHBvcnRyYWl0JTIwYmxhbmtldHxlbnwxfDB8fHwxNzg3NjQ2NTYzfDA",
    },
  },
]
