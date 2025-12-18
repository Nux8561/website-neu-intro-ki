"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Key,
  Users
} from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

export default function SecurityPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const infrastructureRef = React.useRef(null)
  const infrastructureInView = useInView(infrastructureRef, { once: true, margin: "-100px" })

  const animationRef = React.useRef(null)
  const animationInView = useInView(animationRef, { once: true, margin: "-100px" })

  const faqRef = React.useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  // Refs for AnimatedBeam
  const userRef = React.useRef<HTMLDivElement>(null)
  const shieldRef = React.useRef<HTMLDivElement>(null)
  const serverRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Animation state
  const [shieldPulsing, setShieldPulsing] = React.useState(false)

  React.useEffect(() => {
    // Trigger shield pulse when animation is in view
    if (animationInView) {
      const interval = setInterval(() => {
        setShieldPulsing(true)
        setTimeout(() => setShieldPulsing(false), 500)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [animationInView])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-gray-900 mb-6">
              Sicherheit auf Enterprise-Niveau.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
              Intro KI wurde für die strengsten Datenschutzanforderungen entwickelt. Ihre Daten gehören Ihnen – und nur Ihnen.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {[
                { Icon: ShieldCheck, label: "SOC 2 Type II", description: "Zertifiziert" },
                { Icon: Lock, label: "DSGVO/GDPR", description: "Konform" },
                { Icon: Server, label: "ISO 27001", description: "In Bearbeitung" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ ...ENTERPRISE_SPRING, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-6 border border-gray-200 rounded-lg bg-white"
                >
                  <badge.Icon className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                  <div className="text-center">
                    <div className="text-[14px] font-medium text-gray-900">{badge.label}</div>
                    <div className="text-[12px] text-gray-500">{badge.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Grid - Bento Style */}
      <section ref={infrastructureRef} className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={infrastructureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="mb-12 text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Enterprise-Infrastruktur
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
              Ihre Daten werden mit höchsten Sicherheitsstandards geschützt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Data Residency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infrastructureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
              className="p-8 border border-gray-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Serverstandort Frankfurt
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Alle Daten werden ausschließlich in Deutschland gehostet (AWS eu-central-1). Keine Daten verlassen die EU.
              </p>
            </motion.div>

            {/* Card 2: Encryption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infrastructureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
              className="p-8 border border-gray-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                AES-256 Verschlüsselung
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Ruhende Daten (At rest) und Daten in Übertragung (In transit) sind voll verschlüsselt. Bank-Level-Sicherheit.
              </p>
            </motion.div>

            {/* Card 3: Access Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infrastructureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
              className="p-8 border border-gray-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Key className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                SSO & SAML
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Verbinden Sie Intro KI mit Okta, Google Workspace oder Azure AD. Enterprise-Authentifizierung ohne Passwörter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Animation */}
      <section ref={animationRef} className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="mb-12 text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Wie Ihre Daten geschützt werden
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
              Jede Datenübertragung wird durch mehrschichtige Sicherheitsmaßnahmen geschützt.
            </p>
          </motion.div>

          {/* Animation Container */}
          <div 
            ref={containerRef}
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-10"
          >
            {/* Animated Beams */}
            {userRef.current && shieldRef.current && containerRef.current && (
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={userRef}
                toRef={shieldRef}
                delay={0}
                duration={2}
              />
            )}
            {shieldRef.current && serverRef.current && containerRef.current && (
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={shieldRef}
                toRef={serverRef}
                delay={1}
                duration={2}
              />
            )}

            {/* User Node */}
            <motion.div
              ref={userRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
              className="absolute left-[15%] top-1/2 -translate-y-1/2 relative z-20"
            >
              <NodeCircle Icon={Users} size="md" label="Benutzer" />
            </motion.div>

            {/* Shield Node (Center) */}
            <motion.div
              ref={shieldRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationInView ? { opacity: 1, scale: shieldPulsing ? 1.1 : 1 } : { opacity: 0, scale: 0.8 }}
              transition={ENTERPRISE_SPRING}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 relative z-20"
            >
              <NodeCircle Icon={ShieldCheck} size="lg" label="Verschlüsselung" />
            </motion.div>

            {/* Server Node */}
            <motion.div
              ref={serverRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
              className="absolute right-[15%] top-1/2 -translate-y-1/2 relative z-20"
            >
              <NodeCircle Icon={Server} size="md" label="Server" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Details Section */}
      <section ref={faqRef} className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="mb-12 text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Weitere Sicherheitsdetails
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
              className="p-8 border border-gray-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Automatische Backups
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Ihre Daten werden täglich gesichert und in geografisch getrennten Rechenzentren gespeichert. Point-in-Time Recovery für kritische Daten.
              </p>
            </motion.div>

            {/* Audit Logs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
              className="p-8 border border-gray-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Vollständige Audit-Logs
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Jede Aktion wird protokolliert und für Compliance-Zwecke aufbewahrt. Transparente Nachverfolgbarkeit aller Datenzugriffe.
              </p>
            </motion.div>

            {/* Sub-processors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
              className="p-8 border border-gray-200 rounded-lg bg-white md:col-span-2"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Sub-Prozessoren
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                Wir arbeiten nur mit zertifizierten Partnern, die denselben hohen Sicherheitsstandard erfüllen. Alle Sub-Prozessoren sind DSGVO-konform und werden regelmäßig überprüft.
              </p>
              <div className="flex items-center gap-2 text-[14px] text-gray-500">
                <span>Uptime:</span>
                <span className="tabular-nums font-medium text-gray-900">99.99%</span>
                <span className="ml-2 text-green-600">• System Operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={ENTERPRISE_SPRING}
            className="text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Haben Sie Fragen zur Sicherheit?
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 mb-8 max-w-2xl mx-auto">
              Unser Sicherheitsteam steht Ihnen gerne für detaillierte Informationen zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-8 py-3.5 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-md px-8 py-3.5 text-sm font-medium transition-all duration-attio ease-attio-ease-out"
              >
                Security-Whitepaper anfordern
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/**
 * Node Circle Component (Reused from HeroSimulation)
 */
function NodeCircle({
  Icon,
  size = "md",
  label,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  size?: "sm" | "md" | "lg"
  label?: string
}) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full",
          "bg-white border border-gray-200 shadow-sm",
          sizeClasses[size],
          "z-10"
        )}
      >
        <Icon
          className={cn(
            iconSizes[size],
            "text-gray-900"
          )}
          strokeWidth={1.5}
        />
      </div>
      {label && (
        <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-gray-600">
          {label}
        </span>
      )}
    </div>
  )
}

