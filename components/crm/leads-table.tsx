"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowUpDown,
  MoreHorizontal,
  Phone,
  Mail,
  Info,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react"
import { TableSkeleton } from "./table-skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Lead {
  id: string
  company: string
  name: string
  email: string
  source: "Organic" | "Campaign"
  status: "Pre-sale" | "Closed" | "Lost" | "Closing" | "New"
  size: number
  icpFit: "Excellent" | "Medium" | "Good" | "Poor"
  probability: "Low" | "Mid" | "High"
  lastAction: string
  interest: number[]
}

const mockLeads: Lead[] = [
  {
    id: "1",
    company: "Acme Corp",
    name: "John Doe",
    email: "john@acme.com",
    source: "Organic",
    status: "New",
    size: 50000,
    icpFit: "Excellent",
    probability: "High",
    lastAction: "2 days ago",
    interest: [20, 25, 30, 35, 40],
  },
  {
    id: "2",
    company: "TechStart",
    name: "Jane Smith",
    email: "jane@techstart.com",
    source: "Campaign",
    status: "Closing",
    size: 100000,
    icpFit: "Medium",
    probability: "Mid",
    lastAction: "1 week ago",
    interest: [10, 15, 20, 18, 22],
  },
  {
    id: "3",
    company: "Innovate Labs",
    name: "Mike Johnson",
    email: "mike@innovatelabs.com",
    source: "Organic",
    status: "Pre-sale",
    size: 250000,
    icpFit: "Excellent",
    probability: "High",
    lastAction: "3 days ago",
    interest: [30, 35, 40, 45, 50],
  },
]

type SortField = "company" | "status" | "size" | "lastAction"
type SortDirection = "asc" | "desc"

const columnDescriptions = {
  company: "Firmenname und Kontaktinformationen des Leads",
  source: "Herkunft des Leads (Organisch oder Marketing-Kampagne)",
  status: "Aktueller Status im Sales-Prozess",
  size: "Geschätzter Deal-Wert in Euro",
  icpFit: "KI-bewertete Übereinstimmung mit Ideal Customer Profile",
  probability: "Kaufwahrscheinlichkeit basierend auf ML-Algorithmus",
  interest: "Engagement-Trend über die letzten 5 Wochen",
  lastAction: "Zeitpunkt der letzten Interaktion mit dem Lead",
}

export function LeadsTable() {
  const [leads, setLeads] = React.useState<Lead[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [sortField, setSortField] = React.useState<SortField>("company")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc")
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null)

  React.useEffect(() => {
    setTimeout(() => {
      setLeads(mockLeads)
      setLoading(false)
    }, 1000)
  }, [])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedLeads = [...leads].sort((a, b) => {
    let aVal: any = a[sortField]
    let bVal: any = b[sortField]

    if (sortField === "size") {
      aVal = a.size
      bVal = b.size
    }

    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })

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
    if (selected.size === leads.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(leads.map((l) => l.id)))
    }
  }

  const getICPBadgeColor = (fit: string) => {
    switch (fit) {
      case "Excellent":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Good":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-red-500/20 text-red-400 border-red-500/30"
    }
  }

  const getProbabilityColor = (prob: string) => {
    switch (prob) {
      case "High":
        return "bg-green-500"
      case "Mid":
        return "bg-yellow-500"
      default:
        return "bg-red-500"
    }
  }

  if (loading) {
    return <TableSkeleton />
  }

  return (
    <div className="space-y-6">
      {/* Table Description */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3"
      >
        <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-white font-jakarta font-medium mb-1">
            Leads Übersicht
          </h3>
          <p className="text-white/70 font-inter text-sm">
            Verwalten Sie alle Ihre Leads an einem Ort. Sortieren Sie nach
            verschiedenen Kriterien, filtern Sie nach Status oder ICP-Fit und
            nutzen Sie Bulk-Actions für effiziente Bearbeitung. Die
            Sparkline-Grafik zeigt den Engagement-Trend über die letzten 5
            Wochen.
          </p>
        </div>
      </motion.div>

      {/* Bulk Actions Bar */}
      <AnimatePresence>
        {selected.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between"
          >
            <span className="text-white/70 font-inter text-sm">
              {selected.size} Lead{selected.size > 1 ? "s" : ""} ausgewählt
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Bulk Action
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <div className="border border-white/10 rounded-lg overflow-hidden bg-[#15171B]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selected.size === leads.length}
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th
                  className="px-4 py-3 text-left text-sm font-inter text-white/70 cursor-pointer hover:text-white group"
                  onClick={() => handleSort("company")}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <span>Company</span>
                          <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.company}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>Source</span>
                          <Info className="h-3 w-3 opacity-50" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.source}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th
                  className="px-4 py-3 text-left text-sm font-inter text-white/70 cursor-pointer hover:text-white group"
                  onClick={() => handleSort("status")}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>Status</span>
                          <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.status}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th
                  className="px-4 py-3 text-left text-sm font-inter text-white/70 cursor-pointer hover:text-white group"
                  onClick={() => handleSort("size")}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <span>Size</span>
                          <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.size}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>ICP Fit</span>
                          <Info className="h-3 w-3 opacity-50" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.icpFit}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>Probability</span>
                          <Info className="h-3 w-3 opacity-50" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">
                          {columnDescriptions.probability}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>Interest</span>
                          <Info className="h-3 w-3 opacity-50" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.interest}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th
                  className="px-4 py-3 text-left text-sm font-inter text-white/70 cursor-pointer hover:text-white group"
                  onClick={() => handleSort("lastAction")}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>Last Action</span>
                          <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#15171B] border-white/10 text-white">
                        <p className="text-xs">{columnDescriptions.lastAction}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
                <th className="px-4 py-3 text-left text-sm font-inter text-white/70">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {sortedLeads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    onMouseEnter={() => setHoveredRow(lead.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-4 py-3">
                      <Checkbox
                        checked={selected.has(lead.id)}
                        onCheckedChange={() => toggleSelect(lead.id)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <div className="text-white font-inter font-medium">
                          {lead.company}
                        </div>
                        <div className="text-white/50 font-inter text-xs">
                          {lead.name} · {lead.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className="bg-white/5 text-white/70 border-white/10"
                      >
                        {lead.source}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className="bg-white/5 text-white/70 border-white/10"
                      >
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-white font-inter">
                      €{lead.size.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={getICPBadgeColor(lead.icpFit)}
                      >
                        {lead.icpFit}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className={`h-2 w-16 rounded-full ${getProbabilityColor(
                            lead.probability
                          )}`}
                          initial={{ width: 0 }}
                          animate={{ width: 64 }}
                          transition={{
                            delay: index * 0.1 + 0.3,
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        />
                        <span className="text-white/70 font-inter text-xs">
                          {lead.probability}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-8 w-24 flex items-end gap-0.5">
                        {lead.interest.map((val, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-blue-500/50 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            transition={{
                              delay: index * 0.1 + i * 0.05 + 0.4,
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white/70 font-inter text-sm">
                      {lead.lastAction}
                    </td>
                    <td className="px-4 py-3">
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredRow === lead.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </motion.div>
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
