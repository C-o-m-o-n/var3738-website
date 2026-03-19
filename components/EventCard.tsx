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
      className="neu-card flex flex-col p-8 bg-white group relative overflow-hidden"
      whileHover={{ x: 4, y: 4 }}
    >
      <div className="absolute top-0 right-0 p-4 transform translate-x-4 -translate-y-4">
        <div className="w-16 h-16 bg-primary/20 border-4 border-black rounded-full"></div>
      </div>

      {/* Header */}
      <div className="mb-8 relative z-10">
        <h3 className="text-4xl font-black mb-3 italic tracking-tighter uppercase">{wardName}</h3>
        <div className="neu-badge bg-secondary">
          {date}
        </div>
      </div>

      {/* Capacity Bar */}
      <div className="mb-10 flex-grow relative z-10">
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs font-black uppercase tracking-widest text-black/40">Availability</span>
          <span className="text-xl font-black text-black">
            {capacity}<span className="text-black/40 text-sm font-bold">/{maxCapacity}</span>
          </span>
        </div>
        <div className="w-full h-6 bg-white border-4 border-black rounded-full relative overflow-hidden">
          <motion.div
            className="h-full bg-primary border-r-4 border-black"
            initial={{ width: 0 }}
            whileInView={{ width: `${capacityPercentage}%` }}
            transition={{ duration: 1, ease: "circOut" }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRegister}
        className="neu-button-secondary w-full text-center font-black text-lg"
      >
        Claim Your Spot
      </button>
    </motion.div>
  );
}
