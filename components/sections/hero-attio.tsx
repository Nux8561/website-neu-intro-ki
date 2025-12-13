"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DataFlowAnimation } from "@/components/ui/data-flow-animation"

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

export function HeroAttio({ videoUrl, showVideo = false }: HeroAttioProps) {
  const [activeTab, setActiveTab] = React.useState<"data" | "workflows" | "reporting" | "pipeline">("data")

  const tabs = [
    { id: "data", label: "Data" },
    { id: "workflows", label: "Workflows" },
    { id: "reporting", label: "Reporting" },
    { id: "pipeline", label: "Pipeline" },
  ]

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-brand text-text-inverse py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Neu: Multi-Agent Research System mit Echtzeit-Recherche</span>
          <Link href="/features" className="inline-flex items-center gap-1 font-medium hover:underline">
            Mehr erfahren <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-background pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
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
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-6"
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
              className="text-xl text-text-secondary font-inter mb-10 max-w-2xl mx-auto"
            >
              IntroKI ist das KI-native CRM für moderne Sales-Teams. Deep Research in 60 Sekunden, Live Call Coaching und intelligentes Lead Scoring.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link href="/dashboard" className="btn-primary">
                Kostenlos starten
              </Link>
              <Link href="/kontakt" className="btn-secondary">
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
            className="max-w-5xl mx-auto"
          >
            {/* Tab Navigation */}
            <div className="flex items-center justify-center gap-2 mb-6 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-6 py-3 text-sm font-medium transition-all relative ${
                    activeTab === tab.id
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Product Demo Area */}
            <div className="product-demo overflow-hidden rounded-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="relative aspect-[16/10] bg-[#0B0C0E] rounded-xl overflow-hidden"
                >
                  {activeTab === "data" ? (
                    <DataFlowAnimation />
                  ) : (
                    /* Placeholder for other tabs - can add more animations later */
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <Image
                          src={`/screenshots/${activeTab}-view.png`}
                          alt={`IntroKI ${activeTab} View`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                        {/* Fallback content when no image */}
                        <div className="text-slate-400 text-sm">
                          {activeTab === "workflows" && "Workflow Automation kommt bald..."}
                          {activeTab === "reporting" && "Reporting Dashboard kommt bald..."}
                          {activeTab === "pipeline" && "Pipeline View kommt bald..."}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section */}
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

