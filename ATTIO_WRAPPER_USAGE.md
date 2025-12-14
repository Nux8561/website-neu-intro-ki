# 🎨 Attio Theme Provider - Verwendung

## Übersicht

Der `AttioThemeProvider` ist ein umfassender Wrapper, der die gesamte App mit Attio-Design-Tokens umhüllt.

---

## 📦 Komponenten

### 1. AttioThemeProvider

**Zweck:** Basis-Wrapper für die gesamte App

**Verwendung:**
```tsx
import { AttioThemeProvider } from '@/components/providers/attio-theme-provider'

// In layout.tsx oder root component
<AttioThemeProvider>
  {children}
</AttioThemeProvider>
```

**Features:**
- Setzt `bg-attio-gray` als Standard-Hintergrund
- Konfiguriert `font-inter` als Standard-Schriftart
- Setzt `text-attio-text` als Standard-Textfarbe
- Antialiasing aktiviert

### 2. AttioContainer

**Zweck:** Konsistente Container-Breiten

**Verwendung:**
```tsx
import { AttioContainer } from '@/components/providers/attio-theme-provider'

<AttioContainer size="xl">
  {/* Content */}
</AttioContainer>
```

**Größen:**
- `sm` → `max-w-4xl`
- `md` → `max-w-5xl`
- `lg` → `max-w-6xl`
- `xl` → `max-w-7xl` (Standard)
- `full` → `max-w-full`

### 3. AttioSection

**Zweck:** Konsistente Section-Wrapper mit Spacing

**Verwendung:**
```tsx
import { AttioSection } from '@/components/providers/attio-theme-provider'

<AttioSection variant="spacious" background="white">
  {/* Content */}
</AttioSection>
```

**Varianten:**
- `default` → `py-24 md:py-32`
- `spacious` → `py-32 md:py-40`
- `compact` → `py-16 md:py-24`

**Backgrounds:**
- `white` → `bg-white`
- `attio-gray` → `bg-attio-gray`
- `transparent` → `bg-transparent`

---

## 🎨 Typography Utilities

**Vordefinierte Klassen:**
```tsx
import { AttioTypography } from '@/components/providers/attio-theme-provider'

// Verwendung
<h1 className={AttioTypography.h1}>Heading 1</h1>
<h2 className={AttioTypography.h2}>Heading 2</h2>
<h3 className={AttioTypography.h3}>Heading 3</h3>
<p className={AttioTypography.body}>Body Text</p>
<span className={AttioTypography.bodySmall}>Small Text</span>
<label className={AttioTypography.label}>Label</label>
```

---

## 🔘 Button Variants

**Vordefinierte Button-Klassen:**
```tsx
import { AttioButton } from '@/components/providers/attio-theme-provider'

// Verwendung
<button className={AttioButton.primary}>Primary</button>
<button className={AttioButton.secondary}>Secondary</button>
<button className={AttioButton.ghost}>Ghost</button>
```

---

## 📋 Vollständiges Beispiel

```tsx
"use client"

import { 
  AttioThemeProvider, 
  AttioSection, 
  AttioContainer,
  AttioTypography,
  AttioButton
} from '@/components/providers/attio-theme-provider'

export function MyPage() {
  return (
    <AttioThemeProvider>
      <AttioSection variant="spacious" background="white">
        <AttioContainer size="xl">
          <h1 className={AttioTypography.h1}>
            Welcome to IntroKI
          </h1>
          <p className={AttioTypography.body}>
            Das KI-native CRM für moderne Sales-Teams.
          </p>
          <button className={AttioButton.primary}>
            Start for free
          </button>
        </AttioContainer>
      </AttioSection>
    </AttioThemeProvider>
  )
}
```

---

## 🔄 Migration bestehender Komponenten

### Vorher:
```tsx
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <h1 className="text-4xl font-bold">Title</h1>
  </div>
</section>
```

### Nachher:
```tsx
<AttioSection variant="default" background="white">
  <AttioContainer size="xl">
    <h1 className={AttioTypography.h2}>Title</h1>
  </AttioContainer>
</AttioSection>
```

---

## ✅ Vorteile

1. **Konsistenz:** Einheitliche Design-Tokens überall
2. **Wartbarkeit:** Zentrale Änderungen wirken sich auf alle Komponenten aus
3. **Type-Safety:** TypeScript-Interfaces für alle Props
4. **Flexibilität:** Varianten für verschiedene Use Cases
5. **Attio-Standard:** Exakt wie Attio.com implementiert

---

**Status: Ready to use! 🚀**

Nutze diese Komponenten, um konsistent Attio-Level Design zu erreichen.

