'use client';

import { motion } from 'framer-motion';

interface LiveImpactTickerProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
}

export default function LiveImpactTicker({
  items,
  backgroundColor = 'bg-primary',
  textColor = 'text-foreground',
}: LiveImpactTickerProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`w-full ${backgroundColor} ${textColor} py-6 md:py-8 border-y-4 border-foreground overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4">
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
              <span className="font-black text-lg md:text-xl tracking-tight flex-shrink-0">
                {item}
              </span>
              {idx < duplicatedItems.length - 1 && (
                <span className="text-2xl font-black">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
