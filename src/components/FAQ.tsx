import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where does our data actually live?",
    a: "All data is hosted at our Tier-IV certified facility in Ashburn, Virginia, operated under Iraqi sovereign control. Control planes remain within Iraqi jurisdiction. Data never transits through third-party cloud providers without explicit client authorization. Air-gapped deployments are available for classified workloads.",
  },
  {
    q: "Can IR4Q handle both our infrastructure and software in one contract?",
    a: "Yes. This is one of IR4Q's core advantages. We operate as a single technology partner across infrastructure, software development, AI systems, and consulting — one contract, one SLA, one accountable team. Multi-domain engagements are scoped during the technical assessment phase.",
  },
  {
    q: "How does IR4Q's AI offering differ from using OpenAI or international providers?",
    a: "Every AI system IR4Q deploys runs on our own sovereign infrastructure. No data is sent to OpenAI, Google, or any international model provider. Models are hosted and operated entirely within our Tier-IV environment. For sensitive workloads, fully air-gapped deployments are available with zero external network access.",
  },
  {
    q: "What does your P1 incident response actually look like?",
    a: "P1 incidents trigger an immediate automated alert to our Baghdad NOC team with parallel escalation to our Virginia Tier-3 support team. Enterprise clients receive acknowledgment within 15 minutes and an active engineer on the incident within 30 minutes. All incident timelines are logged and included in monthly SLA reports.",
  },
  {
    q: "Is IR4Q compliant with Central Bank of Iraq requirements?",
    a: "IR4Q's compliance architecture is designed to support organizations operating under CBI regulatory frameworks, including data residency requirements, audit trail mandates, and security baseline standards. We work directly with client compliance teams to document and evidence adherence during assessments and audits.",
  },
  {
    q: "How do we start an engagement?",
    a: "All engagements begin with a Technical Assessment Request. Our team conducts an initial discovery session — typically 60 minutes — to understand your environment, requirements, and constraints. We then deliver a scoped proposal within 5 business days. There is no cost for the initial assessment.",
  },
];

const FAQ = () => {
  return (
    <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">FAQ</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#F0EDE8' }}>
            The Questions Our Clients Ask Before They Sign
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}
                className="border-none"
              >
                <AccordionTrigger
                  className="hover:no-underline text-left py-0 font-body font-[500] [&[data-state=open]]:text-sovereign-gold"
                  style={{ fontSize: 14, color: '#F0EDE8' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body font-[300] pb-0"
                  style={{ fontSize: 13, color: '#8A8F9E', lineHeight: 1.75, paddingTop: 12 }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
