"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const customerStories = [
  {
    name: "Sahil Mansuri",
    role: "CEO & Co-founder",
    company: "Bravado",
    quote: "IntroKI ist das erste CRM, das sich wirklich modern anfühlt. Es ist leistungsstark, flexibel und schnell zu implementieren. Es gibt nichts Vergleichbares auf dem Markt.",
    favoriteFeatures: ["Workflows", "Deals", "Reports"],
  },
  {
    name: "David Boskovic",
    role: "CEO & Founder",
    company: "Flatfile",
    quote: "IntroKI hat transformiert, wie wir unsere Sales-Pipeline verwalten. Die Flexibilität des Datenmodells bedeutet, dass es sich an unsere Arbeitsweise anpasst, nicht umgekehrt.",
    favoriteFeatures: ["Custom objects", "Hightouch", "Reports"],
  },
  {
    name: "Jamie Marshall",
    role: "COO & Co-founder",
    company: "Snackpass",
    quote: "Wir sind von Salesforce zu IntroKI gewechselt und haben nie zurückgeblickt. Es ist schneller, intuitiver und hilft unserem Team tatsächlich, produktiver zu sein.",
    favoriteFeatures: ["Lists", "Workflows", "API"],
  },
]

const companies = [
  "Vercel",
  "DigitalOcean",
  "GitHub",
  "Stripe",
  "Figma",
  "Intercom",
  "Segment",
  "Notion",
  "Slack",
  "Linear",
  "Retool",
  "Customer.io",
]

export function CustomersPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-6"
            >
              The CRM behind thousands of companies.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary font-inter mb-8 max-w-2xl mx-auto"
            >
              Sieh, wie Teams IntroKI nutzen, um ihre Revenue-Operations zu stärken und bessere Kundenbeziehungen aufzubauen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
            {customerStories.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="bg-surface border border-border-subtle rounded-2xl p-8"
              >
                <blockquote className="text-lg font-inter text-text-primary/80 mb-6">
                  &ldquo;{customer.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border-subtle pt-6">
                  <p className="font-jakarta font-medium text-text-primary mb-1">
                    {customer.name}
                  </p>
                  <p className="text-sm text-text-primary/50 font-inter mb-4">
                    {customer.role} · {customer.company}
                  </p>
                  <div>
                    <p className="text-xs text-text-primary/50 font-inter mb-2">
                      {customer.company}&apos;s favorite features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {customer.favoriteFeatures.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="text-xs border-border-subtle text-text-secondary"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Logos Grid - Using LogoCarousel */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-jakarta font-medium tracking-tight text-text-primary mb-12 text-center">
              Vertraut von führenden Unternehmen
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="flex items-center justify-center h-20 bg-background border border-border-subtle rounded-xl hover:border-border-active hover:shadow-sm transition-all group"
                >
                  {/* Logo Image Placeholder - Add real logos to public/logos/ */}
                  <div className="relative w-full h-full flex items-center justify-center px-4">
                    <Image
                      src={`/logos/${company.toLowerCase().replace(/[^a-z0-9]/g, '-')}.svg`}
                      alt={company}
                      width={120}
                      height={40}
                      className="object-contain max-w-full max-h-full opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        // Fallback to text if image not found
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const fallback = document.createElement('span')
                          fallback.className = 'text-text-secondary font-inter font-medium text-sm'
                          fallback.textContent = company
                          parent.appendChild(fallback)
                        }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Schließe dich Tausenden von Unternehmen an, die IntroKI nutzen
            </h2>
            <p className="text-lg text-text-secondary font-inter mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-text-primary text-white rounded-full px-8 py-4">
                Start for free
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-4">
                Send me a demo
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-4">
                Talk to sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

