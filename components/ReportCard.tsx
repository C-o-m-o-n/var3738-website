'use client';

import { Download, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReportCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
  pages: number;
  typeColor: string;
  index: number;
}

export default function ReportCard({
  title,
  date,
  description,
  type,
  pages,
  index,
}: ReportCardProps) {
  return (
    <motion.div
      className="neu-card flex flex-col p-8 bg-white group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Report Type Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 bg-accent border-4 border-black rounded-2xl flex items-center justify-center neu-shadow transform -rotate-6 group-hover:rotate-0 transition-transform">
           <FileText size={32} className="text-black" />
        </div>
        <div className="neu-badge bg-primary">
          {type}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black mb-4 flex-grow leading-tight uppercase italic tracking-tighter">
        {title}
      </h3>

      <p className="text-sm text-black/70 font-bold mb-8 leading-relaxed">
        {description}
      </p>

      {/* Meta Info */}
      <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t-4 border-black/5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40">
          <Calendar size={14} />
          {date}
        </div>
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40">
          <FileText size={14} />
          {pages} pages
        </div>
      </div>

      {/* Download Button */}
      <button className="neu-button w-full flex items-center justify-center gap-2 font-black text-sm">
        <Download size={18} />
        Download PDF
      </button>
    </motion.div>
  );
}
