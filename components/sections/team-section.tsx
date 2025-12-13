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
    avatar: "/team/dominik.jpg",
    linkedin: "https://linkedin.com/in/dominik-scherwinsky",
    twitter: "https://twitter.com/dscherwinsky",
  },
  {
    id: "2",
    name: "Tech Co-Founder",
    role: "CTO & Co-Founder",
    bio: "Ex-Google Engineer. Spezialisiert auf AI/ML und skalierbare Cloud-Architekturen.",
    avatar: "/team/cto.jpg",
    linkedin: "#",
    github: "#",
  },
]

const team: TeamMember[] = [
  {
    id: "3",
    name: "Anna Weber",
    role: "Head of Product",
    bio: "Product Leader mit Fokus auf User Experience und datengetriebene Entscheidungen.",
    avatar: "/team/anna.jpg",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Max Fischer",
    role: "Head of Engineering",
    bio: "Full-Stack Engineer mit Passion für performante und elegante Software.",
    avatar: "/team/max.jpg",
    github: "#",
  },
  {
    id: "5",
    name: "Julia Hoffmann",
    role: "Head of Customer Success",
    bio: "Sorgt dafür, dass unsere Kunden erfolgreich sind und das Beste aus IntroKI herausholen.",
    avatar: "/team/julia.jpg",
    linkedin: "#",
  },
  {
    id: "6",
    name: "Tim Müller",
    role: "AI/ML Engineer",
    bio: "Entwickelt die KI-Modelle hinter unserer Deep Research und Lead Scoring Technologie.",
    avatar: "/team/tim.jpg",
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
      damping: 25,
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
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {/* Fallback */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
          <span className="text-4xl font-jakarta font-medium text-text-primary/30">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        {/* Hover Overlay with Social Links */}
        <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="text-center mb-16"
        >
          <span className="pill-button mb-6 inline-flex">
            Unser Team
          </span>
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
            Die Menschen hinter IntroKI
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white border border-border">
            <div className="text-left">
              <h3 className="font-jakarta font-medium text-text-primary text-xl mb-2">
                Werde Teil unseres Teams
              </h3>
              <p className="text-text-muted">
                Wir suchen talentierte Menschen, die mit uns die Zukunft gestalten.
              </p>
            </div>
            <Link
              href="/careers"
              className="btn-primary whitespace-nowrap"
            >
              Offene Stellen ansehen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

