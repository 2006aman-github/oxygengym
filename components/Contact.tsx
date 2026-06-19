'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 86398 84392',
      href: 'tel:+918639884392',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Musheerabad, Hyderabad',
      href: '#',
    },
   
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
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
            GET IN TOUCH
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

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-4 rounded-lg glass border border-primary/30 text-primary group-hover:scale-110"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <div className="text-sm text-foreground/60 uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </div>
               
              );
            })}

            {/* Social links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    target="_blank"
                    href="https://www.instagram.com/oxygengym.hyderabad/"
                    className="p-3 rounded-lg glass border border-primary/30 text-primary"
                    whileHover={{
                      scale: 1.2,
                  boxShadow: '0 0 20px rgba(130, 220, 54, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Send us a Message
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-foreground/80 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full glass px-4 py-3 rounded-lg border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-foreground/80 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full glass px-4 py-3 rounded-lg border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-foreground/80 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full glass px-4 py-3 rounded-lg border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full glass px-4 py-3 rounded-lg border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none h-32"
                placeholder="Tell us about your fitness goals..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full glass px-6 py-3 text-lg font-semibold text-primary border border-primary rounded-lg hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Map placeholder */}
       <motion.div
  className="relative h-96 rounded-2xl overflow-hidden border border-primary/20"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  {/* Google Map */}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.3754684625633!2d78.4985359!3d17.413918700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99001ca35ead%3A0xafc0eb4b9188d504!2sOXYGEN%20GYM%20A%2FC!5e1!3m2!1sen!2sin!4v1780393673866!5m2!1sen!2sin" 
  className="w-full"
  height="450" style={{border: 0}}
   loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

  {/* Red overlay */}
  <div className="absolute inset-0 bg-[#F84D33]/10 pointer-events-none" />


  {/* Location label */}
  <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-3 rounded-xl border border-[#F84D33]/20">
    <MapPin size={22} className="text-primary" />
    
    <div>
      <p className="text-xs text-white/50 uppercase tracking-widest">
        Location
      </p>
      <p className="text-white font-semibold">
        Musheerabad, Hyderabad
      </p>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
