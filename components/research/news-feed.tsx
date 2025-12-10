"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, ExternalLink } from "lucide-react"

interface NewsFeedProps {
  company: string
}

export function NewsFeed({ company }: NewsFeedProps) {
  const news = [
    {
      id: "1",
      title: `${company} Raises $50M Series B Funding`,
      date: "2 weeks ago",
      source: "TechCrunch",
      url: "#",
    },
    {
      id: "2",
      title: `${company} Expands to European Markets`,
      date: "1 month ago",
      source: "Business Insider",
      url: "#",
    },
    {
      id: "3",
      title: `${company} Announces New Product Line`,
      date: "2 months ago",
      source: "Company Blog",
      url: "#",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
    >
      <h2 className="text-xl font-jakarta font-medium tracking-tight text-white mb-6">
        Recent News
      </h2>
      <div className="space-y-4">
        {news.map((item) => (
          <motion.a
            key={item.id}
            href={item.url}
            className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white font-inter font-medium mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-white/50 font-inter text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <span>{item.source}</span>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-white/50 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

