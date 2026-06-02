'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/oxygengym.hyderabad/' },
  ];

  return (
    <footer className="relative bg-background border-t border-primary/20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-primary mb-4">
              OXYGEN GYM
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Premium fitness destination in Musheerabad, Hyderabad. Build strength, community, and transformation.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/70">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+918639884392"
                  className="hover:text-primary transition-colors"
                >
                  +91 86398 84392
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin size={16} className="text-primary" />
                <span>Musheerabad, Hyderabad</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:border-primary/50 transition-colors"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 20px rgba(118,197,0,0.4)',
                    }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            © {currentYear} Oxygen Gym A/C. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-primary fill-primary" />
            </motion.span>{' '}
            in Hyderabad
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
