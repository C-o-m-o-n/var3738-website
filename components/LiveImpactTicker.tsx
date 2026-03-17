'use client';

import { motion } from 'framer-motion';

interface LiveImpactTickerProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
}

export default function LiveImpactTicker({
  items,
  backgroundColor = 'bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20',
  textColor = 'text-foreground',
}: LiveImpactTickerProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`w-full ${backgroundColor} ${textColor} py-6 md:py-8 border-y border-border/50 overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 md:gap-12">
              <span className="font-black text-lg md:text-xl tracking-tight flex-shrink-0 text-primary">
                {item}
              </span>
              {idx < duplicatedItems.length - 1 && (
                <span className="text-2xl font-black text-primary/50">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
