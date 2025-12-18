"use client"

import * as React from "react"
import { FeaturePageTemplate, FeatureItem, BentoGridItem } from "@/components/templates/feature-page-template"
import { Database, Share2, Shield, Zap, Search, Layout } from "lucide-react"

export default function DataModelPage() {
  // Zig-Zag Features - Process First, Tool Second
  const features: FeatureItem[] = [
    {
      kicker: "PROZESS ZUERST",
      title: "Baue dein CRM genau so, wie du Geld verdienst",
      description: "Deine Excel-Liste funktioniert, weil sie widerspiegelt, wie du tatsächlich arbeitest. IntroKI macht dasselbe—nur besser. Definiere Objekte, Felder und Beziehungen so, dass sie deinen exakten Prozess abbilden. Das System passt sich dir an, nicht umgekehrt.",
      items: [
        "Mappe deinen bestehenden Geschäftsprozess in IntroKI",
        "Importiere Excel-Strukturen automatisch",
        "Keine Notwendigkeit, deine Arbeitsweise zu ändern",
        "Schrittweise Migration—behalte Excel, bis du bereit bist",
      ],
      image: "/images/data-model-custom-objects.png",
      imagePosition: "left",
    },
    {
      kicker: "ATTRIBUTE",
      title: "Mächtige Attributtypen für echte Geschäftslogik",
      description: "Gehe über einfache Textfelder hinaus. Nutze reiche Attributtypen wie Status-Enums, Währungswerte, Team-Referenzen und Formelfelder. Verknüpfe verwandte Datensätze, erstelle kaskadierende Updates und halte die Datenintegrität in deinem gesamten CRM aufrecht.",
      items: [
        "Status-Enums und Multi-Select-Felder",
        "Währungs-, Zahlen- und Datumsberechnungen",
        "Team- und Benutzer-Referenzfelder",
        "Formelfelder mit übergreifenden Objekt-Referenzen",
      ],
      image: "/images/data-model-attributes.png",
      imagePosition: "right",
    },
    {
      kicker: "BEZIEHUNGEN",
      title: "Erweiterte Beziehungsmapping",
      description: "Verbinde Unternehmen mit Deals, Personen mit Chancen und benutzerdefinierte Entitäten mit allem anderen. Definiere 1-zu-Viele, Viele-zu-Viele und hierarchische Beziehungen präzise. Visualisiere dein Datenmodell und verstehe, wie alles zusammenhängt.",
      items: [
        "1-zu-Viele und Viele-zu-Viele Beziehungen",
        "Hierarchische und Parent-Child-Strukturen",
        "Bidirektionale Beziehungsverknüpfung",
        "Visueller Beziehungsgraph und Dokumentation",
      ],
      image: "/images/data-model-relationships.png",
      imagePosition: "left",
    },
  ]

  // Bento Grid Items - Fokus auf Klarheit und Automatisierung
  const bentoGridItems: BentoGridItem[] = [
    {
      icon: Zap,
      title: "Echtzeit-Synchronisation",
      description: "Alle Änderungen propagieren sofort durch dein CRM. Aktualisiere ein Feld an einer Stelle und beobachte, wie es überall widergespiegelt wird—ohne manuelle Synchronisation oder Aktualisierung.",
    },
    {
      icon: Shield,
      title: "Granulare Berechtigungen",
      description: "Kontrolliere den Zugriff auf Objekt-, Feld- und Datensatzebene. Definiere, wer Daten anzeigen, bearbeiten oder löschen kann—mit rollenbasierten Berechtigungen, die mit deinem Team skalieren.",
    },
    {
      icon: Search,
      title: "API-zentrierte Architektur",
      description: "Jedes benutzerdefinierte Objekt und jede Beziehung ist über unsere REST API verfügbar. Baue Integrationen, synchronisiere externe Daten und automatisierte Workflows mit vollem programmatischem Zugriff.",
    },
  ]

  // Hero Image Placeholder - Clean Attio Style
  const heroImagePlaceholder = (
    <div className="w-full h-full bg-gray-50 border border-gray-200 flex items-center justify-center rounded-lg">
      <div className="text-center">
        <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">Datenmodell-Vorschau</p>
      </div>
    </div>
  )

  return (
    <FeaturePageTemplate
      title="Bau dein CRM so, wie du Geld verdienst"
      subtitle="Wir nehmen dir Excel nicht weg, um dich zu ärgern. Wir geben dir ein System, das genauso arbeitet wie dein Geschäft—nur dass es dir morgens sagt, was zu tun ist, damit du nicht mehr in Tabellen suchen musst."
      heroImage={heroImagePlaceholder}
      documentationLink="/developers/data-model"
      features={features}
      bentoGridItems={bentoGridItems}
      ctaTitle="Bereit, deine Excel-Listen zu ersetzen?"
      ctaSubtitle="Buche eine Demo, um zu sehen, wie IntroKI genauso arbeitet wie dein Geld-Verdien-Prozess—nur dass es dir sagt, was zu tun ist, damit du nie wieder in Tabellen suchen musst."
    />
  )
}
