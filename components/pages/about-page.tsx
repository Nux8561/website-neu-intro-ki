"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Target, Zap, Heart } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "Wir revolutionieren den Vertrieb durch KI-gestützte CRM-Lösungen, die Teams dabei helfen, ihre Ziele zu erreichen.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Kontinuierliche Weiterentwicklung unserer AI-Technologie, um immer einen Schritt voraus zu sein.",
  },
  {
    icon: Users,
    title: "Team",
    description: "Ein leidenschaftliches Team aus Entwicklern, Designern und Vertriebsexperten, die an die Zukunft des CRMs glauben.",
  },
  {
    icon: Heart,
    title: "Kundenfokus",
    description: "Unsere Kunden stehen im Mittelpunkt. Wir bauen Lösungen, die echte Probleme lösen.",
  },
]

export function AboutPage() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-[#0B0C0E]/10">
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
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Über Intro KI
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Wir sind ein Team von Entwicklern, Designern und Vertriebsexperten, die daran glauben,
              dass KI den Vertrieb revolutionieren kann.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-[#0B0C0E]/70 font-inter">
                <p>
                  Intro KI wurde mit der Vision gegründet, Vertriebsteams zu helfen, ihre
                  Produktivität zu steigern und bessere Ergebnisse zu erzielen. Wir glauben, dass
                  KI-gestützte Tools nicht nur die Effizienz verbessern, sondern auch die
                  Entscheidungsfindung unterstützen können.
                </p>
                <p>
                  Unser Team kombiniert tiefes technisches Know-how mit praktischer
                  Vertriebserfahrung, um Lösungen zu entwickeln, die wirklich funktionieren.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0B0C0E]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-12 text-center"
            >
              Unsere Werte
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white border border-[#0B0C0E]/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#0B0C0E]/5 border border-[#0B0C0E]/10">
                        <Icon className="h-6 w-6 text-[#0B0C0E]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-[#0B0C0E]/70 font-inter">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Werde Teil unseres Teams
            </h2>
            <p className="text-lg text-[#0B0C0E]/70 font-inter mb-8">
              Wir suchen talentierte Menschen, die mit uns die Zukunft des CRMs gestalten wollen.
            </p>
            <Button
              size="lg"
              className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8"
              asChild
            >
              <Link href="/careers">Karriere bei Intro KI</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

