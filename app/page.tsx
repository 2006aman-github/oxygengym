import PageWrapper from '@/components/PageWrapper';
import Navigation from '@/components/Navigation';
import ModernHero from '@/components/ModernHero';
import CommunityShowcase from '@/components/CommunityShowcase';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import OneLiner from "@/components/OneLiner";

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-background text-foreground">
        <Navigation />
        <ModernHero />
        <OneLiner />
        <CommunityShowcase />
        <PricingSection />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </PageWrapper>
  );
}
