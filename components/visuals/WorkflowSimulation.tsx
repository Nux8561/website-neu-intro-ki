"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, GitBranch, Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Configuration ---
const COLORS = {
  active: "#22c55e", // Green
  inactive: "#e2e4e7", // Gray Border
  bg: "#fafafb",
};

export const WorkflowSimulation = () => {
  // Wir nutzen einen Timer, um die Phasen zu steuern
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const loop = () => {
        // Phase 0: Reset
        setPhase(0);
        setTimeout(() => setPhase(1), 500); // Start Linie 1
        setTimeout(() => setPhase(2), 1500); // Box 1 Umrandung
        setTimeout(() => setPhase(3), 2500); // Linie 2
        setTimeout(() => setPhase(4), 3500); // Box 2 Umrandung
        setTimeout(() => setPhase(5), 4500); // Linie 3
        setTimeout(() => setPhase(6), 5500); // Box 3 Umrandung
        setTimeout(() => setPhase(0), 8000); // Reset nach Pause
    };
    
    loop();
    const interval = setInterval(loop, 8000);
    return () => clearInterval(interval);
  }, []);

  // Helfer für die Animationen
  const lineTransition = { duration: 1, ease: "easeInOut" };
  const borderTransition = { duration: 1, ease: "linear" };

  return (
    <div className="relative w-full h-full bg-[#FAFAFB] overflow-hidden flex items-center justify-center select-none">
      {/* 1. Hintergrund Pattern (Füllt alles aus) */}
      <div 
        className="absolute inset-0 opacity-[0.6]"
        style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "20px 20px"
        }}
      />

      {/* 2. SVG Container (Skaliert, passt immer) */}
      <div className="relative w-[300px] h-[380px] scale-[0.85] sm:scale-100">
        <svg className="w-full h-full overflow-visible">
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* --- STATIC GRAY LAYER (Die "Spur") --- */}
            {/* Line 1 */}
            <path d="M 150 0 L 150 40" stroke={COLORS.inactive} strokeWidth="2" />

            {/* Box 1 */}
            <rect x="50" y="40" width="200" height="60" rx="8" stroke={COLORS.inactive} strokeWidth="2" fill="white" />

            {/* Line 2 */}
            <path d="M 150 100 L 150 140" stroke={COLORS.inactive} strokeWidth="2" />

            {/* Box 2 */}
            <rect x="50" y="140" width="200" height="60" rx="8" stroke={COLORS.inactive} strokeWidth="2" fill="white" />

            {/* Line 3 */}
            <path d="M 150 200 L 150 240" stroke={COLORS.inactive} strokeWidth="2" />

            {/* Box 3 */}
            <rect x="50" y="240" width="200" height="60" rx="8" stroke={COLORS.inactive} strokeWidth="2" fill="white" />

            {/* --- ANIMATED GREEN LAYER (Die "Schlange") --- */}
            
            {/* 1. Linie zu Box 1 */}
            <motion.path 
                d="M 150 0 L 150 40" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                transition={lineTransition}
            />

            {/* 2. Umrandung Box 1 (Trigger) */}
            <motion.rect 
                x="50" y="40" width="200" height="60" rx="8" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 2 ? 1 : 0 }}
                transition={borderTransition}
            />

            {/* 3. Linie zu Box 2 */}
            <motion.path 
                d="M 150 100 L 150 140" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 3 ? 1 : 0 }}
                transition={lineTransition}
            />

            {/* 4. Umrandung Box 2 (Filter) */}
            <motion.rect 
                x="50" y="140" width="200" height="60" rx="8" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 4 ? 1 : 0 }}
                transition={borderTransition}
            />

            {/* 5. Linie zu Box 3 */}
            <motion.path 
                d="M 150 200 L 150 240" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 5 ? 1 : 0 }}
                transition={lineTransition}
            />

            {/* 6. Umrandung Box 3 (Action) */}
            <motion.rect 
                x="50" y="240" width="200" height="60" rx="8" 
                stroke={COLORS.active} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 6 ? 1 : 0 }}
                transition={borderTransition}
            />

            {/* --- CONTENT LAYER (HTML über SVG) --- */}
            <foreignObject x="50" y="40" width="200" height="60">
                <div className="flex items-center h-full px-4 gap-3">
                    <div className={cn("p-1.5 rounded-md transition-colors duration-500", phase >= 2 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400")}>
                        <User size={16} />
                    </div>
                    <span className={cn("text-sm font-medium transition-colors duration-500", phase >= 2 ? "text-gray-900" : "text-gray-400")}>New Lead</span>
                    {phase >= 2 && <motion.div initial={{scale:0}} animate={{scale:1}} className="ml-auto"><CheckCircle2 size={14} className="text-green-500" /></motion.div>}
                </div>
            </foreignObject>

            <foreignObject x="50" y="140" width="200" height="60">
                <div className="flex items-center h-full px-4 gap-3">
                    <div className={cn("p-1.5 rounded-md transition-colors duration-500", phase >= 4 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400")}>
                        <GitBranch size={16} />
                    </div>
                    <span className={cn("text-sm font-medium transition-colors duration-500", phase >= 4 ? "text-gray-900" : "text-gray-400")}>Filter: Tech?</span>
                    {phase >= 4 && <motion.div initial={{scale:0}} animate={{scale:1}} className="ml-auto"><CheckCircle2 size={14} className="text-green-500" /></motion.div>}
                </div>
            </foreignObject>

            <foreignObject x="50" y="240" width="200" height="60">
                <div className="flex items-center h-full px-4 gap-3">
                    <div className={cn("p-1.5 rounded-md transition-colors duration-500", phase >= 6 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400")}>
                        <Mail size={16} />
                    </div>
                    <span className={cn("text-sm font-medium transition-colors duration-500", phase >= 6 ? "text-gray-900" : "text-gray-400")}>Send Email</span>
                    {phase >= 6 && <motion.div initial={{scale:0}} animate={{scale:1}} className="ml-auto"><CheckCircle2 size={14} className="text-green-500" /></motion.div>}
                </div>
            </foreignObject>

        </svg>
      </div>
    </div>
  );
};
