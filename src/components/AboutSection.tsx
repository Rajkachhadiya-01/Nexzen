import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import aboutTeamImg from "@/assets/about-team.jpg";

const capabilities = [
  "Graphic Design*",
  "Branding*",
  "Digital Marketing*",
  "Print & Packaging*",
  "Outdoor Ads*",
  "Indoor Displays*",
];

const AboutSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Our Capability</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6 leading-tight">
              Our Team of Dedicated Digital <span className="text-gradient">Professionals.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team blends creative innovation with technical expertise to craft visually impactful and 
              strategically powerful solutions in branding, marketing, and advertising. We focus on delivering 
              creative solutions that help businesses stand out and connect with their audience.
            </p>

            <a href="#services" className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm hover:gap-3 transition-all">
              Explore Our Services <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Team image with parallax */}
            <div ref={imgRef} className="rounded-2xl overflow-hidden">
              <motion.img
                style={{ y: imgY }}
                src={aboutTeamImg}
                alt="Our creative team"
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover scale-110"
              />
            </div>

            {/* Capabilities as flowing tags */}
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: i * 0.08 }}
                  className="px-5 py-2.5 rounded-full border border-border text-sm font-display font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
