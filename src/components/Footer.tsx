import { Shield } from "lucide-react";
import ir4qLogo from "@/assets/ir4q-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-content">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={ir4qLogo} alt="IR4Q Technologies" className="h-7 md:h-8 w-auto" />
              <h3 className="text-xl md:text-2xl font-display">IR4Q</h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              IR4Q is a Silxor company. Iraqi-operated, U.S.-secured digital infrastructure for mission-critical operations.
            </p>
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

          {/* Legal */}
          <div>
            <h4 className="text-xs md:text-sm font-display mb-3 md:mb-4 text-muted-foreground">
              Resources
            </h4>
            <nav className="space-y-2 text-xs md:text-sm">
              <a 
                href="#privacy" 
                className="block hover:text-primary transition-colors touch-target inline-block"
              >
                Privacy Policy
              </a>
              <a 
                href="#compliance" 
                className="block hover:text-primary transition-colors touch-target inline-block"
              >
                Compliance Documentation
              </a>
              <a 
                href="#security" 
                className="block hover:text-primary transition-colors touch-target inline-block"
              >
                Security Practices
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
            <Shield className="w-4 h-4 flex-shrink-0" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2025 IR4Q Technologies. Building resilient digital infrastructure for Iraq.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
