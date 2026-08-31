import type { Theme } from "./theme"
import type { PaletteOption } from "./palette"

/** Canonical device viewports offered by the preview device switcher. */
export const DEVICES = ["mobile", "tablet", "desktop"] as const

export type Device = (typeof DEVICES)[number]

/** Narrows an untyped string (e.g. a DOM `dataset` value) to a `Device`. */
export function isDevice(value: string | undefined): value is Device {
  return !!value && (DEVICES as readonly string[]).includes(value)
}

/** A single entry in the device switcher's button list. */
export interface DeviceOption {
  id: Device
  label: string
}

/**
 * A width range (px) used to classify the preview viewport's current width
 * into a `Device` bucket. `maxWidth: null` means "no upper bound" (the
 * widest bucket).
 */
export interface DeviceBreakpoint {
  minWidth: number
  maxWidth: number | null
}

/**
 * Single source of truth for device breakpoints — shared by the preset
 * device buttons and the manual resize handle so both paths always agree
 * on what counts as Mobile/Tablet/Desktop. Never duplicate these ranges
 * elsewhere.
 */
export const DEVICE_BREAKPOINTS: Record<Device, DeviceBreakpoint> = {
  mobile: { minWidth: 0, maxWidth: 767 },
  tablet: { minWidth: 768, maxWidth: 1023 },
  desktop: { minWidth: 1024, maxWidth: null },
}

/** Classifies a viewport width (px) into the `Device` bucket it falls into. */
export function classifyDevice(width: number): Device {
  const match = DEVICES.find((device: Device) => {
    const breakpoint = DEVICE_BREAKPOINTS[device]
    return (
      width >= breakpoint.minWidth &&
      (breakpoint.maxWidth === null || width <= breakpoint.maxWidth)
    )
  })
  return match ?? "desktop"
}

/** Preset width (px) applied when a device preset button is clicked. */
export const DEVICE_PRESET_WIDTH: Record<Device, number> = {
  mobile: 390,
  tablet: 834,
  desktop: 1920,
}

/** Clamp range (px) for the manual resize handle. */
export const VIEWPORT_MIN_WIDTH = 320
export const VIEWPORT_MAX_WIDTH = 1920

/** Pixel step applied per keyboard arrow press on the resize handle. */
export const VIEWPORT_RESIZE_STEP = 24
/** Pixel step applied per keyboard arrow press while holding Shift. */
export const VIEWPORT_RESIZE_STEP_LARGE = 120

/** Shared prop shape for the preview toolbar and its iframe shell, both keyed by the same landing. */
export interface LandingPreviewProps {
  name: string
  slug: string
  /**
   * This landing's selectable color palettes (empty/omitted when it only
   * offers the grayscale default). Optional so components that don't
   * render a palette picker (e.g. `OptionsPanel`) aren't forced to thread
   * it through.
   */
  palettes?: PaletteOption[]
}

/**
 * `detail` payload shared by the device-related DOM CustomEvents.
 * `preview:device` is a command ("apply this preset"); `preview:device-change`
 * is a notification ("the viewport now measures as this device") — both
 * carry the same shape.
 */
export interface PreviewDeviceEventDetail {
  device: Device
}

/** `detail` payload of the `preview:theme` DOM CustomEvent. */
export interface PreviewThemeEventDetail {
  theme: Theme
}

/** `detail` payload of the `preview:palette` DOM CustomEvent (command: apply this palette id). */
export interface PreviewPaletteEventDetail {
  palette: string
}

/** `detail` payload of the `preview:toolbar-visibility` DOM CustomEvent. */
export interface PreviewToolbarVisibilityEventDetail {
  visible: boolean
}

/**
 * Cross-document `postMessage` contract sent from the platform's preview
 * shell into a landing's own iframe document to switch its theme.
 */
export interface PreviewThemeMessage {
  type: "preview:theme"
  theme: Theme
}

/**
 * Cross-document `postMessage` command sent from the platform's preview
 * shell into a landing's own iframe document to switch its color palette.
 */
export interface PreviewPaletteMessage {
  type: "preview:palette"
  palette: string
}

/**
 * Cross-document `postMessage` notification sent FROM a landing's own
 * iframe document back to the platform's preview shell whenever the
 * landing applies a palette (whether from a `PreviewPaletteMessage`
 * command or from its own persisted localStorage restore on load) — lets
 * the toolbar's palette selector mirror the landing's real current state.
 */
export interface PreviewPaletteSyncMessage {
  type: "preview:palette-sync"
  palette: string
}

/**
 * Cross-document `postMessage` notification sent FROM a landing's own
 * iframe document to the platform's preview shell when the landing
 * considers itself fully ready (DOM, fonts, scripts, animations).
 *
 * This is an opt-in enhancement: landings that import the
 * `src/lib/landing-ready` utility emit this signal after their own
 * comprehensive readiness checks. When the shell receives it, it
 * reveals the iframe immediately. Landings that don't use it fall
 * back to the shell's built-in detection (iframe `load` event +
 * `document.fonts.ready`).
 */
export interface PreviewReadyMessage {
  type: "landing-ready"
}

export function isPreviewReadyMessage(
  value: unknown,
): value is PreviewReadyMessage {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as Record<string, unknown>).type === "landing-ready"
  )
}

declare global {
  interface DocumentEventMap {
    /** Command: apply this device's preset width to the viewport. */
    "preview:device": CustomEvent<PreviewDeviceEventDetail>
    /**
     * Notification: the viewport's actual measured width now classifies as
     * this device. Fired after every resize — preset click, manual drag, or
     * keyboard resize — so any listener reflects the real current size
     * rather than assuming how it was reached.
     */
    "preview:device-change": CustomEvent<PreviewDeviceEventDetail>
    "preview:theme": CustomEvent<PreviewThemeEventDetail>
    /** Command: apply this palette id to the previewed landing. */
    "preview:palette": CustomEvent<PreviewPaletteEventDetail>
    /** Show or hide the preview toolbar. */
    "preview:toolbar-visibility": CustomEvent<PreviewToolbarVisibilityEventDetail>
    /** Request to open the options panel (aside). */
    "preview:options-panel": CustomEvent<undefined>
  }
}
