import { useState, useEffect } from "react";
import { X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const NAV_HEIGHT = 80;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("Infrastructure", "البنية التحتية"), href: "#infrastructure" },
    { label: t("Software", "البرمجيات"), href: "#software" },
    { label: t("Identity", "الهوية الرقمية"), href: "#identity" },
    { label: t("Packages", "الباقات"), href: "#packages" },
    { label: t("Contact", "تواصل معنا"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const assessmentMailto =
    "mailto:contact@silxor.com?subject=Silxor%20-%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20technical%20assessment%20with%20Silxor.%0A%0AOrganization%3A%20%0AService%20Interest%3A%20%0AMessage%3A%20";

  return (
    <nav
      className="sticky top-0 z-[100] transition-colors duration-500"
      style={{
        height: NAV_HEIGHT,
        backgroundColor: scrolled ? "rgba(11,11,11,0.94)" : "#0B0B0B",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        borderTop: "1px solid #25282C",
        borderBottom: "1px solid #25282C",
      }}
    >
      <div className="relative h-full flex items-center justify-between px-6 lg:px-8 overflow-hidden">
        {/* Industrial grid overlay */}
        <div
          className="absolute top-0 right-0 h-full opacity-[0.08] pointer-events-none hidden md:block"
          style={{ width: 128 }}
          aria-hidden
        >
          <div className="w-full h-full border-l flex flex-col" style={{ borderColor: "#C5C7CB" }}>
            <div className="h-1/3 border-b" style={{ borderColor: "#C5C7CB" }} />
            <div className="h-1/3 border-b" style={{ borderColor: "#C5C7CB" }} />
          </div>
        </div>

        {/* Left: Brand */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-3 shrink-0 z-10 group"
        >
          <div
            className="relative transition-transform duration-300 group-hover:scale-110"
            style={{ width: 20, height: 20, backgroundColor: "#C5C7CB" }}
          >
            <div
              className="absolute"
              style={{ inset: 2, border: "1px solid #0B0B0B" }}
            />
          </div>
          <span
            className="font-display font-[800] text-white tracking-tight"
            style={{ fontSize: 22, letterSpacing: "-0.02em" }}
          >
            SILXOR
          </span>
        </a>

        {/* Center: Segmented monospaced nav */}
        <div className="hidden xl:flex items-center h-full z-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative flex flex-col items-center justify-center h-full transition-colors duration-200"
              style={{
                padding: "0 14px",
                borderLeft: i === 0 ? "1px solid transparent" : "1px solid #25282C",
                borderRight: i === navLinks.length - 1 ? "1px solid transparent" : "none",
                fontFamily: "'JetBrains Mono', monospace",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span
                className="transition-opacity duration-200"
                style={{
                  fontSize: 8,
                  color: "#6E7378",
                  marginBottom: 4,
                  letterSpacing: "0.1em",
                  opacity: i === 0 ? 1 : 0,
                }}
                data-hover-index
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="uppercase whitespace-nowrap transition-colors duration-200 group-hover:text-white"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#C5C7CB",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </span>
              {/* Bottom active indicator */}
              <span
                className="absolute left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ bottom: -1, height: 1, backgroundColor: "#C5C7CB" }}
                aria-hidden
              />
            </a>
          ))}
        </div>

        {/* Right: Utils + CTA */}
        <div className="hidden xl:flex items-center gap-5 shrink-0 z-10">
          <div
            className="flex items-center"
            style={{
              border: "1px solid #25282C",
              borderRadius: 2,
              padding: "4px 6px",
            }}
          >
            <LanguageToggle />
          </div>

          <a
            href={assessmentMailto}
            className="relative group overflow-hidden transition-all duration-300"
            style={{
              padding: "12px 22px",
              backgroundColor: "#C5C7CB",
              color: "#0B0B0B",
              fontSize: 11,
              letterSpacing: "0.15em",
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: 2,
            }}
          >
            <span className="relative z-10">{t("Request Assessment", "طلب تقييم")}</span>
            <span
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ backgroundColor: "#FFFFFF" }}
              aria-hidden
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden flex items-center justify-center w-10 h-10 z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" style={{ color: "#C5C7CB" }} />
          ) : (
            <div className="flex flex-col items-end gap-[4px]">
              <span style={{ width: 22, height: 1, backgroundColor: "#C5C7CB", display: "block" }} />
              <span style={{ width: 14, height: 1, backgroundColor: "#C5C7CB", display: "block" }} />
              <span style={{ width: 22, height: 1, backgroundColor: "#C5C7CB", display: "block" }} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className="xl:hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? `calc(100vh - ${NAV_HEIGHT}px)` : 0,
          overflowY: mobileOpen ? "auto" : "hidden",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          backgroundColor: "rgba(11,11,11,0.98)",
          backdropFilter: "blur(24px)",
          WebkitOverflowScrolling: "touch",
          borderTop: mobileOpen ? "1px solid #25282C" : "none",
        }}
      >
        <div className="px-6 py-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between py-4 uppercase transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "#C5C7CB",
                borderBottom: "1px solid #25282C",
              }}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: 9, color: "#6E7378" }}>{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <div className="flex items-center justify-center py-6">
            <LanguageToggle />
          </div>
          <a
            href={assessmentMailto}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 700,
              backgroundColor: "#C5C7CB",
              color: "#0B0B0B",
              padding: "14px 20px",
              borderRadius: 2,
            }}
          >
            {t("Request Assessment", "طلب تقييم")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
