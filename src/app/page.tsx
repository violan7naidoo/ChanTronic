
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import GallerySection from '@/components/sections/GallerySection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
