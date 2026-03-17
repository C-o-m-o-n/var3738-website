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
      className="stamp-card bg-background text-center py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ shadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
    >
      <motion.div
        className="text-3xl md:text-4xl font-black text-primary mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: index * 0.1 + 0.3,
          type: 'spring',
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        {number}
      </motion.div>
      <div className="text-xs md:text-sm font-bold text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
