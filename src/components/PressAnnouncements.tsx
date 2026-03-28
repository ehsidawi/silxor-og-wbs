import { useLanguage } from "@/context/LanguageContext";

const announcements = [
  {
    date: "March 2026",
    dateAr: "مارس 2026",
    title: "IR4Q Achieves ISO/IEC 27001:2022 Certification",
    titleAr: "IR4Q تحصل على شهادة ISO/IEC 27001:2022",
    body: "IR4Q Technologies has completed ISO/IEC 27001:2022 certification, validating our information security management system across all service delivery operations.",
    bodyAr: "أتمّت IR4Q Technologies شهادة ISO/IEC 27001:2022، مما يؤكد نظام إدارة أمن المعلومات عبر جميع عمليات تقديم الخدمات.",
  },
  {
    date: "February 2026",
    dateAr: "فبراير 2026",
    title: "Sovereign AI Infrastructure Now Available",
    titleAr: "البنية التحتية للذكاء الاصطناعي السيادي متاحة الآن",
    body: "IR4Q launches private LLM deployment services for Iraqi enterprises and government agencies — fully air-gapped options included.",
    bodyAr: "IR4Q تطلق خدمات نشر النماذج اللغوية الخاصة للمؤسسات والجهات الحكومية العراقية — مع خيارات معزولة بالكامل.",
  },
  {
    date: "January 2026",
    dateAr: "يناير 2026",
    title: "Identity Services Practice Launched",
    titleAr: "إطلاق ممارسة خدمات الهوية الرقمية",
    body: "IR4Q formally launches its Identity & Access Management practice, covering PAM, CIAM, IGA, ITDR, and Zero Trust identity architecture.",
    bodyAr: "IR4Q تطلق رسمياً ممارسة إدارة الهوية والوصول، تشمل PAM و CIAM و IGA و ITDR وبنية هوية الثقة المعدومة.",
  },
];

const PressAnnouncements = () => {
  const { t } = useLanguage();

  return (
    <section id="press" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("ANNOUNCEMENTS", "الإعلانات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("Latest from IR4Q", "آخر أخبار IR4Q")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#8A8F9E", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t(
              "Updates on IR4Q infrastructure, partnerships, certifications, and technology developments.",
              "تحديثات حول بنية IR4Q التحتية والشراكات والشهادات والتطورات التقنية."
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="surface-elevated flex flex-col"
              style={{ padding: 24 }}
            >
              <div className="font-mono font-[400]" style={{ fontSize: 11, color: "#C9A84C", marginBottom: 12 }}>
                {t(item.date, item.dateAr)}
              </div>
              <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 10 }}>
                {t(item.title, item.titleAr)}
              </h3>
              <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#8A8F9E", lineHeight: 1.7, marginBottom: 16 }}>
                {t(item.body, item.bodyAr)}
              </p>
              <a
                href="#"
                className="font-body font-[400] transition-colors duration-200"
                style={{ fontSize: 13, color: "#C9A84C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E2C06A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A84C")}
              >
                {t("Read Announcement →", "اقرأ الإعلان ←")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressAnnouncements;
