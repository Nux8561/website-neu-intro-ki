"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6"
              >
                Kontakt
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Kontaktieren Sie uns
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Haben Sie Fragen? Wir helfen Ihnen gerne weiter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Nachricht senden
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#0B0C0E]/70 font-inter text-sm mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Ihr Name"
                    className="bg-[#0B0C0E]/5 border-[#0B0C0E]/10 text-[#0B0C0E] placeholder:text-[#0B0C0E]/50"
                  />
                </div>
                <div>
                  <label className="block text-[#0B0C0E]/70 font-inter text-sm mb-2">
                    E-Mail
                  </label>
                  <Input
                    type="email"
                    placeholder="ihre@email.com"
                    className="bg-[#0B0C0E]/5 border-[#0B0C0E]/10 text-[#0B0C0E] placeholder:text-[#0B0C0E]/50"
                  />
                </div>
                <div>
                  <label className="block text-[#0B0C0E]/70 font-inter text-sm mb-2">
                    Betreff
                  </label>
                  <Input
                    type="text"
                    placeholder="Betreff"
                    className="bg-[#0B0C0E]/5 border-[#0B0C0E]/10 text-[#0B0C0E] placeholder:text-[#0B0C0E]/50"
                  />
                </div>
                <div>
                  <label className="block text-[#0B0C0E]/70 font-inter text-sm mb-2">
                    Nachricht
                  </label>
                  <textarea
                    placeholder="Ihre Nachricht"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 text-[#0B0C0E] placeholder:text-[#0B0C0E]/50 focus:outline-none focus:border-[#0B0C0E]/20 focus:bg-[#0B0C0E]/10 transition-all font-inter resize-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full"
                >
                  Nachricht senden
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="space-y-6"
            >
              <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
                <h2 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                  Kontaktinformationen
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#0B0C0E]/5 border border-[#0B0C0E]/10">
                      <Mail className="h-5 w-5 text-[#0B0C0E]/70" />
                    </div>
                    <div>
                      <h3 className="text-[#0B0C0E] font-inter font-medium mb-1">
                        E-Mail
                      </h3>
                      <a
                        href="mailto:info@introki.app"
                        className="text-[#0B0C0E]/70 font-inter text-sm hover:text-[#0B0C0E] transition-colors"
                      >
                        info@introki.app
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#0B0C0E]/5 border border-[#0B0C0E]/10">
                      <Phone className="h-5 w-5 text-[#0B0C0E]/70" />
                    </div>
                    <div>
                      <h3 className="text-[#0B0C0E] font-inter font-medium mb-1">
                        Telefon
                      </h3>
                      <a
                        href="tel:+49123456789"
                        className="text-[#0B0C0E]/70 font-inter text-sm hover:text-[#0B0C0E] transition-colors"
                      >
                        +49 (0) 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#0B0C0E]/5 border border-[#0B0C0E]/10">
                      <MapPin className="h-5 w-5 text-[#0B0C0E]/70" />
                    </div>
                    <div>
                      <h3 className="text-[#0B0C0E] font-inter font-medium mb-1">
                        Adresse
                      </h3>
                      <p className="text-[#0B0C0E]/70 font-inter text-sm">
                        IntroKI GmbH
                        <br />
                        Musterstraße 123
                        <br />
                        10115 Berlin, Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

