import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>U.S. Tier-IV Data Centers</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center space-y-8">
          <h1 className="text-display-xl md:text-[3.5rem] lg:text-[4rem] font-display leading-tight">
            Secure, sovereign infrastructure
            <br />
            for Iraq's digital future.
          </h1>

          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            End-to-end technology services — engineered in Baghdad, hardened in U.S. Tier-IV data centers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="institutional" size="lg" asChild>
              <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
                Request Technical Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="minimal" size="lg">
              View Infrastructure
            </Button>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by Iraqi financial institutions, government agencies, and critical infrastructure providers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40">
            <div className="h-8 flex items-center justify-center text-muted-foreground text-sm font-mono">
              EQUINIX
            </div>
            <div className="h-8 flex items-center justify-center text-muted-foreground text-sm font-mono">
              CORESITE
            </div>
            <div className="h-8 flex items-center justify-center text-muted-foreground text-sm font-mono">
              ISO 27001
            </div>
            <div className="h-8 flex items-center justify-center text-muted-foreground text-sm font-mono">
              SOC 2 TYPE II
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
