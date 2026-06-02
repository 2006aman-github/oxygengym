'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description: string;
  thumbnail?: string;
  color: string;
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    title: 'Premium Dumbbell Rack',
    description: 'Complete range of weights for all fitness levels',
    thumbnail: '/images/dumbbellarea.webp',
    color: 'from-primary/30 to-primary/10',
  },
  {
    id: '2',
    type: 'image',
    title: 'Our Strong Community',
    description: 'Diverse members united by fitness and growth',
    thumbnail: '/images/community1.jpg',
    color: 'from-blue-500/30 to-blue-500/10',
  },
  {
    id: '3',
    type: 'image',
    title: 'Modern Gym Environment',
    description: 'Premium lighting and spacious training areas',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one-2lXxV1AuoEx0HOLVrvCDcZrBFflF38.webp',
    color: 'from-purple-500/30 to-purple-500/10',
  },
  {
    id: '4',
    type: 'image',
    title: 'State-of-the-Art Machines',
    description: 'Professional cardio and training equipment',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/four-tld6SYSp8cjxdJUMX4NMQ1jH50UgBR.webp',
    color: 'from-orange-500/30 to-orange-500/10',
  },
  {
    id: '5',
    type: 'image',
    title: 'Cardio & Training Zone',
    description: 'Complete cardio facilities with premium bikes and rowing machines',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damn-xR4kO0S2CaAFV1GeFYi9fVuuXISDaH.webp',
    color: 'from-pink-500/30 to-pink-500/10',
  },
  {
    id: '6',
    type: 'image',
    title: 'Complete Facility Tour',
    description: 'AC cooled spacious gym with professional training stations',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/three-ey93npzbtDQVrPGUtHocAFr07o1Wg2.webp',
    color: 'from-green-500/30 to-green-500/10',
  },
];

export default function CommunityShowcase() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <section id='community' className="relative w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Community</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the energy, dedication, and camaraderie of our gym family. Real people, real results, real community.
          </p>
        </motion.div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-64 rounded-xl overflow-hidden bg-gradient-to-br ${item.color} border border-primary/20 hover:border-primary/50 transition-all duration-300`}
              >
                {/* Background image */}
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-300" />

                {/* Video badge */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg
                        className="w-6 h-6 text-background ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                )}

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to become part of our community? Join thousands of fitness enthusiasts.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300">
            Join Now
          </button>
        </motion.div>
      </div>

      {/* Modal for selected item - Simple display */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.thumbnail && (
              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
