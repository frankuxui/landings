// Opt-in readiness signal for the preview shell.
//
// A landing that needs to delay its reveal beyond the default detection
// (iframe `load` + `document.fonts.ready`) can import this module and
// call `signalReady()` after its own initialisation finishes.
//
// Usage inside a landing script:
//
//   import { signalReady } from "../../../lib/landing-ready"
//
//   // ... initialise GSAP, Swiper, etc. ...
//   signalReady()
//
// If you only need fonts + DOM, import the module as a side effect and
// it will auto-signal after `document.fonts.ready` + one animation frame:
//
//   import "../../../lib/landing-ready"

import type { PreviewReadyMessage } from "../types/preview"

function isInsidePreviewIframe(): boolean {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

export function signalReady(): void {
  if (!isInsidePreviewIframe()) return

  const message: PreviewReadyMessage = { type: "landing-ready" }

  try {
    window.parent.postMessage(message, window.location.origin)
  } catch {
    // Cross-origin or sandboxed — nothing to do.
  }
}

async function autoReady(): Promise<void> {
  try {
    await document.fonts.ready
  } catch {
    // fonts API unavailable — proceed.
  }

  await new Promise<void>((resolve: () => void) => {
    requestAnimationFrame(() => resolve())
  })

  signalReady()
}

if (isInsidePreviewIframe()) {
  void autoReady()
}
