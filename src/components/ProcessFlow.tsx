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
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3">
            Enterprise Delivery Process
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether we're deploying cloud infrastructure, delivering a software platform, or standing up a sovereign AI system — our structured delivery process ensures precision at every stage.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-2">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-start flex-1 min-w-0">
              <div className="surface-elevated rounded p-4 flex-1 hover:border-primary/30 transition-colors">
                <div className="text-xs font-mono text-primary mb-2">
                  STAGE {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm font-display mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
              
              {index < stages.length - 1 && (
                <ArrowRight className="w-4 h-4 text-primary/40 mx-1.5 mt-6 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-2">
          {stages.map((stage, index) => (
            <div key={index}>
              <div className="surface-elevated rounded p-4">
                <div className="text-xs font-mono text-primary mb-2">
                  STAGE {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm font-display mb-1">
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
