import { Landmark, Banknote, Fuel, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Sovereign infrastructure and software for ministries, agencies, and public institutions requiring compliance, auditability, and national data residency.",
  },
  {
    icon: Banknote,
    title: "Financial Services & Banking",
    description: "Core banking integrations, fintech platforms, and security architecture for Iraq's financial sector — meeting Central Bank of Iraq regulatory requirements.",
  },
  {
    icon: Fuel,
    title: "Energy & Critical Infrastructure",
    description: "Technology systems for oil, gas, utilities, and industrial operations where availability and integrity are non-negotiable.",
  },
  {
    icon: Building2,
    title: "Enterprise & Private Sector",
    description: "End-to-end technology partnership for Iraq's largest private enterprises scaling their digital operations.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Built for Iraq's Most Critical Sectors
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-3xl leading-relaxed">
            IR4Q delivers across the institutions that cannot afford downtime, data loss, or compromise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="surface-elevated p-6 md:p-8 accent-border hover:border-l-4 transition-all"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display font-normal mb-3">
                  {sector.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
