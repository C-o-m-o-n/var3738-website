'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import RegistrationForm from '@/components/RegistrationForm';
import StatCard from '@/components/StatCard';
import PartnerCard from '@/components/PartnerCard';
import Image from 'next/image';

export default function DemocracyActivatedPage() {
  const [selectedWard, setSelectedWard] = useState<string | null>(null);

  const wards = [
    { name: 'Saboti', date: 'March 15, 2026', capacity: 45, maxCapacity: 100 },
    { name: 'Kiminini', date: 'March 17, 2026', capacity: 62, maxCapacity: 100 },
    { name: 'Webuye East', date: 'March 19, 2026', capacity: 38, maxCapacity: 100 },
    { name: 'Webuye West', date: 'March 21, 2026', capacity: 71, maxCapacity: 100 },
    { name: 'Bumula', date: 'March 23, 2026', capacity: 54, maxCapacity: 100 },
    { name: 'Kanduyi', date: 'March 25, 2026', capacity: 85, maxCapacity: 100 },
    { name: 'Kimilili', date: 'March 27, 2026', capacity: 42, maxCapacity: 100 },
    { name: 'Bungoma', date: 'March 29, 2026', capacity: 91, maxCapacity: 100 },
    { name: 'Kabuchai', date: 'March 31, 2026', capacity: 67, maxCapacity: 100 },
  ];

  const partners = [
    { name: 'Uamuzi', logo: '🔧' },
    { name: 'CMD Kenya', logo: '📊' },
    { name: 'U.S. Embassy', logo: '🇺🇸' },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="DEMOCRACY ACTIVATED: TRANS NZOIA SERIES"
        subheadline="Converting protest energy into civic oversight and voter registration. Nine wards. One movement. Unstoppable momentum."
        backgroundColor="bg-black"
        textColor="text-background"
      />

      {/* Mission Statement */}
      <section className="w-full bg-primary text-foreground py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl font-bold leading-relaxed text-balance">
            From March through May, we activate democracy in nine wards across Trans Nzoia. Youth champions mobilize their communities for townhall discussions where people directly engage with government accountability and electoral participation.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-balance">
            Register for Your Ward's Townhall
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {wards.map((ward) => (
              <EventCard
                key={ward.name}
                wardName={ward.name}
                date={ward.date}
                capacity={ward.capacity}
                maxCapacity={ward.maxCapacity}
                onRegister={() => setSelectedWard(ward.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-black text-background py-16 md:py-24 border-y-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black mb-12 text-center">
            Strategic Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {partners.map((partner, idx) => (
              <PartnerCard key={partner.name} name={partner.name} logo={partner.logo} index={idx} />
            ))}
          </div>

          <p className="text-center text-sm mt-12 text-muted-foreground">
            Powered by partnerships that believe in youth-led change. Strategic collaboration across civil society, technology, and government.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '9', label: 'Wards Activated' },
              { number: '1,000+', label: 'Expected Registrants' },
              { number: '100%', label: 'Community Reach Goal' },
              { number: '3', label: 'Strategic Partners' },
            ].map((stat, idx) => (
              <StatCard key={idx} number={stat.number} label={stat.label} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* What is a Youth Champion */}
      <section className="w-full bg-primary text-foreground py-16 md:py-24 border-y-4 border-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">
            What's a Youth Champion?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Youth Champions are community leaders who co-facilitate townhalls and drive voter registration in their wards. They bridge government and grassroots, ensuring every voice is heard.
            </p>
            <p>
              Champions receive training, leadership development, and ongoing support. Most importantly, they become part of VAR 37-38's permanent infrastructure for democratic change.
            </p>
            <div className="mt-8 pt-8 border-t-4 border-foreground">
              <p className="font-bold text-xl">
                Mark "Youth Champion" when registering to express your interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedWard && (
        <RegistrationForm
          wardName={selectedWard}
          onClose={() => setSelectedWard(null)}
        />
      )}
    </>
  );
}
