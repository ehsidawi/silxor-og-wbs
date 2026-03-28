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
    <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">PROCESS</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: '#F0EDE8' }}>
            Enterprise Delivery Process
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: '#8A8F9E', maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            Whether we're deploying cloud infrastructure, delivering a software platform, or standing up a sovereign AI system — our structured delivery process ensures precision at every stage.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute top-4 left-0 right-0"
              style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }}
            />
            
            <div className="flex justify-between">
              {stages.map((stage, index) => (
                <div key={index} className="relative flex flex-col items-center" style={{ flex: 1, maxWidth: 200 }}>
                  {/* Node circle */}
                  <div
                    className="relative z-10 flex items-center justify-center"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '1px solid rgba(201,168,76,0.4)',
                      backgroundColor: '#080A0F',
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C9A84C' }} />
                  </div>

                  {/* Content */}
                  <div className="text-center" style={{ marginTop: 24 }}>
                    <div className="font-mono font-[400]" style={{ fontSize: 10, color: '#C9A84C', letterSpacing: '0.15em', marginBottom: 8 }}>
                      STAGE {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
                      {stage.title}
                    </h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.6 }}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          {stages.map((stage, index) => (
            <div key={index} className="flex gap-4" style={{ marginBottom: index < stages.length - 1 ? 32 : 0 }}>
              {/* Vertical line + node */}
              <div className="flex flex-col items-center">
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.4)',
                    backgroundColor: '#080A0F',
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C9A84C' }} />
                </div>
                {index < stages.length - 1 && (
                  <div className="flex-1" style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginTop: 4 }} />
                )}
              </div>

              <div style={{ paddingBottom: 8 }}>
                <div className="font-mono font-[400]" style={{ fontSize: 10, color: '#C9A84C', letterSpacing: '0.15em', marginBottom: 4 }}>
                  STAGE {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 4 }}>
                  {stage.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.6 }}>
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
