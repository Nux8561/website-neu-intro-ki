"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Brain, 
  Database, 
  BarChart3,
  ArrowRight,
  Workflow,
  GitBranch,
  Mail,
  Calendar,
  Package,
  DollarSign,
  ShoppingCart,
  Headphones,
  Code,
  Users,
  TrendingUp,
} from "lucide-react"

const platformTabs = [
  { id: "automate", label: "Automate everything", icon: Zap },
  { id: "ai", label: "Deploy AI", icon: Brain },
  { id: "data", label: "Connect any type of data", icon: Database },
  { id: "reporting", label: "Powerful reporting", icon: BarChart3 },
]

interface PlatformSectionProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function PowerfulPlatformSection() {
  const [activeTab, setActiveTab] = React.useState("automate")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-white"
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
          <div className="text-sm font-mono text-[#0B0C0E]/50 mb-4">
            [01] Powerful platform
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
            GTM at full throttle.
          </h2>
          <p className="text-lg text-[#0B0C0E]/70 font-inter mb-12 max-w-2xl">
            Execute your revenue strategy with precision. Design powerful workflows, deploy AI, integrate your data and build detailed reports — all in one platform.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-[#0B0C0E]/10 pb-4">
            {platformTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter transition-all ${
                    isActive
                      ? "bg-[#0B0C0E] text-white"
                      : "bg-[#0B0C0E]/5 text-[#0B0C0E]/70 hover:bg-[#0B0C0E]/10 hover:text-[#0B0C0E] border border-[#0B0C0E]/10 hover:border-[#0B0C0E]/20"
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

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "automate" && (
              <AutomateEverything key="automate" />
            )}
            {activeTab === "ai" && (
              <DeployAI key="ai" />
            )}
            {activeTab === "data" && (
              <ConnectData key="data" />
            )}
            {activeTab === "reporting" && (
              <PowerfulReporting key="reporting" />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// Automate Everything Sub-Section
function AutomateEverything() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  const workflowSteps = [
    {
      type: "trigger",
      title: "When Deal updated",
      description: "Trigger when a Deal's status is updated",
      icon: Zap,
    },
    {
      type: "condition",
      title: "Switch",
      description: "Route to upsell or nurture",
      icon: GitBranch,
    },
    {
      type: "action",
      title: "Enroll in sequence",
      description: 'Enroll person in "Power user upsell"',
      icon: Workflow,
    },
    {
      type: "action",
      title: "Enroll in sequence",
      description: 'Enroll person in "Nurture"',
      icon: Workflow,
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
          Automate everything
        </h3>
        <p className="text-[#0B0C0E]/70 font-inter mb-6">
          You're in control. Automate even the most complex business processes with our powerful, intelligent automation engine.
        </p>
        <Button variant="outline" className="rounded-full">
          Explore automations
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Workflow Visual */}
      <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
        <div className="space-y-4">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#0B0C0E]/10"
              >
                <div className={`p-2 rounded-lg ${
                  step.type === "trigger" ? "bg-blue-500/20 text-blue-600" :
                  step.type === "condition" ? "bg-purple-500/20 text-purple-600" :
                  "bg-green-500/20 text-green-600"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-jakarta font-medium text-[#0B0C0E] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#0B0C0E]/70 font-inter">
                    {step.description}
                  </p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 40 } : { height: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="absolute left-8 mt-12 w-[1px] bg-[#0B0C0E]/20"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

// Deploy AI Sub-Section
function DeployAI() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [thinkingIndex, setThinkingIndex] = React.useState(0)

  const aiTasks = [
    {
      question: "Does the company sell software to other businesses?",
      answer: "Yes, they are a B2B SaaS business",
      thinking: true,
    },
    {
      question: "Did the company raise any funds recently?",
      answer: "$25M raised in Series A funding round",
      thinking: true,
    },
    {
      question: "Who are the key stakeholders at the company?",
      answer: "Adam Kingsley, CEO; Anne Zaragoza, CTO; Tom Wagner, VP of Sales",
      thinking: true,
    },
  ]

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setThinkingIndex(1)
    }, 2000)
    const timer2 = setTimeout(() => {
      setThinkingIndex(2)
    }, 4000)
    const timer3 = setTimeout(() => {
      setThinkingIndex(3)
    }, 6000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
          Deploy AI
        </h3>
        <p className="text-[#0B0C0E]/70 font-inter mb-6">
          Put our research agent to work and scale complex tasks that normally require human effort, like prospecting, lead routing and more.
        </p>
        <Button variant="outline" className="rounded-full">
          Explore AI
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* AI Agent Visual */}
      <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
        <div className="space-y-6">
          {aiTasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="p-4 bg-white rounded-xl border border-[#0B0C0E]/10"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-600">
                  <Brain className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-inter text-[#0B0C0E] mb-2">
                    {task.question}
                  </p>
                  {thinkingIndex > index ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-inter text-[#0B0C0E]/70"
                    >
                      {task.answer}
                    </motion.p>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-[#0B0C0E]/50">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 border-2 border-[#0B0C0E]/30 border-t-[#0B0C0E] rounded-full"
                      />
                      <span>AI is thinking...</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Connect Data Sub-Section
function ConnectData() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  const dataCategories = [
    { name: "Sales engagement", icon: TrendingUp },
    { name: "Email & calendar", icon: Mail },
    { name: "Data warehouses", icon: Database },
    { name: "Customer support", icon: Headphones },
    { name: "Billing & invoicing", icon: DollarSign },
    { name: "Product data", icon: Package },
    { name: "Workspace", icon: Users },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
          Connect any type of data
        </h3>
        <p className="text-[#0B0C0E]/70 font-inter mb-6">
          Sync product data, billing data, and everything in between, for a real-time single source of truth for your business.
        </p>
        <Button variant="outline" className="rounded-full">
          Explore data
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="p-6 bg-white border border-[#0B0C0E]/10 rounded-xl hover:border-[#0B0C0E]/20 hover:bg-[#0B0C0E]/5 transition-all cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 rounded-lg bg-[#0B0C0E]/5 w-fit mb-3 group-hover:bg-[#0B0C0E]/10 transition-colors">
                <Icon className="h-6 w-6 text-[#0B0C0E]/70" />
              </div>
              <p className="text-sm font-inter text-[#0B0C0E] font-medium">
                {category.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

// Powerful Reporting Sub-Section
function PowerfulReporting() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedPeriod, setSelectedPeriod] = React.useState("30D")

  const periods = ["7D", "30D", "3M", "6M", "12M", "All"]
  const plans = ["Plus", "Pro", "Enterprise"]

  const chartData = [
    { month: "July", value: 1920240, plan: "Pro" },
    { month: "August", value: 2100000, plan: "Pro" },
    { month: "September", value: 2300000, plan: "Pro" },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
          Powerful reporting
        </h3>
        <p className="text-[#0B0C0E]/70 font-inter mb-6">
          Create real-time, detailed reports that scale with your data. Visualize, customize, and get deep insights in seconds — not hours.
        </p>
        <Button variant="outline" className="rounded-full">
          Explore reporting
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Report Visual */}
      <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
        {/* Filters */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-full text-sm font-inter transition-all ${
                  selectedPeriod === period
                    ? "bg-[#0B0C0E] text-white"
                    : "bg-white text-[#0B0C0E]/70 hover:bg-[#0B0C0E]/5 border border-[#0B0C0E]/10"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {plans.map((plan) => (
              <button
                key={plan}
                className="px-3 py-1 rounded-full text-sm font-inter bg-white text-[#0B0C0E]/70 hover:bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 transition-all"
              >
                {plan} plan
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl p-6 border border-[#0B0C0E]/10">
          <div className="mb-4">
            <p className="text-3xl font-jakarta font-medium text-[#0B0C0E] mb-1">
              $2.8M
            </p>
            <p className="text-sm text-[#0B0C0E]/50 font-inter">
              Revenue
            </p>
          </div>
          
          {/* Simple Bar Chart */}
          <div className="flex items-end gap-4 h-48">
            {chartData.map((data, index) => {
              const maxValue = Math.max(...chartData.map(d => d.value))
              const height = (data.value / maxValue) * 100
              return (
                <motion.div
                  key={data.month}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : { height: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group"
                >
                  <div className="absolute -top-8 left-0 right-0 text-center">
                    <p className="text-xs font-inter text-[#0B0C0E]/50">
                      {data.month}
                    </p>
                  </div>
                  <div className="absolute -top-16 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#0B0C0E] text-white text-xs px-2 py-1 rounded">
                      ${(data.value / 1000000).toFixed(2)}M
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

