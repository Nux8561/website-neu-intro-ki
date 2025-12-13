"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Data source configuration
const dataSources = [
  { 
    id: "excel", 
    name: "Excel", 
    color: "#217346",
    bgColor: "#E8F5E9",
    records: 2847,
    label: "Leads"
  },
  { 
    id: "csv", 
    name: "CSV Import", 
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    records: 1523,
    label: "Kontakte"
  },
  { 
    id: "hubspot", 
    name: "HubSpot", 
    color: "#FF7A59",
    bgColor: "#FFF4F1",
    records: 4129,
    label: "Deals"
  },
  { 
    id: "salesforce", 
    name: "Salesforce", 
    color: "#00A1E0",
    bgColor: "#E6F7FF",
    records: 3891,
    label: "Accounts"
  },
]

// Smooth spring config
const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 18
}

// Animated counter component
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => 
    Math.round(latest).toLocaleString('de-DE')
  )
  const [displayValue, setDisplayValue] = React.useState("0")
  
  React.useEffect(() => {
    const controls = animate(count, value, { 
      duration,
      ease: "easeOut"
    })
    
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v))
    
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value, count, rounded, duration])
  
  return <span>{displayValue}</span>
}

// Excel Logo
function ExcelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M41 8H28V40H41C42.1 40 43 39.1 43 38V10C43 8.9 42.1 8 41 8Z" fill="#4CAF50"/>
      <path d="M28 8H7C5.9 8 5 8.9 5 10V38C5 39.1 5.9 40 7 40H28V8Z" fill="#2E7D32"/>
      <path d="M13 16L18 24L13 32H17L20 27L23 32H27L22 24L27 16H23L20 21L17 16H13Z" fill="white"/>
      <path d="M31 16H39V20H31V16Z" fill="#E8F5E9"/>
      <path d="M31 22H39V26H31V22Z" fill="#E8F5E9"/>
      <path d="M31 28H39V32H31V28Z" fill="#E8F5E9"/>
    </svg>
  )
}

// CSV Icon
function CSVIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M12 6C10.9 6 10 6.9 10 8V40C10 41.1 10.9 42 12 42H36C37.1 42 38 41.1 38 40V16L28 6H12Z" fill="#E3F2FD"/>
      <path d="M28 6V14C28 15.1 28.9 16 30 16H38L28 6Z" fill="#90CAF9"/>
      <path d="M14 24H34V26H14V24Z" fill="#1976D2"/>
      <path d="M14 28H34V30H14V28Z" fill="#1976D2"/>
      <path d="M14 32H26V34H14V32Z" fill="#1976D2"/>
      <rect x="14" y="18" width="8" height="4" rx="1" fill="#1976D2"/>
    </svg>
  )
}

// HubSpot Logo
function HubSpotLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M35.5 20.1V14.7C36.9 14 37.8 12.6 37.8 11C37.8 8.5 35.8 6.5 33.3 6.5C30.8 6.5 28.8 8.5 28.8 11C28.8 12.6 29.7 14 31.1 14.7V20.1C29.2 20.5 27.5 21.4 26.1 22.6L14.4 13.6C14.5 13.3 14.5 13 14.5 12.7C14.5 10.2 12.5 8.2 10 8.2C7.5 8.2 5.5 10.2 5.5 12.7C5.5 15.2 7.5 17.2 10 17.2C10.7 17.2 11.4 17 12 16.7L23.4 25.5C22.3 27.3 21.7 29.4 21.7 31.6C21.7 38 26.9 43.2 33.3 43.2C39.7 43.2 44.9 38 44.9 31.6C44.9 25.6 40.3 20.6 34.5 20.1H35.5ZM33.3 38.2C29.7 38.2 26.7 35.2 26.7 31.6C26.7 28 29.7 25 33.3 25C36.9 25 39.9 28 39.9 31.6C39.9 35.2 36.9 38.2 33.3 38.2Z" fill="#FF7A59"/>
    </svg>
  )
}

