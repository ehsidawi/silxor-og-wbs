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
    <section id="why-ir4q" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">WHY IR4Q</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            The Only Technology Company That Owns the Full Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <div key={index} className="surface-elevated" style={{ padding: 20 }}>
              <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
                {pillar.title}
              </h3>
              <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.65 }}>
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
