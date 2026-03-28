const stats = [
  { value: "99.995%", label: "Uptime SLA" },
  { value: "<120ms", label: "Baghdad Latency" },
  { value: "4", label: "Business Units" },
  { value: "24/7", label: "NOC Coverage" },
  { value: "ISO 27001:2022", label: "Certified" },
];

const StatsBar = () => {
  return (
    <section className="border-t border-b border-border bg-card/50">
      <div className="container-content py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? "lg:border-r lg:border-border" : ""
              }`}
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
