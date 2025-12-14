'use client';

import React, { useMemo, type JSX } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';



interface TextShimmerProps {

  children: string;

  as?: React.ElementType;

  className?: string;

  duration?: number;

  spread?: number;

}



export function TextShimmer({

  children,

  as: Component = 'p',

  className,

  duration = 2,

  spread = 2,

}: TextShimmerProps) {

  // Verwende direkte motion-Komponenten für bessere Typ-Sicherheit
  const MotionP = motion.p;
  const MotionSpan = motion.span;
  const MotionDiv = motion.div;
  const MotionH1 = motion.h1;
  const MotionH2 = motion.h2;
  const MotionH3 = motion.h3;
  const MotionH4 = motion.h4;
  const MotionH5 = motion.h5;
  const MotionH6 = motion.h6;

  const MotionComponent = 
    Component === 'span' ? MotionSpan :
    Component === 'div' ? MotionDiv :
    Component === 'h1' ? MotionH1 :
    Component === 'h2' ? MotionH2 :
    Component === 'h3' ? MotionH3 :
    Component === 'h4' ? MotionH4 :
    Component === 'h5' ? MotionH5 :
    Component === 'h6' ? MotionH6 :
    MotionP;



  const dynamicSpread = useMemo(() => {

    return children.length * spread;

  }, [children, spread]);



  return (

    <MotionComponent

      className={cn(

        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',

        'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',

        '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',

        'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',

        className

      )}

      initial={{ backgroundPosition: '100% center' }}

      animate={{ backgroundPosition: '0% center' }}

      transition={{

        repeat: Infinity,

        duration,

        ease: 'linear',

      }}

      style={

        {

          '--spread': `${dynamicSpread}px`,

          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,

        } as React.CSSProperties

      }

    >

      {children}

    </MotionComponent>

  );

}

