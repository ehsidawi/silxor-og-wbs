import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // @ts-ignore
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      // @ts-ignore
      C.Cal = C.Cal || function () { 
        // @ts-ignore
        let cal = C.Cal;
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
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

        <div className="surface-elevated p-12" style={{minHeight: '700px'}}>
          <div 
            style={{width: '100%', height: '100%', overflow: 'scroll'}} 
            id="my-cal-inline-technical-assessment"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
