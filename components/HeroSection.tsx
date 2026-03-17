'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  backgroundColor = 'bg-black',
  textColor = 'text-background',
}: HeroSectionProps) {
  return (
    <section className={`w-full ${backgroundColor} ${textColor} py-20 md:py-32 border-b-4 border-foreground overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6">
            {headline}
          </h1>
        </motion.div>

        {subheadline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl max-w-2xl text-balance leading-relaxed">
              {subheadline}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
