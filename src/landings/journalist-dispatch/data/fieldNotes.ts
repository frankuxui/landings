import { fieldNoteImages } from "./images"
import type { FieldNote } from "../types"

export const fieldNotes: FieldNote[] = [
  {
    date: "Aug 03",
    city: "Border town",
    country: "Coordinates withheld",
    note: "Fixer cancels twice before the meeting holds. Third time, he brings his brother instead. Neither wants to be recorded.",
  },
  {
    date: "Jul 22",
    city: "Regional capital",
    country: "Coordinates on file",
    note: "Waited four hours outside the ministry for a five-minute non-answer. Wrote the whole thing standing up.",
    image: fieldNoteImages.typewriter,
  },
  {
    date: "Jul 09",
    city: "Coastal checkpoint",
    country: "Coordinates withheld",
    note: '"Write down that we asked for help in March," she said. "Write down the date." I did.',
  },
  {
    date: "Jun 28",
    city: "Northern transit corridor",
    country: "Coordinates on file",
    note: "Notebook seven of the trip. Running low on pages before I'm running low on story.",
    image: fieldNoteImages.notebook,
  },
  {
    date: "Jun 14",
    city: "Rural outpost",
    country: "Coordinates withheld",
    note: "No signal for three days. Filed everything from memory once the bus reached a tower.",
  },
]