// Salesforce Logo
function SalesforceLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M19.5 12C16.2 12 13.3 13.8 11.8 16.5C10.6 15.6 9.1 15 7.5 15C3.4 15 0 18.4 0 22.5C0 26.6 3.4 30 7.5 30C7.8 30 8.1 30 8.4 29.9C9.7 33.4 13.1 36 17 36C18.1 36 19.2 35.8 20.2 35.4C21.7 38.2 24.7 40 28 40C31.8 40 35 37.6 36.3 34.2C36.8 34.3 37.4 34.4 38 34.4C42.4 34.4 46 30.8 46 26.4C46 22 42.4 18.4 38 18.4C37.8 18.4 37.6 18.4 37.4 18.4C36.4 14.6 32.9 12 28.8 12C27 12 25.3 12.5 23.8 13.5C22.6 12.5 21.1 12 19.5 12Z" fill="#00A1E0"/>
    </svg>
  )
}

// Logo component - uses PNG image directly
function LogoWithFallback() {
  return (
    <img
      src="/images/app logo.png"
      alt="IntroKI Logo"
      className="w-24 h-24 object-contain"
      style={{ display: 'block' }}
    />
  )
}


// Source card component - larger and more prominent
function SourceCard({ 
  source, 
  index, 
  isActive,
  onClick 
}: { 
  source: typeof dataSources[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const Logo = {
    excel: ExcelLogo,
    csv: CSVIcon,
    hubspot: HubSpotLogo,
    salesforce: SalesforceLogo
  }[source.id] || CSVIcon

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center gap-4 px-4 py-4 rounded-2xl
        border-2 transition-all duration-300 cursor-pointer text-left w-full
        ${isActive 
          ? "border-gray-300 shadow-xl bg-white scale-[1.02]" 
          : "border-gray-100 bg-white/95 hover:bg-white hover:border-gray-200 hover:shadow-md"
        }
      `}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...smoothSpring, delay: index * 0.1 }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active indicator bar */}
      {isActive && (
        <motion.div
          className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
          style={{ backgroundColor: source.color }}
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
        style={{ backgroundColor: source.bgColor }}
      >
        <Logo className="w-7 h-7" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-gray-900">{source.name}</p>
        <p className="text-sm text-gray-500">
          <AnimatedCounter value={source.records} duration={1.5} /> {source.label}
        </p>
      </div>
      
      {/* Connection point */}
      <motion.div 
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ backgroundColor: isActive ? source.color : '#D1D5DB' }}
        animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
      />
    </motion.button>
  )
}

// Flow line that connects card to center logo container
function FlowPath({ 
  index, 
  isActive, 
  color,
  totalSources
}: { 
  index: number
  isActive: boolean
  color: string
  totalSources: number
}) {
  // Card positions (relative to SVG viewBox 0-1000)
  // Cards are 230px wide, positioned at left-0
  const cardRightX = 250 // Right edge of cards
  
  // Logo container: positioned with right-4, so it's near the right edge
  // In viewBox 1000, extend lines to ~900 to ensure they reach the logo container
  const logoBoxLeft = 900 // Extend well into the right side where logo container is
  const logoBoxCenterY = 160 // Center Y of logo area
  
  // Calculate Y position for each card
  const cardSpacing = 76
  const startY = 38 + index * cardSpacing
  
  // Create a smooth bezier curve that extends ALL THE WAY to logo container
  const controlPoint1X = cardRightX + 120
  const controlPoint2X = logoBoxLeft - 80
  
  // Path extends ALL THE WAY into the logo container area - NO GAP
  // Extend 30px INTO the container to ensure it visually connects
  const pathD = `M ${cardRightX} ${startY} C ${controlPoint1X} ${startY}, ${controlPoint2X} ${logoBoxCenterY}, ${logoBoxLeft + 30} ${logoBoxCenterY}`
  
  return (
    <>
      {/* Background line - always visible */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: index * 0.12, ease: "easeOut" }}
      />
      
      {/* Active colored line with gradient */}
      {isActive && (
        <>
          <defs>
            <linearGradient id={`flowGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path
            d={pathD}
            fill="none"
            stroke={`url(#flowGrad-${index})`}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Animated dot traveling along the path */}
          <motion.circle
            r="6"
            fill={color}
            style={{ filter: `drop-shadow(0 0 8px ${color})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={pathD}
            />
          </motion.circle>
          
          {/* Second dot for more flow effect */}
          <motion.circle
            r="4"
            fill={color}
            opacity={0.6}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={pathD}
              begin="0.5s"
            />
          </motion.circle>
        </>
      )}
    </>
  )
}

// Central hub with logo and counter
function CentralHub({ count }: { count: number }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...smoothSpring, delay: 0.4 }}
    >
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-gray-200"
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Middle ring with orbiting dots */}
      <motion.div
        className="absolute w-40 h-40 rounded-full border border-gray-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((angle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gray-200"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translateX(80px) translateY(-50%)`
            }}
          />
        ))}
      </motion.div>
      
      {/* Center card with logo - using PNG image with SVG fallback */}
      <motion.div 
        className="relative w-28 h-28 rounded-2xl bg-white shadow-2xl border border-gray-100 flex flex-col items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Use PNG logo if available, otherwise use SVG */}
        <LogoWithFallback />
      </motion.div>
      
      {/* Counter below */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-3xl font-bold text-gray-900 font-mono tracking-tight">
          <AnimatedCounter value={count} duration={2} />
        </div>
        <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-0.5">
          Datensätze
        </div>
      </motion.div>
    </motion.div>
  )
}

