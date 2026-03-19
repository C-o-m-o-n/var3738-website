'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Pillar {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: string;
}

interface PillarsGridProps {
  pillars: Pillar[];
}

export default function PillarsGrid({ pillars }: PillarsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="neu-card min-h-[400px] flex flex-col p-10 bg-white group relative"
              variants={cardVariants}
            >
              {/* Icon/Accent */}
              {pillar.icon && (
                <div className="relative mb-10">
                  <div className={`w-20 h-20 ${pillar.accentColor || 'bg-primary'} border-4 border-black rounded-2xl flex items-center justify-center text-black relative z-10 neu-shadow group-hover:bg-accent transition-all duration-300`}>
                    {pillar.icon}
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-4xl font-black mb-6 leading-tight uppercase italic tracking-tighter">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-tight flex-grow font-bold text-black/80">
                {pillar.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-10 pt-8 border-t-4 border-black/5 flex items-center justify-between">
                <span className="neu-badge bg-secondary">
                  Core Pillar
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
