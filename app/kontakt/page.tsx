"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/layout/site-footer"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simuliere Formular-Submit (später mit echten API-Call ersetzen)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitStatus("success")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 attio-grid-pattern attio-connection-lines pt-16">
        <section className="py-24 px-4">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={ENTERPRISE_SPRING}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Kontakt
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Lass uns gemeinsam herausfinden, wie Intro KI dein Team unterstützen kann.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
              >
                <ExpensiveCard intensity={6} className="p-8 relative overflow-hidden">
                  <BorderBeam lightColor="#94A3B8" duration={8} />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Kontaktinformationen</h2>
                    
                    <div className="space-y-6">
                      {/* Email - Fake UI */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-xl shadow-attio-diffuse p-3">
                          <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded border border-slate-100 p-2">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1"></div>
                            <div className="h-1 bg-slate-100 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-1">Email</h3>
                          <a href="mailto:kontakt@intro-ki.de" className="text-slate-600 hover:text-slate-900 transition-colors">
                            kontakt@intro-ki.de
                          </a>
                        </div>
                      </div>

                      {/* Phone - Fake UI */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-xl shadow-attio-diffuse p-3">
                          <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded border border-slate-100 p-2 flex flex-col items-center justify-center">
                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 mb-1 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                            </div>
                            <div className="h-1 bg-slate-200 rounded w-4"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-1">Telefon</h3>
                          <a href="tel:+49123456789" className="text-slate-600 hover:text-slate-900 transition-colors">
                            +49 (0) 123 456 789
                          </a>
                        </div>
                      </div>

                      {/* Address - Fake UI */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-xl shadow-attio-diffuse p-3">
                          <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded border border-slate-100 p-2">
                            <div className="flex items-center gap-1 mb-1">
                              <div className="w-3 h-3 rounded border border-slate-300 flex items-center justify-center">
                                <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              </div>
                              <div className="h-1 bg-slate-200 rounded flex-1"></div>
                            </div>
                            <div className="h-0.5 bg-slate-100 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-1">Adresse</h3>
                          <p className="text-slate-600">
                            Intro KI GmbH<br />
                            Musterstraße 123<br />
                            12345 Berlin, Deutschland
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpensiveCard>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
              >
                <ExpensiveCard intensity={6} className="p-8 relative overflow-hidden">
                  <BorderBeam lightColor="#94A3B8" duration={8} />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Nachricht senden</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                          placeholder="Dein Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                          placeholder="deine@email.de"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                          placeholder="Dein Unternehmen"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                          placeholder="+49 (0) 123 456 789"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                          placeholder="Wie können wir dir helfen?"
                        />
                      </div>

                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm"
                        >
                          Vielen Dank! Wir melden uns schnellstmöglich bei dir.
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={ENTERPRISE_SPRING}
                        className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-6 py-3 text-sm font-medium transition-all shadow-attio-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Nachricht senden
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </ExpensiveCard>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

