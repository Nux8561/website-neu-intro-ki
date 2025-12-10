# SYSTEM-ANALYSE-DOKUMENTATION: Attio.com + IntroKI.com

**Analysedatum:** 10. Dezember 2024  
**Analysierte Quellen:** 
- https://attio.com (Live-Analyse)
- https://web.introki.app (Live-Analyse)
- Magic MCP Component Library (21st.dev)

---

## 1. SEITENANALYSE

### 1.1 ATTIO.COM - Startseite Architektur

#### A) UI / UX

**Layout-Grid:**
- Container: `max-w-7xl` (1280px) zentriert
- Grid-System: CSS Grid für Dashboard-Bereiche
- Spalten: 3-Spalten-Grid für Feature-Navigation
- Responsive Breakpoints: Mobile-first, dann md: (768px), lg: (1024px)

**Spacing-System:**
- Vertical: `py-24` (96px) zwischen Hauptsektionen
- Horizontal: `px-4 sm:px-6 lg:px-8` (16px → 24px → 32px)
- Interne Abstände: `gap-4` (16px) für Buttons, `gap-6` (24px) für Cards
- Micro-Spacing: `gap-2` (8px) für Icons/Text-Kombinationen

**Typografie-System:**
- **Headlines:** Plus Jakarta Sans, `font-medium`, `tracking-tight`
  - H1: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` (48px → 96px)
  - H2: `text-4xl md:text-5xl` (36px → 48px)
- **Body:** Inter, `font-light` oder `font-normal`
  - Standard: `text-lg md:text-xl` (18px → 20px)
  - Muted: `text-sm` (14px), `text-white/70` oder `text-white/50`
- **Monospace:** IBM Plex Mono für technische Daten
  - Badges: `text-xs font-mono uppercase tracking-wider`

**Icon-Set-Logik:**
- Lucide React, `stroke-width: 1.5px` oder `2px`
- Konsistente Größen: `h-4 w-4` (16px), `h-5 w-5` (20px), `h-6 w-6` (24px)
- Minimalistischer Linienstil

**Viewport-Breakpoints:**
- Mobile: `< 640px` (sm)
- Tablet: `640px - 1024px` (md)
- Desktop: `> 1024px` (lg)
- Large Desktop: `> 1280px` (xl)

**Motion-System:**
- Spring Physics: `stiffness: 400, damping: 17`
- Staggered Animations: `staggerChildren: 0.05` (50ms Delay)
- Entry: `opacity: 0 → 1`, `y: 20 → 0`
- Exit: Reverse der Entry-Animation

**Hover-Logiken:**
- Buttons: `scale-[1.01]` + Border `border-white/10 → border-white/20`
- Links: Text `text-white/70 → text-white`
- Cards: `bg-white/5 → bg-white/10`

**Scroll-Logiken:**
- Smooth Scroll: Lenis mit `duration: 1.2`
- Sticky Navigation: `sticky top-0 z-50`
- Feature Nav: `sticky top-16` (unter Hauptnav)
- Scroll-linked: `useScroll` + `useTransform` für Dashboard-Transitions

#### B) FARBLOGIK

**Primary-Colors:**
- Background: `#0B0C0E` (App Background)
- Surface: `#15171B` (Card/Surface Background)
- Text: `#FFFFFF` (Primary Text)

**Secondary-Colors:**
- Accent: `#FF4538` (Primary Accent), `#FF6B58` (Accent Light)
- Muted Text: `rgba(255, 255, 255, 0.7)` oder `text-slate-400`
- Borders: `rgba(255, 255, 255, 0.1)` (Default), `rgba(255, 255, 255, 0.2)` (Hover)

**Gradient-Systeme:**
- Mesh Gradients: Radial Gradients mit Blur
  - `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15), transparent 50%)`
- Button Gradients: Solid Colors mit Inner Glow
- Background: Subtile Mesh mit `filter: blur(80px)`

**Dark-Mode-System:**
- 100% Dark Mode First
- Keine Light-Mode-Variante
- Kontrast durch Opacity-Variationen, nicht durch Farben

**Kontrast-Logik:**
- Text/Background: Minimum 4.5:1 (WCAG AA)
- Interactive Elements: Helle Akzente auf dunklem Grund
- Borders: Extrem subtil (8-15% Opacity)

#### C) KOMPONENTEN

**Top Banner:**
- Höhe: `h-12` (48px)
- Background: `bg-[#0B0C0E]`
- Border: `border-b border-white/5`
- Content: Link + Close Button (X Icon)
- Animation: Slide-in von oben (`y: -100 → 0`)

