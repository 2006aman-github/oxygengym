'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [weight, setWeight] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Smoother cubic-in-out feel

      setWeight(Math.floor(eased * 100));

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => setComplete(true), 600);
        setTimeout(() => onComplete?.(), 1100);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          {/* Main Content Container */}
          <div className="flex flex-col items-center gap-12">
            
            {/* Number Display - Elegant & Minimal */}
            <div className="relative flex flex-col items-center">
              <div className="text-[12rem] font-light leading-none tracking-tighter text-white tabular-nums">
                {weight}
              </div>
              <div className="mt-2 text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-medium">
                Initializing Progress
              </div>
            </div>

            {/* Architectural Progress Line */}
            <div className="w-[300px] h-[1px] bg-zinc-800 relative overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 bg-[#F84D33]"
                initial={{ width: '0%' }}
                animate={{ width: `${weight}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}