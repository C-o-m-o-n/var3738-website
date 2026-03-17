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
  typeColor,
  index,
}: ReportCardProps) {
  return (
    <motion.div
      className="stamp-card bg-background flex flex-col hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Report Type Badge */}
      <div className={`w-fit px-3 py-2 ${typeColor} text-foreground rounded-none border-2 border-foreground font-bold text-xs mb-4`}>
        {type}
      </div>

      {/* Content */}
      <h3 className="text-xl font-black mb-3 flex-grow">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-6">
        {description}
      </p>

      {/* Meta Info */}
      <div className="space-y-2 mb-6 pb-6 border-t-4 border-foreground pt-4">
        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
          <Calendar size={16} />
          {date}
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
          <FileText size={16} />
          {pages} pages
        </div>
      </div>

      {/* Download Button */}
      <button className="w-full stamp-button flex items-center justify-center gap-2 font-bold text-sm hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow">
        <Download size={18} />
        Download PDF
      </button>
    </motion.div>
  );
}
