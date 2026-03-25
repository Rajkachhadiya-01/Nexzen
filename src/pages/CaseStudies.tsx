import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Target } from "lucide-react";

const cases = [
  { title: "E-Commerce Revenue Boost", industry: "Retail", metric: "+340% Revenue", icon: TrendingUp, desc: "Implemented a comprehensive SEO and PPC strategy that increased organic traffic by 200% and tripled online revenue within 8 months." },
  { title: "Brand Awareness Campaign", industry: "Healthcare", metric: "2M+ Reach", icon: Users, desc: "Designed and executed a multi-platform social media campaign that reached over 2 million users and increased brand recognition by 150%." },
  { title: "Lead Generation Funnel", industry: "Real Estate", metric: "500+ Leads/month", icon: Target, desc: "Built a high-converting landing page with targeted Google Ads campaign generating over 500 qualified leads per month." },
  { title: "Content Marketing Strategy", industry: "Education", metric: "+180% Traffic", icon: TrendingUp, desc: "Developed a content marketing strategy with regular blog posts, guest articles, and email campaigns that nearly tripled website traffic." },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Case <span className="text-gradient">Studies.</span></h1>
        <p className="text-muted-foreground mb-10 max-w-xl text-sm">Real results we've achieved for our clients through strategic digital marketing.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <c.icon className="text-accent" size={22} />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.industry}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{c.desc}</p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-display font-semibold text-sm">
                {c.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CaseStudies;
