import type { Testimonial } from "../types"

// Identified by role only, never a full name, per the platform's rule
// against plausible fictional personal data.
export const testimonials: Testimonial[] = [
  {
    quote:
      "The system was sized for our actual consumption, not a generic average. The bill dropped from the very first billing cycle.",
    role: "Residential customer",
  },
  {
    quote:
      "The follow-up after commissioning lets us catch any performance drop before it ever shows up on the bill.",
    role: "Operations manager",
  },
  {
    quote:
      "We managed to cover a good part of the store's daytime consumption without changing opening hours during the work.",
    role: "Local business",
  },
  {
    quote:
      "The initial study was the most detailed we received among several proposals for the plant. That made the difference.",
    role: "Industrial project",
  },
  {
    quote:
      "Splitting generation across the building's different entrances turned out clearer than we expected.",
    role: "Energy community",
  },
]
