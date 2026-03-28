import { User } from "lucide-react";

const leaders = [
  {
    name: "Ehsan Nidawi",
    title: "FOUNDER - SR. PRINCIPAL CYBERSECURITY",
    bio: "Sr. Principal Cybersecurity - Identity Ecosystem Architect | Digital Transformation Architect | Ex: CISA, Ally Financial, Meta, Google, Dell, Apple.",
    linkedin: "https://www.linkedin.com/in/ehsidawi",
  },
];

const Team = () => {
  return (
    <section id="about" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 64 }}>
          <div className="section-eyebrow">LEADERSHIP</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: '#F0EDE8' }}>
            Iraqi Engineers. Global Standards.
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: '#8A8F9E', maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            IR4Q is built and operated by technologists with backgrounds across international infrastructure, cybersecurity, and enterprise software — rooted in Iraq.
          </p>
        </div>

        <div className="flex justify-center">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                backgroundColor: '#0D1017',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 4,
                padding: 32,
                maxWidth: 400,
              }}
            >
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.13), rgba(201,168,76,0.03))',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <User style={{ width: 28, height: 28, color: '#C9A84C' }} />
              </div>

              <div className="font-mono font-[400] uppercase" style={{ fontSize: 11, letterSpacing: '0.15em', color: '#C9A84C', marginTop: 16 }}>
                {leader.title}
              </div>

              <h4 className="font-body font-[500]" style={{ fontSize: 17, color: '#F0EDE8', marginTop: 8 }}>
                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: '#C9A84C' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E2C06A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  >
                    {leader.name}
                  </a>
                ) : leader.name}
              </h4>

              <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', lineHeight: 1.7, marginTop: 12 }}>
                {leader.bio}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body font-[300] text-center" style={{ fontSize: 13, color: '#4A5060', fontStyle: 'italic', marginTop: 32 }}>
          IR4Q leadership profiles and team bios are available upon request as part of the technical assessment engagement.
        </p>
      </div>
    </section>
  );
};

export default Team;
