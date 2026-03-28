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
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Ready to Build on Sovereign Infrastructure?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Every IR4Q engagement begins with a no-cost Technical Assessment. Tell us what you're building and we'll tell you exactly how we can deliver it.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="surface-elevated rounded p-6 md:p-8 flex flex-col">
                <Icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display mb-3">{path.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1">
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