**Navbar:**
- Position: `fixed top-0 z-50`
- Background: `bg-background/80 backdrop-blur-xl`
- Höhe: `h-16` (64px)
- Layout: Logo (links) + Navigation (center) + CTAs (rechts)
- Mobile: Hamburger Menu mit Sheet/Drawer

**Hero Section:**
- Min-Height: `min-h-screen`
- Layout: Zentriert, `max-w-5xl`
- Elemente:
  1. Pill Button (optional, oben)
  2. Headline (staggered text reveal)
  3. Sub-headline
  4. CTA Buttons (2 Stück)
- Background: Mesh Gradient + Grid Overlay

**Feature Navigation:**
- Position: `sticky top-16`
- Layout: Horizontal Tabs
- Active State: Unterstreichung mit `layoutId` (Framer Motion)
- Tabs: Data, Workflows, Reporting, Pipeline

**Dashboard Preview:**
- Layout: Grid mit 2 Spalten (Desktop)
- Cards: `rounded-2xl`, `border border-white/10`, `bg-white/5`
- Charts: Bar Chart + Donut Chart mit Framer Motion Animationen
- Toolbar: Icons für Refresh, Add, Share, More

**Cookie Consent:**
- Position: `fixed bottom-4 left-4`
- Background: `bg-white/5 backdrop-blur-md`
- Buttons: Primary (Continue) + Secondary (Reject)

#### D) ANIMATIONSLOGIK

**Entry-Motion:**
- Staggered Text: Wort-für-Wort mit `staggerChildren: 0.05`
- Cards: `opacity: 0 → 1`, `y: 20 → 0` mit Spring
- Charts: Path Animation (`pathLength: 0 → 1`)

**Exit-Motion:**
- Reverse der Entry-Animation
- Banner Close: `y: 0 → -100`

**Transition-Speeds:**
- Fast: `duration: 0.3` (300ms)
- Normal: `duration: 0.6` (600ms)
- Slow: `duration: 1.2` (1200ms)
- Spring: `stiffness: 400, damping: 17`

**Delay-Logik:**
- Sequential: `delay: index * 0.1`
- Staggered: `staggerChildren: 0.05`
- Hero: `delay: 0.2, 0.6, 1.2, 1.4` (sequentiell)

**Micro-Interactions:**
- Button Hover: `scale-[1.01]` + Border brighten
- Button Tap: `scale-[0.98]`
- Link Hover: Text color change
- Card Hover: Background + Border change

**Feedback-Loops:**
- Visual: Immediate color/border changes
- Haptic: Scale animations simulieren physisches Feedback
- Loading: Skeleton States während API-Calls

#### E) LOGIK & ROUTING

**Seitenstruktur:**
```
/ (Home)
├── /platform (Product Platform)
├── /resources (Resources)
├── /customers (Customer Stories)
├── /pricing (Pricing)
└── /developer-platform (Developer Platform)
```

**URL-Routing:**
- Next.js App Router
- Server Components für statische Inhalte
- Client Components für Interaktivität

**Sub-Page-Architektur:**
- Hierarchisch: Hauptnavigation → Dropdown-Menüs → Sub-Pages
- Beispiel: Platform → Features, Integrations, API

**User-Journey-Abläufe:**
1. Landing → Hero Section (Value Proposition)
2. Scroll → Feature Navigation (Product Demo)
3. Scroll → Dashboard Preview (Social Proof)
4. CTA → Sign Up / Talk to Sales

**Entscheidungslogiken:**
- ICP Fit Scoring: Algorithmus-basiert (Excellent/Medium/Good)
- AI Column: "AI is thinking..." → Dynamische Inhalte
- Filter System: Advanced Filter mit Count-Badge

**Funnel-Strukturen:**
- Primary: "Start for free" → Sign Up Flow
- Secondary: "Talk to sales" → Sales Demo Booking
- Tertiary: "Explore integration" → Developer Platform

**Priorisierungssysteme:**
- Dashboard: ICP Fit als primärer Score
- Table: Sortierbar nach verschiedenen Spalten
- AI Recommendations: Implizit durch "AI" Column

---

### 1.2 WEB.INTROKI.APP - Startseite Architektur

#### A) UI / UX

**Layout-Grid:**
- Container: Zentriert, `max-w-5xl` oder `max-w-7xl`
- Hero: Vollbreite mit zentriertem Content
- Background: Vollflächige Animation

**Spacing-System:**
- Hero: `py-20 lg:py-40` (80px → 160px)
- Input + Button: `gap-3` (12px)
- Mode Buttons: `gap-3` (12px), horizontal gruppiert

**Typografie-System:**
- Headlines: Plus Jakarta Sans, `font-semibold` oder `font-bold`
- Body: Inter, `font-light`
- Input: Inter, `text-lg` (18px)

