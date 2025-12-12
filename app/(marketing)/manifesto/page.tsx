"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Sparkles, Target, Zap, Users } from "lucide-react"

const principles = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Wir glauben daran, dass die Zukunft des Sales durch Innovation geprägt wird. Deshalb entwickeln wir kontinuierlich neue Features und verbessern unsere Plattform.",
  },
  {
    icon: Target,
    title: "Kunden im Fokus",
    description: "Unsere Kunden stehen im Mittelpunkt alles, was wir tun. Wir hören zu, lernen und passen uns an ihre Bedürfnisse an.",
  },
  {
    icon: Zap,
    title: "Einfachheit",
    description: "Komplexität ist der Feind der Produktivität. Wir machen IntroKI so einfach wie möglich, ohne dabei an Funktionalität zu verlieren.",
  },
  {
    icon: Users,
    title: "Transparenz",
    description: "Wir glauben an Transparenz in allem, was wir tun. Von unserer Produktentwicklung bis hin zu unseren Preisen – alles ist klar und verständlich.",
  },
]

export default function ManifestoPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Unser Manifesto
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Die Prinzipien, die uns antreiben. Die Werte, die wir leben. Die Vision, die wir verfolgen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-jakarta font-semibold mb-4">{principle.title}</h2>
                    <p className="text-lg text-[#0B0C0E]/70 font-inter leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-jakarta font-medium mb-6">
                Die Zukunft des Sales ist hier
              </h2>
              <p className="text-xl text-[#0B0C0E]/70 font-inter leading-relaxed">
                Wir glauben daran, dass Sales-Teams bessere Tools verdienen. Tools, die sie von manueller Arbeit befreien und ihnen ermöglichen, sich auf das zu konzentrieren, was wirklich wichtig ist: den Aufbau von Beziehungen und das Schließen von Deals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
