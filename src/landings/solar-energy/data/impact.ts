import type { PrimaryImpactStat, SecondaryImpactStat } from "../types"

export const primaryImpactStat: PrimaryImpactStat = {
  value: "48",
  unit: "MW installed",
  description:
    "Cumulative photovoltaic capacity across the residential, commercial, and industrial projects Solar Energy has delivered to date.",
}

export const secondaryImpactStats: SecondaryImpactStat[] = [
  { value: "1200", label: "Completed installations" },
  { value: "310", label: "Companies and industrial sites served" },
  { value: "4800", label: "Homes with active self-consumption" },
]
