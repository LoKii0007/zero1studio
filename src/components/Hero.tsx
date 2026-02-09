"use client"

import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  
  // Stagger animation variants for Desktop
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { y: 100, rotate: 5, opacity: 0 },
    show: { 
        y: 0, 
        rotate: 0,
        opacity: 1, 
        transition: { 
            duration: 1, 
            ease: [0.25, 1, 0.5, 1] 
        } 
    }
  };

  // Mobile specific variants
  const mobileContainer: Variants = {
      hidden: { opacity: 0 },
      show: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2
          }
      }
  };

  const mobileItem: Variants = {
      hidden: { x: -20, opacity: 0 },
      show: { 
          x: 0, 
          opacity: 1, 
          transition: { duration: 0.8, ease: "easeOut" } 
      }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
      
      {/* --- DESKTOP LAYOUT (> md) --- */}
      <div className="hidden md:flex max-w-[90rem] mx-auto w-full relative z-10 flex-col justify-between h-full pt-32 pb-12">
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
        >
            <div className="overflow-hidden">
                <motion.h1 variants={item} className="font-display text-[13vw] leading-[0.8] font-bold text-white tracking-tighter uppercase mix-blend-difference">
                    Shaping
                </motion.h1>
            </div>
            
            <div className="overflow-hidden self-center">
                <motion.h1 variants={item} className="font-display text-[13vw] leading-[0.8] font-bold text-white/10 text-outline tracking-tighter uppercase">
                    Future
                </motion.h1>
            </div>

            <div className="overflow-hidden self-end">
                <motion.div variants={item} className="flex items-center gap-4">
                     <div className="h-[2px] w-24 bg-accent"></div>
                     <h1 className="font-display text-[13vw] leading-[0.8] font-bold text-white tracking-tighter uppercase">
                        Reality
                    </h1>
                </motion.div>
            </div>
        </motion.div>

        <div className="flex flex-row justify-between items-end gap-12">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-white/60 text-xl font-light leading-relaxed max-w-md"
            >
                Redefining the digital landscape with bold visuals and immersive interactions. We build the impossible.
            </motion.p>

            <Magnetic>
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer" data-hover="true">
                    <ArrowDown size={32} className="text-white group-hover:text-accent transition-colors" />
                </div>
            </Magnetic>
        </div>
      </div>

      {/* --- MOBILE LAYOUT (< md) --- */}
      <div className="flex md:hidden w-full h-full relative z-10 flex-col justify-between pt-24 pb-8">
         {/* Top Info Bar */}
         <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between items-start border-b border-white/10 pb-4"
         >
             <div className="flex flex-col">
                <span className="text-[10px] font-mono text-accent mb-1">EST. 2024</span>
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">Global<br/>Independent</span>
             </div>
             <span className="text-[10px] font-mono text-white/50 text-right uppercase tracking-widest">Digital<br/>Experience</span>
         </motion.div>

         {/* Center Typography Cluster - Editorial Style */}
         <motion.div 
            variants={mobileContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center flex-1 py-8"
         >
            {/* 1. Top Left */}
            <motion.h1 variants={mobileItem} className="font-display text-6xl font-bold text-white uppercase tracking-tighter leading-[0.85] z-10">
                Shaping
            </motion.h1>
            
            {/* 2. Right Aligned, Outline, Overlapping */}
            <motion.h1 
                variants={mobileItem} 
                className="font-display text-[5rem] font-bold text-transparent text-outline uppercase tracking-tighter leading-[0.8] self-end text-right z-0 -mt-3 opacity-60"
            >
                Future
            </motion.h1>

            {/* 3. Left Aligned with Accent Arrow */}
            <motion.div variants={mobileItem} className="flex items-center gap-3 z-10 -mt-3">
                <div className="w-12 h-[2px] bg-accent"></div>
                <h1 className="font-display text-6xl font-bold text-white uppercase tracking-tighter leading-[0.85]">
                    Reality
                </h1>
            </motion.div>
         </motion.div>

         {/* Bottom Actions */}
         <div className="flex flex-col gap-6">
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white/70 text-sm font-light leading-relaxed max-w-[85%]"
             >
                Redefining the digital landscape. <br/>
                <span className="text-accent font-medium">We build the impossible.</span>
             </motion.p>
             
             <div className="flex items-center justify-between gap-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                <Magnetic>
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm group" data-hover="true">
                        <ArrowDown size={20} className="text-white group-hover:text-accent transition-colors" />
                    </div>
                </Magnetic>
             </div>
         </div>
      </div>

      {/* Fluid Background Graphic - Shared */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-b from-white/10 to-transparent blur-[80px] md:blur-[120px] pointer-events-none z-0 mix-blend-overlay opacity-50 md:opacity-100" 
      />
    </section>
  );
}