**Icon-Set-Logik:**
- Lucide React
- Mode Icons: Lightning (Schnell), Target (Tiefen), Rocket (Ultra)
- Arrow Icons: `→` für CTAs

**Viewport-Breakpoints:**
- Identisch zu Attio (sm, md, lg, xl)

**Motion-System:**
- Background: Kontinuierliche Animation (Aurora/Shader-Effekt)
- Text: Staggered Reveal (wie Attio)
- Buttons: Spring Physics

**Hover-Logiken:**
- Identisch zu Attio
- Mode Buttons: Background change bei Active State

**Scroll-Logiken:**
- Smooth Scroll (Lenis)
- Fixed Navigation
- Scroll-linked Sections (Video, Features, Dashboard)

#### B) FARBLOGIK

**Primary-Colors:**
- Background: `#0B0C0E` (wie Attio)
- Text: `#FFFFFF`
- Accent: **Blau** (abweichend von Attio's Rot/Pink)
  - Primary Blue: `#3B82F6` oder ähnlich
  - Gradient: Blue → Purple für Background-Animation

**Secondary-Colors:**
- Surface: `#15171B` oder `bg-white/5`
- Borders: `border-white/10`
- Muted: `text-white/70`

**Gradient-Systeme:**
- Aurora/Shader Background: Kontinuierliche Animation
- Blue-Purple Gradients für Glow-Effekte
- Radial Gradients für Background-Patterns

**Dark-Mode-System:**
- 100% Dark Mode (wie Attio)

**Kontrast-Logik:**
- Identisch zu Attio
- Blauer Akzent statt Rot/Pink

#### C) KOMPONENTEN

**Navbar:**
- Identisch zu Attio (Glassmorphism, Sticky)
- Logo: IntroKI mit Icon
- Navigation: Features, Pricing, Enterprise, Careers, FAQ
- CTA: "Kostenlos testen"

**Hero Section:**
- Headline: "KI Vertrieb der nächsten Generation:"
- Sub-headline: "Ihren Vertrieb heute skalieren"
- Description: "KI Vertrieb in unter 60 Sekunden..."
- **Input Field:** Großes Input mit Placeholder
- **Primary CTA:** "Research starten →"
- **Mode Buttons:** Schnell-Modus, Tiefen-Modus, Ultra-Modus

**Video Section:**
- Thumbnail mit Play Button
- Zentriert, großes Format

**Features Section:**
- Aurora Background
- Tab-Navigation (5 Tabs)
- Content Cards mit Icons

**Dashboard Section:**
- "Team Aktivitäten" Überschrift
- Graph/Chart Visualisierung
- Filter-Optionen

**Footer:**
- Links: Product, Unternehmen
- Social Media Icons
- Copyright

#### D) ANIMATIONSLOGIK

**Entry-Motion:**
- Identisch zu Attio (Staggered Text Reveal)
- Background: Kontinuierliche Aurora-Animation

**Exit-Motion:**
- Standard Reverse

**Transition-Speeds:**
- Identisch zu Attio

**Delay-Logik:**
- Sequentiell wie Attio

**Micro-Interactions:**
- Identisch zu Attio
- Mode Buttons: Active State Highlight

**Feedback-Loops:**
- Visual Feedback wie Attio
- Input Focus: Border/Background Change

#### E) LOGIK & ROUTING

**Seitenstruktur:**
```
/ (Home)
├── /features
├── /pricing
├── /enterprise
├── /careers
└── /faq
```

**URL-Routing:**
- Next.js App Router (vermutlich)

**Sub-Page-Architektur:**
- Flache Struktur (keine Dropdowns sichtbar)

**User-Journey-Abläufe:**
1. Landing → Hero mit Input
2. Input eingeben → "Research starten"
3. Mode wählen (Schnell/Tiefen/Ultra)
4. → Research-Ergebnisse / Dashboard

**Entscheidungslogiken:**
- Mode Selection: Beeinflusst Research-Tiefe
- Research Input: Trigger für KI-Analyse

**Funnel-Strukturen:**
- Primary: "Research starten" → Research Flow
- Secondary: "Kostenlos testen" → Sign Up

**Priorisierungssysteme:**
- Mode-basiert: Schnell vs. Tiefen vs. Ultra
- Research-basiert: KI-Analyse pro Input

---

## 2. UI-KOMPONENTEN-LISTE

### 2.1 ATOMIC COMPONENTS (Shadcn/UI Basis)

1. **Button**
   - Variants: default, outline, ghost, secondary
   - Sizes: sm, default, lg, icon
   - Attio-Style: `rounded-full`, Spring-Animationen

2. **Badge**
   - Variants: default, secondary, outline
   - Font: IBM Plex Mono für technische Badges
   - Colors: Status-basiert (Excellent/Medium/Good)

3. **Card**
   - Glassmorphism: `bg-white/5 backdrop-blur-md`
   - Border: `border-white/10`
   - Radius: `rounded-2xl`

4. **Input**
   - Attio-Style: `rounded-full`, `bg-white/5`
   - Placeholder: `text-white/50`
   - Focus: `border-white/20`

5. **Skeleton**
   - Pulse-Animation für Loading States
   - Dark Mode optimiert

### 2.2 COMPOSITE COMPONENTS

1. **TopBanner**
   - Dismissible Banner
   - Slide-in Animation
   - Close Button

2. **Navbar**
   - Sticky Positioning
   - Glassmorphism Background
   - Mobile Menu (Sheet/Drawer)
   - Logo + Navigation + CTAs

3. **Hero**
   - Staggered Text Reveal
   - Input Field (optional, IntroKI-Style)
   - CTA Buttons
   - Background Animation (Background-Paths)

4. **FeatureNav**
   - Sticky Tabs
   - Active Indicator (Framer Motion `layoutId`)
   - Smooth Transitions

5. **DashboardPreview**
   - Grid Layout
   - Chart Components (Bar, Donut)
   - Toolbar mit Icons

6. **SocialProof**
   - Infinite Marquee
   - Logo Slider
   - Progressive Blur Edges

7. **FeatureGrid**
   - Bento Grid Layout
   - Spotlight Cards
   - Staggered Animations

8. **WorkflowSection**
   - Sticky Scroll
   - Scrollytelling
   - Content Transitions

### 2.3 CRM-SPECIFIC COMPONENTS

1. **DataTable**
   - Sortable Columns
   - Row Selection (Checkboxes)
   - Status Badges
   - Sparklines
   - Hover Actions

2. **Pipeline**
   - Kanban Board
   - Drag & Drop
   - Stage Indicators

3. **LeadCard**
   - Avatar Stack
   - Status Badge
   - Quick Actions
   - AI Indicators

4. **ActivityFeed**
   - Timeline Layout
   - Activity Types
   - Filter Options

5. **DashboardMetrics**
   - Metric Cards
   - Charts
   - Real-time Updates

---

## 3. FARB- & MOTION-SYSTEM

### 3.1 FARBPALETTE

```css
/* Attio Color System */
--background: #0B0C0E;
--surface: #15171B;
--accent: #FF4538;
--accent-light: #FF6B58;
--border-subtle: rgba(255, 255, 255, 0.08);
--border-active: rgba(255, 255, 255, 0.15);

/* IntroKI Color System (abweichend) */
--accent-blue: #3B82F6; /* Statt Rot/Pink */
--accent-purple: #8B5CF6; /* Für Gradients */
```

### 3.2 MOTION-TOKENS

```typescript
// Spring Physics
const springConfig = {
  type: "spring",
  stiffness: 400,
  damping: 17,
};

// Stagger Delays
const staggerDelay = 0.05; // 50ms zwischen Kindern

// Transition Durations
const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
};

// Scale Values
const scales = {
  hover: 1.01,
  tap: 0.98,
};
```

---

## 4. ROUTING-STRUKTUR

### 4.1 ATTIO ROUTING

```
/                          → Landing Page
/platform                  → Product Platform
  /platform/features       → Features
  /platform/integrations   → Integrations
  /platform/api            → API Docs
/resources                 → Resources
  /resources/blog          → Blog
  /resources/docs          → Documentation
/customers                 → Customer Stories
/pricing                   → Pricing
/developer-platform        → Developer Platform
```

### 4.2 INTROKI ROUTING

```
/              → Landing Page (mit Research Input)
/features       → Features
/pricing        → Pricing
/enterprise     → Enterprise
/careers        → Careers
/faq            → FAQ
/dashboard      → CRM Dashboard (nach Login)
/research       → Research Results (nach Input)
```

---

## 5. CRM-SYSTEMLOGIK

### 5.1 KERNFUNKTIONEN (Pipedrive-Basis)

1. **Lead Management**
   - Lead Import (CSV, API)
   - Lead Scoring (KI-basiert)
   - Lead Assignment
   - Lead Status Tracking

2. **Pipeline Management**
   - Customizable Stages
   - Deal Value Tracking
   - Win/Loss Analysis
   - Pipeline Forecasting

3. **Contact Management**
   - Contact Database
   - Company Records
   - Relationship Mapping
   - Communication History

4. **Activity Tracking**
   - Calls, Emails, Meetings
   - Notes & Attachments
   - Task Management
   - Calendar Integration

5. **Reporting & Analytics**
   - Sales Performance Metrics
   - Pipeline Reports
   - Activity Reports
   - Custom Dashboards

### 5.2 KI-ERWEITERUNGEN (Über Pipedrive hinaus)

1. **Lead-Priorisierung durch KI-Scoring**
   - ICP Fit Score (Excellent/Medium/Good)
   - Purchase Probability
   - Risk Scoring
   - Dynamic Scoring Updates

2. **Research-Automatisierung**
   - Company Research (60 Sekunden)
   - Contact Enrichment
   - Social Media Analysis
   - News & Event Tracking

3. **Live Coaching im Gespräch**
   - Real-time Call Analysis
   - Sentiment Detection
   - Talking Points Suggestions
   - Objection Handling Tips

4. **Leitfaden-Generierung**
   - AI-generated Call Scripts
   - Email Templates
   - Meeting Agendas
   - Follow-up Sequences

5. **Follow-Up-Automatisierung**
   - Smart Follow-up Timing
   - Personalized Messages
   - Multi-channel Sequences
   - A/B Testing

6. **Pipeline-Optimierung**
   - Stage Transition Predictions
   - Bottleneck Detection
   - Deal Velocity Analysis
   - Churn Risk Alerts

7. **Entscheidungsprognosen**
   - Close Date Predictions
   - Deal Value Estimates
   - Win Probability
   - Next Best Action

8. **Gesprächsbewertung**
   - Call Quality Score
   - Sentiment Analysis
   - Key Topic Extraction
   - Action Item Detection

9. **Vertriebs-Performance-Analyse**
   - Individual Performance Metrics
   - Team Comparisons
   - Skill Gap Analysis
   - Training Recommendations

10. **KI-Empfehlungen**
    - "Wer sollte heute angerufen werden?"
    - "Welche Deals brauchen Aufmerksamkeit?"
    - "Welche Leads sind heiß?"
    - "Welche Aktivitäten sind überfällig?"

---

## 6. KI-ALGORITHMEN-LOGIK

### 6.1 LEAD SCORING ALGORITHMUS

```typescript
interface LeadScore {
  icpFit: "Excellent" | "Medium" | "Good" | "Poor";
  purchaseProbability: number; // 0-100
  riskScore: number; // 0-100
  urgencyScore: number; // 0-100
  overallScore: number; // Weighted combination
}

// Faktoren:
// - Company Size
// - Industry Match
// - Technology Stack
// - Recent Funding
// - Hiring Activity
// - Website Traffic
// - Social Signals
// - Email Engagement
```

### 6.2 RESEARCH-AUTOMATISIERUNG

```typescript
interface ResearchResult {
  companyInfo: CompanyData;
  contacts: Contact[];
  recentNews: Article[];
  socialSignals: SocialData;
  techStack: Technology[];
  fundingInfo: FundingData;
  researchDepth: "Schnell" | "Tiefen" | "Ultra";
  processingTime: number; // < 60 Sekunden
}
```

### 6.3 CALL COACHING ALGORITHMUS

```typescript
interface CallCoaching {
  realTimeSuggestions: Suggestion[];
  sentiment: "positive" | "neutral" | "negative";
  talkingPoints: string[];
  objections: Objection[];
  nextSteps: Action[];
  callScore: number; // 0-100
}
```

### 6.4 PIPELINE-OPTIMIERUNG

```typescript
interface PipelineOptimization {
  bottlenecks: Stage[];
  averageDealVelocity: number;
  predictedCloseDates: Date[];
  churnRisk: Deal[];
  recommendedActions: Action[];
}
```

---

## 7. MCP-TOOL-MAPPING

### 7.1 VERFÜGBARE MCP-TOOLS

1. **21st_magic_component_inspiration**
   - Suche nach UI-Komponenten
   - Inspiration für Design-Patterns
   - Verwendet für: Hero, Dashboard, Tables, Navigation

2. **21st_magic_component_builder**
   - Generiert JSX/Tailwind Code
   - Verwendet für: Neue Komponenten erstellen

3. **21st_magic_component_refiner**
   - Verbessert bestehende Komponenten
   - Verwendet für: Styling-Verfeinerungen

4. **logo_search**
   - Logo-Suche für Social Proof
   - Verwendet für: Customer Logos

### 7.2 GEFUNDENE KOMPONENTEN

1. **Hero Sections:**
   - Hero mit Input Field (IntroKI-Style)
   - Hero mit Testimonial (Attio-Style)
   - Hero mit Background Animation

2. **Dashboard Components:**
   - Live Sales Dashboard
   - Leads Data Table
   - Inline Analytics Table

3. **Navigation:**
   - Floating Header (Glassmorphism)
   - Futuristic Nav (LumaBar)
   - Glassmorphism Sidebar

4. **Marquee/Scrolling:**
   - Infinite Slider
   - Logo Marquee
   - Progressive Blur

5. **Sticky Scroll:**
   - Sticky Scroll Reveal
   - Interactive Scrolling Story
   - Section Component

---

## 8. INSPIRATIONS-QUELLEN

### 8.1 DESIGN-INSPIRATION

1. **Attio.com**
   - Linear-Style Design
   - Dark Mode First
   - High Information Density
   - Physics-based Animations

2. **Linear.app**
   - Bento Grid Layouts
   - Spotlight Effects
   - Smooth Scrolling

3. **Raycast.com**
   - Command Palette UI
   - Keyboard-first Navigation
   - Minimalist Design

### 8.2 CRM-INSPIRATION

1. **Pipedrive**
   - Pipeline Management
   - Activity Tracking
   - Deal Management

2. **HubSpot**
   - Marketing Automation
   - Contact Management
   - Reporting

3. **Salesforce**
   - Enterprise Features
   - Customization
   - App Ecosystem

### 8.3 KI-INSPIRATION

1. **Gong.io**
   - Call Analysis
   - Conversation Intelligence
   - Sales Coaching

2. **Outreach.io**
   - Sales Engagement
   - Sequence Automation
   - Analytics

3. **Chorus.ai**
   - Call Recording
   - AI Insights
   - Team Learning

---

## 9. ABLEITBARE PRODUKT-ARCHITEKTUR

### 9.1 FRONTEND-ARCHITEKTUR

```
/app
├── layout.tsx              → Root Layout (Fonts, Providers)
├── page.tsx                → Landing Page
├── dashboard/
│   ├── page.tsx            → CRM Dashboard
│   ├── leads/
│   │   └── page.tsx        → Leads Table
│   ├── pipeline/
│   │   └── page.tsx        → Pipeline View
│   └── analytics/
│       └── page.tsx        → Analytics Dashboard
├── research/
│   └── page.tsx            → Research Results
└── api/
    ├── leads/
    │   └── route.ts        → Leads API
    └── research/
        └── route.ts         → Research API

/components
├── ui/                     → Shadcn/UI Components
├── sections/               → Page Sections
├── crm/                    → CRM-specific Components
└── providers/              → Context Providers
```

### 9.2 BACKEND-ARCHITEKTUR (Konzeptuell)

```
/api
├── /leads                  → Lead Management
├── /contacts               → Contact Management
├── /deals                  → Deal Management
├── /activities             → Activity Tracking
├── /research               → Research Automation
├── /ai/
│   ├── /scoring            → Lead Scoring
│   ├── /coaching           → Call Coaching
│   └── /recommendations    → AI Recommendations
└── /analytics              → Analytics & Reporting
```

### 9.3 DATENMODELL (Konzeptuell)

```typescript
// Lead
interface Lead {
  id: string;
  company: Company;
  contacts: Contact[];
  status: LeadStatus;
  icpFit: ICPFit;
  aiScore: AIScore;
  research: ResearchData;
  activities: Activity[];
  deals: Deal[];
}

// Company
interface Company {
  id: string;
  name: string;
  domain: string;
  industry: string;
  size: CompanySize;
  techStack: Technology[];
  funding: FundingData;
  news: Article[];
}

// Deal
interface Deal {
  id: string;
  lead: Lead;
  value: number;
  stage: PipelineStage;
  probability: number;
  predictedCloseDate: Date;
  activities: Activity[];
}

// Activity
interface Activity {
  id: string;
  type: "call" | "email" | "meeting" | "note";
  timestamp: Date;
  participants: Contact[];
  content: string;
  aiAnalysis: AIAnalysis;
}
```

### 9.4 KI-SERVICES (Konzeptuell)

```typescript
// Research Service
class ResearchService {
  async researchCompany(input: string, mode: ResearchMode): Promise<ResearchResult>;
  async enrichContact(contact: Contact): Promise<EnrichedContact>;
}

// Scoring Service
class ScoringService {
  async scoreLead(lead: Lead): Promise<LeadScore>;
  async updateScores(): Promise<void>;
}

// Coaching Service
class CoachingService {
  async analyzeCall(call: Call): Promise<CallAnalysis>;
  async provideSuggestions(call: Call): Promise<Suggestion[]>;
}

// Recommendation Service
class RecommendationService {
  async getDailyPriorities(user: User): Promise<Priority[]>;
  async getNextBestAction(lead: Lead): Promise<Action>;
}
```

---

## 10. IMPLEMENTIERUNGS-ROADMAP

### Phase 1: Foundation ✅ ABGESCHLOSSEN
- [x] Next.js Setup (App Router, TypeScript)
- [x] Tailwind Config (Design Tokens, Fonts)
- [x] Design System (Colors: #0B0C0E, #15171B, #FF4538)
- [x] Base Components (Button, Card, Badge, Skeleton)
- [x] Background-Paths Animation
- [x] Smooth Scroll Provider (Lenis)
- [x] UI Utilities (Infinite Slider, Progressive Blur, Marquee, Spotlight Card)

### Phase 2: Landing Page (90% FERTIG)
- [x] Top Banner (Dismissible, Slide Animation)
- [x] Navbar (Sticky, Glassmorphism, Mobile Menu)
- [x] Hero Section (Staggered Text, Input Field, Mode Buttons, CTAs)
- [x] Feature Navigation (Sticky Tabs mit Active Indicator)
- [x] Dashboard Preview (Charts: Bar + Donut)
- [x] Social Proof (Infinite Marquee mit Logos)
- [x] Feature Grid (Bento Grid mit Spotlight Cards)
- [x] Workflow Section (Sticky Scroll, Scrollytelling)
- [ ] Footer (Links, Social Media, Copyright)

### Phase 3: Landing Page Verfeinerungen (AKTUELL)
- [ ] Footer Component (Attio + IntroKI Style)
- [ ] Cookie Consent Banner (Attio Style)
- [ ] Video Section (IntroKI Style mit Play Button)
- [ ] Features Section mit Aurora Background (IntroKI Style)
- [ ] Testimonial Section (Attio Style)
- [ ] CTA Section (Final Call-to-Action)
- [ ] Mobile Optimierungen (Responsive Testing)
- [ ] Performance Optimierung (Lighthouse Score > 90)

### Phase 4: CRM Dashboard Foundation (NÄCHSTE PRIORITÄT)
- [ ] Dashboard Layout (Sidebar + Main Content)
- [ ] Dashboard Navigation (CRM-spezifische Nav)
- [ ] Dashboard Header (Breadcrumbs, Actions, User Menu)
- [ ] Empty States (Onboarding für neue User)
- [ ] Loading States (Skeletons für alle Views)

### Phase 5: CRM Core Features - Leads Management
- [ ] Leads Table (Sortable, Filterable, Selectable)
  - [ ] Column Management (Show/Hide Columns)
  - [ ] Bulk Actions (Multi-Select, Batch Operations)
  - [ ] Quick Actions (Hover Actions wie Attio)
  - [ ] Status Badges (ICP Fit, Probability, Risk)
  - [ ] Sparklines (Interest Trends)
  - [ ] AI Indicators ("AI is thinking...")
- [ ] Lead Detail View (Modal oder Side Panel)
- [ ] Lead Creation Form (Wizard oder Single Form)
- [ ] Lead Import (CSV Upload, API Integration)

### Phase 6: CRM Core Features - Pipeline Management
- [ ] Pipeline View (Kanban Board)
  - [ ] Drag & Drop (Deal Movement zwischen Stages)
  - [ ] Stage Configuration (Customizable Stages)
  - [ ] Deal Cards (Value, Probability, Owner)
  - [ ] Pipeline Filters (Owner, Value, Stage)
- [ ] Deal Detail View
- [ ] Deal Creation Form
- [ ] Pipeline Analytics (Conversion Rates, Velocity)

### Phase 7: CRM Core Features - Contact & Company Management
- [ ] Contacts Table (wie Leads Table)
- [ ] Contact Detail View
- [ ] Companies Table
- [ ] Company Detail View
- [ ] Relationship Mapping (Contact ↔ Company ↔ Deal)
- [ ] Contact Enrichment (AI-powered)

### Phase 8: CRM Core Features - Activity Management
- [ ] Activity Feed (Timeline View)
- [ ] Activity Types (Call, Email, Meeting, Note, Task)
- [ ] Activity Creation Forms
- [ ] Activity Filters (Type, Date, Owner)
- [ ] Calendar Integration (View Activities as Calendar)
- [ ] Call Recording Integration (STT für Transkription)

### Phase 9: KI-Integration - Research Automation
- [ ] Research Input (Hero Section Integration)
- [ ] Research Results Page
- [ ] Research Modes (Schnell, Tiefen, Ultra)
- [ ] Company Research Display
- [ ] Contact Enrichment Display
- [ ] Research History

### Phase 10: KI-Integration - Lead Scoring & Prioritization
- [ ] ICP Fit Scoring Algorithm (Excellent/Medium/Good)
- [ ] Purchase Probability Calculation
- [ ] Risk Scoring
- [ ] Dynamic Score Updates (Real-time)
- [ ] Score Visualization (Badges, Charts)
- [ ] Score Explanation (Why this score?)

### Phase 11: KI-Integration - Call Coaching
- [ ] Real-time Call Analysis (während Gespräch)
- [ ] Sentiment Detection
- [ ] Talking Points Suggestions
- [ ] Objection Handling Tips
- [ ] Call Score Calculation
- [ ] Post-Call Analysis (Transkription, Summary, Action Items)

### Phase 12: KI-Integration - Recommendations Engine
- [ ] Daily Priorities ("Wer sollte heute angerufen werden?")
- [ ] Deal Alerts ("Welche Deals brauchen Aufmerksamkeit?")
- [ ] Hot Leads Detection ("Welche Leads sind heiß?")
- [ ] Overdue Activities ("Welche Aktivitäten sind überfällig?")
- [ ] Next Best Action (pro Lead/Deal)
- [ ] Recommendation Dashboard

### Phase 13: Analytics & Reporting
- [ ] Analytics Dashboard (Sales Metrics, KPIs)
- [ ] Pipeline Reports (Conversion Rates, Velocity)
- [ ] Activity Reports (Call Volume, Email Stats)
- [ ] Performance Reports (Individual, Team)
- [ ] Custom Reports Builder
- [ ] Export Functionality (PDF, CSV)

### Phase 14: Automation & Workflows
- [ ] Workflow Builder (Visual Editor)
- [ ] Trigger System (Event-based)
- [ ] Action System (Email, Task, Status Change)
- [ ] Follow-up Sequences
- [ ] A/B Testing für Sequences
- [ ] Workflow Analytics

### Phase 15: Integrations & API
- [ ] HubSpot Integration
- [ ] Salesforce Integration
- [ ] Email Integration (Gmail, Outlook)
- [ ] Calendar Integration (Google Calendar, Outlook)
- [ ] Phone Integration (Twilio, etc.)
- [ ] API Documentation
- [ ] Webhook System

### Phase 16: Advanced Features
- [ ] Multi-Tenant Support (White-Label)
- [ ] User Roles & Permissions
- [ ] Team Management
- [ ] Custom Fields
- [ ] Custom Views
- [ ] Keyboard Shortcuts
- [ ] Command Palette (Raycast-Style)

---

## 10.1 AKTUELLE PRIORITÄTEN & NÄCHSTE SCHRITTE

### Sofortige Aufgaben (Diese Woche)
1. **Footer Component** - Landing Page abschließen
   - Links (Product, Unternehmen)
   - Social Media Icons
   - Copyright
   - Attio + IntroKI Style kombinieren

2. **Landing Page Verfeinerungen**
   - Cookie Consent Banner (Attio Style)
   - Video Section (IntroKI Style)
   - Features Section mit Aurora Background
   - Testimonial Section
   - Final CTA Section

3. **Mobile Optimierung**
   - Responsive Testing aller Komponenten
   - Mobile Navigation verbessern
   - Touch-Optimierungen

### Kurzfristige Ziele (Nächste 2 Wochen)
1. **Dashboard Foundation**
   - Layout-Struktur (Sidebar + Main)
   - Navigation System
   - Empty States
   - Loading States

2. **Leads Table (MVP)**
   - Basis-Tabelle mit Sortierung
   - Status Badges
   - Row Selection
   - Hover Actions

### Mittelfristige Ziele (Nächste 4 Wochen)
1. **CRM Core Features**
   - Pipeline View (Kanban)
   - Contact Management
   - Activity Feed

2. **KI-Integration Start**
   - Research Automation (Basis)
   - Lead Scoring (Basis)

### Langfristige Ziele (Nächste 8+ Wochen)
1. **Vollständige KI-Integration**
   - Call Coaching
   - Recommendations Engine
   - Advanced Analytics

2. **Enterprise Features**
   - Multi-Tenant
   - Advanced Permissions
   - Integrations

---

## 11. TECHNISCHE STACK-EMPFEHLUNGEN

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** Shadcn/UI (Radix Primitives)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans, Inter, IBM Plex Mono
- **Scroll:** Lenis

### Backend (Konzeptuell)
- **Runtime:** Node.js / Python
- **API:** Next.js API Routes / tRPC
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma / Drizzle
- **AI:** OpenAI API / Anthropic Claude
- **Real-time:** Supabase Realtime / WebSockets

### Infrastructure
- **Hosting:** Vercel
- **Database:** Supabase
- **Storage:** Supabase Storage
- **CDN:** Vercel Edge Network
- **Analytics:** Vercel Analytics

---

**ENDE DER DOKUMENTATION**

*Diese Dokumentation dient als vollständige Referenz für die Rekonstruktion der Attio + IntroKI Website mit CRM-Funktionalität.*

