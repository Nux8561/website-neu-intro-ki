# 🎬 Vollständige Animation-Analyse - IntroKI

**Datum:** Vollständige Analyse aller Animationen  
**Zweck:** Dokumentation für Rebuild & Wartung

---

## 📊 Übersicht

### Animation-Typen im Projekt

1. **Framer Motion** (90+ Komponenten)
2. **Tailwind CSS** (Transition Utilities)
3. **CSS Keyframes** (Custom Animations)
4. **Spring Physics** (Framer Motion)

---

## 🎯 1. Framer Motion Animationen

### A. Spring Physics Konfigurationen

#### `lib/animations.ts` - Zentrale Animation-Konstanten

```typescript
// Snappy Spring (Vercel/Attio Style)
export const snappySpring = {
  type: "spring",
  stiffness: 350,  // Hohe Spannung = schnell
  damping: 25,     // Gute Dämpfung = kein Nachfedern
  mass: 0.5,       // Leicht = reaktionsfreudig
}

// Attio Standard Spring
export const attioTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
  mass: 1,
}

// Attio Fast Spring
export const attioTransitionFast = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  mass: 1,
}

// Attio Smooth Spring
export const attioTransitionSmooth = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 1,
}
```

**Verwendung:**
- `snappySpring` → Bento Grid, Feature Cards, Hover-Effekte
- `attioTransition` → Standard-Animationen, Tab-Panels
- `attioTransitionFast` → Schnelle Feedback-Animationen
- `attioTransitionSmooth` → Sanfte, langsame Animationen

---

### B. Stagger Animationen

```typescript
// Snappy Stagger (sehr schnell)
export const snappyStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,  // Sehr schnelles Nacheinander
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

export const attioStaggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: attioTransition,
  },
}
```

**Verwendung:**
- `snappyStaggerContainer` → Bento Grid, Feature Lists
- `attioStaggerContainer` → Legacy-Komponenten

---

### C. Hover & Tap Effekte

```typescript
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
```

**Verwendung:**
- `attioHover` → Cards, Buttons, Interactive Elements
- `attioTap` → Buttons, Clickable Elements

---

### D. Komponenten-spezifische Animationen

#### 1. Hero Section (`components/sections/hero-attio.tsx`)

**Tab-Panel Animationen:**
```typescript
// Tab-Wechsel Animation
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}

// Content-Animation (gestaffelt)
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.1 }}

// Text-Animation
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2 }}
```

**Container Variants:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
}
```

**AnimatePresence:**
- `mode="wait"` → Tab-Panels wechseln nacheinander

---

#### 2. Bento Grid (`components/sections/features-bento-grid-attio.tsx`)

**Grid-Cell Animationen:**
```typescript
// Container
variants={snappyStaggerContainer}
initial="hidden"
whileInView="show"
viewport={{ once: true, margin: "-100px" }}

// Items
variants={snappyStaggerItem}

// Hover-Effekt
whileHover={{ scale: 1.01 }}
transition={snappySpring}
```

---

#### 3. Data Flow Animation (`components/ui/data-flow-animation.tsx`)

**Partikel-Animation:**
```typescript
// Fließende Partikel
initial={{ x: 0, opacity: 0 }}
animate={{ 
  x: [0, 100, 200],
  opacity: [0, 1, 1, 0],
}}
transition={{
  duration: 2,
  delay,
  repeat: Infinity,
  ease: "linear",
}}
```

**Icon-Animation:**
```typescript
// Source Icons
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.1, ...attioTransition }}
```

---

#### 4. Priorities Animation (`components/ui/priorities-animation.tsx`)

**Komplexe Multi-Phase Animation:**

**Phase 1: Collecting**
```typescript
// Data Sources
animate={{ 
  opacity: isActive ? 1 : 0.4,
  y: 0
}}
transition={{ 
  delay: index * 0.1,
  type: "spring",
  stiffness: 300,
  damping: 25
}}

// Pulsing Effect
animate={isActive ? { 
  scale: [1, 1.05, 1],
  boxShadow: [
    "0 1px 3px rgba(0,0,0,0.1)",
    `0 4px 12px ${source.color}30`,
    "0 1px 3px rgba(0,0,0,0.1)"
  ]
} : {}}
transition={{ duration: 2, repeat: Infinity }}
```

**Phase 2: Analyzing**
```typescript
// AI Center
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}

