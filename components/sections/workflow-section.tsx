"use client"

import * as React from "react"
import { LazyMotion, motion, useScroll, useTransform, domAnimation } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const workflowSteps = [
  {
    title: "Daten importieren",
    description:
      "Verbinde deine bestehenden Datenquellen und importiere Kontakte, Deals und Aktivitäten nahtlos.",
    image: "📊",
  },
  {
    title: "KI-Analyse aktivieren",
    description:
      "Unsere KI analysiert deine Daten und identifiziert Muster, Chancen und Optimierungspotenziale.",
    image: "🤖",
  },
  {
    title: "Automatisierte Workflows",
    description:
      "Erstelle intelligente Automatisierungen, die sich selbst anpassen und dein Team entlasten.",
    image: "⚡",
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
      <section className="py-24">
        <div ref={containerRef} className="h-[300vh] lg:h-[300vh] md:h-[200vh] relative">
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
                        <h3 className="text-3xl font-jakarta font-medium tracking-tight text-white">
                          {step.title}
                        </h3>
                        <p className="text-lg text-slate-400 font-inter">
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
                    <Card className="h-[400px] flex items-center justify-center">
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
                          className="text-8xl mb-4"
                        >
                          {workflowSteps[activeStep].image}
                        </motion.div>
                        <CardTitle className="text-2xl mb-2">
                          {workflowSteps[activeStep].title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {workflowSteps[activeStep].description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Visual Element - Mobile */}
                <div className="lg:hidden mt-8">
                  <Card className="h-[300px] flex items-center justify-center">
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
                        className="text-6xl mb-4"
                      >
                        {workflowSteps[activeStep].image}
                      </motion.div>
                      <CardTitle className="text-xl mb-2">
                        {workflowSteps[activeStep].title}
                      </CardTitle>
                      <CardDescription className="text-sm">
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

