'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import StatCard from '@/components/StatCard';
import PartnersSection from '@/components/PartnersSection';

const WARD_FINDINGS = [
  {
    ward: 'Matisi',
    issues: ['CDF Ineffectiveness', 'Voter Frustration', 'Ethnic Favoritism', 'Boundary Disputes'],
    summary: 'One of the most complex governance regions with high political exploitation of unemployed youth.'
  },
  {
    ward: 'Sikhendu',
    issues: ['Maternal Health Cutbacks', 'School Fee Barriers', 'Gender-Based Violence'],
    summary: 'Significant social barriers affecting families and access to education.'
  },
  {
    ward: 'Saboti',
    issues: ['Youth Unemployment', 'Limited Credit Access', 'Resource Mismanagement'],
    summary: 'Economic stagnation remains a primary concern for the youth population.'
  },
  {
    ward: 'Chepchoina',
    issues: ['ID Regularities', 'Electoral Trust', 'Foreign Participation Allegations'],
    summary: 'Critical challenges in electoral administration and citizen identity verification.'
  },
  {
    ward: 'Kitale Town (Polytechnic)',
    issues: ['Academic Facility Gaps', 'Skepticism of Tech Voting', 'Relatable Civic Ed Needs'],
    summary: 'The student population demands more relatable, youth-culture-oriented civic education.'
  }
];

export default function ReportsClient() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection
        headline="Strategic Reports & Findings"
        subheadline="Evidence-based insights from the Trans Nzoia Pilot. Tracking the intersection of governance and democratic participation."
        imageSrc="/trans-nzoia-townhall/tnts-image06.jpeg"
      />

      {/* Main Implications */}
      <section className="w-full py-32 relative overflow-hidden">
        <div className="glow-orb top-0 right-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-10 font-black tracking-tighter">
                Key <br />
                <span className="text-primary italic">Implications</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { title: 'The Crisis of Identity', desc: 'IDs are being used as tools of exclusion rather than inclusion.' },
                   { title: 'Information Poverty', desc: 'Youth are disconnected from official government communication channels.' },
                   { title: 'Economic Despair', desc: 'Unemployment is the primary driver of political radicalization.' }
                 ].map((item, i) => (
                   <div key={i} className="modern-card p-6 border-l-4 border-primary bg-white/5">
                      <h4 className="font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { number: '5', label: 'Wards Analyzed' },
                 { number: '120+', label: 'Interviews' },
                 { number: '15', label: 'Core Pain Points' },
                 { number: '1', label: 'Unified Agenda' },
               ].map((stat, idx) => (
                 <StatCard key={idx} number={stat.number} label={stat.label} index={idx} />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ward Granularity Table */}
      <section className="w-full py-32 bg-black">
         <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-black mb-16 tracking-tighter italic uppercase text-center">Ward Granularity</h3>
            <div className="grid grid-cols-1 gap-8">
               {WARD_FINDINGS.map((w, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="modern-card p-10 group"
                 >
                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                       <h4 className="text-4xl font-black tracking-tighter text-primary">{w.ward}</h4>
                       <div className="flex gap-2">
                          {w.issues.map((issue, j) => (
                            <span key={j} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-white/40">
                              {issue}
                            </span>
                          ))}
                       </div>
                    </div>
                    <p className="text-xl text-white/60 font-medium leading-relaxed italic">
                      "{w.summary}"
                    </p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <PartnersSection />
    </div>
  );
}
