"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  Link2, 
  Brain, 
  Workflow, 
  Database, 
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle2,
  Circle
} from "lucide-react"
import { SkeletalUI } from "@/components/ui/skeletal-ui"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

// Animation variants - Snappy Spring Physics
const containerVariants = snappyStaggerContainer
const itemVariants = snappyStaggerItem

// Workflow Editor Component (für "Automate everything" Kachel)
// Nutzt jetzt Skeletal UI statt Icons
function WorkflowEditor() {
  return <SkeletalUI variant="workflow" />
}

// Data Integration (für "Connect any type of data" Kachel)
// Nutzt jetzt Skeletal UI für Data Sync
function DataIntegrationIcons() {
  return <SkeletalUI variant="data-sync" />
}

// AI Enrichment Card (für "Deploy AI" Kachel) - Nutzt jetzt lebendige Enrichment-Animation
function AIEnrichmentCard() {
  return <SkeletalUI variant="enrichment" />
}

// Revenue Growth Chart - Nutzt jetzt Skeletal UI
function RevenueChart() {
  return <SkeletalUI variant="analytics" />
}

// Bento Grid Kacheln Definition
const bentoCells = [
  {
    id: "heading",
    colSpan: 5,
    rowSpan: 1,
    content: (
      <div>
        <div className="text-xs font-inter text-text-muted uppercase tracking-wider mb-2">
          01 Powerful platform
        </div>
        <h2 className="text-4xl md:text-5xl font-inter-display font-bold tracking-tight text-[#0A0A0A]">
          GTM at full throttle.
        </h2>
      </div>
    ),
  },
  {
    id: "automate",
    colSpan: 4,
    rowSpan: 2,
    title: "Automate everything",
    description: "Build workflows that connect your tools and automate repetitive tasks.",
    content: <WorkflowEditor />,
  },
  {
    id: "connect",
    colSpan: 3,
    rowSpan: 1,
    title: "Connect any type of data",
    description: "Sync data from all your favorite tools in real-time.",
    content: <DataIntegrationIcons />,
  },
  {
    id: "deploy",
    colSpan: 5,
    rowSpan: 2,
    title: "Deploy AI",
    description: "Enrich records automatically with AI-powered data enrichment.",
    content: <AIEnrichmentCard />,
  },
  {
    id: "revenue",
    colSpan: 4,
    rowSpan: 1,
    title: "Revenue growth",
    description: "Track and visualize your revenue metrics in real-time.",
    content: <RevenueChart />,
  },
  {
    id: "insights",
    colSpan: 3,
    rowSpan: 1,
    title: "AI Insights",
    description: "Get intelligent recommendations powered by machine learning.",
    content: (
          <div className="mt-4 flex items-center gap-3">
            <FeatureIcon icon={Brain} size="md" color="purple" />
            <div className="text-sm font-inter text-text-muted">
              Analyzing patterns...
            </div>
          </div>
    ),
  },
  {
    id: "reporting",
    colSpan: 3,
    rowSpan: 1,
    title: "Advanced Reporting",
    description: "Create custom reports with drag-and-drop simplicity.",
    content: <SkeletalUI variant="pipeline" />,
  },
]

export function FeaturesBentoGridAttio() {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-px bg-attio-border border border-attio-subtle"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bentoCells.map((cell, index) => (
            <motion.div
              key={cell.id}
              variants={itemVariants}
              className="bg-white p-6 hover:bg-gray-50/50 hover:shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={snappySpring}
              style={{
                gridColumn: isDesktop ? `span ${cell.colSpan}` : '1 / -1',
                gridRow: isDesktop ? `span ${cell.rowSpan}` : 'auto',
              } as React.CSSProperties}
            >
              {cell.title ? (
                <>
                  <h3 className="text-lg md:text-xl font-inter-display font-bold text-[#0A0A0A] mb-2 leading-tight">
                    {cell.title}
                  </h3>
                  <p className="text-sm font-inter text-text-muted mb-4 leading-relaxed">
                    {cell.description}
                  </p>
                  {cell.content}
                </>
              ) : (
                cell.content
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

