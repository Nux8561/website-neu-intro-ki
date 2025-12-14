"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBeamDividerProps {
  color?: "green" | "blue" | "purple";
  className?: string;
}

export function TechBeamDivider({ 
  color = "green", 
  className 
}: TechBeamDividerProps) {
  const [beamPosition, setBeamPosition] = useState(0);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const beamColorClass = {
    green: "bg-green-500 shadow-green-500/50",
    blue: "bg-blue-500 shadow-blue-500/50",
    purple: "bg-purple-500 shadow-purple-500/50",
  }[color];

  const nodeActiveColorClass = {
    green: "border-green-500 bg-green-100",
    blue: "border-blue-500 bg-blue-100",
    purple: "border-purple-500 bg-purple-100",
  }[color];

  const beamGlowClass = {
    green: "shadow-green-500/30",
    blue: "shadow-blue-500/30",
    purple: "shadow-purple-500/30",
  }[color];

  useEffect(() => {
    const getContainerWidth = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth > 768 ? 800 : Math.min(window.innerWidth - 100, 600);
      }
      return 800;
    };

    const interval = setInterval(() => {
      setBeamPosition(0); // Reset beam
      setActiveNode(null);

      // Animate beam across the line
      const beamAnimationDuration = 2500; // 2.5 seconds
      const nodeCount = 6; // Reduced for better visibility
      const containerWidth = getContainerWidth();
      const nodeSpacing = containerWidth / (nodeCount + 1);

      // Simulate beam movement and node activation
      let currentBeamX = 0;
      const beamMoveInterval = setInterval(() => {
        currentBeamX += (containerWidth / (beamAnimationDuration / 16)); // Smooth movement
        setBeamPosition(currentBeamX);

        // Check for node activation
        for (let i = 0; i < nodeCount; i++) {
          const nodeX = (i + 1) * nodeSpacing;
          if (currentBeamX >= nodeX - 20 && currentBeamX <= nodeX + 20) {
            setActiveNode(i);
            break;
          } else if (currentBeamX > nodeX + 20) {
            setActiveNode(null);
          }
        }

        if (currentBeamX > containerWidth) {
          clearInterval(beamMoveInterval);
          setActiveNode(null);
        }
      }, 16); // ~60fps (16ms per frame)

      // Reset after animation + pause
      setTimeout(() => {
        clearInterval(beamMoveInterval);
        setBeamPosition(0);
        setActiveNode(null);
      }, beamAnimationDuration + 1500); // 1.5 second pause

    }, 4000); // Loop every 4 seconds

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className={cn("relative w-full h-16 flex items-center justify-center overflow-hidden bg-white", className)}>
      {/* Horizontal Line */}
      <div className="absolute w-full h-[1px] bg-gray-200" />

      {/* Nodes - Responsive positioning */}
      {[...Array(6)].map((_, i) => {
        const getNodePosition = () => {
          if (typeof window !== 'undefined') {
            const containerWidth = window.innerWidth > 768 ? 800 : Math.min(window.innerWidth - 100, 600);
            const nodeSpacing = containerWidth / 7; // 6 nodes + 1 spacing
            return (i + 1) * nodeSpacing;
          }
          return (i + 1) * (800 / 7);
        };

        return (
          <motion.div
            key={i}
            className={cn(
              "absolute w-3 h-3 border-2 border-gray-300 rounded-full bg-white transition-all duration-150 ease-out z-10",
              activeNode === i && nodeActiveColorClass
            )}
            style={{ 
              left: `calc(${((i + 1) / 7) * 100}% - 6px)`, // Center nodes evenly
            }}
            animate={{ 
              scale: activeNode === i ? 1.8 : 1,
              borderWidth: activeNode === i ? 3 : 2,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        );
      })}

      {/* Animated Beam */}
      <motion.div
        className={cn(
          "absolute h-1.5 w-16 rounded-full blur-[2px] z-20",
          beamColorClass,
          beamGlowClass
        )}
        style={{ 
          left: `${beamPosition - 32}px`, // Adjust for beam width
          boxShadow: `0 0 12px currentColor, 0 0 24px currentColor`,
          filter: 'brightness(1.2)',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: beamPosition > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
