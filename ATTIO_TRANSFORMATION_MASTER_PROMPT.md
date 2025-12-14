# 🚀 Attio-Transformation Master-Prompt

**Kopiere diesen Text in Cursor Composer (`Cmd + I` / `Strg + I`)**

---

# Rolle & Kontext

Du bist ein Senior Frontend-Engineer und Motion-Design-Experte, spezialisiert auf High-End SaaS-Interfaces (wie Attio, Linear, Vercel).

Deine Aufgabe ist es, unsere bestehende Next.js/Tailwind-Codebase visuell und technisch komplett zu transformieren, basierend auf unserer Analyse von Attio.com.

Wir haben eine detaillierte "Animation & Design DNA" erstellt, die wir jetzt implementieren müssen.

---

# DIE "ATTIO-DNA" (Source of Truth)

## 1. Animation Physics (Keine festen Zeiten!)

Statt `duration` nutzen wir ausschließlich **Spring Physics**.

Implementiere diese Konstanten in `lib/animations.ts`:

```typescript
// DER GOLD-STANDARD (Snappy & Premium)
export const snappySpring = {
  type: "spring",
  stiffness: 350,
  damping: 25,
  mass: 0.5
};

// Für Standard-Übergänge
export const attioTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
  mass: 1
};

// Staggering (Elemente erscheinen nacheinander)
export const snappyStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

export const snappyStaggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: snappySpring
  }
};

// Hover & Tap
export const attioHover = {
  scale: 1.01,
  transition: attioTransition
};

export const attioTap = {
  scale: 0.98,
  transition: attioTransition
};
```

**WICHTIG:** Keine `duration` Werte in Framer Motion! Nur Spring Physics.

---

## 2. Design Tokens (Tailwind Config)

Aktualisiere `tailwind.config.ts` mit diesen Werten:

### Colors
```typescript
extend: {
  colors: {
    'attio-gray': '#FAFAFB',
    'attio-subtle': '#E6E7EA',
    'attio-text': '#0A0A0A',
  }
}
```

### Shadows
```typescript
extend: {
  boxShadow: {
    'attio-card': '0px 2px 6px rgba(28, 40, 64, 0.06)',
    'attio-card-hover': '0px 4px 12px rgba(28, 40, 64, 0.08)',
  }
}
```

### Transitions
```typescript
extend: {
  transitionDuration: {
    'attio': '300ms',        // Standard (622x verwendet)
    'attio-fast': '150ms',   // Schnell
    'attio-slow': '400ms',   // Langsam
    'attio-instant': '50ms', // Instant
  },
  transitionTimingFunction: {
    'attio-ease': 'cubic-bezier(0.32, 0.72, 0, 1)',
    'attio-ease-out': 'ease-out',
    'attio-smooth': 'cubic-bezier(0.45, 0, 0.2, 1)',
  }
}
```

---

## 3. Typografie

- **Headlines:** `font-inter-display font-bold tracking-tight text-[#0A0A0A]`
- **Body:** `font-inter text-gray-600`
- **Muted:** `text-gray-500`

---

# DEINE AUFGABEN (Schritt für Schritt)

## Phase 1: Infrastruktur schaffen

1. **Erstelle/Update `lib/animations.ts`** mit den oben genannten Framer-Motion-Konstanten.
2. **Update `tailwind.config.ts`** mit den neuen Colors, Shadows und Transitions.
3. **Prüfe** ob `components/ui/feature-icon.tsx`, `components/ui/skeletal-ui.tsx`, `components/ui/tilted-card-visual.tsx` existieren.

---

## Phase 2: Design-Cleanup ("Exorzismus")

Durchsuche das Projekt (`app/` und `components/`) und entferne gnadenlos alle "Start-up-Template"-Elemente:

### 2.1 Hintergründe
- ❌ Lösche alle `bg-gradient-*` Klassen (außer sie sind Teil eines neuen `FeatureIcon`)
- ✅ Ersetze durch `bg-attio-gray` oder `bg-white`
- ❌ Entferne alle `blur-3xl` Orbs oder leuchtende Hintergründe
- ✅ Ersetze durch `bg-attio-gray` oder `bg-white`

