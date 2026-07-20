import { useLanguage } from "@/context/LanguageContext";

const ProcessFlow = () => {
  const { t } = useLanguage();

  const stages = [
    { title: t("Request Assessment", "طلب التقييم"), description: t("Technical evaluation and feasibility analysis", "التقييم التقني وتحليل الجدوى") },
    { title: t("Architect & Design", "التصميم والهندسة المعمارية"), description: t("Infrastructure planning and security review", "تخطيط البنية التحتية ومراجعة الأمن") },
    { title: t("Engineer & Build", "البناء والتطوير"), description: t("Development and integration with quality assurance", "التطوير والتكامل مع ضمان الجودة") },
    { title: t("Deploy & Host", "النشر والاستضافة"), description: t("Production deployment to Tier IV infrastructure", "نشر الإنتاج على بنية تحتية من المستوى الرابع") },
    { title: t("Manage & Iterate", "الإدارة والتحسين المستمر"), description: t("24/7 monitoring and continuous improvement", "مراقبة على مدار الساعة وتحسين مستمر") },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{t("PROCESS", "العملية")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Enterprise Delivery Process", "عملية التسليم المؤسسية")}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#6E7378", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t("Whether we're deploying cloud infrastructure, delivering a software platform, or standing up a sovereign AI system our structured delivery process ensures precision at every stage.", "سواء كنا ننشر بنية تحتية سحابية أو نسلم منصة برمجيات أو نقيم نظام ذكاء اصطناعي سيادي عمليتنا المنظمة تضمن الدقة في كل مرحلة.")}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-4 left-0 right-0" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between">
              {stages.map((stage, index) => (
                <div key={index} className="relative flex flex-col items-center" style={{ flex: 1, maxWidth: 200 }}>
                  <div className="relative z-10 flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(197,199,203,0.4)", backgroundColor: "#0B0B0B" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C5C7CB" }} />
                  </div>
                  <div className="text-center" style={{ marginTop: 24 }}>
                    <div className="font-mono font-[400]" style={{ fontSize: 10, color: "#C5C7CB", letterSpacing: "0.15em", marginBottom: 8 }}>
                      {t("STAGE", "مرحلة")} {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 6 }}>{stage.title}</h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13, color: "#6E7378", lineHeight: 1.6 }}>{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          {stages.map((stage, index) => (
            <div key={index} className="flex gap-2" style={{ marginBottom: index < stages.length - 1 ? 32 : 0 }}>
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(197,199,203,0.4)", backgroundColor: "#0B0B0B" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C5C7CB" }} />
                </div>
                {index < stages.length - 1 && (
                  <div className="flex-1" style={{ width: 1, backgroundColor: "rgba(255,255,255,0.08)", marginTop: 4 }} />
                )}
              </div>
              <div style={{ paddingBottom: 8 }}>
                <div className="font-mono font-[400]" style={{ fontSize: 10, color: "#C5C7CB", letterSpacing: "0.15em", marginBottom: 4 }}>
                  {t("STAGE", "مرحلة")} {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 4 }}>{stage.title}</h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#6E7378", lineHeight: 1.6 }}>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
