'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ModernHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Brand identifier */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary font-semibold text-sm">THE RIGHT PLACE FOR FITNESS</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Build Your <span className="text-primary">Strength</span> Community
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Join a thriving community of fitness enthusiasts. Affordable membership, premium equipment, and an environment that celebrates your transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
              href="#pricing"
              >

              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 text-base">
                View Membership
              </button>
              </motion.a>
              
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-0"
            >
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground text-sm">Active Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12/7</div>
                <p className="text-muted-foreground text-sm">Access Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">₹1,300</div>
                <p className="text-muted-foreground text-sm">Monthly Start</p>
              </div>
            </motion.div>
          </motion.div>

         {/* Right side - Blended Hero Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative h-full w-full "
>
  {/* Green ambient glow */}
  {/* <div className="absolute inset-0 bg-[#82DC36]/20 blur-[120px] scale-125" /> */}

  {/* Image */}
  <Image
    src="/images/two-aes.png"
    alt="Greek aesthetic bodybuilder"
    fill
    priority
    className="
      object-contain
      object-center
     scale-110
    
    "
  />


</motion.div>
        </div>
      </div>

      {/* Scroll indicator
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div> */}
    </section>
  );
}
