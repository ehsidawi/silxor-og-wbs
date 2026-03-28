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

        <div className="grid sm:grid-cols-2 gap-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div key={index} className="surface-elevated" style={{ padding: 20 }}>
                <Icon className="mb-3" style={{ width: 24, height: 24, color: "#C9A84C" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 6 }}>
                  {sector.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65 }}>
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
