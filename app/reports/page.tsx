'use client';

import { Download, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ReportCard from '@/components/ReportCard';
import StatCard from '@/components/StatCard';

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: 'VAR 37-38 Movement Manifesto',
      date: 'March 2026',
      description: 'The foundational document outlining VAR 37-38\'s vision, strategy, and action plan for institutionalizing youth power in Kenyan democracy.',
      type: 'Manifesto',
      pages: 24,
    },
    {
      id: 2,
      title: 'Trans Nzoia Townhall Series: Mid-Point Report',
      date: 'April 2026',
      description: 'Impact assessment and learning from the first four wards. Attendance metrics, youth engagement data, and key civic insights.',
      type: 'Progress Report',
      pages: 18,
    },
    {
      id: 3,
      title: 'Digital Resilience: Tech Infrastructure for Democracy',
      date: 'February 2026',
      description: 'How Uamuzi Tech enables seamless civic participation. Data privacy, accessibility, and digital inclusion strategies.',
      type: 'Technical',
      pages: 15,
    },
    {
      id: 4,
      title: 'Youth Political Participation in Kenya: Research Findings',
      date: 'January 2026',
      description: 'Quantitative and qualitative research on barriers and opportunities for youth electoral engagement in Trans Nzoia County.',
      type: 'Research',
      pages: 32,
    },
    {
      id: 5,
      title: 'Partnership Framework: Government, Civil Society, and Tech',
      date: 'December 2025',
      description: 'Detailed documentation of VAR\'s strategic partnerships and collaborative governance model.',
      type: 'Strategic',
      pages: 12,
    },
    {
      id: 6,
      title: 'Youth Champion Training Curriculum',
      date: 'March 2026',
      description: 'Complete training materials, competency frameworks, and ongoing development pathways for Youth Champions.',
      type: 'Training',
      pages: 28,
    },
  ];

  const reportTypes = [
    { type: 'Manifesto', color: 'bg-primary' },
    { type: 'Progress Report', color: 'bg-secondary' },
    { type: 'Technical', color: 'bg-black' },
    { type: 'Research', color: 'bg-primary' },
    { type: 'Strategic', color: 'bg-secondary' },
    { type: 'Training', color: 'bg-black' },
  ];

  const getTypeColor = (type: string) => {
    const found = reportTypes.find((t) => t.type === type);
    return found?.color || 'bg-muted';
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="RESEARCH & IMPACT REPORTS"
        subheadline="Transparent documentation of VAR 37-38's movement. Data-driven insights. Evidence of change. Tools for replication."
        backgroundColor="bg-black"
        textColor="text-background"
      />

      {/* Overview Section */}
      <section className="w-full bg-primary text-foreground py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl font-bold leading-relaxed text-balance">
            Our reports are open-source tools for democracy. We believe in radical transparency and continuous learning. Download, study, adapt, and replicate our frameworks in your community.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-balance">
            Published Documents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reports.map((report, index) => (
              <ReportCard
                key={report.id}
                title={report.title}
                date={report.date}
                description={report.description}
                type={report.type}
                pages={report.pages}
                typeColor={getTypeColor(report.type)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="w-full bg-black text-background py-16 md:py-24 border-y-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-balance">
            Movement Impact So Far
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '1,000+', label: 'Youths Mobilized' },
              { number: '45+', label: 'Partner Organizations' },
              { number: '3', label: 'Counties Active' },
              { number: '50+', label: 'Community Events' },
            ].map((metric, idx) => (
              <StatCard key={idx} number={metric.number} label={metric.label} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-balance">
            Our Research Approach
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Participatory Action Research',
                description: 'Communities aren\'t data sources—they\'re co-researchers. Youth drive our inquiry, interpretation, and action.',
              },
              {
                title: 'Mixed Methods',
                description: 'Quantitative surveys, qualitative interviews, focus groups, and observational studies combine for holistic understanding.',
              },
              {
                title: 'Rapid Feedback Cycles',
                description: 'Every two weeks, findings inform strategy adjustments. Real-time learning enables adaptive implementation.',
              },
              {
                title: 'Open Data Commons',
                description: 'All anonymized datasets are publicly available for academic research, policy advocacy, and movement replication.',
              },
            ].map((item, idx) => (
              <div key={idx} className="stamp-card bg-background">
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary text-foreground py-16 md:py-24 border-t-4 border-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">
            Want to Collaborate?
          </h2>
          <p className="text-lg mb-8">
            Organizations, researchers, and movements: Let's build together. Our frameworks are open. Our data is shared. Our movement is collaborative.
          </p>
          <button className="stamp-button text-lg px-8 py-4">
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}
