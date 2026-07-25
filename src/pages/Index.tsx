import Navbar from "@/components/Navbar";
import SideRail from "@/components/SideRail";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ExecutiveDashboard from "@/components/ExecutiveDashboard";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhySilxor from "@/components/WhySilxor";
import SelectedWork from "@/components/SelectedWork";
import ProcessFlow from "@/components/ProcessFlow";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import StartEngagement from "@/components/StartEngagement";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SideRail />
      <div className="lg:pl-24">
        <div id="home">
          <Hero />
        </div>
        <AnimatedSection delay={0.1}>
          <StatsBar />
        </AnimatedSection>
        <AnimatedSection>
          <ExecutiveDashboard />
        </AnimatedSection>
        <div id="services">
          <AnimatedSection>
            <Services />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Industries />
        </AnimatedSection>
        <AnimatedSection>
          <WhySilxor />
        </AnimatedSection>
        <div id="insights">
          <AnimatedSection>
            <SelectedWork />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <ProcessFlow />
        </AnimatedSection>
        <div id="about">
          <AnimatedSection>
            <FAQ />
          </AnimatedSection>
          <AnimatedSection>
            <Team />
          </AnimatedSection>
        </div>
        <div id="contact">
          <AnimatedSection>
            <StartEngagement />
          </AnimatedSection>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
