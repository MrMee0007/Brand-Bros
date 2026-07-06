import HeroSection         from "../components/HeroSection";
import StatsMarquee        from "../components/StatsMarquee";
import ServicesSection     from "../components/ServicesSection";
import ProcessSection      from "../components/ProcessSection";
import FloatingReels3D     from "../components/FloatingReels3D";
import ReelSection         from "../components/ReelSection";
import WhyUsSection        from "../components/WhyUsSection";
import WorksPreview        from "../components/WorksPreview";
import PricingSection      from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonalsSection";
import CTA                 from "../components/CTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsMarquee />
      <ServicesSection />
      <ProcessSection />
      {/* 3D floating reel showcase between sections */}
      <FloatingReels3D />
      {/* <ReelSection /> */}
      <WhyUsSection />
      {/* <WorksPreview /> */}
      <PricingSection />
      <TestimonialsSection />
      <CTA />
    </div>
  );
}