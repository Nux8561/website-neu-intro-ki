"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"
import { ENTERPRISE_SPRING, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

/**
 * Positioning Section - 100.000€ VERSION
 * 
 * Zeigt die "Goldene Mitte" Positionierung:
 * - Close CRM = Telefon-Cold-Acquisition (ECHTES LOGO)
 * - Attio = Email-Automation & Deal Pipeline (ECHTES LOGO)
 * - HubSpot = Zu komplex, nur für 20+ Personen (ECHTES LOGO)
 * - Salesforce = E-Commerce/Email-Automation (ECHTES LOGO)
 * - Intro KI = Goldene Mitte: Telefon + Pipeline + Algorithmus
 * 
 * KEINE 3D ICONS MEHR - NUR ECHTE LOGOS
 */
export function PositioningSection() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const competitors = [
    {
      name: "Close CRM",
      strength: "Telefon-Cold-Acquisition",
      logo: "/logos/close.svg", // Muss hinzugefügt werden
      fallback: "Close",
      position: "left",
    },
    {
      name: "Attio",
      strength: "Email-Automation & Pipeline",
      logo: "/logos/attio.svg", // Muss hinzugefügt werden
      fallback: "Attio",
      position: "left-center",
    },
    {
      name: "HubSpot",
      strength: "Zu komplex, 20+ Personen",
      logo: "/logos/hubspot.svg", // Bereits vorhanden
      fallback: "HubSpot",
      position: "right-center",
    },
    {
      name: "Salesforce",
      strength: "E-Commerce & Email",
      logo: "/logos/salesforce.svg", // Muss hinzugefügt werden
      fallback: "Salesforce",
      position: "right",
    },
  ]

  const differentiators = [
    { title: "Telefon-First", desc: "Wie Close CRM, aber besser", icon: Check },
    { title: "Pipeline Management", desc: "Wie Attio, aber einfacher", icon: Check },
    { title: "Algorithmus-basiert", desc: "Automatisch, intelligent, proaktiv", icon: Check },
  ]

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-black/10">
      {/* Background Layers - Animiert */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            x: useTransform(scrollYProgress, [0, 1], [0, 60]),
          }}
        />
        {/* Floating Shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/5"
            style={{
              width: 150 + i * 40,
              height: 150 + i * 40,
              left: `${15 + i * 12}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 10 + i * 2,
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.2 }}
          className="mb-24 text-center"
        >
          <h2 className="mb-6 text-6xl font-space-grotesk font-bold -tracking-[0.02em] text-black md:text-7xl">
            Die goldene Mitte
          </h2>
          <p className="mx-auto max-w-2xl text-2xl text-black/80 font-inter leading-relaxed">
            Nicht zu einfach, nicht zu komplex. Genau richtig für dein Team.
          </p>
        </motion.div>

        {/* Intro KI in der Mitte - Highlighted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.4 }}
          className="relative z-20 mx-auto mb-20 max-w-2xl"
        >
          <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black/5 border border-black/10 shadow-sm overflow-hidden"
              >
                <Image
                  src="/images/app logo.png"
                  alt="Intro KI Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <h3 className="mb-4 text-center text-3xl font-space-grotesk font-semibold text-black">Intro KI</h3>
            <p className="text-center text-lg text-black/80 font-inter leading-relaxed">
              Telefon-Cold-Acquisition + Pipeline Management + Algorithmus-basierte Automatisierung
            </p>
          </div>
        </motion.div>

        {/* Competitors Grid - MIT ECHTEN LOGOS - Interaktiver Vergleich */}
        <motion.div
          variants={snappyStaggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          {competitors.map((competitor, i) => (
            <motion.div
              key={competitor.name}
              variants={snappyStaggerItem}
              whileHover={{ scale: 1.05, y: -6 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              {/* ECHTES LOGO statt Icon */}
              <div className="mb-4 flex h-16 items-center justify-center">
                <Image
                  src={competitor.logo}
                  alt={competitor.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  onError={(e) => {
                    // Fallback: Text wenn Logo nicht gefunden
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent && !parent.querySelector(".logo-fallback")) {
                      const fallback = document.createElement("div")
                      fallback.className = "logo-fallback text-lg font-space-grotesk font-semibold text-black/60"
                      fallback.textContent = competitor.fallback
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </div>
              <h4 className="mb-2 text-lg font-space-grotesk font-semibold text-black">{competitor.name}</h4>
              <p className="text-sm text-black/70 font-inter leading-relaxed">{competitor.strength}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.6 }}
          className="rounded-3xl border-2 border-black/10 bg-white/90 backdrop-blur-sm p-10 md:p-14 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
        >
          <h3 className="mb-12 text-center text-3xl font-space-grotesk font-semibold text-black md:text-4xl">
            Was macht uns anders?
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...snappySpring, delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/5">
                    <item.icon className="h-7 w-7 text-black" />
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-space-grotesk font-semibold text-black">{item.title}</h4>
                <p className="text-sm text-black/70 font-inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
