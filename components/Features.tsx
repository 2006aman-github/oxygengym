'use client';

import { motion } from 'framer-motion';
import {
  Wind,
  Zap,
  Users,
  Award,
  Heart,
  Cpu,
  Clock,
  TrendingUp,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Wind,
      title: 'Air Conditioned Gym',
      description: 'Cool and comfortable training environment',
    },
    {
      icon: Zap,
      title: 'Strength Training',
      description: 'Comprehensive strength building programs',
    },
    {
      icon: Heart,
      title: 'Bodybuilding',
      description: 'Professional bodybuilding coaching',
    },
    {
      icon: Award,
      title: 'Expert Trainers',
      description: 'Certified and experienced trainers',
    },
    {
      icon: Users,
      title: 'Ladies Batch',
      description: 'Dedicated separate ladies training',
    },
    {
      icon: Cpu,
      title: 'Imported Equipment',
      description: 'Premium quality gym equipment',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Training slots to fit your schedule',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Plans',
      description: 'Flexible membership pricing',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="features"
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            WHY CHOOSE OXYGEN GYM
          </h2>
          <div className="flex justify-center gap-2">
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass p-8 rounded-xl border border-primary/20 relative overflow-hidden cursor-pointer"
                whileHover={{
                  borderColor: '#00d9ff',
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 inline-block p-3 rounded-lg glass border border-primary/30 text-primary"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border border-primary rounded-xl opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
