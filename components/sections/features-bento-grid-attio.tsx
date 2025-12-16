"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  Link2, 
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
import { CustomIcon } from "@/components/icons/custom-icon"
import { WorkflowSimulation } from "@/components/visuals/WorkflowSimulation"
import { ActivityTicker } from "@/components/visuals/ActivityTicker"
import { TechBeamDivider } from "@/components/visuals/TechBeamDivider"
import { PulseBeamsDemo } from "@/components/visuals/PulseBeamsDemo"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { LineShadowText } from "@/components/ui/line-shadow-text"
import AnimatedLoadingSkeleton from "@/components/ui/animated-loading-skeleton"
import { snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"
import { cn } from "@/lib/utils"

// Animation variants - Snappy Spring Physics
const containerVariants = snappyStaggerContainer
const itemVariants = snappyStaggerItem

// Workflow Editor Component (für "Automate everything" Kachel)
// Nutzt jetzt die neue WorkflowSimulation mit Whiteboard-Look
function WorkflowEditor() {
  return (
    <div className="relative w-full h-full -m-6 overflow-hidden z-0" style={{ minHeight: "300px" }}>
      <WorkflowSimulation />
    </div>
  )
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
          01 Leistungsstarke Plattform
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-bold tracking-tight text-[#0A0A0A] leading-tight">
          GTM auf{' '}
          <LineShadowText shadowColor="#0A0A0A" className="italic">
            vollen Touren
          </LineShadowText>
          .
        </h2>
      </div>
    ),
  },
  {
    id: "automate",
    colSpan: 4,
    rowSpan: 2,
    title: "Alles automatisieren",
    description: "Erstelle Workflows, die deine Tools verbinden und repetitive Aufgaben automatisieren.",
    icon: <CustomIcon name="workflow" size="lg" variant="feature" />,
    content: <WorkflowEditor />,
  },
  {
    id: "connect",
    colSpan: 3,
    rowSpan: 1,
    title: "Jede Art von Daten verbinden",
    description: "Synchronisiere Daten von all deinen Lieblingstools in Echtzeit.",
    icon: <CustomIcon name="dataFlow" size="md" variant="feature" />,
    content: <DataIntegrationIcons />,
  },
  {
    id: "deploy",
    colSpan: 5,
    rowSpan: 2,
    title: "KI einsetzen",
    description: "Reichere Datensätze automatisch mit KI-gestützter Datenanreicherung an.",
    icon: <CustomIcon name="aiBrain" size="lg" variant="feature" />,
    content: <AIEnrichmentCard />,
  },
  {
    id: "revenue",
    colSpan: 4,
    rowSpan: 1,
    title: "Umsatzwachstum",
    description: "Verfolge und visualisiere deine Umsatzmetriken in Echtzeit.",
    icon: <CustomIcon name="analytics" size="md" variant="feature" />,
    content: <RevenueChart />,
  },
  {
    id: "insights",
    colSpan: 3,
    rowSpan: 1,
    title: "KI-Erkenntnisse",
    description: "Erhalte intelligente Empfehlungen, die von maschinellem Lernen angetrieben werden.",
    icon: <CustomIcon name="intelligence" size="md" variant="feature" />,
    content: (
          <div className="mt-4 flex items-center gap-3">
            <FeatureIcon logo="/images/openai-1-5u0onpsnpplsd0el4s93im.webp" size="md" color="purple" />
            <TextShimmer 
              as="div"
              className="text-sm font-inter text-text-muted"
              duration={2}
              spread={2}
            >
              Muster analysieren...
            </TextShimmer>
          </div>
    ),
  },
    {
      id: "reporting",
      colSpan: 3,
      rowSpan: 1,
      title: "Erweiterte Berichte",
      description: "Erstelle benutzerdefinierte Berichte mit Drag-and-Drop-Einfachheit.",
      icon: <CustomIcon name="feature1" size="md" variant="feature" />,
      content: <div className="overflow-hidden"><SkeletalUI variant="pipeline" /></div>,
    },
  {
    id: "activity",
    colSpan: 6,
    rowSpan: 2,
    content: <PulseBeamsDemo />,
  },
  {
    id: "logo",
    colSpan: 3,
    rowSpan: 1,
    content: (
      <div className="w-full h-full -m-6">
        <AnimatedLoadingSkeleton />
      </div>
    ),
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
    <section className="section-spacing bg-white">
      <div className="container-responsive max-w-7xl mx-auto">
        <motion.div
          className={cn(
            "grid gap-px bg-attio-border border border-attio-subtle",
            isDesktop ? "grid-cols-12" : "grid-cols-1"
          )}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bentoCells.map((cell, index) => (
            <motion.div
              key={cell.id}
              variants={itemVariants}
              className={cn(
                "bg-white hover:bg-gray-50/50 hover:shadow-sm relative overflow-hidden",
                "card-responsive",
                !isDesktop && "col-span-1"
              )}
              whileHover={{ scale: isDesktop ? 1.01 : 1 }}
              transition={snappySpring}
              style={
                isDesktop
                  ? {
                      gridColumn: `span ${cell.colSpan}`,
                      gridRow: `span ${cell.rowSpan}`,
                    }
                  : undefined
              }
            >
              {cell.title ? (
                <>
                  <div className="relative z-10">
                    {cell.icon && (
                      <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
                        {cell.icon}
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg md:text-xl font-inter-display font-bold text-[#0A0A0A] mb-2 leading-tight text-center sm:text-left">
                      {cell.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter text-text-muted mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                      {cell.description}
                    </p>
                  </div>
                  <div className="relative z-0 mt-3 sm:mt-4">
                    {cell.content}
                  </div>
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

