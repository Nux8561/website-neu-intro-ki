# Logo Implementation Guide

## Übersicht

Dieses Dokument beschreibt die Implementierung des professionellen Logo-Systems für IntroKI, einschließlich des IntroKI-Logos und der Logo-Carousels für Partner-Unternehmen.

## IntroKI Logo

### Verwendung

Das IntroKI-Logo ist als wiederverwendbare Komponente implementiert (`components/ui/introki-logo.tsx`) und kann überall verwendet werden:

```tsx
import { IntroKILogo } from "@/components/ui/introki-logo"

// Standard-Verwendung
<IntroKILogo />

// Mit Optionen
<IntroKILogo 
  size="lg"           // sm | md | lg
  variant="light"     // default | monochrome | gradient | light
  showText={true}     // true | false
  animated={true}     // true | false
/>
```

### Varianten

- **default**: Schwarzes Quadrat mit weißem Symbol (für helle Hintergründe)
- **light**: Weißes Quadrat mit schwarzem Symbol (für dunkle Hintergründe)
- **monochrome**: Monochrom-Variante
- **gradient**: Gradient-Text-Variante

### Größen

- **sm**: 20px Icon, `text-base` Text
- **md**: 24px Icon, `text-lg` Text (Standard)
- **lg**: 32px Icon, `text-xl` Text

### Aktuelle Verwendung

Das Logo wird aktuell verwendet in:
- `components/navbar.tsx` - Hauptnavigation
- Footer (geplant)
- Alle Marketing-Seiten (geplant)

## Logo-Carousel System

### Komponente: LogoCarousel

Die `LogoCarousel`-Komponente (`components/ui/logo-carousel.tsx`) bietet:

- ✅ Echte Logo-Bilder mit Next.js Image-Optimierung
- ✅ Automatische Fallback-SVGs wenn Bilder fehlen
- ✅ Graustufen-Filter mit Hover-Effekt
- ✅ Responsive Design
- ✅ Infinite Scroll-Animation
- ✅ Progressive Blur-Effekte

### Verwendung

```tsx
import { LogoCarousel, LogoItem } from "@/components/ui/logo-carousel"

const logos: LogoItem[] = [
  {
    name: "Salesforce",
    imagePath: "/logos/salesforce.svg",
    fallbackSvg: <svg>...</svg>,
    width: 140,
    height: 35,
  },
  // ...
]

<LogoCarousel
  logos={logos}
  title="Vertraut von führenden Unternehmen"
  speed={40}
  speedOnHover={20}
  gap={80}
  grayscale={true}
  showTitle={true}
/>
```

### Logo-Assets hinzufügen

1. **Logo-Bilder hinzufügen:**
   - Füge SVG-Dateien zu `public/logos/` hinzu
   - Benenne sie nach Firmennamen (z.B. `salesforce.svg`)
   - Empfohlene Größe: 120-200px Breite, skalierbar

2. **Logo-Definition aktualisieren:**
   - Füge Logo-Definition zu `companyLogos` in `components/sections/social-proof.tsx` hinzu
   - Oder erstelle eigene Logo-Liste für spezifische Seiten

### Aktuelle Implementierung

- ✅ `components/sections/social-proof.tsx` - Haupt-Logo-Carousel auf der Landing Page
- ✅ `components/pages/customers-page.tsx` - Logo-Grid für Kunden-Seite

## Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Logo-Carousel Responsive-Verhalten

- **Mobile**: Logos werden kleiner dargestellt, weniger Abstand
- **Tablet**: Mittlere Größe, optimierte Abstände
- **Desktop**: Volle Größe, optimale Abstände

### IntroKI-Logo Responsive-Verhalten

- **Mobile**: `size="sm"` empfohlen
- **Tablet**: `size="md"` empfohlen
- **Desktop**: `size="lg"` für Hero-Bereiche

## Best Practices

### Logo-Qualität

1. **SVG bevorzugen**: SVG-Logos sind skalierbar und verlustfrei
2. **Transparenter Hintergrund**: Logos sollten transparenten Hintergrund haben
3. **Original-Farben**: Verwende Original-Farben, Graustufen wird automatisch angewendet
4. **Optimale Größe**: 120-200px Breite für beste Qualität

### Performance

1. **Lazy Loading**: Logos werden automatisch lazy-loaded
2. **Image-Optimierung**: Next.js Image-Komponente optimiert automatisch
3. **Fallback**: SVG-Fallbacks stellen sicher, dass Carousel immer funktioniert

### Accessibility

1. **Alt-Text**: Alle Logos haben beschreibende Alt-Texte
2. **Kontrast**: Graustufen-Filter sorgt für ausreichenden Kontrast
3. **Hover-States**: Klare Hover-Feedback für Interaktivität

## Nächste Schritte

1. ✅ Logo-Carousel-System implementiert
2. ✅ IntroKI-Logo-Komponente erstellt
3. ⏳ Echte Logo-Bilder zu `public/logos/` hinzufügen
4. ⏳ Logo-Carousel auf weiteren Seiten integrieren
5. ⏳ Footer mit IntroKI-Logo aktualisieren

## Dateistruktur

```
components/
  ui/
    introki-logo.tsx          # IntroKI Logo-Komponente
    logo-carousel.tsx          # Logo-Carousel-Komponente
  sections/
    social-proof.tsx           # Social Proof Section mit Logo-Carousel
  pages/
    customers-page.tsx         # Customers Page mit Logo-Grid

public/
  logos/
    README.md                  # Logo-Assets Dokumentation
    salesforce.svg            # (Hinzufügen)
    hubspot.svg               # (Hinzufügen)
    microsoft.svg             # (Hinzufügen)
    # ... weitere Logos
```

## Support

Bei Fragen zur Logo-Implementierung:
1. Siehe `public/logos/README.md` für Logo-Asset-Anforderungen
2. Siehe `components/ui/logo-carousel.tsx` für Komponenten-API
3. Siehe `components/ui/introki-logo.tsx` für Logo-Komponente

