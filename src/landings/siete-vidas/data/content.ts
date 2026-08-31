import { images } from "./images"
import type {
  AnatomyItem,
  ArchiveRecord,
  Curiosity,
  Expression,
  FactItem,
  LogicPair,
  NavLink,
  PersonalityProfile,
  Story,
} from "../types"

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Issue" },
  { href: "#lives", label: "Seven lives" },
  { href: "#curiosities", label: "Curiosities" },
  { href: "#personalities", label: "Profiles" },
  { href: "#stories", label: "Stories" },
  { href: "#night-mode", label: "03:17" },
  { href: "#gallery", label: "Gallery" },
]

export const factItems: FactItem[] = [
  {
    number: "01",
    category: "Sleep",
    title: "They sleep a lot.",
    body: "Adult cats commonly sleep in short bursts across the day and night, often around 12 to 16 hours.",
    detail:
      "The schedule is less laziness than energy economics: conserve, inspect, sprint, return to the cushion like nothing happened.",
    sourceLabel: "VCA Hospitals",
    image: images.sleep,
  },
  {
    number: "02",
    category: "Senses",
    title: "Their ears operate like radar.",
    body: "Cats have 32 muscles in each ear, and each ear can move independently.",
    detail:
      "That rotating triangle is part listening device, part mood typography, part early warning system for snack packets.",
    sourceLabel: "VCA Hospitals",
    image: images.expressionWatch,
  },
  {
    number: "03",
    category: "Touch",
    title: "Whiskers are spatial tools.",
    body: "Vibrissae help cats detect air movement and judge tight spaces before the body commits.",
    detail:
      "They are range-finders for door gaps, sofa caves, and the exact width of a forbidden shelf.",
    sourceLabel: "Veterinary sources",
    image: images.hero,
  },
  {
    number: "04",
    category: "Communication",
    title: "Purring is not a simple mood report.",
    body: "Cats may purr during friendly contact, but also during stress, pain, or self-soothing.",
    detail:
      "The sound can mean comfort, negotiation, or a tiny engine running through complicated weather.",
    sourceLabel: "Cornell Feline Health Center",
    image: images.expressionNo,
  },
  {
    number: "05",
    category: "Instinct",
    title: "The hunter is still installed.",
    body: "Dawn and dusk activity reflects a crepuscular hunting pattern rather than pure nocturnal behavior.",
    detail:
      "Apartment life changes the stage, not the operating system. The receipt is simply today's prey.",
    sourceLabel: "VCA Hospitals",
    image: images.logic,
  },
  {
    number: "06",
    category: "Vision",
    title: "Dim light is their theatre.",
    body: "A reflective tapetum lucidum and many rod cells help cats see far better than people in low light.",
    detail:
      "Not total darkness, not magic, but a very unfair advantage when the hallway is only moonlit.",
    sourceLabel: "MSD Veterinary Manual",
    image: images.night,
  },
  {
    number: "07",
    category: "Editorial Theory",
    title: "They may be ignoring you deliberately.",
    body: "This one is editorial speculation. It is also the strongest working theory in the room.",
    detail:
      "No study has confirmed it. Every closed door, untouched toy, and slow blink has declined to deny it.",
    sourceLabel: "Editorial note",
    image: images.galleryStand,
  },
]

