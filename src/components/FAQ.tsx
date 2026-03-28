import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t("Where does our data actually live?", "أين توجد بياناتنا فعلياً؟"),
      a: t("All data is hosted at our Tier-IV certified facility in Ashburn, Virginia, operated under Iraqi sovereign control. Control planes remain within Iraqi jurisdiction. Data never transits through third-party cloud providers without explicit client authorization. Air-gapped deployments are available for classified workloads.", "جميع البيانات مستضافة في منشأتنا المعتمدة من المستوى الرابع في أشبرن، فيرجينيا، تحت سيطرة سيادية عراقية. تبقى مستويات التحكم ضمن الولاية القضائية العراقية. لا تنتقل البيانات عبر مزودي سحابة طرف ثالث بدون إذن صريح من العميل. النشر المعزول متاح لأحمال العمل السرية."),
    },
    {
      q: t("Can IR4Q handle both our infrastructure and software in one contract?", "هل يمكن لـ IR4Q التعامل مع بنيتنا التحتية وبرمجياتنا في عقد واحد؟"),
      a: t("Yes. This is one of IR4Q's core advantages. We operate as a single technology partner across infrastructure, software development, AI systems, and consulting — one contract, one SLA, one accountable team. Multi-domain engagements are scoped during the technical assessment phase.", "نعم. هذه إحدى المزايا الأساسية لـ IR4Q. نعمل كشريك تقني واحد عبر البنية التحتية وتطوير البرمجيات وأنظمة الذكاء الاصطناعي والاستشارات — عقد واحد، اتفاقية مستوى خدمة واحدة، فريق مسؤول واحد."),
    },
    {
      q: t("How does IR4Q's AI offering differ from using OpenAI or international providers?", "كيف يختلف عرض IR4Q للذكاء الاصطناعي عن استخدام OpenAI أو المزودين الدوليين؟"),
      a: t("Every AI system IR4Q deploys runs on our own sovereign infrastructure. No data is sent to OpenAI, Google, or any international model provider. Models are hosted and operated entirely within our Tier-IV environment. For sensitive workloads, fully air-gapped deployments are available with zero external network access.", "كل نظام ذكاء اصطناعي تنشره IR4Q يعمل على بنيتنا التحتية السيادية. لا تُرسل أي بيانات إلى OpenAI أو Google أو أي مزود نماذج دولي. النماذج مستضافة ومُدارة بالكامل ضمن بيئتنا من المستوى الرابع."),
    },
    {
      q: t("What does your P1 incident response actually look like?", "كيف تبدو استجابة الحوادث P1 فعلياً؟"),
      a: t("P1 incidents trigger an immediate automated alert to our Baghdad NOC team with parallel escalation to our Virginia Tier-3 support team. Enterprise clients receive acknowledgment within 15 minutes and an active engineer on the incident within 30 minutes. All incident timelines are logged and included in monthly SLA reports.", "حوادث P1 تُفعّل تنبيهاً آلياً فورياً لفريق مركز العمليات في بغداد مع تصعيد متوازٍ لفريق دعم المستوى الثالث في فيرجينيا. يتلقى عملاء المؤسسات إقراراً خلال 15 دقيقة ومهندساً نشطاً على الحادثة خلال 30 دقيقة."),
    },
    {
      q: t("Is IR4Q compliant with Central Bank of Iraq requirements?", "هل IR4Q متوافقة مع متطلبات البنك المركزي العراقي؟"),
      a: t("IR4Q's compliance architecture is designed to support organizations operating under CBI regulatory frameworks, including data residency requirements, audit trail mandates, and security baseline standards. We work directly with client compliance teams to document and evidence adherence during assessments and audits.", "بنية الامتثال في IR4Q مصممة لدعم المنظمات العاملة ضمن الأطر التنظيمية للبنك المركزي العراقي، بما في ذلك متطلبات إقامة البيانات وتفويضات مسار التدقيق ومعايير خط الأساس الأمني."),
    },
    {
      q: t("How do we start an engagement?", "كيف نبدأ التعاون؟"),
      a: t("All engagements begin with a Technical Assessment Request. Our team conducts an initial discovery session — typically 60 minutes — to understand your environment, requirements, and constraints. We then deliver a scoped proposal within 5 business days. There is no cost for the initial assessment.", "تبدأ جميع التعاونات بطلب تقييم تقني. يجري فريقنا جلسة اكتشاف أولية — عادة 60 دقيقة — لفهم بيئتك ومتطلباتك وقيودك. ثم نقدم اقتراحاً محدد النطاق خلال 5 أيام عمل. لا توجد تكلفة للتقييم الأولي."),
    },
    {
      q: t("Does IR4Q provide services in Arabic?", "هل تقدم IR4Q خدماتها باللغة العربية؟"),
      a: t("Yes. IR4Q operates bilingually across all client engagements — all documentation, assessments, architecture reports, and operational communications are available in both Arabic and English. Our Baghdad-based team is fully Arabic-speaking and all client-facing materials can be delivered in Arabic upon request.", "نعم. تعمل IR4Q بشكل ثنائي اللغة عبر جميع تعاملات العملاء — جميع الوثائق والتقييمات وتقارير البنية المعمارية والاتصالات التشغيلية متاحة بالعربية والإنجليزية. فريقنا في بغداد يتحدث العربية بالكامل ويمكن تسليم جميع المواد الموجهة للعملاء بالعربية عند الطلب."),
    },
    {
      q: t("Can IR4Q deploy systems in an air-gapped environment with no internet connectivity?", "هل يمكن لـ IR4Q نشر أنظمة في بيئة معزولة بدون اتصال بالإنترنت؟"),
      a: t("Yes. IR4Q supports fully air-gapped deployments for classified and high-security workloads. This includes sovereign AI systems, identity infrastructure, and custom software platforms that operate with zero external network dependency. Air-gap architecture is scoped during the technical assessment phase.", "نعم. تدعم IR4Q النشر المعزول بالكامل لأحمال العمل السرية والعالية الأمان. يشمل ذلك أنظمة الذكاء الاصطناعي السيادية والبنية التحتية للهوية ومنصات البرمجيات المخصصة التي تعمل بدون أي اعتماد على شبكة خارجية."),
    },
    {
      q: t("What makes IR4Q different from international technology providers operating in Iraq?", "ما الذي يميز IR4Q عن مزودي التقنية الدوليين العاملين في العراق؟"),
      a: t("IR4Q is Iraqi-operated — not a foreign company with a local office. Our engineering, NOC, and delivery teams are Baghdad-based. We hold Iraqi operational sovereignty over all control planes. We understand the regulatory environment, the CBI framework, the network realities, and the cultural context of doing technology work in Iraq. International providers cannot offer this combination of local accountability and international-grade infrastructure.", "IR4Q تُدار عراقياً — وليست شركة أجنبية بمكتب محلي. فرق الهندسة ومركز العمليات والتسليم لدينا في بغداد. نمتلك السيادة التشغيلية العراقية على جميع مستويات التحكم. نفهم البيئة التنظيمية وإطار البنك المركزي وواقع الشبكات والسياق الثقافي للعمل التقني في العراق."),
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 32 }}>
          <div className="section-eyebrow">{t("FAQ", "الأسئلة الشائعة")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#F0EDE8" }}>
            {t("The Questions Our Clients Ask Before They Sign", "الأسئلة التي يطرحها عملاؤنا قبل التعاقد")}
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}
                className="border-none"
              >
                <AccordionTrigger
                  className="hover:no-underline text-left py-0 font-body font-[500] [&[data-state=open]]:text-sovereign-gold"
                  style={{ fontSize: 14, color: "#F0EDE8" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body font-[300] pb-0"
                  style={{ fontSize: 13, color: "#8A8F9E", lineHeight: 1.75, paddingTop: 12 }}
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
