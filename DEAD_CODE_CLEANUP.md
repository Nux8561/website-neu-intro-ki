# 🗑️ Dead Code Cleanup Liste

## 📋 Identifizierte ungenutzte Komponenten

### ❌ Sections die gelöscht werden können:

1. **`components/sections/hero.tsx`** - Nicht verwendet (ersetzt durch `hero-layered.tsx`)
2. **`components/sections/hero-simple.tsx`** - Nicht verwendet
3. **`components/sections/hero-main.tsx`** - Nicht verwendet
4. **`components/sections/hero-attio.tsx`** - Nicht verwendet (ersetzt durch `hero-layered.tsx`)
5. **`components/sections/top-banner.tsx`** - Nicht verwendet
6. **`components/sections/footer.tsx`** - ⚠️ Wird noch verwendet in `app/research/page.tsx` und `app/(marketing)/layout.tsx` - PRÜFEN ob durch `site-footer.tsx` ersetzt werden kann
7. **`components/sections/testimonial-section.tsx`** - Nicht verwendet (ersetzt durch `testimonials-premium.tsx`)
8. **`components/sections/testimonial-section-enhanced.tsx`** - Nicht verwendet
9. **`components/sections/video-section.tsx`** - Nicht verwendet (ersetzt durch `video-demo-section.tsx`)
10. **`components/sections/features-section.tsx`** - Nicht verwendet (ersetzt durch `features-bento.tsx`)
11. **`components/sections/features-bento-grid.tsx`** - Nicht verwendet (ersetzt durch `features-bento.tsx`)
12. **`components/sections/cta-section.tsx`** - Nicht verwendet (ersetzt durch `cta-footer.tsx`)

### ⚠️ Sections die möglicherweise ungenutzt sind (manuell prüfen):

- `components/sections/powerful-platform-section.tsx` - Keine Imports gefunden
- `components/sections/workflow-section.tsx` - Keine Imports gefunden
- `components/sections/data-enrichment-section.tsx` - Keine Imports gefunden
- `components/sections/adaptive-model-section.tsx` - Keine Imports gefunden
- `components/sections/built-for-scale-section.tsx` - Keine Imports gefunden

## 🎯 Empfohlene Aktionen

### Sofort löschen (sicher ungenutzt):
```bash
rm components/sections/hero.tsx
rm components/sections/hero-simple.tsx
rm components/sections/hero-main.tsx
rm components/sections/hero-attio.tsx
rm components/sections/top-banner.tsx
rm components/sections/testimonial-section.tsx
rm components/sections/testimonial-section-enhanced.tsx
rm components/sections/video-section.tsx
rm components/sections/features-section.tsx
rm components/sections/features-bento-grid.tsx
rm components/sections/cta-section.tsx
```

### Prüfen und ggf. ersetzen:
- `components/sections/footer.tsx` - Prüfen ob durch `site-footer.tsx` ersetzt werden kann

### Manuell prüfen (könnten intern verwendet werden):
- Alle anderen Sections in `components/sections/` die nicht in `app/page.tsx` importiert werden

## 📊 Statistiken

- **Sicher ungenutzt:** 11 Dateien
- **Zu prüfen:** 1 Datei (`footer.tsx`)
- **Möglicherweise ungenutzt:** 5 Dateien

