import { Metadata } from 'next';
import TechClient from '@/components/TechClient';

export const metadata: Metadata = {
  title: 'Digital Resilience & Sovereignty | Civic Tech',
  description: 'Leveraging the Uamuzi platform for secure, digital civic participation and movement continuity.',
  alternates: {
    canonical: '/tech',
  },
};

export default function TechPage() {
  return <TechClient />;
}
