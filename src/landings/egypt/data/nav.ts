// Egypt — navigation links for header and mobile menu.

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Timeline", href: "#timeline" },
  { label: "Architecture", href: "#architecture" },
  { label: "Pharaohs", href: "#pharaohs" },
  { label: "Gods", href: "#gods" },
  { label: "Afterlife", href: "#afterlife" },
  { label: "Treasures", href: "#treasures" },
  { label: "Hieroglyphs", href: "#hieroglyphs" },
]
