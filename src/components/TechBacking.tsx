import { Server, Activity, Lock, Shield, Globe, Network } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TechBacking = () => {
  const { t } = useLanguage();

  const archItems = [
    {
      icon: Globe,
      title: t("New York Point of Presence", "نقطة تواجد نيويورك"),
      description: t(
        "Primary sovereign data center with full operational control. All control plane operations remain within American jurisdiction.",
        "مركز بيانات سيادي رئيسي مع تحكم تشغيلي كامل. جميع عمليات مستوى التحكم تبقى ضمن الولاية القضائية الأمريكية."
      ),
      technical: t("Primary PoP · American Jurisdiction", "نقطة تواجد رئيسية · الولاية الأمريكية"),
      coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
      tag: t("ORIGIN", "المصدر"),
    },
    {
      icon: Lock,
      title: t("Encrypted Transit Path", "مسار النقل المشفر"),
      description: t(
        "AES-256 encryption over dedicated fiber with automatic failover in under 30 seconds. Zero data exposure in transit.",
        "تشفير AES-256 عبر ألياف مخصصة مع تجاوز فشل تلقائي في أقل من 30 ثانية. لا تعرض للبيانات أثناء النقل."
      ),
      technical: t("AES-256 · Dedicated Fiber · <30s Failover", "AES-256 · ألياف مخصصة · <30 ثانية تجاوز فشل"),
      coord: { en: "36.2°N · 44.0°E", ar: "٣٦.٢° ش · ٤٤.٠° شر" },
      tag: t("TRANSIT", "النقل"),
    },
    {
      icon: Server,
      title: t("Ashburn Tier-IV Facility", "منشأة آشبورن Tier-IV"),
      description: t(
        "Uptime Institute Tier-IV certified with SOC 2 Type II attestation. Continuous compliance monitoring and annual third-party audits.",
        "معتمدة من Uptime Institute Tier-IV مع شهادة SOC 2 Type II. مراقبة امتثال مستمرة وتدقيق سنوي من طرف ثالث."
      ),
      technical: t("Tier-IV · SOC 2 · 99.995% SLA", "Tier-IV · SOC 2 · 99.995% SLA"),
      coord: { en: "39.0°N · 77.5°W", ar: "٣٩.٠° ش · ٧٧.٥° غ" },
      tag: t("BACKUP", "النسخ الاحتياطي"),
    },
    {
      icon: Activity,
      title: t("American Infrastructure Standards", "معايير البنية التحتية الأمريكية"),
      description: t(
        "Built on Uptime Institute Tier-IV certified facilities. All systems undergo continuous compliance monitoring and annual third-party audits.",
        "مبنية على منشآت معتمدة من Uptime Institute Tier-IV. تخضع جميع الأنظمة لمراقبة امتثال مستمرة وتدقيق سنوي."
      ),
      technical: t("Tier-IV Certified · Continuous Audit", "معتمد Tier-IV · تدقيق مستمر"),
      coord: { en: "38.9°N · 77.0°W", ar: "٣٨.٩° ش · ٧٧.٠° غ" },
      tag: t("STANDARD", "المعايير"),
    },
    {
      icon: Network,
      title: t("American Operational Control", "التحكم التشغيلي الأمريكي"),
      description: t(
        "Local engineering teams maintain operational sovereignty while leveraging global infrastructure. U.S. infrastructure serves as resilient backing.",
        "تحافظ الفرق الهندسية المحلية على السيادة التشغيلية مع الاستفادة من البنية التحتية العالمية."
      ),
      technical: t("Sovereign Ops · Local Control Plane", "عمليات سيادية · مستوى تحكم محلي"),
      coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
      tag: t("CONTROL", "التحكم"),
    },
    {
      icon: Shield,
      title: t("Compliance & Certifications", "الامتثال والشهادات"),
      description: t(
        "ISO/IEC 27001:2022, SOC 2 Type II, GDPR-Ready, and Tier-IV Certified. Full compliance documentation and audit support included.",
        "ISO/IEC 27001:2022 و SOC 2 Type II و GDPR-Ready و Tier-IV Certified. توثيق امتثال كامل ودعم تدقيق مضمن."
      ),
      technical: t("ISO 27001 · SOC 2 · GDPR · Tier-IV", "ISO 27001 · SOC 2 · GDPR · Tier-IV"),
      coord: { en: "30.5°N · 47.8°E", ar: "٣٠.٥° ش · ٤٧.٨° شر" },
      tag: t("COMPLY", "الامتثال"),
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("ARCHITECTURE", "البنية المعمارية")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Dual-Continent Resilience Architecture", "بنية مرونة عبر قارتين")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 520, marginTop: 10, lineHeight: 1.7 }}>
            {t(
              "Silxor operates a distributed infrastructure model ensuring data sovereignty while maintaining enterprise-grade reliability through U.S. Tier-IV certification.",
              "تدير Silxor نموذج بنية تحتية موزع يضمن سيادة البيانات مع الحفاظ على موثوقية بمستوى المؤسسات من خلال شهادة Tier-IV الأمريكية."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {archItems.map((item, index) => {
            const Icon = item.icon;
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

                {/* Coordinate tag */}
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
                    {t(item.coord.en, item.coord.ar)}
                  </span>
                </div>

                {/* Icon + Content */}
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
                      className="font-mono font-[500] uppercase"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        color: "hsl(var(--primary))",
                        backgroundColor: "hsl(var(--primary) / 0.08)",
                        border: "1px solid hsl(var(--primary) / 0.2)",
                        padding: "2px 8px",
                        borderRadius: 2,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65, marginBottom: 12 }}>
                    {item.description}
                  </p>

                  <div
                    className="font-mono font-[400]"
                    style={{
                      fontSize: 10,
                      color: "hsl(var(--muted-foreground))",
                      backgroundColor: "hsl(var(--primary) / 0.04)",
                      border: "1px solid hsl(var(--primary) / 0.1)",
                      padding: "4px 8px",
                      borderRadius: 2,
                      display: "inline-block",
                    }}
                  >
                    {item.technical}
                  </div>
                </div>

                {/* Corner crosshair accent */}
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

export default TechBacking;
