'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

export default function StatCard({ number, label, index }: StatCardProps) {
  return (
    <motion.div
      className="neu-card text-center py-12 px-6 bg-white group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-5xl md:text-7xl font-black italic mb-2 tracking-tighter"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: index * 0.1 + 0.2,
          type: 'spring',
          stiffness: 200,
        }}
        viewport={{ once: true }}
      >
        {number}
      </motion.div>
      <div className="text-sm font-black uppercase tracking-widest text-black/60 group-hover:text-primary transition-colors">
        {label}
      </div>
    </motion.div>
  );
}
