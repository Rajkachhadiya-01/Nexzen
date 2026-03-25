import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title: "Acceptance of Terms", body: "By accessing and using Nexzen's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
  { title: "Services", body: "Nexzen provides digital marketing services including SEO, PPC advertising, social media marketing, email marketing, content marketing, and web development. Service specifics are outlined in individual client agreements." },
  { title: "Payment Terms", body: "Payment terms are specified in individual service agreements. Late payments may incur additional charges. All prices are in INR unless otherwise stated." },
  { title: "Intellectual Property", body: "All content, designs, and materials created by Nexzen remain our intellectual property until full payment is received, at which point ownership transfers to the client as specified in the agreement." },
  { title: "Limitation of Liability", body: "Nexzen shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service." },
  { title: "Termination", body: "Either party may terminate services with 30 days written notice. Upon termination, all outstanding payments become due immediately." },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Terms of <span className="text-gradient">Service.</span></h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: February 2026</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-display font-semibold mb-2">{s.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
