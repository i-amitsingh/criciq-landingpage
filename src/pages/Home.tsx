import Hero from '../components/Hero';
import Features from '../components/Features';
import AppVideo from '../components/AppVideo';
import ForWho from '../components/ForWho';
import Testimonial from '../components/Testimonial';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import DownloadFAB from '../components/DownloadFAB';
import type { Theme } from '../utils/types';

interface Props {
  theme: Theme;
  onNavigate: (page: string) => void;
}

export default function Home({ theme, onNavigate }: Props) {
  return (
    <>
      <main>
        <Hero />
        <AppVideo />
        <Features />
        <ForWho />
        <Testimonial />
        <CTABanner />
        <Footer theme={theme} onNavigate={onNavigate} />
      </main>
      <DownloadFAB />
    </>
  );
}
