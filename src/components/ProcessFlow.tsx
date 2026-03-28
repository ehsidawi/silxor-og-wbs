import { ArrowRight } from "lucide-react";

const ProcessFlow = () => {
  const stages = [
    {
      title: "Request Assessment",
      description: "Technical evaluation and feasibility analysis"
    },
    {
      title: "Architect & Design",
      description: "Infrastructure planning and security review"
    },
    {
      title: "Engineer & Build",
      description: "Development and integration with quality assurance"
    },
    {
      title: "Deploy & Host",
      description: "Production deployment to Tier-IV infrastructure"
    },
    {
      title: "Manage & Iterate",
      description: "24/7 monitoring and continuous improvement"
    }
  ];

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
            Enterprise Delivery Process
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether we're deploying cloud infrastructure, delivering a software platform, or standing up a sovereign AI system — our structured delivery process ensures precision at every stage.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-3">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-start flex-1 min-w-0">
              <div className="surface-elevated rounded p-6 flex-1 hover:border-primary/30 transition-colors">
                <div className="text-xs font-mono text-primary mb-3">
                  STAGE {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-display mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
              
              {index < stages.length - 1 && (
                <ArrowRight className="w-5 h-5 text-primary/40 mx-2 mt-8 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-3">
          {stages.map((stage, index) => (
            <div key={index}>
              <div className="surface-elevated rounded p-6">
                <div className="text-xs font-mono text-primary mb-3">
                  STAGE {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-display mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
              
              {index < stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
