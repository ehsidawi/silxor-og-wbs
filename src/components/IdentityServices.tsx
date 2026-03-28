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
  { abbrev: "IAM", icon: Shield, title: "Identity & Access Management", body: "Core identity infrastructure — authentication, authorization, role management, and access policy enforcement across workforce and applications.", tags: "SAML • OIDC • OAuth 2.0 • RBAC • ABAC" },
  { abbrev: "PAM", icon: Key, title: "Privileged Access Management", body: "Privileged account vaulting, session recording, just-in-time access, and credential rotation for your most sensitive systems and administrative accounts.", tags: "CyberArk • BeyondTrust • Delinea • JIT • Session Vault" },
  { abbrev: "CIAM", icon: Users, title: "Customer Identity & Access Management", body: "Citizen and customer-facing identity systems with self-service registration, progressive profiling, consent management, and omnichannel authentication.", tags: "Auth0 • Keycloak • Okta • MFA • Passwordless" },
  { abbrev: "IGA", icon: GitBranch, title: "Identity Governance & Administration", body: "Automated provisioning and deprovisioning, access certification campaigns, role mining, segregation of duties, and entitlement management.", tags: "SailPoint • Saviynt • SCIM • Role Mining • Recertification" },
  { abbrev: "ISPM", icon: Activity, title: "Identity Security Posture Management", body: "Continuous visibility into identity risk — orphaned accounts, over-provisioned access, shadow admins, credential exposure, and posture drift detection.", tags: "Posture scoring • Risk analytics • Drift detection" },
  { abbrev: "ITDR", icon: AlertTriangle, title: "Identity Threat Detection & Response", body: "Real-time detection of identity-based attacks — credential stuffing, lateral movement, privilege escalation, and account takeover — with automated response playbooks.", tags: "UEBA • Behavioral analytics • Automated response" },
  { abbrev: "NHI", icon: Cpu, title: "Non-Human Identity", body: "Secrets management, service account governance, API key lifecycle, and machine-to-machine authentication for workloads, pipelines, and AI agents.", tags: "SPIFFE/SPIRE • Vault • mTLS • Workload identity" },
  { abbrev: "DIR", icon: Database, title: "Directory Services", body: "Active Directory architecture, Entra ID design, LDAP modernization, forest consolidation, trust relationship engineering, and hybrid identity management.", tags: "Active Directory • Entra ID • LDAP • SCIM • AD Connect" },
  { abbrev: "CLOUD IAM", icon: Cloud, title: "Cloud & Multi-Cloud IAM", body: "Identity architecture across AWS IAM, Azure AD, and GCP IAM — including cross-cloud federation, workload identity, and cloud entitlement management.", tags: "AWS IAM • Azure AD • GCP IAM • CIEM • Entra" },
  { abbrev: "FED", icon: Link, title: "Federation & SSO", body: "Cross-domain and cross-organization identity federation, single sign-on deployment, trust chain engineering, and B2B identity integration.", tags: "SAML 2.0 • OIDC • WS-Federation • Azure B2B • IdP" },
  { abbrev: "PKI", icon: Lock, title: "PKI & Certificate Management", body: "Certificate authority design, end-entity cert lifecycle automation, mTLS enforcement, and PKI modernization for zero-trust network architectures.", tags: "CA design • ACME • mTLS • Let's Encrypt • HSM" },
  { abbrev: "ZTI", icon: Layers, title: "Zero Trust Identity Architecture", body: "Identity as the new perimeter — continuous verification, least-privilege enforcement, ZTNA integration, and identity-aware proxy design across your entire environment.", tags: "ZTNA • BeyondCorp • Conditional Access • CAEP • SSE" },
];

/* ── SUBSECTION 2: Engagement Items ── */
interface EngagementItem {
  icon: LucideIcon;
  label: string;
  detail: string;
}

