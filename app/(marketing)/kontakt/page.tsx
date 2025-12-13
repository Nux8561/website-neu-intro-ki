"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react"

const contactMethods = [
  { icon: Mail, title: "E-Mail", description: "kontakt@intro.ki", link: "mailto:kontakt@intro.ki" },
  { icon: Phone, title: "Telefon", description: "+49 (0) 30 12345678", link: "tel:+493012345678" },
  { icon: MapPin, title: "Adresse", description: "IntroKI GmbH, Berlin, Deutschland", link: "#" },
  { icon: MessageSquare, title: "Support", description: "support@intro.ki", link: "mailto:support@intro.ki" },
]

export default function KontaktPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Wir freuen uns darauf, von dir zu hören. Kontaktiere uns für Fragen, Support oder Feedback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{method.title}</h3>
                      <p className="text-text-secondary font-inter mb-4">{method.description}</p>
                      <a href={method.link} className="text-blue-600 hover:text-blue-700 font-inter">
                        Kontaktieren →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-jakarta font-semibold mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-inter text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border-active bg-background focus:outline-none focus:ring-2 focus:ring-white/20 font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter text-text-secondary mb-2">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border-active bg-background focus:outline-none focus:ring-2 focus:ring-white/20 font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter text-text-secondary mb-2">Nachricht</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border-active bg-background focus:outline-none focus:ring-2 focus:ring-white/20 font-inter"
                  />
                </div>
                <Button size="lg" className="w-full bg-text-primary text-white rounded-full">
                  Nachricht senden <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
