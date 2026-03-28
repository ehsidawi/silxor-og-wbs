import { Cloud, Shield, Server, Wrench, Database, Gauge } from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Sovereign Cloud Hosting",
    description: "Enterprise-grade cloud infrastructure with complete data sovereignty. Iraqi-operated control planes with U.S.-grade redundancy protocols.",
    technical: "Hosted in Ashburn, VA • <120ms to Baghdad • 99.995% SLA",
  },
  {
    icon: Shield,
    title: "Critical Infrastructure Security",
    description: "Military-grade security architecture designed for financial institutions and government agencies. Continuous threat monitoring and compliance automation.",
    technical: "ISO 27001 • SOC 2 Type II • AES-256 encryption at rest and in transit",
  },
  {
    icon: Server,
    title: "Dedicated Infrastructure",
    description: "Bare-metal servers and private cloud configurations optimized for regulated workloads requiring physical isolation and audit trails.",
    technical: "Tier-IV certified • N+2 power redundancy • 2x network paths",
  },
  {
    icon: Database,
    title: "Data Residency & Compliance",
    description: "Structured data management solutions ensuring regulatory compliance across Iraqi and international frameworks with automated backup protocols.",
    technical: "GDPR-ready • Daily automated backups • <30s RTO • RPO: 15min",
  },
  {
    icon: Wrench,
    title: "Managed Operations",
    description: "24/7 Iraqi-based NOC with escalation to U.S. engineering teams. Proactive monitoring, incident response, and capacity planning.",
    technical: "Baghdad NOC • Virginia Tier-3 support • <15min P1 response",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description: "Continuous infrastructure optimization through real-time telemetry, predictive scaling, and latency reduction protocols.",
    technical: "Real-time metrics • Predictive autoscaling • 99.9th percentile <100ms",
  },
];

const Services = () => {
  return (
    <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">INFRASTRUCTURE</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            Infrastructure Capabilities
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            Enterprise-grade sovereign cloud and security infrastructure — the foundation everything else is built on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="surface-elevated" style={{ padding: 20 }}>
                <Icon className="mb-3" style={{ width: 24, height: 24, color: '#C9A84C' }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
                  {capability.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.65, marginBottom: 12 }}>
                  {capability.description}
                </p>
                <p className="font-mono font-[400]" style={{ fontSize: 10, color: '#C9A84C', opacity: 0.7, letterSpacing: '0.05em' }}>
                  {capability.technical}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
