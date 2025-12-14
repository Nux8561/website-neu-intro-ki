"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DataFlowAnimation } from "@/components/ui/data-flow-animation"
import { PrioritiesAnimation } from "@/components/ui/priorities-animation"
import { MeshGradient } from "@paper-design/shaders-react"

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
      damping: 25,
    },
  },
}

// Customer logos
const customerLogos = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Linear", logo: "/logos/linear.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
]

interface HeroAttioProps {
  videoUrl?: string
  showVideo?: boolean
}

const tabs = [
  { id: "data" as const, label: "Data" },
  { id: "priorities" as const, label: "Prioritäten" },
  { id: "reporting" as const, label: "Reporting" },
  { id: "pipeline" as const, label: "Pipeline" },
]

export function HeroAttio({ videoUrl, showVideo = false }: HeroAttioProps) {
  const [activeTab, setActiveTab] = React.useState<"data" | "priorities" | "reporting" | "pipeline">("data")
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
      <section className="relative bg-[#FAFAFB] pt-16 pb-20 sm:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E6E7EA] bg-gray-100 hover:bg-gray-200/80 transition-colors text-sm font-inter font-medium text-gray-700"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Explore our integration with Granola
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>

            {/* Hauptüberschrift (H1) - Attio Style */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-inter-display font-bold tracking-tighter text-[#0A0A0A] mb-6"
            >
              Customer relationship magic.
            </motion.h1>

            {/* Subheadline - Attio Style */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-inter font-normal text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Attio is the AI-native CRM for GTM builders.
            </motion.p>

            {/* CTA Buttons - Attio Style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/pricing"
                className="bg-black text-white hover:bg-gray-900 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out hover:scale-[1.02] font-inter"
              >
                Start for free
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out font-inter"
              >
                Talk to sales
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Demo Visual - Attio Style */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-16 sm:mt-20 max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
              {/* Tab Navigation (oben im Fenster) - Attio Style */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
                <div className="flex items-center gap-1">
                  {["Data", "Workflows", "Reporting", "Pipeline"].map(
                    (tab, index) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 text-sm font-inter font-medium transition-colors ${
                          index === 0
                            ? "text-gray-900 border-b-2 border-black"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* App Preview Area - Attio Style */}
              <div className="relative aspect-[16/10] bg-white">
                <AnimatePresence mode="sync">
                  {activeTab === "data" && (
                    <motion.div
                      key="data-tab"
                      role="tabpanel"
                      id="tabpanel-data"
                      aria-labelledby="tab-data"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.3 }}
                      className="absolute inset-0 bg-gray-50 overflow-hidden"
                    >
                      <DataFlowAnimation key="data-animation" />
                    </motion.div>
                  )}
                  {activeTab === "priorities" && (
                    <motion.div
                      key="priorities-tab"
                      role="tabpanel"
                      id="tabpanel-priorities"
                      aria-labelledby="tab-priorities"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.3 }}
                      className="absolute inset-0 bg-gray-50"
                    >
                      <PrioritiesAnimation key="priorities-animation" />
                    </motion.div>
                  )}
                  {activeTab === "reporting" && (
                    <motion.div
                      key="reporting-tab"
                      role="tabpanel"
                      id="tabpanel-reporting"
                      aria-labelledby="tab-reporting"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.3 }}
                      className="absolute inset-0 bg-gray-50 overflow-hidden"
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-6 bg-gray-50">
                        <div className="text-center">
                          <Image
                            src={`/screenshots/reporting-view.png`}
                            alt={`IntroKI Reporting View`}
                            fill
                            className="object-cover rounded-xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                          <div className="relative z-10 text-gray-500 text-sm">
                            Reporting Dashboard kommt bald...
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === "pipeline" && (
                    <motion.div
                      key="pipeline-tab"
                      role="tabpanel"
                      id="tabpanel-pipeline"
                      aria-labelledby="tab-pipeline"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.3 }}
                      className="absolute inset-0 bg-gray-50 overflow-hidden"
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-6 bg-gray-50">
                        <div className="text-center">
                          <Image
                            src={`/screenshots/pipeline-view.png`}
                            alt={`IntroKI Pipeline View`}
                            fill
                            className="object-cover rounded-xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                          <div className="relative z-10 text-gray-500 text-sm">
                            Pipeline View kommt bald...
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section - Attio Style */}
      <section className="py-20 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="text-center"
          >
            <p className="text-sm text-text-muted mb-8 font-inter">
              Vertraut von führenden Unternehmen
            </p>
            <div className="logo-grid max-w-4xl mx-auto">
              {customerLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="logo-item"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if logo not found
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('span')
                        fallback.className = 'text-text-muted font-inter font-medium text-sm'
                        fallback.textContent = logo.name
                        parent.appendChild(fallback)
                      }
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

