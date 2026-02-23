import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "I was 1.4° open on every putt for 6 years. Six years. One session with OnePuttPro and I could see it. Two weeks later I'm under 0.5°.",
    name: "Mark Hensley",
    detail: "12 handicap, Charlotte NC",
  },
  {
    quote: "Spent $2,800 on SAM PuttLab sessions over 3 years. This $149 sensor gives me the same data on my own putting green every night.",
    name: "James Okafor",
    detail: "8 handicap, Scottsdale AZ",
  },
  {
    quote: "My tempo ratio was 4.2:1. No wonder I couldn't control speed. I never would have known that without the sensor. Dropped 4 putts per round in a month.",
    name: "David Chen",
    detail: "15 handicap, Austin TX",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-6 bg-card">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            From the Green
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Real <span className="text-gradient-silver">Data.</span> Real Results.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border bg-background p-8">
              <p className="font-body text-base text-foreground/90 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-lg text-foreground">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
