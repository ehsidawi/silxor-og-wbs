import { useState } from "react";
import {
  Shield, Key, Users, GitBranch, Activity, AlertTriangle, Cpu, Database,
  Cloud, Link, Lock, Layers, Search, Map, Code, Upload, RefreshCw,
  Ambulance, Settings, FileCheck, Zap, Check, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── SUBSECTION 1: Identity Domains ── */
interface DomainCard {
  abbrev: string;
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string;
}

const domains: DomainCard[] = [
  { abbrev: "IAM", icon: Shield, title: "Identity & Access Management", body: "Core identity infrastructure authentication, authorization, role management, and access policy enforcement across workforce and applications.", tags: "SAML • OIDC • OAuth 2.0 • RBAC • ABAC" },
  { abbrev: "PAM", icon: Key, title: "Privileged Access Management", body: "Privileged account vaulting, session recording, just in time access, and credential rotation for your most sensitive systems and administrative accounts.", tags: "CyberArk • BeyondTrust • Delinea • JIT • Session Vault" },
  { abbrev: "CIAM", icon: Users, title: "Customer Identity & Access Management", body: "Citizen and customer facing identity systems with self service registration, progressive profiling, consent management, and omnichannel authentication.", tags: "Auth0 • Keycloak • Okta • MFA • Passwordless" },
  { abbrev: "IGA", icon: GitBranch, title: "Identity Governance & Administration", body: "Automated provisioning and deprovisioning, access certification campaigns, role mining, segregation of duties, and entitlement management.", tags: "SailPoint • Saviynt • SCIM • Role Mining • Recertification" },
  { abbrev: "ISPM", icon: Activity, title: "Identity Security Posture Management", body: "Continuous visibility into identity risk orphaned accounts, over provisioned access, shadow admins, credential exposure, and posture drift detection.", tags: "Posture scoring • Risk analytics • Drift detection" },
  { abbrev: "ITDR", icon: AlertTriangle, title: "Identity Threat Detection & Response", body: "Real time detection of identity based attacks credential stuffing, lateral movement, privilege escalation, and account takeover with automated response playbooks.", tags: "UEBA • Behavioral analytics • Automated response" },
  { abbrev: "NHI", icon: Cpu, title: "Non Human Identity", body: "Secrets management, service account governance, API key lifecycle, and machine to machine authentication for workloads, pipelines, and AI agents.", tags: "SPIFFE/SPIRE • Vault • mTLS • Workload identity" },
  { abbrev: "DIR", icon: Database, title: "Directory Services", body: "Active Directory architecture, Entra ID design, LDAP modernization, forest consolidation, trust relationship engineering, and hybrid identity management.", tags: "Active Directory • Entra ID • LDAP • SCIM • AD Connect" },
  { abbrev: "CLOUD IAM", icon: Cloud, title: "Cloud & Multi Cloud IAM", body: "Identity architecture across AWS IAM, Azure AD, and GCP IAM including cross cloud federation, workload identity, and cloud entitlement management.", tags: "AWS IAM • Azure AD • GCP IAM • CIEM • Entra" },
  { abbrev: "FED", icon: Link, title: "Federation & SSO", body: "Cross domain and cross organization identity federation, single sign on deployment, trust chain engineering, and B2B identity integration.", tags: "SAML 2.0 • OIDC • WS-Federation • Azure B2B • IdP" },
  { abbrev: "PKI", icon: Lock, title: "PKI & Certificate Management", body: "Certificate authority design, end entity cert lifecycle automation, mTLS enforcement, and PKI modernization for zero trust network architectures.", tags: "CA design • ACME • mTLS • Let's Encrypt • HSM" },
  { abbrev: "ZTI", icon: Layers, title: "Zero Trust Identity Architecture", body: "Identity as the new perimeter continuous verification, least privilege enforcement, ZTNA integration, and identity aware proxy design across your entire environment.", tags: "ZTNA • BeyondCorp • Conditional Access • CAEP • SSE" },
];

/* ── SUBSECTION 2: Engagement Items ── */
interface EngagementItem {
  icon: LucideIcon;
  label: string;
  detail: string;
}

const engagements: EngagementItem[] = [
  { icon: Search, label: "Assess", detail: "Full audit of your existing identity environment gaps, risks, misconfigurations, and attack surface." },
  { icon: Map, label: "Design", detail: "Greenfield and brownfield identity architecture blueprints aligned to Zero Trust and compliance requirements." },
  { icon: Code, label: "Build", detail: "Custom identity platform build, IdP integration, connector development, and API level access control implementation." },
  { icon: Upload, label: "Deploy", detail: "Production deployment with zero downtime migration from legacy systems, full cutover planning, and rollback procedures." },
  { icon: RefreshCw, label: "Modernize", detail: "Legacy identity system modernization replacing outdated IAM stacks with sovereign, cloud native, or hybrid architectures." },
  { icon: Ambulance, label: "Recover", detail: "Emergency identity recovery AD forest rebuilds, PAM vault recovery, identity breach containment, and post incident hardening." },
  { icon: Settings, label: "Operate", detail: "Ongoing identity platform administration, access review campaigns, policy enforcement, and 24/7 identity operations support." },
  { icon: FileCheck, label: "Comply", detail: "Identity controls mapping to ISO 27001, NIST SP 800 63, SOC 2, CBI frameworks, and regulatory audit evidence packages." },
  { icon: Zap, label: "Accelerate", detail: "Time critical identity deployments MFA rollouts, SSO implementations, and emergency PAM deployments executed in days, not months." },
];

/* ── SUBSECTION 3: Environment Categories ── */
const envCategories = [
  {
    header: "Deployment Models",
    items: ["On-Premise", "Cloud-Native", "Hybrid Identity", "Air-Gapped", "Sovereign Hosted"],
  },
  {
    header: "Cloud Platforms",
    items: ["Azure / Entra", "AWS", "GCP", "Multi-Cloud"],
  },
  {
    header: "Operating Systems & Infra",
    items: ["Active Directory", "Linux/Unix", "Windows Server", "Kubernetes Workloads", "CI/CD Pipelines", "Legacy Mainframe"],
  },
  {
    header: "Regulated Environments",
    items: ["OT / ICS Networks", "Government Networks", "Financial Core Systems"],
  },
];

/* ── SUBSECTION 4: Identity Packages ── */
interface IdPkg { name: string; tagline: string; specs: string[]; cta: string; mailto: string }

const identityPackages: IdPkg[] = [
  {
    name: "Identity Assessment & Roadmap",
    tagline: "2 3 week engagement",
    specs: [
      "Full identity environment discovery and mapping",
      "Risk and gap analysis across all IAM domains",
      "Attack surface assessment (PAM, orphaned accounts, shadow admins, credential exposure)",
      "Compliance alignment review (ISO 27001, NIST 800 63, CBI)",
      "Written Architecture Roadmap with prioritized remediation",
      "Executive and technical findings briefing",
    ],
    cta: "Book Assessment",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Assessment%20%26%20Roadmap%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20book%20an%20Identity%20Assessment%20%26%20Roadmap%20engagement.%0A%0AOrganization%3A%20%0AEnvironment%3A%20",
  },
  {
    name: "Identity Build & Deploy",
    tagline: "6 16 week delivery engagement",
    specs: [
      "Greenfield or brownfield identity architecture design",
      "Platform selection, procurement advisory, and vendor neutral engineering",
      "Full deployment: IAM, PAM, CIAM, IGA, or SSO/Federation",
      "Integration with existing applications and directories",
      "Policies, roles, and access model configuration",
      "Handover documentation and operations runbook",
    ],
    cta: "Start a Project",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Build%20%26%20Deploy%20Project&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Identity%20Build%20%26%20Deploy%20engagement.%0A%0AOrganization%3A%20%0AScope%3A%20",
  },
  {
    name: "Managed Identity Operations",
    tagline: "Ongoing retainer monthly",
    specs: [
      "24/7 identity platform monitoring and alerting",
      "Access review and certification campaign management",
      "Privilege account governance and rotation",
      "ITDR alert triage and identity incident response",
      "Monthly posture and compliance reporting",
      "Quarterly architecture review and roadmap refresh",
      "Direct access to senior identity architect",
    ],
    cta: "Become a Partner",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Managed%20Identity%20Operations%20Retainer&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Managed%20Identity%20Operations%20retainer.%0A%0AOrganization%3A%20%0AEnvironment%3A%20",
  },
];

/* ── Identity Domain Map List ── */
const DomainMapList = () => {
  const coords = [
    "33.3°N · 44.4°E", "33.3°N · 44.4°E", "36.2°N · 44.0°E", "33.3°N · 44.4°E",
    "30.5°N · 47.8°E", "33.3°N · 44.4°E", "32.6°N · 44.0°E", "33.3°N · 44.4°E",
    "39.0°N · 77.5°W", "36.2°N · 44.0°E", "33.3°N · 44.4°E", "33.3°N · 44.4°E",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px]">
      {domains.map((d, index) => {
        const Icon = d.icon;
        return (
          <div
            key={index}
            className="group relative surface-elevated"
            style={{
              borderRadius: 2,
              padding: "22px 20px",
              overflow: "hidden",
              transition: "background 0.3s ease",
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Header: pin + coord */}
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    backgroundColor: "hsl(var(--primary))",
                    boxShadow: "0 0 8px hsl(var(--primary) / 0.5)",
                  }}
                />
                <span className="font-mono font-[400] uppercase" style={{ fontSize: 9, letterSpacing: "0.15em", color: "hsl(var(--primary))" }}>
                  {d.abbrev}
                </span>
              </div>
              <span className="font-mono font-[300]" style={{ fontSize: 8, color: "hsl(var(--muted-foreground))", letterSpacing: "0.05em" }}>
                {coords[index]}
              </span>
            </div>

            {/* Icon + content */}
            <div className="relative z-10">
              <div
                className="mb-3"
                style={{
                  width: 34, height: 34, borderRadius: 4,
                  border: "1px solid hsl(var(--primary) / 0.25)",
                  backgroundColor: "hsl(var(--primary) / 0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Icon style={{ width: 15, height: 15, color: "hsl(var(--primary))" }} strokeWidth={1.5} />
              </div>

              <h4 className="font-body font-[500]" style={{ fontSize: 13, color: "hsl(var(--foreground))", marginBottom: 4 }}>
                {d.title}
              </h4>
              <p className="font-body font-[300]" style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>
                {d.body.split('—')[0].trim()}
              </p>
            </div>

            {/* Corner crosshair */}
            <div className="absolute pointer-events-none" style={{ top: 8, right: 8, width: 12, height: 12, opacity: 0.15 }}>
              <div style={{ position: "absolute", top: 5, left: 0, width: 12, height: 1, backgroundColor: "hsl(var(--primary))" }} />
              <div style={{ position: "absolute", top: 0, left: 5, width: 1, height: 12, backgroundColor: "hsl(var(--primary))" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ── Engagement Flow ── */
const EngagementFlow = () => (
  <div>
    {/* Desktop horizontal flow */}
    <div className="hidden md:block overflow-x-auto pb-4">
      <div className="flex items-start gap-0" style={{ minWidth: 'max-content' }}>
        {engagements.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-start">
              <div style={{ width: 140, flexShrink: 0 }}>
                <div className="font-mono font-[700]" style={{ fontSize: 32, color: '#C5C7CB', opacity: 0.3, lineHeight: 1, marginBottom: 8 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <Icon style={{ width: 20, height: 20, color: '#C5C7CB', marginBottom: 6 }} strokeWidth={1.5} />
                <div className="font-body font-[500]" style={{ fontSize: 14, color: '#FFFFFF', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#6E7378', lineHeight: 1.5, maxWidth: 120 }}>
                  {item.detail.split('—')[0].trim()}
                </div>
              </div>
              {i < engagements.length - 1 && (
                <div className="flex items-center self-center" style={{ padding: '0 4px', marginTop: 36 }}>
                  <ArrowRight style={{ width: 16, height: 16, color: 'rgba(197,199,203,0.3)' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Mobile vertical stack */}
    <div className="md:hidden space-y-4">
      {engagements.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-start gap-3">
            <div style={{ flexShrink: 0, width: 32 }}>
              <div className="font-mono font-[700]" style={{ fontSize: 20, color: '#C5C7CB', opacity: 0.3 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon style={{ width: 18, height: 18, color: '#C5C7CB', flexShrink: 0, marginTop: 2 }} strokeWidth={1.5} />
              <div>
                <div className="font-body font-[500]" style={{ fontSize: 13, color: '#FFFFFF', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#6E7378', lineHeight: 1.6 }}>
                  {item.detail}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* ── COMPONENT ── */
const IdentityServices = () => {
  return (
    <section id="identity" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        {/* Section Header */}
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">IDENTITY & ACCESS MANAGEMENT</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#FFFFFF' }}>
            End to End Identity Services
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: '#6E7378', maxWidth: 560, marginTop: 6, lineHeight: 1.7 }}>
            Silxor delivers the full spectrum of identity architecture from initial assessment and greenfield design to deployment, integration, recovery, and ongoing management. Every identity domain. Every environment. Sovereign by default.
          </p>
        </div>

        {/* ── Subsection 1: Radial Domain Map ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 6 }}>
            Every Identity Domain. One Partner.
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#6E7378', maxWidth: 520, marginBottom: 8, lineHeight: 1.7 }}>
            Silxor architects and operates across all identity disciplines purpose built for governments, financial institutions, and enterprises operating in high stakes environments.
          </p>
          <DomainMapList />
        </div>

        {/* ── Subsection 2: Engagement Flow ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 6 }}>
            What Silxor Delivers Across Every Identity Engagement
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#6E7378', maxWidth: 520, marginBottom: 8, lineHeight: 1.7 }}>
            We don't sell software licenses. We architect, build, deploy, and operate your identity infrastructure from the ground up or rescue what's already broken.
          </p>
          <EngagementFlow />
        </div>

        {/* ── Subsection 3: Categorized Environments ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 6 }}>
            Every Environment. No Exceptions.
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#6E7378', maxWidth: 480, marginBottom: 8, lineHeight: 1.7 }}>
            Silxor identity engineers operate across on premise, cloud, hybrid, air gapped, and sovereign hosted environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {envCategories.map((cat) => (
              <div
                key={cat.header}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  padding: 16,
                }}
              >
                <div
                  className="font-mono font-[400] uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.15em', color: '#C5C7CB', marginBottom: 12 }}
                >
                  {cat.header}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((env) => (
                    <span
                      key={env}
                      className="font-mono font-[400]"
                      style={{
                        fontSize: 11,
                        color: '#C5C7CB',
                        backgroundColor: 'rgba(197,199,203,0.06)',
                        border: '1px solid rgba(197,199,203,0.2)',
                        padding: '6px 12px',
                        borderRadius: 2,
                      }}
                    >
                      {env}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Subsection 4: Identity Packages ── */}
        <div style={{ marginBottom: 12 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 6 }}>
            Identity Service Packages
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#6E7378', maxWidth: 480, marginBottom: 8, lineHeight: 1.7 }}>
            Structured engagements across every stage of the identity lifecycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {identityPackages.map((pkg, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  backgroundColor: '#25282C',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  padding: 10,
                  transition: 'all 250ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(197,199,203,0.3)';
                  e.currentTarget.style.backgroundColor = '#25282C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.backgroundColor = '#25282C';
                }}
              >
                <h4 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 4 }}>{pkg.name}</h4>
                <p className="font-body font-[300]" style={{ fontSize: 12, color: '#6E7378', marginBottom: 8 }}>{pkg.tagline}</p>
                <ul className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 8 }}>
                  {pkg.specs.map((spec, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check style={{ width: 14, height: 14, color: '#C5C7CB', flexShrink: 0, marginTop: 1 }} />
                      <span className="font-body font-[300]" style={{ fontSize: 12, color: '#6E7378' }}>{spec}</span>
                    </li>
                  ))}
                </ul>
                {/* Per-card CTAs removed — consolidated CTA in callout banner below */}
              </div>
            ))}
          </div>
        </div>

        {/* ── Callout Banner ── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{
            backgroundColor: 'rgba(197,199,203,0.05)',
            border: '1px solid rgba(197,199,203,0.15)',
            borderRadius: 4,
            padding: '40px 48px',
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <h4 className="font-display font-[700]" style={{ fontSize: 20, color: '#FFFFFF', marginBottom: 8 }}>
              Identity Is the Perimeter.
            </h4>
            <p className="font-body font-[300]" style={{ fontSize: 13, color: '#6E7378', lineHeight: 1.7 }}>
              Every breach starts with an identity. Silxor builds identity infrastructure that assumes compromise and enforces verification at every layer from the endpoint to the cloud to the AI agent.
            </p>
          </div>
          <a
            href="mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20identity%20assessment.%0A%0AOrganization%3A%20%0AIdentity%20Environment%3A%20"
            className="font-mono font-[400] uppercase whitespace-nowrap transition-all duration-200 flex items-center gap-2"
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              backgroundColor: '#C5C7CB',
              color: '#0B0B0B',
              padding: '12px 24px',
              borderRadius: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C5C7CB')}
          >
            Request Identity Assessment
            <ArrowRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentityServices;
