"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Database, Users, Briefcase, TrendingUp } from "lucide-react"

const modelTabs = [
  { id: "scaleups", label: "Scale-ups", icon: TrendingUp },
  { id: "saas", label: "SaaS startups", icon: Database },
  { id: "smbs", label: "SMBs", icon: Users },
  { id: "investors", label: "Investors", icon: Briefcase },
]

const modelSchemas = {
  scaleups: {
    objects: [
      { name: "User", type: "Standard", attributes: ["User ID", "Engagement score", "User type", "4 More Attributes"] },
      { name: "Deal", type: "Standard", attributes: ["Deal name", "Workspace", "Stage", "2 More Attributes"] },
      { name: "Person", type: "Standard", attributes: ["Name", "Email", "Company", "12 More Attributes"] },
    ],
  },
  saas: {
    objects: [
      { name: "Workspace", type: "Standard", attributes: ["Name", "Company", "Status", "7 More Attributes"] },
      { name: "User", type: "Standard", attributes: ["User ID", "Engagement score", "User type", "4 More Attributes"] },
      { name: "Deal", type: "Standard", attributes: ["Deal name", "Workspace", "Stage", "2 More Attributes"] },
      { name: "Person", type: "Standard", attributes: ["Name", "Email", "Company", "12 More Attributes"] },
    ],
  },
  smbs: {
    objects: [
      { name: "Partnership", type: "Custom", attributes: ["Partnership name", "Partnership type", "Point of contact", "10 More Attributes"] },
      { name: "Project", type: "Custom", attributes: ["Company", "Point of Contact", "Status", "5 More Attributes"] },
      { name: "Invoice", type: "Custom", attributes: ["Company", "Status", "Amount", "3 More Attributes"] },
      { name: "Company", type: "Standard", attributes: ["Name", "Industry", "Domain", "4 More Attributes"] },
      { name: "Person", type: "Standard", attributes: ["Name", "Email", "Company", "11 More Attributes"] },
    ],
  },
  investors: {
    objects: [
      { name: "Fund", type: "Custom", attributes: ["Name", "Domain", "Employees", "7 More Attributes"] },
      { name: "User", type: "Standard", attributes: ["User ID", "Engagement score", "User type", "4 More Attributes"] },
      { name: "Deal", type: "Standard", attributes: ["Company", "Investment amount", "Deal stage", "10 More Attributes"] },
      { name: "Person", type: "Standard", attributes: ["Name", "Email", "Company", "12 More Attributes"] },
    ],
  },
}

export function AdaptiveModelSection() {
  const [activeTab, setActiveTab] = React.useState("scaleups")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const schema = modelSchemas[activeTab as keyof typeof modelSchemas]

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-background border-y border-border-subtle"
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
          <div className="text-sm font-mono text-text-muted mb-4">
            [02] Adaptive model
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
            Ein Paradigmenwechsel in CRM-Flexibilität.
          </h2>
          <p className="text-lg text-text-secondary font-inter mb-12 max-w-2xl">
            IntroKIs leistungsstarkes Datenmodell passt sich an dein Geschäftsmodell an, nicht umgekehrt. Dein Geschäftsmodell – perfekt widergespiegelt in deinem CRM.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {modelTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter transition-all ${
                    isActive
                      ? "bg-text-primary text-white"
                      : "bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary border border-border-subtle hover:border-border-active"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </motion.button>
              )
            })}
          </div>

          <Button variant="outline" className="rounded-full mb-8">
            Explore our data model
          </Button>

          {/* Schema Visualizer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {schema.objects.map((object, index) => (
                <motion.div
                  key={object.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-surface border border-border-subtle rounded-xl p-4 hover:border-border-active transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-jakarta font-medium text-text-primary mb-1">
                        {object.name}
                      </h4>
                      <Badge 
                        variant={object.type === "Standard" ? "secondary" : "default"}
                        className="text-xs"
                      >
                        {object.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {object.attributes.slice(0, 3).map((attr, attrIndex) => (
                      <div
                        key={attrIndex}
                        className="text-sm text-text-secondary font-inter"
                      >
                        {attr}
                      </div>
                    ))}
                    {object.attributes.length > 3 && (
                      <button className="text-xs text-text-muted font-inter hover:text-text-secondary transition-colors">
                        {object.attributes[3]}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Add Object Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: schema.objects.length * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="bg-surface border-2 border-dashed border-border-active rounded-xl p-6 flex flex-col items-center justify-center hover:border-white/40 hover:bg-surface-elevated transition-all group"
              >
                <Plus className="h-6 w-6 text-text-muted group-hover:text-text-primary mb-2 transition-colors" />
                <span className="text-sm font-inter text-text-secondary group-hover:text-text-primary">
                  Add object
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

