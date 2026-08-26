export type Environment = {
  name: string
  note: string
  code: string
  season: string
  method: string
  principle: string
}
export type Highlight = {
  label: string
  title: string
  summary: string
  detail: string
}
export type Story = {
  title: string
  location: string
  text: string
  tag: string
  conditions: string
  lesson: string
}
export type Gear = {
  name: string
  type: string
  reason: string
  fieldNote: string
}
export type Tip = { title: string; guidance: string }
export type Collaboration = {
  title: string
  description: string
  deliverables: string
}

export const environments: Environment[] = [
  {
    name: "Mountains",
    note: "Thin air, pocket water, and a careful approach through exposed terrain.",
    code: "01 / altitude",
    season: "Late spring — early autumn",
    method: "Light spinning · mobile approach",
    principle: "Walk softly, cast short, and let elevation set the pace.",
  },
  {
    name: "Lakes",
    note: "Still water rewards patience, long observation, and a willingness to move.",
    code: "02 / still water",
    season: "All year · weather dependent",
    method: "Shore search · boat drift",
    principle: "Read wind lanes before opening the tackle box.",
  },
  {
    name: "Rivers",
    note: "Current, structure, and the exact rhythm of a natural presentation.",
    code: "03 / moving water",
    season: "Spring flows · autumn clarity",
    method: "Upstream search · controlled drift",
    principle: "Fish the seam, not the whole river.",
  },
  {
    name: "Sea",
    note: "Tides, salt, long horizons, and tackle built for uncertain conditions.",
    code: "04 / open water",
    season: "Tide first · season second",
    method: "Rock marks · inshore boat",
    principle: "Plan the exit before the first cast.",
  },
]

export const highlights: Highlight[] = [
  {
    label: "Adventure 034 · high country",
    title: "A two-day walk for one clear-water window.",
    summary:
      "The basin opened for less than an hour between wind fronts. Careful route planning mattered more than the lure pattern.",
    detail: "11 km approach · barometric shift · catch and release",
  },
  {
    label: "Field study 021 · river system",
    title: "Following temperature instead of familiar marks.",
    summary:
      "A blank morning changed where two tributaries met. The logbook made the pattern visible before the fish confirmed it.",
    detail: "Three water readings · one productive seam · no shortcuts",
  },
  {
    label: "Tidal note 013 · outer coast",
    title: "The smallest tide change moved the entire session.",
    summary:
      "Birds, bait, and current aligned for minutes. Preparation made the brief opportunity feel calm rather than rushed.",
    detail: "Dawn tide · crosswind · compact saltwater setup",
  },
]

export const stories: Story[] = [
  {
    title: "Nothing until the last cast",
    location: "North shore",
    text: "Nine quiet hours made the final take feel less like luck and more like a conversation finally answered. The useful part was learning which clues were noise.",
    tag: "Field note 018",
    conditions: "Falling pressure · broken cloud · 9°C water",
    lesson: "Hold the plan lightly. Keep the observation precise.",
  },
  {
    title: "Fog over the high lake",
    location: "Mountain basin",
    text: "Visibility fell to a few rod lengths. Sound, temperature, and the edge of the reeds became the whole map. Moving less revealed more than searching faster.",
    tag: "Field note 024",
    conditions: "Dense fog · flat calm · low visibility",
    lesson: "When the landscape disappears, fish the details within reach.",
  },
  {
    title: "The tide changed first",
    location: "Outer coast",
    text: "A small shift in current moved the bait, the birds, and every plan made before sunrise. Preparation met a very short window.",
    tag: "Field note 031",
    conditions: "Incoming tide · light swell · westerly wind",
    lesson: "Watch what moves before deciding where to move.",
  },
]

export const gear: Gear[] = [
  {
    name: "Travel rod 7'2\"",
    type: "Fast-action spinning",
    reason:
      "Compact enough for the trail, precise enough for tight river seams.",
    fieldNote: "Chosen when mobility matters more than maximum distance.",
  },
  {
    name: "2500 reel",
    type: "Sealed drag",
    reason:
      "A balanced all-water workhorse with a drag I can trust under pressure.",
    fieldNote: "Rinsed, checked, and logged after every saltwater session.",
  },
  {
    name: "Field sling",
    type: "Modular carry",
    reason:
      "Only the essentials, organised by depth and retrieve rather than lure colour.",
    fieldNote: "One waterproof notebook always earns its space.",
  },
  {
    name: "Layer system",
    type: "Weather protection",
    reason:
      "Quiet, packable protection that keeps long observation comfortable.",
    fieldNote: "The walk out dictates the kit as much as the forecast does.",
  },
]

export const tips: Tip[] = [
  {
    title: "Read the wind first",
    guidance:
      "Choose the bank after watching surface lanes, not before arriving.",
  },
  {
    title: "Find changing water",
    guidance:
      "Temperature, clarity, depth, and current edges concentrate opportunity.",
  },
  {
    title: "Change speed before lure",
    guidance:
      "Presentation often fails long before the pattern or profile does.",
  },
  {
    title: "Leave a useful log",
    guidance:
      "Record conditions, decisions, and mistakes—not only successful catches.",
  },
  {
    title: "Plan the return",
    guidance:
      "Save warm layers, water, light, and attention for the final kilometres.",
  },
]

export const collaborations: Collaboration[] = [
  {
    title: "Field testing",
    description:
      "Long-form equipment use in real weather, with clear context and honest limitations.",
    deliverables: "Field notes · stills · structured review",
  },
  {
    title: "Editorial stories",
    description:
      "Patient visual narratives about habitat, craft, travel, and responsible outdoor culture.",
    deliverables: "Essay · photo journal · short field film",
  },
  {
    title: "Small-group field days",
    description:
      "Practical sessions focused on reading water, preparing safely, and building repeatable decisions.",
    deliverables: "Workshop · route brief · take-home guide",
  },
]
