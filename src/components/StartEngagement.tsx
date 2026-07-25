import { Server, Code, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


const StartEngagement = () => {
  const { t } = useLanguage();

  const paths = [
    {
      icon: Server,
      title: t("Infrastructure & Hosting", "البنية التحتية والاستضافة"),
      description: t("Start with a sovereignty and compliance assessment of your current hosting environment.", "ابدأ بتقييم السيادة والامتثال لبيئة الاستضافة الحالية."),
      cta: t("Request Infrastructure Assessment", "طلب تقييم البنية التحتية"),
      mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Infrastructure%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20infrastructure%20and%20sovereignty%20assessment.%0A%0AOrganization%3A%20%0ACurrent%20Environment%3A%20",
    },
    {
      icon: Code,
      title: t("Software or AI Project", "مشروع برمجيات أو ذكاء اصطناعي"),
      description: t("Describe your platform or AI system requirements and receive a scoped delivery proposal within 5 business days.", "صف متطلبات منصتك أو نظام الذكاء الاصطناعي واحصل على اقتراح تسليم محدد النطاق خلال 5 أيام عمل."),
      cta: t("Start a Project", "ابدأ مشروعاً"),
      mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Software%20%26%20AI%20Project%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20software%20or%20AI%20project.%0A%0AOrganization%3A%20%0AProject%20Description%3A%20",
    },
    {
      icon: Shield,
      title: t("Strategic Consulting", "استشارات استراتيجية"),
      description: t("Book a 60 minute architecture or security advisory session with a senior Silxor engineer.", "احجز جلسة استشارية مدتها 60 دقيقة حول البنية المعمارية أو الأمن مع مهندس Silxor أقدم."),
      cta: t("Book Advisory Session", "احجز جلسة استشارية"),
      mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Strategic%20Advisory%20Session%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20book%20a%2060-minute%20advisory%20session.%0A%0AOrganization%3A%20%0AFocus%20Area%3A%20",
    },
  ];

  return (
    <section id="contact" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{t("ENGAGE", "تعاون")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Ready to Build on Sovereign Infrastructure?", "هل أنت مستعد للبناء على بنية تحتية سيادية؟")}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t("Every Silxor engagement begins with a no cost Technical Assessment. Tell us what you're building and we'll tell you exactly how we can deliver it.", "كل تعاون مع Silxor يبدأ بتقييم تقني مجاني. أخبرنا بما تبنيه وسنخبرك بكيفية تسليمه.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="surface-elevated flex flex-col" style={{ padding: 14 }}>
                <Icon className="mb-5" style={{ width: 32, height: 32, color: "#F0F1F3" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 10 }}>
                  {path.title}
                </h3>
                <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 10 }}>
                  {path.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center" style={{ marginTop: 48 }}>
          <a
            href="/book"
            className="font-mono font-[400] uppercase transition-all duration-200 flex items-center gap-2"
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              backgroundColor: "#F0F1F3",
              color: "#0B0B0B",
              padding: "16px 32px",
              borderRadius: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F1F3")}
          >
            {t("Book an Assessment", "احجز تقييماً")}
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default StartEngagement;
