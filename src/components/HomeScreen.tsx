import { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DownloadSection from './DownloadSection';
import ShowcaseSection from './ShowcaseSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import { UserConfig } from '../types';

interface HomeScreenProps {
  onStart: (config: UserConfig) => void;
  initialConfig: UserConfig;
}

const HomeScreen = ({ onStart, initialConfig }: HomeScreenProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;