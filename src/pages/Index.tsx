import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import SoftwareAICapabilities from "@/components/SoftwareAICapabilities";
import IdentityServices from "@/components/IdentityServices";
import ServicePackages from "@/components/ServicePackages";
import FAQ from "@/components/FAQ";
import TechBacking from "@/components/TechBacking";
import ProcessFlow from "@/components/ProcessFlow";
import Team from "@/components/Team";
import StartEngagement from "@/components/StartEngagement";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <StatsBar />
      <AnimatedSection>
        <ProcessFlow />
      </AnimatedSection>
      <AnimatedSection>
        <TechBacking />
      </AnimatedSection>
      <div id="infrastructure">
        <AnimatedSection>
          <Services />
        </AnimatedSection>
      </div>
      <div id="software">
        <AnimatedSection>
          <SoftwareAICapabilities />
        </AnimatedSection>
      </div>
      <div id="identity">
        <AnimatedSection>
          <IdentityServices />
        </AnimatedSection>
      </div>
      <div id="packages">
        <AnimatedSection>
          <ServicePackages />
        </AnimatedSection>
      </div>
      <div id="about">
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
      </div>
      <div id="contact">
        <AnimatedSection>
          <StartEngagement />
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
