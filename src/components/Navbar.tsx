import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("Home", "الرئيسية"), href: "#home" },
    { label: t("Work", "أعمالنا"), href: "#work" },
    { label: t("Infrastructure", "البنية التحتية"), href: "#infrastructure" },
    { label: t("Software", "البرمجيات"), href: "#software" },
    { label: t("AI & Automation", "الذكاء الاصطناعي"), href: "#ai" },
    { label: t("Identity", "الهوية الرقمية"), href: "#identity" },
    { label: t("Packages", "الباقات"), href: "#packages" },
    { label: t("About", "عنا"), href: "#about" },
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
      const navHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-[100] transition-all duration-500"
      style={{
        height: 64,
        backgroundColor: scrolled ? "rgba(16,19,28,0.92)" : "#10131C",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div className="container-content flex items-center justify-between h-full">
        <a
          href="#"
          className="flex items-center gap-1.5 group shrink-0"
          onClick={(e) => handleNavClick(e, "#")}
        >
          <span className="font-display text-[20px] font-[800] tracking-tight" style={{ color: "#F7F3EC" }}>
            Silxor
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-125"
            style={{ width: 5, height: 5, backgroundColor: "#DDB343", marginBottom: 8 }}
          />
        </a>

        <ul className="hidden xl:flex items-center h-full">
          {navLinks.map((link, idx) => (
            <li key={link.href} className="h-full flex items-center">
              {idx === 1 && (
                <span
                  aria-hidden
                  className="mx-1"
                  style={{ width: 1, height: 16, backgroundColor: "rgba(255,255,255,0.10)" }}
                />
              )}
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center h-full font-mono uppercase transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  padding: "0 12px",
                  fontWeight: idx === 0 ? 700 : 500,
                  color: idx === 0 ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DDB343")}
                onMouseLeave={(e) => (e.currentTarget.style.color = idx === 0 ? "#FFFFFF" : "rgba(255,255,255,0.6)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-6 shrink-0">
          <LanguageToggle />

          <a
            href="mailto:contact@silxor.com?subject=Silxor%20-%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20technical%20assessment%20with%20Silxor.%0A%0AOrganization%3A%20%0AService%20Interest%3A%20%0AMessage%3A%20"
            className="group inline-flex items-center gap-4 transition-all duration-300"
            style={{
              height: 40,
              padding: "0 20px",
              border: "1px solid rgba(221,179,67,0.3)",
              color: "#DDB343",
              fontSize: 11,
              letterSpacing: "0.15em",
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'JetBrains Mono', monospace",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#DDB343")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(221,179,67,0.3)")}
          >
            {t("Request Assessment", "طلب تقييم")}
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button
          className="xl:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" style={{ color: "#DDB343" }} />
          ) : (
            <div className="flex flex-col items-end gap-[4px]">
              <span style={{ width: 20, height: 1, backgroundColor: "#DDB343", display: "block" }} />
              <span style={{ width: 14, height: 1, backgroundColor: "#DDB343", display: "block" }} />
              <span style={{ width: 20, height: 1, backgroundColor: "#DDB343", display: "block" }} />
            </div>
          )}
        </button>
      </div>

      <div
        className="xl:hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "calc(100vh - 64px)" : 0,
          overflowY: mobileOpen ? "auto" : "hidden",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          backgroundColor: "rgba(8,10,15,0.97)",
          backdropFilter: "blur(24px)",
          WebkitOverflowScrolling: "touch",
          borderTop: mobileOpen ? "1px solid rgba(221,179,67,0.08)" : "none",
        }}
      >
        <div className="container-content py-6 space-y-0">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between py-3 font-mono uppercase transition-colors duration-200"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "#FFFFFF",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#DDB343")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: 9, color: "#4A5060" }}>0{i + 1}</span>
            </a>
          ))}
          <div className="flex items-center justify-center py-4">
            <LanguageToggle />
          </div>
          <a
            href="mailto:contact@silxor.com?subject=Silxor%20-%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20technical%20assessment%20with%20Silxor.%0A%0AOrganization%3A%20%0AService%20Interest%3A%20%0AMessage%3A%20"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 font-mono uppercase mt-4"
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              border: "1px solid rgba(221,179,67,0.4)",
              color: "#DDB343",
              padding: "12px 20px",
            }}
          >
            {t("Request Assessment", "طلب تقييم")}
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
