# Attio Homepage - Detaillierte Visuelle Beschreibung
## Vollständige Sektion-für-Sektion Analyse für visuelle Rekonstruktion

---

## 🎨 **GESAMTSTIL & DESIGN-SPRACHE**

### Visueller Eindruck
Die Attio-Homepage wirkt wie ein **präzises technisches Blaupausen-Dokument**:
- **Minimalistisch-monochromatisch**: Dominant Weiß (#FFFFFF, #FAFAFB) mit subtilen Grautönen
- **Technisch-präzise**: Jedes Element hat einen klaren Zweck, keine Dekoration
- **Hohe Informationsdichte**: Viel Content auf engem Raum, aber durch klare Hierarchie organisiert
- **"Millimeterpapier-Ästhetik"**: Feine Linien, Raster-Layouts, technische Präzision

### Farbpalette
- **Hintergrund**: `#FAFAFB` bis `#FFFFFF` (sehr helles Grau bis Weiß)
- **Text Primär**: Fast Schwarz (`#0A0A0A` oder ähnlich)
- **Text Sekundär**: Dunkelgrau (`#6B7280` oder `text-tertiary-foreground`)
- **Borders**: Extrem subtil - `#E6E7EA` oder `border-subtle-stroke` (0.5px Linien)
- **Akzente**: Nur für Bedeutung - Lila (#8B5CF6), Grün (#10B981), Blau (#3B82F6), Pink (#EC4899)
- **Status-Badges**: 
  - "Excellent" → Lila/Violett
  - "Good" → Grün
  - "Medium" → Hellblau

### Typografie-System

#### Schriftarten
1. **Inter / Inter Display** (Sans-Serif)
   - Hauptschrift für UI, Navigation, Body-Text
   - Inter Display für große Überschriften (fetter, kompakter)
   - Größen: 13px (Sidebar), 15px (Nav), 16-18px (Body), 20-24px (Karten-Titel), 48-72px (Hero)

2. **Tiempos Text** (Serif)
   - Sparsam eingesetzt für Zitate, redaktionelle Elemente
   - Verleiht Eleganz und Kontrast

3. **JetBrains Mono** (Monospace)
   - Für Zahlen, Code-Snippets, technische Labels
   - In Grafiken und Datenvisualisierungen

#### Typografie-Hierarchie
- **H1 (Hero)**: `Inter Display`, `font-bold` oder `font-semibold`, `text-heading-xl` (ca. 64-72px), `tracking-tight`
- **H2 (Sektionen)**: `Inter Display`, `font-semibold`, ca. 36-48px, `tracking-tight`
- **H3 (Karten)**: `Inter Display`, `font-medium`, ca. 20-24px
- **Body**: `Inter`, `font-normal`, ca. 16-18px, `text-tertiary-foreground`
- **Small/Caption**: `Inter`, ca. 13-14px, `text-tertiary-foreground`

---

## 📐 **SPACING-SYSTEM**

### Vertikale Abstände (Padding/Margin)
- **Hero-Sektion**: `py-24` bis `py-40` (96px - 160px vertikal)
- **Sektionen-Abstand**: `py-20` bis `py-32` (80px - 128px)
- **Element-Abstand**: `gap-4` bis `gap-8` (16px - 32px)
- **Karten-Innenabstand**: `p-6` bis `p-8` (24px - 32px)
- **Button-Padding**: `px-6 py-3` (24px horizontal, 12px vertikal)

### Horizontale Abstände
- **Container-Max-Breite**: `max-w-7xl` (1280px) zentriert
- **Grid-Gap**: `gap-px` (1px) für Bento-Grids (kein Gap, nur Borders)
- **Nav-Item-Gap**: `gap-x-9` (36px zwischen Nav-Links)

---

## 🏗️ **SEKTION 1: TOP BANNER (Ankündigungs-Leiste)**

### Position & Layout
- **Position**: Ganz oben, über dem Header, `sticky` oder `fixed top-0`
- **Breite**: Vollbreite (`w-full`)
- **Höhe**: Ca. 40-48px (`h-10` oder `h-12`)
- **Z-Index**: Sehr hoch (`z-50`)

### Visuelles Design
- **Hintergrund**: Schwarz (`#000000` oder `bg-black`)
- **Text**: Weiß (`text-white`)
- **Layout**: Flexbox, `justify-between`, `items-center`
- **Padding**: `px-4` oder `px-6` horizontal

### Inhalt (Links nach Rechts)
1. **Link-Text** (Links):
   - Text: "Meet the Attio Developer Platform →" oder ähnlich
   - Schrift: `Inter`, ca. 14px, `font-medium`
   - Icon: Pfeil nach rechts (`→` oder SVG)
   - Hover: Leichte Opacity-Änderung

2. **Close-Button** (Rechts):
   - Icon: "X" (Kreuz) in weiß
   - Größe: Ca. 20x20px
   - Hover: Leichte Graufärbung

### Animation
- **Erscheinen**: Slide-down von oben (`translate-y-[-100%]` → `translate-y-0`)
- **Schließen**: Slide-up nach oben
- **Transition**: `transition-transform duration-300 ease-in-out`

---

## 🧭 **SEKTION 2: HEADER / NAVIGATION**

### Position & Layout
- **Position**: `sticky top-0` (oder unter Top Banner: `sticky top-[48px]`)
- **Hintergrund**: Halbtransparent mit Blur (`backdrop-blur-md`, `bg-white/95` oder `bg-primary-background/95`)
- **Höhe**: Ca. 64-72px (`h-16` oder `h-18`)
- **Padding**: `px-4 sm:px-6 lg:px-8` horizontal
- **Border**: Sehr subtiler Bottom-Border (`border-b border-white/5`)

### Layout-Struktur (3-Spalten)
```
[Logo]  [Navigation Links]  [CTA Buttons]
```

### 1. Logo (Links)
- **Element**: SVG-Logo "attio"
- **Größe**: Ca. 100-120px breit, 32-40px hoch
- **Farbe**: Schwarz (`text-black`)
- **Position**: Linksbündig, `flex items-center`

### 2. Navigation (Mitte, zentriert)
- **Layout**: Horizontale Liste (`flex`, `gap-x-9` = 36px Abstand)
- **Items**: 
  - "Platform" (mit Chevron-Down Icon)
  - "Resources" (mit Chevron-Down Icon)
  - "Customers"
  - "Pricing"
- **Typografie**: 
  - `Inter`, ca. 15px (`text-[15px]`)
  - `font-medium`
  - Farbe: Dunkelgrau (`text-gray-700` oder `text-primary-foreground`)
- **Hover-Effekt**: 
  - Text-Farbe wird dunkler
  - Subtile Unterstreichung möglich
  - `transition-colors duration-200`

### 3. CTA-Buttons (Rechts)
- **Layout**: Flexbox, `gap-3` (12px Abstand)
- **Button 1 - "Sign in"**:
  - Variant: Ghost/Outline
  - Hintergrund: Transparent
  - Border: `border border-gray-300` (1px, hellgrau)
  - Text: Dunkelgrau
  - Padding: `px-4 py-2`
  - Radius: `rounded-lg` (8px)
  - Hover: Hintergrund wird leicht grau (`bg-gray-50`)

- **Button 2 - "Start for free"**:
  - Variant: Primary/Solid
  - Hintergrund: Schwarz (`bg-black`)
  - Text: Weiß (`text-white`)
  - Padding: `px-6 py-2.5`
  - Radius: `rounded-lg` (8-10px)
  - Hover: Leichte Helligkeitsänderung oder `bg-gray-900`
  - Font: `font-medium`

---

## 🎯 **SEKTION 3: HERO-SEKTION**

### Position & Layout
- **Position**: Direkt unter Header, zentriert
- **Container**: `max-w-4xl` oder `max-w-5xl` zentriert
- **Padding**: `pt-24 pb-16` (96px oben, 64px unten) oder `py-40` (160px)
- **Text-Ausrichtung**: Zentriert (`text-center`)

### Elemente (von oben nach unten)

#### 1. Ankündigungs-Pill (Badge)
- **Position**: Über der Hauptüberschrift, zentriert
- **Layout**: Inline-Flex, `items-center`, `gap-2`
- **Hintergrund**: Sehr helles Grau (`bg-gray-100` oder `bg-white-100`)
- **Border**: Feiner grauer Rand (`border border-gray-200` oder `border-weak-stroke`)
- **Padding**: `px-4 py-2` oder `px-5 py-2.5`
- **Radius**: `rounded-full` (Pill-Shape)
- **Inhalt**:
  - Kleines Icon (z.B. Blitz oder Info-Icon), ca. 12x12px
  - Text: "Explore our integration with Granola" oder "Meet the Attio Developer Platform"
  - Pfeil-Icon nach rechts (`→`)
- **Typografie**: `Inter`, ca. 14px, `font-medium`, `text-gray-700`
- **Hover**: Leichte Hintergrund-Änderung

#### 2. Hauptüberschrift (H1)
- **Text**: "Customer relationship magic."
- **Typografie**:
  - `Inter Display` (oder `Inter` mit `font-bold`)
  - Größe: `text-6xl` bis `text-7xl` (64px - 72px auf Desktop)
  - `font-bold` oder `font-semibold`
  - `tracking-tight` (negativer Letter-Spacing)
  - Farbe: Fast Schwarz (`text-gray-900` oder `text-primary-foreground`)
- **Layout**: Zentriert, `mb-4` oder `mb-6` (Abstand nach unten)
- **Responsive**: 
  - Mobile: `text-3xl` (30px)
  - Tablet: `text-4xl` (36px)
  - Desktop: `text-6xl` (64px)

#### 3. Subheadline (Untertitel)
- **Text**: "Attio is the AI-native CRM for GTM builders."
- **Typografie**:
  - `Inter`, `font-normal`
  - Größe: `text-lg` bis `text-xl` (18px - 20px)
  - Farbe: Dunkelgrau (`text-gray-600` oder `text-tertiary-foreground`)
  - `max-w-2xl` (begrenzte Breite für Lesbarkeit)
  - Zentriert
- **Abstand**: `mb-8` oder `mb-10` (32px - 40px nach unten)

#### 4. Call-to-Action Buttons
- **Layout**: Flexbox, `flex-row`, `gap-4` (16px Abstand), zentriert
- **Button 1 - "Start for free"** (Primary):
  - Hintergrund: Schwarz (`bg-black`)
  - Text: Weiß (`text-white`)
  - Padding: `px-8 py-3.5`
  - Radius: `rounded-lg` (10px)
  - Font: `font-medium`, ca. 16px
  - Hover: `bg-gray-900`, leichte Scale (`scale-[1.02]`)
  - Transition: `transition-all duration-200`

- **Button 2 - "Talk to sales"** (Secondary):
  - Hintergrund: Weiß (`bg-white`)
  - Border: `border border-gray-300` (1px)
  - Text: Dunkelgrau (`text-gray-700`)
  - Padding: `px-8 py-3.5`
  - Radius: `rounded-lg` (10px)
  - Font: `font-medium`, ca. 16px
  - Hover: Hintergrund wird leicht grau (`bg-gray-50`), Border wird dunkler

---

## 🖼️ **SEKTION 4: UI-SHOWCASE / PRODUCT DEMO**

### Position & Layout
- **Position**: Direkt unter Hero, vollbreite Sektion
- **Hintergrund**: Weiß oder sehr helles Grau (`bg-white` oder `bg-gray-50`)
- **Padding**: `py-12` bis `py-20` (48px - 80px vertikal)
- **Container**: `max-w-7xl` zentriert

### Visuelle Struktur

#### Hauptcontainer (Fenster-Rahmen)
- **Design**: Simuliert ein Browser-Fenster oder App-Interface
- **Hintergrund**: Weiß (`bg-white`)
- **Border**: Feiner grauer Rand (`border border-gray-200`)
- **Radius**: `rounded-xl` (12px) oder `rounded-2xl` (16px)
- **Shadow**: Großer, weicher Schatten (`shadow-2xl` oder `shadow-[0px_2px_6px_0px_rgba(28,40,64,0.06)]`)
- **Overflow**: `overflow-hidden` (für abgerundete Ecken)

#### Inhalt des Fensters

##### A) Tab-Navigation (oben im Fenster)
- **Position**: Innerhalb des Fensters, oben
- **Hintergrund**: Sehr helles Grau (`bg-gray-50`)
- **Layout**: Flexbox, horizontale Tabs
- **Tabs**: 
  - "Data" (aktiv - mit dunkler Unterstreichung)
  - "Workflows"
  - "Reporting"
  - "Pipeline"
- **Typografie**: `Inter`, ca. 14px, `font-medium`
- **Active Tab**: 
  - Text: Dunkler (`text-gray-900`)
  - Border-Bottom: 2px, schwarz (`border-b-2 border-black`)
- **Inactive Tabs**: 
  - Text: Grau (`text-gray-500`)
  - Hover: Text wird dunkler

##### B) Linke Sidebar (innerhalb des Fensters)
- **Position**: Links, ca. 240-280px breit
- **Hintergrund**: Sehr helles Grau (`bg-gray-50` oder `bg-[#FAFAFB]`)
- **Padding**: `p-4` (16px)
- **Border-Right**: Feine Linie (`border-r border-gray-200`)

**Inhalt der Sidebar:**

1. **"Basepoint" Dropdown** (oben):
   - Hintergrund: Dunkelgrau (`bg-gray-800` oder `bg-gray-900`)
   - Text: Weiß
   - Padding: `px-3 py-2`
   - Radius: `rounded-md` (6px)
   - Chevron-Down Icon rechts
   - Dokument-Icon links

2. **"Quick actions" Sektion**:
   - Header: "Quick actions" in klein (`text-xs`, `text-gray-500`)
   - Icons: Tastaturkürzel-Icon (⌘Q) und Such-Icon

3. **Navigationsliste**:
   - Vertikale Liste, `space-y-1` (4px Abstand)
   - Jedes Item:
     - Icon links (ca. 16x16px)
     - Text in der Mitte (`Inter`, 14px)
     - Checkbox oder Chevron rechts (optional)
   - Items: "Notifications", "Tasks", "Emails", "Reports", "Automations"
   - Hover: Hintergrund wird leicht grau (`bg-gray-100`)

4. **"Favorites" Sektion**:
   - Header mit Chevron-Down
   - Items: "Onboarding pipeline", "Top of funnel", "RevOps workflows"
   - Jedes mit Icon (Stern, Tortendiagramm, Zahnrad)

5. **"Records" Sektion**:
   - Header mit Chevron-Down
   - (Weitere Items)

##### C) Hauptbereich (rechts der Sidebar)
- **Position**: Rechts, nimmt restliche Breite ein
- **Hintergrund**: Weiß (`bg-white`)
- **Padding**: `p-6` (24px)

**Inhalt:**

1. **Header-Bar** (oben):
   - Layout: Flexbox, `justify-between`, `items-center`
   - Links: "Companies" Text + Info-Icon
   - Rechts: Profilbilder (2 kleine Avatare) + "+1" Badge + Sprechblasen-Icon

2. **Toolbar/Filter-Bar**:
   - Layout: Flexbox, `gap-4`, `items-center`
   - Buttons: 
     - "Top companies" (mit grünem Plus-Icon, Chevron)
     - "View settings" (mit Zahnrad-Icon)
     - "Import / Export" (mit Download-Icon, Chevron)
   - Filter-Leiste:
     - "Sorted by Last email interaction" (mit Filter-Icon)
     - "Advanced filter" (mit Badge "3" und Plus-Icon)

3. **Datentabelle**:
   - **Layout**: Tabelle mit mehreren Spalten
   - **Spalten-Header**:
     - "Company" (mit Checkbox und Plus-Icon)
     - "Domains" (mit Globus-Icon)
     - "Associated deals" (mit Handschlag-Icon)
     - "ICP Fit" (mit Herz-Icon)
     - "AI"
   - **Tabellenzeilen**:
     - Jede Zeile: `h-16` (64px Höhe)
     - Checkbox links
     - Company-Logo (ca. 32x32px) + Name
     - Domain als blauer Link
     - Deal-Informationen
     - ICP Fit Badge (farbig: Lila/Blau/Grün)
   - **Beispiele**: Vercel, DigitalOcean, GitHub, Stripe, Figma, Intercom, Segment

##### D) Schwebende Feature-Cards (über dem Fenster)
- **Position**: `absolute`, über bestimmten Bereichen des Fensters
- **Design**: Kleine Karten mit Schatten
- **Beispiel**: "Revenue growth" Card
  - Hintergrund: Weiß
  - Border: Feiner grauer Rand
  - Radius: `rounded-lg` (8px)
  - Shadow: `shadow-lg`
  - Inhalt: Balkendiagramm in bunten Farben (Lila, Gelb, Pink)
  - Typografie: Titel + Zahlen

---

## 🏢 **SEKTION 5: "TRUSTED BY" (Social Proof)**

### Position & Layout
- **Position**: Unter dem UI-Showcase
- **Hintergrund**: Weiß oder sehr helles Grau
- **Padding**: `py-20` (80px vertikal)
- **Container**: `max-w-7xl` zentriert

### Inhalt
- **Überschrift** (optional): "Trusted by" oder ähnlich, zentriert, klein (`text-sm`, `text-gray-500`)
- **Logo-Grid**:
  - Layout: Flexbox oder Grid, `grid-cols-6` oder `flex-wrap`
  - Logos: OpenAI, Replicate, ElevenLabs, etc.
  - **Stil**: 
    - Monochromatisch (grau/schwarz) für Konsistenz
    - Opacity: `opacity-60` (60% Transparenz)
    - Hover: `opacity-100`
  - **Größe**: Jedes Logo ca. 120-160px breit
  - **Abstand**: `gap-8` oder `gap-12` (32px - 48px)

---

## 🎨 **SEKTION 6: FEATURE-SEKTION - "POWERFUL PLATFORM" (Bento Grid)**

### Position & Layout
- **Position**: Unter "Trusted By"
- **Hintergrund**: Sehr helles Grau (`bg-[#FAFAFB]` oder `bg-gray-50`)
- **Padding**: `py-24` bis `py-32` (96px - 128px)
- **Container**: `max-w-7xl` zentriert

### Überschrift-Bereich (über dem Grid)
- **Layout**: Links oben im Grid-Bereich
- **"Overline"**: "01 Powerful platform" oder ähnlich
  - Typografie: `Inter`, `text-xs` oder `text-sm`, `text-gray-500`, `uppercase`, `tracking-wider`
- **Hauptüberschrift**: "GTM at full throttle."
  - Typografie: `Inter Display`, `text-4xl` bis `text-5xl` (36px - 48px), `font-semibold`, `tracking-tight`
  - Farbe: Fast Schwarz

### Bento-Grid-Layout

#### Grid-Struktur
- **Layout**: CSS Grid, `grid-cols-12` (12 Spalten)
- **Gap**: `gap-px` (1px) - **KEIN** großer Gap, nur feine Linien
- **Borders**: Jede Kachel hat `border-[0.5px] border-gray-200` oder `border-subtle-stroke`
- **Hintergrund**: Sehr helles Grau (`bg-[#FAFAFB]` oder `#FDFDFD`)

#### Kachel-Beispiele (mit Spalten-Span)

**Kachel 1: "Automate everything"** (z.B. `col-span-4 row-span-2`)
- **Hintergrund**: Weiß (`bg-white`)
- **Padding**: `p-6` (24px)
- **Inhalt**:
  - **Titel**: "Automate everything"
    - Typografie: `Inter Display`, `text-xl` (20px), `font-semibold`
  - **Beschreibung**: "Build workflows that..." 
    - Typografie: `Inter`, `text-base` (16px), `text-gray-600`
  - **Visuelles Element**: Workflow-Editor
    - Kleine Boxen ("Trigger", "Condition", "Action")
    - Verbunden mit Linien (SVG oder CSS)
    - Farbige Icons (Blitz für Trigger, etc.)
    - Radius: `rounded-md` (6px) für Boxen

**Kachel 2: "Connect any type of data"** (z.B. `col-span-3 row-span-1`)
- **Hintergrund**: Weiß
- **Padding**: `p-6`
- **Inhalt**:
  - **Titel**: "Connect any type of data"
  - **Visuelles Element**: Icons von Datenquellen (E-Mail, Kalender, etc.)
    - Icons fließen zur Mitte
    - Animation möglich (sanfte Bewegung)

**Kachel 3: "Deploy AI"** (z.B. `col-span-5 row-span-2`)
- **Hintergrund**: Weiß
- **Padding**: `p-6`
- **Inhalt**:
  - **Titel**: "Deploy AI"
  - **Visuelles Element**: Chat-Dialog oder "Enrichment"-Karte
    - Zeigt automatisches Ausfüllen von Daten
    - Beispiel: Fehlende E-Mail-Adressen werden ergänzt
    - Farbige Highlights (z.B. Grün für erfolgreiche Enrichment)

**Weitere Kacheln** (variieren in Größe):
- Jede Kachel folgt demselben Muster:
  - Weißer Hintergrund
  - Feine graue Borders
  - Titel (fett, 20-24px)
  - Beschreibung (normal, 16px, grau)
  - Visuelles Element (Icon, Diagramm, Mini-UI)

### Typografie in Kacheln
- **Titel**: `Inter Display`, `font-semibold`, ca. 20-24px, fast schwarz
- **Beschreibung**: `Inter`, `font-normal`, ca. 16px, `text-gray-600`
- **Labels/Code**: `JetBrains Mono`, ca. 12-14px, für technische Elemente

---

## 📊 **SEKTION 7: WEITERE FEATURE-SEKTIONEN**

### Typische Struktur weiterer Sektionen

#### Beispiel: "AI-Powered Insights"
- **Layout**: 2-Spalten (Text links, Visual rechts) oder umgekehrt
- **Hintergrund**: Weiß
- **Padding**: `py-24` (96px)
- **Container**: `max-w-7xl`, `grid grid-cols-2 gap-12`

**Linke Spalte (Text)**:
- **Overline**: "02 AI-Powered" (klein, grau, uppercase)
- **Überschrift**: Große Überschrift
- **Beschreibung**: Mehrere Absätze
- **CTA-Button**: "Learn more" oder ähnlich

**Rechte Spalte (Visual)**:
- Screenshot oder animierte Grafik
- Radius: `rounded-xl` (12px)
- Shadow: `shadow-2xl`

---

## 🎬 **SEKTION 8: TESTIMONIALS / SOCIAL PROOF**

### Position & Layout
- **Hintergrund**: Sehr helles Grau oder Weiß
- **Padding**: `py-24` (96px)
- **Container**: `max-w-6xl` zentriert

### Inhalt
- **Überschrift**: "Loved by teams at..." (zentriert)
- **Testimonial-Cards**:
  - Layout: Grid, `grid-cols-3`, `gap-6`
  - Jede Card:
    - Hintergrund: Weiß
    - Border: Feiner grauer Rand
    - Radius: `rounded-xl` (12px)
    - Padding: `p-6`
    - Inhalt:
      - Zitat (große Anführungszeichen, `Tiempos Text` möglich)
      - Autor-Info: Profilbild + Name + Titel
      - Company-Logo (klein, unten)

---

## 🚀 **SEKTION 9: FINAL CTA**

### Position & Layout
- **Position**: Vor Footer
- **Hintergrund**: Schwarz (`bg-black`) oder sehr dunkles Grau
- **Padding**: `py-32` (128px)
- **Text**: Weiß

### Inhalt
- **Überschrift**: "Ready to get started?" (groß, weiß, zentriert)
- **Subheadline**: Beschreibung (grau-weiß, zentriert)
- **CTA-Buttons**: 
  - "Start for free" (weißer Hintergrund, schwarzer Text)
  - "Talk to sales" (transparent, weißer Border)

---

## 🦶 **SEKTION 10: FOOTER**

### Position & Layout
- **Hintergrund**: Sehr dunkles Grau oder Schwarz
- **Padding**: `py-16` (64px)
- **Container**: `max-w-7xl`

### Struktur
- **Layout**: Grid, `grid-cols-4` oder `grid-cols-5`
- **Spalten**:
  - Logo + Beschreibung
  - "Product" Links
  - "Company" Links
  - "Resources" Links
  - "Legal" Links
- **Typografie**: `Inter`, klein (`text-sm`), grau (`text-gray-400`)
- **Bottom-Bar**: Copyright, Social Media Icons

---

## 🎭 **ANIMATIONEN & INTERAKTIONEN**

### Hover-Effekte
- **Buttons**: 
  - Scale: `scale-[1.02]` (2% größer)
  - Transition: `transition-all duration-200`
- **Cards/Kacheln**:
  - Border wird heller (`border-gray-300` → `border-gray-400`)
  - Leichte Shadow-Änderung
- **Links**: 
  - Text-Farbe wird dunkler
  - `transition-colors duration-200`

### Scroll-Animationen
- **Fade-in**: Elemente erscheinen beim Scrollen (`opacity-0` → `opacity-100`)
- **Slide-up**: Elemente schieben sich von unten nach oben
- **Stagger**: Elemente erscheinen nacheinander (z.B. in Grids)

### Spring-Physics (Framer Motion)
- **Typische Werte**: `{ type: "spring", stiffness: 400, damping: 17 }`
- **Verwendung**: Für Buttons, Cards, modale Elemente

---

## 📱 **RESPONSIVE BREAKPOINTS**

- **Mobile** (`sm`): < 640px
  - Hero-Text: `text-3xl` (30px)
  - Grid: `grid-cols-1`
  - Navigation: Hamburger-Menu

- **Tablet** (`md`): 640px - 768px
  - Hero-Text: `text-4xl` (36px)
  - Grid: `grid-cols-2`

- **Desktop** (`lg`): 768px - 1024px
  - Hero-Text: `text-5xl` (45px)
  - Grid: `grid-cols-3` oder `grid-cols-4`

- **Large Desktop** (`xl`): 1024px+
  - Hero-Text: `text-6xl` (64px) oder `text-7xl` (72px)
  - Grid: `grid-cols-12` (Bento-Grid)

---

## 🎯 **ZUSAMMENFASSUNG: VISUELLE METAPHOR**

**Stell dir vor:**
Ein riesiges, weißes **Millimeterpapier** (fast unsichtbare Linien). Darauf sind **präzise Rechtecke** (Kacheln) angeordnet, wie in einem **technischen Blaupausen-Dokument**. In den Kacheln "leben" kleine, **interaktive Software-Elemente**: Ein Balkendiagramm wächst, ein Workflow-Pfad zweigt sich ab, ein Profilbild ploppt auf.

**Alles ist:**
- **Gestochen scharf** (keine Unschärfe, außer bei Backdrop-Blur)
- **Schwarz auf Weiß** (maximaler Kontrast)
- **Farbe nur für Bedeutung** (Status-Badges, nicht zur Dekoration)
- **Präzise Abstände** (mathematisch konsistent)
- **Technische Eleganz** (wie ein Apple-Produkt, aber für B2B-SaaS)

---

## 🔧 **IMPLEMENTIERUNGS-HINWEISE FÜR CURSOR**

### Tailwind-Klassen (Beispiele)
```css
/* Hero-Text */
.text-hero { @apply text-6xl lg:text-7xl font-jakarta font-semibold tracking-tight; }

/* Bento-Grid */
.bento-grid { @apply grid grid-cols-12 gap-px border border-gray-200; }
.bento-cell { @apply bg-white border-[0.5px] border-gray-200 p-6; }

/* Buttons */
.btn-primary { @apply bg-black text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 hover:bg-gray-900 hover:scale-[1.02]; }
.btn-secondary { @apply bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50; }

/* Cards */
.card { @apply bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-gray-300 transition-colors; }
```

### Framer Motion (Beispiele)
```tsx
// Spring-Animation
const springConfig = { type: "spring", stiffness: 400, damping: 17 };

// Stagger-Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};
```

---

**Ende der Beschreibung**

Diese Beschreibung sollte es ermöglichen, die Attio-Homepage pixelgenau nachzubauen. Jede Sektion ist detailliert beschrieben mit:
- Position & Layout
- Farben & Typografie
- Spacing & Abstände
- Interaktive Elemente
- Animationen

