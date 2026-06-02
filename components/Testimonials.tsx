'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Rahul Kumar',
      role: 'Fitness Enthusiast',
      content:
        'Oxygen Gym has transformed my fitness journey completely. The trainers are incredibly knowledgeable and the equipment is world-class. Highly recommended!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Health Coach',
      content:
        'The facilities here are amazing and the atmosphere is very motivating. Every visit pushes me to work harder on my fitness goals.',
      avatar: '👩‍🦰',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'Bodybuilder',
      content:
        'Best gym in Hyderabad! The imported equipment and expert trainers make it the perfect place for serious bodybuilding training.',
      avatar: '💪',
      rating: 5,
    },
    {
      name: 'Neha Singh',
      role: 'Fitness Model',
      content:
        'The ladies batch here is fantastic. Supportive environment with quality equipment makes my training sessions productive and enjoyable.',
      avatar: '👩‍🦱',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setAutoPlay(false);
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

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
            WHAT OUR MEMBERS SAY
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

        {/* Testimonial carousel */}
        <div className="relative">
          <motion.div
            className="glass p-8 md:p-12 rounded-2xl border border-primary/20"
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Rating */}
            <motion.div
              className="flex gap-1 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                  >
                    <Star
                      size={20}
                      className="text-primary fill-primary"
                    />
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[current].content}"
            </motion.blockquote>

            {/* Author */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="text-5xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {testimonials[current].avatar}
              </motion.div>
              <div>
                <div className="text-lg font-bold text-foreground">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-foreground/60">
                  {testimonials[current].role}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="glass p-3 rounded-full border border-primary/30 text-primary hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'bg-primary w-8'
                      : 'bg-foreground/30'
                  }`}
                  onClick={() => {
                    setCurrent(index);
                    setAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="glass p-3 rounded-full border border-primary/30 text-primary hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
