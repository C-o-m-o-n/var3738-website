'use client';

import { motion } from 'framer-motion';

interface TiltButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function TiltButton({
  children,
  onClick,
  className = '',
}: TiltButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`glow-button ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217, 70, 239, 0.6)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