const engagements: EngagementItem[] = [
  { icon: Search, label: "Assess", detail: "Full audit of your existing identity environment — gaps, risks, misconfigurations, and attack surface." },
  { icon: Map, label: "Design", detail: "Greenfield and brownfield identity architecture blueprints aligned to Zero Trust and compliance requirements." },
  { icon: Code, label: "Build", detail: "Custom identity platform build, IdP integration, connector development, and API-level access control implementation." },
  { icon: Upload, label: "Deploy", detail: "Production deployment with zero-downtime migration from legacy systems, full cutover planning, and rollback procedures." },
  { icon: RefreshCw, label: "Modernize", detail: "Legacy identity system modernization — replacing outdated IAM stacks with sovereign, cloud-native, or hybrid architectures." },
  { icon: Ambulance, label: "Recover", detail: "Emergency identity recovery — AD forest rebuilds, PAM vault recovery, identity breach containment, and post-incident hardening." },
  { icon: Settings, label: "Operate", detail: "Ongoing identity platform administration, access review campaigns, policy enforcement, and 24/7 identity operations support." },
  { icon: FileCheck, label: "Comply", detail: "Identity controls mapping to ISO 27001, NIST SP 800-63, SOC 2, CBI frameworks, and regulatory audit evidence packages." },
  { icon: Zap, label: "Accelerate", detail: "Time-critical identity deployments — MFA rollouts, SSO implementations, and emergency PAM deployments executed in days, not months." },
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
interface IdPkg { name: string; tagline: string; specs: string[]; cta: string }

const identityPackages: IdPkg[] = [
  {
    name: "Identity Assessment & Roadmap",
    tagline: "2–3 week engagement",
    specs: [
      "Full identity environment discovery and mapping",
      "Risk and gap analysis across all IAM domains",
      "Attack surface assessment (PAM, orphaned accounts, shadow admins, credential exposure)",
      "Compliance alignment review (ISO 27001, NIST 800-63, CBI)",
      "Written Architecture Roadmap with prioritized remediation",
      "Executive and technical findings briefing",
    ],
    cta: "Book Assessment",
  },
  {
    name: "Identity Build & Deploy",
    tagline: "6–16 week delivery engagement",
    specs: [
      "Greenfield or brownfield identity architecture design",
      "Platform selection, procurement advisory, and vendor neutral engineering",
      "Full deployment: IAM, PAM, CIAM, IGA, or SSO/Federation",
      "Integration with existing applications and directories",
      "Policies, roles, and access model configuration",
      "Handover documentation and operations runbook",
    ],
    cta: "Start a Project",
  },
  {
    name: "Managed Identity Operations",
    tagline: "Ongoing retainer — monthly",
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
  },
];

/* ── Identity Domain Org Chart ── */
const DomainOrgChart = () => {
  // Split 12 domains into 3 tiers of 4
  const coreTier = domains.slice(0, 4);   // IAM, PAM, CIAM, IGA
  const secTier = domains.slice(4, 8);    // ISPM, ITDR, NHI, DIR
  const cloudTier = domains.slice(8, 12); // CLOUD IAM, FED, PKI, ZTI

  const tiers = [
    { label: "CORE IDENTITY", cards: coreTier, accent: "rgba(201,168,76,0.3)" },
    { label: "SECURITY & GOVERNANCE", cards: secTier, accent: "rgba(201,168,76,0.2)" },
    { label: "CLOUD & ZERO TRUST", cards: cloudTier, accent: "rgba(201,168,76,0.15)" },
  ];

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Root node */}
      <div
        className="surface-elevated text-center"
        style={{
          padding: "16px 32px",
          borderRadius: 4,
          border: "1px solid rgba(201,168,76,0.4)",
          minWidth: 220,
        }}
      >
        <span className="font-mono font-[600] uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#C9A84C" }}>
          IR4Q IDENTITY
        </span>
      </div>

      {tiers.map((tier, ti) => (
        <div key={ti} className="flex flex-col items-center w-full">
          {/* Connector down */}
          <div style={{ width: 2, height: 24, backgroundColor: tier.accent }} />

          {/* Tier label */}
          <div className="font-mono font-[400] uppercase text-center" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#8A8F9E", marginBottom: 8 }}>
            {tier.label}
          </div>

          {/* Horizontal bar (desktop) */}
          <div className="relative w-full hidden md:block" style={{ maxWidth: 860, height: 2, backgroundColor: tier.accent, margin: "0 auto" }} />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full" style={{ maxWidth: 900, marginTop: 0 }}>
            {tier.cards.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="hidden md:block" style={{ width: 2, height: 14, backgroundColor: tier.accent }} />
                  <div
                    className="surface-elevated w-full"
                    style={{ padding: 16, borderRadius: 4, borderTop: `2px solid ${tier.accent}` }}
                  >
                    <div className="flex items-center gap-2" style={{ marginBottom: 6 }}>
                      <Icon style={{ width: 16, height: 16, color: "#C9A84C" }} strokeWidth={1.5} />
                      <span className="font-mono font-[500] uppercase" style={{ fontSize: 9, letterSpacing: "0.1em", color: "#C9A84C" }}>
                        {d.abbrev}
                      </span>
                    </div>
                    <h4 className="font-body font-[500]" style={{ fontSize: 12, color: "#F0EDE8", marginBottom: 4 }}>
                      {d.title}
                    </h4>
                    <p className="font-body font-[300]" style={{ fontSize: 11, color: "#8A8F9E", lineHeight: 1.55 }}>
                      {d.body.split('—')[0].trim()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
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
                <div className="font-mono font-[700]" style={{ fontSize: 32, color: '#C9A84C', opacity: 0.3, lineHeight: 1, marginBottom: 8 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <Icon style={{ width: 20, height: 20, color: '#C9A84C', marginBottom: 6 }} strokeWidth={1.5} />
                <div className="font-body font-[500]" style={{ fontSize: 14, color: '#F0EDE8', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#8A8F9E', lineHeight: 1.5, maxWidth: 120 }}>
                  {item.detail.split('—')[0].trim()}
                </div>
              </div>
              {i < engagements.length - 1 && (
                <div className="flex items-center self-center" style={{ padding: '0 4px', marginTop: 36 }}>
                  <ArrowRight style={{ width: 16, height: 16, color: 'rgba(201,168,76,0.3)' }} />
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
              <div className="font-mono font-[700]" style={{ fontSize: 20, color: '#C9A84C', opacity: 0.3 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon style={{ width: 18, height: 18, color: '#C9A84C', flexShrink: 0, marginTop: 2 }} strokeWidth={1.5} />
              <div>
                <div className="font-body font-[500]" style={{ fontSize: 13, color: '#F0EDE8', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#8A8F9E', lineHeight: 1.6 }}>
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
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">IDENTITY & ACCESS MANAGEMENT</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            End-to-End Identity Services
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: '#8A8F9E', maxWidth: 560, marginTop: 10, lineHeight: 1.7 }}>
            IR4Q delivers the full spectrum of identity architecture — from initial assessment and greenfield design to deployment, integration, recovery, and ongoing management. Every identity domain. Every environment. Sovereign by default.
          </p>
        </div>

        {/* ── Subsection 1: Radial Domain Map ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
            Every Identity Domain. One Partner.
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', maxWidth: 520, marginBottom: 20, lineHeight: 1.7 }}>
            IR4Q architects and operates across all identity disciplines — purpose-built for governments, financial institutions, and enterprises operating in high-stakes environments.
          </p>
          <DomainOrgChart />
        </div>

        {/* ── Subsection 2: Engagement Flow ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
            What IR4Q Delivers Across Every Identity Engagement
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', maxWidth: 520, marginBottom: 20, lineHeight: 1.7 }}>
            We don't sell software licenses. We architect, build, deploy, and operate your identity infrastructure from the ground up — or rescue what's already broken.
          </p>
          <EngagementFlow />
        </div>

        {/* ── Subsection 3: Categorized Environments ── */}
        <div style={{ marginBottom: 48 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
            Every Environment. No Exceptions.
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', maxWidth: 480, marginBottom: 16, lineHeight: 1.7 }}>
            IR4Q identity engineers operate across on-premise, cloud, hybrid, air-gapped, and sovereign-hosted environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  style={{ fontSize: 10, letterSpacing: '0.15em', color: '#C9A84C', marginBottom: 12 }}
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
                        color: '#C9A84C',
                        backgroundColor: 'rgba(201,168,76,0.06)',
                        border: '1px solid rgba(201,168,76,0.2)',
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
        <div style={{ marginBottom: 32 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 6 }}>
            Identity Service Packages
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', maxWidth: 480, marginBottom: 16, lineHeight: 1.7 }}>
            Structured engagements across every stage of the identity lifecycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {identityPackages.map((pkg, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  backgroundColor: '#0D1017',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  padding: 20,
                  transition: 'all 250ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.backgroundColor = '#12161E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.backgroundColor = '#0D1017';
                }}
              >
                <h4 className="font-body font-[500]" style={{ fontSize: 15, color: '#F0EDE8', marginBottom: 4 }}>{pkg.name}</h4>
                <p className="font-body font-[300]" style={{ fontSize: 12, color: '#8A8F9E', marginBottom: 16 }}>{pkg.tagline}</p>
                <ul className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  {pkg.specs.map((spec, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check style={{ width: 14, height: 14, color: '#C9A84C', flexShrink: 0, marginTop: 1 }} />
                      <span className="font-body font-[300]" style={{ fontSize: 12, color: '#8A8F9E' }}>{spec}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    padding: '10px 16px',
                    borderRadius: 2,
                    border: '1px solid rgba(201,168,76,0.4)',
                    color: '#C9A84C',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A84C';
                    e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Callout Banner ── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            backgroundColor: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: 4,
            padding: '40px 48px',
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <h4 className="font-display font-[700]" style={{ fontSize: 20, color: '#F0EDE8', marginBottom: 8 }}>
              Identity Is the Perimeter.
            </h4>
            <p className="font-body font-[300]" style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.7 }}>
              Every breach starts with an identity. IR4Q builds identity infrastructure that assumes compromise and enforces verification at every layer — from the endpoint to the cloud to the AI agent.
            </p>
          </div>
          <a
            href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-[400] uppercase whitespace-nowrap transition-all duration-200 flex items-center gap-2"
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              backgroundColor: '#C9A84C',
              color: '#080A0F',
              padding: '12px 24px',
              borderRadius: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E2C06A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C9A84C')}
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
