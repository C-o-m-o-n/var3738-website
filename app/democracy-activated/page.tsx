import { Metadata } from 'next';
import DemocracyActivatedClient from '@/components/DemocracyActivatedClient';

export const metadata: Metadata = {
  title: 'Democracy Activated | The 3-Stage Lifecycle',
  description: "Explore our 'Movement-to-System' methodology: Streets, Ideology, and Technology. Transforming youth energy into structured democratic participation.",
  alternates: {
    canonical: '/democracy-activated',
  },
};

export default function DemocracyActivatedPage() {
  return <DemocracyActivatedClient />;
}
