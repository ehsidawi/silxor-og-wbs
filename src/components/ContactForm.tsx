import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const serviceOptions = [
  { en: "Infrastructure & Cloud Hosting", ar: "البنية التحتية والاستضافة السحابية" },
  { en: "Software Development", ar: "تطوير البرمجيات" },
  { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
  { en: "Identity & Access Management", ar: "إدارة الهوية والوصول" },
  { en: "Technology Consulting", ar: "الاستشارات التقنية" },
  { en: "Multiple Services", ar: "خدمات متعددة" },
];

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("https://formspree.io/f/ir4q-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", organization: "", email: "", service: "", message: "" });
      } else {
        window.open(`mailto:contact@ir4q.com?subject=${encodeURIComponent("IR4Q Assessment Request — " + formState.service)}`, "_self");
        setStatus("error");
      }
    } catch {
      window.open(`mailto:contact@ir4q.com?subject=${encodeURIComponent("IR4Q Assessment Request")}`, "_self");
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#12161E",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 2,
    padding: "12px 16px",
    color: "#F0EDE8",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    outline: "none",
    transition: "border-color 200ms",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#8A8F9E",
    marginBottom: 8,
    display: "block",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
  };

  return (
    <div
      style={{
        backgroundColor: "#0D1017",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 4,
        padding: 40,
        marginTop: 32,
      }}
    >
      <h3 className="font-body font-[500] text-center" style={{ fontSize: 17, color: "#F0EDE8", marginBottom: 32 }}>
        {t("Or Send Us a Direct Message", "أو أرسل لنا رسالة مباشرة")}
      </h3>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div>
          <label style={labelStyle}>{t("Full Name", "الاسم الكامل")} *</label>
          <input
            type="text"
            required
            placeholder={t("Your full name", "اسمك الكامل")}
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ ...inputStyle, fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Organization", "المؤسسة")} *</label>
          <input
            type="text"
            required
            placeholder={t("Company or ministry name", "اسم الشركة أو الوزارة")}
            value={formState.organization}
            onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ ...inputStyle, fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Email", "البريد الإلكتروني")} *</label>
          <input
            type="email"
            required
            placeholder="your@organization.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Service Interest", "الخدمة المطلوبة")} *</label>
          <select
            required
            value={formState.service}
            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
            onFocus={handleFocus as any}
            onBlur={handleBlur as any}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer", fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          >
            <option value="" disabled>{t("Select a service", "اختر خدمة")}</option>
            {serviceOptions.map((opt) => (
              <option key={opt.en} value={opt.en}>{t(opt.en, opt.ar)}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label style={labelStyle}>{t("Message", "الرسالة")}</label>
          <textarea
            rows={4}
            placeholder={t(
              "Describe what you're building or the challenge you're facing",
              "صف ما تبنيه أو التحدي الذي تواجهه"
            )}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            onFocus={handleFocus as any}
            onBlur={handleBlur as any}
            style={{ ...inputStyle, resize: "vertical", fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full font-mono font-[400] uppercase transition-all duration-200"
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              backgroundColor: "#C9A84C",
              color: "#080A0F",
              padding: "14px 28px",
              borderRadius: 2,
              border: "none",
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!submitting) {
                e.currentTarget.style.backgroundColor = "#E2C06A";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A84C";
            }}
          >
            {submitting ? t("Sending...", "جارٍ الإرسال...") : t("Send Message", "إرسال الرسالة")}
          </button>
        </div>

        {status === "success" && (
          <div className="sm:col-span-2 font-body font-[300] text-center" style={{ fontSize: 14, color: "#C9A84C", animation: "fadeIn 300ms ease" }}>
            {t(
              "Message received. Our team will respond within one business day.",
              "تم استلام رسالتك. سيرد فريقنا خلال يوم عمل واحد."
            )}
          </div>
        )}
        {status === "error" && (
          <div className="sm:col-span-2 font-body font-[300] text-center" style={{ fontSize: 14, color: "#C94C4C" }}>
            {t(
              "Something went wrong. Please email us directly at contact@ir4q.com",
              "حدث خطأ ما. يرجى مراسلتنا مباشرة على contact@ir4q.com"
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
