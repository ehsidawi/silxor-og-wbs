import { Globe, TrendingUp, Users } from "lucide-react";

const TechBacking = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="glass-panel p-12 rounded-3xl relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              
              {/* Connection visualization */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-3 flex items-center justify-center animate-glow">
                      <Globe className="w-10 h-10" />
                    </div>
                    <p className="font-semibold">Baghdad</p>
                    <p className="text-sm text-muted-foreground">Iraq Hub</p>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary via-accent to-primary mx-8 relative">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-3 flex items-center justify-center animate-glow" style={{ animationDelay: '1s' }}>
                      <Globe className="w-10 h-10" />
                    </div>
                    <p className="font-semibold">Virginia</p>
                    <p className="text-sm text-muted-foreground">U.S. Hub</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">2</div>
                    <p className="text-xs text-muted-foreground">Data Centers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">&lt;50ms</div>
                    <p className="text-xs text-muted-foreground">Latency</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                    <p className="text-xs text-muted-foreground">Redundancy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Dual-Continent</span> Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bridging two worlds with enterprise-grade technology. Our infrastructure spans Baghdad and Virginia, ensuring low-latency access and complete data redundancy.
            </p>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">American Standards</h3>
                  <p className="text-muted-foreground text-sm">Built on U.S. enterprise infrastructure with tier-3 data center certifications.</p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Iraqi Expertise</h3>
                  <p className="text-muted-foreground text-sm">Local teams understanding regional needs, global teams ensuring excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBacking;
