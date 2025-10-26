import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your infrastructure? Our team is standing by.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <Input 
                placeholder="Your Company" 
                className="bg-background/50 border-white/10 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell us about your infrastructure needs..." 
                rows={6}
                className="bg-background/50 border-white/10 focus:border-primary resize-none"
              />
            </div>

            <Button variant="hero" size="lg" className="w-full group">
              <Mail className="w-5 h-5" />
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-muted-foreground mb-2">Or reach us directly</p>
            <a href="mailto:contact@ir4q.tech" className="text-primary hover:text-primary/80 font-medium transition-colors">
              contact@ir4q.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
