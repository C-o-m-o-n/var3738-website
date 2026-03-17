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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="glow-card min-h-96 flex flex-col justify-between group"
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: 'rgba(217, 70, 239, 0.8)' }}
            >
              {/* Icon/Accent */}
              {pillar.icon && (
                <div className={`w-16 h-16 ${pillar.accentColor || 'bg-gradient-to-br from-primary to-secondary'} rounded-lg flex items-center justify-center mb-4 text-white glow-md`}>
                  {pillar.icon}
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-balance text-foreground">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed flex-grow text-muted-foreground">
                {pillar.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <span className="text-xs font-bold uppercase tracking-widest text-primary/70">
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
