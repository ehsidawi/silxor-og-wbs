import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
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

  return (
    <nav className="sticky top-0 z-50 functional-glass border-b border-border">
      <div className="container-content flex items-center justify-between h-14 md:h-16">
        <a href="#" className="flex items-center gap-2 touch-target">
          <img src={silxorLogo} alt="IR4Q" className="h-7 w-auto" />
          <span className="font-display text-lg">IR4Q</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors touch-target"
            >
              {link.label}
            </a>
          ))}
          <Button variant="institutional" size="sm" asChild>
            <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
              Request Assessment
              <ArrowRight className="w-3 h-3" />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden touch-target flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-content py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors touch-target"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="institutional" size="sm" className="w-full mt-2" asChild>
              <a href="https://cal.com/silxor/1-hr?user=silxor&duration=30" target="_blank" rel="noopener noreferrer">
                Request Assessment
                <ArrowRight className="w-3 h-3" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
