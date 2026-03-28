import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Software", href: "#software" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <nav
      className="sticky top-0 z-[100] transition-all duration-500"
      style={{
        height: 64,
        backgroundColor: scrolled ? 'rgba(8,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.08)' : '1px solid transparent',
      }}
    >
      <div className="container-content flex items-center justify-between h-full">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1.5 group"
          onClick={(e) => handleNavClick(e, "#")}
        >
          <span className="font-display text-[20px] font-[800] tracking-tight" style={{ color: '#F0EDE8' }}>
            IR4Q
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-125"
            style={{
              width: 5,
              height: 5,
              backgroundColor: '#C9A84C',
              marginBottom: 8,
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative font-mono uppercase px-4 py-2 transition-colors duration-200 hover:text-[#F0EDE8] group"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: '#4A5060',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EDE8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A5060')}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 group-hover:w-3/4 transition-all duration-300"
                  style={{ backgroundColor: '#C9A84C' }}
                />
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="mx-5" style={{ width: 1, height: 16, background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)' }} />

          {/* CTA */}
          <a
            href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]"
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#C9A84C',
              padding: '8px 18px',
              borderRadius: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C9A84C';
              e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Request Assessment
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" style={{ color: '#C9A84C' }} />
          ) : (
            <div className="flex flex-col items-end gap-[4px]">
              <span style={{ width: 20, height: 1, backgroundColor: '#C9A84C', display: 'block', transition: 'all 300ms' }} />
              <span style={{ width: 14, height: 1, backgroundColor: '#C9A84C', display: 'block', transition: 'all 300ms' }} />
              <span style={{ width: 20, height: 1, backgroundColor: '#C9A84C', display: 'block', transition: 'all 300ms' }} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? 500 : 0,
          opacity: mobileOpen ? 1 : 0,
          backgroundColor: 'rgba(8,10,15,0.97)',
          backdropFilter: 'blur(24px)',
          borderTop: mobileOpen ? '1px solid rgba(201,168,76,0.08)' : 'none',
        }}
      >
        <div className="container-content py-6 space-y-0">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between py-3 font-mono uppercase transition-colors duration-200"
              style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                color: '#4A5060',
                borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                transitionDelay: `${i * 50}ms`,
              }}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A5060')}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: 9, color: '#4A5060' }}>0{i + 1}</span>
            </a>
          ))}
          <a
            href="https://cal.com/silxor/1-hr?user=silxor&duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-mono uppercase mt-6"
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#C9A84C',
              padding: '12px 20px',
            }}
          >
            Request Assessment
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
