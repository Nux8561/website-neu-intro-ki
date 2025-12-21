"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  linkedin?: string
  twitter?: string
  github?: string
}

const founders: TeamMember[] = [
  {
    id: "1",
    name: "Dominik Scherwinsky",
    role: "CEO & Co-Founder",
    bio: "10+ Jahre Erfahrung in Sales und GTM. Zuvor VP Sales bei einem führenden SaaS-Unicorn.",
    avatar: "/images/Gemini_Generated_Image_ljmubdljmubdljmu.png",
    linkedin: "https://linkedin.com/in/dominik-scherwinsky",
    twitter: "https://twitter.com/dscherwinsky",
  },
  // Weitere Co-Founder werden hinzugefügt, sobald Details verfügbar sind
]

const team: TeamMember[] = [
  {
    id: "3",
    name: "Anna Weber",
    role: "Head of Product",
    bio: "Product Leader mit Fokus auf User Experience und datengetriebene Entscheidungen.",
    avatar: "/images/Gemini_Generated_Image_vytwh6vytwh6vytw.png",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Max Fischer",
    role: "Head of Engineering",
    bio: "Full-Stack Engineer mit Passion für performante und elegante Software.",
    avatar: "/images/Gemini_Generated_Image_c8ji0yc8ji0yc8ji.png",
    github: "#",
  },
  {
    id: "5",
    name: "Julia Hoffmann",
    role: "Head of Customer Success",
    bio: "Sorgt dafür, dass unsere Kunden erfolgreich sind und das Beste aus IntroKI herausholen.",
    avatar: "/images/Gemini_Generated_Image_up8vydup8vydup8v.png",
    linkedin: "#",
  },
  {
    id: "6",
    name: "Tim Müller",
    role: "AI/ML Engineer",
    bio: "Entwickelt die KI-Modelle hinter unserer Deep Research und Lead Scoring Technologie.",
    avatar: "/images/Gemini_Generated_Image_eztezmeztezmezte.png",
    github: "#",
  },
  {
    id: "7",
    name: "Sarah Klein",
    role: "Head of Marketing",
    bio: "Marketing-Expertin mit Fokus auf Growth und Brand Building im B2B-SaaS-Bereich.",
    avatar: "/images/Gemini_Generated_Image_r70y1r70y1r70y1r.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "8",
    name: "Luke Sperner",
    role: "Head of Sales",
    bio: "Sales-Veteran mit über 15 Jahren Erfahrung im Enterprise-Vertrieb und Account Management.",
    avatar: "/images/Gemini_Generated_Image_xm25r1xm25r1xm25.png",
    linkedin: "#",
  },
  {
    id: "9",
    name: "Lisa Bauer",
    role: "UX/UI Designer",
    bio: "Designerin mit Passion für intuitive Interfaces und moderne Design-Systeme.",
    avatar: "/images/Gemini_Generated_Image_7lpka57lpka57lpk.png",
    linkedin: "#",
    github: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
}

function TeamMemberCard({ member, isFounder = false }: { member: TeamMember; isFounder?: boolean }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group ${isFounder ? "card-attio p-6" : ""}`}
    >
      {/* Avatar */}
      <div className={`relative overflow-hidden rounded-2xl bg-surface mb-4 ${
        isFounder ? "aspect-[4/5]" : "aspect-square"
      }`}>
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover"
          style={{ position: 'absolute', zIndex: 10 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            // Show fallback when image fails
            const container = (e.target as HTMLImageElement).parentElement
            const fallback = container?.querySelector('.avatar-fallback')
            if (fallback) {
              (fallback as HTMLElement).style.display = 'flex'
            }
          }}
          onLoad={(e) => {
            // Hide fallback when image loads successfully
            const container = (e.target as HTMLImageElement).parentElement
            const fallback = container?.querySelector('.avatar-fallback')
            if (fallback) {
              (fallback as HTMLElement).style.display = 'none'
            }
          }}
          unoptimized
        />
        {/* Fallback - only shown if image fails to load */}
        <div className="avatar-fallback absolute inset-0 flex items-center justify-center bg-white border border-attio-subtle" style={{ zIndex: 0, display: 'none' }}>
          <span className="text-4xl font-jakarta font-medium text-text-primary/30">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        {/* Hover Overlay with Social Links */}
        <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-attio ease-attio-ease-out flex items-end p-4">
          <div className="flex gap-3">
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
            )}
            {member.twitter && (
              <Link
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </Link>
            )}
            {member.github && (
              <Link
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={isFounder ? "" : "px-1"}>
        <h3 className="font-jakarta font-medium text-text-primary text-lg mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-accent-blue font-medium mb-2">
          {member.role}
        </p>
        {isFounder && (
          <p className="text-sm text-text-muted">
            {member.bio}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <section className="section-spacing bg-surface/50">
      <div className="container-responsive max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-center mb-16"
        >
          <span className="pill-button mb-6 inline-flex">
            Unser Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-3 sm:mb-4 px-4">
            Die Menschen hinter IntroKI
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-4">
            Ein leidenschaftliches Team aus Sales-Experten, Engineers und Designern, 
            das die Zukunft des CRM gestaltet.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8 text-center">
            Gründer
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4"
          >
            {founders.map((founder) => (
              <TeamMemberCard key={founder.id} member={founder} isFounder />
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8 text-center">
            Team
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4"
          >
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-border mx-4 sm:mx-0">
            <div className="text-center sm:text-left">
              <h3 className="font-jakarta font-medium text-text-primary text-lg sm:text-xl mb-2">
                Werde Teil unseres Teams
              </h3>
              <p className="text-sm sm:text-base text-text-muted">
                Wir suchen talentierte Menschen, die mit uns die Zukunft gestalten.
              </p>
            </div>
            <Link
              href="/careers"
              className="btn-primary whitespace-nowrap w-full sm:w-auto text-center"
            >
              Offene Stellen ansehen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

