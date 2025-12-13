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
  Settings,
  ChevronDown,
  Loader2,
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
  associatedDeals: string
  icpFit: "Excellent" | "Medium" | "Good" | "Low"
  estimatedARR?: string
  connectionStrength: "Very strong" | "Strong" | "Weak" | "Good"
  aiThinking?: {
    icpFit?: boolean
    arr?: boolean
  }
}

// Exakte IntroKI-Daten
const introkiCompanies: Company[] = [
  {
    id: "1",
    name: "Vercel",
    domains: ["vercel.com"],
    associatedDeals: "Vercel - Expansion",
    icpFit: "Excellent",
    estimatedARR: "$100M-$250M",
    connectionStrength: "Very strong",
    aiThinking: { icpFit: false, arr: false },
  },
  {
    id: "2",
    name: "DigitalOcean",
    domains: ["digitalocean.com"],
    associatedDeals: "DigitalOcean",
    icpFit: "Medium",
    estimatedARR: "$500M-$1B",
    connectionStrength: "Strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "3",
    name: "GitHub",
    domains: ["github.com"],
    associatedDeals: "GitHub - x20 Enterprise",
    icpFit: "Good",
    estimatedARR: "$1B-$10B",
    connectionStrength: "Very strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "4",
    name: "Stripe",
    domains: ["stripe.com"],
    associatedDeals: "Stripe",
    icpFit: "Good",
    estimatedARR: "$1B-$10B",
    connectionStrength: "Very strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "5",
    name: "Figma",
    domains: ["figma.com"],
    associatedDeals: "Figma",
    icpFit: "Good",
    estimatedARR: "$500M-$1B",
    connectionStrength: "Very strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "6",
    name: "Intercom",
    domains: ["intercom.com"],
    associatedDeals: "Intercom - Automations",
    icpFit: "Medium",
    estimatedARR: "$250M-$500M",
    connectionStrength: "Very strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "7",
    name: "Segment",
    domains: ["segment.com"],
    associatedDeals: "Segment - x30 Pro",
    icpFit: "Good",
    estimatedARR: "$250M-$500M",
    connectionStrength: "Strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "8",
    name: "Notion",
    domains: ["notion.so"],
    associatedDeals: "Notion - Exec, Notion - GTM",
    icpFit: "Medium",
    estimatedARR: "$100M-$250M",
    connectionStrength: "Strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "9",
    name: "Slack",
    domains: ["slack.com"],
    associatedDeals: "Slack - Expansion",
    icpFit: "Low",
    estimatedARR: "$1B-$10B",
    connectionStrength: "Weak",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "10",
    name: "Loom",
    domains: ["loom.com"],
    associatedDeals: "Loom",
    icpFit: "Medium",
    estimatedARR: "$50M-$100M",
    connectionStrength: "Good",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "11",
    name: "Retool",
    domains: ["retool.com"],
    associatedDeals: "Retool",
    icpFit: "Excellent",
    estimatedARR: "$50M-$100M",
    connectionStrength: "Good",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "12",
    name: "Customer.io",
    domains: ["customer.io"],
    associatedDeals: "Customer.io - x10 Plus",
    icpFit: "Excellent",
    estimatedARR: "$10-$50M",
    connectionStrength: "Strong",
    aiThinking: { icpFit: true, arr: true },
  },
  {
    id: "13",
    name: "Snowflake",
    domains: ["snowflake.com"],
    associatedDeals: "Snowflake - Expansion",
    icpFit: "Low",
    estimatedARR: "$1B-$10B",
    connectionStrength: "Strong",
    aiThinking: { icpFit: true, arr: true },
  },
]

const getICPBadgeColor = (fit: Company["icpFit"]) => {
  switch (fit) {
    case "Excellent":
      return "bg-purple-500/20 text-purple-600 border-purple-500/30"
    case "Good":
      return "bg-green-500/20 text-green-600 border-green-500/30"
    case "Medium":
      return "bg-blue-500/20 text-blue-600 border-blue-500/30"
    case "Low":
      return "bg-orange-500/20 text-orange-600 border-orange-500/30"
  }
}

const getConnectionStrengthColor = (strength: Company["connectionStrength"]) => {
  switch (strength) {
    case "Very strong":
      return "bg-green-500"
    case "Strong":
      return "bg-blue-500"
    case "Good":
      return "bg-yellow-500"
    case "Weak":
      return "bg-gray-400"
  }
}

