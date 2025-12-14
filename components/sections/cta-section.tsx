"use client"

import * as React from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Calendar, CreditCard, type LucideIcon } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
}

// Animated gradient orb component
function GradientOrb({ 
  className, 
  delay = 0 
}: { 
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

// Animated CTA Button with glow
function CTAButton({
  children,
  variant = "primary",
  icon: Icon,
  href,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  icon?: LucideIcon
  href: string
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  const variants = {
    primary: "bg-accent text-background hover:bg-accent-light",
    secondary: "bg-surface border border-border-subtle hover:border-border-active text-text-primary",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
  }

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect for primary button */}
      {variant === "primary" && (
        <motion.div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      )}
      
      <Link href={href}>
        <motion.button
          className={`
            relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-jakarta font-semibold text-base sm:text-lg
            transition-colors w-full sm:w-auto ${variants[variant]}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
          {children}
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
        </motion.button>
      </Link>
    </motion.div>
  )
}

// Animated stat badge
function StatBadge({ 
  value, 
  label,
  delay = 0,
}: { 
  value: string
  label: string
  delay?: number
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 px-6 py-3 rounded-2xl bg-white/5 border border-border-subtle"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05, 
        borderColor: "rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className="text-2xl font-jakarta font-semibold text-text-primary">{value}</span>
      <span className="text-sm font-inter text-text-muted">{label}</span>
    </motion.div>
  )
}

export function CTASection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Mouse position for interactive gradient
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const gradientX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const gradientY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientOrb 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" 
          delay={0}
        />
        <GradientOrb 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl" 
          delay={2}
        />
        <GradientOrb 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" 
          delay={4}
        />
      </div>

      {/* Interactive Gradient Spotlight */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"
        style={{
          x: useTransform(gradientX, (v) => v - 250),
          y: useTransform(gradientY, (v) => v - 250),
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-border-subtle text-sm font-inter text-text-secondary">
              <Sparkles className="h-4 w-4 text-blue-400" strokeWidth={1.5} />
              Kostenlos starten • Keine Kreditkarte erforderlich
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-4 sm:mb-6 px-4"
            style={{ textWrap: "balance" }}
          >
            Bereit, deinen Vertrieb zu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                transformieren
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            ?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-text-secondary font-inter mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            Schließe dich über 500+ Sales-Teams an, die mit IntroKI ihre Pipeline verdoppelt haben.
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <StatBadge value="14 Tage" label="Kostenlose Testphase" />
            <StatBadge value="&lt;5 Min" label="Onboarding-Zeit" />
            <StatBadge value="50+" label="Integrationen" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <CTAButton variant="primary" icon={Sparkles} href="/pricing">
              Kostenlos starten
            </CTAButton>
            <CTAButton variant="secondary" icon={Calendar} href="/demo">
              Demo vereinbaren
            </CTAButton>
            <CTAButton variant="ghost" icon={CreditCard} href="/pricing">
              Preise ansehen
            </CTAButton>
          </motion.div>

          {/* Trust Signal */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-sm text-text-muted font-inter"
          >
            Keine Kreditkarte erforderlich • Setup in unter 5 Minuten • Jederzeit kündbar
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
