"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw, Plus, Share2, MoreVertical, Database, GitBranch, BarChart3, GitBranch as PipelineIcon } from "lucide-react"
import { CompaniesTable } from "./companies-table"
import { DashboardSidebar } from "@/components/ui/dashboard-sidebar"
import { DashboardHeader } from "@/components/ui/dashboard-header"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { AnimatedBarChart } from "@/components/ui/animated-bar-chart"
import { AnimatedDonutChart } from "@/components/ui/animated-donut-chart"

interface DashboardPreviewProps {
  activeFeature: string
}

const featureContent = {
  data: {
    title: "Data Management",
    icon: Database,
    description: "Verwalten Sie alle Ihre Leads, Kontakte und Unternehmen an einem Ort.",
    cards: [
      {
        title: "Leads",
        value: "1,234",
        change: "+12%",
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Kontakte",
        value: "5,678",
        change: "+8%",
        color: "from-purple-500 to-pink-500",
      },
    ],
  },
  workflows: {
    title: "Workflow Automation",
    icon: GitBranch,
    description: "Automatisieren Sie wiederkehrende Aufgaben und Workflows.",
    cards: [
      {
        title: "Aktive Workflows",
        value: "24",
        change: "+3",
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Automatisierte Tasks",
        value: "1,456",
        change: "+156",
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  reporting: {
    title: "Business Metrics",
    icon: BarChart3,
    description: "Analysieren Sie Ihre Performance mit detaillierten Reports.",
    cards: [
      {
        title: "Revenue",
        value: "$1.2M",
        change: "+15%",
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Conversion Rate",
        value: "23.4%",
        change: "+2.1%",
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
  pipeline: {
    title: "Pipeline Management",
    icon: PipelineIcon,
    description: "Verwalten Sie Ihre Deals und Pipeline-Stages.",
    cards: [
      {
        title: "Aktive Deals",
        value: "89",
        change: "+12",
        color: "from-cyan-500 to-blue-500",
      },
      {
        title: "Pipeline Value",
        value: "$2.4M",
        change: "+18%",
        color: "from-violet-500 to-purple-500",
      },
    ],
  },
}

export function DashboardPreview({ activeFeature }: DashboardPreviewProps) {
  const content = featureContent[activeFeature as keyof typeof featureContent] || featureContent.data
  const Icon = content.icon

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {activeFeature === "data" ? (
        /* Full Dashboard Layout with Sidebar */
        <div className="container mx-auto px-0 relative z-10">
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden lg:block">
              <DashboardSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-[800px]">
              {/* Dashboard Header */}
              <DashboardHeader />

              {/* Content Area */}
              <div className="flex-1 p-6">
                {/* Breadcrumbs */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mb-6"
                >
                  <Breadcrumbs
                    items={[
                      { label: "Basepoint", href: "#" },
                      { label: "Companies" },
                    ]}
                  />
                </motion.div>

                {/* Companies Table */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CompaniesTable />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Simplified Layout for Other Features */
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Dashboard Header */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-black/5 border border-black/10">
                <Icon className="h-6 w-6 text-black/70" />
              </div>
              <div>
                <h2 className="text-2xl font-jakarta font-medium tracking-tight text-black">
                  {content.title}
                </h2>
                <p className="text-black/50 font-inter text-sm mt-1">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/20 transition-all">
                <RefreshCw className="h-4 w-4 text-black/70" />
              </button>
              <button className="p-2 rounded-lg border border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/20 transition-all">
                <Plus className="h-4 w-4 text-black/70" />
              </button>
              <button className="p-2 rounded-lg border border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/20 transition-all">
                <Share2 className="h-4 w-4 text-black/70" />
              </button>
              <button className="p-2 rounded-lg border border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/20 transition-all">
                <MoreVertical className="h-4 w-4 text-black/70" />
              </button>
            </div>
          </motion.div>

          {/* Dashboard Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {content.cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="rounded-2xl border border-black/10 bg-black/5 backdrop-blur-sm p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-mono text-black/50 uppercase tracking-wider mb-2">
                      {card.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-jakarta font-medium tracking-tight text-black">
                        {card.value}
                      </span>
                      <span className="text-sm text-green-600 font-inter">
                        {card.change}
                      </span>
                    </div>
                  </div>
                  {/* Real Chart */}
                  {activeFeature === "reporting" ? (
                    <AnimatedBarChart
                      data={[
                        { name: "Jan", value: 40 },
                        { name: "Feb", value: 60 },
                        { name: "Mar", value: 45 },
                        { name: "Apr", value: 80 },
                        { name: "May", value: 70 },
                        { name: "Jun", value: 90 },
                        { name: "Jul", value: 100 },
                      ]}
                      height={192}
                      colorScheme="blue-purple"
                      showAnimation={true}
                    />
                  ) : (
                    <AnimatedDonutChart
                      data={[
                        { name: "Active", value: 65 },
                        { name: "Pending", value: 25 },
                        { name: "Completed", value: 10 },
                      ]}
                      height={192}
                      colorScheme="blue-purple"
                      showAnimation={true}
                      innerRadius={40}
                      outerRadius={80}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  )
}
