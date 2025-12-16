"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ResearchAgentCard } from "@/components/ui/research-agent-card"
import { CustomIcon } from "@/components/icons/custom-icon"
import { snappySpring } from "@/lib/animations"

export function ResearchOrchestratorSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      iconName: "automation",
      title: "Parallele Ausführung",
      description: "6 Agents arbeiten gleichzeitig für maximale Geschwindigkeit",
    },
    {
      iconName: "infrastructure",
      title: "Multi-Layer Caching",
      description: "L1 Memory, L2 Supabase, L3 Qdrant für optimale Performance",
    },
    {
      iconName: "platform",
      title: "Circuit Breaker Protection",
      description: "Automatische Fehlerbehandlung und Retry-Logik",
    },
    {
      iconName: "intelligence",
      title: "Query Deduplication",
      description: "Verhindert Duplicate API-Calls und reduziert Kosten",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative section-spacing overflow-hidden bg-white border-y border-gray-200"
    >
      <div className="container-responsive max-w-7xl mx-auto">
        <motion.div
          className="max-w-7xl mx-auto motion-safe"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          style={{
            willChange: "opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Section Number */}
          <div className="text-sm font-mono text-gray-500 mb-4">
            [01] Research Orchestrator
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-3 sm:mb-4">
                Automatisierte Recherche
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-inter mb-6 sm:mb-8 max-w-2xl">
                Wir finden alles über die Firma. News, Tech-Stack, Mitarbeiter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="rounded-full bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 w-full sm:w-auto">
                  Kostenlos starten
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 text-[#0A0A0A] hover:bg-gray-50 w-full sm:w-auto"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>

            {/* Visual Demo */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <ResearchAgentCard />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={
                  isInView ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{
                  delay: index * 0.1,
                  ...snappySpring,
                }}
                whileHover={{ scale: 1.01 }}
                style={{
                  willChange: "opacity, transform",
                  transform: "translateZ(0)",
                }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="mb-4">
                  <CustomIcon name={feature.iconName} size="md" variant="feature" />
                </div>
                <h3 className="text-base sm:text-lg font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

