# 🧹 Cleanup Guide - Entfernung von Gradient-Effekten

## Ziel
Ersetze alle Gradient-Effekte, Blur-Orbs und harte Schatten durch Attio's monochromatisches Design.

---

## 🔍 Gefundene Problemstellen

### 1. CTA Section (`components/sections/cta-section.tsx`)

**Zu entfernen:**
- Gradient Orbs (`bg-blue-500/20 blur-3xl`)
- Interactive Gradient Spotlight
- Gradient Text (`bg-gradient-to-r from-blue-400...`)

**Ersetzen durch:**
- `bg-attio-gray` für Hintergrund
- Solid Colors für Text
- Subtile Grid-Patterns (optional)

### 2. Video Demo Section (`components/sections/video-demo-section.tsx`)

**Zu entfernen:**
- Background Orbs (`bg-accent-blue/5 blur-3xl`)
- Gradient Overlays (`bg-gradient-to-t from-black/60...`)

**Ersetzen durch:**
- `bg-white` oder `bg-attio-gray`
- Subtile Borders statt Gradients

### 3. Workflow Section (`components/sections/workflow-section.tsx`)

**Zu entfernen:**
- Gradient Cards (`bg-gradient-to-br from-blue-500/20...`)

**Ersetzen durch:**
- `bg-white border border-gray-200`
- `shadow-attio-card`

### 4. Data Enrichment Section (`components/sections/data-enrichment-section.tsx`)

**Zu entfernen:**
- Gradient Icons (`bg-gradient-to-br from-blue-500/20...`)

**Ersetzen durch:**
- `bg-gray-50 border border-gray-200`

---

## 📝 Cleanup-Patterns

### Pattern 1: Gradient Backgrounds

**Vorher:**
```tsx
<div className="bg-gradient-to-r from-blue-500 to-purple-500">
```

**Nachher:**
```tsx
<div className="bg-attio-gray">
```

### Pattern 2: Blur Orbs

**Vorher:**
```tsx
<div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
```

**Nachher:**
```tsx
{/* Entfernen oder ersetzen durch subtiles Grid-Pattern */}
<div className="absolute inset-0 opacity-[0.02]">
  <div className="w-full h-full" style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }} />
</div>
```

### Pattern 3: Gradient Text

**Vorher:**
```tsx
<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
```

**Nachher:**
```tsx
<span className="text-attio-text font-semibold">
```

### Pattern 4: Gradient Cards

**Vorher:**
```tsx
<div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-black/10">
```

**Nachher:**
```tsx
<div className="bg-white border border-attio-border rounded-xl shadow-attio-card">
```

### Pattern 5: Harte Schatten

**Vorher:**
```tsx
<div className="shadow-xl">
```

**Nachher:**
```tsx
<div className="shadow-attio-card">
```

---

## 🎯 Schritt-für-Schritt Cleanup

### Schritt 1: CTA Section

```tsx
// Entferne alle GradientOrb Komponenten
// Entferne Interactive Gradient Spotlight
// Ersetze Gradient Text durch solid colors

// Vorher:
<section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background">
  <GradientOrb className="..." />
  <motion.div className="bg-gradient-to-r..." />
</section>

// Nachher:
<section className="relative py-16 sm:py-24 md:py-32 bg-attio-gray">
  {/* Optional: Subtiles Grid-Pattern */}
</section>
```

### Schritt 2: Video Section

```tsx
// Entferne Background Orbs
// Ersetze Gradient Overlays durch Borders

// Vorher:
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 blur-3xl" />

// Nachher:
{/* Entfernt */}
```

### Schritt 3: Feature Cards

```tsx
// Ersetze alle Gradient Cards

// Vorher:
<div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">

// Nachher:
<div className="p-6 rounded-xl bg-white border border-attio-border shadow-attio-card">
```

---

## ✅ Checkliste

- [ ] CTA Section: Gradient Orbs entfernt
- [ ] Video Section: Background Orbs entfernt
- [ ] Workflow Section: Gradient Cards ersetzt
- [ ] Data Enrichment: Gradient Icons ersetzt
- [ ] Alle `bg-gradient-*` Klassen entfernt
- [ ] Alle `blur-3xl` Effekte entfernt
- [ ] Alle `shadow-xl` durch `shadow-attio-card` ersetzt
- [ ] Gradient Text durch solid colors ersetzt

---

## 🚀 Quick Fix Script

Falls du viele Dateien auf einmal ändern willst, nutze diese Regex-Patterns:

**Find:**
- `bg-gradient-to-[a-z]+ from-[a-z]+-[0-9]+/[0-9]+ to-[a-z]+-[0-9]+/[0-9]+`
- `blur-3xl`
- `shadow-xl`

**Replace:**
- `bg-attio-gray` (für Backgrounds)
- `shadow-attio-card` (für Schatten)
- Entfernen (für Blur-Effekte)

---

**Status: Cleanup-Patterns definiert! 🧹**

Nutze diese Patterns, um Schritt für Schritt alle Gradient-Effekte zu entfernen.

