import { useState, useEffect } from "react";
import { X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const NAV_HEIGHT = 80;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeHref, setActiveHref] = useState<string>("#infrastructure");
  const { t } = useLanguage();

  const navLinks = [
    { label: t("Infrastructure", "البنية التحتية"), href: "#infrastructure" },
    { label: t("Software", "البرمجيات"), href: "#software" },
    { label: t("Identity", "الهوية الرقمية"), href: "#identity" },
    { label: t("Packages", "الباقات"), href: "#packages" },
    { label: t("Contact", "تواصل معنا"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? Math.min(100, (y / h) * 100) : 0);

      // Scroll spy — pick the section whose top is closest above the nav
      let current = navLinks[0].href;
      for (const link of navLinks) {
        const el = document.querySelector(link.href) as HTMLElement | null;
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - NAV_HEIGHT - 24 <= 0) current = link.href;
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="relative h-full flex items-center justify-between px-6 lg:px-8">
        {/* Left: Brand */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-3 shrink-0 z-10 group"
        >
          <div
            className="relative transition-transform duration-500 group-hover:rotate-45"
            style={{
              width: 28,
              height: 28,
              background:
                "linear-gradient(135deg, #C5C7CB 0%, #6E7378 55%, #25282C 100%)",
            }}
          >
            <div className="absolute" style={{ inset: 1, backgroundColor: "#0B0B0B" }} />
            <div
              className="absolute"
              style={{ inset: 6, backgroundColor: "#C5C7CB" }}
            />
          </div>
          <span
            className="font-display font-[800] text-white tracking-tight"
            style={{ fontSize: 22, letterSpacing: "-0.02em" }}
          >
            SILXOR
          </span>
        </a>

        {/* Center: Interactive nav */}
        <div className="hidden xl:flex items-center gap-8 h-full z-10">
          {navLinks.map((link, i) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group flex flex-col items-center justify-center h-full"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span
                  className="transition-all duration-300"
                  style={{
                    fontSize: 8,
                    letterSpacing: "0.15em",
                    color: isActive ? "#C5C7CB" : "#6E7378",
                    marginBottom: 3,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span
                  className="uppercase whitespace-nowrap transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: isActive ? "#FFFFFF" : "#6E7378",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </span>
                <span
                  className="transition-all duration-300 group-hover:w-full"
                  style={{
                    height: 2,
                    marginTop: 4,
                    width: isActive ? "100%" : 0,
                    backgroundColor: "#C5C7CB",
                    boxShadow: isActive ? "0 0 8px rgba(197,199,203,0.5)" : "none",
                  }}
                  aria-hidden
                />
              </a>
            );
          })}
        </div>

        {/* Right: Utils + CTA */}
        <div className="hidden xl:flex items-center gap-5 shrink-0 z-10">
          <div
            className="flex items-center"
            style={{
              borderLeft: "1px solid #25282C",
              borderRight: "1px solid #25282C",
              padding: "4px 12px",
            }}
          >
            <LanguageToggle />
          </div>

          <a
            href={assessmentMailto}
            className="relative group overflow-hidden transition-all duration-300 active:scale-95 hover:bg-white"
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
            {/* Metallic shimmer sweep */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
              }}
              aria-hidden
            />
            <span className="relative z-10 flex items-center gap-2">
              {t("Request Assessment", "طلب تقييم")}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="square" />
              </svg>
            </span>
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

      {/* Scroll progress hairline */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: -1, height: 1, backgroundColor: "transparent" }}
        aria-hidden
      >
        <div
          style={{
            height: "100%",
            width: `${scrollPct}%`,
            background:
              "linear-gradient(90deg, transparent 0%, #C5C7CB 50%, transparent 100%)",
            boxShadow: "0 0 8px rgba(197,199,203,0.5)",
            transition: "width 120ms linear",
          }}
        />
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
          {navLinks.map((link, i) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-4 uppercase transition-colors duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: isActive ? "#FFFFFF" : "#C5C7CB",
                  borderBottom: "1px solid #25282C",
                }}
              >
                <span className="flex items-center gap-3">
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      backgroundColor: isActive ? "#C5C7CB" : "transparent",
                      border: "1px solid #C5C7CB",
                    }}
                  />
                  {link.label}
                </span>
                <span style={{ fontSize: 9, color: "#6E7378" }}>{String(i + 1).padStart(2, "0")}</span>
              </a>
            );
          })}
          <div className="flex items-center justify-center py-6">
            <LanguageToggle />
          </div>
          <a
            href={assessmentMailto}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 uppercase"
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
