# Asset Extraction & Animation Analysis

Dieses Verzeichnis enthält Skripte zum Extrahieren von Assets und Analysieren von Animationen aus der Attio HTML-Datei.

## 📥 Asset Extraction

### Voraussetzungen

```bash
pip install beautifulsoup4 lxml
```

### Verwendung

1. Stelle sicher, dass die HTML-Datei `Attio_ The next gen of CRM.html` im Desktop-Ordner liegt
2. Führe das Skript aus:

```bash
python extract_assets.py
```

### Was wird extrahiert?

- **Bilder**: Alle `<img>` Tags (URLs, lokale Dateien, Base64)
- **SVGs**: Alle inline `<svg>` Tags
- **CSS Background-Images**: Bilder aus CSS `url()` Regeln

### Output

```
extracted_assets/
├── images/
│   ├── logo.png
│   ├── screenshot1.jpg
│   └── ...
└── svgs/
    ├── icon_1.svg
    ├── icon_2.svg
    └── ...
```

Die Assets können dann in `/public` kopiert werden.

---

## ⚡ Animation Analysis

### Verwendung

```bash
python analyze_animations.py
```

### Was wird analysiert?

- **CSS Transitions**: Dauer, Timing-Funktionen
- **Keyframes**: Alle `@keyframes` Animationen
- **Tailwind-Klassen**: `duration-*`, `ease-*`, etc.
- **Hover-Effekte**: Transform, Opacity, Shadow-Änderungen

### Output

Das Skript gibt aus:
- Häufigste Transition-Dauern
- Timing-Funktionen (ease, cubic-bezier, etc.)
- Keyframe-Definitionen
- Vorschläge für Tailwind- und Framer-Motion-Config

---

## 🎨 Verwendung der Animation-Configs

### In Komponenten

```tsx
import { attioHover, attioTransition, attioStaggerContainer } from '@/lib/animations'

// Hover-Effekt
<motion.div whileHover={attioHover}>
  ...
</motion.div>

// Stagger Animation
<motion.div variants={attioStaggerContainer}>
  <motion.div variants={attioStaggerItem}>Item 1</motion.div>
  <motion.div variants={attioStaggerItem}>Item 2</motion.div>
</motion.div>
```

### Tailwind-Klassen

```tsx
// Attio-spezifische Transitions
<div className="transition-all duration-attio ease-attio-ease">
  ...
</div>
```

---

## 📝 Notizen

- Die Skripte sind für die spezifische Attio HTML-Datei optimiert
- Bei anderen HTML-Dateien müssen möglicherweise Pfade angepasst werden
- Base64-Bilder werden automatisch erkannt und konvertiert

