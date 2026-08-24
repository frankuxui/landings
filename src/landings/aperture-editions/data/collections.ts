// One flagship work per curated category, shown as the asymmetric
// "Collections" grid. Derived from the shared `works` pool (see
// data/works.ts) rather than duplicating metadata.
import { getWork } from "./works"
import type { Work } from "../types"

export const collectionWorks: Work[] = [
  getWork("arc-facade"), // Architecture
  getWork("forest-veil"), // Nature
  getWork("street-pulse"), // Street
  getWork("quiet-gaze"), // Portrait
  getWork("dune-passage"), // Travel
  getWork("plane-and-line"), // Minimal
  getWork("tidal-hour"), // Black & White
]