### 2.2 Schatten
- ❌ Ersetze alle `shadow-xl` / `shadow-2xl` durch `shadow-attio-card`
- ✅ Für Hover: `shadow-attio-card-hover`

### 2.3 Borders
- ❌ Ersetze `border-gray-200` durch `border-attio-subtle`
- ✅ Nutze `border-white/5` oder `border-white/10` für subtile Borders

### 2.4 Animationen
- ❌ Ersetze alle `duration-500`, `duration-700` durch `duration-attio` (300ms)
- ❌ Ersetze alle `ease-in-out` durch `ease-attio-ease-out`
- ❌ Entferne alle `transition={{ duration: 0.5 }}` aus Framer Motion
- ✅ Ersetze durch `transition={snappySpring}` oder `transition={attioTransition}`

---

## Phase 3: Komponenten-Upgrade

Refactore die Hauptkomponenten (`components/sections/features-bento-grid-attio.tsx`, `components/sections/hero-attio.tsx`, etc.):

### 3.1 Icons
- ❌ Ersetze freistehende Icons (`<Icon className="h-6 w-6" />`) durch `<FeatureIcon icon={Icon} size="md" color="gray" />`
- ✅ Alle Icons müssen in einem Container mit `bg-white`, `shadow-sm`, `border border-gray-200`, `rounded-lg` sein

### 3.2 Visuals
- ❌ Ersetze Bilder/Screenshots durch `<SkeletalUI variant="workflow" />` oder `<TiltedCardVisual variant="dashboard" />`
- ✅ Nutze Code-basierte Mockups statt statische Bilder

### 3.3 Integrations
- ❌ Ersetze Logo-Listen durch `<IntegrationsShowcase />`
- ✅ Nutze simulierte UI-Karten (Slack, Gmail, CRM) statt Logos

---

## Phase 4: Animation Injection

Gehe durch alle interaktiven Elemente:

### 4.1 Cards / Grid Items
```tsx
<motion.div
  variants={snappyStaggerItem}
  whileHover={{ scale: 1.01 }}
  transition={snappySpring}
>
```

### 4.2 Buttons
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={snappySpring}
>
```

### 4.3 Listen / Grids
```tsx
<motion.div
  variants={snappyStaggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={snappyStaggerItem}>
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

### 4.4 Tab-Panels
```tsx
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

## Phase 5: Konsistenz-Check

### Checkliste vor Abschluss:

- [ ] Alle `duration-500` → `duration-attio` ersetzt
- [ ] Alle `ease-in-out` → `ease-attio-ease-out` ersetzt
- [ ] Alle `transition={{ duration: 0.5 }}` → `transition={snappySpring}` ersetzt
- [ ] Alle freistehenden Icons → `<FeatureIcon />` ersetzt
- [ ] Alle `bg-gradient-*` → `bg-attio-gray` oder `bg-white` ersetzt
- [ ] Alle `shadow-xl` → `shadow-attio-card` ersetzt
- [ ] Alle Listen/Grids nutzen `snappyStaggerContainer`
- [ ] Alle Cards haben `whileHover={{ scale: 1.01 }}`
- [ ] Alle Buttons haben `whileTap={{ scale: 0.98 }}`

---

# Die 3 Goldenen Regeln

1. **Keine festen Dauer-Werte** → Nutze Spring Physics
2. **Keine `ease-in-out`** → Nutze `ease-attio-ease-out` oder Spring
3. **Keine gleichzeitigen Animationen** → Nutze Stagger

---

# Referenzen

- **Vollständige Analyse:** `ANIMATION_ANALYSIS_COMPLETE.md`
- **Quick Reference:** `ANIMATION_QUICK_REFERENCE.md`
- **Animation DNA:** `ANIMATION_DNA.md`

---

**Ziel:** Das Ergebnis muss sich "physikalisch" anfühlen (snappy), extrem sauber aussehen (kein Rauschen, perfekte Linien) und vollständig skalierbar sein.

**Beginne jetzt mit Phase 1 und arbeite dich vor.**

---

**Status: Ready to execute in Cursor Composer 🚀**

