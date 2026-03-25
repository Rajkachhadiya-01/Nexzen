const marqueeItems = ["Branding", "Marketing", "Printing", "Digital", "Outdoor", "Indoor", "Strategy", "Creative", "Performance"];

const MarqueeSection = () => {
  return (
    <section className="py-6 md:py-8 bg-foreground border-y border-primary-foreground/10 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block">
            {marqueeItems.map((item) => (
              <span key={`${i}-${item}`} className="inline-block text-primary-foreground/20 font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase mx-4 md:mx-8">
                {item}
                <span className="text-accent mx-4 md:mx-8">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
