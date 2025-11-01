import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.Cal = window.Cal || function () { 
        // @ts-ignore
        let cal = window.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          cal.loaded = true; 
        } 
        if (ar[0] === "init") { 
          const api = function () { cal.q.push(arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            cal.q.push(ar);
            cal.q.push(["initNamespace", namespace]);
          } else cal.q.push(ar); 
          return;
        } 
        cal.q.push(ar); 
      };
      
      // @ts-ignore
      window.Cal("init", "technical-assessment", {origin:"https://app.cal.com"});
      // @ts-ignore    
      window.Cal.ns["technical-assessment"]("inline", {     
        elementOrSelector:"#my-cal-inline-technical-assessment",     
        config: {"layout":"month_view"},     
        calLink: "silxor/technical-assessment",   
      });
      // @ts-ignore    
      window.Cal.ns["technical-assessment"]("ui", {
        "cssVarsPerTheme":{"light":{"cal-brand":"#6d6d6d"},"dark":{"cal-brand":"#fafafa"}},
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);
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
          <div 
            style={{width: '100%', height: '600px', overflow: 'auto'}} 
            id="my-cal-inline-technical-assessment"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
