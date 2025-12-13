"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Smartphone, Mail, Globe } from "lucide-react"

const downloads = [
  { icon: Smartphone, title: "iOS App", description: "IntroKI für iPhone und iPad", link: "/ios-app" },
  { icon: Smartphone, title: "Android App", description: "IntroKI für Android-Geräte", link: "/android-app" },
  { icon: Mail, title: "Gmail Extension", description: "IntroKI direkt in Gmail", link: "/gmail-extension" },
  { icon: Globe, title: "Browser Extension", description: "IntroKI für Chrome, Firefox und Safari", link: "#" },
]

export default function DownloadsPage() {
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
              Downloads
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Lade IntroKI-Apps und Ressourcen herunter. Verfügbar für alle Plattformen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloads.map((download, index) => {
              const Icon = download.icon
              return (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{download.title}</h3>
                      <p className="text-text-secondary font-inter">{download.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-border-active">
                    <Download className="mr-2 h-4 w-4" />
                    Herunterladen
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
