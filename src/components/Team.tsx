import { User } from "lucide-react";

const leaders = [
  {
    name: "Ehsan Nidawi",
    title: "Chief Executive Officer",
    bio: "Sr. Principal Cybersecurity - Identity Ecosystem Architect | Digital Transformation Architect | Ex: CISA, Ally Financial, Meta, Google, Dell, Apple.",
    linkedin: "https://www.linkedin.com/in/ehsidawi",
  },
  {
    name: "[First Last]",
    title: "Chief Technology Officer",
    bio: "Infrastructure and cloud architect with international Tier-IV operations experience and deep expertise in sovereign systems design.",
  },
  {
    name: "[First Last]",
    title: "Head of AI & Software Engineering",
    bio: "AI systems and software engineering leader specializing in sovereign LLM deployments and enterprise platform delivery.",
  },
];

const Team = () => {
  return (
    <section id="about" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Iraqi Engineers. Global Standards.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            IR4Q is built and operated by technologists with backgrounds across international infrastructure, cybersecurity, and enterprise software — rooted in Iraq.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="surface-elevated rounded p-6 md:p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="text-sm md:text-base font-display mb-1">
                {leader.linkedin ? (
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
                    {leader.name}
                  </a>
                ) : leader.name}
              </h4>
              <p className="text-xs md:text-sm font-mono text-primary mb-4">{leader.title}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          IR4Q leadership profiles and team bios are available upon request as part of the technical assessment engagement.
        </p>
      </div>
    </section>
  );
};

export default Team;
