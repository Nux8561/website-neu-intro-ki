# 🚀 Quick Start: Assets & Animationen von Attio

## ✅ Status: Alles implementiert!

Die Skripte wurden bereits ausgeführt und die Konfigurationen sind in dein Projekt integriert.

---

## 📦 Was wurde extrahiert?

### Assets
- **1469 SVGs** extrahiert → `extracted_assets/svgs/`
- **Bilder** extrahiert → `extracted_assets/images/`
- **Lokation**: `c:\Users\lsper\OneDrive - Dominik Scherwinsky\Desktop\extracted_assets`

### Animation-Analyse
- ✅ `duration-300` ist der Standard (622x verwendet)
- ✅ `ease-out` ist die häufigste Easing-Funktion (620x)
- ✅ Keyframes identifiziert und implementiert
- ✅ Tailwind-Config aktualisiert
- ✅ Framer Motion Configs erstellt

---

## 🎯 Nächste Schritte

### 1. Assets in Projekt verschieben

```bash
# Kopiere die wichtigsten Assets nach /public
# (Wähle die relevanten SVGs/Icons aus)
cp extracted_assets/svgs/icon_*.svg public/icons/
cp extracted_assets/images/*.png public/images/
```

### 2. Komponenten aktualisieren

**Vorher:**
```tsx
<div className="transition-all duration-200 ease-in-out">
```

**Nachher (Attio-Standard):**
```tsx
<div className="transition-all duration-attio ease-attio-ease-out">
```

### 3. Framer Motion verwenden

```tsx
import { attioHover, attioTransition } from '@/lib/animations'

<motion.div 
  whileHover={attioHover} 
  transition={attioTransition}
>
  ...
</motion.div>
```

---

## 📊 Verfügbare Animation-Utilities

### Tailwind-Klassen

```tsx
// Standard (300ms, ease-out)
<div className="transition-all duration-attio ease-attio-ease-out">

// Schnell (150ms)
<div className="transition-all duration-attio-fast ease-attio-ease-out">

// Langsam (400ms)
<div className="transition-all duration-attio-slow ease-attio-ease-out">

// Instant (50ms)
<div className="transition-all duration-attio-instant ease-attio-ease-out">
```

### Framer Motion

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

### Keyframes

```tsx
// Tailwind Animationen
<div className="animate-attio-fade-in">
<div className="animate-attio-slide-up">
```

---

## 🎨 Magic Numbers (aus Analyse)

| Wert | Verwendung | Tailwind Class |
|------|------------|----------------|
| 300ms | Standard (622x) | `duration-attio` |
| 150ms | Schnell (138x) | `duration-attio-fast` |
| 50ms | Instant (88x) | `duration-attio-instant` |
| 400ms | Langsam (49x) | `duration-attio-slow` |
| ease-out | Standard (620x) | `ease-attio-ease-out` |
| cubic-bezier(0.32, 0.72, 0, 1) | Attio Standard | `ease-attio-ease` |

---

## 🔧 Skripte erneut ausführen

Falls du die Assets erneut extrahieren möchtest:

```bash
# Assets extrahieren
python extract_assets.py

# Animationen analysieren
python analyze_animations.py
```

---

## ✨ Tipp

Die häufigste Kombination in Attio ist:
- **Duration**: `300ms`
- **Easing**: `ease-out`
- **Transition**: `transition-opacity` oder `transition-all`

Nutze diese Kombination für das authentischste Attio-Feeling!

