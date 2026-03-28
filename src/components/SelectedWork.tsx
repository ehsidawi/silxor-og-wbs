import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    tag: "INFRASTRUCTURE",
    title: "Sovereign Cloud Migration",
    titleAr: "ترحيل السحابة السيادية",
    body: "Full migration from international public cloud to IR4Q sovereign infrastructure for a Baghdad-based financial institution. Zero downtime cutover.",
    bodyAr: "ترحيل كامل من السحابة العامة الدولية إلى البنية التحتية السيادية لـ IR4Q لمؤسسة مالية في بغداد. انتقال بدون أي توقف.",
    sector: "Financial Services",
    sectorAr: "الخدمات المالية",
  },
  {
    tag: "IDENTITY",
    title: "Enterprise Identity Deployment",
    titleAr: "نشر إدارة الهوية المؤسسية",
    body: "Greenfield identity and access management architecture for a government ministry — SSO, PAM vaulting, and IGA lifecycle management.",
    bodyAr: "بنية إدارة هوية ووصول جديدة بالكامل لوزارة حكومية — تسجيل دخول موحّد، خزنة الحسابات المميزة، وإدارة دورة حياة الهوية.",
    sector: "Government",
    sectorAr: "الحكومة",
  },
  {
    tag: "SOFTWARE + AI",
    title: "Sovereign AI Operations Platform",
    titleAr: "منصة عمليات الذكاء الاصطناعي السيادي",
    body: "Custom agentic AI platform with private LLM deployment for internal operations automation at an Iraqi energy company.",
    bodyAr: "منصة ذكاء اصطناعي مخصصة مع نشر نموذج لغوي خاص لأتمتة العمليات الداخلية في شركة طاقة عراقية.",
    sector: "Energy",
    sectorAr: "الطاقة",
  },
];

const SelectedWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("SELECTED WORK", "أعمالنا المختارة")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Engagements We Can Talk About", "مشاريع يمكننا الحديث عنها")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 560, marginTop: 10, lineHeight: 1.7 }}>
            {t(
              "A selection of infrastructure, identity, and software engagements delivered for clients across Iraq's government, financial, and energy sectors.",
              "مجموعة مختارة من مشاريع البنية التحتية والهوية والبرمجيات المنجزة لعملاء في القطاعات الحكومية والمالية والطاقة في العراق."
            )}
          </p>
        </div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: 16,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.08) 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {projects.map((project, index) => (
              <div key={index} className="relative flex items-stretch gap-0 md:gap-8">
                {/* Timeline node */}
                <div className="hidden md:flex flex-col items-center" style={{ width: 34, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "2px solid rgba(201,168,76,0.5)",
                      backgroundColor: "rgba(201,168,76,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 24,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <span className="font-mono font-[600]" style={{ fontSize: 12, color: "#C9A84C" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="surface-elevated flex-1"
                  style={{
                    borderRadius: 4,
                    padding: 24,
                    borderLeft: "3px solid rgba(201,168,76,0.3)",
                    marginBottom: index < projects.length - 1 ? 2 : 0,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 10 }}>
                    {/* Mobile step number */}
                    <span
                      className="md:hidden font-mono font-[600]"
                      style={{
                        fontSize: 10,
                        color: "#C9A84C",
                        backgroundColor: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        padding: "2px 8px",
                        borderRadius: 2,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-mono font-[400] uppercase"
                      style={{ fontSize: 10, letterSpacing: "0.15em", color: "#C9A84C" }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="font-mono font-[400]"
                      style={{
                        fontSize: 10,
                        color: "#C9A84C",
                        backgroundColor: "rgba(201,168,76,0.06)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        padding: "2px 10px",
                        borderRadius: 2,
                      }}
                    >
                      {t(project.sector, project.sectorAr)}
                    </span>
                  </div>
                  <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 6 }}>
                    {t(project.title, project.titleAr)}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65 }}>
                    {t(project.body, project.bodyAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="font-body font-[300] text-center"
          style={{
            fontSize: 13,
            color: "#4A5060",
            fontStyle: "italic",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {t(
            "Additional case studies and client references available under NDA during assessment engagement.",
            "دراسات حالة إضافية ومراجع عملاء متاحة بموجب اتفاقية عدم إفشاء خلال التقييم."
          )}
        </p>
      </div>
    </section>
  );
};

export default SelectedWork;
