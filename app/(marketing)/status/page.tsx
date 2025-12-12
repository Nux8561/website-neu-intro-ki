"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react"

const services = [
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Web App", status: "operational", uptime: "99.98%" },
  { name: "Database", status: "operational", uptime: "99.99%" },
  { name: "Email Service", status: "operational", uptime: "99.97%" },
]

const incidents = [
  { date: "2024-12-15", title: "Geplante Wartung", status: "resolved", description: "Routine-Wartung erfolgreich abgeschlossen." },
  { date: "2024-12-10", title: "API-Verzögerungen", status: "resolved", description: "Kurze Verzögerungen wurden behoben." },
]

export default function StatusPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case "down":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600"
      case "degraded":
        return "text-yellow-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              System Status
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Prüfe den aktuellen Status der IntroKI-Services. Alle Systeme sind betriebsbereit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-jakarta font-semibold mb-8">Service-Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10"
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <div className="font-jakarta font-semibold text-[#0B0C0E]">{service.name}</div>
                      <div className={`text-sm font-inter ${getStatusColor(service.status)}`}>
                        {service.status === "operational" ? "Betriebsbereit" : service.status}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-inter text-[#0B0C0E]/60">
                    Uptime: {service.uptime}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-jakarta font-semibold mb-8">Letzte Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.date}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-jakarta font-semibold text-[#0B0C0E]">{incident.title}</div>
                      <div className="text-sm font-inter text-[#0B0C0E]/60">{incident.date}</div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-inter">
                      {incident.status === "resolved" ? "Behoben" : incident.status}
                    </span>
                  </div>
                  <p className="text-[#0B0C0E]/70 font-inter">{incident.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
