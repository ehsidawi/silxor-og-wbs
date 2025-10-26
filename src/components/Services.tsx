import { Cloud, Shield, Server, Wrench, Database, Gauge } from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Sovereign Cloud Hosting",
    description: "Enterprise-grade cloud infrastructure with complete data sovereignty. Iraqi-operated control planes with U.S.-grade redundancy protocols.",
    technical: "Hosted in Ashburn, VA • &lt;45ms to Baghdad • 99.995% SLA",
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
    technical: "GDPR-ready • Daily automated backups • &lt;30s RTO • RPO: 15min",
  },
  {
    icon: Wrench,
    title: "Managed Operations",
    description: "24/7 Iraqi-based NOC with escalation to U.S. engineering teams. Proactive monitoring, incident response, and capacity planning.",
    technical: "Baghdad NOC • Virginia Tier-3 support • &lt;15min P1 response",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description: "Continuous infrastructure optimization through real-time telemetry, predictive scaling, and latency reduction protocols.",
    technical: "Real-time metrics • Predictive autoscaling • 99.9th percentile &lt;100ms",
  },
];

const Services = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-display-lg md:text-5xl font-display mb-4">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl">
            Comprehensive technology infrastructure engineered for mission-critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="surface-elevated p-8 accent-border hover:border-l-4 transition-all"
              >
                <Icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-normal mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {capability.description}
                </p>
                <p className="text-sm font-mono text-primary/80">
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
