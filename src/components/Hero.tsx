import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe } from "lucide-react";
const Hero = () => {
  return <section className="relative overflow-hidden" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.01'/%3E%3C/svg%3E")`
  }}>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-6">Sovereign digital infrastructure for Iraq engineered locally, hardened globally.</h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">IR4Q delivers end-to-end technology services, from Baghdad-based development to Tier-IV U.S. data centers, ensuring compliance, resilience, and performance for Iraq's most critical systems.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="institutional" size="lg" asChild>
                <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
                  Request Technical Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="minimal" size="lg" asChild>
                <a href="#infrastructure">
                  View Infrastructure Architecture
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                ISO/IEC 27001:2022 Certified
              </span>
              <span>Uptime Institute Tier-IV Ready</span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Partnered with Equinix Ashburn
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="hidden lg:flex items-center justify-center">
            <img src="/placeholder.svg" alt="IR4Q Technologies" className="h-32 w-auto opacity-60" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;