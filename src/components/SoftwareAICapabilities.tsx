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
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-3">
            Build & Deliver Capabilities
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-light max-w-3xl leading-relaxed">
            From line of code to production deployment — engineered in Baghdad, secured globally.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="surface-elevated p-4 md:p-5 accent-border hover:border-l-4 transition-all"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-display font-normal mb-2">
                  {capability.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                  {capability.description}
                </p>
                <p className="text-xs font-mono text-primary/80 leading-relaxed">
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
