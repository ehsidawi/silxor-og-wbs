const pillars = [
  {
    title: "Sovereign by Design",
    body: "Every system IR4Q builds, hosts, or operates is architectured for Iraqi data sovereignty. Control planes stay in-country. Data residency is enforced at the infrastructure level — not promised in a policy.",
  },
  {
    title: "Baghdad-Built, Globally Hardened",
    body: "Our engineering teams are Iraqi. Our infrastructure is Tier-IV certified and ISO 27001:2022 compliant. You get local accountability with international-grade reliability.",
  },
  {
    title: "One Partner, No Gaps",
    body: "IR4Q eliminates the fragmentation of working with separate vendors for hosting, software, security, and AI. One contract. One SLA. One team that owns the outcome end to end.",
  },
];

const WhyIR4Q = () => {
  return (
    <section id="about" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            The Only Technology Company That Owns the Full Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="surface-elevated p-6 md:p-8 accent-border hover:border-l-4 transition-all"
            >
              <h3 className="text-lg md:text-xl font-display font-normal mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIR4Q;
