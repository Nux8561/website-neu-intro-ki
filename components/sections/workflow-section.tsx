"use client"

import * as React from "react"
import { LazyMotion, motion, useScroll, useTransform, domAnimation } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Sparkles, Zap } from "lucide-react"

const workflowSteps = [
  {
    title: "Daten importieren",
    description:
      "Verbinde deine bestehenden Datenquellen und importiere Kontakte, Deals und Aktivitäten nahtlos.",
    icon: Database,
  },
  {
    title: "KI-Analyse aktivieren",
    description:
      "Unsere KI analysiert deine Daten und identifiziert Muster, Chancen und Optimierungspotenziale.",
    icon: Sparkles,
  },
  {
    title: "Automatisierte Workflows",
    description:
      "Erstelle intelligente Automatisierungen, die sich selbst anpassen und dein Team entlasten.",
    icon: Zap,
  },
]

export function WorkflowSection() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const [activeStep, setActiveStep] = React.useState(0)

  const stepProgress = useTransform(scrollYProgress, [0, 1], [0, workflowSteps.length - 1])
  
  React.useEffect(() => {
    const unsubscribe = stepProgress.on("change", (latest) => {
      const step = Math.round(latest)
      setActiveStep(Math.min(step, workflowSteps.length - 1))
    })
    return () => unsubscribe()
  }, [stepProgress])

  const imageScale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.8, 1, 0.8, 0.8])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.3, 1, 0.3, 0.3])

  // Create opacity transforms for each step outside of map
  const step0Opacity = useTransform(
    scrollYProgress,
    [-0.5 / workflowSteps.length, 0 / workflowSteps.length, 0.5 / workflowSteps.length],
    [0.3, 1, 0.3]
  )
  const step1Opacity = useTransform(
    scrollYProgress,
    [
      (1 - 0.5) / workflowSteps.length,
      1 / workflowSteps.length,
      (1 + 0.5) / workflowSteps.length,
    ],
    [0.3, 1, 0.3]
  )
  const step2Opacity = useTransform(
    scrollYProgress,
    [
      (2 - 0.5) / workflowSteps.length,
      2 / workflowSteps.length,
      (2 + 0.5) / workflowSteps.length,
    ],
    [0.3, 1, 0.3]
  )

  const stepOpacities = [step0Opacity, step1Opacity, step2Opacity]

  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24 bg-white">
        <div ref={containerRef} className="h-[200vh] lg:h-[200vh] md:h-[150vh] relative">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-24">
                  {workflowSteps.map((step, index) => {
                    const isActive = activeStep === index

                    return (
                      <motion.div
                        key={index}
                        style={{ opacity: stepOpacities[index], willChange: "transform" }}
                        className="space-y-4"
                      >
                        <h3 className="text-3xl font-jakarta font-medium tracking-tight text-[#0B0C0E]">
                          {step.title}
                        </h3>
                        <p className="text-lg text-[#0B0C0E]/70 font-inter">
                          {step.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Visual Element - Desktop */}
                <div className="hidden lg:flex items-center justify-center h-full">
                  <motion.div
                    style={{
                      scale: imageScale,
                      opacity: imageOpacity,
                      willChange: "transform",
                    }}
                    className="w-full max-w-md"
                  >
                    <Card className="h-[400px] flex items-center justify-center border-[#0B0C0E]/10 bg-[#0B0C0E]/5">
                      <CardContent className="text-center">
                        <motion.div
                          key={activeStep}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="mb-4 flex items-center justify-center"
                        >
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-[#0B0C0E]/10">
                            {React.createElement(workflowSteps[activeStep].icon, {
                              className: "h-16 w-16 text-[#0B0C0E]",
                              strokeWidth: 1.5,
                            })}
                          </div>
                        </motion.div>
                        <CardTitle className="text-2xl mb-2 text-[#0B0C0E]">
                        {workflowSteps[activeStep].title}
                      </CardTitle>
                      <CardDescription className="text-base text-[#0B0C0E]/70">
                          {workflowSteps[activeStep].description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Visual Element - Mobile */}
                <div className="lg:hidden mt-8">
                  <Card className="h-[300px] flex items-center justify-center border-[#0B0C0E]/10 bg-[#0B0C0E]/5">
                    <CardContent className="text-center">
                      <motion.div
                        key={activeStep}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="mb-4 flex items-center justify-center"
                      >
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-[#0B0C0E]/10">
                          {React.createElement(workflowSteps[activeStep].icon, {
                            className: "h-12 w-12 text-[#0B0C0E]",
                            strokeWidth: 1.5,
                          })}
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl mb-2 text-[#0B0C0E]">
                        {workflowSteps[activeStep].title}
                      </CardTitle>
                      <CardDescription className="text-sm text-[#0B0C0E]/70">
                        {workflowSteps[activeStep].description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

