import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import WhyIR4Q from "@/components/WhyIR4Q";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import SoftwareAICapabilities from "@/components/SoftwareAICapabilities";
import IdentityServices from "@/components/IdentityServices";
import ServicePackages from "@/components/ServicePackages";
import ProcessFlow from "@/components/ProcessFlow";
import TechBacking from "@/components/TechBacking";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import StartEngagement from "@/components/StartEngagement";
import PressAnnouncements from "@/components/PressAnnouncements";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <AnimatedSection delay={0.1}>
        <StatsBar />
      </AnimatedSection>
      <AnimatedSection>
        <WhatWeDo />
      </AnimatedSection>
      <AnimatedSection>
        <WhoWeServe />
      </AnimatedSection>
      <AnimatedSection>
        <WhyIR4Q />
      </AnimatedSection>
      <AnimatedSection>
        <SelectedWork />
      </AnimatedSection>
      <div id="infrastructure">
        <AnimatedSection>
          <Services />
        </AnimatedSection>
      </div>
      <div id="software">
        <div id="ai">
          <AnimatedSection>
            <SoftwareAICapabilities />
          </AnimatedSection>
        </div>
      </div>
      <div id="identity">
        <AnimatedSection>
          <IdentityServices />
        </AnimatedSection>
      </div>
      <div id="consulting">
        <div id="packages">
          <AnimatedSection>
            <ServicePackages />
          </AnimatedSection>
        </div>
      </div>
      <AnimatedSection>
        <ProcessFlow />
      </AnimatedSection>
      <AnimatedSection>
        <TechBacking />
      </AnimatedSection>
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
      <AnimatedSection>
        <PressAnnouncements />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
