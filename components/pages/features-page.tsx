"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import {
  Brain,
  Zap,
  Target,
  Rocket,
  Sparkles,
  BarChart3,
  Users,
  GitBranch,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  TrendingUp,
  Shield,
  Globe,
  Code,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featureCategories = [
  { id: "research", label: "Deep Research", icon: Brain },
  { id: "coaching", label: "Live Coaching", icon: Zap },
  { id: "scoring", label: "Lead Scoring", icon: Target },
  { id: "automation", label: "Automation", icon: Rocket },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "crm", label: "CRM Core", icon: Users },
]

const features = {
  research: [
    {
      icon: Brain,
      title: "Deep Research in 60 Sekunden",
      description:
        "Automatisierte Recherche zu Unternehmen, Kontakten und Marktentwicklungen. Erhalten Sie umfassende Insights in unter einer Minute.",
      highlights: [
        "Company Intelligence",
        "Contact Enrichment",
        "Tech Stack Analysis",
        "Funding & News Tracking",
      ],
    },
    {
      icon: Globe,
      title: "Social Media Analysis",
      description:
        "Analysieren Sie Social Signals, Engagement-Metriken und Markenpräsenz Ihrer Leads.",
      highlights: [
        "LinkedIn Analysis",
        "Twitter Monitoring",
        "Engagement Scoring",
        "Brand Presence",
      ],
    },
  ],
  coaching: [
    {
      icon: Zap,
      title: "Real-time Call Coaching",
      description:
        "Echtzeit-Unterstützung während Gesprächen mit KI-gestützten Talking Points und Objection Handling.",
      highlights: [
        "Sentiment Detection",
        "Talking Points Suggestions",
        "Objection Handling",
        "Call Scoring",
      ],
    },
    {
      icon: MessageSquare,
      title: "Post-Call Analysis",
      description:
        "Automatische Transkription, Zusammenfassung und Action Items nach jedem Gespräch.",
      highlights: [
        "Auto Transcription",
        "AI Summary",
        "Action Items Extraction",
        "Sentiment Timeline",
      ],
    },
  ],
  scoring: [
    {
      icon: Target,
      title: "ICP Fit Scoring",
      description:
        "KI-basierte Bewertung der Ideal Customer Profile Übereinstimmung für jeden Lead.",
      highlights: [
        "Excellent/Medium/Good Scoring",
        "Multi-Factor Analysis",
        "Real-time Updates",
        "Score Explanation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Purchase Probability",
      description:
        "ML-basierte Berechnung der Kaufwahrscheinlichkeit basierend auf historischen Daten.",
      highlights: [
        "0-100% Probability Score",
        "Dynamic Updates",
        "Risk Assessment",
        "Historical Comparison",
      ],
    },
  ],
  automation: [
    {
      icon: Rocket,
      title: "Workflow Builder",
      description:
        "Erstellen Sie intelligente Workflows mit visuellem Editor und Drag & Drop.",
      highlights: [
        "Visual Editor",
        "Trigger System",
        "Action Automation",
        "A/B Testing",
      ],
    },
    {
      icon: Mail,
      title: "Follow-up Sequences",
      description:
        "Automatisierte Follow-up Sequenzen mit Timing-Optimierung und Personalisierung.",
      highlights: [
        "Sequence Builder",
        "Timing Optimization",
        "Personalization",
        "Performance Tracking",
      ],
    },
  ],
  analytics: [
    {
      icon: BarChart3,
      title: "Pipeline Analytics",
      description:
        "Detaillierte Analysen Ihrer Pipeline mit Conversion Rates und Deal Velocity.",
      highlights: [
        "Conversion Rates",
        "Deal Velocity",
        "Value Distribution",
        "Stage Analysis",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Reports",
      description:
        "Umfassende Reports zu individueller und Team-Performance mit Custom Dashboards.",
      highlights: [
        "Individual Reports",
        "Team Comparisons",
        "Custom Dashboards",
        "Export Functions",
      ],
    },
  ],
  crm: [
    {
      icon: Users,
      title: "Lead Management",
      description:
        "Vollständiges Lead Management mit Sortierung, Filterung und Bulk Actions.",
      highlights: [
        "Sortable Tables",
        "Advanced Filtering",
        "Bulk Actions",
        "Quick Actions",
      ],
    },
    {
      icon: GitBranch,
      title: "Pipeline Management",
      description:
        "Kanban-basierte Pipeline-Verwaltung mit Drag & Drop und Custom Stages.",
      highlights: [
        "Kanban Board",
        "Drag & Drop",
        "Custom Stages",
        "Deal Cards",
      ],
    },
    {
      icon: Calendar,
      title: "Activity Management",
      description:
        "Vollständige Aktivitätsverfolgung für Calls, Emails, Meetings und Tasks.",
      highlights: [
        "Call Tracking",
        "Email Integration",
        "Meeting Management",
        "Task Automation",
      ],
    },
  ],
}

export function FeaturesPage() {
  const [activeCategory, setActiveCategory] = React.useState("research")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#0B0C0E]">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6"
              >
                Features
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-white mb-6"
            >
              Alles was Sie für
              <br />
              erfolgreichen Vertrieb brauchen
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              KI-gestützte Tools für Research, Coaching, Scoring und Automation
              – alles in einer Plattform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-4">
            {featureCategories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter transition-all touch-manipulation min-h-[44px] whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features[activeCategory as keyof typeof features].map(
                (feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-colors">
                          <Icon className="h-6 w-6 text-white/70 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-jakarta font-medium tracking-tight text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-white/70 font-inter text-sm mb-4">
                            {feature.description}
                          </p>
                          <ul className="space-y-2">
                            {feature.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-white/60 font-inter text-sm"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )
                }
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-white mb-4">
              Bereit loszulegen?
            </h2>
            <p className="text-white/70 font-inter mb-8">
              Starten Sie noch heute mit IntroKI und transformieren Sie Ihren
              Vertrieb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8"
                asChild
              >
                <Link href="/pricing">Jetzt starten</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 text-white hover:bg-white/10 rounded-full px-8"
                asChild
              >
                <Link href="/kontakt">Demo buchen</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

