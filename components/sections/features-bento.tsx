"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Mail, TrendingUp, CheckCircle2, Users, Zap } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import Image from "next/image"

/**
 * Features Bento - PREMIUM VERSION
 * 
 * - Nicht gestapelt, sondern mit Abstand und Animationen
 * - Team Page Style (Bilder statt 3D Icons)
 * - Scroll-basierte Animationen wie ein Video
 * - Features: Auto-Email, Task-Erstellung, Call-Hilfe, Top 20 Prioritäten, Team Management
 */
export function FeaturesBento() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax für Hintergrund-Layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const features = [
    {
      id: 1,
      title: "Top 20 Prioritäten",
      description: "Die wichtigsten Calls zuerst. Nicht 100 zufällige.",
      icon: TrendingUp,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      size: "large",
      position: "top-left",
      visual: "priorities",
    },
    {
      id: 2,
      title: "Automatische Email-Versendung",
      description: "Email wird automatisch gesendet, wenn gesehen.",
      icon: Mail,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      size: "medium",
      position: "top-right",
      visual: "email",
    },
    {
      id: 3,
      title: "Call-Hilfe",
      description: "Die 20 wichtigsten Schritte am Anfang des Tages.",
      icon: Phone,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      size: "medium",
      position: "middle-left",
      visual: "call",
    },
    {
      id: 4,
      title: "Task-Erstellung",
      description: "Neue Tasks werden automatisch erstellt.",
      icon: CheckCircle2,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      size: "medium",
      position: "middle-right",
      visual: "tasks",
    },
    {
      id: 5,
      title: "Pipeline Management",
      description: "Deal Management mit Algorithmus-basierter Priorisierung.",
      icon: TrendingUp,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      size: "large",
      position: "bottom",
      visual: "pipeline",
    },
    {
      id: 6,
      title: "Team Management",
      description: "Übersicht über Team-Performance und Aktivitäten.",
      icon: Users,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      size: "medium",
      position: "bottom-right",
      visual: "team",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-white py-32 md:py-40 overflow-hidden"
    >
      {/* Background Layers - Mehr Animation */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating Elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/5"
            style={{
              width: 100 + i * 30,
              height: 100 + i * 30,
              left: `${(i * 12) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-jakarta font-semibold tracking-tight text-black md:text-5xl">
            Alles, was du brauchst
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/80 font-inter">
            Telefon-Cold-Acquisition + Pipeline Management + Algorithmus-basierte Automatisierung
          </p>
        </motion.div>

        {/* Features Grid - NICHT gestapelt, mit Abstand */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...ENTERPRISE_SPRING, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-xl ${
                feature.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon - Team Page Style */}
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor} transition-transform group-hover:scale-110`}>
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-jakarta font-semibold text-black">{feature.title}</h3>
              <p className="mb-6 text-base text-black/80 font-inter leading-relaxed">{feature.description}</p>

              {/* Visual Preview - Team Page Style (statt 3D Icons) */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white border border-black/5">
                {/* Fake UI Preview basierend auf Feature */}
                {feature.visual === "priorities" && (
                  <div className="absolute inset-0 p-4">
                    <div className="space-y-2">
                      {[1, 2, 3].map((num) => (
                        <motion.div
                          key={num}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: num * 0.1 }}
                          className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-xs font-mono font-bold text-white">
                            {num}
                          </div>
                          <div className="h-2 flex-1 rounded bg-slate-200" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {feature.visual === "email" && (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full space-y-2">
                      <div className="h-3 w-full rounded bg-blue-200" />
                      <div className="h-3 w-3/4 rounded bg-blue-100" />
                    </div>
                  </div>
                )}
                {feature.visual === "call" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                )}
                {feature.visual === "tasks" && (
                  <div className="absolute inset-0 p-4">
                    <div className="space-y-2">
                      {[1, 2].map((num) => (
                        <div key={num} className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded border-2 border-black/20" />
                          <div className="h-2 flex-1 rounded bg-slate-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {feature.visual === "pipeline" && (
                  <div className="absolute inset-0 p-4">
                    <div className="flex h-full items-end justify-around gap-2">
                      {[40, 60, 80, 50].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="w-full rounded-t bg-indigo-200"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {feature.visual === "team" && (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="h-8 w-8 rounded-full border-2 border-white bg-slate-300"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
