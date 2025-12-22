# MCP Server Setup

Diese Datei enthält die Konfiguration für die MCP-Server (Model Context Protocol).

## Installierte Server

1. **Browser MCP** (`@browsermcp/mcp@latest`)
   - Ermöglicht Browser-Interaktionen und Web-Scraping
   - Tools: Navigation, Screenshots, Element-Interaktionen

2. **Context7 MCP** (`@upstash/context7-mcp`)
   - Zugriff auf aktuelle Code-Dokumentation für LLMs
   - Tools: `resolve-library-id`, `get-library-docs`

## Installation in Cursor

### Option 1: Cursor Settings (Empfohlen)

1. Öffne Cursor Settings (Strg+,)
2. Suche nach "MCP" oder "Model Context Protocol"
3. Füge die Konfiguration aus `mcp-config.json` hinzu

### Option 2: Manuelle Konfiguration

Füge folgende Konfiguration zu deinen Cursor-Einstellungen hinzu:

```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

### Option 3: Mit API Key für Context7 (Optional)

Wenn du einen Context7 API Key hast (von context7.com/dashboard), füge ihn hinzu:

```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "CONTEXT7_API_KEY": "DEIN_API_KEY_HIER"
      }
    }
  }
}
```

## Verwendung

Nach der Installation sind die MCP-Tools automatisch verfügbar:

- **Browser MCP**: Kann Webseiten navigieren, Screenshots machen und Elemente interagieren
- **Context7**: Kann Dokumentation für Bibliotheken abrufen (z.B. `/supabase/supabase`, `/vercel/next.js`)

## Troubleshooting

### Module Not Found Errors

Falls `ERR_MODULE_NOT_FOUND` auftritt, versuche `bunx` statt `npx`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "bunx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

### ESM Resolution Issues

Für `Error: Cannot find module 'uriTemplate.js'`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "--node-options=--experimental-vm-modules", "@upstash/context7-mcp@1.0.6"]
    }
  }
}
```

## Weitere Informationen

- Context7: https://github.com/upstash/context7
- Context7 Dashboard: https://context7.com/dashboard
- Browser MCP: https://github.com/browsermcp/mcp

