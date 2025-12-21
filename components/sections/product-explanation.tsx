"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, Zap, TrendingUp, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

/**
 * Product Explanation Section
 * 
 * VISUELLE Darstellung: Was macht Intro KI?
 * Sofort verständlich ohne viel Text
 * Team Page Fonts (font-jakarta)
 * Klarer Kontrast
 */
export function ProductExplanation() {
  const features = [
    {
      icon: Search,
      title: "Automatische Recherche",
      description: "60 Sekunden statt 60 Minuten",
      color: "emerald",
    },
    {
      icon: Zap,
      title: "Proaktive Signale",
      description: "Dein CRM sagt dir, was zu tun ist",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Klare Prioritäten",
      description: "Die ersten 20 Calls sind die besten",
      color: "purple",
    },
  ]

  const workflow = [
    { step: 1, title: "Signal erkannt", icon: CheckCircle2 },
    { step: 2, title: "Research automatisch", icon: Search },
    { step: 3, title: "Priorität gesetzt", icon: TrendingUp },
    { step: 4, title: "Du wirst benachrichtigt", icon: Zap },
  ]

  return (
    <section id="product" className="bg-white py-24 md:py-32 border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header - MINIMAL TEXT */}
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-jakarta font-semibold tracking-tight text-black md:text-5xl">
              Was macht Intro KI?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-black/70 font-inter">
              Dein CRM denkt mit. Automatisch.
            </p>
          </div>
        </ScrollReveal>

        {/* Features - VISUELL */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} direction="up" distance={50} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={ENTERPRISE_SPRING}
                className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-${feature.color}-100`}>
                  <feature.icon className={`h-7 w-7 text-${feature.color}-600`} />
                </div>
                <h3 className="mb-2 text-xl font-jakarta font-semibold text-black">{feature.title}</h3>
                <p className="text-sm text-black/80 font-inter">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Workflow - VISUELL */}
        <ScrollReveal direction="up" distance={50}>
          <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
            <h3 className="mb-8 text-center text-2xl font-jakarta font-semibold text-black md:text-3xl">
              So funktioniert es
            </h3>
            <div className="grid gap-6 md:grid-cols-4">
              {workflow.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...ENTERPRISE_SPRING, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  {/* Connector Line */}
                  {i < workflow.length - 1 && (
                    <div className="absolute top-6 left-[60%] right-0 hidden h-0.5 bg-black/10 md:block" />
                  )}
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mb-2 text-sm font-mono font-bold text-black/40">Schritt {item.step}</div>
                  <div className="text-base font-jakarta font-semibold text-black">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" distance={50}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={ENTERPRISE_SPRING}
            className="mt-12 text-center"
          >
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-jakarta font-semibold text-white transition-all hover:bg-black/90"
            >
              Jetzt Demo buchen
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

