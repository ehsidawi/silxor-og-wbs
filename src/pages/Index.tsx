import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import SoftwareAICapabilities from "@/components/SoftwareAICapabilities";
import WhoWeServe from "@/components/WhoWeServe";
import WhyIR4Q from "@/components/WhyIR4Q";
import TechBacking from "@/components/TechBacking";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <SoftwareAICapabilities />
      <WhoWeServe />
      <WhyIR4Q />
      <TechBacking />
      <ProcessFlow />
      <Footer />
    </div>
  );
};

export default Index;
