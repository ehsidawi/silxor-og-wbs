import { ArrowRight, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const arFont = language === "ar" ? "'Cairo', sans-serif" : undefined;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: 120,
        paddingBottom: 80,
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 70%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 60 60 M 0 0 L 0 60 M 0 60 L 60 60 M 0 0 L 60 0' stroke='rgba(255,255,255,0.02)' stroke-width='1' fill='none'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"),
          #080A0F
        `,
      }}
    >
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 hidden lg:block" style={{ zIndex: 0 }}>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" style={{ overflow: 'hidden' }}>
          {/* Matrix rain columns */}
          {Array.from({ length: 16 }).map((_, col) => {
            const x = col * 25 + 12;
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            return Array.from({ length: 20 }).map((_, row) => {
              const char = chars[Math.floor(Math.random() * chars.length)];
              const delay = (col * 0.3 + row * 0.15) % 4;
              const y = row * 20 + 10;
              return (
                <text
                  key={`${col}-${row}`}
                  x={x}
                  y={y}
                  fill="rgba(201,168,76,0.15)"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize={12}
                  textAnchor="middle"
                >
                  {char}
                  <animate attributeName="opacity" values="0.05;0.25;0.05" dur={`${2 + delay}s`} begin={`${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="fill" values="rgba(201,168,76,0.08);rgba(201,168,76,0.3);rgba(201,168,76,0.08)" dur={`${2 + delay}s`} begin={`${delay}s`} repeatCount="indefinite" />
                </text>
              );
            });
          })}
        </svg>
      </div>

      <div className="container-content relative" style={{ zIndex: 1 }}>
        <div>
          <div style={{ maxWidth: 700 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-eyebrow blink-cursor mb-5"
              style={{ marginBottom: 20, fontFamily: arFont }}
            >
              {t("IR4Q TECHNOLOGIES", "IR4Q تكنولوجيز")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-[800] hero-headline text-4xl font-mono"
              style={{ lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EDE8", maxWidth: 860, marginBottom: 28, fontFamily: arFont }}
            >
              {language === "ar" ? (
                <>
                  <span style={{ display: "block", marginBottom: 8 }}>مُكلَّفون من مؤسسات لا <span style={{ color: "#C9A84C" }}>تتحمل الفشل.</span></span>
                  <span style={{ display: "block" }}>مهندَسون لل<span style={{ color: "#C9A84C" }}>تحول على نطاق واسع.</span></span>
                </>
              ) : (
                <>
                  <span className="text-4xl" style={{ display: "block", marginBottom: 8 }}>Commissioned by Institutions That <span style={{ color: "#C9A84C" }}>Cannot Fail.</span></span>
                  <span className="text-4xl" style={{ display: "block" }}>Engineered to <span style={{ color: "#C9A84C" }}>Transform at Scale.</span></span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-body font-[300]"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#8A8F9E", maxWidth: 520, marginTop: 24, fontFamily: arFont }}
            >
              {t(
                "IR4Q architects, engineers, and operates the critical systems powering the most demanding institutions — from sovereign cloud infrastructure to enterprise software, private AI, and identity transformation.",
                "IR4Q تصمم وتهندس وتشغّل الأنظمة الحيوية التي تدعم أكثر المؤسسات صرامة في متطلباتها — من البنية التحتية السحابية السيادية إلى البرمجيات المؤسسية والذكاء الاصطناعي الخاص وتحول منظومة الهوية."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
              style={{ marginTop: 40 }}
            >
              <a
                href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-body font-[500] uppercase transition-all duration-200"
                style={{
                  fontSize: 13, letterSpacing: "0.1em", backgroundColor: "#C9A84C", color: "#080A0F",
                  padding: "14px 28px", borderRadius: 2, fontFamily: arFont,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E2C06A"; e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9A84C"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {t("Request Technical Assessment", "طلب تقييم تقني")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#infrastructure"
                className="inline-flex items-center justify-center gap-2 font-body font-[500] uppercase transition-all duration-200"
                style={{
                  fontSize: 13, letterSpacing: "0.1em", color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.4)", backgroundColor: "transparent",
                  padding: "14px 28px", borderRadius: 2, fontFamily: arFont,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                {t("Explore Our Services", "استكشف خدماتنا")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="flex flex-wrap gap-[10px]"
              style={{ marginTop: 48 }}
            >
              <span className="badge-pill">
                <Shield className="w-3 h-3 flex-shrink-0" />
                ISO/IEC 27001:2022 {t("Certified", "معتمد")}
              </span>
              <span className="badge-pill">
                Uptime Institute Tier-IV {t("Ready", "جاهز")}
              </span>
              <span className="badge-pill">
                <Globe className="w-3 h-3 flex-shrink-0" />
                {t("Hosted at Equinix Ashburn", "مستضاف في Equinix أشبرن")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
