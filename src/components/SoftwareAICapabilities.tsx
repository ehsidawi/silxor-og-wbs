import { Code, Brain, Bot, Database, ShieldCheck, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SoftwareAICapabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Code, title: t("Custom Enterprise Software", "برمجيات مؤسسية مخصصة"), description: t("Full cycle development for government portals, financial platforms, and operational systems.", "تطوير كامل الدورة لبوابات حكومية ومنصات مالية وأنظمة تشغيلية."), technical: "Web • Mobile • API • Integration", layer: t("BUILD", "بناء"), coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Brain, title: t("Sovereign AI Deployment", "نشر الذكاء الاصطناعي السيادي"), description: t("Private LLM hosting on Silxor infrastructure. No data leaves sovereign control.", "استضافة نماذج لغوية خاصة على بنية Silxor. لا تخرج بيانات من السيطرة السيادية."), technical: "LLMs • RAG • Vector Search • Air gap", layer: t("BUILD", "بناء"), coord: t("36.2°N · 44.0°E", "٣٦.٢° ش · ٤٤.٠° شر") },
    { icon: Bot, title: t("Agentic Automation", "الأتمتة الوكيلية"), description: t("AI agents for document processing, decision routing, and process orchestration.", "وكلاء ذكاء اصطناعي لمعالجة المستندات وتوجيه القرارات وتنسيق العمليات."), technical: "n8n • Agent workflows • API orchestration", layer: t("BUILD", "بناء"), coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Database, title: t("Data Engineering", "هندسة البيانات"), description: t("Pipeline design, warehousing, and analytics with full lineage and compliance.", "خطوط بيانات ومستودعات وتحليلات مع سلالة كاملة وامتثال."), technical: "Pipelines • Warehousing • Audit trails", layer: t("ENABLE", "تمكين"), coord: t("30.5°N · 47.8°E", "٣٠.٥° ش · ٤٧.٨° شر") },
    { icon: ShieldCheck, title: t("Cybersecurity Engineering", "هندسة الأمن السيبراني"), description: t("Zero Trust, IAM, threat modeling, and security operations for high risk environments.", "الثقة المعدومة وإدارة الهوية ونمذجة التهديدات لبيئات عالية المخاطر."), technical: "Zero Trust • IAM • Threat modeling • SOC", layer: t("ENABLE", "تمكين"), coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر") },
    { icon: Compass, title: t("Digital Transformation Advisory", "استشارات التحول الرقمي"), description: t("Technology strategy, architecture, vendor selection, and program delivery.", "استراتيجية تقنية وبنية معمارية واختيار موردين وتسليم برامج."), technical: "Strategy • Architecture • Program delivery", layer: t("ENABLE", "تمكين"), coord: t("32.6°N · 44.0°E", "٣٢.٦° ش · ٤٤.٠° شر") },
  ];

  return (
    <section id="software" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("SOFTWARE & AI", "البرمجيات والذكاء الاصطناعي")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Build & Deliver Capabilities", "قدرات البناء والتسليم")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t("From line of code to production deployment engineered in New York, secured globally.", "من سطر الكود إلى نشر الإنتاج مهندسة في نيويورك، مؤمنة عالمياً.")}
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

                {/* Layer tag + icon */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div
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
                    <span
                      className="font-mono font-[400]"
                      style={{
                        fontSize: 9,
                        color: "hsl(var(--primary))",
                        backgroundColor: "hsl(var(--primary) / 0.06)",
                        border: "1px solid hsl(var(--primary) / 0.2)",
                        padding: "2px 8px",
                        borderRadius: 2,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {cap.layer}
                    </span>
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

export default SoftwareAICapabilities;
