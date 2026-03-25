import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly, such as your name, email address, phone number, and any messages you send through our contact forms. We also automatically collect usage data including IP addresses, browser type, and pages visited." },
  { title: "How We Use Your Information", body: "We use the information to provide and improve our services, respond to inquiries, send marketing communications (with your consent), and analyze website usage patterns to enhance user experience." },
  { title: "Data Sharing", body: "We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and delivering services, subject to confidentiality agreements." },
  { title: "Cookies", body: "Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly." },
  { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time by contacting us." },
  { title: "Contact", body: "For privacy-related inquiries, please contact us at thenexzenindia@gmail.com or call +91 82382 94820." },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Privacy <span className="text-gradient">Policy.</span></h1>
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

export default PrivacyPolicy;