export const curiosities: Curiosity[] = [
  {
    number: "01",
    category: "Instinct",
    title: "The hunter never clocked out.",
    body: "A sudden sprint across the room often looks absurd because the prey has been replaced by light, fabric, or an idea.",
    why: "Crepuscular behavior makes dawn and dusk feel like prime time, even indoors.",
    extra:
      "Hidden layer: the living room is a savannah if you squint and ignore the sofa.",
    image: images.logic,
  },
  {
    number: "02",
    category: "Senses",
    title: "The face is a sensor array.",
    body: "Whiskers are touch receptors, not decoration. They help a cat read edges, air currents, and narrow gaps.",
    why: "That is why cutting whiskers can disorient a cat. The drama is anatomical.",
    extra:
      "Hidden layer: every cardboard tunnel is being measured with laboratory seriousness.",
    image: images.hero,
  },
  {
    number: "03",
    category: "Vision",
    title: "They do not see in total darkness.",
    body: "Cats still need some light, but their eyes are tuned for low-light hunting with rod-rich retinas.",
    why: "The eye-shine comes from the tapetum lucidum reflecting light back through the retina.",
    extra:
      "Hidden layer: the corridor at midnight is not empty; it is an illuminated runway.",
    image: images.night,
  },
  {
    number: "04",
    category: "Sleep",
    title: "The nap is operational.",
    body: "Long sleep windows conserve energy for short hunting-style bursts, even in a home with excellent cushions.",
    why: "Predator hardware uses rest as strategy. The sofa is merely infrastructure.",
    extra:
      "Hidden layer: fourteen hours of rest can still require one dramatic sigh.",
    image: images.sleep,
  },
  {
    number: "05",
    category: "Communication",
    title: "A slow blink is punctuation.",
    body: "Eye contact, blink timing, tail position, and posture can shift a message without a single sound.",
    why: "Cat communication is often quiet, contextual, and annoyingly easy to misread.",
    extra:
      "Hidden layer: the period, comma, and footnote are all in the eyelids.",
    image: images.expressionNo,
  },
  {
    number: "06",
    category: "History",
    title: "The myth keeps changing coats.",
    body: "Black-cat folklore varies widely: omen in one place, protection in another, lucky shipmate somewhere else.",
    why: "Human culture keeps projecting stories onto an animal that mostly wants a warmer windowsill.",
    extra:
      "Hidden layer: superstition has terrible UX and worse documentation.",
    image: images.blackCat,
  },
]

export const stories: Story[] = [
  {
    kicker: "Editorial Story",
    title: "The window committee.",
    location: "North-facing sill",
    context: "Sunrise surveillance, no minutes published.",
    body: "At sunrise, one cat studies the same ledge for twenty minutes. Nothing happens. The report is still classified.",
    note: "A fictional editorial vignette, written as atmosphere rather than fact.",
    image: images.expressionWatch,
  },
  {
    kicker: "Documented Behavior",
    title: "The evening patrol.",
    location: "Kitchen to hallway",
    context: "Dusk activity with a scientific alibi.",
    body: "Many domestic cats become more alert around dusk and dawn, the hours when prey animals are often active.",
    note: "Grounded in crepuscular behavior described by veterinary sources.",
    image: images.night,
  },
  {
    kicker: "Editorial Story",
    title: "The box won again.",
    location: "Living room floor",
    context: "A design failure for expensive pet furniture.",
    body: "The bed was expensive, orthopedic, and reviewed by humans. The cardboard box had no credentials. It prevailed.",
    note: "A fictional domestic case file. Painfully plausible, intentionally not scientific.",
    image: images.logic,
  },
]

export const logicPairs: LogicPair[] = [
  { setup: "Buy an expensive bed.", result: "Sleep in the box." },
  { setup: "Ignore the toy.", result: "Attack the receipt." },
  { setup: "Reject affection.", result: "Sit on the keyboard." },
  { setup: "Sleep for hours.", result: "Run at 03:17." },
]

