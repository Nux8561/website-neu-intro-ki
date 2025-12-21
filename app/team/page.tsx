"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/layout/site-footer"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { BorderBeam } from "@/components/ui/border-beam"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { AnimatedText } from "@/components/ui/animated-text"

export default function TeamPage() {
  const heroRef = React.useRef<HTMLDivElement>(null)
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  }
  
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  }

  const teamMembers = [
    {
      name: "Dominik Scherwinsky",
      role: "CEO & Programmierer",
      image: "/images/Gemini_Generated_Image_ljmubdljmubdljmu.png",
      description: "Visionär für intelligente CRM-Lösungen",
    },
    {
      name: "Maximilian",
      role: "CTO",
      image: "/images/Gemini_Generated_Image_o0qaeo0qaeo0qaeo.png",
      description: "Technische Exzellenz & Innovation",
    },
    {
      name: "Tony",
      role: "Vertrieb",
      image: "/images/Gemini_Generated_Image_ukzf8vukzf8vukzf.png",
      description: "Kundenbeziehungen & Business Development",
    },
    {
      name: "Lukas",
      role: "Vertrieb",
      image: "/images/Gemini_Generated_Image_xm25r1xm25r1xm25.png",
      description: "Sales & Account Management",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 attio-grid-pattern attio-connection-lines pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto" ref={heroRef}>
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Content */}
              <div className="flex-1">
                <TimelineContent
                  as="h1"
                  animationNum={0}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold text-slate-900 mb-8"
                >
                  Wir sind{" "}
                  <TimelineContent
                    as="span"
                    animationNum={1}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-slate-700 border-2 border-slate-300 inline-block xl:h-16 border-dotted px-2 rounded-md"
                  >
                    rethinking
                  </TimelineContent>{" "}
                  CRM, um zuverlässiger und immer kundenorientiert zu sein. Unser Ziel ist es, kontinuierlich die Messlatte zu erhöhen und{" "}
                  <TimelineContent
                    as="span"
                    animationNum={2}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-slate-700 border-2 border-slate-300 inline-block xl:h-16 border-dotted px-2 rounded-md"
                  >
                    herauszufordern
                  </TimelineContent>{" "}
                  wie Dinge für dich{" "}
                  <TimelineContent
                    as="span"
                    animationNum={3}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-slate-700 border-2 border-slate-300 inline-block xl:h-16 border-dotted px-2 rounded-md"
                  >
                    funktionieren können.
                  </TimelineContent>
                </TimelineContent>

                <div className="mt-12 flex gap-2 justify-between">
                  <TimelineContent
                    as="div"
                    animationNum={4}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="mb-4 sm:text-xl text-xs"
                  >
                    <div className="font-medium text-slate-900 mb-1 capitalize">
                      Wir sind Intro KI und wir werden
                    </div>
                    <div className="text-slate-600 font-semibold uppercase">
                      dich weiterbringen
                    </div>
                  </TimelineContent>

                  <TimelineContent
                    as="button"
                    animationNum={5}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="bg-slate-900 gap-2 font-medium shadow-lg shadow-slate-900 text-white h-12 px-4 rounded-full text-sm inline-flex items-center cursor-pointer"
                  >
                    {/* Fake UI: Mini Dashboard Icon */}
                    <div className="w-4 h-4 rounded border border-white/30 bg-white/10 p-0.5">
                      <div className="w-full h-full rounded bg-white/20 flex flex-col gap-0.5">
                        <div className="h-0.5 w-full bg-white/40 rounded"></div>
                        <div className="h-0.5 w-2/3 bg-white/30 rounded"></div>
                        <div className="h-0.5 w-1/2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    Über Intro KI
                  </TimelineContent>
                </div>
              </div>
            </div>

            {/* Team Grid - Dense Bento Layout */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, i) => (
                <TimelineContent
                  key={member.name}
                  as="div"
                  animationNum={6 + i}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={ENTERPRISE_SPRING}
                  >
                    <ExpensiveCard intensity={6} className="p-6 relative overflow-hidden bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse">
                      <BorderBeam lightColor="#94A3B8" duration={8} />
                      <div className="relative z-10">
                        {/* Image with better aspect ratio */}
                        <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                        <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-[14px] leading-[20px] font-medium text-slate-600 mb-2">{member.role}</p>
                        <p className="text-[14px] leading-[20px] text-slate-500">{member.description}</p>
                      </div>
                    </ExpensiveCard>
                  </motion.div>
                </TimelineContent>
              ))}
            </div>

            {/* Vision Section - Dense Bento Grid */}
            <div className="mt-16">
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-8"
              >
                <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-slate-900 mb-4">
                  Unsere Vision
                </h2>
              </TimelineContent>

              <div className="space-y-4">
                <TimelineContent
                  as="div"
                  animationNum={11}
                  timelineRef={heroRef}
                  customVariants={textVariants}
                  className="prose prose-slate max-w-none"
                >
                  <AnimatedText variant="fade" delay={0.1} className="text-[16px] leading-[24px] text-slate-600">
                    Wir entwickeln Intro KI zu einem intelligenten CRM-System, das nicht nur Daten verwaltet, 
                    sondern echte Intelligenz in jeden Vertriebsprozess bringt.
                  </AnimatedText>
                </TimelineContent>

                {/* Future Projects - Dense Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {/* Live Transcriptions - Fake UI */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={ENTERPRISE_SPRING}
                  >
                    <ExpensiveCard intensity={4} className="p-6 relative overflow-hidden bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse">
                      <BorderBeam lightColor="#94A3B8" duration={8} />
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          {/* Fake UI: Transcription Interface */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
                            <div className="w-full h-full rounded border border-slate-100 bg-white/80 p-1.5 flex flex-col gap-1">
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                <div className="h-1 bg-slate-200 rounded flex-1"></div>
                              </div>
                              <div className="h-0.5 bg-slate-100 rounded w-3/4"></div>
                              <div className="h-0.5 bg-slate-100 rounded w-1/2"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-slate-900 mb-2">
                              Live Transcriptions
                            </h3>
                            <p className="text-[14px] leading-[20px] text-slate-600">
                              Automatische Transkriptionen von Gesprächen in Echtzeit, direkt im CRM integriert.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ExpensiveCard>
                  </motion.div>

                  {/* Life Coaching - Fake UI */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={ENTERPRISE_SPRING}
                  >
                    <ExpensiveCard intensity={4} className="p-6 relative overflow-hidden bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse">
                      <BorderBeam lightColor="#94A3B8" duration={8} />
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          {/* Fake UI: Coaching Dashboard */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
                            <div className="w-full h-full rounded border border-slate-100 bg-white/80 p-1.5 flex flex-col gap-1">
                              <div className="h-2 bg-slate-200 rounded w-full"></div>
                              <div className="h-1.5 bg-slate-100 rounded w-4/5"></div>
                              <div className="h-1 bg-slate-50 rounded w-3/5"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-slate-900 mb-2">
                              Life Coaching
                            </h3>
                            <p className="text-[14px] leading-[20px] text-slate-600">
                              KI-gestütztes Coaching für Vertriebsteams, das kontinuierlich aus Gesprächen lernt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ExpensiveCard>
                  </motion.div>

                  {/* Calling System - Fake UI */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={ENTERPRISE_SPRING}
                  >
                    <ExpensiveCard intensity={4} className="p-6 relative overflow-hidden bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse">
                      <BorderBeam lightColor="#94A3B8" duration={8} />
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          {/* Fake UI: Phone Interface */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
                            <div className="w-full h-full rounded border border-slate-100 bg-white/80 p-1.5 flex flex-col items-center justify-center gap-1">
                              <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                              </div>
                              <div className="h-0.5 bg-slate-200 rounded w-3"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-slate-900 mb-2">
                              Eigenes Calling System
                            </h3>
                            <p className="text-[14px] leading-[20px] text-slate-600">
                              Integriertes Telefonie-System direkt im CRM, mit automatischer Aufzeichnung und Analyse.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ExpensiveCard>
                  </motion.div>

                  {/* Enterprise AI - Fake UI */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={ENTERPRISE_SPRING}
                  >
                    <ExpensiveCard intensity={4} className="p-6 relative overflow-hidden bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse">
                      <BorderBeam lightColor="#94A3B8" duration={8} />
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          {/* Fake UI: AI Integration Nodes */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
                            <div className="w-full h-full rounded border border-slate-100 bg-white/80 p-1.5 flex items-center justify-center">
                              <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                                <div className="bg-slate-200 rounded"></div>
                                <div className="bg-slate-100 rounded"></div>
                                <div className="bg-slate-100 rounded"></div>
                                <div className="bg-slate-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-slate-900 mb-2">
                              Enterprise AI Integration
                            </h3>
                            <p className="text-[14px] leading-[20px] text-slate-600">
                              Integration mit OpenAI, Google Cloud, Gemini und anderen führenden KI-Anbietern, 
                              um das Potenzial eines intelligenten CRM-Systems deutlich zu erhöhen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ExpensiveCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

