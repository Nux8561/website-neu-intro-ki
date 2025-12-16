"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { snappySpring, attioTransition } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { KanbanVisual } from "@/components/ui/kanban-visual"
import { GitBranch, Sparkles, RefreshCw, Users } from "lucide-react"

export function PipelineManagementSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: GitBranch,
      title: "Drag & Drop",
      description: "Bewege Leads zwischen Stages mit einfachem Drag & Drop",
    },
    {
      icon: Sparkles,
      title: "AI-Empfehlungen",
      description: "Erhalte kontextuelle Tipps für jeden Lead basierend auf Daten",
    },
    {
      icon: RefreshCw,
      title: "Real-time Updates",
      description: "Live-Synchronisation mit Supabase Realtime",
    },
    {
      icon: Users,
      title: "Bulk Actions",
      description: "Bearbeite mehrere Leads gleichzeitig für maximale Effizienz",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative section-spacing overflow-hidden bg-white border-y border-gray-200"
    >
      <div className="container-responsive max-w-7xl mx-auto">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={attioTransition}
        >
          {/* Section Number */}
          <div className="text-sm font-mono text-gray-500 mb-4">
            [03] Pipeline Management
          </div>

          {/* Header - Alternating Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            {/* Text on left */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-3 sm:mb-4">
                Intelligente Pipeline
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-inter mb-6 sm:mb-8 max-w-2xl">
                Kein Chaos mehr. Deine Deals sortieren sich fast von selbst.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="rounded-full bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 w-full sm:w-auto">
                  Kostenlos starten
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 text-[#0A0A0A] hover:bg-gray-50 w-full sm:w-auto"
                >
                  Demo ansehen
                </Button>
              </div>
            </div>

            {/* Visual on right */}
            <div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <KanbanVisual />
                </div>
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
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="mb-4">
                    <FeatureIcon icon={Icon} size="md" color="gray" />
                  </div>
                  <h3 className="text-lg font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-inter">
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