// Progress Circle
animate={{ 
  strokeDashoffset: 2 * Math.PI * 68 * (1 - aiProgress / 100)
}}
transition={{ duration: 0.3 }}
```

**Phase 3: Prioritizing**
```typescript
// Priority Cards
initial={{ opacity: 0, y: 20, scale: 0.95 }}
animate={{ 
  opacity: isVisible ? 1 : 0,
  y: isVisible ? 0 : 20,
  scale: isVisible ? 1 : 0.95
}}
transition={{ 
  delay: index * 0.1,
  type: "spring",
  stiffness: 300,
  damping: 25
}}
whileHover={{ scale: 1.01, y: -2 }}

// Score Animation
const score = useMotionValue(0)
const roundedScore = useTransform(score, Math.round)
animate(score, lead.score, { duration: 1, ease: "easeOut" })
```

**SVG Path Animation:**
```typescript
// Flow Lines
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 1, delay: index * 0.1 }}

// Animated Circle
<animateMotion
  dur="2s"
  repeatCount="indefinite"
  path={pathD}
/>
```

**Timing:**
- Phase 1 (Collecting): 0-3s
- Phase 2 (Analyzing): 3-7s
- Phase 3 (Prioritizing): 7-14s
- Phase 4 (Reset): 14-14.5s
- Loop: 14.5s

---

#### 5. Section Animationen (Scroll-triggered)

**Pattern:**
```typescript
const ref = React.useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{
    delay: index * 0.1,
    ...snappySpring,
  }}
  whileHover={{ scale: 1.01 }}
>
```

**Verwendet in:**
- `call-coaching-section.tsx`
- `pipeline-management-section.tsx`
- `research-orchestrator-section.tsx`

---

## 🎨 2. Tailwind CSS Animationen

### A. Transition Durations

```typescript
// tailwind.config.ts
transitionDuration: {
  'attio': '300ms',        // Standard (622x verwendet)
  'attio-fast': '150ms',   // Schnell (138x)
  'attio-slow': '400ms',   // Langsam (49x)
  'attio-instant': '50ms', // Instant (88x)
}
```

**Verwendung:**
```tsx
<div className="transition-all duration-attio ease-attio-ease-out">
```

---

### B. Transition Timing Functions

```typescript
transitionTimingFunction: {
  'attio-ease': 'cubic-bezier(0.32, 0.72, 0, 1)',      // Standard
  'attio-ease-alt': 'cubic-bezier(0.33, 0.00, 0.00, 1.00)', // Alternative
  'attio-smooth': 'cubic-bezier(0.45, 0, 0.2, 1)',
  'attio-ease-out': 'ease-out', // Sehr häufig (620x)
  'attio-ease-in': 'ease-in',   // Häufig (92x)
}
```

**Verwendung:**
```tsx
<div className="transition-all duration-attio ease-attio-ease-out">
```

---

### C. Animation Classes

```typescript
animation: {
  'attio-fade-in': 'fadeIn 300ms ease-out',
  'attio-fade-out': 'fadeOut 300ms ease-out',
  'attio-slide-up': 'slideFromBottom 300ms ease-out',
  'attio-slide-down': 'slideToBottom 300ms ease-out',
}
```

**Verwendung:**
```tsx
<div className="animate-attio-fade-in">
```

---

## 🔑 3. CSS Keyframes

### A. Attio Keyframes

```typescript
// tailwind.config.ts
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  slideFromBottom: {
    '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
    '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
  },
  slideToBottom: {
    '0%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
    '100%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
  },
  slideFromTop: {
    '0%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
    '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
  },
  slideToTop: {
    '0%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
    '100%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
  },
}
```

---

## 📋 4. Animation-Patterns nach Komponenten-Typ

### A. Cards / Grid Items

**Standard-Pattern:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={snappySpring}
  whileHover={{ scale: 1.01 }}
  className="..."
>
```

**Mit Stagger:**
```typescript
<motion.div variants={snappyStaggerContainer}>
  <motion.div variants={snappyStaggerItem}>...</motion.div>
</motion.div>
```

---

### B. Buttons

**Standard-Pattern:**
```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={snappySpring}
>
```

---

### C. Modals / Dropdowns

**Standard-Pattern:**
```typescript
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={attioTransition}
>
```

---

### D. Tab-Panels

