import { Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: "#0B0B0B", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0 24px" }}>
      <div className="container-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display font-[800]" style={{ fontSize: 24, color: "#FFFFFF" }}>
                Silxor
                <span className="inline-block ml-1" style={{ width: 6, height: 6, backgroundColor: "#C5C7CB", verticalAlign: "middle", marginBottom: 2 }} />
              </span>
            </div>
            <p className="font-body font-[300]" style={{ fontSize: 14, color: "#6E7378", lineHeight: 1.7 }}>
              {t("Silxor Tech and Cyber Global delivers infrastructure, software, AI, and identity management for the systems that matter most.", "تقدم سيلكسور تك وسايبر العالمية البنية التحتية والبرمجيات والذكاء الاصطناعي وإدارة الهوية للأنظمة الأكثر أهمية.")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 20 }}>
              {t("Services", "الخدمات")}
            </h4>
            <nav className="space-y-3">
              {[
                { label: t("Infrastructure & Cloud", "البنية التحتية والسحابة"), href: "#infrastructure" },
                { label: t("Software Development", "تطوير البرمجيات"), href: "#software" },
                { label: t("AI & Automation", "الذكاء الاصطناعي والأتمتة"), href: "#ai" },
                { label: t("Identity & Access Mgmt", "إدارة الهوية والوصول"), href: "#identity" },
                { label: t("Technology Consulting", "الاستشارات التقنية"), href: "#consulting" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block font-body font-[300] transition-colors duration-200" style={{ fontSize: 14, color: "#6E7378" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5C7CB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6E7378")}
                >{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-body font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 20 }}>
              {t("Packages", "الباقات")}
            </h4>
            <nav className="space-y-3">
              {[
                t("Infrastructure Packages", "باقات البنية التحتية"),
                t("Software Packages", "باقات البرمجيات"),
                t("AI Packages", "باقات الذكاء الاصطناعي"),
                t("Identity Packages", "باقات الهوية"),
                t("Consulting Packages", "باقات الاستشارات"),
              ].map((label) => (
                <a key={label} href="#packages" className="block font-body font-[300] transition-colors duration-200" style={{ fontSize: 14, color: "#6E7378" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5C7CB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6E7378")}
                >{label}</a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 20 }}>
              {t("Company", "الشركة")}
            </h4>
            <nav className="space-y-3">
              {[
                { label: t("About Silxor", "عن Silxor"), href: "#about" },
                { label: t("Leadership", "القيادة"), href: "#about" },
                { label: t("Selected Work", "أعمالنا المختارة"), href: "#work" },
                { label: t("Press & Announcements", "الأخبار والإعلانات"), href: "#press" },
                { label: t("Careers", "الوظائف"), href: "#contact" },
                { label: t("Contact", "تواصل معنا"), href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block font-body font-[300] transition-colors duration-200" style={{ fontSize: 14, color: "#6E7378" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5C7CB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6E7378")}
                >{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 20 }}>
              {t("Legal & Compliance", "القانوني والامتثال")}
            </h4>
            <nav className="space-y-3">
              {[
                { label: t("Privacy Policy", "سياسة الخصوصية"), href: "/privacy" },
                { label: t("Compliance Documentation", "وثائق الامتثال"), href: "/compliance" },
                { label: t("Security Practices", "ممارسات الأمن"), href: "/compliance" },
                { label: t("SLA Documentation", "وثائق اتفاقية مستوى الخدمة"), href: "/sla" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="block font-body font-[300] transition-colors duration-200" style={{ fontSize: 14, color: "#6E7378" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5C7CB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6E7378")}
                >{link.label}</Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-3" style={{ marginTop: 48, marginBottom: 32 }}>
          {["ISO/IEC 27001:2022", "SOC 2 Type II", "Tier IV Certified", "GDPR Ready"].map((cert) => (
            <span key={cert} className="badge-pill">
              <Shield style={{ width: 10, height: 10 }} />
              {cert}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#6E7378" }}>
            {t("© 2026 Silxor Tech and Cyber Global.", "© 2026 سيلكسور تك وسايبر العالمية.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
