import { Shield } from "lucide-react";
import ir4qLogo from "@/assets/ir4q-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
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
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">Services</h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#infrastructure" className="block hover:text-primary transition-colors touch-target">Infrastructure & Cloud</a>
              <a href="#software" className="block hover:text-primary transition-colors touch-target">Software Development</a>
              <a href="#ai" className="block hover:text-primary transition-colors touch-target">AI & Automation</a>
              <a href="#consulting" className="block hover:text-primary transition-colors touch-target">Technology Consulting</a>
            </nav>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">Packages</h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#packages" className="block hover:text-primary transition-colors touch-target">Infrastructure Packages</a>
              <a href="#packages" className="block hover:text-primary transition-colors touch-target">Software Packages</a>
              <a href="#packages" className="block hover:text-primary transition-colors touch-target">AI Packages</a>
              <a href="#packages" className="block hover:text-primary transition-colors touch-target">Consulting Packages</a>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">Company</h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#about" className="block hover:text-primary transition-colors touch-target">About IR4Q</a>
              <a href="#about" className="block hover:text-primary transition-colors touch-target">Leadership</a>
              <a href="#contact" className="block hover:text-primary transition-colors touch-target">Careers</a>
              <a href="#contact" className="block hover:text-primary transition-colors touch-target">Contact</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">Legal & Compliance</h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a href="#" className="block hover:text-primary transition-colors touch-target">Privacy Policy</a>
              <a href="#" className="block hover:text-primary transition-colors touch-target">Compliance Documentation</a>
              <a href="#" className="block hover:text-primary transition-colors touch-target">Security Practices</a>
              <a href="#" className="block hover:text-primary transition-colors touch-target">SLA Documentation</a>
            </nav>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
            <Shield className="w-4 h-4 flex-shrink-0" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2026 IR4Q Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
