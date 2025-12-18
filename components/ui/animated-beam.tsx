"use client";

import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { createOrthogonalPath, ENTERPRISE_LINE_STYLE, DATA_FLOW_LINE_STYLE } from "@/lib/orthogonal-connector";
import { ENTERPRISE_SPRING } from "@/lib/animations";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  beamColor?: string;
  beamWidth?: number;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  cornerRadius?: number;
}

/**
 * AnimatedBeam - Enterprise "Structured Magic" Version
 * Uses orthogonal paths (horizontal/vertical only) with rounded corners
 * Track: Gray-200, 1px (static background line)
 * Beam: Blue accent, 1.5px (animated data flow)
 */
export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  reverse = false,
  pathColor = ENTERPRISE_LINE_STYLE.stroke, // #E5E7EB (Gray-200)
  pathWidth = ENTERPRISE_LINE_STYLE.strokeWidth, // 1px
  pathOpacity = 1,
  beamColor = DATA_FLOW_LINE_STYLE.stroke, // #2563EB (Blue)
  beamWidth = 1.5, // Slightly thicker to pop
  duration = 3,
  delay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  cornerRadius = 8,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [pathLength, setPathLength] = useState(0);

  // Gradient coordinates for animated beam
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        // Calculate start and end points with offsets
        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        // Create orthogonal path (replaces bezier curve)
        const { path, totalLength } = createOrthogonalPath(
          startX,
          startY,
          endX,
          endY,
          cornerRadius
        );
        
        setPathD(path);
        setPathLength(totalLength);
      } else {
        // Clear path if refs are not ready
        setPathD("");
        setPathLength(0);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    // Observe container
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Observe from element
    if (fromRef.current) {
      resizeObserver.observe(fromRef.current);
    }

    // Observe to element
    if (toRef.current) {
      resizeObserver.observe(toRef.current);
    }

    // Initial update
    updatePath();

    // Also update on interval to catch any missed updates
    const interval = setInterval(updatePath, 100);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    cornerRadius,
  ]);

  if (!pathD || svgDimensions.width === 0 || svgDimensions.height === 0) {
    return null;
  }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu z-50",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Track: Static background line (Gray-200, 1px) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Beam: Animated data flow line (Blue accent, 1.5px) */}
      <path
        d={pathD}
        strokeWidth={beamWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <defs>
        {/* Animated gradient for the beam */}
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: "linear", // Smooth, linear flow for data movement
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={beamColor} stopOpacity="0" />
          <stop stopColor={beamColor} stopOpacity="1" />
          <stop offset="50%" stopColor={beamColor} stopOpacity="1" />
          <stop
            offset="100%"
            stopColor={beamColor}
            stopOpacity="0"
          />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
