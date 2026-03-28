import { Server, Activity, Lock } from "lucide-react";

const TechBacking = () => {
  return (
    <section id="infrastructure" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0D1017' }}>
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Architecture Diagram */}
          <div className="surface-elevated" style={{ padding: 32 }}>
            <div className="space-y-8">
              {/* Baghdad PoP */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 relative"
                  style={{ width: 56, height: 56, border: '1px solid rgba(201,168,76,0.4)', backgroundColor: '#080A0F' }}
                >
                  <div className="relative pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C9A84C' }} />
                </div>
                <div>
                  <div className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8' }}>Baghdad Point of Presence</div>
                  <div className="font-mono font-[400]" style={{ fontSize: 11, color: '#8A8F9E' }}>
                    33.3406&deg; N, 44.4009&deg; E
                  </div>
                </div>
              </div>

              {/* Connection Path */}
              <div style={{ borderLeft: '1px dashed rgba(201,168,76,0.4)', paddingLeft: 28, marginLeft: 28, paddingTop: 8, paddingBottom: 8 }}>
                <div className="flex items-center gap-3 mb-2">
                  <Lock style={{ width: 16, height: 16, color: '#C9A84C' }} />
                  <span className="font-mono font-[400]" style={{ fontSize: 12, color: '#F0EDE8' }}>Encrypted Transit Path</span>
                </div>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E' }}>
                  AES-256 encryption • Dedicated fiber • &lt;30s failover
                </p>
              </div>

              {/* Virginia Facility */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 relative"
                  style={{ width: 56, height: 56, border: '1px solid rgba(42,157,92,0.4)', backgroundColor: '#080A0F' }}
                >
                  <div className="relative pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#2A9D5C' }} />
                </div>
                <div>
                  <div className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8' }}>Ashburn Tier-IV Facility</div>
                  <div className="font-mono font-[400]" style={{ fontSize: 11, color: '#8A8F9E' }}>
                    39.0438&deg; N, 77.4874&deg; W
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Technical Description */}
          <div className="space-y-8">
            <div>
              <div className="section-eyebrow">ARCHITECTURE</div>
              <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: '#F0EDE8', marginBottom: 16 }}>
                Dual-Continent Resilience Architecture
              </h2>
              <p className="font-body font-[300]" style={{ fontSize: 16, color: '#8A8F9E', lineHeight: 1.7 }}>
                IR4Q operates a distributed infrastructure model ensuring data sovereignty while maintaining enterprise-grade reliability through U.S. Tier-IV certification.
              </p>
            </div>

            <div className="space-y-4">
              <div className="surface-elevated flex gap-4" style={{ padding: 24 }}>
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 48, height: 48, border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Activity style={{ width: 24, height: 24, color: '#C9A84C' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8', marginBottom: 8 }}>American Infrastructure Standards</h3>
                  <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', lineHeight: 1.7 }}>
                    Built on Uptime Institute Tier-IV certified facilities with SOC 2 Type II attestation. All systems undergo continuous compliance monitoring and annual third-party audits.
                  </p>
                </div>
              </div>

              <div className="surface-elevated flex gap-4" style={{ padding: 24 }}>
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 48, height: 48, border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Server style={{ width: 24, height: 24, color: '#C9A84C' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8', marginBottom: 8 }}>Iraqi Operational Control</h3>
                  <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', lineHeight: 1.7 }}>
                    Local engineering teams maintain operational sovereignty while leveraging global infrastructure. All control plane operations remain within Iraqi jurisdiction with U.S. infrastructure serving as resilient backing.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: 16 }}>
              <h3 className="font-body font-[400] uppercase" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#8A8F9E', marginBottom: 16 }}>
                Compliance & Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {["ISO/IEC 27001:2022", "SOC 2 Type II", "GDPR-Ready", "Tier-IV Certified"].map((cert) => (
                  <span key={cert} className="badge-pill">
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
