# Attio Grid Pattern System - Implementierungs-Guide

## Übersicht

Das Grid-Pattern-System verbindet alle Komponenten visuell mit subtilen grauen Linien im Hintergrund, genau wie auf attio.com. Dies verhindert, dass leere Räume zwischen Komponenten leer wirken.

## Komponenten

### 1. CSS Utilities (`app/globals.css`)

Das System bietet folgende CSS-Klassen:

- **`.attio-grid-pattern`** - Fügt ein subtiles Grid-Pattern (40x40px) zum Hintergrund hinzu
- **`.attio-section-connector`** - Zeichnet eine horizontale Verbindungslinie oben
- **`.attio-section-connector-bottom`** - Zeichnet eine horizontale Verbindungslinie unten
- **`.attio-section-connector-both`** - Zeichnet Verbindungslinien oben und unten
- **`.attio-vertical-connector`** - Zeichnet eine vertikale Verbindungslinie links

### 2. AttioWrapper Komponente

Die `AttioWrapper` Komponente wurde erweitert mit:

```tsx
<AttioWrapper
  variant="section"
  showGridPattern={true}      // Optional: Grid-Pattern aktivieren
  showConnector={true}         // Optional: Connector aktivieren
  connectorPosition="top"      // "top" | "bottom" | "both"
>
  {children}
</AttioWrapper>
```

### 3. SectionWrapper Komponente

Eine einfache Wrapper-Komponente für Sections:

```tsx
<SectionWrapper
  showConnector={true}
  connectorPosition="top"     // "top" | "bottom" | "both" | "none"
  showGridPattern={false}
>
  <YourSection />
</SectionWrapper>
```

### 4. SVG Grid Background (Optional)

Für mehr Kontrolle über das Grid-Pattern:

```tsx
import { AttioGridBackground } from "@/components/ui/attio-grid-background"

<div className="relative">
  <AttioGridBackground 
    opacity={0.03}
    size={40}
    color="rgba(0, 0, 0, 0.08)"
  />
  {content}
</div>
```

## Verwendung

### In `app/page.tsx`

```tsx
<main className="min-h-screen bg-background attio-grid-pattern relative">
  {/* Hero - Kein Connector oben */}
  <HeroAttio />
  
  {/* Alle weiteren Sections mit Connector */}
  <div className="attio-section-connector">
    <FeaturesBentoGridAttio />
  </div>
  
  <div className="attio-section-connector">
    <IntegrationsSection />
  </div>
  
  {/* ... weitere Sections ... */}
</main>
```

### In einzelnen Sections

Sections können das Grid-Pattern auch lokal aktivieren:

```tsx
export function MySection() {
  return (
    <AttioWrapper 
      variant="section"
      showGridPattern={true}
      showConnector={true}
      connectorPosition="top"
    >
      {/* Content */}
    </AttioWrapper>
  )
}
```

## Design-Tokens

- **Grid Size**: 40px (kann angepasst werden)
- **Opacity**: 0.03 (sehr subtil)
- **Line Color**: `rgba(0, 0, 0, 0.08)`
- **Connector Opacity**: 0.06 (etwas sichtbarer als Grid)

## Best Practices

1. **Globales Pattern**: Nur einmal auf dem `<main>` Element verwenden
2. **Connectors**: Zwischen allen Sections verwenden (außer der ersten)
3. **Subtil bleiben**: Die Opacity-Werte sind absichtlich sehr niedrig
4. **Performance**: CSS-basierte Lösung ist performanter als SVG für große Flächen
5. **Responsive**: Das Grid-Pattern skaliert automatisch

## Anpassungen

Um das Grid-Pattern anzupassen, editiere die CSS-Variablen in `app/globals.css`:

```css
.attio-grid-pattern::before {
  opacity: 0.03;                    /* Anpassen für mehr/weniger Sichtbarkeit */
  background-size: 40px 40px;       /* Grid-Größe ändern */
  /* ... */
}
```

## Kompatibilität

- ✅ Funktioniert mit allen bestehenden Sections
- ✅ Kompatibel mit AttioWrapper
- ✅ Keine Breaking Changes
- ✅ Sections mit eigenem Grid-Pattern (z.B. CTA-Section) funktionieren weiterhin

