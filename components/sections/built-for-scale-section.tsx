"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Globe, Users, Zap, Database } from "lucide-react"

export function BuiltForScaleSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { 
      value: "1,000,000", 
      label: "Customer records",
      icon: Database,
      suffix: "",
      animate: true,
    },
    { 
      value: "1+", 
      label: "Countries",
      icon: Globe,
      suffix: "",
      animate: false,
    },
    { 
      value: "1+", 
      label: "Customers",
      icon: Users,
      suffix: "",
      animate: false,
    },
    { 
      value: "1", 
      label: "Uptime",
      icon: Zap,
      suffix: "",
      animate: false,
    },
  ]

  const securityBadges = [
    { name: "GDPR", icon: Shield },
    { name: "CCPA", icon: Shield },
    { name: "ISO", icon: Shield },
  ]

  const [countedValue, setCountedValue] = React.useState(0)

  React.useEffect(() => {
    if (isInView && stats[0]?.animate) {
      const duration = 2000
      const steps = 100
      const increment = 1000000 / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= 1000000) {
          setCountedValue(1000000)
          clearInterval(timer)
        } else {
          setCountedValue(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

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
            [04] Built for scale
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
            The system of action for the next generation.
          </h2>
          <p className="text-lg text-text-secondary font-inter mb-12 max-w-2xl">
            IntroKI ist für Skalierung gebaut. Unsere Kunden durchsuchen Millionen von Datensätzen mit unter 50ms Latenz.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-surface border border-border-subtle rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-text-secondary" />
                  </div>
                  <div className="text-3xl font-jakarta font-medium text-text-primary mb-1">
                    {stat.animate && isInView 
                      ? countedValue.toLocaleString() 
                      : stat.value
                    }
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-text-secondary font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Security Section */}
          <div className="bg-surface border border-border-subtle rounded-2xl p-8">
            <h3 className="text-2xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
              Scale with security.
            </h3>
            <p className="text-text-secondary font-inter mb-6 max-w-2xl">
              IntroKI wird von branchenführenden Drittanbietern geprüft und zertifiziert.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {securityBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border-subtle rounded-full"
                  >
                    <Icon className="h-4 w-4 text-text-secondary" />
                    <span className="text-sm font-inter text-text-primary font-medium">
                      {badge.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <Button variant="outline" className="rounded-full">
              Talk to sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

