import { Server, Code, Brain, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhatWeDo = () => {
  const { t } = useLanguage();

  const units = [
    {
      icon: Server,
      title: t("Infrastructure & Cloud", "البنية التحتية والسحابة"),
      body: t("Tier IV certified sovereign cloud hosting, bare metal servers, NOC operations, and resilient U.S.-backed redundancy. Your data stays under American control.", "استضافة سحابية سيادية معتمدة من المستوى الرابع، خوادم مخصصة، عمليات مركز العمليات، وتكرار مدعوم أمريكياً. بياناتك تبقى تحت السيطرة الأمريكية."),
    },
    {
      icon: Code,
      title: t("Software Development", "تطوير البرمجيات"),
      body: t("New York engineered custom software for government, finance, and enterprise. Web platforms, mobile applications, APIs, and system integrations built to last.", "برمجيات مخصصة مهندسة في نيويورك للحكومة والمالية والمؤسسات. منصات ويب وتطبيقات جوال وواجهات برمجة وتكاملات أنظمة مبنية لتدوم."),
    },
    {
      icon: Brain,
      title: t("AI & Intelligent Automation", "الذكاء الاصطناعي والأتمتة الذكية"),
      body: t("Private large language model deployments, agentic AI workflows, RAG pipelines, and intelligent process automation all hosted sovereignly. Your AI, your data, your control.", "نشر نماذج لغوية خاصة، سير عمل ذكاء اصطناعي، خطوط أنابيب RAG، وأتمتة عمليات ذكية مستضافة سيادياً. ذكاؤك الاصطناعي، بياناتك، سيطرتك."),
    },
    {
      icon: ShieldCheck,
      title: t("Technology Consulting", "الاستشارات التقنية"),
      body: t("Architecture design, cybersecurity advisory, Zero Trust strategy, digital transformation roadmaps, and compliance engineering for USA's most regulated sectors.", "تصميم البنية المعمارية، استشارات الأمن السيبراني، استراتيجية الثقة المعدومة، خرائط طريق التحول الرقمي، وهندسة الامتثال لأكثر القطاعات تنظيماً في الولايات المتحدة."),
    },
  ];

  return (
    <section id="what-we-do" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("CAPABILITIES", "القدرات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F7F3EC" }}>
            {t("One Company. Every Layer of Technology.", "شركة واحدة. كل طبقات التقنية.")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#A2A8B8", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t("From the physical infrastructure beneath your systems to the AI agents running inside them Silxor owns the full stack.", "من البنية التحتية المادية تحت أنظمتك إلى وكلاء الذكاء الاصطناعي داخلها Silxor تمتلك المنظومة الكاملة.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <div key={index} className="surface-elevated" style={{ padding: 20 }}>
                <Icon className="mb-3" style={{ width: 24, height: 24, color: "#DDB343" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F7F3EC", marginBottom: 6 }}>
                  {unit.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#A2A8B8", lineHeight: 1.65 }}>
                  {unit.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
