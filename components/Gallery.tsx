'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, title: 'Strength Training Zone', color: 'from-primary to-secondary' },
    { id: 2, title: 'Cardio Equipment', color: 'from-secondary to-primary' },
    { id: 3, title: 'Functional Training', color: 'from-primary to-secondary' },
    { id: 4, title: 'Gym Interior', color: 'from-secondary to-primary' },
    { id: 5, title: 'Weight Training Area', color: 'from-primary to-secondary' },
    { id: 6, title: 'Training Session', color: 'from-secondary to-primary' },
  ];

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
            OUR FACILITY
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

        {/* Gallery Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image background with gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`}
                whileHover={{ opacity: 0.7 }}
              />

              {/* Placeholder image with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📸
                  </motion.div>
                </div>
              </div>

              {/* Overlay content */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>

              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-[80vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image container */}
                <div className="relative h-96 md:h-[70vh] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30 overflow-hidden flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-7xl"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    📸
                  </motion.div>
                </div>

                {/* Close button */}
                <motion.button
                  className="absolute -top-12 right-0 md:top-4 md:-right-12 text-white hover:text-primary transition-colors"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={32} />
                </motion.button>

                {/* Image title */}
                <motion.p
                  className="text-center text-foreground mt-6 text-lg font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {
                    galleryItems.find((item) => item.id === selectedImage)
                      ?.title
                  }
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
