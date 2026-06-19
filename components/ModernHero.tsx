'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ModernHero() {
 const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Only fade out during the last 30% of the section's scroll
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  return (
    // 'dark' class on a parent element will trigger the dark: variants
   <section ref={containerRef} className="relative  w-full min-h-screen bg-white dark:bg-[#020202] flex items-center pt-20 overflow-hidden transition-colors duration-500">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div style={{ 
    opacity, 
    willChange: "opacity" // Tells the browser to dedicate GPU power to this
  }} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
          
          <div className="space-y-10">
            {/* Brand Identifier */}
            <motion.div className="flex items-center gap-4 text-[#F84D33]">
              <div className="w-12 h-[1px] bg-[#F84D33]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                The Right Place For Fitness
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="text-[clamp(3.5rem,7vw,6rem)] font-bold text-zinc-950 dark:text-white leading-[0.95] tracking-tight transition-colors">
              Build Your<br />
              <span className="text-[#F84D33]">Strength</span><br />
              Community
            </motion.h1>

            <motion.p className="max-w-md text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors">
              Join a thriving community of fitness enthusiasts. Affordable 
              membership, premium equipment, and an environment that 
              celebrates your transformation.
            </motion.p>

            {/* CTA Button */}
            <button className="group relative px-10 py-4 bg-transparent border border-zinc-950/20 dark:border-white/20 hover:border-[#F84D33] transition-colors duration-500">
              <span className="relative z-10 text-xs tracking-[0.2em] uppercase font-bold text-zinc-950 dark:text-white group-hover:text-white transition-colors duration-500">
                View Membership
              </span>
              <div className="absolute inset-0 bg-[#F84D33] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            {/* Stats */}
            <div className="flex gap-12 pt-10 border-t border-zinc-200 dark:border-white/10 transition-colors">
              {[
                { label: 'Active Members', val: '50+' },
                { label: 'Access', val: '12/7' },
                { label: 'Monthly Start', val: '₹1,300' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-zinc-950 dark:text-white">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] w-full">
            <Image
              src="/images/heroimagenew.png"
              alt="Gym Aesthetics"
              fill
              priority
              className="object-cover object-center grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
          </div>
              
        </motion.div>
      </div>
    </section>
  );
}