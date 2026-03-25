import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2, Mail, FileText, Code, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const expertiseData = [
  {
    category: "seo",
    label: "Search Engine Optimization (SEO)",
    icon: Search,
    services: ["Keyword Research", "On Page", "Off Page", "Technical Issue", "Schema Implementation", "Content Duplicity Check", "Monthly Report"],
  },
  {
    category: "ppc",
    label: "Google Ads (PPC)",
    icon: MousePointerClick,
    services: ["Search Ads", "Display Ads", "Gmail Ads", "Remarketing Ads", "Video Ads", "Shopping Ads", "Monthly Report"],
  },
  {
    category: "social",
    label: "Social Media Marketing",
    icon: Share2,
    services: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "Video Ads", "Shopping Ads", "Monthly Report"],
  },
  {
    category: "email",
    label: "E-mail Marketing",
    icon: Mail,
    services: ["Mailchimp", "Benchmark Email", "Brevo", "Sender", "Monthly Report"],
  },
  {
    category: "content",
    label: "Content Marketing",
    icon: FileText,
    services: ["Website Content", "Guest Posting", "Blog Posting", "Article Posting", "Monthly Report"],
  },
  {
    category: "webdev",
    label: "Web Development",
    icon: Code,
    services: ["Front-End Development", "Back-End Development", "Full-Stack Development", "Monthly Report"],
  },
];

const handleServiceClick = (category: string) => {
  // Dispatch custom event to pre-select contact form service
  window.dispatchEvent(new CustomEvent("select-service", { detail: category }));
  // Scroll to contact
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Our <span className="text-gradient">Expertise.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click any service to get started — we'll take you straight to the contact form with your selection ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={group.category} className="border-none">
                  <AccordionTrigger className="hover:no-underline py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <group.icon className="text-accent" size={20} />
                      </div>
                      <span className="font-display font-semibold text-sm text-left">{group.label}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="mt-2 space-y-1.5">
                      {group.services.map((service) => (
                        <li key={service}>
                          <button
                            onClick={() => handleServiceClick(group.category)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors group"
                          >
                            {service}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
