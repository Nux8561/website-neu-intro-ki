"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { MapPin, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote / Berlin",
    type: "Vollzeit",
    description:
      "Wir suchen einen erfahrenen Frontend-Engineer, der unsere Next.js-basierte CRM-Plattform weiterentwickelt.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / München",
    type: "Vollzeit",
    description:
      "Gestalten Sie die Zukunft von CRM-Interfaces mit Fokus auf UX und moderne Design-Prinzipien.",
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Berlin",
    type: "Vollzeit",
    description:
      "Helfen Sie Unternehmen dabei, IntroKI zu entdecken und ihre Vertriebsprozesse zu transformieren.",
  },
]

export function CareersPage() {
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
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6"
              >
                Karriere
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-6"
            >
              Werde Teil des Teams
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary font-inter mb-8 max-w-2xl mx-auto"
            >
              Baue mit uns die Zukunft des KI-gestützten Vertriebs. Wir suchen
              talentierte Menschen, die Leidenschaft für Technologie und
              Innovation mitbringen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="bg-surface border border-border-subtle rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-jakarta font-medium tracking-tight text-text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge
                        variant="outline"
                        className="bg-surface text-text-secondary border-border-subtle"
                      >
                        {position.department}
                      </Badge>
                      <div className="flex items-center gap-2 text-text-primary/50 font-inter text-sm">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2 text-text-primary/50 font-inter text-sm">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                    <p className="text-text-secondary font-inter text-sm">
                      {position.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-border-subtle text-text-primary hover:bg-surface ml-4"
                    asChild
                  >
                    <Link href="/kontakt">Bewerben</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-text-primary mb-12 text-center">
              Warum IntroKI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Flexible Arbeitszeiten & Remote Work",
                "Modernes Tech Stack & Best Practices",
                "Flache Hierarchien & schnelle Entscheidungen",
                "Bildungsbudget für Weiterbildung",
                "Top Equipment & Tools",
                "Team Events & Offsites",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-text-secondary font-inter"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

