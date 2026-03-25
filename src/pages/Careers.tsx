import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  { title: "SEO Specialist", type: "Full-time", location: "Gujarat, India", desc: "Optimize client websites for search engines, conduct keyword research, and develop link-building strategies." },
  { title: "Social Media Manager", type: "Full-time", location: "Remote", desc: "Create and manage social media campaigns across multiple platforms for our diverse client portfolio." },
  { title: "Content Writer", type: "Part-time", location: "Remote", desc: "Produce engaging blog posts, articles, and website copy that drives traffic and converts readers." },
  { title: "Full-Stack Developer", type: "Full-time", location: "Gujarat, India", desc: "Build and maintain responsive websites and web applications using modern technologies." },
  { title: "Google Ads Specialist", type: "Full-time", location: "Gujarat, India", desc: "Plan, execute, and optimize PPC campaigns across Google Ads to maximize client ROI." },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Join Our <span className="text-gradient">Team.</span></h1>
        <p className="text-muted-foreground mb-10 max-w-xl text-sm">We're always looking for talented people who share our passion for digital marketing excellence.</p>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{job.desc}</p>
                </div>
                <button className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent text-accent font-display font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                  Apply <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Careers;
