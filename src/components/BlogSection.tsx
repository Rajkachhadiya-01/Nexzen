import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import marketingImg from "@/assets/marketing-digital.jpg";

const blogPosts = [
  {
    title: "The Future of Outdoor Advertising in the Digital Age",
    category: "Outdoor Marketing",
    excerpt: "How digital billboards and smart displays are revolutionizing traditional outdoor campaigns with real-time targeting and dynamic content.",
    readTime: "5 min read",
    date: "Feb 5, 2026",
    featured: true,
  },
  {
    title: "5 Indoor Branding Strategies That Convert Foot Traffic",
    category: "Indoor Marketing",
    excerpt: "Transform mall visitors into loyal customers with these proven indoor advertising techniques and display strategies.",
    readTime: "4 min read",
    date: "Jan 28, 2026",
    featured: false,
  },
  {
    title: "Why Performance Marketing Is Essential for ROI",
    category: "Digital Marketing",
    excerpt: "Data-driven campaigns deliver measurable results. Learn how to optimize your ad spend across Google and Meta platforms.",
    readTime: "6 min read",
    date: "Jan 20, 2026",
    featured: false,
  },
  {
    title: "Building a Consistent Brand Across All Channels",
    category: "Brand Strategy",
    excerpt: "From social media to street-level signage, consistency is key. Here's how to maintain your brand identity everywhere.",
    readTime: "4 min read",
    date: "Jan 15, 2026",
    featured: false,
  },
  {
    title: "Creative Design Trends Shaping 2026 Advertising",
    category: "Creative Design",
    excerpt: "Bold typography, motion graphics, and AI-generated visuals are defining the next wave of advertising creativity.",
    readTime: "5 min read",
    date: "Jan 10, 2026",
    featured: false,
  },
];

const BlogSection = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <section id="blog" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Blog & Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
              Marketing <span className="text-gradient">Intelligence.</span>
            </h2>
          </div>
          <a href="#" className="text-accent font-display font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            View All Articles <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group bg-foreground rounded-2xl flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent/10 transition-shadow duration-500"
          >
            <img src={marketingImg} alt="Digital marketing" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-display font-semibold">
                {featured.category}
              </span>
            </div>
            <div className="p-6 md:p-10 mt-auto relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-primary-foreground/40 text-xs font-medium">
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </motion.article>

          {/* Grid of other posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group glass-card rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xs font-display font-semibold text-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h4 className="text-base font-display font-bold mt-2 mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-muted-foreground/60 text-xs">
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
