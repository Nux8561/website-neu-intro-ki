"use client"

import * as React from "react"

interface AnimationContainerProps {
  children: React.ReactNode
  backgroundColor?: string
  minHeight?: string
  className?: string
}

export function AnimationContainer({ 
  children, 
  backgroundColor = '#FAFAFA',
  minHeight = '600px',
  className = ''
}: AnimationContainerProps) {
  return (
    <div 
      className={`relative w-full h-full ${className}`}
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        minHeight,
        backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible'
      }}
    >
      {children}
    </div>
  )
}

