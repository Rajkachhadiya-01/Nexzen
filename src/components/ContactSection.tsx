import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: "seo", label: "Search Engine Optimization (SEO)" },
  { value: "ppc", label: "Google Ads (PPC)" },
  { value: "social", label: "Social Media Marketing" },
  { value: "email", label: "E-mail Marketing" },
  { value: "content", label: "Content Marketing" },
  { value: "webdev", label: "Web Development" },
];

// ⚠️ REPLACE THIS with your Google Apps Script Web App URL
// See setup instructions in the README or chat
const GOOGLE_SHEETS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "", honeypot: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setFormData((prev) => ({ ...prev, service: detail }));
    };
    window.addEventListener("select-service", handler);
    return () => window.removeEventListener("select-service", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    // Basic validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedMessage.length > 2000) {
      toast({ title: "Input too long. Please shorten your entries.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: trimmedName,
        email: trimmedEmail,
        phone: formData.phone.trim(),
        service: formData.service,
        message: trimmedMessage,
      };

      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // no-cors mode always returns opaque response, so we assume success
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", service: "", message: "", honeypot: "" });
    } catch {
      toast({ title: "Something went wrong.", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Let's <span className="text-gradient">Connect.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Ready to elevate your brand? Get in touch and let's create something extraordinary together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5"
        >
          {/* Honeypot - hidden from humans */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="absolute opacity-0 pointer-events-none h-0 w-0"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <input type="text" placeholder="Your Name" required value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]" />
            <input type="email" placeholder="Your Email" required value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <input type="tel" placeholder="Phone Number" value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={20}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]" />
            <select value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]">
              <option value="">Select Service</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <textarea placeholder="Tell us about your project..." rows={4} required value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            maxLength={2000}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none" />
          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center min-h-[48px] disabled:opacity-60">
            {isSubmitting ? (
              <>Sending... <Loader2 size={16} className="animate-spin" /></>
            ) : (
              <>Send Message <Send size={16} /></>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
