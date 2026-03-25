import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does Nexzen offer?", a: "We offer comprehensive digital marketing services including SEO, Google Ads (PPC), Social Media Marketing, Email Marketing, Content Marketing, and Web Development." },
  { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy. Typically, you can expect to see initial improvements within 3-6 months, with significant results appearing after 6-12 months of consistent effort." },
  { q: "What is your pricing model?", a: "We offer flexible pricing based on the scope and complexity of your project. Contact us for a customized quote tailored to your specific business needs." },
  { q: "Do you provide monthly reports?", a: "Yes, all our service packages include detailed monthly reports with key performance metrics, insights, and recommendations for continuous improvement." },
  { q: "Can I cancel my contract at any time?", a: "We operate with a 30-day notice policy. You can cancel your services with 30 days written notice as outlined in our terms of service." },
  { q: "Do you work with businesses outside India?", a: "Absolutely! While we are based in Gujarat, India, we serve clients globally and have experience working with businesses across different markets." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked <span className="text-gradient">Questions.</span></h1>
        <p className="text-muted-foreground mb-10 text-sm">Find answers to common questions about our services.</p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5 py-1">
              <AccordionTrigger className="hover:no-underline py-4 text-left font-display font-semibold text-sm">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground text-sm leading-relaxed pb-2">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
