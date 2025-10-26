import { Cloud, Shield, Server, Wrench, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Enterprise-grade cloud infrastructure with guaranteed 99.9% uptime across Iraqi and U.S. data centers.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Advanced cybersecurity protocols protecting your data with military-grade encryption and monitoring.",
  },
  {
    icon: Server,
    title: "Dedicated Servers",
    description: "High-performance dedicated hardware optimized for your specific workloads and compliance needs.",
  },
  {
    icon: Wrench,
    title: "Managed Services",
    description: "24/7 expert management of your infrastructure, so you can focus on growing your business.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Scalable database solutions with automated backups and disaster recovery protocols.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Continuous monitoring and optimization ensuring peak performance at all times.",
  },
];

const Services = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech infrastructure backed by dual-continent reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
