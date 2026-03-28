import { Button } from "@/components/ui/button";
import { Server, Code, Shield } from "lucide-react";

const paths = [
  {
    icon: Server,
    title: "Infrastructure & Hosting",
    description: "Start with a sovereignty and compliance assessment of your current hosting environment.",
    cta: "Request Infrastructure Assessment",
  },
  {
    icon: Code,
    title: "Software or AI Project",
    description: "Describe your platform or AI system requirements and receive a scoped delivery proposal within 5 business days.",
    cta: "Start a Project",
  },
  {
    icon: Shield,
    title: "Strategic Consulting",
    description: "Book a 60-minute architecture or security advisory session with a senior IR4Q engineer.",
    cta: "Book Advisory Session",
  },
];

const StartEngagement = () => {
  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-3">
            Ready to Build on Sovereign Infrastructure?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Every IR4Q engagement begins with a no-cost Technical Assessment. Tell us what you're building and we'll tell you exactly how we can deliver it.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="surface-elevated rounded p-4 md:p-5 flex flex-col">
                <Icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-display mb-2">{path.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {path.description}
                </p>
                <Button variant="outline" className="w-full touch-target" asChild>
                  <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
                    {path.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StartEngagement;
