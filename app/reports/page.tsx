import { Metadata } from 'next';
import ReportsClient from '@/components/ReportsClient';

export const metadata: Metadata = {
  title: 'Strategic Reports & Findings | Governance Insights',
  description: 'Evidence-based insights from the Trans Nzoia Pilot. Tracking the intersection of governance, youth identity, and democratic participation.',
  alternates: {
    canonical: '/reports',
  },
};

export default function ReportsPage() {
  return <ReportsClient />;
}
