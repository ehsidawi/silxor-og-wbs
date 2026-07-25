import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

interface Card {
  org: string;
  title?: string;
  industry: string;
  technology: string;
  outcome: string;
  scale?: string;
  architecture?: string;
  compliance?: string;
  featured?: boolean;
  highlights?: { k: string; v: string }[];
}

const Experience = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Representative Enterprise Experience — Silxor";
  }, []);

  const cards: Card[] = [
    {
      org: "Ally Financial",
      title: "Enterprise Identity Transformation for Digital Banking",
      industry: "Digital Banking",
      technology: "Enterprise IAM · CIAM · IGA · PAM · SSO · MFA · Passwordless",
      outcome: "100% Secure Digital Banking Operations",
      scale: "$25M+ · 4M+ Customers · 100K+ Employees · 3 Cloud Regions",
      architecture: "Hybrid Cloud · Zero Trust · Fraud AI · Adaptive Auth",
      compliance: "PCI DSS · SOX · GLBA",
      featured: true,
      highlights: [
        { k: "Budget", v: "$25M+" },
        { k: "Customers", v: "4M+" },
        { k: "Employees", v: "100K+" },
        { k: "Cloud Regions", v: "3" },
        { k: "Availability", v: "99.99%" },
      ],
    },
    {
      org: "IQ Group Holding",
      industry: "Enterprise AI Infrastructure",
      technology: "Government AI · Sovereign Cloud",
      outcome: "Infrastructure Modernization",
      architecture: "Sovereign AI Platform",
    },
    {
      org: "U.S. DHS — CISA",
      industry: "Federal / Homeland Security",
      technology: "Federal Identity · Zero Trust · AI Identity",
      outcome: "FedRAMP High Readiness",
      compliance: "FedRAMP High",
    },
    {
      org: "Austin International Airport",
      industry: "Aviation / Critical Infrastructure",
      technology: "Physical + Logical Identity",
      outcome: "Airport Security Modernization",
      architecture: "Converged Identity",
    },
    {
      org: "Tesla Gigafactory",
      industry: "Advanced Manufacturing",
      technology: "Identity Platform · Industrial Security",
      outcome: "Greenfield Infrastructure Deployment",
      architecture: "OT / IT Convergence",
    },
    {
      org: "National Youth Week",
      industry: "Public Sector Program",
      technology: "Multi-cloud Identity · Zero Trust",
      outcome: "Regional Infrastructure Delivery",
      architecture: "Multi-cloud",
    },
    {
      org: "Meta",
      industry: "Hyperscale Technology",
      technology: "OAuth · AI Security",
      outcome: "Hyperscale Identity Program",
      scale: "Global",
      architecture: "Cloud Infrastructure",
    },
    {
      org: "Google",
      industry: "Hyperscale Technology",
      technology: "Identity Lifecycle · CIAM · Automation",
      outcome: "Hybrid Cloud Identity Operations",
      architecture: "Hybrid Cloud",
    },
    {
      org: "Dell Technologies",
      industry: "Enterprise Technology",
      technology: "CyberArk · SailPoint · PAM · IGA",
      outcome: "Enterprise IAM Program",
    },
    {
      org: "Apple",
      industry: "Consumer Technology",
      technology: "Federated Identity · SSO · PKI · MDM",
      outcome: "Enterprise Federation",
    },
    {
      org: "U.S. Marine Corps",
      industry: "Defense",
      technology: "Mission Critical Systems · Identity · Cyber Ops",
      outcome: "Secure Infrastructure Modernization",
      compliance: "DoD",
    },
  ];

  const Row = ({ k, v }: { k: string; v?: string }) =>
    v ? (
      <div className="flex items-start gap-3 py-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <span
          className="font-mono uppercase shrink-0"
          style={{ fontSize: 9, letterSpacing: "0.18em", color: "#6E7378", width: 108, paddingTop: 2 }}
        >
          {k}
        </span>
        <span className="font-body" style={{ fontSize: 13, color: "#C5C7CB", lineHeight: 1.5 }}>
          {v}
        </span>
      </div>
    ) : null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-spacing" style={{ paddingTop: 56 }}>
          <div className="container-content">
            <div className="section-eyebrow">{t("EXPERIENCE", "الخبرة")}</div>
            <h1
              className="font-display font-[700]"
              style={{ fontSize: 40, lineHeight: 1.1, color: "#FFFFFF", maxWidth: 900 }}
            >
              {t("Representative Enterprise Experience", "خبرة مؤسسية تمثيلية")}
            </h1>
            <p
              className="font-body font-[300] mt-4"
              style={{ fontSize: 15, color: "#6E7378", maxWidth: 780, lineHeight: 1.7 }}
            >
              {t(
                "Selected enterprise, financial services, government, and technology engagements demonstrating experience across digital transformation, cybersecurity, infrastructure, cloud, and identity.",
                "اختيار من المشاريع المؤسسية والمالية والحكومية والتقنية التي تعكس خبرة في التحول الرقمي والأمن السيبراني والبنية التحتية والسحابة والهوية."
              )}
            </p>
          </div>
        </section>

        <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-content">
            <div className="relative">
              {/* Timeline rail */}
              <div
                aria-hidden
                className="hidden md:block absolute"
                style={{ left: 12, top: 6, bottom: 6, width: 1, background: "rgba(197,199,203,0.15)" }}
              />
              <div className="flex flex-col gap-[2px]">
                {cards.map((c, i) => (
                  <div key={c.org} className="relative md:pl-10">
                    {/* Node */}
                    <div
                      aria-hidden
                      className="hidden md:block absolute"
                      style={{
                        left: 6,
                        top: 22,
                        width: 13,
                        height: 13,
                        border: "1px solid #C5C7CB",
                        background: c.featured ? "#C5C7CB" : "#0B0B0B",
                        borderRadius: 2,
                      }}
                    />
                    <div
                      className="surface-elevated"
                      style={{
                        padding: 20,
                        borderLeft: c.featured ? "2px solid #C5C7CB" : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="font-mono uppercase"
                          style={{ fontSize: 9, letterSpacing: "0.2em", color: "#6E7378" }}
                        >
                          ENG {String(i + 1).padStart(2, "0")}
                        </span>
                        {c.featured && (
                          <span
                            className="font-mono uppercase"
                            style={{
                              fontSize: 9,
                              letterSpacing: "0.2em",
                              color: "#0B0B0B",
                              background: "#C5C7CB",
                              padding: "3px 8px",
                              borderRadius: 2,
                            }}
                          >
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h3
                        className="font-display font-[700]"
                        style={{ fontSize: 20, color: "#FFFFFF", lineHeight: 1.2 }}
                      >
                        {c.org}
                      </h3>
                      {c.title && (
                        <div
                          className="font-body font-[400] mt-1"
                          style={{ fontSize: 14, color: "#C5C7CB" }}
                        >
                          {c.title}
                        </div>
                      )}

                      {c.highlights && (
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-[1px] mt-4" style={{ background: "rgba(255,255,255,0.06)" }}>
                          {c.highlights.map((h) => (
                            <div key={h.k} style={{ background: "#0B0B0B", padding: "10px 12px" }}>
                              <div className="font-display font-[700]" style={{ fontSize: 18, color: "#FFFFFF" }}>{h.v}</div>
                              <div className="font-mono uppercase mt-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#6E7378" }}>{h.k}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-3">
                        <Row k="Industry" v={c.industry} />
                        <Row k="Technology" v={c.technology} />
                        <Row k="Outcome" v={c.outcome} />
                        <Row k="Scale" v={c.scale} />
                        <Row k="Architecture" v={c.architecture} />
                        <Row k="Compliance" v={c.compliance} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
