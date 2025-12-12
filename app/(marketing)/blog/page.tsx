"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

const blogPosts = [
  {
    date: "2024-12-15",
    author: "Sarah Müller",
    readTime: "5 Min",
    title: "Wie Multi-Agent AI deine Sales-Recherche revolutioniert",
    description: "Erfahre, wie unser Multi-Agent-System die Recherche-Zeit um 95% reduziert und gleichzeitig die Qualität verbessert.",
    category: "AI & Automation",
  },
  {
    date: "2024-12-10",
    author: "Max Schmidt",
    readTime: "7 Min",
    title: "Predictive Lead Scoring: Die Zukunft des Sales",
    description: "Entdecke, wie Machine Learning dabei hilft, die besten Leads zu identifizieren und deine Conversion-Rate zu steigern.",
    category: "Sales",
  },
  {
    date: "2024-12-05",
    author: "Lisa Weber",
    readTime: "6 Min",
    title: "Call Coaching: Bessere Gespräche durch AI",
    description: "Wie Echtzeit-Call-Coaching deine Sales-Gespräche verbessert und deine Close-Rate erhöht.",
    category: "Features",
  },
  {
    date: "2024-11-28",
    author: "Tom Becker",
    readTime: "8 Min",
    title: "Pipeline Management: Von Chaos zu Klarheit",
    description: "Best Practices für effektives Pipeline-Management und wie IntroKI dabei hilft, den Überblick zu behalten.",
    category: "Best Practices",
  },
]

export default function BlogPage() {
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
              Engineering Blog
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Insights von unserem Engineering-Team. Erfahre mehr über unsere Technologie, Best Practices und die Zukunft von Sales-CRM.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-[#0B0C0E]/60 font-inter">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-inter mb-4">
                  {post.category}
                </div>
                <h2 className="text-2xl font-jakarta font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#0B0C0E]/70 font-inter mb-6 leading-relaxed">
                  {post.description}
                </p>
                <Button variant="ghost" className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] p-0 h-auto">
                  Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
