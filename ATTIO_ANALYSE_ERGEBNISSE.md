# Attio Analyse-Ergebnisse

## 📊 Zusammenfassung der Analyse

### Asset-Extraktion
- **1469 SVGs** extrahiert (inkl. viele Inline-SVGs für Icons)
- **Bilder** aus `<img>` Tags und CSS Background-Images
- **Problem behoben**: Lange Dateinamen werden jetzt automatisch gekürzt (Windows-Pfad-Limit)

### Animation-Analyse

#### Häufigste Tailwind-Klassen:
- **`duration-300`**: 622x (Standard!)
- **`duration-150`**: 138x (schnell)
- **`duration-50`**: 88x (instant)
- **`duration-400`**: 49x (langsam)
- **`ease-out`**: 620x (Standard!)
- **`ease-in`**: 92x

#### Transition-Typen:
- **`transition-opacity`**: 351x
- **`transition-all`**: 264x
- **`transition-colors`**: 73x

#### Timing Functions:
- `cubic-bezier(0.32, 0.72, 0, 1)` - Attio Standard
- `cubic-bezier(0.33, 0.00, 0.00, 1.00)` - Alternative
- `cubic-bezier(0.45, 0, 0.2, 1)` - Smooth

#### Keyframes gefunden:
- `fadeIn` / `fadeOut`
- `slideFromBottom` / `slideToBottom`
- `slideFromTop` / `slideToTop`
- `slideFromLeft` / `slideToLeft`
- `slideFromRight` / `slideToRight`

---

## ✅ Implementierte Konfigurationen

### Tailwind Config (`tailwind.config.ts`)

```typescript
transitionDuration: {
  'attio': '300ms',        // Standard (622x verwendet)
  'attio-fast': '150ms',   // Schnell (138x)
  'attio-slow': '400ms',   // Langsam (49x)
  'attio-instant': '50ms', // Instant (88x)
},
transitionTimingFunction: {
  'attio-ease': 'cubic-bezier(0.32, 0.72, 0, 1)',      // Standard
  'attio-ease-alt': 'cubic-bezier(0.33, 0.00, 0.00, 1.00)', // Alternative
  'attio-smooth': 'cubic-bezier(0.45, 0, 0.2, 1)',
  'attio-ease-out': 'ease-out', // Sehr häufig (620x)
  'attio-ease-in': 'ease-in',   // Häufig (92x)
},
```

### Framer Motion (`lib/animations.ts`)

```typescript
export const attioTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
  mass: 1,
}
```

### Keyframes (`lib/attio-keyframes.ts`)

Alle gefundenen Keyframes sind als TypeScript-Objekte verfügbar.

---

## 🎯 Verwendung

### In Komponenten

```tsx
import { attioHover, attioTransition } from '@/lib/animations'

// Hover mit Attio-Timing
<motion.div whileHover={attioHover} transition={attioTransition}>
  ...
</motion.div>
```

### Tailwind-Klassen

```tsx
// Attio Standard Transition
<div className="transition-all duration-attio ease-attio-ease-out">
  ...
</div>

// Attio Animation
<div className="animate-attio-fade-in">
  ...
</div>
```

---

## 📝 Wichtige Erkenntnisse

1. **300ms ist der Standard**, nicht 200ms!
2. **ease-out** ist die häufigste Easing-Funktion
3. **transition-opacity** wird am häufigsten verwendet (351x)
4. Viele **Inline-SVGs** für Icons (1469 gefunden)
5. Attio nutzt **translate3d** für Hardware-Beschleunigung

---

## 🔧 Nächste Schritte

1. ✅ Asset-Extraktor verbessert (lange Dateinamen)
2. ✅ Tailwind-Config aktualisiert (300ms Standard)
3. ✅ Keyframes hinzugefügt
4. ⏭️ Assets in `/public` verschieben
5. ⏭️ Komponenten mit neuen Animation-Configs aktualisieren

