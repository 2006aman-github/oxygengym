'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [weight, setWeight] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 3200;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      // smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);

      setWeight(Math.floor(eased * 100));

      if (progress >= 1) {
        clearInterval(interval);

        setTimeout(() => {
          setComplete(true);

          setTimeout(() => {
            onComplete?.();
          }, 400);
        }, 400);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      animate={{
        opacity: complete ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#212121]"
    >
      {/* glow bg */}
      {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#82DC36]/10 blur-3xl" /> */}

      <div className="relative z-10 flex flex-col items-center">
        {/* DUMBBELL */}
        <motion.div
         
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center mb-10"
        >
          {/* left plate */}
          <div className="w-15 h-36 rounded-md bg-[#d6d6d6]" />

          {/* left inner */}
          <div className="w-4 h-20 bg-[#b8b8b8]" />

          {/* BAR */}
          <div className="relative w-72 h-10 bg-[#111] overflow-hidden border border-[#2a2a2a]">
            {/* fluid */}
            <motion.div
              className="absolute left-0 top-0 h-full"
              animate={{
                width: `${weight}%`,
              }}
              transition={{
                duration: 0.1,
              }}
              style={{
                background:
                  'linear-gradient(90deg, #6fbf2c 0%, #82DC36 50%, #9dff4f 100%)',
                boxShadow: '0 0 30px rgba(130,220,54,0.5)',
              }}
            />

            {/* fluid shine */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 h-full w-24 bg-white/10 skew-x-[-20deg]"
            />
          </div>

          {/* right inner */}
          <div className="w-4 h-20 bg-[#b8b8b8]" />

          {/* right plate */}
          <div className="w-15 h-36 rounded-md bg-[#d6d6d6]" />
        </motion.div>

        {/* KG COUNT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-7xl font-black tracking-tight text-white">
            <span className="text-[#82DC36]">{weight}</span>
            <span className="text-3xl ml-1 text-white/70">KG</span>
          </div>

          <motion.p
            key={weight < 100 ? 'loading' : 'ready'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-sm tracking-[0.3em] uppercase text-white/40"
          >
            {weight < 100
              ? 'Loading Strength'
              : 'Ready To Transform'}
          </motion.p>
        </motion.div>

        {/* bottom progress */}
        <div className="mt-10 w-64 h-[2px] bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-[#82DC36]"
            animate={{
              width: `${weight}%`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}