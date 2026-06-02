'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [weight, setWeight] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let animationFrame: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 3000; // 3 seconds to reach 100kg

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setWeight(Math.floor(easeProgress * 100));

      if (progress < 1) {
        animationFrame = setTimeout(animate, 16);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    };

    animate();

    return () => clearTimeout(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
        isComplete ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{
        background: 'linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)',
      }}
      animate={{
        opacity: isComplete ? 0 : 1,
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 fixed inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Dumbbell with fluid fill */}
        <div className="relative w-32 h-40 mb-8">
          {/* Left plate */}
          <motion.div
            className="absolute left-0 top-8 w-8 h-24 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />

          {/* Center bar with fluid fill */}
          <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-28 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden border-2 border-gray-600 dark:border-gray-400">
            {/* Fluid fill */}
            <motion.div
              className="w-full bg-gradient-to-t from-[#76C500] to-[#a8e61d] rounded-full"
              initial={{ height: '0%' }}
              animate={{ height: `${weight}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Right plate */}
          <motion.div
            className="absolute right-0 top-8 w-8 h-24 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>

        {/* Weight display */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-5xl font-bold text-[#76C500] mb-2 font-mono">
            {weight}
            <span className="text-2xl">kg</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm tracking-widest uppercase">
            {weight < 100 ? 'Loading Strength' : 'Ready to Lift'}
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="mt-8 w-48 h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#76C500] to-[#a8e61d]"
            initial={{ width: '0%' }}
            animate={{ width: `${weight}%` }}
            transition={{ duration: 0.05 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