export const personalityProfiles: PersonalityProfile[] = [
  {
    code: "P-01",
    title: "The Boss",
    description:
      "Approves schedules, rejects chairs, and conducts silent performance reviews from the highest shelf.",
    signal: "Tail still. Eyes direct. You are already late.",
    image: images.hero,
  },
  {
    code: "P-02",
    title: "The Dramatic",
    description:
      "Experiences a closed door as theatre, weather, betrayal, and opera in one compact event.",
    signal: "Vocal range: corridor to ceiling.",
    image: images.expressionNo,
  },
  {
    code: "P-03",
    title: "The Invisible",
    description:
      "Exists only as a warm dent in laundry, a sound behind the sofa, and a pair of eyes at dinner.",
    signal: "Present, legally unprovable.",
    image: images.sleep,
  },
  {
    code: "P-04",
    title: "The Hunter",
    description:
      "Treats string, lint, light, and your ankle as different departments of the same urgent mission.",
    signal: "Low shoulder. Sudden geometry.",
    image: images.logic,
  },
  {
    code: "P-05",
    title: "The Sleeper",
    description:
      "Makes exhaustion look like a craft discipline, then wakes refreshed enough to complain.",
    signal: "Fourteen hours. Still tired.",
    image: images.footer,
  },
  {
    code: "P-06",
    title: "The 3:00 AM One",
    description:
      "Materializes in the dark with an urgent need to test every acoustic surface in the home.",
    signal: "No motive. Excellent speed.",
    image: images.night,
  },
]

export const anatomyItems: AnatomyItem[] = [
  {
    question: "Why do cats knead with their paws?",
    title: "Old comfort, new blanket.",
    body: "Kneading is often linked with early nursing behavior and comfort. In adulthood it can mark a soft place, self-soothe, or simply announce that the blanket has been acquired.",
  },
  {
    question: "Why do their ears move separately?",
    title: "Directional sound editing.",
    body: "Independent ear movement helps locate sound while also broadcasting mood. The same pair of ears can be radar, punctuation, and a warning sign.",
  },
  {
    question: "Why do cats stare at empty corners?",
    title: "The corner filed a report.",
    body: "They may be tracking faint sound, dust, reflected light, or tiny movement. The human version is 'nothing.' The cat version is 'ongoing investigation.'",
  },
  {
    question: "Why do they purr when stressed?",
    title: "Not always happiness.",
    body: "Purring can happen during friendly contact, but also during stress, discomfort, or recovery. It is a signal with context, not a single translation.",
  },
]

export const expressions: Expression[] = [
  {
    word: "NO.",
    caption: "A complete sentence, delivered silently.",
    image: images.expressionNo,
  },
  {
    word: "NOW.",
    caption: "The stare has found something. You have not been briefed.",
    image: images.expressionWatch,
  },
  {
    word: "WHY.",
    caption: "A face halfway between mysticism and a receipt attack.",
    image: images.galleryStand,
  },
]

export const archiveRecords: ArchiveRecord[] = [
  {
    code: "CAT 001",
    coat: "BLACK",
    mass: "4.8 KG",
    likes: "WINDOWS",
    hates: "CLOSED DOORS",
  },
  {
    code: "CAT 002",
    coat: "WHITE",
    mass: "3.9 KG",
    likes: "LAUNDRY",
    hates: "APPLAUSE",
  },
  {
    code: "CAT 003",
    coat: "TABBY",
    mass: "5.1 KG",
    likes: "KEYBOARDS",
    hates: "SCHEDULES",
  },
  {
    code: "CAT 004",
    coat: "UNKNOWN",
    mass: "CLASSIFIED",
    likes: "03:17",
    hates: "EXPLANATIONS",
  },
]

export const sourceLinks: NavLink[] = [
  {
    href: "https://vcahospitals.com/resources/behavior-cat/true-or-false-cats-are-nocturnal",
    label: "VCA Hospitals - crepuscular behavior",
  },
  {
    href: "https://vcahospitals.com/resources/behavior-cat/concerns/is-your-pet-sleeping-too-much",
    label: "VCA Hospitals - cat sleep",
  },
  {
    href: "https://vcahospitals.com/resources/lifestyle/seven-fun-facts-about-your-pet-s-ears",
    label: "VCA Hospitals - cat ears",
  },
  {
    href: "https://www.msdvetmanual.com/cat-owners/eye-disorders-of-cats/eye-structure-and-function-in-cats",
    label: "MSD Veterinary Manual - cat eyes",
  },
  {
    href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cats-lick-too-much",
    label: "Cornell Feline Health Center - stress behavior",
  },
]
