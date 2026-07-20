import { useLanguage } from "@/context/LanguageContext";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "IBM",
  "Oracle",
  "SAP",
  "Cisco",
  "Dell",
  "HPE",
  "VMware",
  "Red Hat",
  "Salesforce",
  "ServiceNow",
  "Workday",
  "Adobe",
  "Intel",
  "NVIDIA",
  "AMD",
  "Palantir",
  "Snowflake",
  "MongoDB",
  "CrowdStrike",
  "Cloudflare",
  "Akamai",
  "Equinix",
  "Veeam",
  "Commvault",
  "Veritas",
  "Fortinet",
  "Palo Alto Networks",
];

const StatsBar = () => {
  const { language } = useLanguage();
  const arFont = language === "ar" ? "'Cairo', sans-serif" : undefined;

  return (
    <section
      style={{
        backgroundColor: "#25282C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div className="relative w-full">
        <div
          className="flex items-center whitespace-nowrap"
          style={{
            animation: "marquee 50s linear infinite",
            width: "max-content",
          }}
        >
          {[...companies, ...companies].map((name, index) => (
            <div key={index} className="flex items-center">
              <span
                className="font-mono font-[500] uppercase transition-colors duration-200 hover:text-white"
                style={{
                  fontSize: 15,
                  letterSpacing: "0.12em",
                  color: "#6E7378",
                  fontFamily: arFont,
                  padding: "0 40px",
                }}
              >
                {name}
              </span>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "rgba(197,199,203,0.35)",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default StatsBar;
