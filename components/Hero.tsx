'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update cursor position
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      // Parallax effect on container
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const moveX = (x - rect.left - rect.width / 2) * 0.05;
        const moveY = (y - rect.top - rect.height / 2) * 0.05;

        gsap.to(containerRef.current, {
          x: moveX,
          y: moveY,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated oxygen molecules
  const molecules = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 6 + Math.random() * 2,
    x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
    y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
  }));

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-6 h-6 rounded-full border-2 border-primary mix-blend-screen"
        style={{
          translate: '-50% -50%',
        }}
      />

      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating molecules */}
      <div className="absolute inset-0 overflow-hidden">
        {molecules.map((molecule) => (
          <motion.div
            key={molecule.id}
            className="absolute w-2 h-2 rounded-full bg-primary glow-primary"
            initial={{
              x: molecule.x || 0,
              y: molecule.y || 0,
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: molecule.duration,
              repeat: Infinity,
              delay: molecule.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div ref={containerRef} className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Animated title */}
        <div className="text-center space-y-6 max-w-4xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tighter text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            BREATHE
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              STRENGTH
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            TRAIN WITH OXYGEN
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 md:gap-16 mt-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { value: '500+', label: 'Members' },
              { value: '5★', label: 'Rated' },
              { value: 'PREMIUM', label: 'Equipment' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center mt-12 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="glass px-8 py-3 text-lg font-semibold text-primary border border-primary rounded-lg hover:bg-primary/20 transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
            <motion.button
              className="px-8 py-3 text-lg font-semibold text-foreground border border-foreground/30 rounded-lg hover:bg-foreground/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Trial
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm text-muted-foreground uppercase tracking-widest">
              Scroll to explore
            </div>
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
