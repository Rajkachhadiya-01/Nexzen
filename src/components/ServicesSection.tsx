import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2, Mail, FileText, Code, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import seoHeroImg from "@/assets/seo-hero.png";

const expertiseData = [
  {
    category: "seo",
    label: "Search Engine Optimization (SEO)",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    icon: Search,
    description: "Our SEO service is designed to improve your search engine visibility and drive consistent, high-quality organic traffic to your website. Through thorough keyword research, on-page optimisation, and authoritative link-building, we position your brand at the top of search results — where your audience is already looking.",
    services: ["Keyword Research & Competitor Analysis", "On-Page SEO & Content Optimisation", "Technical SEO & Core Web Vitals", "Off-Page Link Building", "Schema Implementation", "Monthly Performance Reporting"],
    hasImage: true,
  },
  {
    category: "ppc",
    label: "Google Ads (PPC)",
    tagline: "Instant Visibility. Measurable Returns.",
    icon: MousePointerClick,
    description: "Our PPC specialists design and manage high-performing ad campaigns on Google, Bing, and social platforms. Every campaign is carefully optimised to maximise your return on ad spend, minimise wasted budget, and deliver qualified leads directly to your business.",
    services: ["Search & Display Ads", "Gmail & Video Ads", "Remarketing Campaigns", "Shopping Ads", "Landing Page Optimisation", "Real-Time A/B Testing"],
  },
  {
    category: "social",
    label: "Social Media Marketing",
    tagline: "Build Your Brand Where Your Audience Lives.",
    icon: Share2,
    description: "We develop and manage result-driven social media strategies across all major platforms — Instagram, LinkedIn, Facebook, TikTok, and X. From content creation to community management, we ensure your brand communicates with clarity, consistency, and impact.",
    services: ["Platform Strategy & Optimisation", "Content Calendar & Production", "Community Management", "Paid Social Advertising", "Analytics & Monthly Reports", "Profile & Brand Audit"],
  },
  {
    category: "email",
    label: "E-mail Marketing",
    tagline: "Stay Top-of-Mind With Every Send.",
    icon: Mail,
    description: "Our email marketing service combines strategic copywriting with smart automation to keep your audience engaged and your pipeline active. We design, write, and manage campaigns that nurture leads, retain existing clients, and generate repeat business.",
    services: ["List Building & Segmentation", "Automated Drip Campaigns", "Newsletter Creation", "A/B Testing & Optimisation", "Deliverability Monitoring", "Performance Analytics"],
  },
  {
    category: "content",
    label: "Content Marketing",
    tagline: "Content That Connects, Educates, and Converts.",
    icon: FileText,
    description: "We craft compelling, SEO-optimised content that speaks directly to your target audience. From blog articles and website copy to email campaigns and downloadable resources, our content strategy builds trust, drives traffic, and supports every stage of the customer journey.",
    services: ["SEO Blog Writing", "Website Copywriting", "Guest & Article Posting", "Lead Magnets & E-books", "Content Distribution Strategy", "Monthly Content Reports"],
  },
  {
    category: "webdev",
    label: "Web Development",
    tagline: "Websites That Deliver Performance, Design, and Results.",
    icon: Code,
    description: "We design and develop professional, high-performing websites that represent your brand with confidence, engage your visitors from the first click, and convert traffic into real business opportunities.",
    services: ["Custom Website Design", "Mobile-Responsive Development", "E-Commerce Solutions", "Speed & Performance Optimisation", "SEO-Ready Architecture", "CMS Integration & Training"],
  },
];

const handleServiceClick = (category: string) => {
  window.dispatchEvent(new CustomEvent("select-service", { detail: category }));
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ServicesSection = () => {
  const [openValue, setOpenValue] = useState<string>("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setOpenValue(detail);
    };
    window.addEventListener("select-service", handler);
    return () => window.removeEventListener("select-service", handler);
  }, []);

  return (
    <section id="services" className="section-padding relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Comprehensive Digital Marketing <span className="text-gradient">Services.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We deliver strategic, data-driven marketing solutions tailored to your growth. Click any service to get started.
          </p>
        </motion.div>

        <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue} className="flex flex-col gap-4 max-w-4xl mx-auto">
          {expertiseData.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              <AccordionItem
                value={group.category}
                className="glass-card rounded-2xl px-5 md:px-7 py-1 transition-all duration-300 data-[state=open]:shadow-xl data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <group.icon className="text-accent" size={24} />
                    </div>
                    <div className="text-left">
                      <span className="font-display font-bold text-base md:text-lg block">{group.label}</span>
                      <span className="text-muted-foreground text-xs md:text-sm font-normal">{group.tagline}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className={`pb-4 ${group.hasImage ? 'grid md:grid-cols-2 gap-6' : ''}`}>
                    <div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {group.description}
                      </p>
                      <ul className="space-y-1">
                        {group.services.map((service) => (
                          <li key={service}>
                            <button
                              onClick={() => handleServiceClick(group.category)}
                              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors group/item min-h-[44px]"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                {service}
                              </span>
                              <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {group.hasImage && (
                      <div className="hidden md:flex items-center justify-center">
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={seoHeroImg}
                            alt="SEO Services Illustration"
                            loading="lazy"
                            className="w-full max-w-sm object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesSection;
