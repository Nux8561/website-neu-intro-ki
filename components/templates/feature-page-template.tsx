"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Check, LucideIcon } from "lucide-react"
import Image from "next/image"

// Attio Spring Physics
const attioTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
}

// Types
export interface FeatureItem {
  kicker?: string
  title: string
  description: string
  items?: string[]
  image?: string | React.ReactNode
  imagePosition?: "left" | "right"
}

export interface BentoGridItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeaturePageTemplateProps {
  // Hero
  title: string
  subtitle: string
  heroImage?: string | React.ReactNode
  documentationLink?: string

  // Trusted By
  trustedBy?: {
    label?: string
    logos?: string[]
  }

  // Zig-Zag Features
  features?: FeatureItem[]

  // Bento Grid
  bentoGridItems?: BentoGridItem[]

  // CTA
  ctaTitle?: string
  ctaSubtitle?: string
}

export function FeaturePageTemplate({
  title,
  subtitle,
  heroImage,
  documentationLink = "/developers",
  trustedBy,
  features = [],
  bentoGridItems = [],
  ctaTitle = "Ready to get started?",
  ctaSubtitle = "Book a demo to see how this feature can transform your workflow.",
}: FeaturePageTemplateProps) {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const featureRefs = features.map(() => React.useRef(null))
  const featureInViews = featureRefs.map((ref) => useInView(ref, { once: true, margin: "-100px" }))

  const bentoRef = React.useRef(null)
  const bentoInView = useInView(bentoRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={attioTransition}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-[64px] leading-[1.1] tracking-tight font-medium text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                Book a demo
              </Link>
              {documentationLink && (
                <Link
                  href={documentationLink}
                  className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out"
                >
                  View Documentation
                </Link>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...attioTransition, delay: 0.2 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-lg border border-gray-200 bg-gray-100 overflow-hidden"
            >
              {typeof heroImage === "string" ? (
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {heroImage}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Trusted By Strip */}
      {trustedBy && trustedBy.logos && trustedBy.logos.length > 0 && (
        <section className="py-12 md:py-16 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={attioTransition}
              className="text-center"
            >
              <p className="text-sm text-gray-500 mb-8">
                {trustedBy.label || "Trusted by leading data teams"}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {trustedBy.logos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-8 md:h-10 w-auto opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-attio"
                  >
                    {typeof logo === "string" ? (
                      <Image
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        width={120}
                        height={40}
                        className="h-full w-auto object-contain"
                      />
                    ) : (
                      <div className="h-full w-24 bg-gray-300 rounded" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Zig-Zag Feature Sections */}
      {features.map((feature, index) => {
        const isLeft = feature.imagePosition === "left" || (index % 2 === 0 && !feature.imagePosition)
        const ref = featureRefs[index]
        const inView = featureInViews[index]

        return (
          <section
            key={index}
            ref={ref}
            className="py-24 md:py-32 border-b border-gray-200"
          >
            <div className="max-w-[1200px] mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                !isLeft ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ ...attioTransition, delay: 0.1 }}
                  className={!isLeft ? "lg:col-start-2" : ""}
                >
                  {feature.kicker && (
                    <p className="text-[12px] uppercase tracking-wide text-gray-500 mb-4">
                      {feature.kicker}
                    </p>
                  )}
                  <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-[16px] leading-[24px] text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  {feature.items && feature.items.length > 0 && (
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-[16px] leading-[24px] text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                {/* Image */}
                {feature.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ...attioTransition, delay: 0.2 }}
                    className={`relative w-full h-[300px] md:h-[400px] rounded-lg border border-gray-200 bg-gray-100 overflow-hidden ${
                      !isLeft ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    {typeof feature.image === "string" ? (
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {feature.image}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* Bento Grid / Deep Dive */}
      {bentoGridItems && bentoGridItems.length > 0 && (
        <section ref={bentoRef} className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={bentoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={attioTransition}
              className="mb-12 text-center"
            >
              <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
                Deep dive
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
                Explore the capabilities that make this feature powerful for your team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {bentoGridItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={bentoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ...attioTransition, delay: index * 0.1 }}
                    className="p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[16px] leading-[24px] text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={attioTransition}
            className="text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              {ctaTitle}
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 mb-8 max-w-2xl mx-auto">
              {ctaSubtitle}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-8 py-3.5 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
            >
              Book a demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

