import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const arFont = language === "ar" ? "'Cairo', sans-serif" : undefined;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: 72,
        paddingBottom: 48,
        backgroundColor: "#0B0B0B",
        color: "#FFFFFF",

      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage: "radial-gradient(#C5C7CB 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-content relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 w-fit"
              style={{
                padding: "6px 14px",
                border: "1px solid #25282C",
                backgroundColor: "#0B0B0B",
                borderRadius: 9999,
              }}
            >
              <span
                className="animate-pulse"
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#C5C7CB",
                  borderRadius: 9999,
                  display: "inline-block",
                }}
              />
              <span
                className="font-body uppercase"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#6E7378",
                  fontWeight: 500,
                  fontFamily: arFont,
                }}
              >
                {t("System Status: Sovereign Node Active", "الحالة: العقدة السيادية نشطة")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-[700]"
              style={{
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: language === "ar" ? "0em" : "-0.02em",
                fontFamily: arFont,
                fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
              }}
            >
              {t("Precision ", "الدقة ")}
              <span style={{ color: "#C5C7CB" }}>
                {t("Engineered", "المهندسة")}
              </span>
              {t(" For The Future.", " للمستقبل.")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-body"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#6E7378",
                maxWidth: 480,
                fontWeight: 400,
                fontFamily: arFont,
              }}
            >
              {t(
                "Architecting critical systems, private AI, and identity transformation for global institutions that ",
                "نصمم الأنظمة الحيوية والذكاء الاصطناعي الخاص وتحول الهوية لأكبر المؤسسات العالمية التي "
              )}
              <span style={{ color: "#C5C7CB", fontWeight: 500 }}>
                {t("cannot fail.", "لا تقبل الفشل.")}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
              style={{ paddingTop: 8 }}
            >
              <a
                href="mailto:contact@silxor.com?subject=Silxor%20-%20Technical%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20technical%20assessment%20with%20Silxor.%0A%0AOrganization%3A%20%0AService%20Interest%3A%20%0AMessage%3A%20"
                className="inline-flex items-center justify-center gap-2 font-display font-[700] uppercase transition-all duration-300"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  backgroundColor: "#C5C7CB",
                  color: "#0B0B0B",
                  padding: "16px 32px",
                  fontFamily: arFont,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(197,199,203,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C5C7CB";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {t("Request Technical Assessment", "طلب تقييم تقني")}
              </a>
              <a
                href="#infrastructure"
                className="inline-flex items-center justify-center gap-2 font-display font-[700] uppercase transition-all duration-300"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  color: "#C5C7CB",
                  border: "1px solid #25282C",
                  backgroundColor: "transparent",
                  padding: "16px 32px",
                  fontFamily: arFont,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#25282C";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#C5C7CB";
                }}
              >
                {t("Explore Our Services", "استكشف خدماتنا")}
              </a>
            </motion.div>

            {/* Compliance strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{
                paddingTop: 32,
                marginTop: 8,
                borderTop: "1px solid rgba(110,115,120,0.2)",
                opacity: 0.85,
              }}
            >
              {[
                { k: t("Standard", "المعيار"), v: "ISO 27001" },
                { k: t("Classification", "التصنيف"), v: t("TIER IV READY", "تير IV جاهز") },
                { k: t("Origin", "المنشأ"), v: "EQUINIX ASHBURN" },
              ].map((item) => (
                <div key={item.v} className="flex flex-col items-start">
                  <span
                    className="font-body uppercase"
                    style={{
                      fontSize: 10,
                      color: "#6E7378",
                      letterSpacing: "0.2em",
                      marginBottom: 4,
                      fontFamily: arFont,
                    }}
                  >
                    {item.k}
                  </span>
                  <span
                    className="font-display font-[700]"
                    style={{ fontSize: 12, color: "#FFFFFF", fontFamily: arFont }}
                  >
                    {item.v}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Visual Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              {/* Structural frames */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  border: "1px solid #25282C",
                  borderRadius: 16,
                  transform: "rotate(3deg) scale(0.96)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  border: "1px solid #6E7378",
                  borderRadius: 16,
                  transform: "rotate(-2deg)",
                  opacity: 0.3,
                }}
              />

              {/* Main visual */}
              <div
                className="absolute inset-0 overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: "#25282C",
                  borderRadius: 16,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    background: "linear-gradient(135deg, #25282C 0%, #0B0B0B 50%, #25282C 100%)",
                  }}
                >
                  {/* Dot grid */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      opacity: 0.1,
                      backgroundImage: "radial-gradient(#6E7378 0.5px, transparent 0.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Inner corner frame */}
                  <div
                    aria-hidden
                    className="absolute"
                    style={{
                      inset: 48,
                      borderLeft: "1px solid rgba(110,115,120,0.4)",
                      borderTop: "1px solid rgba(110,115,120,0.4)",
                    }}
                  />

                  {/* Cross lines + node */}
                  <div className="absolute flex items-center justify-center" style={{ inset: 80 }}>
                    <div
                      className="w-full"
                      style={{
                        height: 1,
                        background:
                          "linear-gradient(to right, transparent, #C5C7CB, transparent)",
                      }}
                    />
                    <div
                      className="absolute h-full"
                      style={{
                        width: 1,
                        background:
                          "linear-gradient(to bottom, transparent, #C5C7CB, transparent)",
                      }}
                    />
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        width: 64,
                        height: 64,
                        backgroundColor: "#C5C7CB",
                        transform: "rotate(45deg)",
                        border: "4px solid #0B0B0B",
                        boxShadow: "0 0 40px rgba(197,199,203,0.2)",
                      }}
                    >
                      <div style={{ width: 8, height: 8, backgroundColor: "#0B0B0B" }} />
                    </div>
                  </div>

                  {/* Callout */}
                  <div
                    className="absolute flex flex-col gap-1"
                    style={{ bottom: 32, left: 32 }}
                  >
                    <div style={{ height: 1, width: 32, backgroundColor: "#C5C7CB" }} />
                    <span
                      className="uppercase font-body"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        color: "#C5C7CB",
                        fontFamily: arFont,
                      }}
                    >
                      {t("Structural Lock", "قفل هيكلي")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ambient glows */}
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  top: -16,
                  right: -16,
                  width: 96,
                  height: 96,
                  backgroundColor: "#C5C7CB",
                  filter: "blur(80px)",
                  opacity: 0.1,
                }}
              />
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  bottom: -32,
                  left: -32,
                  width: 128,
                  height: 128,
                  backgroundColor: "#6E7378",
                  filter: "blur(100px)",
                  opacity: 0.1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
