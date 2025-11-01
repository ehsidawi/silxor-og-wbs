import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechBacking from "@/components/TechBacking";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TechBacking />
      <ProcessFlow />
      <Footer />
    </div>
  );
};

export default Index;
