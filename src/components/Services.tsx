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

  // Split into two tiers for hierarchy
  const coreTier = capabilities.slice(0, 3);
  const opsTier = capabilities.slice(3);

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

        {/* Org Chart / Hierarchy */}
        <div className="flex flex-col items-center gap-0">
          {/* Root node */}
          <div
            className="surface-elevated text-center"
            style={{
              padding: "16px 32px",
              borderRadius: 4,
              border: "1px solid rgba(201,168,76,0.4)",
              minWidth: 220,
            }}
          >
            <span className="font-mono font-[600] uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#C9A84C" }}>
              IR4Q {t("Infrastructure", "البنية التحتية")}
            </span>
          </div>

          {/* Connector down */}
          <div style={{ width: 2, height: 28, backgroundColor: "rgba(201,168,76,0.3)" }} />

          {/* Core tier label */}
          <div
            className="font-mono font-[400] uppercase text-center"
            style={{ fontSize: 9, letterSpacing: "0.15em", color: "#8A8F9E", marginBottom: 8 }}
          >
            {t("CORE PLATFORM", "المنصة الأساسية")}
          </div>

          {/* Horizontal connector bar for core tier */}
          <div className="relative w-full hidden md:block" style={{ maxWidth: 700, height: 2, backgroundColor: "rgba(201,168,76,0.2)", margin: "0 auto" }} />

          {/* Core tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full" style={{ maxWidth: 780, marginTop: 0 }}>
            {coreTier.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  {/* Vertical connector from bar */}
                  <div className="hidden md:block" style={{ width: 2, height: 16, backgroundColor: "rgba(201,168,76,0.2)" }} />
                  <div
                    className="surface-elevated w-full"
                    style={{ padding: 18, borderRadius: 4, borderTop: "2px solid rgba(201,168,76,0.3)" }}
                  >
                    <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                      <Icon style={{ width: 18, height: 18, color: "#C9A84C" }} strokeWidth={1.5} />
                      <h3 className="font-body font-[500]" style={{ fontSize: 13, color: "#F0EDE8" }}>{cap.title}</h3>
                    </div>
                    <p className="font-body font-[300]" style={{ fontSize: 12, color: "#8A8F9E", lineHeight: 1.6, marginBottom: 8 }}>{cap.description}</p>
                    <p className="font-mono font-[400]" style={{ fontSize: 9, color: "#C9A84C", opacity: 0.7, letterSpacing: "0.05em" }}>{cap.technical}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connector down */}
          <div style={{ width: 2, height: 28, backgroundColor: "rgba(201,168,76,0.2)", marginTop: 4 }} />

          {/* Ops tier label */}
          <div
            className="font-mono font-[400] uppercase text-center"
            style={{ fontSize: 9, letterSpacing: "0.15em", color: "#8A8F9E", marginBottom: 8 }}
          >
            {t("OPERATIONS LAYER", "طبقة العمليات")}
          </div>

          {/* Horizontal connector bar for ops tier */}
          <div className="relative w-full hidden md:block" style={{ maxWidth: 700, height: 2, backgroundColor: "rgba(201,168,76,0.12)", margin: "0 auto" }} />

          {/* Ops tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full" style={{ maxWidth: 780, marginTop: 0 }}>
            {opsTier.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="hidden md:block" style={{ width: 2, height: 16, backgroundColor: "rgba(201,168,76,0.12)" }} />
                  <div
                    className="surface-elevated w-full"
                    style={{ padding: 18, borderRadius: 4, borderTop: "2px solid rgba(201,168,76,0.15)" }}
                  >
                    <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                      <Icon style={{ width: 18, height: 18, color: "#C9A84C" }} strokeWidth={1.5} />
                      <h3 className="font-body font-[500]" style={{ fontSize: 13, color: "#F0EDE8" }}>{cap.title}</h3>
                    </div>
                    <p className="font-body font-[300]" style={{ fontSize: 12, color: "#8A8F9E", lineHeight: 1.6, marginBottom: 8 }}>{cap.description}</p>
                    <p className="font-mono font-[400]" style={{ fontSize: 9, color: "#C9A84C", opacity: 0.7, letterSpacing: "0.05em" }}>{cap.technical}</p>
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
