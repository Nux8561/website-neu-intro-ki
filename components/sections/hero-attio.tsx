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
  const [animationKey, setAnimationKey] = React.useState(0)

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

  // Auto-rotate tabs every 12 seconds
  React.useEffect(() => {
    if (isUserInteracting) return

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current)
        const nextIndex = (currentIndex + 1) % tabs.length
        const nextTab = tabs[nextIndex].id
        // Force remount of animation components on auto-rotate
        setAnimationKey(prev => prev + 1)
        return nextTab
      })
    }, 12000) // 12 seconds

    return () => clearInterval(interval)
  }, [isUserInteracting])

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
    // Force remount of animation components before changing tab
    setAnimationKey(prev => prev + 1)
    setActiveTab(tabId)
  }

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-brand text-text-inverse py-2 sm:py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="line-clamp-1">Neu: Multi-Agent Research System mit Echtzeit-Recherche</span>
          </div>
          <Link href="/features" className="inline-flex items-center gap-1 font-medium hover:underline whitespace-nowrap">
            Mehr erfahren <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Hero Section with MeshGradient Background */}
      <section className="relative bg-background pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* MeshGradient Background - ONLY until tabs, not further */}
        <div className="absolute top-0 left-0 right-0 bottom-auto overflow-hidden" style={{ height: '520px' }}>
          {mounted && (
            <>
              <MeshGradient
                width={dimensions.width}
                height={520}
                colors={["#3B82F6", "#8B5CF6", "#6366F1", "#A855F7", "#EC4899", "#06B6D4"]}
                distortion={0.5}
                swirl={0.3}
                grainMixer={0}
                grainOverlay={0}
                speed={0.25}
                offsetX={0.04}
              />
              <div className="absolute inset-0 pointer-events-none bg-black/40" />
              {/* Smooth fade transition at the bottom - longer fade for smoother transition */}
              <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-b from-transparent via-background/30 to-background" />
            </>
          )}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            className="max-w-4xl mx-auto text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Button */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                href="/features"
                className="pill-button inline-flex items-center gap-2 text-text-secondary hover:text-text-primary"
              >
                <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                Entdecke unsere KI-Integrationen
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-4 sm:mb-6 px-4"
            >
              Sales Intelligence
              <br />
              <span className="text-gradient bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                neu definiert.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-text-secondary font-inter mb-8 md:mb-10 max-w-2xl mx-auto px-4"
            >
              IntroKI ist das KI-native CRM für moderne Sales-Teams. Deep Research in 60 Sekunden, Live Call Coaching und intelligentes Lead Scoring.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <Link href="/dashboard" className="btn-primary w-full sm:w-auto text-center">
                Kostenlos starten
              </Link>
              <Link href="/kontakt" className="btn-secondary w-full sm:w-auto text-center">
                Demo buchen
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Demo Tabs */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="max-w-5xl mx-auto relative z-10"
          >
            {/* Tab Navigation with Frame */}
            <div className="mb-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg p-2 sm:p-2.5">
              <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all whitespace-nowrap touch-manipulation min-h-[44px] rounded-lg ${
                      activeTab === tab.id
                        ? "text-text-primary bg-white/20"
                        : "text-text-muted hover:text-text-secondary hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Demo Area */}
            <div className="product-demo overflow-hidden rounded-2xl border border-white/10 bg-white">
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === "data" && (
                  <motion.div
                    key={`data-tab-${animationKey}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative aspect-[16/10] bg-gray-50 rounded-xl overflow-hidden"
                    style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}
                  >
                    <DataFlowAnimation key={`data-animation-${animationKey}`} />
                  </motion.div>
                )}
                {activeTab === "priorities" && (
                  <motion.div
                    key={`priorities-tab-${animationKey}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative aspect-[16/10] bg-gray-50 rounded-xl"
                    style={{ position: 'relative', width: '100%', height: '100%', minHeight: '600px', overflow: 'visible' }}
                  >
                    <PrioritiesAnimation key={`priorities-animation-${animationKey}`} />
                  </motion.div>
                )}
                {activeTab === "reporting" && (
                  <motion.div
                    key={`reporting-tab-${animationKey}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative aspect-[16/10] bg-[#0B0C0E] rounded-xl overflow-hidden"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#0B0C0E]">
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
                        {/* Fallback content when no image */}
                        <div className="relative z-10 text-slate-400 text-sm">
                          Reporting Dashboard kommt bald...
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeTab === "pipeline" && (
                  <motion.div
                    key={`pipeline-tab-${animationKey}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative aspect-[16/10] bg-[#0B0C0E] rounded-xl overflow-hidden"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#0B0C0E]">
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
                        {/* Fallback content when no image */}
                        <div className="relative z-10 text-slate-400 text-sm">
                          Pipeline View kommt bald...
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section - NO gradient background */}
      <section className="py-16 border-t border-border bg-surface/50">
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

