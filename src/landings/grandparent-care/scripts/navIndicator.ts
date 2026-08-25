// Grandparent Care — GSAP scroll-aware navigation indicator.
//
// A single shared underline moves beneath the currently active in-page nav
// link as the user scrolls or clicks. Links stay real <a href="#section">
// anchors; the indicator is purely decorative (aria-hidden, see Header.astro)
// and the active link's accessible state is kept in sync via aria-current.
//
// Scoped to the `lg` breakpoint (1024px, matching Tailwind's `lg:flex` where
// the desktop nav row — and the indicator itself — becomes visible). Below
// that the full-screen mobile panel takes over and there is no shared
// underline to animate, so only aria-current tracking runs there.
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector<HTMLElement>("[data-scroll-nav]")
const indicator = document.querySelector<HTMLElement>("[data-nav-indicator]")
const links = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")

interface NavSection {
  link: HTMLAnchorElement
  section: HTMLElement
}

if (container && indicator && links.length > 0) {
  const sections: NavSection[] = Array.from(links)
    .map((link: HTMLAnchorElement): NavSection | null => {
      const id = link.getAttribute("href")?.slice(1)
      const section = id ? document.getElementById(id) : null
      return section ? { link, section } : null
    })
    .filter((entry: NavSection | null): entry is NavSection => entry !== null)

  let activeLink: HTMLAnchorElement | null = null

  const setActiveLink = (link: HTMLAnchorElement): void => {
    if (activeLink === link) return
    activeLink = link
    links.forEach((candidate: HTMLAnchorElement) => {
      if (candidate === link) {
        candidate.setAttribute("aria-current", "location")
      } else {
        candidate.removeAttribute("aria-current")
      }
    })
  }

  const findActiveSection = (): NavSection | undefined =>
    sections.find(({ section }: NavSection) => {
      const rect = section.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      return rect.top <= viewportCenter && rect.bottom >= viewportCenter
    })

  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktopNav: "(min-width: 1024px)",
      prefersReducedMotion: "(prefers-reduced-motion: reduce)",
    },
    (context: gsap.Context) => {
      const { isDesktopNav, prefersReducedMotion } = context.conditions as {
        isDesktopNav: boolean
        prefersReducedMotion: boolean
      }

      if (!isDesktopNav) {
        // Mobile/tablet: the full-screen panel owns navigation and the
        // underline stays hidden. Only aria-current tracking is needed
        // here — no indicator geometry to compute or animate.
        const scrollTriggers = sections.map(({ link, section }: NavSection) =>
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onToggle: (self: ScrollTrigger) => {
              if (self.isActive) setActiveLink(link)
            },
          }),
        )

        return () => {
          scrollTriggers.forEach((trigger: ScrollTrigger) => trigger.kill())
        }
      }

      const moveIndicator = (
        link: HTMLAnchorElement,
        animate: boolean,
      ): void => {
        const containerRect = container.getBoundingClientRect()
        const linkRect = link.getBoundingClientRect()
        const x = linkRect.left - containerRect.left
        const width = linkRect.width

        if (animate && !prefersReducedMotion) {
          gsap.to(indicator, {
            x,
            width,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          })
        } else {
          gsap.set(indicator, { x, width })
        }
      }

      const activateLink = (
        link: HTMLAnchorElement,
        animate: boolean,
      ): void => {
        setActiveLink(link)
        moveIndicator(link, animate)
      }

      const scrollTriggers = sections.map(({ link, section }: NavSection) =>
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self: ScrollTrigger) => {
            if (self.isActive) activateLink(link, true)
          },
        }),
      )

      const initialSection = findActiveSection() ?? sections[0]
      indicator.classList.remove("opacity-0")
      activateLink(initialSection.link, false)

      const handleLinkClick = (link: HTMLAnchorElement) => (): void => {
        activateLink(link, true)
      }
      const clickHandlers = sections.map(({ link }: NavSection) => {
        const handler = handleLinkClick(link)
        link.addEventListener("click", handler)
        return { link, handler }
      })

      const handleRefresh = (): void => {
        if (activeLink) moveIndicator(activeLink, false)
      }
      ScrollTrigger.addEventListener("refresh", handleRefresh)

      return () => {
        scrollTriggers.forEach((trigger: ScrollTrigger) => trigger.kill())
        ScrollTrigger.removeEventListener("refresh", handleRefresh)
        clickHandlers.forEach(
          ({
            link,
            handler,
          }: {
            link: HTMLAnchorElement
            handler: () => void
          }) => {
            link.removeEventListener("click", handler)
          },
        )
        indicator.classList.add("opacity-0")
      }
    },
  )
}
