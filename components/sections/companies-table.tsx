"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowUpDown,
  MoreHorizontal,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  ChevronDown,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Company {
  id: string
  name: string
  domains: string[]
  associatedDeals: number
  icpFit: "Excellent" | "Medium" | "Good" | "Poor"
  arr?: number
  connectionStrength?: number
}

const mockCompanies: Company[] = [
  {
    id: "1",
    name: "Vercel",
    domains: ["vercel.com"],
    associatedDeals: 3,
    icpFit: "Excellent",
    arr: 50000,
    connectionStrength: 95,
  },
  {
    id: "2",
    name: "DigitalOcean",
    domains: ["digitalocean.com"],
    associatedDeals: 2,
    icpFit: "Medium",
    arr: 30000,
    connectionStrength: 72,
  },
  {
    id: "3",
    name: "GitHub",
    domains: ["github.com"],
    associatedDeals: 5,
    icpFit: "Good",
    arr: 75000,
    connectionStrength: 88,
  },
  {
    id: "4",
    name: "Stripe",
    domains: ["stripe.com"],
    associatedDeals: 1,
    icpFit: "Excellent",
    arr: 100000,
    connectionStrength: 92,
  },
  {
    id: "5",
    name: "Linear",
    domains: ["linear.app"],
    associatedDeals: 4,
    icpFit: "Good",
    arr: 45000,
    connectionStrength: 85,
  },
]

const getICPBadgeColor = (fit: Company["icpFit"]) => {
  switch (fit) {
    case "Excellent":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "Good":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Medium":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "Poor":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30"
  }
}

export function CompaniesTable() {
  const [companies, setCompanies] = React.useState<Company[]>(mockCompanies)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [sortField, setSortField] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selected)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelected(newSelected)
  }

  const toggleSelectAll = () => {
    if (selected.size === companies.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(companies.map((c) => c.id)))
    }
  }

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Table Header with Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-jakarta font-medium tracking-tight text-white">
            Companies
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <Search className="h-4 w-4 text-white/70" />
            </button>
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <Filter className="h-4 w-4 text-white/70" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
          >
            <Settings className="h-4 w-4 mr-2" />
            View settings
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ChevronDown className="h-4 w-4 mr-2" />
            Import / Export
          </Button>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="flex items-center gap-4 text-sm text-white/50 font-inter">
        <span>Sorted by</span>
        <button
          onClick={() => handleSort("name")}
          className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
        >
          Last email interaction
          <ArrowUpDown className="h-3 w-3" />
        </button>
        <button className="text-white/50 hover:text-white/70 transition-colors flex items-center gap-1">
          <Filter className="h-3 w-3" />
          Advanced filter 3 +
        </button>
      </div>

      {/* Table */}
      <div className="border border-white/10 rounded-lg overflow-hidden bg-[#15171B]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selected.size === companies.length}
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th
                  className="px-4 py-3 text-left text-sm font-inter text-white/70 cursor-pointer hover:text-white group"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center gap-2">
                    <span>Company</span>
                    <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  Domains
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  Associated deals
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  ICP Fit
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  AI
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {companies.map((company, index) => (
                  <motion.tr
                    key={company.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-4 py-3">
                      <Checkbox
                        checked={selected.has(company.id)}
                        onCheckedChange={() => toggleSelect(company.id)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-white/70">
                            {company.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-white font-inter font-medium">
                          {company.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {company.domains.map((domain, i) => (
                          <a
                            key={i}
                            href={`https://${domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm font-inter transition-colors"
                          >
                            {domain}
                          </a>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-white/70 font-inter text-sm">
                        {company.associatedDeals}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={`${getICPBadgeColor(company.icpFit)} border text-xs`}
                      >
                        {company.icpFit}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${company.connectionStrength || 0}%` }}
                                  transition={{
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                />
                              </div>
                              <span className="text-white/50 text-xs">
                                {company.connectionStrength}%
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                            <p className="text-xs">Connection Strength</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4 text-white/70" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

