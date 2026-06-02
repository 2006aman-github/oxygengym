'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Timings() {
  const timings = [
    {
      day: 'Monday - Saturday',
      morning: '6:00 AM - 11:00 AM',
      evening: '5:00 PM - 11:00 PM',
    },
    {
      day: 'Sunday',
      morning: '7:00 AM - 11:00 AM',
      evening: '5:00 PM - 10:00 PM',
    },
  ];

  return (
    <section
      id="timings"
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            TRAINING TIMINGS
          </h2>
          <div className="flex justify-center">
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Timings cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {timings.map((timing, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Card */}
              <div className="relative glass p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-all">
                {/* Header */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-4 rounded-lg glass border border-primary/30 text-primary"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <Clock size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {timing.day}
                  </h3>
                </motion.div>

                {/* Time slots */}
                <div className="space-y-6">
                  {/* Morning */}
                  <motion.div
                    className="border-l-2 border-primary/40 pl-4 py-2"
                    whileHover={{ borderColor: '#00d9ff' }}
                  >
                    <div className="text-sm text-foreground/60 uppercase tracking-wider mb-2">
                      Morning
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {timing.morning}
                    </div>
                  </motion.div>

                  {/* Evening */}
                  <motion.div
                    className="border-l-2 border-secondary/40 pl-4 py-2"
                    whileHover={{ borderColor: '#00d9ff' }}
                  >
                    <div className="text-sm text-foreground/60 uppercase tracking-wider mb-2">
                      Evening
                    </div>
                    <div className="text-xl font-bold text-secondary">
                      {timing.evening}
                    </div>
                  </motion.div>
                </div>

                {/* Animated accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/70">
            Book your slot in advance for better experience
          </p>
          <motion.button
            className="mt-4 glass px-8 py-3 text-lg font-semibold text-primary border border-primary rounded-lg hover:bg-primary/20 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
