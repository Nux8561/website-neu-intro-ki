"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
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
  Building2,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// Types
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

type SortField = "company" | "status" | "size" | "lastAction"
type SortDirection = "asc" | "desc"

// Animation variants
const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
}

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
      delay: index * 0.03,
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
}

// Skeleton Components
function SkeletonCell({ width = "w-24" }: { width?: string }) {
  return (
    <div className={cn("h-4 rounded-md bg-white/5 animate-pulse", width)} />
  )
}

function SkeletonRow() {
  return (
    <tr className="border-b border-border-subtle">
      <td className="px-4 py-4">
        <div className="h-4 w-4 rounded bg-white/5 animate-pulse" />
      </td>
      <td className="px-4 py-4">
        <div className="space-y-2">
          <SkeletonCell width="w-32" />
          <SkeletonCell width="w-48" />
        </div>
      </td>
      <td className="px-4 py-4"><SkeletonCell width="w-20" /></td>
      <td className="px-4 py-4"><SkeletonCell width="w-16" /></td>
      <td className="px-4 py-4"><SkeletonCell width="w-24" /></td>
      <td className="px-4 py-4"><SkeletonCell width="w-20" /></td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <SkeletonCell width="w-16" />
          <SkeletonCell width="w-8" />
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="h-8 w-24 flex items-end gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex-1 h-4 bg-white/5 rounded-t animate-pulse" />
          ))}
        </div>
      </td>
      <td className="px-4 py-4"><SkeletonCell width="w-20" /></td>
      <td className="px-4 py-4"><SkeletonCell width="w-24" /></td>
    </tr>
  )
}

// Sparkline Component
function Sparkline({ data, index }: { data: number[]; index: number }) {
  const max = Math.max(...data)
  
  return (
    <div className="h-8 w-24 flex items-end gap-0.5">
      {data.map((val, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-blue-500/50 rounded-t hover:bg-blue-500/70 transition-colors"
          initial={{ height: 0 }}
          animate={{ height: `${(val / max) * 100}%` }}
          transition={{
            ...springTransition,
            delay: index * 0.05 + i * 0.03,
          }}
        />
      ))}
    </div>
  )
}

// Probability Bar Component
function ProbabilityBar({ 
  probability, 
  index 
}: { 
  probability: "Low" | "Mid" | "High"
  index: number 
}) {
  const colors = {
    High: "bg-green-500",
    Mid: "bg-yellow-500",
    Low: "bg-red-500",
  }
  
  const widths = {
    High: "100%",
    Mid: "66%",
    Low: "33%",
  }

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-16 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", colors[probability])}
          initial={{ width: 0 }}
          animate={{ width: widths[probability] }}
          transition={{
            ...springTransition,
            delay: index * 0.05 + 0.2,
          }}
        />
      </div>
      <span className="text-text-muted font-inter text-xs min-w-[32px]">
        {probability}
      </span>
    </div>
  )
}

// Column Header Component
function ColumnHeader({
  children,
  sortable,
  sorted,
  direction,
  onClick,
  tooltip,
  icon: Icon,
}: {
  children: React.ReactNode
  sortable?: boolean
  sorted?: boolean
  direction?: SortDirection
  onClick?: () => void
  tooltip?: string
  icon?: React.ComponentType<{ className?: string }>
}) {
  const content = (
    <div
      className={cn(
        "flex items-center gap-2 text-sm font-inter text-text-muted",
        sortable && "cursor-pointer hover:text-text-primary group"
      )}
      onClick={onClick}
    >
      {Icon && (
        <Icon className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      )}
      <span>{children}</span>
      {sortable && (
        <ArrowUpDown
          className={cn(
            "h-4 w-4 transition-all",
            sorted
              ? "opacity-100 text-text-primary"
              : "opacity-50 group-hover:opacity-100"
          )}
        />
      )}
      {tooltip && !sortable && (
        <Info className="h-3 w-3 opacity-50" />
      )}
    </div>
  )

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent className="bg-surface border-border-subtle text-text-primary max-w-xs">
            <p className="text-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return content
}

