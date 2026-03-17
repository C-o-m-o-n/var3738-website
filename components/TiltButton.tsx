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
      className={`stamp-button ${className}`}
      whileHover={{ rotateZ: -2 }}
      whileTap={{ rotateZ: -4, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
