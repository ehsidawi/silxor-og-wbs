import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe } from "lucide-react";
import ir4qLogo from "@/assets/ir4q-logo.png";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden section-spacing"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.01'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container-content">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-6">
              Iraq's Sovereign Technology Company
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl leading-relaxed">
              IR4Q designs, builds, secures, and operates the digital systems powering Iraq's most critical institutions — from sovereign cloud infrastructure to custom enterprise software and private AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
              <Button variant="institutional" size="lg" className="touch-target w-full sm:w-auto" asChild>
                <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
                  Request Technical Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="touch-target w-full sm:w-auto" asChild>
                <a href="#what-we-do">
                  Explore Our Services
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-2 touch-target">
                <Shield className="w-4 h-4 flex-shrink-0" />
                <span>ISO/IEC 27001:2022 Certified</span>
              </span>
              <span className="touch-target flex items-center">
                Uptime Institute Tier-IV Ready
              </span>
              <span className="flex items-center gap-2 touch-target">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span>Partnered with Equinix Ashburn</span>
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img src={ir4qLogo} alt="IR4Q Technologies" className="h-32 w-auto opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
