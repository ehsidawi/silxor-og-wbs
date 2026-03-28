import { Server, Code, Brain, ShieldCheck } from "lucide-react";

const units = [
  {
    icon: Server,
    title: "Infrastructure & Cloud",
    body: "Tier-IV certified sovereign cloud hosting, bare-metal servers, NOC operations, and resilient U.S.-backed redundancy. Your data stays under Iraqi control.",
  },
  {
    icon: Code,
    title: "Software Development",
    body: "Baghdad-engineered custom software for government, finance, and enterprise. Web platforms, mobile applications, APIs, and system integrations built to last.",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Automation",
    body: "Private large language model deployments, agentic AI workflows, RAG pipelines, and intelligent process automation — all hosted sovereignly. Your AI, your data, your control.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Consulting",
    body: "Architecture design, cybersecurity advisory, Zero Trust strategy, digital transformation roadmaps, and compliance engineering for Iraq's most regulated sectors.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">CAPABILITIES</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            One Company. Every Layer of Technology.
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            From the physical infrastructure beneath your systems to the AI agents running inside them — IR4Q owns the full stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <div key={index} className="surface-elevated" style={{ padding: 20 }}>
                <Icon className="mb-3" style={{ width: 24, height: 24, color: '#C9A84C' }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
                  {unit.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.65 }}>
                  {unit.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
