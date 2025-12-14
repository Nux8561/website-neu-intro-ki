# 🎨 Komponenten-Template Guide

## 📋 Wie du neue Sections im Attio-Style erstellst

Dieser Guide zeigt dir, wie du neue Komponenten erstellst, die automatisch den Premium-Look haben.

---

## 🚀 Quick Start

### 1. Nutze das Template

Kopiere `components/templates/pricing-section-template.tsx` und passe es an:

```tsx
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AttioSection, AttioContainer } from "@/components/providers/attio-theme-provider"
import { AttioTypography, AttioButton } from "@/components/providers/attio-theme-provider"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

export function MyNewSection() {
  return (
    <AttioSection variant="spacious" background="white">
      <AttioContainer size="xl">
        {/* Dein Content */}
      </AttioContainer>
    </AttioSection>
  )
}
```

---

## 🎯 Die 5 Goldenen Regeln

### 1. Layout: Nutze AttioWrapper

```tsx
// ✅ RICHTIG
<AttioSection variant="spacious" background="white">
  <AttioContainer size="xl">
    {/* Content */}
  </AttioContainer>
</AttioSection>

// ❌ FALSCH
<section className="py-24">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### 2. Typografie: Nutze AttioTypography

```tsx
// ✅ RICHTIG
<h1 className={AttioTypography.h1}>Title</h1>
<p className={AttioTypography.body}>Text</p>

// ❌ FALSCH
<h1 className="text-4xl font-bold">Title</h1>
```

### 3. Icons: Nutze FeatureIcon

```tsx
// ✅ RICHTIG
<FeatureIcon icon={Brain} size="md" color="purple" />

// ❌ FALSCH
<Brain className="h-6 w-6" />
```

### 4. Animationen: Nutze snappySpring

```tsx
// ✅ RICHTIG
<motion.div
  whileHover={{ scale: 1.01 }}
  transition={snappySpring}
>

// ❌ FALSCH
<div className="transition-all duration-500">
```

### 5. Visuals: Nutze SkeletalUI oder TiltedCardVisual

```tsx
// ✅ RICHTIG
<SkeletalUI variant="workflow" />
<TiltedCardVisual variant="dashboard" />

// ❌ FALSCH
<Image src="/screenshot.png" />
```

---

## 📦 Verfügbare Komponenten

### Layout
- `AttioSection` - Section Wrapper
- `AttioContainer` - Container mit Breiten
- `AttioGrid` - Bento Grid System
- `AttioGridCell` - Grid Zelle

### Visuals
- `FeatureIcon` - Icon Container
- `TiltedCardVisual` - 3D UI Mockup
- `HeroVisual` - Große 3D Visuals
- `SkeletalUI` - Code-basierte Visuals
- `IntegrationsShowcase` - Tool Integrationen
- `DataFlowAnimation` - Animierter Datenfluss

### Typography
- `AttioTypography.h1` - Hauptüberschrift
- `AttioTypography.h2` - Unterüberschrift
- `AttioTypography.h3` - Tertiäre Überschrift
- `AttioTypography.body` - Body Text
- `AttioTypography.bodySmall` - Kleiner Body Text

### Buttons
- `AttioButton.primary` - Primärer Button
- `AttioButton.secondary` - Sekundärer Button
- `AttioButton.ghost` - Ghost Button

---

## 🎨 Beispiel: Pricing Section

Siehe `components/templates/pricing-section-template.tsx` für ein vollständiges Beispiel.

---

## 🔍 Checkliste für neue Komponenten

- [ ] Nutzt `AttioSection` und `AttioContainer`
- [ ] Nutzt `AttioTypography` für alle Texte
- [ ] Nutzt `FeatureIcon` für alle Icons
- [ ] Nutzt `snappySpring` für Animationen
- [ ] Nutzt `SkeletalUI` oder `TiltedCardVisual` für Visuals
- [ ] Keine `duration-[0-9]+` Klassen
- [ ] Keine `shadow-xl` oder `shadow-2xl` (außer 3D-Komponenten)
- [ ] Keine nackten Icons

---

## 📚 Weitere Ressourcen

- `README_DESIGN_SYSTEM.md` - Design-System Übersicht
- `CONSISTENCY_AUDIT_REPORT.md` - Konsistenz-Report
- `components/templates/pricing-section-template.tsx` - Vollständiges Beispiel

---

**Status: Ready to use! 🚀**

Nutze diese Templates, um konsistent Premium-Komponenten zu erstellen.

