# Build Errors Reference Guide

## Häufige ESLint-Fehler und Lösungen

### 1. React/JSX: Nicht-escaped Apostrophe und Anführungszeichen

**Fehler:**
```
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
```

**Ursache:**
Direkte Verwendung von Apostrophen (`'`) und Anführungszeichen (`"`) in JSX-Texten.

**Lösung:**
Verwende HTML-Entities statt direkter Zeichen:

| Zeichen | HTML-Entity | Verwendung |
|--------|-------------|------------|
| `'` | `&apos;` oder `&#39;` | Apostroph (einfach) |
| `'` | `&lsquo;` | Öffnendes einfaches Anführungszeichen |
| `'` | `&rsquo;` | Schließendes einfaches Anführungszeichen |
| `"` | `&quot;` oder `&#34;` | Anführungszeichen (einfach) |
| `"` | `&ldquo;` | Öffnendes doppeltes Anführungszeichen |
| `"` | `&rdquo;` | Schließendes doppeltes Anführungszeichen |
| `...` | `&hellip;` | Ellipse |

**Beispiele:**

❌ **FALSCH:**
```tsx
<p>Don't forget to check your email.</p>
<p>He said "Hello world".</p>
```

✅ **RICHTIG:**
```tsx
<p>Don&apos;t forget to check your email.</p>
<p>He said &ldquo;Hello world&rdquo;.</p>
```

**Häufige Fehlerstellen:**
- Deutsche Texte mit Apostrophen: "dein's", "IntroKI's"
- Englische Kontraktionen: "don't", "can't", "it's"
- Zitate in Texten
- Ellipsen: "..."

---

### 2. Tailwind CSS: Nicht existierende Utility-Klassen

**Fehler:**
```
Error: The `border-border-subtle` class does not exist. If `border-border-subtle` is a custom class, make sure it is defined within a `@layer` directive.
```

**Ursache:**
Verwendung von nicht existierenden Tailwind-Klassen oder Custom-Klassen außerhalb von `@layer`.

**Lösung:**
- Verwende nur existierende Tailwind-Utility-Klassen
- Oder definiere Custom-Klassen innerhalb von `@layer utilities` oder `@layer components`
- Oder verwende direkte CSS-Eigenschaften mit CSS-Variablen

**Beispiel:**

❌ **FALSCH:**
```css
@layer base {
  * {
    @apply border-border-subtle; /* Klasse existiert nicht */
  }
}
```

✅ **RICHTIG:**
```css
@layer base {
  * {
    border-color: var(--border-subtle); /* Direkte CSS-Eigenschaft */
  }
}
```

---

### 3. TypeScript: Doppelte Property-Definitionen

**Fehler:**
```
Type error: An object literal cannot have multiple properties with the same name.
```

**Ursache:**
Mehrfache Definition derselben Property in einem Objekt (z.B. in `tailwind.config.ts`).

**Lösung:**
- Entferne doppelte Property-Definitionen
- Führe mehrere Werte in einer Definition zusammen

**Beispiel:**

❌ **FALSCH:**
```typescript
theme: {
  extend: {
    colors: {
      background: "#FFFFFF",
    },
    colors: { // ❌ Doppelte Definition
      agent: {
        company: '#3b82f6',
      },
    },
  },
}
```

✅ **RICHTIG:**
```typescript
theme: {
  extend: {
    colors: {
      background: "#FFFFFF",
      agent: {
        company: '#3b82f6',
      },
    },
  },
}
```

---

## Checkliste vor jedem Build

- [ ] Alle Apostrophe (`'`) in JSX-Texten durch `&apos;` oder `&rsquo;` ersetzt
- [ ] Alle Anführungszeichen (`"`) in JSX-Texten durch `&quot;`, `&ldquo;` oder `&rdquo;` ersetzt
- [ ] Alle Ellipsen (`...`) durch `&hellip;` ersetzt
- [ ] Keine doppelten Property-Definitionen in Config-Dateien
- [ ] Alle Tailwind-Klassen existieren oder sind korrekt definiert
- [ ] Keine TypeScript-Fehler durch doppelte Definitionen

---

## Automatische Prüfung

Führe vor dem Commit aus:
```bash
npm run lint
npm run build
```

Dies findet die meisten dieser Fehler vor dem Deployment.

---

## Häufige Fehlerstellen

1. **Deutsche Texte mit Genitiv:**
   - ❌ "IntroKI's Features" → ✅ "IntroKIs Features" oder "Features von IntroKI"

2. **Englische Kontraktionen:**
   - ❌ "don't", "can't", "it's" → ✅ "don&apos;t", "can&apos;t", "it&apos;s"

3. **Zitate:**
   - ❌ "He said "Hello"" → ✅ "He said &ldquo;Hello&rdquo;"

4. **Ellipsen:**
   - ❌ "Loading..." → ✅ "Loading&hellip;"

---

**Letzte Aktualisierung:** 2024-12-15

