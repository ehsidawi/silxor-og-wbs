import { Landmark, Banknote, Fuel, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhoWeServe = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Landmark,
      title: t("Government & Public Sector", "الحكومة والقطاع العام"),
      description: t("Sovereign systems for ministries and public institutions.", "أنظمة سيادية للوزارات والمؤسسات العامة."),
      coord: t("33.3°N · 44.4°E", "٣٣.٣° ش · ٤٤.٤° شر"),
    },
    {
      icon: Banknote,
      title: t("Financial Services & Banking", "الخدمات المالية والمصرفية"),
      description: t("Core banking, fintech, and security for regulated finance.", "أنظمة مصرفية وتقنية مالية وأمن للقطاع المنظم."),
      coord: t("36.2°N · 44.0°E", "٣٦.٢° ش · ٤٤.٠° شر"),
    },
    {
      icon: Fuel,
      title: t("Energy & Critical Infrastructure", "الطاقة والبنية التحتية الحيوية"),
      description: t("High availability systems for oil, gas, and utilities.", "أنظمة عالية التوفر للنفط والغاز والمرافق."),
      coord: t("30.5°N · 47.8°E", "٣٠.٥° ش · ٤٧.٨° شر"),
    },
    {
      icon: Building2,
      title: t("Enterprise & Private Sector", "الشركات والقطاع الخاص"),
      description: t("Technology partnership for enterprises scaling digital ops.", "شراكة تقنية للمؤسسات في توسيع عملياتها الرقمية."),
      coord: t("32.6°N · 44.0°E", "٣٢.٦° ش · ٤٤.٠° شر"),
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">{t("SECTORS", "القطاعات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Built for Critical Sectors", "مُصمَّم للقطاعات الحيوية")}
          </h2>
        </div>

        {/* Map list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
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
                    {sector.coord}
                  </span>
                </div>

                {/* Icon + Content */}
                <div className="relative z-10">
                  <div
                    className="mb-3"
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

                  <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                    {sector.title}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>
                    {sector.description}
                  </p>
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

export default WhoWeServe;
