const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">IR4Q</h3>
            <p className="text-sm text-muted-foreground">Iraqi-American Tech Infrastructure</p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© 2025 IR4Q. Building the digital future between Baghdad and Virginia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
