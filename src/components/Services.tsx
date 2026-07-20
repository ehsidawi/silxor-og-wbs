import { Cloud, Shield, Server, Wrench, Database, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Cloud, title: t("Sovereign Cloud Hosting", "الاستضافة السحابية السيادية"), description: t("Enterprise grade cloud infrastructure with complete data sovereignty.", "بنية سحابية مؤسسية بسيادة بيانات كاملة."), technical: "Ashburn, VA • <120ms • 99.995% SLA", coord: t("39.0°N · 77.5°W", "٣٩.٠° ش · ٧٧.٥° غ") },
    { icon: Shield, title: t("Critical Infrastructure Security", "أمن البنية التحتية الحيوية"), description: t("Military grade security for financial institutions and government agencies.", "بنية أمنية بمستوى عسكري للمؤسسات المالية والجهات الحكومية."), technical: "ISO 27001 • SOC 2 • AES 256", coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Server, title: t("Dedicated Infrastructure", "بنية تحتية مخصصة"), description: t("Bare metal servers optimized for regulated workloads.", "خوادم مخصصة محسنة لأحمال العمل المنظمة."), technical: "Tier IV • N+2 power • 2x network", coord: t("36.2°N · 44.0°E", "٣٦.٢° ش · ٤٤.٠° شر") },
    { icon: Database, title: t("Data Residency & Compliance", "إقامة البيانات والامتثال"), description: t("Regulatory compliance across American and international frameworks.", "الامتثال التنظيمي عبر الأطر الأمريكية والدولية."), technical: "GDPR • <30s RTO • RPO: 15min", coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Wrench, title: t("Managed Operations", "العمليات المدارة"), description: t("24/7 American based NOC with U.S. engineering escalation.", "مركز عمليات أمريكي مع تصعيد لفرق هندسية أمريكية."), technical: "New York NOC • <15min P1", coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Gauge, title: t("Performance Engineering", "هندسة الأداء"), description: t("Real time telemetry, predictive scaling, and latency reduction.", "قياس في الوقت الفعلي وتوسيع تنبؤي وتقليل زمن الاستجابة."), technical: "Autoscaling • P99.9 <100ms", coord: t("30.5°N · 47.8°E", "٣٠.٥° ش · ٤٧.٨° شر") },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("INFRASTRUCTURE", "البنية التحتية")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Infrastructure Capabilities", "قدرات البنية التحتية")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 520, marginTop: 6, lineHeight: 1.7 }}>
            {t("Enterprise grade sovereign cloud and security infrastructure the foundation everything else is built on.", "بنية سحابية وأمنية سيادية بمعايير مؤسسية الأساس الذي يُبنى عليه كل شيء آخر.")}
          </p>
        </div>

        {/* Map list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="group relative surface-elevated"
                style={{
                  borderRadius: 2,
                  padding: "24px 22px",
                  overflow: "hidden",
                  transition: "background 0.3s ease",
                }}
              >
                {/* Grid overlay pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Header: pin + coord */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                        boxShadow: "0 0 8px hsl(var(--primary) / 0.5)",
                      }}
                    />
                    <span
                      className="font-mono font-[400] uppercase"
                      style={{ fontSize: 9, letterSpacing: "0.15em", color: "hsl(var(--primary))" }}
                    >
                      {t("PIN", "موقع")} {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="font-mono font-[300]"
                    style={{ fontSize: 9, color: "hsl(var(--muted-foreground))", letterSpacing: "0.05em" }}
                  >
                    {cap.coord}
                  </span>
                </div>

                {/* Icon box */}
                <div className="relative z-10">
                  <div
                    className="mb-3"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      border: "1px solid hsl(var(--primary) / 0.25)",
                      backgroundColor: "hsl(var(--primary) / 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: "hsl(var(--primary))" }} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 4 }}>
                    {cap.title}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65, marginBottom: 8 }}>
                    {cap.description}
                  </p>
                  <p className="font-mono font-[400]" style={{ fontSize: 10, color: "hsl(var(--primary))", opacity: 0.7, letterSpacing: "0.05em" }}>
                    {cap.technical}
                  </p>
                </div>

                {/* Corner crosshair */}
                <div
                  className="absolute pointer-events-none"
                  style={{ top: 10, right: 10, width: 14, height: 14, opacity: 0.15 }}
                >
                  <div style={{ position: "absolute", top: 6, left: 0, width: 14, height: 1, backgroundColor: "hsl(var(--primary))" }} />
                  <div style={{ position: "absolute", top: 0, left: 6, width: 1, height: 14, backgroundColor: "hsl(var(--primary))" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
