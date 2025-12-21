"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react"
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
      id="features"
      ref={sectionRef}
      className="relative bg-white py-24 md:py-32 overflow-hidden border-b-2 border-black"
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
          <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] font-space-grotesk">
            Alles, was du brauchst
          </h2>
          <p className="mx-auto max-w-2xl text-2xl text-black/80 font-inter leading-relaxed">
            60 Sekunden statt 60 Minuten Research • 3x mehr Deals • 100% DSGVO-konform
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
                  className="group relative overflow-hidden rounded-2xl border-2 border-black/10 bg-white/50 backdrop-blur-xl p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)]"
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
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-3xl font-space-grotesk font-bold -tracking-[0.01em] text-black">{feature.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-xs font-inter font-medium text-emerald-700">
                        Active
                      </span>
                      <span className="px-2 py-1 rounded-md bg-blue-100 text-xs font-inter font-medium text-blue-700">
                        Automated
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 text-lg text-black/80 font-inter leading-relaxed">{feature.description}</p>

                  {/* Metrics & Progress */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-black/60 font-inter">Performance</span>
                        <span className="text-xs font-mono font-bold text-black tabular-nums">87%</span>
                      </div>
                      <div className="h-2 rounded-full bg-black/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "87%" } : {}}
                          transition={{ ...snappySpring, delay: 0.4 + i * 0.1 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="text-black/60 font-inter">Success Rate: </span>
                        <span className="font-mono font-bold text-black tabular-nums">94%</span>
                      </div>
                      <div>
                        <span className="text-black/60 font-inter">Time Saved: </span>
                        <span className="font-mono font-bold text-black tabular-nums">20h/Woche</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {feature.id === 1 && ["High Priority", "AI-Powered", "Real-time"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                    {feature.id === 2 && ["Automated", "Echtzeit", "Tracking"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                    {feature.id === 3 && ["Live Coaching", "Sentiment", "AI Insights"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                    {feature.id === 4 && ["Auto-Generated", "Prioritized", "Smart"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                    {feature.id === 5 && ["Kanban", "AI Predictions", "Analytics"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                    {feature.id === 6 && ["Team View", "Real-time", "Collaboration"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-black/5 text-xs font-inter text-black/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Timestamp & Activity */}
                  <div className="mb-4 pt-4 border-t border-black/10">
                    <div className="flex items-center justify-between text-xs text-black/50 font-inter">
                      <span>Last updated: vor 2 Min</span>
                      <span>Next sync: in 5 Min</span>
                    </div>
                  </div>

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
                      height={400}
                      showWindowControls={true}
                    >
                      <div className="flex h-full bg-slate-50">
                        {/* Filter Sidebar */}
                        <div className="w-48 border-r border-black/10 bg-white p-3">
                          <div className="mb-4">
                            <button className="w-full px-3 py-2 rounded-lg bg-black text-white text-xs font-inter font-medium mb-2 flex items-center justify-center gap-2">
                              <Mail className="h-3.5 w-3.5" />
                              Compose
                              <span className="ml-auto bg-white/20 px-1.5 py-0.5 rounded text-xs">3</span>
                            </button>
                          </div>
                          <div className="space-y-1">
                            {["All", "Sent", "Opened", "Clicked", "Replied"].map((filter, idx) => (
                              <button
                                key={filter}
                                className={`w-full text-left px-3 py-1.5 rounded text-xs font-inter transition-all ${
                                  idx === 0
                                    ? "bg-black/5 text-black font-medium"
                                    : "text-black/60 hover:text-black hover:bg-black/5"
                                }`}
                              >
                                {filter}
                                {idx > 0 && (
                                  <span className="ml-auto float-right text-black/40">
                                    {[12, 8, 5, 3][idx - 1]}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Email List */}
                        <div className="flex-1 overflow-y-auto">
                          <div className="p-3 space-y-2">
                            {[
                              { to: "Acme Corp", subject: "Follow-up: Ihr Interesse an Intro KI", status: "replied", time: "2h", opened: true, clicked: true },
                              { to: "TechStart GmbH", subject: "Demo-Termin bestätigt", status: "opened", time: "5h", opened: true, clicked: false },
                              { to: "DataFlow Inc", subject: "Ihr CRM-Upgrade", status: "clicked", time: "1d", opened: true, clicked: true },
                              { to: "CloudSync AG", subject: "Enterprise-Lösung für Ihr Team", status: "sent", time: "2d", opened: false, clicked: false },
                              { to: "InnovateLab", subject: "Kostenlose Beratung", status: "opened", time: "3d", opened: true, clicked: false },
                              { to: "ScaleUp Solutions", subject: "ROI-Berechnung", status: "replied", time: "4d", opened: true, clicked: true },
                              { to: "GrowthTech", subject: "Case Study: Wie wir 3x mehr Deals schließen", status: "sent", time: "5d", opened: false, clicked: false },
                            ].map((email, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + i * 0.1 + idx * 0.05 }}
                                className="p-3 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition-all cursor-pointer group"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-xs font-space-grotesk font-semibold text-black">
                                        {email.to}
                                      </span>
                                      <span
                                        className={`px-1.5 py-0.5 rounded text-[10px] font-inter font-medium ${
                                          email.status === "replied"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : email.status === "clicked"
                                            ? "bg-blue-100 text-blue-700"
                                            : email.status === "opened"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-slate-100 text-slate-700"
                                        }`}
                                      >
                                        {email.status === "replied"
                                          ? "Replied"
                                          : email.status === "clicked"
                                          ? "Clicked"
                                          : email.status === "opened"
                                          ? "Opened"
                                          : "Sent"}
                                      </span>
                                    </div>
                                    <p className="text-xs font-inter text-black/80 mb-1">{email.subject}</p>
                                  </div>
                                  <span className="text-[10px] text-black/40 font-inter ml-2">{email.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {email.opened && (
                                    <div className="flex items-center gap-1">
                                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                      <span className="text-[10px] text-black/50 font-inter">Opened</span>
                                    </div>
                                  )}
                                  {email.clicked && (
                                    <div className="flex items-center gap-1">
                                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                      <span className="text-[10px] text-black/50 font-inter">Clicked</span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
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
                    <div className="h-full rounded-lg border-2 border-black/20 bg-slate-900 overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="bg-slate-800 border-b border-black/20 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-emerald-400" />
                          <span className="text-xs font-space-grotesk font-semibold text-white">Call Assistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] text-slate-400 font-inter">Live</span>
                        </div>
                      </div>

                      <div className="flex-1 flex overflow-hidden">
                        {/* Left Panel: Lead Profile */}
                        <div className="w-48 border-r border-slate-700 bg-slate-800/50 p-3 overflow-y-auto">
                          <div className="mb-4">
                            <div className="h-12 w-12 rounded-lg bg-slate-700 flex items-center justify-center mb-2">
                              <span className="text-white text-lg font-bold">AC</span>
                            </div>
                            <h4 className="text-sm font-space-grotesk font-semibold text-white mb-1">Acme Corp</h4>
                            <p className="text-xs text-slate-400 font-inter">Enterprise • 500+ Mitarbeiter</p>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-[10px] text-slate-500 font-inter uppercase mb-1">Role</p>
                              <p className="text-xs text-white font-inter">VP of Sales</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-slate-500 font-inter uppercase mb-1">Pain Points</p>
                              <div className="space-y-1">
                                {["CRM zu komplex", "Datenpflege zu zeitaufwändig"].map((pain, idx) => (
                                  <div key={idx} className="px-2 py-1 rounded bg-slate-700/50 text-xs text-slate-300">
                                    {pain}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center Panel: Talking Points */}
                        <div className="flex-1 p-3 overflow-y-auto bg-slate-900">
                          <h5 className="text-xs font-space-grotesk font-semibold text-white mb-3">Talking Points</h5>
                          <div className="space-y-2">
                            {[
                              { text: "Budget für CRM-Upgrade freigegeben", checked: true },
                              { text: "Entscheider: VP of Sales (Max Mustermann)", checked: true },
                              { text: "Pain Point: Zu viel manuelle Datenpflege", checked: false },
                              { text: "Next Step: Demo-Termin vereinbaren", checked: false },
                            ].map((point, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + i * 0.1 + idx * 0.1 }}
                                className="flex items-start gap-2 p-2 rounded-lg bg-slate-800/50"
                              >
                                {point.checked ? (
                                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <div className="h-4 w-4 rounded-full border-2 border-slate-600 flex-shrink-0 mt-0.5" />
                                )}
                                <p className={`text-xs font-inter ${point.checked ? "text-slate-300 line-through" : "text-white"}`}>
                                  {point.text}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Right Panel: Real-time Sentiment */}
                        <div className="w-40 border-l border-slate-700 bg-slate-800/50 p-3">
                          <h5 className="text-xs font-space-grotesk font-semibold text-white mb-3">Sentiment</h5>
                          <div className="mb-4">
                            <div className="h-24 rounded-lg bg-slate-900 p-2 flex items-end justify-around gap-1">
                              {[20, 35, 45, 30, 50, 40, 35].map((height, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ height: 0 }}
                                  animate={isInView ? { height: `${height}%` } : {}}
                                  transition={{ ...snappySpring, delay: 0.7 + i * 0.1 + idx * 0.05 }}
                                  className="w-full rounded-t bg-gradient-to-t from-emerald-500 to-emerald-400"
                                />
                              ))}
                            </div>
                            <p className="text-[10px] text-slate-400 font-inter mt-2 text-center">Neutral → Positiv</p>
                          </div>
                          <div className="space-y-2">
                            <div className="p-2 rounded-lg bg-slate-900">
                              <p className="text-[10px] text-slate-500 font-inter mb-1">Keyword</p>
                              <p className="text-xs text-white font-inter">&quot;CRM&quot; erkannt</p>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-900">
                              <p className="text-[10px] text-slate-500 font-inter mb-1">Tone</p>
                              <p className="text-xs text-emerald-400 font-inter">Positiv</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Bar: Call Controls */}
                      <div className="bg-slate-800 border-t border-slate-700 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span className="text-[10px] text-slate-400 font-inter">Recording</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1 rounded bg-emerald-500 text-white text-xs font-inter font-medium">
                            End Call
                          </button>
                        </div>
                      </div>
                    </div>
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
                  <div className="absolute inset-0 p-3 bg-gradient-to-br from-slate-50 to-white">
                    <div className="h-full flex gap-2 overflow-x-auto">
                      {[
                        { stage: "Lead", deals: [{ name: "Acme Corp", value: "€50K", probability: 25, days: 2 }], color: "slate" },
                        { stage: "Qualified", deals: [{ name: "TechStart", value: "€25K", probability: 45, days: 5 }, { name: "DataFlow", value: "€15K", probability: 35, days: 3 }], color: "blue" },
                        { stage: "Proposal", deals: [{ name: "CloudSync", value: "€75K", probability: 65, days: 8 }], color: "purple" },
                        { stage: "Negotiation", deals: [{ name: "InnovateLab", value: "€30K", probability: 80, days: 12 }], color: "orange" },
                        { stage: "Closed", deals: [{ name: "ScaleUp", value: "€40K", probability: 100, days: 0 }], color: "emerald" },
                      ].map((column, colIdx) => (
                        <div key={column.stage} className="flex-shrink-0 w-48 flex flex-col">
                          <div className="mb-2">
                            <h5 className="text-xs font-space-grotesk font-semibold text-black mb-1">
                              {column.stage}
                            </h5>
                            <p className="text-[10px] text-black/50 font-inter">{column.deals.length} Deals</p>
                          </div>
                          <div className="flex-1 space-y-2 overflow-y-auto">
                            {column.deals.map((deal, dealIdx) => (
                              <motion.div
                                key={dealIdx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...snappySpring, delay: 0.6 + i * 0.1 + colIdx * 0.1 + dealIdx * 0.05 }}
                                className="p-3 rounded-lg border border-black/10 bg-white shadow-sm"
                              >
                                <div className="mb-2">
                                  <h6 className="text-xs font-space-grotesk font-semibold text-black mb-1">
                                    {deal.name}
                                  </h6>
                                  <p className="text-[10px] font-mono font-bold text-black tabular-nums">{deal.value}</p>
                                </div>
                                <div className="mb-2">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] text-black/50 font-inter">Win Probability</span>
                                    <span className="text-[10px] font-mono font-bold text-black tabular-nums">{deal.probability}%</span>
                                  </div>
                                  <div className="h-1.5 rounded-full bg-black/5 overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={isInView ? { width: `${deal.probability}%` } : {}}
                                      transition={{ ...snappySpring, delay: 0.7 + i * 0.1 + colIdx * 0.1 + dealIdx * 0.05 }}
                                      className={`h-full bg-gradient-to-r ${
                                        deal.probability > 70
                                          ? "from-emerald-500 to-emerald-600"
                                          : deal.probability > 40
                                          ? "from-blue-500 to-blue-600"
                                          : "from-slate-400 to-slate-500"
                                      } rounded-full`}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] text-black/40 font-inter">
                                    {deal.days === 0 ? "Heute" : `${deal.days} Tage`}
                                  </span>
                                  {deal.probability > 70 && (
                                    <div className="px-1.5 py-0.5 rounded bg-emerald-100 text-[10px] text-emerald-700 font-inter">
                                      Hot
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
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
