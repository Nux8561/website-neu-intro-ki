"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"
import Link from "next/link"
import { CustomFeatureIcon } from "@/components/ui/custom-feature-icons"
import { BrowserPreview } from "@/components/ui/browser-preview"
import { TerminalPreview } from "@/components/ui/terminal-preview"
import { CodeSnippet } from "@/components/ui/code-snippet"
import { SectionTransition } from "@/components/ui/section-transition"

/**
 * Features Bento - 100.000€ VERSION
 * 
 * - NICHT gestapelt - perfekte Abstände
 * - Hochwertige Animationen
 * - Custom Icons statt 3D Icons
 * - Scroll-basierte Animationen wie ein Video
 * - Bessere Beschreibungen in den Boxen
 */
export function FeaturesBento() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax für Hintergrund
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.3])

  const features = [
    {
      id: 1,
      title: "Top 20 Prioritäten",
      description: "Algorithmus-basierte Analyse aller Signale. Zeigt exakt die 20 Deals mit höchstem ICP-Fit und optimalem Timing für heute.",
      icon: "priorities",
      bgColor: "bg-emerald-100",
      visual: "priorities",
    },
    {
      id: 2,
      title: "Automatische Email-Versendung",
      description: "Intelligence-Engine erkennt Email-Öffnungen in Echtzeit. Automatische Versendung der nächsten Nachricht ohne manuelle Intervention.",
      icon: "email",
      bgColor: "bg-blue-100",
      visual: "email",
    },
    {
      id: 3,
      title: "Call-Assistance Engine",
      description: "Automatisierte Call-Vorbereitung. Intelligence-Engine analysiert Lead-Daten und liefert präzise Talking Points, Pain Points und Next Steps vor jedem Call.",
      icon: "call",
      bgColor: "bg-purple-100",
      visual: "call",
    },
    {
      id: 4,
      title: "Automatische Task-Erstellung",
      description: "Intelligence-Engine erkennt Signale, Deal-Bewegungen und notwendige Aktionen. Erstellt automatisch priorisierte Tasks mit korrekter Zuordnung.",
      icon: "tasks",
      bgColor: "bg-orange-100",
      visual: "tasks",
    },
    {
      id: 5,
      title: "Pipeline Management",
      description: "Algorithmus-basierte Deal-Priorisierung. Intelligence-Engine berechnet Wahrscheinlichkeit, optimales Timing und ICP-Fit für jeden Deal.",
      icon: "pipeline",
      bgColor: "bg-indigo-100",
      visual: "pipeline",
    },
    {
      id: 6,
      title: "Team Management",
      description: "Echtzeit-Übersicht über Team-Performance. Intelligence-Engine zeigt Deal-Status, Aktivitäten und automatisch erkannte Unterstützungsbedarfe.",
      icon: "team",
      bgColor: "bg-pink-100",
      visual: "team",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-white py-32 md:py-48 overflow-hidden"
    >
      {/* Background Layers - Animiert */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Floating Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/5"
            style={{
              width: 80 + i * 20,
              height: 80 + i * 20,
              left: `${(i * 8) % 100}%`,
              top: `${(i * 12) % 100}%`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.2 }}
          className="mb-24 text-center"
        >
          <h2 className="mb-6 text-6xl font-space-grotesk font-bold -tracking-[0.02em] text-black md:text-7xl">
            Alles, was du brauchst
          </h2>
          <p className="mx-auto max-w-2xl text-2xl text-black/80 font-inter leading-relaxed">
            Telefon-Cold-Acquisition + Pipeline Management + Algorithmus-basierte Automatisierung
          </p>
        </motion.div>

        {/* Features Grid - NICHT gestapelt, perfekte Abstände */}
        <motion.div
          variants={snappyStaggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              variants={snappyStaggerItem}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-black/10 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)]"
            >
              {/* Custom Icon statt Lucide */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ ...snappySpring, delay: 0.3 + i * 0.1 }}
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor} transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <CustomFeatureIcon type={feature.icon as any} className="h-10 w-10" />
              </motion.div>

                  {/* Content - BESSERE BESCHREIBUNGEN */}
                  <h3 className="mb-4 text-3xl font-space-grotesk font-bold -tracking-[0.01em] text-black">{feature.title}</h3>
                  <p className="mb-8 text-lg text-black/80 font-inter leading-relaxed">{feature.description}</p>

                  {/* Visual Preview - Hochwertig - MINDESTENS 400px für maximalen Impact */}
                  <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-black/10 shadow-sm">
                {/* Fake UI Preview */}
                {feature.visual === "priorities" && (
                  <div className="absolute inset-0 p-4">
                    <div className="space-y-2.5">
                      {[1, 2, 3].map((num) => (
                        <motion.div
                          key={num}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 + num * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm border border-black/5"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-xs font-mono font-bold text-white">
                            {num}
                          </div>
                          <div className="h-2.5 flex-1 rounded-full bg-slate-200" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {feature.visual === "email" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ...snappySpring, delay: 0.5 + i * 0.1 }}
                    className="absolute inset-0 p-2"
                  >
                    <BrowserPreview
                      url="introki.app/emails"
                      title="Email Automation"
                      isSecure={true}
                      height={224}
                      showWindowControls={true}
                    >
                      <div className="flex h-full items-center justify-center p-4">
                        <div className="w-full space-y-2">
                          <div className="h-3 w-full rounded bg-blue-200" />
                          <div className="h-3 w-3/4 rounded bg-blue-100" />
                        </div>
                      </div>
                    </BrowserPreview>
                  </motion.div>
                )}
                {feature.visual === "call" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ...snappySpring, delay: 0.5 + i * 0.1 }}
                    className="absolute inset-0 p-2"
                  >
                    <TerminalPreview
                      lines={[
                        { text: "introki@server:~$ analyze-lead Acme Corp", type: "command", prompt: "$" },
                        { text: "✓ Research completed in 45s", type: "success" },
                        { text: "→ Priority: HIGH", type: "output" },
                        { text: "→ Next action: Call today", type: "output" },
                      ]}
                      height={224}
                      title="Call Assistant"
                    />
                  </motion.div>
                )}
                {feature.visual === "tasks" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ...snappySpring, delay: 0.5 + i * 0.1 }}
                    className="absolute inset-0 p-2"
                  >
                    <CodeSnippet
                      code={`// Auto-generated Task
const task = {
  type: "follow-up",
  priority: "high",
  dueDate: "today",
  assignedTo: "sales-team"
}`}
                      language="typescript"
                      showCopy={false}
                    />
                  </motion.div>
                )}
                {feature.visual === "pipeline" && (
                  <div className="absolute inset-0 p-4">
                    <div className="flex h-full items-end justify-around gap-2">
                      {[40, 60, 80, 50].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={isInView ? { height: `${height}%` } : {}}
                          transition={{ ...snappySpring, delay: 0.5 + i * 0.1 + idx * 0.1 }}
                          className="w-full rounded-t-lg bg-indigo-200 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {feature.visual === "team" && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ ...snappySpring, delay: 0.5 + i * 0.1 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((num) => (
                        <div
                          key={num}
                          className="h-10 w-10 rounded-full border-2 border-white bg-slate-300 shadow-md"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-space-grotesk font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
          >
            Jetzt Demo buchen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Section Transition - Eleganter Übergang nach unten */}
      <div className="absolute bottom-0 left-0 right-0">
        <SectionTransition position="bottom" height={150} gridSize={12} />
      </div>
    </section>
  )
}
