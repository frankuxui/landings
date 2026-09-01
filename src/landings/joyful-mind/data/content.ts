import {
  beachRunImage,
  conversationImage,
  createImage,
  familyImage,
  hugImage,
  laughingFriendsImage,
  movementImage,
  outdoorGatheringImage,
  quietRestImage,
  sunlightImage,
  tableImage,
} from "./images"
import type {
  FeelGoodTab,
  GalleryMoment,
  Habit,
  HorizontalScene,
  JoyStory,
  MoodState,
  Reminder,
} from "../types"

export const navItems = [
  { href: "#habits", label: "Habits" },
  { href: "#science", label: "Feel good" },
  { href: "#stories", label: "Stories" },
  { href: "#mood", label: "Mood" },
] as const

export const habits: Habit[] = [
  {
    label: "Move",
    note: "A short walk can change the volume of the whole day.",
  },
  {
    label: "Laugh",
    note: "Let a silly moment count. It still belongs to care.",
  },
  {
    label: "Rest",
    note: "Rest is not an apology. It is maintenance for being alive.",
  },
  {
    label: "Talk",
    note: "Text the person who makes your shoulders drop.",
  },
  {
    label: "Breathe",
    note: "Make a little room between the feeling and the next move.",
  },
  {
    label: "Play",
    note: "Do something beautifully unnecessary for five minutes.",
  },
  {
    label: "Connect",
    note: "Being seen by someone kind can soften the whole room.",
  },
  {
    label: "Go outside",
    note: "Light, air, and a different horizon can help the mind reset.",
  },
]

export const tabs: FeelGoodTab[] = [
  {
    id: "laugh",
    label: "Laugh",
    title: "A laugh can loosen the knot.",
    copy: "Not because everything is fine, but because the body remembers another register: warmth, release, surprise, togetherness.",
    cue: "social spark",
    image: laughingFriendsImage,
  },
  {
    id: "move",
    label: "Move",
    title: "Motion gives feelings a place to go.",
    copy: "A walk, a stretch, a kitchen dance. Small movement can turn a fixed mood into something with edges.",
    cue: "active clarity",
    image: movementImage,
  },
  {
    id: "connect",
    label: "Connect",
    title: "A good conversation changes the weather.",
    copy: "Connection does not need drama. Sometimes it is a voice note, a shared meal, or someone saying they are here.",
    cue: "human signal",
    image: conversationImage,
  },
  {
    id: "rest",
    label: "Rest",
    title: "Rest is part of the rhythm.",
    copy: "Pause is not falling behind. It is how attention, patience, and tenderness find their way back in.",
    cue: "soft reset",
    image: quietRestImage,
  },
  {
    id: "create",
    label: "Create",
    title: "Make something with no scoreboard.",
    copy: "Draw badly, cook loudly, hum along, arrange flowers, take a picture. The point is contact with the present.",
    cue: "free play",
    image: createImage,
  },
]

export const stories: JoyStory[] = [
  {
    quote: "Every Friday we walk until the city gets soft.",
    name: "Mira",
    context: "after-work ritual",
    story:
      "No agenda, no performance. Just shoes, weather, and a friend who lets silence be part of the conversation.",
    image: movementImage,
  },
  {
    quote: "We stayed by the water until the tide came in.",
    name: "Noa",
    context: "slow weekend",
    story:
      "No plan, no photos to post. Everyone stayed longer than expected, and the afternoon quietly became the point.",
    image: beachRunImage,
  },
  {
    quote: "My sister sent one terrible joke and I laughed out loud.",
    name: "Ren",
    context: "small rescue",
    story:
      "Nothing grand changed. But the room did. A laugh came through the phone and gave the day another doorway.",
    image: laughingFriendsImage,
  },
  {
    quote: "We sat outside until the light gave up.",
    name: "Ari",
    context: "summer bench",
    story:
      "Sometimes care is not a plan. Sometimes it is staying with good company for one more quiet minute.",
    image: outdoorGatheringImage,
  },
]