export function CompaniesTable() {
  const [companies, setCompanies] = React.useState<Company[]>(introkiCompanies)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())

  // Simulate AI thinking completion after delay
  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    introkiCompanies.forEach((company, index) => {
      if (company.aiThinking?.icpFit) {
        const timer = setTimeout(() => {
          setCompanies(prev => prev.map(c => 
            c.id === company.id 
              ? { ...c, aiThinking: { ...c.aiThinking, icpFit: false } }
              : c
          ))
        }, 2000 + index * 200)
        timers.push(timer)
      }
      
      if (company.aiThinking?.arr) {
        const timer = setTimeout(() => {
          setCompanies(prev => prev.map(c => 
            c.id === company.id 
              ? { ...c, aiThinking: { ...c.aiThinking, arr: false } }
              : c
          ))
        }, 2500 + index * 200)
        timers.push(timer)
      }
    })

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  return (
    <div className="w-full space-y-4">
      {/* Table Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-jakarta font-medium tracking-tight text-text-primary">
              Companies
            </h2>
            <p className="text-sm text-text-muted font-inter mt-1">
              +1
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="p-2 rounded-lg border border-border-subtle bg-surface hover:bg-surface-elevated hover:border-border-active transition-all"
              aria-label="Search companies"
            >
              <Search className="h-4 w-4 text-text-secondary" />
            </button>
            <button 
              className="p-2 rounded-lg border border-border-subtle bg-surface hover:bg-surface-elevated hover:border-border-active transition-all"
              aria-label="Filter companies"
            >
              <Filter className="h-4 w-4 text-text-secondary" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-full"
          >
            <Settings className="h-4 w-4 mr-2" />
            View settings
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-full"
          >
            <ChevronDown className="h-4 w-4 mr-2" />
            Import / Export
          </Button>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="flex items-center gap-4 text-sm text-text-muted font-inter">
        <span>Sorted by</span>
        <button 
          className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
          aria-label="Sort by last email interaction"
        >
          Last email interaction
          <ArrowUpDown className="h-3 w-3" />
        </button>
        <button 
          className="text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
          aria-label="Advanced filter"
        >
          <Filter className="h-3 w-3" />
          Advanced filter 3
        </button>
        <span className="text-text-muted/50">1,439 count</span>
      </div>

      {/* Table */}
      <div className="border border-border-subtle rounded-xl overflow-hidden bg-background">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle bg-surface">
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selected.size === companies.length}
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  Domains
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  Associated deals
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  ICP Fit
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  AI
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  Estimated ARR
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
                  Connection strength
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-text-secondary">
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
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="border-b border-border-subtle hover:bg-surface hover:border-border-subtle transition-all group cursor-pointer"
                  >
                    <td className="px-4 py-3">
                      <Checkbox
                        checked={selected.has(company.id)}
                        onCheckedChange={() => toggleSelect(company.id)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center">
                          <span className="text-xs font-semibold text-text-secondary">
                            {company.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-text-primary font-inter font-medium">
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
                            className="text-blue-600 hover:text-blue-700 text-sm font-inter transition-colors"
                          >
                            {domain}
                          </a>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-text-secondary font-inter text-sm">
                        {company.associatedDeals}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {company.aiThinking?.icpFit ? (
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          <span className="font-inter">AI is thinking...</span>
                        </div>
                      ) : (
                        <Badge
                          variant="outline"
                          className={`${getICPBadgeColor(company.icpFit)} border text-xs`}
                        >
                          {company.icpFit}
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 rounded-full bg-surface-elevated overflow-hidden">
                                <motion.div
                                  className={`h-full ${getConnectionStrengthColor(company.connectionStrength)}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                />
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-background border-border-subtle text-text-primary">
                            <p className="text-xs">Connection Strength</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td className="px-4 py-3">
                      {company.aiThinking?.arr ? (
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          <span className="font-inter">AI is thinking...</span>
                        </div>
                      ) : (
                        <span className="text-text-secondary font-inter text-sm">
                          {company.estimatedARR}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-text-secondary font-inter text-sm capitalize">
                        {company.connectionStrength}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button 
                        className="p-2 rounded-lg border border-border-subtle bg-surface hover:bg-surface-elevated hover:border-border-active transition-all opacity-0 group-hover:opacity-100"
                        aria-label={`More actions for ${company.name}`}
                      >
                        <MoreHorizontal className="h-4 w-4 text-text-secondary" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add calculation buttons */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <button 
          className="hover:text-text-secondary transition-colors font-inter"
          aria-label="Add calculation"
        >
          Add calculation
        </button>
        <span className="text-text-muted/50">+</span>
        <button 
          className="hover:text-text-secondary transition-colors font-inter"
          aria-label="Add calculation"
        >
          Add calculation
        </button>
        <span className="text-text-muted/50">+</span>
        <button 
          className="hover:text-text-secondary transition-colors font-inter"
          aria-label="Add calculation"
        >
          Add calculation
        </button>
      </div>
    </div>
  )
}
