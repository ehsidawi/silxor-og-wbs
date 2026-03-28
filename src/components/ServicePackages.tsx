import { Check, Star } from "lucide-react";

interface PackageCard {
  name: string;
  tagline: string;
  specs: string[];
  cta: string;
  popular?: boolean;
}

const PackageCardComponent = ({ pkg }: { pkg: PackageCard }) => (
  <div
    className="relative flex flex-col"
    style={{
      backgroundColor: '#0D1017',
      border: pkg.popular ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(255,255,255,0.06)',
      borderRadius: 4,
      padding: 32,
      transition: 'all 250ms ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
      e.currentTarget.style.backgroundColor = '#12161E';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = pkg.popular ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)';
      e.currentTarget.style.backgroundColor = '#0D1017';
    }}
  >
    {pkg.popular && (
      <div
        className="absolute font-mono font-[400] uppercase"
        style={{
          top: 0,
          right: 0,
          backgroundColor: '#C9A84C',
          color: '#080A0F',
          fontSize: 9,
          letterSpacing: '0.15em',
          padding: '4px 10px',
          borderRadius: '0 4px 0 4px',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Star style={{ width: 10, height: 10 }} /> Most Popular
      </div>
    )}
    <h4 className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8', marginBottom: 6 }}>{pkg.name}</h4>
    <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', marginBottom: 24 }}>{pkg.tagline}</p>
    <ul className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
      {pkg.specs.map((spec, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check style={{ width: 16, height: 16, color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
          <span className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E' }}>{spec}</span>
        </li>
      ))}
    </ul>
    <a
      href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center font-mono font-[400] uppercase transition-all duration-200"
      style={{
        fontSize: 11,
        letterSpacing: '0.1em',
        padding: '12px 20px',
        borderRadius: 2,
        ...(pkg.popular
          ? { backgroundColor: '#C9A84C', color: '#080A0F' }
          : { border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', backgroundColor: 'transparent' }),
      }}
      onMouseEnter={(e) => {
        if (pkg.popular) {
          e.currentTarget.style.backgroundColor = '#E2C06A';
        } else {
          e.currentTarget.style.borderColor = '#C9A84C';
          e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (pkg.popular) {
          e.currentTarget.style.backgroundColor = '#C9A84C';
        } else {
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {pkg.cta}
    </a>
  </div>
);

const infraPackages: PackageCard[] = [
  {
    name: "Sovereign Starter",
    tagline: "For startups and small teams entering sovereign hosting",
    specs: [
      "2 vCPU / 8GB RAM / 100GB SSD",
      "Shared NOC monitoring",
      "99.9% Uptime SLA",
      "Standard support — <4hr P1 response",
      "Weekly backups",
    ],
    cta: "Get Started",
  },
  {
    name: "Sovereign Business",
    tagline: "For growing enterprises and regulated fintechs",
    specs: [
      "8 vCPU / 32GB RAM / 500GB SSD",
      "Dedicated NOC coverage",
      "99.99% Uptime SLA",
      "Priority support — <1hr P1 response",
      "Daily backups + <30s RTO",
      "Compliance reporting",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Sovereign Enterprise",
    tagline: "For government, banking, and critical infrastructure",
    specs: [
      "Dedicated bare-metal or private cloud",
      "24/7 Baghdad + Virginia dual-NOC",
      "99.995% Uptime SLA",
      "<15min P1 response",
      "Custom redundancy architecture",
      "Full compliance documentation + audit support",
      "Air-gap available on request",
    ],
    cta: "Request Assessment",
  },
];

const softwarePackages: PackageCard[] = [
  {
    name: "Build Essentials",
    tagline: "For MVPs, internal tools, and first digital products",
    specs: [
      "Up to 5 delivery sprints",
      "Web or mobile platform (one)",
      "Basic QA and UAT",
      "3 months post-launch support",
    ],
    cta: "Start a Project",
  },
  {
    name: "Build Professional",
    tagline: "For enterprise platforms and government portals",
    specs: [
      "Up to 15 delivery sprints",
      "Web + mobile + API development",
      "Full QA pipeline + security review",
      "6 months managed support + SLA",
      "Integration with third-party systems",
    ],
    cta: "Start a Project",
    popular: true,
  },
  {
    name: "Build Enterprise",
    tagline: "For mission-critical national systems",
    specs: [
      "Dedicated engineering team",
      "Multi-platform + full systems integration",
      "Security audit + compliance documentation",
      "12 months managed support",
      "Custom SLA and delivery governance",
    ],
    cta: "Request Assessment",
  },
];

const aiPackages: PackageCard[] = [
  {
    name: "AI Foundation",
    tagline: "For organizations deploying their first sovereign AI system",
    specs: [
      "1 sovereign LLM deployment (7B–14B)",
      "Basic RAG pipeline + document ingestion",
      "Hosted on IR4Q sovereign infrastructure",
      "Standard monitoring dashboard",
      "No data leaves Iraqi control",
    ],
    cta: "Get Started",
  },
  {
    name: "AI Professional",
    tagline: "For enterprise automation and intelligent operations",
    specs: [
      "Up to 3 LLM deployments",
      "Multi-source RAG + vector search",
      "Agentic workflow automation (up to 5 workflows)",
      "Model monitoring + retraining pipeline",
      "API integration with existing systems",
      "No data leaves Iraqi control",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "AI Sovereign Enterprise",
    tagline: "For government AI and national-scale intelligent systems",
    specs: [
      "Unlimited model deployments",
      "Full agentic infrastructure + orchestration layer",
      "Air-gap deployment available",
      "Custom model fine-tuning + data pipelines",
      "Dedicated AI engineering team",
      "Full audit trail and explainability reporting",
    ],
    cta: "Request Assessment",
  },
];

const consultingPackages: PackageCard[] = [
  {
    name: "Advisory Sprint",
    tagline: "2-week focused engagement",
    specs: [
      "Architecture or security assessment",
      "Written findings and recommendations report",
      "Executive summary for leadership",
      "1 follow-up strategy session",
      "Deliverable: Assessment Report",
    ],
    cta: "Book a Sprint",
  },
  {
    name: "Transformation Program",
    tagline: "3-month modernization engagement",
    specs: [
      "Full digital transformation roadmap",
      "Zero Trust and IAM architecture design",
      "Vendor selection and procurement advisory",
      "Program governance and delivery framework",
      "Deliverable: Transformation Playbook",
    ],
    cta: "Start Program",
  },
  {
    name: "Strategic Partner",
    tagline: "Ongoing retainer — embedded expertise",
    specs: [
      "Dedicated senior architect on call",
      "Monthly security and architecture reviews",
      "Compliance monitoring and audit preparation",
      "Quarterly technology roadmap sessions",
      "Priority access across all IR4Q business units",
    ],
    cta: "Become a Partner",
  },
];

const PackageSubsection = ({
  title,
  packages,
  consulting,
}: {
  title: string;
  packages: PackageCard[];
  consulting?: boolean;
}) => (
  <div style={{ marginBottom: 48 }}>
    <h3 className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8', marginBottom: 24 }}>{title}</h3>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg, i) => (
        <PackageCardComponent key={i} pkg={consulting ? { ...pkg, popular: false } : pkg} />
      ))}
    </div>
  </div>
);

const ServicePackages = () => {
  return (
    <section id="packages" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 64 }}>
          <div className="section-eyebrow">PACKAGES</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: '#F0EDE8' }}>
            Transparent Service Packages
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: '#8A8F9E', maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            Every engagement starts with clarity. Choose your entry point across any of our four technology domains.
          </p>
        </div>

        <PackageSubsection title="Infrastructure Packages" packages={infraPackages} />
        <PackageSubsection title="Software Development Packages" packages={softwarePackages} />
        <PackageSubsection title="AI & Automation Packages" packages={aiPackages} />
        <PackageSubsection title="Consulting Packages" packages={consultingPackages} consulting />

        <div
          className="font-body font-[300]"
          style={{
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.12)',
            borderLeft: '3px solid #C9A84C',
            borderRadius: 4,
            padding: '20px 24px',
            fontSize: 13,
            color: '#8A8F9E',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          All packages include an initial technical discovery session. Enterprise and Government engagements begin with a formal Request for Assessment. Custom packages available for multi-domain engagements spanning infrastructure, software, AI, and consulting.
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
