import { trapFocus } from "./focus-trap"

/**
 * Side the drawer's surface slides from. Purely a styling hint: the class
 * writes it to `data-orientation` on the root and never reads it back —
 * CSS decides what "opening from the right" actually looks like.
 */
export type DrawerOrientation = "top" | "bottom" | "left" | "right"

/**
 * Lifecycle state, mirrored onto the root as `data-state` so CSS can drive
 * every transition/keyframe. This is the ONLY visual contract between the
 * class and the stylesheet — the class sets no inline styles of its own.
 *
 * - `closed`  — resting, hidden (unmounted from the a11y tree via `hidden`).
 * - `open`    — fully visible and interactive.
 * - `closing` — still mounted, playing its exit animation; becomes `closed`
 *   only once that animation ends (or the fallback timeout fires).
 *
 * Entrance is `closed → open`; exit is `open → closing → closed`. Because a
 * CSS transition is symmetric, the exit is the entrance reversed for free,
 * while `[data-state="closing"]` stays available for a distinct exit.
 */
export type DrawerState = "closed" | "open" | "closing"

/** Events emitted over the drawer's lifecycle. */
export type DrawerEvent = "open" | "opened" | "close" | "closed"

export type DrawerEventHandler = (drawer: Drawer) => void

/** Either a live element or a selector resolved against `document`. */
type ElementRef = HTMLElement | string

export interface DrawerOptions {
  /** The drawer root (the dialog container). Required. */
  root: ElementRef
  /**
   * The animated surface inside the root. Defaults to the root itself.
   * Only matters when the root is a full-viewport layer and a child panel
   * is what actually slides — the exit wait listens on this element.
   */
  panel?: ElementRef
  /** Elements that toggle the drawer on click (selector or NodeList/array). */
  triggers?: string | Iterable<HTMLElement>
  /**
   * Backdrop element. `true` looks for `[data-drawer-backdrop]` inside the
   * root; a selector/element targets it explicitly; `false`/omitted means
   * no backdrop wiring. Clicking it closes when `closeOnBackdrop` is on.
   */
  backdrop?: ElementRef | boolean
  /** Styling hint written to `data-orientation`. Defaults to `"right"`. */
  orientation?: DrawerOrientation
  /** Close when the backdrop is clicked. Defaults to `true`. */
  closeOnBackdrop?: boolean
  /** Close when Escape is pressed. Defaults to `true`. */
  closeOnEscape?: boolean
  /** Keep Tab focus inside the drawer while open. Defaults to `true`. */
  trapFocus?: boolean
  /** Lock body scroll while open (with scrollbar compensation). Defaults to `true`. */
  lockScroll?: boolean
  /** Return focus to the opener on close. Defaults to `true`. */
  restoreFocus?: boolean
  /**
   * Element focused on open. Defaults to the first `[data-drawer-autofocus]`,
   * else the first focusable descendant, else the root itself.
   */
  initialFocus?: ElementRef
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function resolveElement(
  ref: ElementRef | undefined,
  context: ParentNode = document,
): HTMLElement | null {
  if (!ref) return null
  if (typeof ref === "string") return context.querySelector<HTMLElement>(ref)
  return ref
}

/** Largest transition/animation time (ms) declared on `el`, delays included. */
function readMotionDuration(el: HTMLElement): number {
  const style = getComputedStyle(el)
  const toMs = (value: string): number => {
    const seconds = value.trim().endsWith("ms")
    const n = parseFloat(value)
    return Number.isFinite(n) ? (seconds ? n : n * 1000) : 0
  }
  const pairs = (durations: string, delays: string): number => {
    const d = durations.split(",")
    const l = delays.split(",")
    return d.reduce((max: number, value: string, index: number) => {
      const total = toMs(value) + toMs(l[index] ?? l[0] ?? "0s")
      return Math.max(max, total)
    }, 0)
  }
  return Math.max(
    pairs(style.transitionDuration, style.transitionDelay),
    pairs(style.animationDuration, style.animationDelay),
  )
}

/**
 * Accessible, style-decoupled drawer / off-canvas panel.
 *
 * The class owns only *behavior and state* — open/close lifecycle, focus,
 * scroll lock, Escape/backdrop, and a state machine surfaced as `data-state`.
 * Every pixel of motion and layout is the stylesheet's job, keyed off
 * `data-state` and `data-orientation`. See {@link DrawerState}.
 *
 * @example
 * ```ts
 * const drawer = new Drawer({
 *   root: "#options-panel",
 *   triggers: "[data-open-options]",
 *   backdrop: true,
 * }).init()
 * drawer.on("closed", () => console.log("fully closed"))
 * ```
 */
export class Drawer {
  private readonly rootEl: HTMLElement
  private readonly panelEl: HTMLElement
  private backdropEl: HTMLElement | null = null
  private triggerEls: HTMLElement[] = []
  private closeEls: HTMLElement[] = []