**Standard-Pattern:**
```typescript
<AnimatePresence mode="wait">
  {activeTab === "tab1" && (
    <motion.div
      key="tab1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

---

### E. Scroll-triggered Sections

**Standard-Pattern:**
```typescript
const ref = React.useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={snappySpring}
>
```

---

## 🎯 5. Häufigste Animation-Parameter

### Spring Physics

| Parameter | Wert | Verwendung |
|-----------|------|------------|
| `stiffness: 350` | Snappy | Bento Grid, Hover-Effekte |
| `stiffness: 400` | Standard | Tab-Panels, Standard-Animationen |
| `stiffness: 300` | Smooth | Sanfte Animationen |
| `damping: 17` | Standard | Tab-Panels, Standard-Animationen |
| `damping: 25` | Snappy | Bento Grid, Hover-Effekte |
| `damping: 20` | Smooth | Sanfte Animationen |
| `mass: 0.5` | Leicht | Snappy Spring |
| `mass: 1` | Standard | Standard-Animationen |

### Timing

| Parameter | Wert | Verwendung |
|-----------|------|------------|
| `delay: 0.1` | Standard | Stagger Items |
| `delay: 0.2` | Text | Text-Animationen |
| `delay: 0.3` | Content | Content-Animationen |
| `staggerChildren: 0.08` | Snappy | Schnelle Stagger |
| `staggerChildren: 0.05` | Standard | Standard Stagger |

### Bewegungen

| Typ | Initial | Animate | Exit |
|-----|---------|---------|------|
| **Fade In** | `opacity: 0` | `opacity: 1` | `opacity: 0` |
| **Slide Up** | `y: 20` | `y: 0` | `y: -20` |
| **Slide Down** | `y: -20` | `y: 0` | `y: 20` |
| **Scale In** | `scale: 0.9` | `scale: 1` | `scale: 0.9` |
| **Hover** | - | `scale: 1.01` | - |
| **Tap** | - | `scale: 0.98` | - |

---

## 📊 6. Komponenten-Übersicht

### Komponenten mit Animationen (90+)

**Sections:**
- `hero-attio.tsx` - Tab-Panels, Container Variants
- `features-bento-grid-attio.tsx` - Stagger, Hover
- `call-coaching-section.tsx` - Scroll-triggered
- `pipeline-management-section.tsx` - Scroll-triggered
- `research-orchestrator-section.tsx` - Scroll-triggered
- `team-section.tsx` - Stagger, Hover

**UI Components:**
- `data-flow-animation.tsx` - Partikel-Animation
- `priorities-animation.tsx` - Multi-Phase Animation
- `skeletal-ui.tsx` - Hover, Bar Animation
- `feature-icon.tsx` - Hover Glow
- `tilted-card-visual.tsx` - 3D Transform
- `hero-visual.tsx` - Scale, Glow

---

## 🔧 7. Rebuild-Anleitung

### Schritt 1: Spring Physics

```typescript
// lib/animations.ts
export const snappySpring = {
  type: "spring",
  stiffness: 350,
  damping: 25,
  mass: 0.5,
}
```

### Schritt 2: Stagger Container

```typescript
export const snappyStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}
```

### Schritt 3: Tailwind Config

```typescript
// tailwind.config.ts
transitionDuration: {
  'attio': '300ms',
  'attio-fast': '150ms',
  'attio-slow': '400ms',
  'attio-instant': '50ms',
}
```

### Schritt 4: Keyframes

```typescript
keyframes: {
  fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
  slideFromBottom: { '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' }, '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' } },
}
```

---

## ✅ Checkliste für neue Animationen

- [ ] Nutze `snappySpring` für Hover-Effekte
- [ ] Nutze `attioTransition` für Standard-Animationen
- [ ] Nutze `snappyStaggerContainer` für Listen/Grids
- [ ] Nutze `duration-attio` für Tailwind-Transitions
- [ ] Nutze `ease-attio-ease-out` für Easing
- [ ] Nutze `y: 20` → `y: 0` für Slide-Up
- [ ] Nutze `opacity: 0` → `opacity: 1` für Fade-In
- [ ] Nutze `scale: 1.01` für Hover
- [ ] Nutze `scale: 0.98` für Tap

---

## 📚 Referenzen

- **Framer Motion Docs:** https://www.framer.com/motion/
- **Spring Physics:** https://www.framer.com/motion/animation/#spring-animations
- **Quick Reference:** `ANIMATION_QUICK_REFERENCE.md`
- **Animation DNA:** `ANIMATION_DNA.md`
- **Master Prompt:** `ATTIO_TRANSFORMATION_MASTER_PROMPT.md`

---

**Status: Vollständige Analyse abgeschlossen ✅**

Alle Animationen sind dokumentiert und können nachgebaut werden.

