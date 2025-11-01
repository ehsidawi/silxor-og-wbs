import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-display-lg md:text-5xl font-display mb-4">
            Begin a Technical Assessment
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Our engineering team will conduct a comprehensive evaluation of your infrastructure requirements and provide a detailed proposal within 48 hours.
          </p>
        </div>

        <div className="surface-elevated p-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-display mb-2 text-muted-foreground">
                  Full Name
                </label>
                <Input 
                  placeholder="Technical contact name" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-display mb-2 text-muted-foreground">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="email@organization.iq" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-display mb-2 text-muted-foreground">
                Organization
              </label>
              <Input 
                placeholder="Organization or institution name" 
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-display mb-2 text-muted-foreground">
                Primary Use Case
              </label>
              <Select>
                <SelectTrigger className="bg-background border-border focus:border-primary">
                  <SelectValue placeholder="Select assessment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="migration">Cloud Migration</SelectItem>
                  <SelectItem value="security">Security Audit</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure Review</SelectItem>
                  <SelectItem value="custom">Custom Development</SelectItem>
                  <SelectItem value="compliance">Compliance Assessment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="institutional" size="lg" className="w-full">
              Request Assessment
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              For immediate technical inquiries, contact our engineering team directly:
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
            <a 
              href="mailto:contact@ir4q.com" 
              className="text-primary hover:opacity-80 transition-opacity font-mono text-sm"
            >
              contact@ir4q.com
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
