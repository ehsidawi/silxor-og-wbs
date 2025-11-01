import { Shield } from "lucide-react";
import ir4qLogo from "@/assets/ir4q-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={ir4qLogo} alt="IR4Q Technologies" className="h-8 w-auto" />
              <h3 className="text-2xl font-display">IR4Q</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Iraqi-operated, U.S.-secured digital infrastructure for mission-critical operations.
            </p>
          </div>

          {/* Operations */}
          <div>
            <h4 className="text-sm font-display mb-4 text-muted-foreground">Operations Centers</h4>
            <div className="space-y-3 text-sm">
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
            <h4 className="text-sm font-display mb-4 text-muted-foreground">Resources</h4>
            <nav className="space-y-2 text-sm">
              <a href="#privacy" className="block hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#compliance" className="block hover:text-primary transition-colors">
                Compliance Documentation
              </a>
              <a href="#security" className="block hover:text-primary transition-colors">
                Security Practices
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 IR4Q Technologies. Building resilient digital infrastructure for Iraq.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
