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
    if (isInView && stats[0].animate) {
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
  }, [isInView])

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-white border-y border-[#0B0C0E]/10"
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
            [04] Built for scale
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
            The system of action for the next generation.
          </h2>
          <p className="text-lg text-[#0B0C0E]/70 font-inter mb-12 max-w-2xl">
            Attio is built for scale. Our customers sort through millions of records with sub-50ms latency.
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
                  className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-[#0B0C0E]/70" />
                  </div>
                  <div className="text-3xl font-jakarta font-medium text-[#0B0C0E] mb-1">
                    {stat.animate && isInView 
                      ? countedValue.toLocaleString() 
                      : stat.value
                    }
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-[#0B0C0E]/70 font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Security Section */}
          <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
              Scale with security.
            </h3>
            <p className="text-[#0B0C0E]/70 font-inter mb-6 max-w-2xl">
              Attio is audited and certified by industry-leading third party standards.
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
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#0B0C0E]/10 rounded-full"
                  >
                    <Icon className="h-4 w-4 text-[#0B0C0E]/70" />
                    <span className="text-sm font-inter text-[#0B0C0E] font-medium">
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

