"use client"

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ENTERPRISE_SPRING } from "@/lib/animations"

// --- Types ---
interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Intro KI hat unseren Sales-Prozess revolutioniert. Die automatische Recherche spart uns täglich Stunden.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sales Manager",
    role: "B2B SaaS, München",
  },
  {
    text: "Die Priorisierung zeigt uns genau, welche Deals heute unsere Aufmerksamkeit brauchen. Game Changer.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Head of Sales",
    role: "Tech-Unternehmen, Berlin",
  },
  {
    text: "Endlich ein CRM, das proaktiv Signale sendet statt nur Daten zu sammeln. Unser Team liebt es.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "VP Sales",
    role: "Enterprise Software, Hamburg",
  },
  {
    text: "Die Integration war nahtlos. Unser bestehendes System funktioniert perfekt mit Intro KI zusammen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "SaaS-Startup, Köln",
  },
  {
    text: "Die Call-Hilfe Feature ist genial. Wir wissen immer genau, was wir sagen müssen, bevor wir anrufen.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sales Director",
    role: "B2B Vertrieb, Frankfurt",
  },
  {
    text: "Automatische Task-Erstellung spart uns so viel Zeit. Das System denkt mit und handelt proaktiv.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Operations Manager",
    role: "Tech-Scale-up, Stuttgart",
  },
  {
    text: "Die Pipeline-Verwaltung mit Algorithmus-basierter Priorisierung ist genau das, was wir brauchten.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sales Lead",
    role: "Software-Unternehmen, Düsseldorf",
  },
  {
    text: "Team Management auf einen Blick. Wir sehen sofort, wer was macht und wo Unterstützung nötig ist.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Head of Revenue",
    role: "B2B SaaS, München",
  },
  {
    text: "Die Email-Automatisierung funktioniert perfekt. Emails werden automatisch gesendet, wenn gesehen.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sales Operations",
    role: "Enterprise CRM, Hamburg",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: ENTERPRISE_SPRING
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: ENTERPRISE_SPRING
                  }}
                  className="p-10 rounded-2xl border-2 border-black/10 shadow-sm max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-black/20" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-black/80 leading-relaxed font-normal m-0 transition-colors duration-300 font-inter">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <Image
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-black/5 group-hover:ring-black/20 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-black transition-colors duration-300 font-space-grotesk">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-black/60 mt-0.5 transition-colors duration-300 font-inter">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  )
}

export function TestimonialV2() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-white py-24 relative overflow-hidden border-b-2 border-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border-2 border-black/10 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-black/60 bg-white font-mono">
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-black transition-colors font-space-grotesk">
            Was unsere Kunden sagen
          </h2>
          <p className="text-center mt-5 text-black/70 text-lg leading-relaxed max-w-sm transition-colors font-inter">
            Entdecke, wie Teams ihre Sales-Prozesse mit Intro KI optimieren.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  )
}
