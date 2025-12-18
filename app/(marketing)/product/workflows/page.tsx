"use client"

import * as React from "react"
import { FeaturePageTemplate, FeatureItem, BentoGridItem } from "@/components/templates/feature-page-template"
import { Workflow, GitBranch, Zap, Bell, Mail, Database, MessageSquare } from "lucide-react"

export default function WorkflowsPage() {
  // Zig-Zag Features - Excel Replacement + Kognitive Entlastung
  const features: FeatureItem[] = [
    {
      kicker: "KEIN BRAINSTORM",
      title: "Automatisierung, die sich natürlich anfühlt—nicht komplex",
      description: "Wenn das Erstellen von Workflows sich schwerer anfühlt als Excel zu aktualisieren, werden Teams widerstehen. Deshalb haben wir es so einfach gemacht: 'Wenn dies passiert, mache das.' Visuell, intuitiv und sofort nützlich—sogar für nicht-technische Teams.",
      items: [
        "Drag-and-Drop-Interface—keine technischen Kenntnisse nötig",
        "Starte mit Vorlagen, die gängige Excel-Workflows abbilden",
        "Ein-Klick-Automatisierung für repetitive Aufgaben",
        "Sofortiger Mehrwert, keine lange Einrichtung nötig",
      ],
      image: "/images/workflows-visual-builder.png",
      imagePosition: "left",
    },
    {
      kicker: "LOGIK",
      title: "Konditionale Logik für intelligente Automatisierung",
      description: "Baue intelligente Workflows, die sich an deine Daten anpassen. Nutze konditionale Verzweigungen, Schleifen und Filter, um komplexe Geschäftsregeln zu handhaben. Leite Datensätze basierend auf Kriterien weiter, aktualisiere Felder bedingt und erstelle dynamische Pfade durch deine Automatisierung.",
      items: [
        "If/Else-Verzweigungen und Multi-Bedingungs-Logik",
        "Daten filtern und transformieren im laufenden Betrieb",
        "Schleifen durch Sammlungen und Batch-Operationen",
        "Fehlerbehandlung und Wiederholungsmechanismen",
      ],
      image: "/images/workflows-conditional-logic.png",
      imagePosition: "right",
    },
    {
      kicker: "AUTOMATISCH",
      title: "Sofortige Trigger—keine manuellen Aktionen mehr",
      description: "Workflows laufen automatisch, wenn sich Daten ändern. Triggere bei Datensatzerstellung, Feldaktualisierungen, Statusänderungen oder externen Webhooks. Halte dein CRM synchronisiert und dein Team informiert—sofort und zuverlässig.",
      items: [
        "Ereignis-basierte Trigger (Erstellen, Aktualisieren, Löschen)",
        "Feldebenen-Änderungserkennung",
        "Webhook-Trigger für externe Integrationen",
        "Geplante und wiederkehrende Workflows",
      ],
      image: "/images/workflows-triggers.png",
      imagePosition: "left",
    },
  ]

  // Bento Grid Items - Fokus auf Einfachheit und Proaktive Führung
  const bentoGridItems: BentoGridItem[] = [
    {
      icon: MessageSquare,
      title: "Chat-ähnliche Einfachheit",
      description: "Interagiere mit IntroKI wie mit WhatsApp. Einfach, schnell, intuitiv. Kein Training nötig—dein Team wird es am ersten Tag verstehen.",
    },
    {
      icon: Bell,
      title: "Slack-Benachrichtigungen",
      description: "Benachrichtige dein Team automatisch in Slack, wenn Deals sich bewegen, Leads zugewiesen werden oder Meilensteine erreicht werden. Halte alle synchronisiert ohne manuelle Updates.",
    },
    {
      icon: Zap,
      title: "0% bis 100% Steuerung",
      description: "Wähle dein Automatisierungslevel. Starte mit 0%—manuelle Kontrolle, genau wie Excel. Füge schrittweise Automatisierung hinzu, wenn du Mehrwert siehst. Keine Alles-oder-Nichts-Entscheidung.",
    },
  ]

  // Hero Image Placeholder - Clean Attio Style
  const heroImagePlaceholder = (
    <div className="w-full h-full bg-gray-50 border border-gray-200 flex items-center justify-center rounded-lg">
      <div className="text-center">
        <Workflow className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">Workflow-Automatisierung Vorschau</p>
      </div>
    </div>
  )

  return (
    <FeaturePageTemplate
      title="Keine morgendlichen Tabellensuchen mehr"
      subtitle="Anstatt Excel zu öffnen, um herauszufinden, was zu tun ist, sagt dir IntroKI: 'Hier ist, worauf du dich heute konzentrieren musst.' Aktive Steuerung, nicht passive Datenspeicherung."
      heroImage={heroImagePlaceholder}
      documentationLink="/developers/workflows"
      features={features}
      bentoGridItems={bentoGridItems}
      ctaTitle="Bereit, deinen Verkaufsprozess zu automatisieren?"
      ctaSubtitle="Buche eine Demo, um zu sehen, wie Workflow-Automatisierung Stunden manueller Arbeit eliminiert und deine Revenue-Operationen beschleunigt."
    />
  )
}
