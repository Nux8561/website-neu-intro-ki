"use client"

import * as React from "react"
import { Layer0DeepBackground } from "./hero-layers/layer-0-deep-background"
import { Layer1ComicScene } from "./hero-layers/layer-1-comic-scene"
import { Layer2FocusContent } from "./hero-layers/layer-2-focus-content"
import { Layer3Foreground } from "./hero-layers/layer-3-foreground"

/**
 * Hero Layered - 4-Layer Hero Section
 * 
 * Kombiniert alle 4 visuellen Ebenen zu einer immersiven Hero-Section:
 * - Layer 0: Deep Background (Mesh Gradients, Noise, Partikel)
 * - Layer 1: Comic Scene (Grid, Floating UI-Schnipsel, Code-Blöcke)
 * - Layer 2: Focus Content (Hero-Text, Buttons, Metrics, Bento-Preview)
 * - Layer 3: Foreground (Cursor-Follower, Magnetic Icons)
 * 
 * Performance-Optimierungen:
 * - will-change: transform für GPU-Beschleunigung
 * - transform3d für Hardware-Beschleunigung
 * - Lazy Loading für Layer 3 (nur bei Desktop)
 */
export function HeroLayered() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white border-b border-slate-200/60">
      {/* Layer 0: Deep Background (Z: -100 bis -50) */}
      <Layer0DeepBackground />

      {/* Layer 1: Comic Scene (Z: -50 bis 0) */}
      <Layer1ComicScene />

      {/* Layer 2: Focus Content (Z: 0 bis 50) */}
      <Layer2FocusContent />

      {/* Layer 3: Foreground (Z: 50 bis 100) - Nur bei Desktop */}
      <Layer3Foreground />
    </section>
  )
}

