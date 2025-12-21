"use client"

import * as React from "react"
import {
  Zap,
  LayoutGrid,
  DollarSign,
  Shield,
  Rocket,
  Building2,
  GitBranch,
  BookOpen,
  HelpCircle,
  FileText,
  Map,
  Users,
  Briefcase,
  Handshake,
  Mail,
  Sparkles,
  Database,
  Workflow,
  BarChart3,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  isScroll?: boolean
  children?: NavItem[]
}

export const navigationItems: NavItem[] = [
  {
    label: "Produkt",
    href: "#",
    children: [
      {
        label: "Features",
        href: "/features",
        description: "Alle Features im Überblick",
        icon: Sparkles,
      },
      {
        label: "Platform",
        href: "/platform",
        description: "Technische Plattform-Details",
        icon: LayoutGrid,
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Transparente Preise",
        icon: DollarSign,
      },
      {
        label: "Security",
        href: "/security",
        description: "DSGVO & Datensicherheit",
        icon: Shield,
      },
    ],
  },
  {
    label: "Lösungen",
    href: "#",
    children: [
      {
        label: "Für Startups",
        href: "/for/startups",
        description: "Perfekt für wachsende Teams",
        icon: Rocket,
      },
      {
        label: "Enterprise",
        href: "/enterprise",
        description: "Für große Unternehmen",
        icon: Building2,
      },
      {
        label: "Deal Flow",
        href: "/for/deal-flow",
        description: "Optimierter Deal-Flow",
        icon: GitBranch,
      },
    ],
  },
  {
    label: "Ressourcen",
    href: "#",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Aktuelle Artikel & Insights",
        icon: BookOpen,
      },
      {
        label: "Help",
        href: "/help",
        description: "Dokumentation & Support",
        icon: HelpCircle,
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Häufige Fragen",
        icon: FileText,
      },
      {
        label: "Changelog",
        href: "/changelog",
        description: "Neue Features & Updates",
        icon: Sparkles,
      },
      {
        label: "Roadmap",
        href: "/roadmap",
        description: "Zukünftige Features",
        icon: Map,
      },
      {
        label: "Templates",
        href: "/templates",
        description: "Vorlagen & Beispiele",
        icon: FileText,
      },
    ],
  },
  {
    label: "Unternehmen",
    href: "#",
    children: [
      {
        label: "About",
        href: "/about",
        description: "Über Intro KI",
        icon: Users,
      },
      {
        label: "Team",
        href: "/team",
        description: "Unser Team",
        icon: Users,
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Karriere bei Intro KI",
        icon: Briefcase,
      },
      {
        label: "Partners",
        href: "/partners",
        description: "Partner-Programm",
        icon: Handshake,
      },
      {
        label: "Kontakt",
        href: "/kontakt",
        description: "Kontakt aufnehmen",
        icon: Mail,
      },
    ],
  },
]

