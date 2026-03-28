import { Server, Activity, Lock } from "lucide-react";

const TechBacking = () => {
  return (
    <section id="infrastructure" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Architecture Diagram */}
          <div className="surface-elevated p-4 md:p-5 lg:p-8">
            <div className="space-y-6 md:space-y-8">
              {/* Baghdad PoP */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base md:text-lg">Baghdad Point of Presence</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono truncate">
                    33.3406&deg; N, 44.4009&deg; E
                  </div>
                </div>
              </div>

              {/* Connection Path */}
              <div className="border-l-2 border-dashed border-border pl-6 md:pl-8 ml-6 md:ml-8 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm font-mono">Encrypted Transit Path</span>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  AES-256 encryption • Dedicated fiber • &lt;30s failover
                </div>
              </div>

              {/* Virginia Facility */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-accent flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base md:text-lg">Ashburn Tier-IV Facility</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono truncate">
                    39.0438&deg; N, 77.4874&deg; W
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 border-t border-border">
                <div>
                  <div className="text-xl md:text-2xl font-mono text-primary mb-1">&lt;120ms</div>
                  <div className="text-xs text-muted-foreground">Avg. Latency</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-mono text-primary mb-1">N+2</div>
                  <div className="text-xs text-muted-foreground">Power redundancy</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-mono text-primary mb-1 text-[0.9em] md:text-2xl">99.995%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Description */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display mb-3 md:mb-4">
                Dual-Continent Resilience Architecture
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                IR4Q operates a distributed infrastructure model ensuring data sovereignty while maintaining enterprise-grade reliability through U.S. Tier-IV certification.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="surface-elevated p-3 md:p-4 flex gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-lg mb-2">American Infrastructure Standards</h3>
                  <p className="text-institutional">
                    Built on Uptime Institute Tier-IV certified facilities with SOC 2 Type II attestation. All systems undergo continuous compliance monitoring and annual third-party audits.
                  </p>
                </div>
              </div>

              <div className="surface-elevated p-3 md:p-4 flex gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-lg mb-2">Iraqi Operational Control</h3>
                  <p className="text-institutional">
                    Local engineering teams maintain operational sovereignty while leveraging global infrastructure. All control plane operations remain within Iraqi jurisdiction with U.S. infrastructure serving as resilient backing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-6">
              <h3 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">
                Compliance & Certifications
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["ISO/IEC 27001:2022", "SOC 2 Type II", "GDPR-Ready", "Tier-IV Certified"].map((cert) => (
                  <span 
                    key={cert} 
                    className="px-3 py-1.5 border border-border text-xs font-mono inline-block"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBacking;
