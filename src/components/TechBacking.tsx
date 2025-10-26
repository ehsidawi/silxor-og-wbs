import { Server, Activity, Lock } from "lucide-react";

const TechBacking = () => {
  return (
    <section id="infrastructure" className="py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Architecture Diagram */}
          <div className="surface-elevated p-12">
            <div className="space-y-8">
              {/* Baghdad PoP */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center">
                  <Server className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-display text-lg">Baghdad Point of Presence</div>
                  <div className="text-sm text-muted-foreground font-mono">33.3152&deg; N, 44.3661&deg; E</div>
                </div>
              </div>

              {/* Connection Path */}
              <div className="border-l-2 border-dashed border-border pl-8 ml-8 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono">Encrypted Transit Path</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  AES-256 encryption • Dedicated fiber • &lt;30s failover
                </div>
              </div>

              {/* Virginia Facility */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border-2 border-accent flex items-center justify-center">
                  <Server className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-display text-lg">Ashburn Tier-IV Facility</div>
                  <div className="text-sm text-muted-foreground font-mono">39.0438&deg; N, 77.4874&deg; W</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-mono text-primary mb-1">42ms</div>
                  <div className="text-xs text-muted-foreground">Average latency</div>
                </div>
                <div>
                  <div className="text-2xl font-mono text-primary mb-1">N+2</div>
                  <div className="text-xs text-muted-foreground">Power redundancy</div>
                </div>
                <div>
                  <div className="text-2xl font-mono text-primary mb-1">99.995%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display-lg md:text-4xl font-display mb-6">
                Dual-Continent Resilience Architecture
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IR4Q operates a distributed infrastructure model ensuring data sovereignty while maintaining enterprise-grade reliability through U.S. Tier-IV certification.
              </p>
            </div>

            <div className="space-y-6">
              <div className="surface-elevated p-6 flex gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">American Infrastructure Standards</h3>
                  <p className="text-institutional">
                    Built on Uptime Institute Tier-IV certified facilities with SOC 2 Type II attestation. All systems undergo continuous compliance monitoring and annual third-party audits.
                  </p>
                </div>
              </div>

              <div className="surface-elevated p-6 flex gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Iraqi Operational Control</h3>
                  <p className="text-institutional">
                    Local engineering teams maintain operational sovereignty while leveraging global infrastructure. All control plane operations remain within Iraqi jurisdiction with U.S. infrastructure serving as resilient backing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-display mb-4">Compliance & Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {["ISO/IEC 27001:2022", "SOC 2 Type II", "GDPR-Ready", "Tier-IV Certified"].map((cert) => (
                  <span key={cert} className="px-3 py-1 border border-border text-xs font-mono">
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
