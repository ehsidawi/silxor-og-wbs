import { useLanguage } from "@/context/LanguageContext";

const WhyIR4Q = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("Sovereign by Design", "سيادية بالتصميم"),
      body: t(
        "Every system IR4Q builds, hosts, or operates is architectured for Iraqi data sovereignty. Control planes stay in-country. Data residency is enforced at the infrastructure level — not promised in a policy.",
        "كل نظام تبنيه أو تستضيفه أو تشغله IR4Q مصمم لسيادة البيانات العراقية. تبقى مستويات التحكم داخل البلاد. إقامة البيانات مفروضة على مستوى البنية التحتية — وليس مجرد وعد في سياسة."
      ),
    },
    {
      title: t("Baghdad-Built, Globally Hardened", "مبنية في بغداد، محصّنة عالمياً"),
      body: t(
        "Our engineering teams are Iraqi. Our infrastructure is Tier-IV certified and ISO 27001:2022 compliant. You get local accountability with international-grade reliability.",
        "فرقنا الهندسية عراقية. بنيتنا التحتية معتمدة من المستوى الرابع ومتوافقة مع ISO 27001:2022. تحصل على مساءلة محلية مع موثوقية بمعايير دولية."
      ),
    },
    {
      title: t("One Partner, No Gaps", "شريك واحد، بلا ثغرات"),
      body: t(
        "IR4Q eliminates the fragmentation of working with separate vendors for hosting, software, security, and AI. One contract. One SLA. One team that owns the outcome end to end.",
        "IR4Q تزيل تشتت العمل مع موردين منفصلين للاستضافة والبرمجيات والأمن والذكاء الاصطناعي. عقد واحد. اتفاقية مستوى خدمة واحدة. فريق واحد يملك النتيجة من البداية إلى النهاية."
      ),
    },
  ];

  return (
    <section id="why-ir4q" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("WHY IR4Q", "لماذا IR4Q")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("The Only Technology Company That Owns the Full Stack", "الشركة التقنية الوحيدة التي تمتلك المنظومة الكاملة")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <div key={index} className="surface-elevated" style={{ padding: 20 }}>
              <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#F0EDE8", marginBottom: 6 }}>
                {pillar.title}
              </h3>
              <p className="font-body font-[300]" style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.65 }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIR4Q;
