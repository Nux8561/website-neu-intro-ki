# 🎨 IntroKI Design-System - Quick Reference

## 🏆 IntroKI "Attio Edition" - Design-System

**Status:** Production Ready ✅  
**Level:** Premium SaaS (Attio/Linear/Theo) ✅

---

## 🚀 Quick Start

### Für neue Komponenten:

```tsx
"use client"

import { AttioSection, AttioContainer } from '@/components/providers/attio-theme-provider'
import { AttioTypography, AttioButton } from '@/components/providers/attio-theme-provider'
import { FeatureIcon } from '@/components/ui/feature-icon'
import { TiltedCardVisual } from '@/components/ui/tilted-card-visual'
import { snappySpring } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export function MyComponent() {
  return (
    <AttioSection variant="default" background="white">
      <AttioContainer size="xl">
        <h1 className={AttioTypography.h1}>Title</h1>
        
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={snappySpring}
          className="p-6 bg-white border border-attio-subtle rounded-xl"
        >
          <FeatureIcon icon={Brain} size="md" color="purple" />
          <TiltedCardVisual variant="dashboard" />
        </motion.div>
        
        <button className={AttioButton.primary}>Action</button>
      </AttioContainer>
    </AttioSection>
  )
}
```

---

## 📦 Komponenten-Übersicht

### Visual Components
- **`FeatureIcon`** - Icons in edlen Containern
- **`TiltedCardVisual`** - 3D-UI-Mockups
- **`HeroVisual`** - Große 3D-Hero-Visuals
- **`SkeletalUI`** - Code-basierte Visuals
- **`IntegrationsShowcase`** - Echte Tool-Integrationen
- **`DataFlowAnimation`** - Animierter Datenfluss

### Layout Components
- **`AttioWrapper`** - Section/Card/Container
- **`AttioGrid`** - Bento-Grid System
- **`AttioGridCell`** - Grid-Zelle
- **`AttioThemeProvider`** - App-Wrapper
- **`AttioSection`** - Section mit Spacing
- **`AttioContainer`** - Container mit Breiten

### Animation System
- **`snappySpring`** - Snappy Spring Physics
- **`snappyStaggerContainer`** - Schnelles Nacheinander
- **`attioTransition`** - Legacy (Kompatibilität)

---

## 🎨 Die 3 Goldenen Regeln

### 1. Keine Bilder, nur Code
```tsx
// ❌ NICHT
<Image src="/screenshot.png" />

// ✅ STATTDESSEN
<TiltedCardVisual variant="dashboard" />
<SkeletalUI variant="workflow" />
```

### 2. Keine nackten Icons
```tsx
// ❌ NICHT
<Brain className="h-6 w-6" />

// ✅ STATTDESSEN
<FeatureIcon icon={Brain} size="md" color="purple" />
```

### 3. Physik statt Dauer
```tsx
// ❌ NICHT
<div className="transition-all duration-500">

// ✅ STATTDESSEN
<motion.div transition={snappySpring}>
```

---

## 🎯 Design-Tokens

### Farben
```tsx
bg-attio-gray          // #FAFAFB
border-attio-subtle   // #E6E7EA
text-attio-text        // #0A0A0A
```

### Animationen
```tsx
duration-attio         // 300ms
ease-attio-ease-out    // ease-out
shadow-attio-card      // Weicher Schatten
```

### Typografie
```tsx
font-inter-display     // Headlines
font-inter            // Body Text
tracking-tight        // Headlines
```

---

## 📚 Vollständige Dokumentation

- `ATTIO_DESIGN_SYSTEM.md` - Design-System Referenz
- `DEPLOYMENT_GUIDE.md` - Deployment-Anleitung
- `TRANSFORMATION_COMPLETE.md` - Vollständige Transformation
- `ATTIO_WRAPPER_USAGE.md` - Theme Provider Verwendung

---

**Status: Ready to use! 🚀**

Nutze diese Komponenten konsistent, um den Premium-Look zu erhalten.

