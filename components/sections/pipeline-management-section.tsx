"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PipelineKanbanCard } from "@/components/ui/pipeline-kanban-card"
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
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-background"
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
            [02] Pipeline Management
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-black mb-3 sm:mb-4">
                Pipeline mit AI-Power.
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-inter mb-6 sm:mb-8 max-w-2xl">
                Verwalte deine Pipeline wie ein Profi. Drag & Drop Kanban-Board mit
                AI-gestützten Empfehlungen für jeden Lead. Real-time Updates und Bulk
                Actions für maximale Effizienz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="rounded-full bg-black text-white hover:bg-black/90 w-full sm:w-auto">
                  Kostenlos starten
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-black/20 text-black hover:bg-black/5 w-full sm:w-auto"
                >
                  Demo ansehen
                </Button>
              </div>
            </div>

            {/* Visual Demo */}
            <div className="bg-black/5 border border-black/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-background rounded-xl p-6 border border-black/10">
                <PipelineKanbanCard />
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
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-black/5 border border-black/10 rounded-xl p-6 hover:border-black/20 transition-all backdrop-blur-sm"
                >
                  <div className="p-3 rounded-lg bg-black/5 border border-black/10 w-fit mb-4">
                    <Icon className="h-6 w-6 text-black/70" />
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

