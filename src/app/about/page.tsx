import { Metadata } from 'next';
import AboutBlockSection from '../_components/About/AboutBlockSection';

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  return (
    <main className="min-h-[1080px] lg:max-w-7xl max-w-5xl mx-auto animate-animeDown lg:py-4">
      <AboutBlockSection />
    </main>
  );
}
