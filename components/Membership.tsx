'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Membership() {
  const plans = [
    {
      name: 'Monthly',
      price: '₹2,999',
      period: 'per month',
      features: [
        'Unlimited gym access',
        'Personal trainer consultation',
        'Locker facility',
        'Free water & towel',
      ],
      popular: false,
    },
    {
      name: 'Quarterly',
      price: '₹7,999',
      period: '3 months',
      features: [
        'Unlimited gym access',
        '2 personal training sessions/week',
        'Nutrition consultation',
        'Locker & shower facility',
        'Priority slot booking',
      ],
      popular: true,
    },
    {
      name: 'Yearly',
      price: '₹24,999',
      period: '12 months',
      features: [
        'Unlimited gym access',
        'Weekly personal training',
        'Complete nutrition plan',
        'Locker & shower facility',
        'Priority everything',
        'Free merchandise',
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="membership"
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
            MEMBERSHIP PLANS
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
          <div className="flex justify-center mt-6">
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="glass px-4 py-1 text-sm font-bold text-primary border border-primary rounded-full">
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Card background effect */}
              {plan.popular && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              )}

              {/* Card */}
              <div
                className={`relative glass p-8 rounded-2xl border transition-all ${
                  plan.popular
                    ? 'border-primary/50 md:scale-105'
                    : 'border-primary/20 group-hover:border-primary/50'
                }`}
              >
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <motion.div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-foreground/60">{plan.period}</div>
                </motion.div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="mt-1 text-primary flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check size={20} />
                      </motion.div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground border border-primary'
                      : 'glass border border-primary text-primary hover:bg-primary/20'
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      plan.popular
                        ? '0 0 30px rgba(0, 217, 255, 0.5)'
                        : '0 0 20px rgba(0, 217, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact for custom plans */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/70 mb-4">
            Looking for a custom plan? Contact us for personalized options
          </p>
          <motion.a
            href="#contact"
            className="inline-block glass px-8 py-3 text-lg font-semibold text-secondary border border-secondary rounded-lg hover:bg-secondary/20 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
            }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
