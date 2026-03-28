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
    <section id="why-ir4q" className="section-spacing border-t border-border">
      <div className="container-content">
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-3">
            The Only Technology Company That Owns the Full Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="surface-elevated p-4 md:p-5 accent-border hover:border-l-4 transition-all"
            >
              <h3 className="text-base md:text-lg font-display font-normal mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
