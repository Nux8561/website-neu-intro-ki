"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Starfield Canvas Component - komplett neu geschrieben für garantierte Sichtbarkeit
const StarfieldCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let timeoutId: NodeJS.Timeout;
        let stars: Star[] = [];
        const numStars = 800; // Optimiert für 120 FPS Performance
        let speed = 2;
        let lastTime = 0;
        const targetFPS = 120;
        const frameInterval = 1000 / targetFPS;

        class Star {
            x: number;
            y: number;
            z: number;
            pz: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth - canvasWidth / 2;
                this.y = Math.random() * canvasHeight - canvasHeight / 2;
                this.z = Math.random() * canvasWidth;
                this.pz = this.z;
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.z = this.z - speed;
                if (this.z < 1) {
                    this.z = canvasWidth;
                    this.x = Math.random() * canvasWidth - canvasWidth / 2;
                    this.y = Math.random() * canvasHeight - canvasHeight / 2;
                    this.pz = this.z;
                }
            }

            draw(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
                // Optimierte Berechnungen - vorberechnet für Performance
                const zFactor = 1 - this.z / canvasWidth;
                const sx = (this.x / this.z) * canvasWidth / 2 + canvasWidth / 2;
                const sy = (this.y / this.z) * canvasHeight / 2 + canvasHeight / 2;
                
                // Größere Sterne - DEUTLICH sichtbar
                const r = Math.max(2, zFactor * 5);

                const px = (this.x / this.pz) * canvasWidth / 2 + canvasWidth / 2;
                const py = (this.y / this.pz) * canvasHeight / 2 + canvasHeight / 2;

                this.pz = this.z;

                // HELLES BLAU - maximale Sichtbarkeit
                // rgb(96, 165, 250) = blue-400 - heller als blue-500
                const opacity = Math.min(1.0, 0.6 + zFactor * 0.4);
                
                // Optimiert: Setze Styles nur einmal
                ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
                ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`;
                ctx.lineWidth = r * 2;
                
                // Zeichne Linie - optimiert
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.stroke();
                
                // Zeichne Punkt am Ende - DEUTLICH größer
                ctx.beginPath();
                ctx.arc(sx, sy, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            stars = [];
            const canvasWidth = canvas.width || 1920;
            const canvasHeight = canvas.height || 1080;
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star(canvasWidth, canvasHeight));
            }
        };

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            init();
        };

        const animate = (currentTime: number) => {
            // Frame-Rate Limiting für konsistente Performance
            const deltaTime = currentTime - lastTime;
            
            if (deltaTime >= frameInterval) {
                lastTime = currentTime - (deltaTime % frameInterval);
                
                // Transparenter Hintergrund - Sterne sollen sichtbar sein
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Batch-Update für bessere Performance
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                
                stars.forEach(star => {
                    star.update(canvasWidth, canvasHeight);
                    star.draw(ctx, canvasWidth, canvasHeight);
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const dist = Math.abs(event.clientX - centerX);
            const maxDist = window.innerWidth / 2;
            speed = 2 + (1 - dist / maxDist) * 15;
        };

        // Initialisierung - garantierte Funktionalität
        const start = () => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                // Canvas noch nicht bereit - retry
                requestAnimationFrame(start);
                return;
            }
            
            resizeCanvas();
            lastTime = performance.now();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        // Start nach kurzer Verzögerung, damit DOM bereit ist
        timeoutId = setTimeout(() => {
            start();
        }, 50);

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mounted]);

    if (!mounted) {
        return null;
    }

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-[1] w-full h-full" 
            style={{ 
                width: '100%', 
                height: '100%',
                display: 'block'
            }} 
        />
    );
};

// Animation variants - Intro KI Style
const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2 + 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 400,
            damping: 17,
        },
    }),
};

interface StarfieldBackgroundProps {
    className?: string;
}

// Reines Hintergrund-Element - nur die Sterne-Animation
export const StarfieldBackground = ({ className }: StarfieldBackgroundProps) => {
    return (
        <div className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}>
            <StarfieldCanvas />
        </div>
    );
};

interface HyperdriveHeroProps {
    className?: string;
    onAnimationEnd?: () => void;
}

// The main hero component - nur für Kompatibilität, falls noch verwendet
const HyperdriveHero = ({ className, onAnimationEnd }: HyperdriveHeroProps) => {
    return (
        <section className={cn("relative bg-[#FAFAFB] pt-16 pb-20 sm:pb-24 overflow-hidden min-h-screen", className)}>
            <StarfieldCanvas />
        </section>
    );
};

export default HyperdriveHero;
