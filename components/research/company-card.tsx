"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Building2, Users, DollarSign, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CompanyCardProps {
  company: string
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-jakarta font-medium tracking-tight text-white mb-2">
            {company}
          </h2>
          <p className="text-white/70 font-inter">acme.com</p>
        </div>
        <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
          Tech Industry
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <DollarSign className="h-5 w-5 text-white/70" />
          </div>
          <div>
            <p className="text-white/50 font-inter text-sm">Revenue</p>
            <p className="text-white font-inter font-medium">$50M - $100M</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <Users className="h-5 w-5 text-white/70" />
          </div>
          <div>
            <p className="text-white/50 font-inter text-sm">Employees</p>
            <p className="text-white font-inter font-medium">500-1000</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <TrendingUp className="h-5 w-5 text-white/70" />
          </div>
          <div>
            <p className="text-white/50 font-inter text-sm">Growth</p>
            <p className="text-white font-inter font-medium">+25% YoY</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <h3 className="text-sm font-jakarta font-medium text-white mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"].map(
            (tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white/5 text-white/70 border-white/10"
              >
                {tech}
              </Badge>
            )
          )}
        </div>
      </div>
    </motion.div>
  )
}

