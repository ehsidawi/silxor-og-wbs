import { Cloud, Shield, Server, Wrench, Database, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Cloud, title: t("Sovereign Cloud Hosting", "الاستضافة السحابية السيادية"), description: t("Enterprise-grade cloud infrastructure with complete data sovereignty. Iraqi-operated control planes with U.S.-grade redundancy protocols.", "بنية سحابية مؤسسية بسيادة بيانات كاملة. مستويات تحكم عراقية التشغيل مع بروتوكولات تكرار بمعايير أمريكية."), technical: "Hosted in Ashburn, VA • <120ms to Baghdad • 99.995% SLA" },
    { icon: Shield, title: t("Critical Infrastructure Security", "أمن البنية التحتية الحيوية"), description: t("Military-grade security architecture designed for financial institutions and government agencies. Continuous threat monitoring and compliance automation.", "بنية أمنية بمستوى عسكري مصممة للمؤسسات المالية والجهات الحكومية. مراقبة تهديدات مستمرة وأتمتة الامتثال."), technical: "ISO 27001 • SOC 2 Type II • AES-256 encryption at rest and in transit" },
    { icon: Server, title: t("Dedicated Infrastructure", "بنية تحتية مخصصة"), description: t("Bare-metal servers and private cloud configurations optimized for regulated workloads requiring physical isolation and audit trails.", "خوادم مخصصة وتكوينات سحابية خاصة محسنة لأحمال العمل المنظمة التي تتطلب عزل مادي ومسارات تدقيق."), technical: "Tier-IV certified • N+2 power redundancy • 2x network paths" },
    { icon: Database, title: t("Data Residency & Compliance", "إقامة البيانات والامتثال"), description: t("Structured data management solutions ensuring regulatory compliance across Iraqi and international frameworks with automated backup protocols.", "حلول إدارة بيانات منظمة تضمن الامتثال التنظيمي عبر الأطر العراقية والدولية مع بروتوكولات نسخ احتياطي آلية."), technical: "GDPR-ready • Daily automated backups • <30s RTO • RPO: 15min" },
    { icon: Wrench, title: t("Managed Operations", "العمليات المدارة"), description: t("24/7 Iraqi-based NOC with escalation to U.S. engineering teams. Proactive monitoring, incident response, and capacity planning.", "مركز عمليات شبكة عراقي على مدار الساعة مع تصعيد لفرق هندسية أمريكية. مراقبة استباقية واستجابة للحوادث وتخطيط السعة."), technical: "Baghdad NOC • Virginia Tier-3 support • <15min P1 response" },
    { icon: Gauge, title: t("Performance Engineering", "هندسة الأداء"), description: t("Continuous infrastructure optimization through real-time telemetry, predictive scaling, and latency reduction protocols.", "تحسين مستمر للبنية التحتية عبر القياس عن بعد في الوقت الفعلي والتوسيع التنبؤي وبروتوكولات تقليل زمن الاستجابة."), technical: "Real-time metrics • Predictive autoscaling • 99.9th percentile <100ms" },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("INFRASTRUCTURE", "البنية التحتية")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Infrastructure Capabilities", "قدرات البنية التحتية")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t("Enterprise-grade sovereign cloud and security infrastructure — the foundation everything else is built on.", "بنية سحابية وأمنية سيادية بمعايير مؤسسية — الأساس الذي يُبنى عليه كل شيء آخر.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="surface-elevated" style={{ padding: 20 }}>
                <Icon className="mb-3" style={{ width: 24, height: 24, color: "#C9A84C" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 6 }}>{capability.title}</h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65, marginBottom: 12 }}>{capability.description}</p>
                <p className="font-mono font-[400]" style={{ fontSize: 10, color: "#C9A84C", opacity: 0.7, letterSpacing: "0.05em" }}>{capability.technical}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
