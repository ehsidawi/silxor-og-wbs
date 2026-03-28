const stats = [
  { value: "99.995%", label: "Uptime SLA" },
  { value: "<120ms", label: "Baghdad Latency" },
  { value: "4", label: "Business Units" },
  { value: "24/7", label: "NOC Coverage" },
  { value: "ISO 27001:2022", label: "Certified" },
];

const StatsBar = () => {
  return (
    <section
      style={{
        backgroundColor: '#0D1017',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 0',
      }}
    >
      <div className="container-content">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div
                className="flex flex-col items-center text-center group cursor-default"
                style={{ minWidth: 100 }}
              >
                <span
                  className="font-mono font-[700] transition-colors duration-200 group-hover:text-sovereign-gold"
                  style={{ fontSize: 28, color: '#F0EDE8' }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-body font-[400] uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.1em', color: '#8A8F9E', marginTop: 6 }}
                >
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div
                  className="hidden lg:block ml-6"
                  style={{ width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.06)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
