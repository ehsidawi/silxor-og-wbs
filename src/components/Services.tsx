import { Cloud, Shield, Server, Wrench, Database, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Cloud, title: t("Sovereign Cloud Hosting", "الاستضافة السحابية السيادية"), description: t("Enterprise-grade cloud infrastructure with complete data sovereignty.", "بنية سحابية مؤسسية بسيادة بيانات كاملة."), technical: "Ashburn, VA • <120ms • 99.995% SLA" },
    { icon: Shield, title: t("Critical Infrastructure Security", "أمن البنية التحتية الحيوية"), description: t("Military-grade security for financial institutions and government agencies.", "بنية أمنية بمستوى عسكري للمؤسسات المالية والجهات الحكومية."), technical: "ISO 27001 • SOC 2 • AES-256" },
    { icon: Server, title: t("Dedicated Infrastructure", "بنية تحتية مخصصة"), description: t("Bare-metal servers optimized for regulated workloads.", "خوادم مخصصة محسنة لأحمال العمل المنظمة."), technical: "Tier-IV • N+2 power • 2x network" },
    { icon: Database, title: t("Data Residency & Compliance", "إقامة البيانات والامتثال"), description: t("Regulatory compliance across Iraqi and international frameworks.", "الامتثال التنظيمي عبر الأطر العراقية والدولية."), technical: "GDPR • <30s RTO • RPO: 15min" },
    { icon: Wrench, title: t("Managed Operations", "العمليات المدارة"), description: t("24/7 Iraqi-based NOC with U.S. engineering escalation.", "مركز عمليات عراقي مع تصعيد لفرق هندسية أمريكية."), technical: "Baghdad NOC • <15min P1" },
    { icon: Gauge, title: t("Performance Engineering", "هندسة الأداء"), description: t("Real-time telemetry, predictive scaling, and latency reduction.", "قياس في الوقت الفعلي وتوسيع تنبؤي وتقليل زمن الاستجابة."), technical: "Autoscaling • P99.9 <100ms" },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("INFRASTRUCTURE", "البنية التحتية")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Infrastructure Capabilities", "قدرات البنية التحتية")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t("Enterprise-grade sovereign cloud and security infrastructure — the foundation everything else is built on.", "بنية سحابية وأمنية سيادية بمعايير مؤسسية — الأساس الذي يُبنى عليه كل شيء آخر.")}
          </p>
        </div>

        {/* Vertical chart list */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden md:block"
            style={{ left: 16, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.08) 100%)" }}
          />

          <div className="flex flex-col gap-0">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="relative flex items-stretch gap-0 md:gap-8">
                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center" style={{ width: 34, flexShrink: 0 }}>
                    <div
                      style={{
                        width: 34, height: 34, borderRadius: "50%",
                        border: "2px solid rgba(201,168,76,0.5)",
                        backgroundColor: "rgba(201,168,76,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginTop: 20, position: "relative", zIndex: 2,
                      }}
                    >
                      <Icon style={{ width: 16, height: 16, color: "#C9A84C" }} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="surface-elevated flex-1"
                    style={{
                      borderRadius: 4, padding: 20,
                      borderLeft: "3px solid rgba(201,168,76,0.3)",
                      marginBottom: index < capabilities.length - 1 ? 2 : 0,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="md:hidden"><Icon style={{ width: 16, height: 16, color: "#C9A84C" }} strokeWidth={1.5} /></span>
                      <span className="font-mono font-[400] uppercase" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#C9A84C" }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 4 }}>
                      {cap.title}
                    </h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65, marginBottom: 8 }}>
                      {cap.description}
                    </p>
                    <p className="font-mono font-[400]" style={{ fontSize: 10, color: "#C9A84C", opacity: 0.7, letterSpacing: "0.05em" }}>
                      {cap.technical}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
