import type { PrimaryImpactStat, SecondaryImpactStat } from "../types"

export const primaryImpactStat: PrimaryImpactStat = {
  value: "48",
  unit: "MW instalados",
  description:
    "Capacidad fotovoltaica acumulada en los proyectos residenciales, comerciales e industriales desarrollados por Heliogrid hasta la fecha.",
}

export const secondaryImpactStats: SecondaryImpactStat[] = [
  { value: "1200", label: "Instalaciones completadas" },
  { value: "310", label: "Empresas e industrias atendidas" },
  { value: "4800", label: "Hogares con autoconsumo activo" },
]
