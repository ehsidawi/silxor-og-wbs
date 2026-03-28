import { Landmark, Banknote, Fuel, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhoWeServe = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Landmark,
      title: t("Government & Public Sector", "الحكومة والقطاع العام"),
      description: t(
        "Sovereign infrastructure and software for ministries, agencies, and public institutions requiring compliance, auditability, and national data residency.",
        "بنية تحتية وبرمجيات سيادية للوزارات والوكالات والمؤسسات العامة التي تتطلب الامتثال والتدقيق وإقامة البيانات الوطنية."
      ),
    },
    {
      icon: Banknote,
      title: t("Financial Services & Banking", "الخدمات المالية والمصرفية"),
      description: t(
        "Core banking integrations, fintech platforms, and security architecture for Iraq's financial sector — meeting Central Bank of Iraq regulatory requirements.",
        "تكاملات مصرفية أساسية، منصات تقنية مالية، وبنية أمنية للقطاع المالي العراقي — تلبية متطلبات البنك المركزي العراقي التنظيمية."
      ),
    },
    {
      icon: Fuel,
      title: t("Energy & Critical Infrastructure", "الطاقة والبنية التحتية الحيوية"),
      description: t(
        "Technology systems for oil, gas, utilities, and industrial operations where availability and integrity are non-negotiable.",
        "أنظمة تقنية للنفط والغاز والمرافق والعمليات الصناعية حيث التوفر والنزاهة غير قابلين للتفاوض."
      ),
    },
    {
      icon: Building2,
      title: t("Enterprise & Private Sector", "الشركات والقطاع الخاص"),
      description: t(
        "End-to-end technology partnership for Iraq's largest private enterprises scaling their digital operations.",
        "شراكة تقنية شاملة لأكبر المؤسسات الخاصة في العراق التي توسع عملياتها الرقمية."
      ),
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("SECTORS", "القطاعات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Built for Iraq's Most Critical Sectors", "مُصمَّم لأهم قطاعات العراق")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t(
              "IR4Q delivers across the institutions that cannot afford downtime, data loss, or compromise.",
              "IR4Q تخدم المؤسسات التي لا تتحمل أي توقف أو فقدان بيانات أو اختراق."
            )}
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
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
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
                      marginBottom: index < sectors.length - 1 ? 2 : 0,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="md:hidden"><Icon style={{ width: 16, height: 16, color: "#C9A84C" }} strokeWidth={1.5} /></span>
                      <span className="font-mono font-[400] uppercase" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#C9A84C" }}>
                        {t("SECTOR", "قطاع")} {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 4 }}>
                      {sector.title}
                    </h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65 }}>
                      {sector.description}
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

export default WhoWeServe;
