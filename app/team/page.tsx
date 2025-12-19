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
import { Zap } from "lucide-react"

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
      <main className="min-h-screen bg-slate-50 attio-grid-pattern attio-connection-lines">
        {/* Hero Section */}
        <section className="py-32 px-4 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto" ref={heroRef}>
            <div className="flex flex-col lg:flex-row items-start gap-8">
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
                    <Zap fill="white" size={16} />
                    Über Intro KI
                  </TimelineContent>
                </div>
              </div>
            </div>

            {/* Team Grid - 4 Banner */}
            <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <TimelineContent
                  key={member.name}
                  as="div"
                  animationNum={6 + i}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                >
                  <ExpensiveCard intensity={6} className="p-8 relative overflow-hidden">
                    <BorderBeam lightColor="#94A3B8" duration={8} />
                    <div className="relative z-10">
                      <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden bg-slate-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-medium text-slate-600 mb-3">{member.role}</p>
                      <p className="text-sm text-slate-500">{member.description}</p>
                    </div>
                  </ExpensiveCard>
                </TimelineContent>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

