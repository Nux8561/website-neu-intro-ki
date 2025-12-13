"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  companyLogo?: string
  quote: string
  videoUrl?: string
  rating?: number
  favoriteFeatures?: string[]
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "VP of Sales",
    company: "TechFlow",
    avatar: "/avatars/sarah-chen.jpg",
    companyLogo: "/logos/techflow.svg",
    quote: "IntroKI hat unsere Sales-Produktivität um 300% gesteigert. Die Deep Research Funktion ist ein absoluter Game Changer - wir erhalten in 60 Sekunden Insights, die früher Stunden gedauert haben.",
    rating: 5,
    favoriteFeatures: ["Deep Research", "Lead Scoring", "Pipeline"],
  },
  {
    id: "2",
    name: "Michael Braun",
    role: "CEO & Founder",
    company: "ScaleUp GmbH",
    avatar: "/avatars/michael-braun.jpg",
    companyLogo: "/logos/scaleup.svg",
    quote: "Wir sind von Salesforce zu IntroKI gewechselt und haben nie zurückgeblickt. Es ist schneller, intuitiver und das Live Call Coaching hat unsere Close Rate um 40% verbessert.",
    videoUrl: "/videos/testimonial-michael.mp4",
    rating: 5,
    favoriteFeatures: ["Call Coaching", "Workflows", "Analytics"],
  },
  {
    id: "3",
    name: "Lisa Schmidt",
    role: "Head of Revenue",
    company: "DataDriven",
    avatar: "/avatars/lisa-schmidt.jpg",
    companyLogo: "/logos/datadriven.svg",
    quote: "Die KI-gestützte Lead-Priorisierung hat die Effizienz unseres Teams verdoppelt. Wir fokussieren uns jetzt nur noch auf die Leads mit dem höchsten Potenzial.",
    rating: 5,
    favoriteFeatures: ["ICP Scoring", "Automation", "Reports"],
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className="card-attio p-8 h-full flex flex-col"
    >
      {/* Video Thumbnail (if has video) */}
      {testimonial.videoUrl && (
        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-surface group cursor-pointer">
          <video
            src={testimonial.videoUrl}
            className="w-full h-full object-cover"
            poster={testimonial.avatar}
          />
          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl"
              >
                <Play className="h-6 w-6 text-brand ml-1" fill="currentColor" />
              </motion.button>
            </div>
          )}
        </div>
      )}

      {/* Quote */}
      <div className="flex-1">
        <Quote className="h-8 w-8 text-border mb-4" />
        <p className="text-text-primary font-inter text-lg leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          {/* Fallback avatar */}
          <div className="absolute inset-0 flex items-center justify-center text-text-muted font-medium">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="flex-1">
          <p className="font-jakarta font-medium text-text-primary">
            {testimonial.name}
          </p>
          <p className="text-sm text-text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
        {testimonial.companyLogo && (
          <Image
            src={testimonial.companyLogo}
            alt={testimonial.company}
            width={80}
            height={24}
            className="h-6 w-auto object-contain opacity-60"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        )}
      </div>

      {/* Favorite Features */}
      {testimonial.favoriteFeatures && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-text-muted mb-2">
            Lieblings-Features:
          </p>
          <div className="flex flex-wrap gap-2">
            {testimonial.favoriteFeatures.map((feature) => (
              <span
                key={feature}
                className="text-xs px-2 py-1 rounded-full bg-surface border border-border text-text-secondary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function TestimonialsPremium() {
  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="text-center mb-16"
        >
          <span className="pill-button mb-6 inline-flex">
            Kundenstimmen
          </span>
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
            Von führenden Sales-Teams
            <br />
            <span className="text-text-secondary">geliebt und empfohlen.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Erfahre, wie Unternehmen mit IntroKI ihre Revenue-Operations transformieren.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-brand text-text-inverse"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Aktive Nutzer" },
              { value: "95%", label: "Kundenzufriedenheit" },
              { value: "300%", label: "Produktivitätssteigerung" },
              { value: "60 Sek", label: "Deep Research Zeit" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-jakarta font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-text-inverse/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

