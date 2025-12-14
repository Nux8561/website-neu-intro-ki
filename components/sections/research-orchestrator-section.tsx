"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ResearchAgentCard } from "@/components/ui/research-agent-card"
import { Search, Zap, Database, Layers } from "lucide-react"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { snappySpring } from "@/lib/animations"

export function ResearchOrchestratorSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Zap,
      title: "Parallele Ausführung",
      description: "6 Agents arbeiten gleichzeitig für maximale Geschwindigkeit",
    },
    {
      icon: Database,
      title: "Multi-Layer Caching",
      description: "L1 Memory, L2 Supabase, L3 Qdrant für optimale Performance",
    },
    {
      icon: Layers,
      title: "Circuit Breaker Protection",
      description: "Automatische Fehlerbehandlung und Retry-Logik",
    },
    {
      icon: Search,
      title: "Query Deduplication",
      description: "Verhindert Duplicate API-Calls und reduziert Kosten",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-background border-y border-black/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Section Number */}
          <div className="text-sm font-mono text-black/50 mb-4">
            [01] Research Orchestrator
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-black mb-3 sm:mb-4">
                Research in Sekunden, nicht Stunden.
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-inter mb-6 sm:mb-8 max-w-2xl">
                Unser Multi-Agent-System führt parallele Recherchen durch und liefert
                vollständige Lead-Profile in unter 60 Sekunden. Mit intelligenter
                Caching-Strategie und Circuit Breaker Protection für maximale
                Zuverlässigkeit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="rounded-full bg-black text-white w-full sm:w-auto">
                  Kostenlos starten
                </Button>
                <Button variant="outline" className="rounded-full border-black/20 text-black w-full sm:w-auto">
                  Mehr erfahren
                </Button>
              </div>
            </div>

            {/* Visual Demo */}
            <div className="bg-black/5 border border-black/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-background rounded-xl p-6 border border-black/10">
                <ResearchAgentCard />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    delay: index * 0.1,
                    ...snappySpring,
                  }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-black/5 border border-black/10 rounded-xl p-6 hover:border-black/20"
                >
                  <div className="mb-4">
                    <FeatureIcon icon={Icon} size="md" color="gray" />
                  </div>
                  <h3 className="text-lg font-jakarta font-medium tracking-tight text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-black/70 font-inter">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

