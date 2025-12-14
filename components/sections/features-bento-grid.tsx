"use client"

import * as React from "react"
import { LazyMotion, motion, domAnimation } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResearchAgentCard } from "@/components/ui/research-agent-card"
import { PipelineKanbanCard } from "@/components/ui/pipeline-kanban-card"
import { CallCoachingPanel } from "@/components/ui/call-coaching-panel"
import { FlowchartPreview } from "@/components/ui/flowchart-preview"
import { ScoreChart } from "@/components/ui/score-chart"
import { IntegrationGrid } from "@/components/ui/integration-grid"
import InfiniteGallery from "@/components/ui/3d-gallery-photography"
import {
  Search,
  GitBranch,
  Phone,
  Workflow,
  TrendingUp,
  Plug,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const features = [
  {
    id: "research",
    title: "Research in Sekunden",
    description: "Multi-Agent-System mit paralleler Ausführung",
    icon: Search,
    span: "col-span-2 row-span-2",
    content: <ResearchAgentCard />,
    bgColor: "bg-blue-500/5",
  },
  {
    id: "pipeline",
    title: "Pipeline Management",
    description: "Drag-and-Drop Kanban mit AI-Empfehlungen",
    icon: GitBranch,
    span: "col-span-2 row-span-1",
    content: <PipelineKanbanCard />,
    bgColor: "bg-purple-500/5",
  },
  {
    id: "coaching",
    title: "Live Call Coaching",
    description: "Echtzeit-Unterstützung während Gesprächen",
    icon: Phone,
    span: "col-span-1 row-span-1",
    content: <CallCoachingPanel />,
    bgColor: "bg-green-500/5",
  },
  {
    id: "guides",
    title: "Interaktive Sales Guides",
    description: "Flowchart-basierte Playbooks",
    icon: Workflow,
    span: "col-span-1 row-span-1",
    content: <FlowchartPreview />,
    bgColor: "bg-orange-500/5",
  },
  {
    id: "scoring",
    title: "Predictive Lead Scoring",
    description: "ML-basierte Priorisierung",
    icon: TrendingUp,
    span: "col-span-1 row-span-1",
    content: <ScoreChart />,
    bgColor: "bg-pink-500/5",
  },
  {
    id: "integrations",
    title: "30+ Integrationen",
    description: "Alle Tools an einem Ort",
    icon: Plug,
    span: "col-span-2 row-span-1",
    content: <IntegrationGrid />,
    bgColor: "bg-indigo-500/5",
  },
]

export function FeaturesBentoGrid() {
  const ref = React.useRef<HTMLDivElement>(null)

  // Dynamic grid template areas for responsive layout
  const gridAreas = {
    desktop: `
      "research research pipeline pipeline"
      "research research coaching guides"
      "scoring integrations integrations integrations"
    `,
    mobile: `
      "research"
      "pipeline"
      "coaching"
      "guides"
      "scoring"
      "integrations"
    `,
  }

  const FeatureItem = React.memo(
    ({
      feature,
      index,
    }: {
      feature: (typeof features)[0]
      index: number
    }) => {
      const Icon = feature.icon
      return (
        <motion.div
          key={feature.id}
          variants={itemVariants}
          className={feature.span}
          style={{ 
            willChange: "transform",
            gridArea: feature.id,
          }}
        >
          <SpotlightCard className="h-full group">
            <Card
              className={`h-full border-border-subtle ${feature.bgColor} backdrop-blur-sm transition-all hover:border-border-active`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-surface border border-border group-hover:bg-surface-elevated group-hover:border-border-active transition-all">
                    <Icon className="h-5 w-5 text-text-secondary" />
                  </div>
                  <CardTitle className="text-lg font-jakarta font-medium tracking-tight text-text-primary">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-text-secondary font-inter text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-full min-h-[200px] bg-surface rounded-lg border border-border-subtle">
                {feature.content}
              </CardContent>
            </Card>
          </SpotlightCard>
        </motion.div>
      )
    }
  )
  FeatureItem.displayName = "FeatureItem"

  return (
    <LazyMotion features={domAnimation}>
      <section id="features" className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.5]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(11, 12, 14, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(11, 12, 14, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
              Alles was du brauchst
            </h2>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Eine vollständige CRM-Lösung mit AI-Power für erfolgreichen Vertrieb
            </p>
          </motion.div>

          {/* 3D Gallery für Research Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mb-16"
          >
            <Card className="border-border-subtle bg-surface/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    <Search className="h-5 w-5 text-text-secondary" />
                  </div>
                  <CardTitle className="text-lg font-jakarta font-medium tracking-tight text-text-primary">
                    Research in Sekunden
                  </CardTitle>
                </div>
                <CardDescription className="text-text-secondary font-inter text-sm">
                  Multi-Agent-System mit paralleler Ausführung
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <InfiniteGallery
                  images={[
                    { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=80', alt: 'Company Agent' },
                    { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?w=800&auto=format&fit=crop&q=80', alt: 'People Agent' },
                    { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=80', alt: 'AI Agent' },
                    { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=800&auto=format&fit=crop&q=80', alt: 'Validation Agent' },
                    { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=800&auto=format&fit=crop&q=80', alt: 'Research 1' },
                    { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=800&auto=format&fit=crop&q=80', alt: 'Research 2' },
                    { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=800&auto=format&fit=crop&q=80', alt: 'Research 3' },
                    { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=800&auto=format&fit=crop&q=80', alt: 'Research 4' },
                  ]}
                  speed={1.2}
                  visibleCount={12}
                  className="h-[600px] w-full rounded-lg"
                  enableScrollLimit={true}
                  fadeSettings={{
                    fadeIn: { start: 0.05, end: 0.25 },
                    fadeOut: { start: 0.4, end: 0.43 },
                  }}
                  blurSettings={{
                    blurIn: { start: 0.0, end: 0.1 },
                    blurOut: { start: 0.4, end: 0.43 },
                    maxBlur: 8.0,
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Restliche Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              gridAutoRows: "minmax(200px, auto)",
            }}
          >
            {features.filter(f => f.id !== 'research').map((feature, index) => (
              <FeatureItem key={feature.id} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}

