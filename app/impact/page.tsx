import { Metadata } from 'next';
import ImpactClient from '@/components/ImpactClient';

export const metadata: Metadata = {
  title: 'Trans Nzoia Pilot Results | Civic Impact',
  description: 'Over 1,000 youth activated across 5 wards in Trans Nzoia. View the Ground Engagement Report and movement health metrics.',
  alternates: {
    canonical: '/impact',
  },
};

export default function ImpactPage() {
  return <ImpactClient />;
}
