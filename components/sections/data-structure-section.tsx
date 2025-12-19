"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * DATA STRUCTURE SECTION - Attio-Style
 * Zeigt Custom Objects und Datenstruktur-Diagramm
 */
export function DataStructureSection() {
  const objects = [
    {
      name: "Company",
      type: "Standard",
      records: "2,360",
      icon: "🏢",
      connections: ["Workspace", "Deal"]
    },
    {
      name: "Workspace",
      type: "Custom",
      records: "1,424",
      icon: "📊",
      connections: ["Company", "User"]
    },
    {
      name: "Deal",
      type: "Custom",
      records: "953",
      icon: "🔒",
      connections: ["Company", "Person"]
    },
    {
      name: "User",
      type: "Custom",
      records: "864",
      icon: "👤",
      connections: ["Workspace", "Person"]
    },
    {
      name: "Person",
      type: "Standard",
      records: "612",
      icon: "👥",
      connections: ["Deal", "User"]
    }
  ]

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Grid Pattern - Dark Mode Variante */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      {/* Connection Lines - Dark Mode */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_20%,rgba(255,255,255,0.1)_80%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.1)_20%,rgba(255,255,255,0.1)_80%,transparent_100%)] [background-size:200px_200px]" />
      
      <div className="relative z-10 mx-auto max-w-[1200px] px-4">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl mb-4">
              A CRM for any use case.
            </h2>
            <p className="text-lg text-slate-400">
              Easily create custom objects that match your business&apos; unique data structure.
            </p>
          </div>
        </ScrollReveal>

        {/* Data Structure Diagram */}
        <ScrollReveal direction="up" distance={80}>
          <div className="relative">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "600px" }}>
              {/* Company → Workspace */}
              <line x1="50%" y1="20%" x2="30%" y2="40%" stroke="#475569" strokeWidth="1" opacity="0.3" />
              {/* Company → Deal */}
              <line x1="50%" y1="20%" x2="70%" y2="40%" stroke="#475569" strokeWidth="1" opacity="0.3" />
              {/* Workspace → User */}
              <line x1="30%" y1="40%" x2="30%" y2="60%" stroke="#475569" strokeWidth="1" opacity="0.3" />
              {/* Deal → Person */}
              <line x1="70%" y1="40%" x2="50%" y2="80%" stroke="#475569" strokeWidth="1" opacity="0.3" />
              {/* User → Person */}
              <line x1="30%" y1="60%" x2="50%" y2="80%" stroke="#475569" strokeWidth="1" opacity="0.3" />
            </svg>

            {/* Object Cards */}
            <div className="relative grid grid-cols-3 gap-8" style={{ minHeight: "600px" }}>
              {/* Company - Top Center */}
              <div className="col-start-2 row-start-1">
                <ObjectCard object={objects[0]} />
              </div>
              
              {/* Workspace - Left Middle */}
              <div className="col-start-1 row-start-2">
                <ObjectCard object={objects[1]} />
              </div>
              
              {/* Deal - Right Middle */}
              <div className="col-start-3 row-start-2">
                <ObjectCard object={objects[2]} />
              </div>
              
              {/* User - Left Bottom */}
              <div className="col-start-1 row-start-3">
                <ObjectCard object={objects[3]} />
              </div>
              
              {/* Person - Center Bottom */}
              <div className="col-start-2 row-start-3">
                <ObjectCard object={objects[4]} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ObjectCard({ object }: { object: typeof objects[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={ENTERPRISE_SPRING}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <ExpensiveCard
        intensity={5}
        className="bg-slate-800/90 border-slate-700/50 backdrop-blur-xl p-6 min-w-[200px]"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{object.icon}</div>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300">
            {object.type}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{object.name}</h3>
        <p className="text-sm text-slate-400">{object.records} Records</p>
      </ExpensiveCard>
    </motion.div>
  )
}

