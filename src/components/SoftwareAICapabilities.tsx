import { Code, Brain, Bot, Database, ShieldCheck, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SoftwareAICapabilities = () => {
  const { t } = useLanguage();

  const softwareTier = [
    { icon: Code, title: t("Custom Enterprise Software", "برمجيات مؤسسية مخصصة"), description: t("Full-cycle development for government portals, financial platforms, and operational systems.", "تطوير كامل الدورة لبوابات حكومية ومنصات مالية وأنظمة تشغيلية."), technical: "Web • Mobile • API • Integration" },
    { icon: Brain, title: t("Sovereign AI Deployment", "نشر الذكاء الاصطناعي السيادي"), description: t("Private LLM hosting on IR4Q infrastructure. No data leaves sovereign control.", "استضافة نماذج لغوية خاصة على بنية IR4Q. لا تخرج بيانات من السيطرة السيادية."), technical: "LLMs • RAG • Vector Search • Air-gap" },
    { icon: Bot, title: t("Agentic Automation", "الأتمتة الوكيلية"), description: t("AI agents for document processing, decision routing, and process orchestration.", "وكلاء ذكاء اصطناعي لمعالجة المستندات وتوجيه القرارات وتنسيق العمليات."), technical: "n8n • Agent workflows • API orchestration" },
  ];

  const enablementTier = [
    { icon: Database, title: t("Data Engineering", "هندسة البيانات"), description: t("Pipeline design, warehousing, and analytics with full lineage and compliance.", "خطوط بيانات ومستودعات وتحليلات مع سلالة كاملة وامتثال."), technical: "Pipelines • Warehousing • Audit trails" },
    { icon: ShieldCheck, title: t("Cybersecurity Engineering", "هندسة الأمن السيبراني"), description: t("Zero Trust, IAM, threat modeling, and security operations for high-risk environments.", "الثقة المعدومة وإدارة الهوية ونمذجة التهديدات لبيئات عالية المخاطر."), technical: "Zero Trust • IAM • Threat modeling • SOC" },
    { icon: Compass, title: t("Digital Transformation Advisory", "استشارات التحول الرقمي"), description: t("Technology strategy, architecture, vendor selection, and program delivery.", "استراتيجية تقنية وبنية معمارية واختيار موردين وتسليم برامج."), technical: "Strategy • Architecture • Program delivery" },
  ];

  const renderCard = (cap: typeof softwareTier[0], i: number, accent: string) => {
    const Icon = cap.icon;
    return (
      <div key={i} className="flex flex-col items-center">
        <div className="hidden md:block" style={{ width: 2, height: 16, backgroundColor: accent }} />
        <div
          className="surface-elevated w-full"
          style={{ padding: 18, borderRadius: 4, borderTop: `2px solid ${accent}` }}
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
  };

  return (
    <section id="software" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("SOFTWARE & AI", "البرمجيات والذكاء الاصطناعي")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Build & Deliver Capabilities", "قدرات البناء والتسليم")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t("From line of code to production deployment — engineered in Baghdad, secured globally.", "من سطر الكود إلى نشر الإنتاج — مهندسة في بغداد، مؤمنة عالمياً.")}
          </p>
        </div>

        {/* Org Chart Hierarchy */}
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
              IR4Q {t("Software & AI", "البرمجيات والذكاء الاصطناعي")}
            </span>
          </div>

          {/* Connector down */}
          <div style={{ width: 2, height: 28, backgroundColor: "rgba(201,168,76,0.3)" }} />

          {/* Software tier label */}
          <div className="font-mono font-[400] uppercase text-center" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#8A8F9E", marginBottom: 8 }}>
            {t("BUILD LAYER", "طبقة البناء")}
          </div>

          {/* Horizontal bar */}
          <div className="relative w-full hidden md:block" style={{ maxWidth: 700, height: 2, backgroundColor: "rgba(201,168,76,0.2)", margin: "0 auto" }} />

          {/* Software tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full" style={{ maxWidth: 780, marginTop: 0 }}>
            {softwareTier.map((cap, i) => renderCard(cap, i, "rgba(201,168,76,0.3)"))}
          </div>

          {/* Connector down */}
          <div style={{ width: 2, height: 28, backgroundColor: "rgba(201,168,76,0.2)", marginTop: 4 }} />

          {/* Enablement tier label */}
          <div className="font-mono font-[400] uppercase text-center" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#8A8F9E", marginBottom: 8 }}>
            {t("ENABLEMENT LAYER", "طبقة التمكين")}
          </div>

          {/* Horizontal bar */}
          <div className="relative w-full hidden md:block" style={{ maxWidth: 700, height: 2, backgroundColor: "rgba(201,168,76,0.12)", margin: "0 auto" }} />

          {/* Enablement tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full" style={{ maxWidth: 780, marginTop: 0 }}>
            {enablementTier.map((cap, i) => renderCard(cap, i, "rgba(201,168,76,0.15)"))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareAICapabilities;
