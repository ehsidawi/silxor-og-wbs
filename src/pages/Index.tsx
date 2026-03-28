import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import SoftwareAICapabilities from "@/components/SoftwareAICapabilities";
import ServicePackages from "@/components/ServicePackages";
import FAQ from "@/components/FAQ";
import WhoWeServe from "@/components/WhoWeServe";
import WhyIR4Q from "@/components/WhyIR4Q";
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
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <StatsBar />
      </AnimatedSection>
      <AnimatedSection>
        <ProcessFlow />
      </AnimatedSection>
      <AnimatedSection>
        <WhatWeDo />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <SoftwareAICapabilities />
      </AnimatedSection>
      <AnimatedSection>
        <ServicePackages />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <WhoWeServe />
      </AnimatedSection>
      <AnimatedSection>
        <WhyIR4Q />
      </AnimatedSection>
      <AnimatedSection>
        <TechBacking />
      </AnimatedSection>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <AnimatedSection>
        <StartEngagement />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
