'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  backgroundColor = 'bg-background',
  textColor = 'text-foreground',
}: HeroSectionProps) {
  return (
    <section className={`w-full ${backgroundColor} ${textColor} py-20 px-4 md:py-32 overflow-hidden relative border-b-4 border-black`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <div className="inline-block px-4 py-2 bg-secondary border-4 border-black font-black uppercase tracking-widest mb-8 neu-shadow transform -rotate-2">
            Movement in Action
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] mb-8 tracking-tighter">
            {headline.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 1 ? 'bg-primary px-4 py-1 border-4 border-black inline-block transform rotate-1 m-1' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {subheadline && (
            <p className="text-xl md:text-2xl font-bold leading-tight mb-12 max-w-xl">
              {subheadline}
            </p>
          )}
          
          <div className="flex flex-wrap gap-6">
            <button className="neu-button text-lg px-10 py-4 transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all">
              Start building
            </button>
            <button className="neu-button-outline text-lg px-10 py-4 transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all">
              Learn more
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative hidden lg:block"
        >
          <div className="relative w-full aspect-square bg-white border-4 border-black rounded-[3rem] neu-shadow-lg p-10 flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-black flex items-center px-6 gap-2">
              <div className="w-3 h-3 bg-[#ff6b6b] rounded-full border-2 border-white"></div>
              <div className="w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
              <div className="w-3 h-3 bg-accent rounded-full border-2 border-white"></div>
            </div>
            
            <div className="w-48 h-48 bg-primary border-4 border-black rounded-full flex items-center justify-center relative overflow-hidden group">
               <span className="text-8xl font-black italic transform -rotate-12">VAR</span>
               <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-black italic uppercase">Power</span>
               </div>
            </div>

            <div className="mt-12 text-center text-4xl font-black">
              YOUTH-LED <br />
              <span className="text-secondary italic">REVOLUTION</span>
            </div>
          </div>
          
          {/* Decorative floating blocks */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent border-4 border-black rounded-2xl rotate-12 neu-shadow"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary border-4 border-black rounded-full -rotate-6 neu-shadow"></div>
        </motion.div>
      </div>
    </section>
  );
}
