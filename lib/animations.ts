/**
 * Enterprise Animation Configurations
 * "Structured Magic" - Strict Enterprise Spring Physics
 * 
 * Based on "Strategischer Forschungsbericht: Intro KI"
 * Mission: "Protect & Polish" - Retain animations but enforce Enterprise precision
 */

// ENTERPRISE_SPRING: Global standard for all interactive elements
// Strict enforcement: No bouncy overshoot, precise snap to target
export const ENTERPRISE_SPRING = {
  type: "spring" as const,
  stiffness: 400, // Snap to target (precise)
  damping: 17,    // No bouncy overshoot (controlled)
  mass: 0.8,      // Lightweight for responsiveness
} as const

// Legacy aliases (for backward compatibility, but prefer ENTERPRISE_SPRING)
export const attioTransition = ENTERPRISE_SPRING

// Snappy Spring Physics (Vercel/Attio Style)
// Hohe Spannung, gute Dämpfung, leicht = reaktionsfreudig
export const snappySpring = {
  type: "spring" as const,
  stiffness: 350, // Hohe Spannung = schnell
  damping: 25,    // Gute Dämpfung = kein wabbeliges Nachfedern
  mass: 0.5,      // Leicht = reaktionsfreudig
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
// Snappy Stagger (sehr schnelles Nacheinander)
export const snappyStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Sehr schnelles Nacheinander
      delayChildren: 0.05,
    },
  },
}

export const snappyStaggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: snappySpring,
  },
}

// Legacy Stagger (behalten für Kompatibilität)
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

