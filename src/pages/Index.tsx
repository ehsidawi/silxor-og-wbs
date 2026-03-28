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
      <AnimatedSection>
        <WhatWeDo />
      </AnimatedSection>
      <div id="infrastructure">
        <AnimatedSection>
          <Services />
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <WhoWeServe />
      </AnimatedSection>
      <AnimatedSection>
        <WhyIR4Q />
      </AnimatedSection>
      <div id="software">
        <AnimatedSection>
          <SoftwareAICapabilities />
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
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <div id="contact">
        <AnimatedSection>
          <StartEngagement />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
