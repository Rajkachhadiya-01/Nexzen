import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import nexzenLogo from "@/assets/nexzen-logo.png";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const handleServiceClick = (category: string) => {
    if (location.pathname === "/") {
      window.dispatchEvent(new CustomEvent("select-service", { detail: category }));
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "services" } });
    }
  };

  const footerColumns = [
    {
      title: "Services",
      links: [
        { label: "SEO", action: () => handleServiceClick("seo") },
        { label: "Google Ads (PPC)", action: () => handleServiceClick("ppc") },
        { label: "Social Media Marketing", action: () => handleServiceClick("social") },
        { label: "Email Marketing", action: () => handleServiceClick("email") },
        { label: "Content Marketing", action: () => handleServiceClick("content") },
        { label: "Web Development", action: () => handleServiceClick("webdev") },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", action: () => scrollToSection("about") },
        { label: "Our Team", action: () => scrollToSection("about") },
        { label: "Careers", action: () => navigate("/careers") },
        { label: "Blog", action: () => scrollToSection("blog") },
        { label: "Case Studies", action: () => navigate("/case-studies") },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", action: () => navigate("/contact-us") },
        { label: "FAQ", action: () => navigate("/faq") },
        { label: "Privacy Policy", action: () => navigate("/privacy-policy") },
        { label: "Terms of Service", action: () => navigate("/terms-of-service") },
      ],
    },
  ];

  const socialLinks = [
    { icon: WhatsAppIcon, href: "https://wa.me/919558848891", label: "WhatsApp" },
    { icon: Instagram, href: "https://www.instagram.com/nexzen_india", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587601097835", label: "Facebook" },
    { icon: XIcon, href: "https://x.com/Nexzen_india?s=20", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nexzen-india-04b8323b2/", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border py-12 px-4 md:px-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={nexzenLogo} alt="Nexzen" className="h-10 object-contain" />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Powering the Next Era of Marketing. Your growth, our mission.
            </p>

            <div className="space-y-3 mb-4">
              <a href="mailto:thenexzenindia@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail size={14} className="shrink-0" /> thenexzenindia@gmail.com
              </a>
              <a href="tel:+919558848891" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone size={14} className="shrink-0" /> +91 95588 48891
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-sm text-primary-foreground/50 hover:text-accent transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">© 2026 Nexzen. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/40 justify-center">
            <a href="mailto:thenexzenindia@gmail.com" className="hover:text-accent transition-colors">thenexzenindia@gmail.com</a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+919558848891" className="hover:text-accent transition-colors">+91 95588 48891</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
