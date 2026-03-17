'use client';

import { motion } from 'framer-motion';

interface PartnerCardProps {
  name: string;
  logo: string;
  index: number;
}

export default function PartnerCard({ name, logo, index }: PartnerCardProps) {
  return (
    <motion.div
      className="stamp-card bg-background border-4 border-foreground text-center py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        shadow: '6px 6px 0px 0px rgba(0,0,0,1)',
        scale: 1.02,
      }}
    >
      <motion.div
        className="text-6xl mb-4"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          delay: index * 0.1 + 0.2,
          type: 'spring',
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        {logo}
      </motion.div>
      <h3 className="font-bold text-lg text-foreground">{name}</h3>
    </motion.div>
  );
}
