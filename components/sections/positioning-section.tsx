"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Mail, Users, ShoppingCart } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * Positioning Section
 * 
 * Zeigt die "Goldene Mitte" Positionierung:
 * - Close CRM = Telefon-Cold-Acquisition
 * - Attio = Email-Automation & Deal Pipeline
 * - HubSpot = Zu komplex, nur für 20+ Personen
 * - Salesforce = E-Commerce/Email-Automation
 * - Intro KI = Goldene Mitte: Telefon + Pipeline + Algorithmus
 */
export function PositioningSection() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const competitors = [
    {
      name: "Close CRM",
      strength: "Telefon-Cold-Acquisition",
      icon: Phone,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      position: "left",
    },
    {
      name: "Attio",
      strength: "Email-Automation & Pipeline",
      icon: Mail,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      position: "left-center",
    },
    {
      name: "HubSpot",
      strength: "Zu komplex, 20+ Personen",
      icon: Users,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      position: "right-center",
    },
    {
      name: "Salesforce",
      strength: "E-Commerce & Email",
      icon: ShoppingCart,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      position: "right",
    },
  ]

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-slate-50 to-white py-32 md:py-40 overflow-hidden">
      {/* Background Layers - Mehr Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: Subtle Grid */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            x: useTransform(scrollYProgress, [0, 1], [0, 40]),
          }}
        />
        {/* Layer 2: Floating Shapes */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/5"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              x: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 20]),
              y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -15]),
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          style={{ opacity, y }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-jakarta font-semibold tracking-tight text-black md:text-5xl">
            Die goldene Mitte
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/80 font-inter">
            Nicht zu einfach, nicht zu komplex. Genau richtig für dein Team.
          </p>
        </motion.div>

        {/* Competitor Comparison - VISUELL */}
        <div className="relative mb-16">
          {/* Intro KI in der Mitte */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={ENTERPRISE_SPRING}
            className="relative z-20 mx-auto mb-12 max-w-md rounded-2xl border-2 border-black bg-white p-8 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-black to-slate-800">
                <Phone className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-center text-2xl font-jakarta font-semibold text-black">Intro KI</h3>
            <p className="text-center text-sm text-black/80 font-inter">
              Telefon-Cold-Acquisition + Pipeline Management + Algorithmus-basierte Automatisierung
            </p>
          </motion.div>

          {/* Competitors Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {competitors.map((competitor, i) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...ENTERPRISE_SPRING, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-xl border border-black/10 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${competitor.bgColor}`}>
                  <competitor.icon className={`h-6 w-6 ${competitor.iconColor}`} />
                </div>
                <h4 className="mb-2 text-lg font-jakarta font-semibold text-black">{competitor.name}</h4>
                <p className="text-sm text-black/70 font-inter">{competitor.strength}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 md:p-12"
        >
          <h3 className="mb-8 text-center text-2xl font-jakarta font-semibold text-black">
            Was macht uns anders?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Telefon-First", desc: "Wie Close CRM, aber besser" },
              { title: "Pipeline Management", desc: "Wie Attio, aber einfacher" },
              { title: "Algorithmus-basiert", desc: "Automatisch, intelligent, proaktiv" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...ENTERPRISE_SPRING, delay: i * 0.1 }}
                className="text-center"
              >
                <h4 className="mb-2 text-lg font-jakarta font-semibold text-black">{item.title}</h4>
                <p className="text-sm text-black/70 font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