export const horizontalScenes: HorizontalScene[] = [
  {
    number: "01",
    label: "Friends",
    title: "People are a place.",
    copy: "The right person can make a hard afternoon feel less locked.",
    meta: "connection / warmth",
    image: familyImage,
  },
  {
    number: "02",
    label: "Music",
    title: "Let the room move.",
    copy: "A song can remind the body that joy has a beat.",
    meta: "sound / release",
    image: tableImage,
  },
  {
    number: "03",
    label: "Movement",
    title: "Walk the feeling through.",
    copy: "Not to escape the mood. To give it air and direction.",
    meta: "pace / daylight",
    image: movementImage,
  },
  {
    number: "04",
    label: "Sunlight",
    title: "Find the outside edge.",
    copy: "A patch of sky can make the mind feel less sealed.",
    meta: "fresh air / reset",
    image: sunlightImage,
  },
  {
    number: "05",
    label: "Rest",
    title: "Choose the softer hour.",
    copy: "There is courage in stopping before the day takes everything.",
    meta: "pause / recovery",
    image: quietRestImage,
  },
]

export const moods: MoodState[] = [
  {
    id: "low",
    label: "Low",
    title: "Start smaller than small.",
    copy: "Water. Window. One message. One breath you do not rush.",
    image: quietRestImage,
  },
  {
    id: "calm",
    label: "Calm",
    title: "Let calm have a shape.",
    copy: "Keep the pace. Notice what is already not asking for effort.",
    image: sunlightImage,
  },
  {
    id: "okay",
    label: "Okay",
    title: "Okay is real ground.",
    copy: "You do not need fireworks. A steady hour can be enough.",
    image: tableImage,
  },
  {
    id: "good",
    label: "Good",
    title: "Share the good before it evaporates.",
    copy: "Send the picture. Make the plan. Let someone meet you there.",
    image: conversationImage,
  },
  {
    id: "great",
    label: "Great",
    title: "Use the lift kindly.",
    copy: "Move, make, invite, stretch the moment without squeezing it.",
    image: laughingFriendsImage,
  },
  {
    id: "alive",
    label: "Alive",
    title: "Let the day get wide.",
    copy: "Call your people. Go outside. Say yes to the simple thing.",
    image: outdoorGatheringImage,
  },
]

export const gallery: GalleryMoment[] = [
  {
    caption: "Laugh when the joke is barely a joke.",
    image: laughingFriendsImage,
  },
  { caption: "Put your shoes by the door.", image: sunlightImage },
  { caption: "Make room at the table.", image: tableImage },
  { caption: "Let someone hold the quiet with you.", image: hugImage },
  { caption: "Walk with no productivity attached.", image: movementImage },
  { caption: "Celebrate the almost-nothing.", image: outdoorGatheringImage },
]

export const reminders: Reminder[] = [
  {
    line: "You do not need a perfect day.",
    tag: "Expectations",
    detail:
      "A day can be mostly ordinary — a little slow, a little scattered — and still count. Aim for one good moment, not a flawless timeline.",
  },
  {
    line: "Call someone.",
    tag: "Connection",
    detail:
      "Not a scheduled catch-up. A two-minute voice note or a plain hello is enough to remind your nervous system it is not doing this alone.",
  },
  {
    line: "Go outside, even briefly.",
    tag: "Environment",
    detail:
      "Light, air, and a different horizon change the input your mind is working with. A walk to the corner counts as a change of scene.",
  },
  {
    line: "Move a little.",
    tag: "Body",
    detail:
      "A stretch, a lap of the kitchen, a song you cannot sit still to. Motion gives a stuck feeling somewhere to go.",
  },
  {
    line: "Rest without apologising.",
    tag: "Recovery",
    detail:
      "Pausing is not falling behind. It is the part of the rhythm where attention, patience, and warmth find their way back in.",
  },
  {
    line: "Laugh when you can.",
    tag: "Lightness",
    detail:
      "Not because everything is fine, but because a real laugh resets the room for a second — and sometimes a second is the opening you needed.",
  },
]

export const momentPrompts = [
  "Text someone a genuinely terrible joke.",
  "Stand up and reach for the ceiling.",
  "Look at the farthest thing you can see.",
  "Put on the song from that one summer.",
  "Drink a full glass of water, slowly.",
  "Step outside for the length of one breath.",
  "Write down one good thing from today.",
  "Unclench your jaw. Drop your shoulders.",
  "Message the person who makes you laugh.",
  "Sit in the light for two minutes.",
  "Do nothing on purpose for sixty seconds.",
  "Name the last thing that made you smile.",
] as const
