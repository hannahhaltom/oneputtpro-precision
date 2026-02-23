import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Clip On", desc: "Snap the sensor onto your putter shaft. No tools. No modifications. 3 seconds." },
  { num: "02", title: "Open App", desc: "Bluetooth pairs automatically. Tap 'New Session' and you're ready." },
  { num: "03", title: "Putt", desc: "Hit putts. See your face angle, tempo, path, and more after every stroke." },
  { num: "04", title: "Watch It Move", desc: "Track your improvement over sessions. See what's changing and what still needs work." },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            How It Works
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Four Steps. <span className="text-gradient-silver">Zero Friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="border border-border bg-card p-8 text-center relative">
              <span className="font-display text-6xl text-primary/20">{s.num}</span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
