import { FolderOpen } from "lucide-react";
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
    title: "Enterprise IAM Deployment",
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
        <div style={{ marginBottom: 32 }}>
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

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="surface-elevated flex flex-col"
              style={{ borderRadius: 4 }}
            >
              <div style={{ padding: 24 }}>
                <div className="font-mono font-[400] uppercase" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#C9A84C", marginBottom: 8 }}>
                  {project.tag}
                </div>
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 8 }}>
                  {t(project.title, project.titleAr)}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65, marginBottom: 16 }}>
                  {t(project.body, project.bodyAr)}
                </p>
                <span
                  className="font-mono font-[400]"
                  style={{
                    fontSize: 10,
                    color: "#C9A84C",
                    backgroundColor: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    padding: "4px 10px",
                    borderRadius: 2,
                  }}
                >
                  {t(project.sector, project.sectorAr)}
                </span>
              </div>
            </div>
          ))}
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
