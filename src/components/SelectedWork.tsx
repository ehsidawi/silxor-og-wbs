import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    tag: "INFRASTRUCTURE",
    title: "Sovereign Cloud Migration",
    titleAr: "ترحيل السحابة السيادية",
    body: "Full migration from international public cloud to Silxor sovereign infrastructure for a New York based financial institution. Zero downtime cutover.",
    bodyAr: "ترحيل كامل من السحابة العامة الدولية إلى البنية التحتية السيادية لـ Silxor لمؤسسة مالية في نيويورك. انتقال بدون أي توقف.",
    sector: "Financial Services",
    sectorAr: "الخدمات المالية",
    coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
  },
  {
    tag: "IDENTITY",
    title: "Enterprise Identity Deployment",
    titleAr: "نشر إدارة الهوية المؤسسية",
    body: "Greenfield identity and access management architecture for a government ministry SSO, PAM vaulting, and IGA lifecycle management.",
    bodyAr: "بنية إدارة هوية ووصول جديدة بالكامل لوزارة حكومية تسجيل دخول موحّد، خزنة الحسابات المميزة، وإدارة دورة حياة الهوية.",
    sector: "Government",
    sectorAr: "الحكومة",
    coord: { en: "36.2°N · 44.0°E", ar: "٣٦.٢° ش · ٤٤.٠° شر" },
  },
  {
    tag: "SOFTWARE + AI",
    title: "Sovereign AI Operations Platform",
    titleAr: "منصة عمليات الذكاء الاصطناعي السيادي",
    body: "Custom agentic AI platform with private LLM deployment for internal operations automation at an American energy company.",
    bodyAr: "منصة ذكاء اصطناعي مخصصة مع نشر نموذج لغوي خاص لأتمتة العمليات الداخلية في شركة طاقة أمريكية.",
    sector: "Energy",
    sectorAr: "الطاقة",
    coord: { en: "30.5°N · 47.8°E", ar: "٣٠.٥° ش · ٤٧.٨° شر" },
  },
];

const SelectedWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("SELECTED WORK", "أعمالنا المختارة")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Engagements We Can Talk About", "مشاريع يمكننا الحديث عنها")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 560, marginTop: 10, lineHeight: 1.7 }}>
            {t("A selection of infrastructure, identity, and software engagements delivered for clients across USA's government, financial, and energy sectors.", "مجموعة مختارة من مشاريع البنية التحتية والهوية والبرمجيات المنجزة لعملاء في القطاعات الحكومية والمالية والطاقة في الولايات المتحدة.")}
          </p>
        </div>

        {/* Map list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {projects.map((project, index) => (
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
                  {t(project.coord.en, project.coord.ar)}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
                <span
                  className="font-mono font-[400] uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.12em", color: "hsl(var(--primary))" }}
                >
                  {project.tag}
                </span>
                <span
                  className="font-mono font-[400]"
                  style={{
                    fontSize: 9,
                    color: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.06)",
                    border: "1px solid hsl(var(--primary) / 0.2)",
                    padding: "2px 8px",
                    borderRadius: 2,
                  }}
                >
                  {t(project.sector, project.sectorAr)}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                  {t(project.title, project.titleAr)}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>
                  {t(project.body, project.bodyAr)}
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
          ))}
        </div>

        <p
          className="font-body font-[300] text-center"
          style={{
            fontSize: 13,
            color: "hsl(var(--muted-foreground))",
            fontStyle: "italic",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {t("Additional case studies and client references available under NDA during assessment engagement.", "دراسات حالة إضافية ومراجع عملاء متاحة بموجب اتفاقية عدم إفشاء خلال التقييم.")}
        </p>
      </div>
    </section>
  );
};

export default SelectedWork;
