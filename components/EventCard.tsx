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
      className="stamp-card bg-background flex flex-col min-h-80"
      whileHover={{ shadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black mb-2">{wardName}</h3>
        <p className="text-sm font-bold text-muted-foreground">{date}</p>
      </div>

      {/* Capacity Bar */}
      <div className="mb-8 flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold uppercase">Capacity</span>
          <span className="text-sm font-bold">
            {capacity}/{maxCapacity}
          </span>
        </div>
        <div className="w-full h-6 border-4 border-foreground bg-background relative overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${capacityPercentage}%` }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRegister}
        className="stamp-button w-full text-center font-bold text-sm mt-auto"
      >
        Claim Your Spot
      </button>
    </motion.div>
  );
}
