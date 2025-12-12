"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, MessageSquare, Video, FileText, ArrowRight } from "lucide-react"

const helpCategories = [
  { icon: BookOpen, title: "Dokumentation", description: "Umfassende Anleitungen und Tutorials", link: "#" },
  { icon: Video, title: "Video-Tutorials", description: "Lerne IntroKI mit Video-Anleitungen", link: "#" },
  { icon: MessageSquare, title: "Community-Forum", description: "Stelle Fragen und erhalte Hilfe", link: "#" },
  { icon: FileText, title: "FAQ", description: "Häufig gestellte Fragen", link: "/faq" },
]

const popularArticles = [
  "Erste Schritte mit IntroKI",
  "Multi-Agent Research einrichten",
  "Pipeline Management Grundlagen",
  "Call Coaching aktivieren",
  "API-Dokumentation",
  "Integrationen einrichten",
]

export default function HelpPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

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
              Hilfe & Support
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Finde Antworten auf deine Fragen. Wir helfen dir dabei, das Beste aus IntroKI herauszuholen.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#0B0C0E]/40" />
                <input
                  type="text"
                  placeholder="Suche nach Hilfe..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-[#0B0C0E]/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0B0C0E]/20 font-inter"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {helpCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{category.title}</h3>
                      <p className="text-[#0B0C0E]/70 font-inter mb-4">{category.description}</p>
                      <Button variant="ghost" className="p-0 h-auto text-blue-600">
                        Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-jakarta font-semibold mb-8">Beliebte Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10 hover:bg-[#0B0C0E]/5 transition-colors cursor-pointer"
                >
                  <div className="font-inter text-[#0B0C0E]/80">{article}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
