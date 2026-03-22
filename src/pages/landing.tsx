import { useState } from "react";
import LeadOverlay from "@/components/LeadOverlay";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import PainSection from "@/components/PainSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import ProcessSection from "@/components/ProcessSection";
import AuthoritySection from "@/components/AuthoritySection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [overlayVisible, setOverlayVisible] = useState(true);

  return (
    <div className={overlayVisible ? "overflow-hidden h-screen" : ""}>
      <LeadOverlay visible={overlayVisible} onSuccess={() => setOverlayVisible(false)} />
      <main id="main-content" className="bg-white">
        <HeroSection />
        <VideoSection shouldAutoPlay={!overlayVisible} />
        <PainSection />
        <BenefitsSection />
        <CtaSection />
        <ProcessSection />
        <AuthoritySection />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
