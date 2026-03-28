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
    <section id="what-we-do" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            One Company. Every Layer of Technology.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-3xl leading-relaxed">
            From the physical infrastructure beneath your systems to the AI agents running inside them — IR4Q owns the full stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <div
                key={index}
                className="surface-elevated p-6 md:p-8 accent-border hover:border-l-4 transition-all"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display font-normal mb-3">
                  {unit.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
