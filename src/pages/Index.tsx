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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhatWeDo />
      <Services />
      <SoftwareAICapabilities />
      <ServicePackages />
      <FAQ />
      <WhoWeServe />
      <WhyIR4Q />
      <TechBacking />
      <ProcessFlow />
      <Team />
      <StartEngagement />
      <Footer />
    </div>
  );
};

export default Index;
