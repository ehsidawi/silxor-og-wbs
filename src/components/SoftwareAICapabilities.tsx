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
    <section id="software" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">SOFTWARE & AI</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            Build & Deliver Capabilities
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            From line of code to production deployment — engineered in Baghdad, secured globally.
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

export default SoftwareAICapabilities;
