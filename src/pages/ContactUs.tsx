import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Get In <span className="text-gradient">Touch.</span></h1>
        <p className="text-muted-foreground mb-10 max-w-xl">We'd love to hear from you. Reach out and let's make something great together.</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email Us", value: "thenexzenindia@gmail.com", href: "mailto:thenexzenindia@gmail.com" },
              { icon: Phone, label: "Call Us", value: "+91 82382 94820", href: "tel:+918238294820" },
              { icon: MapPin, label: "Visit Us", value: "Gujarat, India", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="space-y-4 p-6 rounded-2xl bg-muted/50 border border-border">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-accent/50 min-h-[44px]" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-accent/50 min-h-[44px]" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-accent/50 resize-none" />
            <button type="submit" className="w-full px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity min-h-[48px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactUs;
