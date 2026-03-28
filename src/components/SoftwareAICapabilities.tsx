import { Code, Brain, Bot, Database, ShieldCheck, Compass } from "lucide-react";

const capabilities = [
  {
    icon: Code,
    title: "Custom Enterprise Software",
    description: "Full-cycle software development for government portals, financial platforms, operational systems, and citizen-facing applications. Delivered by Baghdad-based engineering teams.",
    technical: "Web • Mobile • API • Integration",
  },
  {
    icon: Brain,
    title: "Sovereign AI Deployment",
    description: "Private LLM hosting and fine-tuning on IR4Q infrastructure. No data leaves Iraqi sovereign control. Includes model serving, RAG pipelines, and vector search — fully air-gapped if required.",
    technical: "On-premise LLMs • RAG • Vector Search • Air-gap ready",
  },
  {
    icon: Bot,
    title: "Agentic Automation",
    description: "Intelligent workflow automation using AI agents that operate across your enterprise systems — document processing, decision routing, multi-step task execution, and process orchestration.",
    technical: "n8n • Agent workflows • Process automation • API orchestration",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data pipeline design, warehousing, and analytics infrastructure. Structured and unstructured data management with full lineage, auditability, and compliance controls.",
    technical: "Pipelines • Warehousing • Analytics • Audit trails",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Engineering",
    description: "Zero Trust architecture, identity and access management, threat modeling, and security operations. Designed for financial institutions and government agencies operating in high-risk environments.",
    technical: "Zero Trust • IAM • Threat modeling • SOC",
  },
  {
    icon: Compass,
    title: "Digital Transformation Advisory",
    description: "End-to-end technology strategy for organizations modernizing legacy systems or building net-new digital capabilities. Architecture, vendor selection, and program delivery.",
    technical: "Strategy • Architecture • Program delivery • Vendor advisory",
  },
];

const SoftwareAICapabilities = () => {
  return (
    <section id="software" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Build & Deliver Capabilities
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            From line of code to production deployment — engineered in Baghdad, secured globally.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="surface-elevated p-6 md:p-8 accent-border hover:border-l-4 transition-all"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display font-normal mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {capability.description}
                </p>
                <p className="text-xs md:text-sm font-mono text-primary/80 leading-relaxed">
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

export default SoftwareAICapabilities;