// Static mock data (outside component to avoid recreating on each render)
const MOCK_LEADS: Lead[] = [
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
  {
    id: "4",
    company: "DataFlow Inc",
    name: "Sarah Wilson",
    email: "sarah@dataflow.io",
    source: "Campaign",
    status: "Closed",
    size: 75000,
    icpFit: "Good",
    probability: "High",
    lastAction: "1 day ago",
    interest: [40, 42, 45, 48, 52],
  },
  {
    id: "5",
    company: "CloudNine",
    name: "Alex Chen",
    email: "alex@cloudnine.com",
    source: "Organic",
    status: "Lost",
    size: 30000,
    icpFit: "Poor",
    probability: "Low",
    lastAction: "2 weeks ago",
    interest: [25, 20, 15, 12, 10],
  },
]

// Main Component
export function LeadsTable() {
  const [leads, setLeads] = React.useState<Lead[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [sortField, setSortField] = React.useState<SortField>("company")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc")
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 10

  const tableRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(tableRef, { once: true, margin: "-100px" })

  // Load data
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLeads(MOCK_LEADS)
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Sort handler
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Filter and sort data
  const filteredLeads = React.useMemo(() => {
    let result = [...leads]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (lead) =>
          lead.company.toLowerCase().includes(query) ||
          lead.name.toLowerCase().includes(query) ||
          lead.email.toLowerCase().includes(query)
      )
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortField]
      const bVal = b[sortField]
      const modifier = sortDirection === "asc" ? 1 : -1
      return aVal > bVal ? modifier : -modifier
    })

    return result
  }, [leads, searchQuery, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage)
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Selection handlers
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
    if (selected.size === paginatedLeads.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(paginatedLeads.map((l) => l.id)))
    }
  }

  // Badge colors
  const getICPBadgeColor = (fit: string) => {
    const colors: Record<string, string> = {
      Excellent: "bg-green-500/20 text-green-400 border-green-500/30",
      Good: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Poor: "bg-red-500/20 text-red-400 border-red-500/30",
    }
    return colors[fit] || colors.Poor
  }

  const getStatusBadgeColor = (status: string) => {
    const colors: Record<string, string> = {
      New: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Pre-sale": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Closing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Closed: "bg-green-500/20 text-green-400 border-green-500/30",
      Lost: "bg-red-500/20 text-red-400 border-red-500/30",
    }
    return colors[status] || "bg-white/5 text-text-muted border-border-subtle"
  }

  // Column descriptions
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

  return (
    <div ref={tableRef} className="space-y-6">
      {/* Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={springTransition}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            placeholder="Leads durchsuchen..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border-subtle rounded-xl text-text-primary placeholder:text-text-muted text-sm font-inter focus:outline-none focus:border-border-active focus:ring-2 focus:ring-white/5 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border-subtle text-text-muted hover:text-text-primary"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border-subtle text-text-muted hover:text-text-primary"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border-subtle text-text-muted hover:text-text-primary"
            onClick={() => {
              setLoading(true)
              setTimeout(() => setLoading(false), 800)
            }}
          >
            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
          </Button>
        </div>
      </motion.div>

      {/* Bulk Actions Bar */}
      <AnimatePresence>
        {selected.size > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-center justify-between"
          >
            <span className="text-text-secondary font-inter text-sm">
              {selected.size} Lead{selected.size > 1 ? "s" : ""} ausgewählt
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Bulk Email
              </Button>
              <Button variant="outline" size="sm">
                Status ändern
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelected(new Set())}
              >
                Abbrechen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ ...springTransition, delay: 0.1 }}
        className="border border-border-subtle rounded-2xl overflow-hidden bg-surface"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle bg-white/[0.02]">
                <th className="px-4 py-4 text-left w-12">
                  <Checkbox
                    checked={
                      paginatedLeads.length > 0 &&
                      selected.size === paginatedLeads.length
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader
                    sortable
                    sorted={sortField === "company"}
                    direction={sortDirection}
                    onClick={() => handleSort("company")}
                    tooltip={columnDescriptions.company}
                    icon={Building2}
                  >
                    Company
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader tooltip={columnDescriptions.source}>
                    Source
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader
                    sortable
                    sorted={sortField === "status"}
                    direction={sortDirection}
                    onClick={() => handleSort("status")}
                    tooltip={columnDescriptions.status}
                  >
                    Status
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader
                    sortable
                    sorted={sortField === "size"}
                    direction={sortDirection}
                    onClick={() => handleSort("size")}
                    tooltip={columnDescriptions.size}
                    icon={TrendingUp}
                  >
                    Size
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader tooltip={columnDescriptions.icpFit}>
                    ICP Fit
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader tooltip={columnDescriptions.probability}>
                    Probability
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader tooltip={columnDescriptions.interest}>
                    Interest
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <ColumnHeader
                    sortable
                    sorted={sortField === "lastAction"}
                    direction={sortDirection}
                    onClick={() => handleSort("lastAction")}
                    tooltip={columnDescriptions.lastAction}
                  >
                    Last Action
                  </ColumnHeader>
                </th>
                <th className="px-4 py-4 text-left">
                  <span className="text-sm font-inter text-text-muted">
                    Actions
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Skeleton rows
                Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonRow key={i} />
                ))
              ) : paginatedLeads.length === 0 ? (
                // Empty state
                <tr>
                  <td colSpan={10} className="px-4 py-16 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Building2 className="h-12 w-12 text-text-muted opacity-50" />
                      <p className="text-text-secondary font-inter">
                        Keine Leads gefunden
                      </p>
                      <p className="text-text-muted text-sm font-inter">
                        Passe deine Suchkriterien an
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                // Data rows
                <AnimatePresence mode="popLayout">
                  {paginatedLeads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      custom={index}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className={cn(
                        "border-b border-border-subtle transition-colors",
                        "hover:bg-white/[0.02]",
                        selected.has(lead.id) && "bg-blue-500/5"
                      )}
                      onMouseEnter={() => setHoveredRow(lead.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td className="px-4 py-4">
                        <Checkbox
                          checked={selected.has(lead.id)}
                          onCheckedChange={() => toggleSelect(lead.id)}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <div className="text-text-primary font-inter font-medium">
                            {lead.company}
                          </div>
                          <div className="text-text-muted font-inter text-xs">
                            {lead.name} · {lead.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Badge
                          variant="outline"
                          className="bg-white/5 text-text-secondary border-border-subtle"
                        >
                          {lead.source}
                        </Badge>
                      </td>
                      <td className="px-4 py-4">
                        <Badge
                          variant="outline"
                          className={getStatusBadgeColor(lead.status)}
                        >
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-4 text-text-primary font-inter font-medium">
                        €{lead.size.toLocaleString("de-DE")}
                      </td>
                      <td className="px-4 py-4">
                        <Badge
                          variant="outline"
                          className={getICPBadgeColor(lead.icpFit)}
                        >
                          {lead.icpFit}
                        </Badge>
                      </td>
                      <td className="px-4 py-4">
                        <ProbabilityBar
                          probability={lead.probability}
                          index={index}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <Sparkline data={lead.interest} index={index} />
                      </td>
                      <td className="px-4 py-4 text-text-muted font-inter text-sm">
                        {lead.lastAction}
                      </td>
                      <td className="px-4 py-4">
                        <motion.div
                          className="flex items-center gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredRow === lead.id ? 1 : 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-text-muted hover:text-text-primary hover:bg-white/5"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-text-muted hover:text-text-primary hover:bg-white/5"
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-text-muted hover:text-text-primary hover:bg-white/5"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!loading && filteredLeads.length > 0 && (
          <div className="flex items-center justify-between px-4 py-4 border-t border-border-subtle bg-white/[0.01]">
            <p className="text-sm text-text-muted font-inter">
              Zeige {(currentPage - 1) * itemsPerPage + 1} bis{" "}
              {Math.min(currentPage * itemsPerPage, filteredLeads.length)} von{" "}
              {filteredLeads.length} Leads
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="border-border-subtle"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "w-8 h-8 p-0",
                    currentPage === i + 1
                      ? "bg-text-primary text-background"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="border-border-subtle"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
