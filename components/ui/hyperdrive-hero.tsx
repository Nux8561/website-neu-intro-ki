"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

// Starfield Canvas Component - angepasst für weißen Hintergrund
const StarfieldCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const numStars = 600;
        let speed = 2;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        class Star {
            x: number;
            y: number;
            z: number;
            pz: number;

            constructor() {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.z = Math.random() * canvas.width;
                this.pz = this.z; // previous z
            }

            update() {
                this.z = this.z - speed;
                if (this.z < 1) {
                    this.z = canvas.width;
                    this.x = Math.random() * canvas.width - canvas.width / 2;
                    this.y = Math.random() * canvas.height - canvas.height / 2;
                    this.pz = this.z;
                }
            }

            draw() {
                const sx = (this.x / this.z) * canvas.width / 2 + canvas.width / 2;
                const sy = (this.y / this.z) * canvas.height / 2 + canvas.height / 2;
                
                const r = Math.max(0.1, (1 - this.z / canvas.width) * 2.5);

                const px = (this.x / this.pz) * canvas.width / 2 + canvas.width / 2;
                const py = (this.y / this.pz) * canvas.height / 2 + canvas.height / 2;

                this.pz = this.z;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.lineWidth = r * 2;
                // Dunkle Sterne auf hellem Hintergrund - subtil
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.15 * (1 - this.z / canvas.width)})`;
                ctx.stroke();
            }
        }

        const init = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            // Weißer Hintergrund mit subtiler Transparenz für Animation
            ctx.fillStyle = 'rgba(250, 250, 251, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const dist = Math.abs(event.clientX - centerX);
            const maxDist = window.innerWidth / 2;
            // The closer to the center, the faster the speed
            speed = 2 + (1 - dist / maxDist) * 15;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        resizeCanvas();
        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />;
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

interface HyperdriveHeroProps {
    className?: string;
    onAnimationEnd?: () => void;
}

// The main hero component - angepasst für Intro KI Design
const HyperdriveHero = ({ className, onAnimationEnd }: HyperdriveHeroProps) => {
    return (
        <div 
            className={cn(
                "relative w-full bg-[#FAFAFB] flex flex-col items-center justify-center overflow-hidden",
                className
            )}
            style={{ minHeight: 'calc(100vh - 200px)' }}
        >
            <StarfieldCanvas />
            
            {/* Subtiler Gradient Overlay für Tiefe */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-transparent to-[#FAFAFB] z-10 pointer-events-none"></div>

            {/* Overlay HTML Content */}
            <div className="relative z-20 text-center p-6 max-w-7xl mx-auto">
                <motion.div
                    custom={0} 
                    variants={fadeUpVariants} 
                    initial="hidden" 
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-sm"
                >
                    <Rocket className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700 font-inter">
                        Next-Generation Deployment Platform
                    </span>
                </motion.div>

                <motion.h1
                    custom={1} 
                    variants={fadeUpVariants} 
                    initial="hidden" 
                    animate="visible"
                    className="text-5xl md:text-7xl font-jakarta font-bold tracking-tight mb-6 text-[#0A0A0A]"
                >
                    Hyperdrive
                </motion.h1>

                <motion.p
                    custom={2} 
                    variants={fadeUpVariants} 
                    initial="hidden" 
                    animate="visible"
                    className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 font-inter"
                >
                    Launch your applications at the speed of light. Our platform provides the infrastructure to build, scale, and deploy globally in seconds.
                </motion.p>

                <motion.div
                    custom={3} 
                    variants={fadeUpVariants} 
                    initial="hidden" 
                    animate="visible"
                    onAnimationComplete={onAnimationEnd}
                >
                    <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition-colors duration-300 flex items-center gap-2 mx-auto font-inter hover:scale-[1.02] active:scale-[0.98]">
                        Engage Thrusters
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default HyperdriveHero;

