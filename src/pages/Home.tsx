import Hero from '../components/Hero';
import Features from '../components/Features';
import ForWho from '../components/ForWho';
import Testimonial from '../components/Testimonial';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import DownloadFAB from '../components/DownloadFAB';
import type { Theme } from '../utils/types';

interface Props {
  theme: Theme;
}

export default function Home({ theme }: Props) {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <ForWho />
        <Testimonial />
        <CTABanner />
        <Footer theme={theme} />
      </main>
      <DownloadFAB />
    </>
  );
}
