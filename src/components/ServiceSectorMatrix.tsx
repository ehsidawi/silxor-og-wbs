import { useState } from "react";

const services = [
  "Infrastructure & Cloud",
  "Software Development",
  "AI & Automation",
  "Identity & Access Mgmt",
  "Technology Consulting",
];

const sectors = ["Government", "Financial", "Energy", "Enterprise"];

const ServiceSectorMatrix = () => {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  return (
    <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 10 }}>
          <div className="section-eyebrow">COVERAGE MATRIX</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#FFFFFF' }}>
            Which Services Power Which Sectors
          </h2>
        </div>

        <div
          style={{
            backgroundColor: '#25282C',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 4,
            padding: 14,
            overflowX: 'auto',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '4px 10px' }} />
                {sectors.map((s) => (
                  <th
                    key={s}
                    className="font-mono font-[400] uppercase"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.15em',
                      color: '#C5C7CB',
                      padding: '4px 10px',
                      textAlign: 'center',
                    }}
                  >
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, ri) => (
                <tr
                  key={service}
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    transition: 'background 200ms',
                    background: hovered?.row === ri ? 'rgba(255,255,255,0.02)' : 'transparent',
                  }}
                >
                  <td
                    className="font-body font-[400]"
                    style={{ fontSize: 13, color: '#6E7378', padding: '6px 10px', whiteSpace: 'nowrap' }}
                  >
                    {service}
                  </td>
                  {sectors.map((sector, ci) => (
                    <td
                      key={sector}
                      style={{ textAlign: 'center', padding: '6px 10px', position: 'relative' }}
                      onMouseEnter={() => setHovered({ row: ri, col: ci })}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor: '#C5C7CB',
                          margin: '0 auto',
                          transition: 'transform 200ms',
                          transform: hovered?.row === ri && hovered?.col === ci ? 'scale(1.4)' : 'scale(1)',
                        }}
                      />
                      {hovered?.row === ri && hovered?.col === ci && (
                        <div
                          className="font-body font-[300]"
                          style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#25282C',
                            border: '1px solid rgba(197,199,203,0.3)',
                            borderRadius: 4,
                            padding: '6px 10px',
                            fontSize: 11,
                            color: '#6E7378',
                            whiteSpace: 'nowrap',
                            zIndex: 10,
                            pointerEvents: 'none',
                          }}
                        >
                          Silxor delivers {service} for {sector} institutions
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectorMatrix;
