"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

interface MarketingPageTemplateProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function MarketingPageTemplate({ title, description, children }: MarketingPageTemplateProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-text-secondary font-inter mb-12">
              {description}
            </p>
          )}
          {children || (
            <div className="prose prose-slate max-w-none">
              <p className="text-text-secondary font-inter">
                Diese Seite wird bald verfügbar sein.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

