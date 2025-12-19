import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, Command, CheckCircle2, Zap } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

export function HeroAttio() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-32 border-b border-slate-200">
      {/* Hintergrund: Technisches Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-16 px-4">
        {/* TEXT TEIL */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-500">Neu:</span>
            <span className="font-semibold text-slate-800">Research Orchestrator 2.0</span>
          </div>

          {/* Headline - Tight & Heavy */}
          <h1 className="mb-6 text-5xl font-semibold tracking-tighter text-slate-900 sm:text-7xl">
            Dein CRM ist blind. <br className="hidden sm:block" />
            <span className="text-slate-400">Intro KI sieht alles.</span>
          </h1>

          {/* Subline */}
          <p className="mx-auto mb-10 max-w-2xl text-sm md:text-lg text-slate-500 leading-relaxed">
            Schluss mit manueller Dateneingabe. Intro KI überwacht Deals, News und Signale automatisch – und
            sagt deinem Team proaktiv, was zu tun ist.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform duration-attio-fast ease-attio-ease-out hover:scale-[1.02] hover:bg-slate-800"
            >
              Kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              Wie es funktioniert
            </Link>
          </div>
        </div>

        {/* FAKE UI TEIL (Der "Attio Look") */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ENTERPRISE_SPRING}
          className="relative mx-auto w-full max-w-5xl"
        >
          {/* Glow hinter der UI */}
          <div className="absolute -inset-1 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-100/40 via-purple-100/40 to-emerald-100/40 blur-2xl" />

          {/* Das Fenster */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Window Header */}
            <div className="flex h-11 items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-slate-200/80" />
                <div className="h-3 w-3 rounded-full bg-slate-200/80" />
              </div>
              {/* Fake Search Bar */}
              <div className="mx-auto flex w-full max-w-sm items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400 shadow-sm">
                <Search className="mr-2 h-3.5 w-3.5 text-slate-400" />
                <span>Search leads & signals...</span>
                <span className="ml-auto flex items-center gap-1 rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-400">
                  <Command className="h-2 w-2" /> K
                </span>
              </div>
              <div className="w-10" />
            </div>

            {/* Window Body (Split View) */}
            <div className="flex h-[450px] text-left">
              {/* Sidebar */}
              <div className="hidden w-60 border-r border-slate-100 bg-slate-50/30 p-4 md:block">
                <div className="mb-6 space-y-1">
                  <div className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Workspace
                  </div>
                  {["Inbox", "Prioritized Leads", "Deal Flow", "Research"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center rounded-md px-2 py-1.5 text-xs font-medium ${
                        i === 1 ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {i === 1 && <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />}
                      {item}
                      {i === 0 && <span className="ml-auto text-slate-400">4</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Canvas */}
              <div className="relative flex-1 bg-slate-50/20 p-6 md:p-8">
                {/* Hintergrund Grid im Canvas */}
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Card 1: Lead Signal */}
                <div className="relative mb-4 flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                    AC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">Acme Corp</h3>
                        <p className="text-[11px] text-slate-500">SaaS • Berlin • Series B</p>
                      </div>
                      <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        Strong Buy Signal
                      </span>
                    </div>
                    <div className="mt-3 flex gap-3 rounded border border-slate-100 bg-slate-50 p-2 text-[11px] text-slate-500">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      <span>CTO sucht nach &ldquo;AI Sales Tools&ldquo; auf LinkedIn.</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Action Suggestion (Skeleton-Style) */}
                <div className="relative flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-2 text-xs text-slate-600 opacity-90">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-purple-100">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-24 rounded bg-slate-100" />
                    <div className="h-1.5 w-12 rounded bg-slate-100" />
                  </div>
                  <div className="rounded bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                    Generieren
                  </div>
                </div>

                {/* Floating Metrics */}
                <div className="absolute right-8 top-1/2 w-40 rounded-lg border border-slate-200 bg-white p-3 text-[11px] text-slate-600 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="font-semibold text-slate-700">Enrichment</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full overflow-hidden rounded bg-slate-100">
                      <div className="h-full w-[80%] bg-emerald-500" />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400">
                      <span>Datenquellen</span>
                      <span>12/15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DataFlowAnimation } from "@/components/ui/data-flow-animation"
import { PrioritiesAnimation } from "@/components/ui/priorities-animation"
import { AppWindowFrame } from "@/components/ui/app-window-frame"
import { WorkflowSimulation } from "@/components/visuals/WorkflowSimulation"
import { DataEnrichmentVisual } from "@/components/visuals/DataEnrichmentVisual"
import { ReportingVisual } from "@/components/visuals/ReportingVisual"
import { PipelineVisual } from "@/components/visuals/PipelineVisual"
import { MeshGradient } from "@paper-design/shaders-react"
import { attioTransition } from "@/lib/animations"
import { StarfieldBackground } from "@/components/ui/hyperdrive-hero"
import { CustomIcon } from "@/components/icons/custom-icon"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

// Customer logos - ONLY real, official company logos
// IMPORTANT: All logos must be downloaded from official brand asset pages
// Sources: https://brandfetch.com or official company brand pages
// Do NOT use placeholder or retrofitted logos
const customerLogos = [
  { name: "OpenAI", logo: "/images/openai-1-5u0onpsnpplsd0el4s93im.webp" }, // OpenAI Logo
  { name: "Stripe", logo: "/logos/stripe.svg" },      // https://stripe.com/about/brand-assets
  { name: "Linear", logo: "/logos/linear.svg" },     // https://linear.app/brand
  { name: "Notion", logo: "/logos/notion.svg" },      // https://www.notion.so/logo-and-brand-guidelines
  { name: "Slack", logo: "/logos/slack.svg" },        // https://slack.com/intl/en-de/media-kit
  { name: "HubSpot", logo: "/logos/hubspot.svg" },    // https://www.hubspot.com/brand-kit
  { name: "Zapier", logo: "/logos/zapier.svg" },       // https://zapier.com/about/brand-assets
]

interface HeroAttioProps {
  videoUrl?: string
  showVideo?: boolean
}

const tabs = [
  { id: "data" as const, label: "Data" },
  { id: "workflows" as const, label: "Workflows" },
  { id: "reporting" as const, label: "Reporting" },
  { id: "pipeline" as const, label: "Pipeline" },
]

export function HeroAttio({ videoUrl, showVideo = false }: HeroAttioProps) {
  const [activeTab, setActiveTab] = React.useState<"data" | "workflows" | "reporting" | "pipeline">("data")
  const [dimensions, setDimensions] = React.useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = React.useState(false)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)
  const [isHoveringTabs, setIsHoveringTabs] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Auto-rotate tabs every 12 seconds (pause on user interaction or hover)
  React.useEffect(() => {
    if (isUserInteracting || isHoveringTabs) return

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex].id
      })
    }, 12000) // 12 seconds

    return () => clearInterval(interval)
  }, [isUserInteracting, isHoveringTabs])

  // Reset user interaction flag after 15 seconds of no interaction
  React.useEffect(() => {
    if (!isUserInteracting) return

    const timeout = setTimeout(() => {
      setIsUserInteracting(false)
    }, 15000)

    return () => clearTimeout(timeout)
  }, [isUserInteracting, activeTab])

  const handleTabChange = (tabId: typeof activeTab) => {
    setIsUserInteracting(true)
    setActiveTab(tabId)
  }

  return (
    <>
      {/* Hero Section - Attio Style */}
      <section className="relative bg-[#FAFAFB] pt-12 sm:pt-16 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        {/* Starfield Animation im Hintergrund */}
        <StarfieldBackground />
        
        <div className="container-responsive max-w-7xl mx-auto relative z-10">
          {/* Animation nur bis hier - Hero Content Bereich */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Ankündigungs-Pill (Badge) - Attio Style */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-attio-subtle bg-attio-gray hover:bg-gray-50 transition-colors text-sm font-inter font-medium text-gray-700 attio-link-underline"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Vertraut von modernen Vertriebsteams
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>

            {/* Hauptüberschrift (H1) - Attio Style */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-inter-display font-bold tracking-tighter text-[#0A0A0A] mb-6"
            >
              Das CRM, das Ihnen sagt, was zu tun ist.
            </motion.h1>

            {/* Subheadline - Attio Style */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-inter font-normal text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Verabschieden Sie sich von passiven Datenfriedhöfen und Excel-Chaos. IntroKI passt sich Ihrem Geschäftsmodell an und führt Ihr Team proaktiv durch den Tag.
            </motion.p>

            {/* CTA Buttons - Attio Style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="bg-black text-white hover:bg-gray-900 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out hover:scale-[1.02] font-inter"
              >
                Demo buchen
              </Link>
              <Link
                href="/developers"
                className="bg-white border border-attio-subtle text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out font-inter"
              >
                Dokumentation ansehen
              </Link>
            </motion.div>

            {/* Feature Icons - USP Highlight */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8"
            >
              <CustomIcon name="platform" size="sm" variant="decorative" />
              <CustomIcon name="integration" size="sm" variant="decorative" />
              <CustomIcon name="aiBrain" size="sm" variant="decorative" />
              <CustomIcon name="automation" size="sm" variant="decorative" />
              <span className="text-xs sm:text-sm text-gray-500 font-inter">
                + 50 weitere Features
              </span>
            </motion.div>
          </motion.div>

          {/* Product Demo Visual - Attio Style - Animation endet hier */}
          <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-attio-card overflow-hidden">
              {/* Tab Navigation (oben im Fenster) - Attio Style - Keine Animation ab hier */}
              <div className="bg-attio-gray border-b border-attio-subtle px-3 sm:px-6 py-2 sm:py-3 relative z-10 overflow-x-auto">
                <div className="flex items-center gap-1 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-inter font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-gray-900 border-b-2 border-black"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* App Preview Area - Attio Style */}
              <div className="relative aspect-[16/10] bg-white overflow-hidden z-0">
                <AnimatePresence mode="wait">
                  {activeTab === "data" && (
                    <motion.div
                      key="data-tab"
                      role="tabpanel"
                      id="tabpanel-data"
                      aria-labelledby="tab-data"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        willChange: "opacity",
                        transform: "translateZ(0)",
                      }}
                      transition={attioTransition}
                      className="absolute inset-0 bg-attio-gray overflow-hidden z-0"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          willChange: "opacity",
                          transform: "translateZ(0)",
                        }}
                        transition={attioTransition}
                        className="absolute inset-0 flex items-center justify-center p-6 bg-attio-gray h-full z-0"
                      >
                        <div className="w-full h-full max-w-4xl relative z-0">
                          <AppWindowFrame withSidebar title="Data Enrichment" className="h-full relative z-0">
                            <div className="h-full flex items-center justify-center p-8 relative z-0">
                              <div className="w-full max-w-md relative z-0">
                                <DataEnrichmentVisual />
                              </div>
                            </div>
                          </AppWindowFrame>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                  {activeTab === "workflows" && (
                    <motion.div
                      key="workflows-tab"
                      role="tabpanel"
                      id="tabpanel-workflows"
                      aria-labelledby="tab-workflows"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        willChange: "opacity",
                        transform: "translateZ(0)",
                      }}
                      transition={attioTransition}
                      className="absolute inset-0 bg-attio-gray overflow-hidden z-0"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          willChange: "opacity",
                          transform: "translateZ(0)",
                        }}
                        transition={attioTransition}
                        className="absolute inset-0 flex items-center justify-center p-6 bg-attio-gray h-full z-0"
                      >
                        <div className="w-full h-full max-w-4xl relative z-0 overflow-hidden">
                          <AppWindowFrame withSidebar title="Workflow Automation" className="h-full relative z-0 overflow-hidden">
                            <div className="relative w-full h-full overflow-hidden z-0">
                              <WorkflowSimulation />
                            </div>
                          </AppWindowFrame>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                  {activeTab === "reporting" && (
                    <motion.div
                      key="reporting-tab"
                      role="tabpanel"
                      id="tabpanel-reporting"
                      aria-labelledby="tab-reporting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        willChange: "opacity",
                        transform: "translateZ(0)",
                      }}
                      transition={attioTransition}
                      className="absolute inset-0 bg-attio-gray overflow-hidden z-0"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          willChange: "opacity",
                          transform: "translateZ(0)",
                        }}
                        transition={attioTransition}
                        className="absolute inset-0 flex items-center justify-center p-6 bg-attio-gray h-full z-0"
                      >
                        <div className="w-full h-full max-w-4xl relative z-0 overflow-hidden">
                          <AppWindowFrame withSidebar title="Revenue Analytics" className="h-full relative z-0 overflow-hidden">
                            <div className="relative w-full h-full overflow-hidden z-0">
                              <ReportingVisual />
                            </div>
                          </AppWindowFrame>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                  {activeTab === "pipeline" && (
                    <motion.div
                      key="pipeline-tab"
                      role="tabpanel"
                      id="tabpanel-pipeline"
                      aria-labelledby="tab-pipeline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        willChange: "opacity",
                        transform: "translateZ(0)",
                      }}
                      transition={attioTransition}
                      className="absolute inset-0 bg-attio-gray overflow-hidden z-0"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          willChange: "opacity",
                          transform: "translateZ(0)",
                        }}
                        transition={attioTransition}
                        className="absolute inset-0 flex items-center justify-center p-6 bg-attio-gray h-full z-0"
                      >
                        <div className="w-full h-full max-w-4xl relative z-0 overflow-hidden">
                          <AppWindowFrame withSidebar title="Sales Pipeline" className="h-full relative z-0 overflow-hidden">
                            <div className="relative w-full h-full overflow-hidden z-0">
                              <PipelineVisual />
                            </div>
                          </AppWindowFrame>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section - Attio Style */}
      <section className="py-20 border-t border-gray-200 bg-white">
        <div className="container-responsive max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="text-center motion-safe"
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          >
            <p className="text-sm text-text-muted mb-8 font-inter">
              Vertraut von führenden Unternehmen
            </p>
            <div className="logo-grid max-w-4xl mx-auto">
              {customerLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="logo-item motion-safe"
                  style={{
                    willChange: "opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Hide logo if file doesn't exist - no fallback text
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}

