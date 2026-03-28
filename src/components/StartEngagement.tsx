import { Server, Code, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

const StartEngagement = () => {
  const { t } = useLanguage();

  const paths = [
    {
      icon: Server,
      title: t("Infrastructure & Hosting", "البنية التحتية والاستضافة"),
      description: t(
        "Start with a sovereignty and compliance assessment of your current hosting environment.",
        "ابدأ بتقييم السيادة والامتثال لبيئة الاستضافة الحالية."
      ),
      cta: t("Request Infrastructure Assessment", "طلب تقييم البنية التحتية"),
    },
    {
      icon: Code,
      title: t("Software or AI Project", "مشروع برمجيات أو ذكاء اصطناعي"),
      description: t(
        "Describe your platform or AI system requirements and receive a scoped delivery proposal within 5 business days.",
        "صف متطلبات منصتك أو نظام الذكاء الاصطناعي واحصل على اقتراح تسليم محدد النطاق خلال 5 أيام عمل."
      ),
      cta: t("Start a Project", "ابدأ مشروعاً"),
    },
    {
      icon: Shield,
      title: t("Strategic Consulting", "استشارات استراتيجية"),
      description: t(
        "Book a 60-minute architecture or security advisory session with a senior IR4Q engineer.",
        "احجز جلسة استشارية مدتها 60 دقيقة حول البنية المعمارية أو الأمن مع مهندس IR4Q أقدم."
      ),
      cta: t("Book Advisory Session", "احجز جلسة استشارية"),
    },
  ];

  return (
    <section id="contact" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{t("ENGAGE", "تعاون")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Ready to Build on Sovereign Infrastructure?", "هل أنت مستعد للبناء على بنية تحتية سيادية؟")}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#8A8F9E", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t(
              "Every IR4Q engagement begins with a no-cost Technical Assessment. Tell us what you're building and we'll tell you exactly how we can deliver it.",
              "كل تعاون مع IR4Q يبدأ بتقييم تقني مجاني. أخبرنا بما تبنيه وسنخبرك بكيفية تسليمه."
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="surface-elevated flex flex-col" style={{ padding: 32 }}>
                <Icon className="mb-5" style={{ width: 32, height: 32, color: "#C9A84C" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 17, color: "#F0EDE8", marginBottom: 10 }}>
                  {path.title}
                </h3>
                <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#8A8F9E", lineHeight: 1.7, marginBottom: 24 }}>
                  {path.description}
                </p>
                <a
                  href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    border: "1px solid rgba(201,168,76,0.4)",
                    color: "#C9A84C",
                    padding: "12px 20px",
                    borderRadius: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C9A84C";
                    e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {path.cta}
                </a>
              </div>
            );
          })}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default StartEngagement;
