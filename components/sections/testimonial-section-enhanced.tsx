"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  author: {
    name: string
    role: string
    company: string
    avatar?: string
  }
  companyLogo?: string
  favoriteFeatures: string[]
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "IntroKI ist das erste CRM, das sich wirklich modern anfühlt. Es ist leistungsstark, flexibel und schnell zu implementieren. Es gibt nichts Vergleichbares auf dem Markt.",
    author: {
      name: "Sahil Mansuri",
      role: "CEO & Co-founder",
      company: "Bravado",
    },
    companyLogo: "/logos/bravado.svg",
    favoriteFeatures: ["Workflows", "Deals", "Reports"],
  },
  {
    id: "2",
    quote:
      "IntroKI hat transformiert, wie wir unsere Sales-Pipeline verwalten. Die Flexibilität des Datenmodells bedeutet, dass es sich an unsere Arbeitsweise anpasst, nicht umgekehrt.",
    author: {
      name: "David Boskovic",
      role: "CEO & Founder",
      company: "Flatfile",
    },
    companyLogo: "/logos/flatfile.svg",
    favoriteFeatures: ["Custom objects", "Hightouch", "Reports"],
  },
  {
    id: "3",
    quote:
      "Wir sind von Salesforce zu IntroKI gewechselt und haben nie zurückgeblickt. Es ist schneller, intuitiver und hilft unserem Team tatsächlich, produktiver zu sein.",
    author: {
      name: "Jamie Marshall",
      role: "COO & Co-founder",
      company: "Snackpass",
    },
    companyLogo: "/logos/snackpass.svg",
    favoriteFeatures: ["Lists", "Workflows", "API"],
  },
  {
    id: "4",
    quote:
      "Die KI-Funktionen von IntroKI sind ein Game-Changer. Die automatische Lead-Priorisierung spart uns Stunden pro Woche und hilft uns, uns auf die richtigen Leads zu konzentrieren.",
    author: {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechCorp",
    },
    companyLogo: "/logos/techcorp.svg",
    favoriteFeatures: ["AI Scoring", "Research", "Coaching"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
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

export function TestimonialSectionEnhanced() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 border-y border-[#0B0C0E]/10 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
            Vertraut von führenden Teams
          </h2>
          <p className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter">
            Sieh, wie Teams IntroKI nutzen, um ihre Sales-Operations zu transformieren
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8 hover:border-[#0B0C0E]/20 transition-all"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-[#0B0C0E]" strokeWidth={1.5} />
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-inter text-[#0B0C0E]/80 mb-6 pr-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-start justify-between gap-4 pt-6 border-t border-[#0B0C0E]/10">
                <div className="flex-1">
                  <p className="font-jakarta font-medium text-[#0B0C0E] mb-1">
                    {testimonial.author.name}
                  </p>
                  <p className="text-sm text-[#0B0C0E]/50 font-inter mb-4">
                    {testimonial.author.role} · {testimonial.author.company}
                  </p>

                  {/* Favorite Features */}
                  <div>
                    <p className="text-xs text-[#0B0C0E]/50 font-inter mb-2">
                      {testimonial.author.company}&apos;s favorite features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.favoriteFeatures.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="text-xs border-[#0B0C0E]/10 text-[#0B0C0E]/70 bg-white/50"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company Logo */}
                {testimonial.companyLogo && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white border border-[#0B0C0E]/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.author.company}
                      width={48}
                      height={48}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

