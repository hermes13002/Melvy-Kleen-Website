import HeroSection from '../components/landing/HeroSection';
import ServicesGrid from '../components/landing/ServicesGrid';
import BeforeAfterSection from '../components/landing/BeforeAfterSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FaqSection from '../components/landing/FaqSection';
import CtaSection from '../components/landing/CtaSection';

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <BeforeAfterSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
        </>
    );
}