  private readonly orientation: DrawerOrientation
  private readonly closeOnBackdrop: boolean
  private readonly closeOnEscape: boolean
  private readonly shouldTrapFocus: boolean
  private readonly lockScroll: boolean
  private readonly restoreFocus: boolean
  private readonly initialFocusRef?: ElementRef

  private state: DrawerState = "closed"
  private openerEl: HTMLElement | null = null
  private releaseFocusTrap: (() => void) | null = null
  private previousBodyOverflow = ""
  private previousBodyPaddingRight = ""
  private exitTimer: number | null = null

  private readonly listeners = new Map<DrawerEvent, Set<DrawerEventHandler>>()

  private readonly onTriggerClick = (): void => {
    this.toggle()
  }
  private readonly onCloseClick = (): void => {
    this.close()
  }
  private readonly onBackdropClick = (event: MouseEvent): void => {
    if (this.closeOnBackdrop && event.target === this.backdropEl) this.close()
  }
  private readonly onDocumentKeydown = (event: KeyboardEvent): void => {
    if (this.closeOnEscape && event.key === "Escape") {
      event.stopPropagation()
      this.close()
    }
  }

  constructor(options: DrawerOptions) {
    const root = resolveElement(options.root)
    if (!root) {
      throw new Error(`Drawer: root not found (${String(options.root)}).`)
    }
    this.rootEl = root
    this.panelEl = resolveElement(options.panel, root) ?? root

    this.orientation = options.orientation ?? "right"
    this.closeOnBackdrop = options.closeOnBackdrop ?? true
    this.closeOnEscape = options.closeOnEscape ?? true
    this.shouldTrapFocus = options.trapFocus ?? true
    this.lockScroll = options.lockScroll ?? true
    this.restoreFocus = options.restoreFocus ?? true
    this.initialFocusRef = options.initialFocus

    if (options.backdrop === true) {
      this.backdropEl = root.querySelector<HTMLElement>(
        "[data-drawer-backdrop]",
      )
    } else if (options.backdrop) {
      this.backdropEl = resolveElement(options.backdrop, root)
    }

    if (typeof options.triggers === "string") {
      this.triggerEls = Array.from(
        document.querySelectorAll<HTMLElement>(options.triggers),
      )
    } else if (options.triggers) {
      this.triggerEls = Array.from(options.triggers)
    }
    this.closeEls = Array.from(
      root.querySelectorAll<HTMLElement>("[data-drawer-close]"),
    )
  }

  /** Wire up DOM listeners and reflect the initial resting state. Chainable. */
  init(): this {
    this.rootEl.dataset.orientation = this.orientation
    this.applyState("closed")
    this.rootEl.hidden = true

    this.triggerEls.forEach((el: HTMLElement) => {
      el.setAttribute("aria-expanded", "false")
      el.addEventListener("click", this.onTriggerClick)
    })
    this.closeEls.forEach((el: HTMLElement) =>
      el.addEventListener("click", this.onCloseClick),
    )
    this.backdropEl?.addEventListener("click", this.onBackdropClick)
    return this
  }

  /** Current lifecycle state. */
  get currentState(): DrawerState {
    return this.state
  }

  get isOpen(): boolean {
    return this.state === "open"
  }

  /** Subscribe to a lifecycle event. Returns an unsubscribe function. */
  on(event: DrawerEvent, handler: DrawerEventHandler): () => void {
    const set = this.listeners.get(event) ?? new Set<DrawerEventHandler>()
    set.add(handler)
    this.listeners.set(event, set)
    return () => this.off(event, handler)
  }

  off(event: DrawerEvent, handler: DrawerEventHandler): void {
    this.listeners.get(event)?.delete(handler)
  }

  private emit(event: DrawerEvent): void {
    this.listeners
      .get(event)
      ?.forEach((handler: DrawerEventHandler) => handler(this))
  }

  private applyState(state: DrawerState): void {
    this.state = state
    this.rootEl.dataset.state = state
  }

