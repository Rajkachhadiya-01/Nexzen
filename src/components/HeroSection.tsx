import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = ["Advertising", "Branding", "Marketing", "Printing", "Web Solutions"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--gradient-start)), transparent 70%)" }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Rotating badge */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[10%] top-1/3 hidden lg:block"
      >
        <svg viewBox="0 0 200 200" className="w-40 h-40">
          <defs>
            <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
          </defs>
          <text fill="hsl(var(--background))" fontSize="13" fontFamily="Poppins" fontWeight="500" letterSpacing="4">
            <textPath href="#circlePath">MARKETING · BRANDING · PRINTING · </textPath>
          </text>
          <g transform="translate(100,100)">
            <line x1="-12" y1="0" x2="12" y2="0" stroke="hsl(var(--background))" strokeWidth="2" />
            <line x1="0" y1="-12" x2="12" y2="0" stroke="hsl(var(--background))" strokeWidth="2" />
            <line x1="0" y1="12" x2="12" y2="0" stroke="hsl(var(--background))" strokeWidth="2" />
          </g>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-display font-bold leading-[0.95] mb-6 md:mb-8 text-primary-foreground"
          >
            HIGH END
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-gradient"
                style={{ WebkitTextStroke: "0" }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <br />
            AGENCY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary-foreground/50 max-w-xl text-sm md:text-base leading-relaxed mb-10"
          >
            We deliver strategic, data-driven marketing solutions that help businesses build a powerful online presence, attract the right audience, and achieve lasting results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-accent-foreground font-display font-semibold hover:opacity-90 transition-opacity group text-sm sm:text-base"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-primary-foreground/20 text-primary-foreground font-display font-semibold hover:bg-primary-foreground/5 transition-colors text-sm sm:text-base"
            >
              About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
