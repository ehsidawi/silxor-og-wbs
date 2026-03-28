import { Shield } from "lucide-react";
import ir4qLogo from "@/assets/ir4q-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 md:py-16">
      <div className="container-content">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img src={ir4qLogo} alt="IR4Q Technologies" className="h-7 md:h-8 w-auto" />
              <h3 className="text-xl md:text-2xl font-display">IR4Q</h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              IR4Q is Iraq's sovereign technology company — delivering infrastructure, software, AI, and consulting for the institutions that power the country. A Silxor company.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">
              Services
            </h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#infrastructure" className="block hover:text-primary transition-colors touch-target">Infrastructure</a>
              <a href="#software" className="block hover:text-primary transition-colors touch-target">Software Development</a>
              <a href="#ai" className="block hover:text-primary transition-colors touch-target">AI & Automation</a>
              <a href="#consulting" className="block hover:text-primary transition-colors touch-target">Consulting</a>
            </nav>
          </div>

          {/* Operations */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">
              Operations Centers
            </h4>
            <div className="space-y-3 text-xs md:text-sm">
              <div>
                <div className="font-mono">Baghdad HQ</div>
                <div className="text-muted-foreground text-xs">Engineering & NOC</div>
              </div>
              <div>
                <div className="font-mono">Virginia NOC</div>
                <div className="text-muted-foreground text-xs">Infrastructure & Support</div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">
              Resources
            </h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#compliance" className="block hover:text-primary transition-colors touch-target">Compliance Documentation</a>
              <a href="#security" className="block hover:text-primary transition-colors touch-target">Security Practices</a>
              <a href="#privacy" className="block hover:text-primary transition-colors touch-target">Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
            <Shield className="w-4 h-4 flex-shrink-0" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2025 IR4Q Technologies. Iraq's sovereign technology company.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
