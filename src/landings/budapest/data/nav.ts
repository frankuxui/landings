// Budapest — navigation links for header and mobile menu.

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "The River", href: "#the-river" },
  { label: "Bridges", href: "#bridges" },
  { label: "Monuments", href: "#monuments" },
  { label: "1873", href: "#unification" },
  { label: "Seasons", href: "#seasons" },
  { label: "Thermal", href: "#thermal" },
  { label: "Stories", href: "#stories" },
]
