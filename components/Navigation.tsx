'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold cursor-pointer text-primary tracking-widest"
          whileHover={{ scale: 1.05 }}
        >
          OXYGEN GYM
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative group"
              whileHover={{ color: '#00d9ff' }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="w-full px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:shadow-lg transition-all mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Now
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