// Stats row
function StatsRow({ totalRecords }: { totalRecords: number }) {
  const stats = [
    { label: "Quellen", value: dataSources.length },
    { label: "Importiert", value: totalRecords },
    { label: "Duplikate entfernt", value: 847 },
    { label: "Angereichert", value: 98, suffix: "%" },
  ]
  
  return (
    <motion.div
      className="flex items-center justify-between gap-3 px-4 py-3 bg-white/80 backdrop-blur rounded-xl border border-gray-100"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...smoothSpring, delay: 0.7 }}
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center flex-1">
          <div className="text-base font-bold text-gray-900 font-mono">
            {stat.suffix ? (
              <><AnimatedCounter value={stat.value} duration={1.5} />{stat.suffix}</>
            ) : stat.label === "Importiert" ? (
              <><AnimatedCounter value={Math.round(stat.value / 1000)} duration={2} />k</>
            ) : (
              <AnimatedCounter value={stat.value} duration={1} />
            )}
          </div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  )
}

// Main component
export function DataFlowAnimation() {
  const [activeSource, setActiveSource] = React.useState<number>(0)
  const [totalRecords, setTotalRecords] = React.useState(12390)
  const [isMounted, setIsMounted] = React.useState(false)
  
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Auto-cycle through sources
  React.useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setActiveSource(prev => (prev + 1) % dataSources.length)
      setTotalRecords(prev => prev + Math.floor(Math.random() * 50) + 30)
    }, 2800)
    
    return () => clearInterval(interval)
  }, [isMounted])
  
  const handleSourceClick = (index: number) => {
    setActiveSource(index)
    setTotalRecords(prev => prev + Math.floor(Math.random() * 150) + 80)
  }

  return (
    <div className="relative w-full h-full min-h-[440px] bg-white rounded-xl overflow-hidden">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, #D1D5DB 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Header */}
        <motion.div 
          className="flex items-start justify-between mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothSpring}
        >
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-0.5">
              Dein intelligentes Daten-Gehirn
            </h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Alle deine Vertriebsdaten vereint – die KI lernt aus deiner gesamten Geschichte
            </p>
          </div>
          <motion.button
            className="px-3 py-1.5 rounded-full bg-gray-900 text-xs text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Importieren</span>
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </motion.div>
        
        {/* Main visualization area */}
        <div className="flex-1 relative min-h-[320px]">
          {/* SVG for flow lines - full width to ensure lines reach container */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            {dataSources.map((source, index) => (
              <FlowPath
                key={source.id}
                index={index}
                isActive={activeSource === index}
                color={source.color}
                totalSources={dataSources.length}
              />
            ))}
          </svg>
          
          {/* Cards on the left - WIDER */}
          <div className="absolute left-0 top-0 w-[230px] flex flex-col gap-2 z-10">
            {dataSources.map((source, index) => (
              <SourceCard
                key={source.id}
                source={source}
                index={index}
                isActive={activeSource === index}
                onClick={() => handleSourceClick(index)}
              />
            ))}
          </div>
          
          {/* Central hub on the right - positioned to match SVG coordinates */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <CentralHub count={totalRecords} />
          </div>
        </div>
        
        {/* Stats row */}
        <StatsRow totalRecords={totalRecords} />
      </div>
    </div>
  )
}
