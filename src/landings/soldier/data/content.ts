export type NavItem = {
  id: string
  label: string
  href: string
}

export type Phase = {
  number: string
  title: string
  label: string
  progress: string
  copy: string
}

export type Module = {
  number: string
  title: string
  code: string
  copy: string
}

export type Story = {
  number: string
  title: string
  copy: string
}

export type ArchiveItem = {
  number: string
  title: string
  meta: string
  imageKey: string
}

export type TimelineItem = {
  year: string
  title: string
  place: string
  copy: string
}

export type Requirement = {
  title: string
  copy: string
}

export const navItems: NavItem[] = [
  { id: "01", label: "Initiation", href: "#initiation" },
  { id: "02", label: "Training", href: "#training" },
  { id: "03", label: "Field", href: "#field" },
  { id: "04", label: "Equipment", href: "#loadout" },
  { id: "05", label: "Operations", href: "#archive" },
  { id: "06", label: "Unit", href: "#brotherhood" },
  { id: "07", label: "Enlist", href: "#recruitment" },
]

export const phases: Phase[] = [
  {
    number: "01",
    title: "BODY",
    label: "Physical load",
    progress: "20%",
    copy: "Force is built slowly: repetition, impact, recovery, breath, and the refusal to stop at first resistance.",
  },
  {
    number: "02",
    title: "MIND",
    label: "Cognitive control",
    progress: "40%",
    copy: "The nervous system learns to stay useful while pressure narrows the world into noise and incomplete information.",
  },
  {
    number: "03",
    title: "INSTINCT",
    label: "Reaction window",
    progress: "60%",
    copy: "Training becomes response. Movement arrives before doubt, and discipline holds the line after adrenaline spikes.",
  },
  {
    number: "04",
    title: "TEAM",
    label: "Unit sync",
    progress: "80%",
    copy: "No one advances alone. Trust becomes a system: shared timing, shared risk, shared responsibility.",
  },
  {
    number: "05",
    title: "LEAD",
    label: "Command burden",
    progress: "100%",
    copy: "A soldier becomes ready when calm can be transmitted to others under pressure.",
  },
]

export const modules: Module[] = [
  {
    number: "01",
    title: "Survival",
    code: "SUSTAIN / 18H",
    copy: "Shelter, water, recovery cycles, and decision-making after fatigue has already arrived.",
  },
  {
    number: "02",
    title: "Recon",
    code: "OBSERVE / SILENT",
    copy: "Reading distance, cover, movement, light, and absence without turning the scene into spectacle.",
  },
  {
    number: "03",
    title: "Navigation",
    code: "ROUTE / BLIND",
    copy: "Map memory, landmarks, dead reckoning, and calm correction when the route stops agreeing with the plan.",
  },
  {
    number: "04",
    title: "Communication",
    code: "COMMS / LOW",
    copy: "Minimal signals, clear hierarchy, and the discipline to say only what the unit needs.",
  },
  {
    number: "05",
    title: "Medical",
    code: "CARE / FIRST",
    copy: "Stabilize, protect, and move. A module about responsibility, not heroics.",
  },
  {
    number: "06",
    title: "Mobility",
    code: "MOVE / HEAVY",
    copy: "Load, terrain, timing, and controlled momentum across broken surfaces.",
  },
]

export const stories: Story[] = [
  {
    number: "01",
    title: "The one who counts the last step",
    copy: "A unit survives because someone notices the smallest gaps: loose straps, quiet panic, missed water, the person falling behind.",
  },
  {
    number: "02",
    title: "The calm voice in bad weather",
    copy: "Leadership is not volume. It is the ability to make the next move feel possible when the horizon disappears.",
  },
  {
    number: "03",
    title: "The burden shared without ceremony",
    copy: "Brotherhood is practical. Someone takes weight from your pack, someone watches the rear, someone remembers why you started.",
  },
  {
    number: "04",
    title: "The lesson after failure",
    copy: "The training archive keeps mistakes on purpose. Read them, repeat the drill, return sharper.",
  },
]

export const archiveItems: ArchiveItem[] = [
  { number: "01", title: "DUSTLINE", meta: "FIELD / 46 C", imageKey: "patrol" },
  {
    number: "02",
    title: "NIGHTFALL",
    meta: "VISIBILITY / LOW",
    imageKey: "operator",
  },
  {
    number: "03",
    title: "IRON FIELD",
    meta: "MOVE / HEAVY",
    imageKey: "loadout",
  },
  {
    number: "04",
    title: "SILENT RIDGE",
    meta: "TEAM / FOUR",
    imageKey: "forest",
  },
  {
    number: "05",
    title: "BLACK HORIZON",
    meta: "AIR / TRANSIT",
    imageKey: "helicopter",
  },
]

export const timelineItems: TimelineItem[] = [
  {
    year: "Y-01",
    title: "DUSTLINE",
    place: "Sector Ash",
    copy: "A fictional endurance brief across heat, distance, silence, and declining certainty.",
  },
  {
    year: "Y-02",
    title: "NIGHTFALL",
    place: "Range Zero",
    copy: "The unit studies fear in darkness until darkness becomes another surface to read.",
  },
  {
    year: "Y-03",
    title: "IRON FIELD",
    place: "Grid 41",
    copy: "Heavy movement, simulated failure, and the moment a plan becomes an improvisation.",
  },
  {
    year: "Y-04",
    title: "SILENT RIDGE",
    place: "North Trace",
    copy: "A quiet archive entry about restraint, patience, and collective timing.",
  },
  {
    year: "Y-05",
    title: "BLACK HORIZON",
    place: "No Map",
    copy: "The final fictional exercise: no glory, no audience, only preparation meeting pressure.",
  },
]

export const requirements: Requirement[] = [
  {
    title: "Physical",
    copy: "Arrive ready to train under fatigue, carry weight safely, recover deliberately, and respect limits before extending them.",
  },
  {
    title: "Mindset",
    copy: "Hold focus under noise, accept correction, and stay useful when certainty is unavailable.",
  },
  {
    title: "Training",
    copy: "Commit to repetition. The experience is built around preparation, not instant transformation.",
  },
  {
    title: "Teamwork",
    copy: "Move with others. Listen, signal clearly, and protect the rhythm of the group.",
  },
  {
    title: "Commitment",
    copy: "Return after difficulty. Readiness is measured in what continues after motivation leaves.",
  },
]
