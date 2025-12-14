# Attio Design System - Quick Reference

## 🎯 Design-DNA

Basierend auf der Analyse der Attio HTML-Datei haben wir die exakten "Magic Numbers" identifiziert und in unser System integriert.

---

## ⚡ Animation Standards

### Tailwind Utilities

```tsx
// ✅ ATTIO STANDARD (nutze diese!)
<div className="transition-all duration-attio ease-attio-ease-out">

// ❌ NICHT MEHR NUTZEN
<div className="transition-all duration-200 ease-in-out">
```

### Verfügbare Attio-Utilities

| Utility | Wert | Verwendung |
|---------|------|------------|
| `duration-attio` | 300ms | Standard (622x verwendet) |
| `duration-attio-fast` | 150ms | Schnelle Feedback (138x) |
| `duration-attio-slow` | 400ms | Langsame Animationen (49x) |
| `duration-attio-instant` | 50ms | Instant Feedback (88x) |
| `ease-attio-ease-out` | ease-out | Standard (620x verwendet) |
| `ease-attio-ease` | cubic-bezier(0.32, 0.72, 0, 1) | Attio Standard |

### Animation-Klassen

```tsx
// Fade-in
<div className="animate-attio-fade-in">

// Slide-up
<div className="animate-attio-slide-up">
```

---

## 🎨 Framer Motion

### Import

```tsx
import { 
  attioTransition,
  attioHover,
  attioTap,
  attioFadeIn,
  attioSlideUp,
  attioStaggerContainer,
  attioStaggerItem
} from '@/lib/animations'
```

### Verwendung

```tsx
// Hover-Effekt
<motion.div whileHover={attioHover} transition={attioTransition}>
  ...
</motion.div>

// Tap/Click-Effekt
<motion.button whileTap={attioTap}>
  ...
</motion.button>

// Stagger Animation (für Listen/Grids)
<motion.div variants={attioStaggerContainer}>
  <motion.div variants={attioStaggerItem}>Item 1</motion.div>
  <motion.div variants={attioStaggerItem}>Item 2</motion.div>
</motion.div>
```

---

## 🎯 Typografie

### Headlines

```tsx
// H1 (Hero)
<h1 className="text-5xl sm:text-6xl md:text-7xl font-inter-display font-bold tracking-tighter text-[#0A0A0A]">

// H2 (Sektionen)
<h2 className="text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-[#0A0A0A]">

// H3 (Karten)
<h3 className="text-lg md:text-xl font-inter-display font-semibold text-[#0A0A0A]">
```

### Body Text

```tsx
// Standard
<p className="text-sm font-inter text-zinc-500 leading-relaxed">

// Subheadline
<p className="text-lg sm:text-xl font-inter font-normal text-gray-600">
```

---

## 🎨 Farben

### Hintergrund

```tsx
// Haupt-Hintergrund
bg-white

// Sektionen
bg-[#FAFAFB]

// Cards
bg-white
```

### Borders

```tsx
// Standard Border
border border-gray-200

// Subtiler Border
border-[0.5px] border-gray-200

// Hover Border
hover:border-gray-300
```

### Text

```tsx
// Primär
text-[#0A0A0A]

// Sekundär
text-gray-600

// Tertiär
text-zinc-500
```

---

## 📐 Spacing

### Vertikal

```tsx
// Hero-Sektion
py-24 md:py-32

// Sektionen
py-24 md:py-32

// Element-Abstand
mb-8, mb-10
```

### Horizontal

```tsx
// Container
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Button Padding
px-8 py-3.5
```

---

## 🎭 Hover-Effekte

### Cards/Kacheln

```tsx
className="bg-white p-6 hover:bg-gray-50/50 hover:shadow-sm transition-all duration-attio ease-attio-ease-out"
```

### Buttons

```tsx
// Primary
className="bg-black text-white hover:bg-gray-900 transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"

// Secondary
className="bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-attio ease-attio-ease-out"
```

---

## 📦 Assets

### Verwendung

```tsx
import Image from 'next/image'

// Icons (aus extracted_assets/svgs/)
<Image src="/icons/icon_workflow.svg" width={24} height={24} alt="Workflow" />

// Bilder (aus extracted_assets/images/)
<Image src="/images/logo.png" width={120} height={40} alt="Logo" />
```

---

## ✅ Checkliste für neue Komponenten

- [ ] Nutze `duration-attio` statt `duration-200`
- [ ] Nutze `ease-attio-ease-out` für Transitions
- [ ] Für Framer Motion: Importiere aus `@/lib/animations`
- [ ] Typografie: `font-inter-display` für Headlines, `font-inter` für Body
- [ ] Farben: `bg-white`, `text-[#0A0A0A]`, `border-gray-200`
- [ ] Spacing: Großzügig (`py-24`, `mb-8`)
- [ ] Hover: Subtile Effekte (`hover:bg-gray-50/50`, `hover:shadow-sm`)

---

## 🚀 Quick Start Template

```tsx
"use client"

import { motion } from "framer-motion"
import { attioHover, attioTransition, attioStaggerContainer, attioStaggerItem } from '@/lib/animations'

export function MyComponent() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={attioStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={attioStaggerItem}
            className="bg-white p-6 hover:bg-gray-50/50 hover:shadow-sm transition-all duration-attio ease-attio-ease-out"
          >
            <h3 className="text-lg md:text-xl font-inter-display font-semibold text-[#0A0A0A] mb-2">
              Title
            </h3>
            <p className="text-sm font-inter text-zinc-500">
              Description
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

**Merke:** Die häufigste Kombination in Attio ist `300ms` + `ease-out`. Nutze diese für das authentischste Feeling!

