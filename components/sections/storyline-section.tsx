"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { SVGFollowScroll } from "@/components/ui/svg-follow-scroll"
import { ENTERPRISE_SPRING, snappySpring } from "@/lib/animations"
import { BrowserPreview } from "@/components/ui/browser-preview"
import { TerminalPreview } from "@/components/ui/terminal-preview"
import { CodeSnippet } from "@/components/ui/code-snippet"
import { SectionDivider } from "@/components/ui/section-divider"

/**
 * Storyline Section
 * 
 * Erzählt die Story von Intro KI Schritt für Schritt
 * Mit Browser-ähnlichen Komponenten und Animationen
 */
interface StorylineStep {
  id: string
  title: string
  description: string
  position: number
  visual: "browser" | "terminal" | "code" | "none"
  visualContent?: React.ReactNode
}

export function StorylineSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const steps: StorylineStep[] = [
    {
      id: "1",
      title: "Signal erkannt",
      description: "Dein System erkennt automatisch ein neues Signal",
      position: 15,
      visual: "browser",
      visualContent: (
        <BrowserPreview
          url="introki.app/dashboard"
          title="Dashboard"
          isSecure={true}
          height={300}
          showWindowControls={false}
        >
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-sm font-mono font-semibold text-emerald-700">Neues Signal erkannt</span>
              </div>
              <p className="text-sm text-black/60 font-inter">Acme Corp - €50K Deal</p>
            </div>
          </div>
        </BrowserPreview>
      ),
    },
    {
      id: "2",
      title: "Research startet automatisch",
      description: "60 Sekunden statt 60 Minuten - vollautomatisch",
      position: 35,
      visual: "terminal",
      visualContent: (
        <TerminalPreview
          lines={[
            { text: "introki@server:~$ research-lead Acme Corp", type: "command", prompt: "$" },
            { text: "→ Analysiere Firmendaten...", type: "output" },
            { text: "→ Prüfe LinkedIn Profile...", type: "output" },
            { text: "→ Analysiere News & Updates...", type: "output" },
            { text: "✓ Research completed in 45s", type: "success" },
          ]}
          height={300}
          title="Research Agent"
        />
      ),
    },
    {
      id: "3",
      title: "Priorität wird gesetzt",
      description: "Algorithmus berechnet die beste Priorität",
      position: 55,
      visual: "code",
      visualContent: (
        <CodeSnippet
          code={`// Prioritäts-Berechnung
const priority = calculatePriority({
  dealValue: 50000,
  icpFit: 0.92,
  signalStrength: 0.88,
  timing: "optimal"
})

// Ergebnis: Priority = HIGH
// Score: 94/100`}
          language="typescript"
          showCopy={false}
        />
      ),
    },
    {
      id: "4",
      title: "Du wirst benachrichtigt",
      description: "Proaktive Empfehlung direkt in dein CRM",
      position: 75,
      visual: "browser",
      visualContent: (
        <BrowserPreview
          url="introki.app/notifications"
          title="Notifications"
          isSecure={true}
          height={300}
          showWindowControls={false}
        >
          <div className="flex h-full items-center justify-center p-6">
            <div className="w-full space-y-3">
              <div className="rounded-lg border-2 border-black bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <div className="flex-1">
                    <p className="text-sm font-space-grotesk font-semibold text-black">Neue Priorität gesetzt</p>
                    <p className="text-xs text-black/60 font-inter">Acme Corp - Jetzt anrufen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserPreview>
      ),
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="storyline"
      className="relative bg-white py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-6xl font-space-grotesk font-bold -tracking-[0.02em] text-black md:text-7xl">
            So funktioniert Intro KI
          </h2>
          <p className="mx-auto max-w-2xl text-2xl text-black/80 font-inter leading-relaxed">
            Schritt für Schritt. Automatisch. Proaktiv.
          </p>
        </motion.div>

        {/* Storyline mit SVG Path */}
        <div className="relative">
          <SVGFollowScroll
            steps={steps.map((s) => ({
              id: s.id,
              title: s.title,
              description: s.description,
              position: s.position,
            }))}
            height="400vh"
            strokeColor="#000000"
            strokeWidth={2}
            className="min-h-[400vh]"
          />

          {/* Visual Content für jeden Step */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...snappySpring, delay: index * 0.2 }}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `${step.position}%`,
                width: "100%",
                maxWidth: "800px",
              }}
            >
              {step.visualContent}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

