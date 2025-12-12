"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  GitBranch, 
  Phone, 
  BarChart3, 
  Zap, 
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Network,
  Brain,
  Target,
  TrendingUp,
  Clock,
  Users,
  Database,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Multi-Agent Research System",
    description: "Parallele Ausführung mehrerer AI-Agenten für umfassende Lead-Recherche in Sekunden. Jeder Agent spezialisiert auf verschiedene Datenquellen und Recherche-Aspekte.",
    benefits: [
      "Parallele Ausführung für maximale Geschwindigkeit",
      "Multi-Layer Caching (L1 Memory, L2 Supabase, L3 Qdrant)",
      "Intelligente Agent-Orchestrierung",
      "Echtzeit-Ergebnisse",
    ],
    color: "blue",
  },
  {
    icon: GitBranch,
    title: "Pipeline Management",
    description: "Drag-and-Drop Kanban-Board mit AI-gestützten Empfehlungen für optimale Lead-Platzierung und automatische Pipeline-Optimierung.",
    benefits: [
      "Intuitive Kanban-Oberfläche",
      "AI-Empfehlungen für Lead-Platzierung",
      "Bulk-Actions für Effizienz",
      "Echtzeit-Updates",
    ],
    color: "purple",
  },
  {
    icon: Phone,
    title: "Live Call Coaching",
    description: "Echtzeit-Unterstützung während Gesprächen mit KI-gestützten Talking Points, Sentiment-Analyse und Objection-Handling.",
    benefits: [
      "Real-time Sentiment Detection",
      "Kontextuelle Talking Points",
      "Objection Handling Tipps",
      "Post-Call Analyse",
    ],
    color: "green",
  },
  {
    icon: BarChart3,
    title: "Predictive Lead Scoring",
    description: "Machine Learning-basierte Lead-Bewertung mit transparenten Faktoren und kontinuierlicher Verbesserung durch Feedback-Loops.",
    benefits: [
      "ML-basierte Scoring-Algorithmen",
      "Transparente Faktoren",
      "Kontinuierliche Verbesserung",
      "Custom Scoring Models",
    ],
    color: "orange",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Visueller Workflow-Builder für komplexe Sales-Automatisierungen mit Conditional Logic und Multi-Step Actions.",
    benefits: [
      "Drag-and-Drop Builder",
      "Conditional Logic",
      "Multi-Step Actions",
      "Event-basierte Trigger",
    ],
    color: "pink",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-End Verschlüsselung, SOC 2 Compliance, GDPR-konform und regelmäßige Security-Audits für maximale Datensicherheit.",
    benefits: [
      "End-to-End Verschlüsselung",
      "SOC 2 Type II zertifiziert",
      "GDPR-konform",
      "Regelmäßige Security-Audits",
    ],
    color: "indigo",
  },
]

const stats = [
  { label: "Recherche-Zeit reduziert", value: "95%", icon: Clock },
  { label: "Lead-Qualität verbessert", value: "3x", icon: TrendingUp },
  { label: "Aktive Nutzer", value: "10K+", icon: Users },
  { label: "Datenpunkte pro Lead", value: "500+", icon: Database },
]

const colorMap = {
  blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-600",
  purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-600",
  green: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-600",
  orange: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-600",
  pink: "from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-600",
  indigo: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-600",
}

export default function PlatformPage() {
  const heroRef = React.useRef(null)
  const featuresRef = React.useRef(null)
  const statsRef = React.useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-24 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm mb-8"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-inter text-[#0B0C0E]/70">
                Die vollständige Sales-Intelligence-Plattform
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Eine Plattform.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unendliche Möglichkeiten.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
              IntroKI kombiniert AI-gestützte Recherche, intelligente Pipeline-Verwaltung und Echtzeit-Call-Coaching in einer einzigen, nahtlosen Plattform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Demo buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 border-y border-[#0B0C0E]/10 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0B0C0E]/5 mb-4">
                    <Icon className="h-6 w-6 text-[#0B0C0E]/70" />
                  </div>
                  <div className="text-4xl font-jakarta font-semibold text-[#0B0C0E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#0B0C0E]/60 font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
              Alles, was du brauchst
            </h2>
            <p className="text-xl text-[#0B0C0E]/70 font-inter max-w-2xl mx-auto">
              Eine vollständige Suite von Tools für moderne Sales-Teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colors = colorMap[feature.color as keyof typeof colorMap]
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative"
                >
                  <div className={`
                    relative h-full p-8 rounded-2xl border bg-gradient-to-br ${colors}
                    backdrop-blur-sm transition-all duration-300
                    hover:shadow-xl hover:scale-[1.02]
                  `}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`
                        flex items-center justify-center w-12 h-12 rounded-xl
                        bg-white/20 backdrop-blur-sm border border-white/20
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-jakarta font-semibold tracking-tight mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[#0B0C0E]/70 font-inter leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#0B0C0E]/80 font-inter">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0C0E]/5 via-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Bereit, dein Sales-Team zu transformieren?
            </h2>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-8">
              Starte noch heute mit IntroKI und erlebe die Zukunft des Sales-Managements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Demo buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

