import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="py-32 px-6 bg-card">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-5xl md:text-8xl text-foreground leading-[0.95] mb-8">
          The Last Putting Aid<br />
          <span className="text-gradient-silver">You'll Ever Need</span>
        </h2>
        <button className="bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest px-12 py-5 hover:bg-primary/90 transition-colors mb-8 cursor-crosshair">
          Pre-Order — $149
        </button>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {["Free shipping", "30-day return", "No subscription, ever"].map((item) => (
            <span key={item} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
