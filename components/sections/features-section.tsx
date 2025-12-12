"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Target, Rocket, Brain, Sparkles } from "lucide-react"
import { useInView } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"

const tabs = [
  { id: "research", label: "Deep Research", icon: Brain },
  { id: "coaching", label: "Live Coaching", icon: Zap },
  { id: "scoring", label: "Lead Scoring", icon: Target },
  { id: "automation", label: "Automation", icon: Rocket },
  { id: "analytics", label: "Analytics", icon: Sparkles },
]

const features = {
  research: {
    title: "Deep Research",
    description: "Automatisierte Recherche in unter 60 Sekunden",
    items: [
      "Company Intelligence",
      "Contact Enrichment",
      "Tech Stack Analysis",
      "Funding & News",
    ],
  },
  coaching: {
    title: "Live Coaching",
    description: "Echtzeit-Unterstützung während Gesprächen",
    items: [
      "Real-time Sentiment Analysis",
      "Talking Points Suggestions",
      "Objection Handling",
      "Call Scoring",
    ],
  },
  scoring: {
    title: "Lead Scoring",
    description: "KI-basierte Priorisierung Ihrer Leads",
    items: [
      "ICP Fit Scoring",
      "Purchase Probability",
      "Risk Assessment",
      "Dynamic Updates",
    ],
  },
  automation: {
    title: "Automation",
    description: "Intelligente Workflows für Ihren Vertrieb",
    items: [
      "Follow-up Sequences",
      "Workflow Builder",
      "A/B Testing",
      "Trigger System",
    ],
  },
  analytics: {
    title: "Analytics",
    description: "Datengetriebene Insights für bessere Entscheidungen",
    items: [
      "Pipeline Analytics",
      "Performance Reports",
      "Custom Dashboards",
      "Export Functions",
    ],
  },
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = React.useState("research")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-white"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* Tab Navigation with Layout Animation */}
          <div className="relative flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter transition-all ${
                    isActive
                      ? "text-white"
                      : "bg-black/5 text-black/70 hover:bg-black/10 hover:text-black border border-black/10 hover:border-black/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {/* Active Background with Layout Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-black mb-4">
                {features[activeTab as keyof typeof features].title}
              </h3>
              <p className="text-lg text-black/70 font-inter mb-8">
                {features[activeTab as keyof typeof features].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features[activeTab as keyof typeof features].items.map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="flex items-center gap-3 text-black/80 font-inter"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

