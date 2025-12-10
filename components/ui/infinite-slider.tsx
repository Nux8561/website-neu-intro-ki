'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const duration = 100 - speed; // Umgekehrte Logik: höhere speed = niedrigere duration
  
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        animate={{
          x: direction === 'horizontal' ? reverse ? ['0%', '50%'] : ['-50%', '0%'] : 0,
          y: direction === 'vertical' ? reverse ? ['0%', '50%'] : ['-50%', '0%'] : 0,
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        whileHover={speedOnHover ? {
          transition: {
            duration: 100 - speedOnHover,
          }
        } : undefined}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

