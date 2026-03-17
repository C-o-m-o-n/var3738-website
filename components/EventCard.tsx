'use client';

import { motion } from 'framer-motion';

interface EventCardProps {
  wardName: string;
  date: string;
  capacity: number;
  maxCapacity: number;
  onRegister: () => void;
}

export default function EventCard({
  wardName,
  date,
  capacity,
  maxCapacity,
  onRegister,
}: EventCardProps) {
  const capacityPercentage = (capacity / maxCapacity) * 100;

  return (
    <motion.div
      className="glow-card flex flex-col min-h-80"
      whileHover={{ y: -8, borderColor: 'rgba(217, 70, 239, 0.8)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black mb-2 text-foreground">{wardName}</h3>
        <p className="text-sm font-bold text-muted-foreground">{date}</p>
      </div>

      {/* Capacity Bar */}
      <div className="mb-8 flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold uppercase text-muted-foreground">Capacity</span>
          <span className="text-sm font-bold text-primary">
            {capacity}/{maxCapacity}
          </span>
        </div>
        <div className="w-full h-6 border border-border/50 bg-card rounded-lg relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-lg"
            style={{ width: `${capacityPercentage}%` }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRegister}
        className="glow-button w-full text-center font-bold text-sm mt-auto"
      >
        Claim Your Spot
      </button>
    </motion.div>
  );
}
