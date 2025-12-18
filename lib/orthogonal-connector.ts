/**
 * Orthogonal Connector Utilities
 * "Structured Magic" - Enterprise-style connection lines
 * 
 * Creates horizontal/vertical-only paths with rounded corners (elbow connectors)
 * Replaces organic bezier curves with precise, structured connections
 */

export interface OrthogonalPath {
  path: string
  totalLength: number
}

/**
 * Creates an orthogonal (horizontal/vertical only) path between two points
 * Uses "elbow" connectors with rounded corners for Enterprise aesthetics
 * 
 * @param startX - Starting X coordinate
 * @param startY - Starting Y coordinate
 * @param endX - Ending X coordinate
 * @param endY - Ending Y coordinate
 * @param cornerRadius - Radius for rounded corners (default: 8px)
 * @returns SVG path string and total length
 */
export function createOrthogonalPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  cornerRadius: number = 8
): OrthogonalPath {
  const dx = endX - startX
  const dy = endY - startY
  
  // Determine direction and create elbow connector
  const isHorizontalFirst = Math.abs(dx) > Math.abs(dy)
  
  let path: string
  let totalLength: number
  
  if (isHorizontalFirst) {
    // Horizontal first, then vertical
    const midX = endX
    const midY = startY
    
    // Calculate actual corner positions
    const cornerX = dx > 0 
      ? startX + Math.abs(dx) - cornerRadius
      : startX - Math.abs(dx) + cornerRadius
    const cornerY = dy > 0
      ? startY + cornerRadius
      : startY - cornerRadius
    
    // Create path with rounded corner
    path = `M ${startX} ${startY} L ${cornerX} ${startY} Q ${midX} ${startY} ${midX} ${cornerY} L ${midX} ${endY - (dy > 0 ? cornerRadius : -cornerRadius)} Q ${midX} ${endY} ${endX} ${endY}`
    
    // Approximate length
    totalLength = Math.abs(dx) + Math.abs(dy) + (Math.PI * cornerRadius)
  } else {
    // Vertical first, then horizontal
    const midX = startX
    const midY = endY
    
    // Calculate actual corner positions
    const cornerX = dx > 0
      ? startX + cornerRadius
      : startX - cornerRadius
    const cornerY = dy > 0
      ? startY + Math.abs(dy) - cornerRadius
      : startY - Math.abs(dy) + cornerRadius
    
    // Create path with rounded corner
    path = `M ${startX} ${startY} L ${startX} ${cornerY} Q ${startX} ${midY} ${cornerX} ${midY} L ${endX - (dx > 0 ? cornerRadius : -cornerRadius)} ${midY} Q ${endX} ${midY} ${endX} ${endY}`
    
    // Approximate length
    totalLength = Math.abs(dx) + Math.abs(dy) + (Math.PI * cornerRadius)
  }
  
  return { path, totalLength }
}

/**
 * Creates a simple orthogonal path (straight lines, no curves)
 * For maximum precision and minimal path complexity
 */
export function createSimpleOrthogonalPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
): OrthogonalPath {
  const dx = endX - startX
  const dy = endY - startY
  
  const isHorizontalFirst = Math.abs(dx) > Math.abs(dy)
  
  let path: string
  let totalLength: number
  
  if (isHorizontalFirst) {
    // Horizontal first, then vertical
    const midX = endX
    const midY = startY
    path = `M ${startX} ${startY} L ${midX} ${midY} L ${endX} ${endY}`
    totalLength = Math.abs(dx) + Math.abs(dy)
  } else {
    // Vertical first, then horizontal
    const midX = startX
    const midY = endY
    path = `M ${startX} ${startY} L ${midX} ${midY} L ${endX} ${endY}`
    totalLength = Math.abs(dx) + Math.abs(dy)
  }
  
  return { path, totalLength }
}

/**
 * Enterprise line style constants
 */
export const ENTERPRISE_LINE_STYLE = {
  stroke: "#E5E7EB", // Gray-200
  strokeWidth: 1,
  fill: "none",
  strokeDasharray: "0", // Solid line by default
} as const

/**
 * Active data flow line style (with animated dashes)
 */
export const DATA_FLOW_LINE_STYLE = {
  stroke: "#2563EB", // Blue accent
  strokeWidth: 1,
  fill: "none",
  strokeDasharray: "8,4", // Dashed for animation
} as const

