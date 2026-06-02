'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ opacity, y }}
        >
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                OXYGEN GYM A/C
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </motion.div>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Oxygen Gym A/C is a premium fitness destination in Musheerabad, Hyderabad
              focused on strength training, bodybuilding, fat loss, and overall fitness
              transformation.
            </motion.p>

            <motion.p
              className="text-foreground/70 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With state-of-the-art equipment, expert trainers, and a supportive
              community, we&apos;re committed to helping you achieve your fitness goals and
              transform your lifestyle.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                'Strength Training',
                'Expert Trainers',
                'Bodybuilding',
                'Fat Loss Programs',
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="glass p-4 rounded-lg border border-primary/20"
                  whileHover={{ scale: 1.05, borderColor: '#00d9ff' }}
                >
                  <div className="text-sm font-semibold text-primary">{feature}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Animated visual */}
          <motion.div
            className="relative h-96 md:h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 glass rounded-2xl border border-primary/20 overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'radial-gradient(circle at center, #00d9ff 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-lg border border-primary/30 glow-primary"
                  initial={{
                    x: Math.random() * 200,
                    y: Math.random() * 200,
                  }}
                  animate={{
                    x: Math.random() * 200,
                    y: Math.random() * 200,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + Math.random() * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              {/* Center stat */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <motion.div
                  className="text-5xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-foreground/60">Active Members</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
