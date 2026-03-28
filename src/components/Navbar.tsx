import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import silxorLogo from "@/assets/ir4q-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Software", href: "#software" },
  { label: "AI & Automation", href: "#ai" },
  { label: "Consulting", href: "#consulting" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === "#") {
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
    <nav className="sticky top-0 z-[100] functional-glass">
      <div className="container-content flex items-center justify-between" style={{ height: 64 }}>
        <a
          href="#"
          className="flex items-center gap-2 touch-target"
          onClick={(e) => handleNavClick(e, "#")}
        >
          <img src={silxorLogo} alt="IR4Q" className="h-12 w-auto" />
          <span className="font-display text-xl font-[800]" style={{ color: '#F0EDE8' }}>
            IR4Q
            <span
              className="inline-block ml-1"
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#C9A84C',
                verticalAlign: 'middle',
                marginBottom: 2,
              }}
            />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body font-[400] uppercase touch-target transition-colors duration-200"
              style={{
                fontSize: 13,
                letterSpacing: '0.08em',
                color: '#8A8F9E',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EDE8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8F9E')}
            >
              {link.label}
            </a>
          ))}

          {/* Gold divider */}
          <div style={{ width: 1, height: 20, backgroundColor: '#C9A84C', opacity: 0.4 }} />

          <a
            href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-[500] uppercase transition-colors duration-200"
            style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              backgroundColor: '#C9A84C',
              color: '#080A0F',
              padding: '10px 20px',
              borderRadius: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E2C06A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C9A84C')}
          >
            Request Assessment
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden touch-target flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" style={{ color: '#C9A84C' }} />
          ) : (
            <div className="flex flex-col gap-[5px]">
              <span style={{ width: 20, height: 1, backgroundColor: '#C9A84C', display: 'block' }} />
              <span style={{ width: 20, height: 1, backgroundColor: '#C9A84C', display: 'block' }} />
              <span style={{ width: 20, height: 1, backgroundColor: '#C9A84C', display: 'block' }} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: '#080A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container-content py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 font-body font-[400] uppercase transition-colors touch-target"
                style={{ fontSize: 13, letterSpacing: '0.08em', color: '#8A8F9E' }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-body font-[500] uppercase mt-4"
              style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                backgroundColor: '#C9A84C',
                color: '#080A0F',
                padding: '12px 20px',
                borderRadius: 2,
              }}
            >
              Request Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