  open(): void {
    if (this.state === "open") return
    // Interrupt an in-flight exit and reopen cleanly.
    if (this.exitTimer !== null) {
      clearTimeout(this.exitTimer)
      this.exitTimer = null
    }

    this.openerEl =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    this.emit("open")

    if (this.lockScroll) this.applyScrollLock()
    this.rootEl.hidden = false

    // Paint the resting `closed` frame, then flip to `open` so the CSS
    // transition has two states to interpolate between.
    void this.rootEl.offsetWidth
    this.applyState("open")

    this.focusInitial()
    this.triggerEls.forEach((el: HTMLElement) =>
      el.setAttribute("aria-expanded", "true"),
    )
    document.addEventListener("keydown", this.onDocumentKeydown)
    if (this.shouldTrapFocus) this.releaseFocusTrap = trapFocus(this.rootEl)

    this.whenMotionEnds(() => {
      if (this.state === "open") this.emit("opened")
    })
  }

  close(): void {
    if (this.state !== "open") return
    this.emit("close")
    this.applyState("closing")

    this.releaseFocusTrap?.()
    this.releaseFocusTrap = null
    document.removeEventListener("keydown", this.onDocumentKeydown)
    this.triggerEls.forEach((el: HTMLElement) =>
      el.setAttribute("aria-expanded", "false"),
    )

    this.whenMotionEnds(() => this.finalizeClose())
  }

  toggle(): void {
    if (this.state === "open") this.close()
    else if (this.state === "closed") this.open()
  }

  private finalizeClose(): void {
    if (this.state !== "closing") return
    this.applyState("closed")
    this.rootEl.hidden = true
    if (this.lockScroll) this.releaseScrollLock()
    if (this.restoreFocus && this.openerEl?.isConnected) this.openerEl.focus()
    this.openerEl = null
    this.emit("closed")
  }

  /**
   * Run `done` once the panel's current transition/animation ends, with a
   * duration-derived fallback so a missing (or reduced-motion) animation
   * never leaves the drawer stuck mid-state.
   */
  private whenMotionEnds(done: () => void): void {
    const duration = readMotionDuration(this.panelEl)
    if (duration <= 0) {
      requestAnimationFrame(done)
      return
    }

    let settled = false
    const finish = (): void => {
      if (settled) return
      settled = true
      this.panelEl.removeEventListener("transitionend", onEnd)
      this.panelEl.removeEventListener("animationend", onEnd)
      if (this.exitTimer !== null) {
        clearTimeout(this.exitTimer)
        this.exitTimer = null
      }
      done()
    }
    const onEnd = (event: TransitionEvent | AnimationEvent): void => {
      if (event.target === this.panelEl) finish()
    }
    this.panelEl.addEventListener("transitionend", onEnd)
    this.panelEl.addEventListener("animationend", onEnd)
    this.exitTimer = window.setTimeout(finish, duration + 50)
  }

  private focusInitial(): void {
    const target =
      resolveElement(this.initialFocusRef, this.rootEl) ??
      this.rootEl.querySelector<HTMLElement>("[data-drawer-autofocus]") ??
      this.rootEl.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ??
      this.rootEl
    target.focus()
  }

  private applyScrollLock(): void {
    const { body } = document
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    this.previousBodyOverflow = body.style.overflow
    this.previousBodyPaddingRight = body.style.paddingRight
    body.style.overflow = "hidden"
    if (scrollbarWidth > 0) {
      const current = parseFloat(getComputedStyle(body).paddingRight) || 0
      body.style.paddingRight = `${current + scrollbarWidth}px`
    }
  }

  private releaseScrollLock(): void {
    document.body.style.overflow = this.previousBodyOverflow
    document.body.style.paddingRight = this.previousBodyPaddingRight
  }

  /** Remove every listener and side effect; safe to call once. */
  destroy(): void {
    if (this.state !== "closed") {
      this.releaseFocusTrap?.()
      document.removeEventListener("keydown", this.onDocumentKeydown)
      if (this.lockScroll) this.releaseScrollLock()
    }
    if (this.exitTimer !== null) clearTimeout(this.exitTimer)

    this.triggerEls.forEach((el: HTMLElement) =>
      el.removeEventListener("click", this.onTriggerClick),
    )
    this.closeEls.forEach((el: HTMLElement) =>
      el.removeEventListener("click", this.onCloseClick),
    )
    this.backdropEl?.removeEventListener("click", this.onBackdropClick)
    this.listeners.clear()
  }
}
