import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechBacking from "@/components/TechBacking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TechBacking />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
