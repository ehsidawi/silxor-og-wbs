import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const arFont = language === "ar" ? "'Cairo', sans-serif" : undefined;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: 140,
        paddingBottom: 120,
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

      {/* Corner frame accents */}
      <div aria-hidden className="absolute top-24 left-6 md:left-12" style={{ width: 48, height: 1, backgroundColor: "rgba(110,115,120,0.4)" }} />
      <div aria-hidden className="absolute top-24 left-6 md:left-12" style={{ width: 1, height: 48, backgroundColor: "rgba(110,115,120,0.4)" }} />
      <div aria-hidden className="absolute bottom-12 right-6 md:right-12" style={{ width: 48, height: 1, backgroundColor: "rgba(110,115,120,0.4)" }} />
      <div aria-hidden className="absolute bottom-12 right-6 md:right-12" style={{ width: 1, height: 48, backgroundColor: "rgba(110,115,120,0.4)" }} />

      <div className="container-content relative" style={{ zIndex: 1 }}>
        <div className="flex flex-col items-center text-center" style={{ gap: 48 }}>
          {/* Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3"
            style={{
              padding: "6px 14px",
              border: "1px solid rgba(110,115,120,0.35)",
              backgroundColor: "#0B0B0B",
            }}
          >
            <span
              className="animate-pulse"
              style={{ width: 6, height: 6, backgroundColor: "#C5C7CB", display: "inline-block" }}
            />
            <span
              className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.3em", color: "#6E7378", fontFamily: arFont }}
            >
              {t("System Status: Sovereign Node Active", "الحالة: العقدة السيادية نشطة")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-[800] uppercase hero-headline"
            style={{
              color: "#FFFFFF",
              lineHeight: 0.92,
              letterSpacing: language === "ar" ? "0em" : "-0.03em",
              maxWidth: 1100,
              fontFamily: arFont,
            }}
          >
            {t("Silxor Tech", "سيلكسور تك")}
            <br />
            <span style={{ color: "#C5C7CB" }}>
              {t("and Cyber Global", "وسايبر العالمية")}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-body font-[300]"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "#C5C7CB",
              maxWidth: 640,
              fontFamily: arFont,
              opacity: 0.9,
            }}
          >
            {t(
              "Architecting critical systems, private AI, and identity transformation for global institutions that ",
              "نصمم الأنظمة الحيوية والذكاء الاصطناعي الخاص وتحول الهوية لأكبر المؤسسات العالمية التي "
            )}
            <span style={{ color: "#FFFFFF", fontWeight: 500 }}>
              {t("cannot fail.", "لا تقبل الفشل.")}
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full"
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
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C5C7CB")}
            >
              {t("Request Technical Assessment", "طلب تقييم تقني")}
            </a>
            <a
              href="#infrastructure"
              className="inline-flex items-center justify-center gap-2 font-display font-[700] uppercase transition-all duration-300"
              style={{
                fontSize: 13,
                letterSpacing: "0.12em",
                color: "#FFFFFF",
                border: "1px solid #6E7378",
                backgroundColor: "transparent",
                padding: "16px 32px",
                fontFamily: arFont,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {t("Explore Our Services", "استكشف خدماتنا")}
            </a>
          </motion.div>

          {/* Compliance Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              paddingTop: 48,
              marginTop: 16,
              borderTop: "1px solid rgba(110,115,120,0.2)",
              opacity: 0.75,
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {[
                { k: t("Standard", "المعيار"), v: "ISO 27001" },
                { k: t("Classification", "التصنيف"), v: t("TIER IV READY", "تير IV جاهز") },
                { k: t("Origin", "المنشأ"), v: "EQUINIX ASHBURN" },
              ].map((item, i, arr) => (
                <div key={item.v} className="flex items-center gap-10">
                  <div className="flex flex-col items-start">
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: 10, color: "#6E7378", letterSpacing: "0.2em", marginBottom: 4, fontFamily: arFont }}
                    >
                      {item.k}
                    </span>
                    <span className="font-display font-[700]" style={{ fontSize: 13, color: "#FFFFFF", fontFamily: arFont }}>
                      {item.v}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span aria-hidden style={{ width: 1, height: 32, backgroundColor: "rgba(110,115,120,0.3)" }} className="hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex gap-1">
              <div style={{ width: 4, height: 24, backgroundColor: "rgba(110,115,120,0.4)" }} />
              <div style={{ width: 4, height: 24, backgroundColor: "rgba(110,115,120,0.2)" }} />
              <div style={{ width: 4, height: 24, backgroundColor: "rgba(110,115,120,0.1)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
