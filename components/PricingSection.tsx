'use client';

import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Monthly',
    price: '₹1,300',
    duration: '/month',
    description: 'Perfect for trying us out',
    features: [
      '24/7 Gym Access',
      'Air Conditioned Facility',
      'Premium Equipment',
      'Locker Room Access',
      'Community Workouts',
      'Basic Support',
    ],
    highlighted: false,
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    name: 'Quarterly',
    price: '₹3,199',
    duration: '/3 months',
    description: 'Most popular among our members',
    features: [
      'Everything in Monthly',
      'Personal Training (4 sessions)',
      'Nutrition Consultation',
      'Progress Tracking',
      'Priority Support',
      'Exclusive Events',
    ],
    highlighted: true,
    color: 'from-primary/20 to-primary/10',
  },
  {
    name: 'Annual',
    price: '₹11,999',
    duration: '/year',
    description: 'Best value - Save 30%',
    features: [
      'Everything in Quarterly',
      'Personal Training (20 sessions)',
      'Monthly Nutrition Planning',
      'Body Composition Analysis',
      'VIP Support 24/7',
      'Free Guest Passes (12)',
    ],
    highlighted: false,
    color: 'from-purple-500/10 to-purple-500/5',
  },
];

export default function PricingSection() {
  return (
    <section id='pricing' className="relative w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Affordable <span className="text-primary">Pricing</span> for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget. No hidden fees, just honest pricing.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted ? 'md:scale-105' : ''
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} border ${
                  plan.highlighted
                    ? 'border-primary/50'
                    : 'border-primary/20'
                }`}
              />

              {/* Highlight badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full"
                >
                  MOST POPULAR
                </motion.div>
              )}

              {/* Card content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Plan name and price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.duration}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Features list */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40'
                      : 'bg-card text-foreground border-2 border-primary hover:bg-primary/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center p-6 rounded-xl bg-primary/10 border border-primary/30"
        >
          <p className="text-foreground mb-2">
            <span className="font-semibold">No lock-in contracts</span> • Cancel anytime
          </p>
          <p className="text-muted-foreground text-sm">
            First month comes with a FREE fitness assessment and personalized program planning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
