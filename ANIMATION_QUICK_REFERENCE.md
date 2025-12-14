# ⚡ Animation Quick Reference - IntroKI

**Für Entwickler: Copy-Paste Ready**

---

## 🎯 Die 3 Goldenen Regeln

1. **Keine festen Dauer-Werte** → Nutze Spring Physics
2. **Keine `ease-in-out`** → Nutze `ease-attio-ease-out` oder Spring
3. **Keine gleichzeitigen Animationen** → Nutze Stagger

---

## 🔧 Copy-Paste Snippets

### 1. Standard Card/Grid Item

```tsx
import { motion } from "framer-motion"
import { snappySpring, snappyStaggerItem } from "@/lib/animations"

<motion.div
  variants={snappyStaggerItem}
  whileHover={{ scale: 1.01 }}
  transition={snappySpring}
  className="..."
>
  {/* Content */}
</motion.div>
```

---

### 2. Stagger Container (für Listen/Grids)

```tsx
import { snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

<motion.div
  variants={snappyStaggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={snappyStaggerItem}>
      {/* Item Content */}
    </motion.div>
  ))}
</motion.div>
```

---

### 3. Button

```tsx
import { motion } from "framer-motion"
import { snappySpring } from "@/lib/animations"

<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={snappySpring}
  className="..."
>
  Click me
</motion.button>
```

---

### 4. Tab-Panel

```tsx
import { motion, AnimatePresence } from "framer-motion"

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

### 5. Scroll-triggered Section

```tsx
import { motion, useInView } from "framer-motion"
import { snappySpring } from "@/lib/animations"

const ref = React.useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={snappySpring}
>
  {/* Content */}
</motion.div>
```

---

### 6. Modal/Dropdown

```tsx
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"

<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={attioTransition}
>
  {/* Content */}
</motion.div>
```

---

### 7. CSS Transition (Tailwind)

```tsx
// ✅ RICHTIG
<div className="transition-all duration-attio ease-attio-ease-out">

// ❌ FALSCH
<div className="transition-all duration-500 ease-in-out">
```

---

## 📊 Die Magic Numbers

### Spring Physics

| Name | stiffness | damping | mass | Verwendung |
|------|-----------|---------|------|------------|
| `snappySpring` | 350 | 25 | 0.5 | Hover, Cards, Grid Items |
| `attioTransition` | 400 | 17 | 1 | Tab-Panels, Standard |
| `attioTransitionFast` | 500 | 25 | 1 | Schnelle Feedback |
| `attioTransitionSmooth` | 300 | 20 | 1 | Sanfte Animationen |

### Timing

| Wert | Verwendung |
|------|------------|
| `delay: 0.1` | Standard Stagger |
| `delay: 0.2` | Text-Animationen |
| `delay: 0.3` | Content-Animationen |
| `staggerChildren: 0.08` | Snappy Stagger |
| `staggerChildren: 0.05` | Standard Stagger |

### Bewegungen

| Typ | Initial | Animate | Exit |
|-----|---------|---------|------|
| **Fade In** | `opacity: 0` | `opacity: 1` | `opacity: 0` |
| **Slide Up** | `y: 20` | `y: 0` | `y: -20` |
| **Hover** | - | `scale: 1.01` | - |
| **Tap** | - | `scale: 0.98` | - |

---

## 🎨 Tailwind Utilities

### Durations

```tsx
duration-attio        // 300ms (Standard)
duration-attio-fast   // 150ms (Schnell)
duration-attio-slow   // 400ms (Langsam)
duration-attio-instant // 50ms (Instant)
```

### Easing

```tsx
ease-attio-ease       // cubic-bezier(0.32, 0.72, 0, 1)
ease-attio-ease-out   // ease-out
ease-attio-smooth     // cubic-bezier(0.45, 0, 0.2, 1)
```

### Animation Classes

```tsx
animate-attio-fade-in    // Fade In
animate-attio-slide-up    // Slide Up
```

---

## ✅ Checkliste

Vor dem Commit prüfen:

- [ ] Keine `duration-500` oder `duration-700` → Nutze `duration-attio`
- [ ] Keine `ease-in-out` → Nutze `ease-attio-ease-out`
- [ ] Keine `transition={{ duration: 0.5 }}` → Nutze `snappySpring`
- [ ] Listen/Grids nutzen `snappyStaggerContainer`
- [ ] Hover-Effekte nutzen `scale: 1.01` (nicht `1.05`)
- [ ] Tap-Effekte nutzen `scale: 0.98` (nicht `0.95`)

---

## 📚 Vollständige Dokumentation

- **`ANIMATION_ANALYSIS_COMPLETE.md`** → Vollständige Analyse aller Animationen
- **`ANIMATION_DNA.md`** → Theorie & Erklärungen der Animation-Physik
- **`ATTIO_TRANSFORMATION_MASTER_PROMPT.md`** → Ausführbarer Master-Prompt für Cursor
- **`lib/animations.ts`** → Alle Animation-Konstanten

---

**Status: Ready to use! ⚡**

