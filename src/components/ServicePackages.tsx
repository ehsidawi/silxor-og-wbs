import { Button } from "@/components/ui/button";
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
    className={`surface-elevated rounded p-6 md:p-8 flex flex-col relative ${
      pkg.popular ? "border-primary/50 border-2" : ""
    }`}
  >
    {pkg.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1">
        <Star className="w-3 h-3" /> Most Popular
      </div>
    )}
    <h4 className="text-lg md:text-xl font-display mb-2">{pkg.name}</h4>
    <p className="text-xs md:text-sm text-muted-foreground mb-6">{pkg.tagline}</p>
    <ul className="space-y-3 mb-8 flex-1">
      {pkg.specs.map((spec, i) => (
        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <span>{spec}</span>
        </li>
      ))}
    </ul>
    <Button
      variant={pkg.popular ? "institutional" : "outline"}
      className="w-full touch-target"
      asChild
    >
      <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
        {pkg.cta}
      </a>
    </Button>
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
  <div className="mb-12 md:mb-16">
    <h3 className="text-xl md:text-2xl font-display mb-6 md:mb-8">{title}</h3>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {packages.map((pkg, i) => (
        <PackageCardComponent key={i} pkg={consulting ? { ...pkg, popular: false } : pkg} />
      ))}
    </div>
  </div>
);

const ServicePackages = () => {
  return (
    <section id="packages" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Transparent Service Packages
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Every engagement starts with clarity. Choose your entry point across any of our four technology domains.
          </p>
        </div>

        <PackageSubsection title="Infrastructure Packages" packages={infraPackages} />
        <PackageSubsection title="Software Development Packages" packages={softwarePackages} />
        <PackageSubsection title="AI & Automation Packages" packages={aiPackages} />
        <PackageSubsection title="Consulting Packages" packages={consultingPackages} consulting />

        <div className="surface-elevated rounded p-6 md:p-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            All packages include an initial technical discovery session. Enterprise and Government engagements begin with a formal Request for Assessment. Custom packages available for multi-domain engagements spanning infrastructure, software, AI, and consulting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
