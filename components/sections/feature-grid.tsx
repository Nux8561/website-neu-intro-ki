"use client"

import * as React from "react"
import { LazyMotion, motion, domAnimation } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Workflow } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Mock Graph Component
function MockGraph() {
  const [pathLength, setPathLength] = React.useState(0)
  const pathRef = React.useRef<SVGPathElement>(null)

  React.useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

  return (
    <div className="h-full w-full p-6">
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full"
        style={{ willChange: "transform" }}
      >
        <motion.path
          ref={pathRef}
          d="M 20 150 Q 75 50, 150 100 T 280 80"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4538" />
            <stop offset="100%" stopColor="#FF6B58" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Avatar Stack Component
function AvatarStack() {
  const avatars = [
    { initial: "JD", color: "bg-accent" },
    { initial: "SM", color: "bg-accent-light" },
    { initial: "AB", color: "bg-blue-500" },
    { initial: "CD", color: "bg-purple-500" },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center gap-3">
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            className={`w-10 h-10 rounded-full ${avatar.color} flex items-center justify-center text-white text-xs font-mono font-medium`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            style={{ marginLeft: index > 0 ? "-12px" : "0" }}
          >
            {avatar.initial}
          </motion.div>
        ))}
        <motion.span
          className="text-sm text-text-muted font-inter ml-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          +12 mehr
        </motion.span>
      </div>
    </div>
  )
}

// Pipeline Kanban Component
function PipelineKanban() {
  const columns = [
    { name: "Backlog", items: 3, color: "bg-slate-500" },
    { name: "In Progress", items: 5, color: "bg-blue-500" },
    { name: "Review", items: 2, color: "bg-yellow-500" },
    { name: "Done", items: 8, color: "bg-green-500" },
  ]

  return (
    <div className="p-6 h-full flex flex-col gap-4">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex-1 flex flex-col gap-2">
          <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider">
            {column.name}
          </h4>
          <div className="flex-1 flex gap-2">
            {Array.from({ length: column.items }).map((_, itemIndex) => (
              <motion.div
                key={itemIndex}
                className={`h-2 rounded-full ${column.color} flex-1`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: colIndex * 0.2 + itemIndex * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function FeatureGrid() {
  const features = [
    {
      title: "Intelligente Analysen",
      description: "KI-gestützte Einblicke in Echtzeit",
      icon: TrendingUp,
      span: "col-span-2",
      content: <MockGraph />,
    },
    {
      title: "Team Collaboration",
      description: "Nahtlose Zusammenarbeit",
      icon: Users,
      span: "col-span-1",
      content: <AvatarStack />,
    },
    {
      title: "Workflow Automation",
      description: "Automatisierte Prozesse",
      icon: Workflow,
      span: "col-span-1 row-span-2",
      content: <PipelineKanban />,
    },
    {
      title: "Real-time Sync",
      description: "Immer auf dem neuesten Stand",
      icon: TrendingUp,
      span: "col-span-2",
      content: (
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="h-20 rounded-lg bg-surface border border-border-subtle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
  ]

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
          key={index}
          variants={itemVariants}
          className={feature.span}
          style={{ willChange: "transform" }}
        >
          <SpotlightCard className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/20 border border-accent/30">
                  <Icon className="h-5 w-5 text-accent-light" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="h-full min-h-[200px]">
              {feature.content}
            </CardContent>
          </SpotlightCard>
        </motion.div>
      )
    }
  )
  FeatureItem.displayName = "FeatureItem"

  return (
    <LazyMotion features={domAnimation}>
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
              Eine vollständige CRM-Lösung, die sich an deine Bedürfnisse anpasst
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}

