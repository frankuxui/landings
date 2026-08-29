// Terroir — navigation links for header and mobile menu.

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Regiones", href: "#regiones" },
  { label: "Vendimia", href: "#vendimia" },
  { label: "Bodega", href: "#bodega" },
  { label: "Maridaje", href: "#maridaje" },
  { label: "Historias", href: "#historias" },
]
