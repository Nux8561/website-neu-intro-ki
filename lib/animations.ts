/**
 * Attio Animation Configurations
 * Basierend auf Analyse der Attio HTML-Datei (1469 SVGs, 622x duration-300)
 * 
 * Diese Konfigurationen replizieren das exakte "Look & Feel" von Attio
 * 
 * Analyse-Ergebnisse:
 * - Häufigste Duration: 300ms (622x)
 * - Häufigste Easing: ease-out (620x)
 * - Timing Function: cubic-bezier(0.32, 0.72, 0, 1) oder cubic-bezier(0.33, 0.00, 0.00, 1.00)
 * - Keyframes: fadeIn, fadeOut, slideFromBottom, slideToBottom, etc.
 */

// Framer Motion Spring-Physics (Attio-Standard)
// Basierend auf dem "Snappy"-Gefühl der Interaktionen
export const attioTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
  mass: 1,
}

// Alternative: Für schnellere, weniger gedämpfte Animationen
export const attioTransitionFast = {
  type: "spring" as const,
  stiffness: 500,
  damping: 25,
  mass: 1,
}

// Für sehr subtile, sanfte Animationen
export const attioTransitionSmooth = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
  mass: 1,
}

// Hover-Effekte
export const attioHover = {
  scale: 1.01,
  transition: attioTransition,
}

// Tap/Click-Effekte
export const attioTap = {
  scale: 0.98,
  transition: attioTransition,
}

// Fade-in Animation
export const attioFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: attioTransition,
}

// Slide-up Animation
export const attioSlideUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: attioTransition,
}

// Stagger Container (für Listen/Grids)
export const attioStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

// Stagger Item
export const attioStaggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: attioTransition,
  },
}

// Border Hover (für Cards/Kacheln)
export const attioBorderHover = {
  borderColor: "rgba(0, 0, 0, 0.15)",
  transition: attioTransition,
}

// Shadow Hover (für Cards)
export const attioShadowHover = {
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  transition: attioTransition,
}

// Kombinierter Hover-Effekt (wie Attio Cards)
export const attioCardHover = {
  backgroundColor: "rgba(249, 250, 251, 0.5)", // bg-gray-50/50
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  transition: attioTransition,
}

