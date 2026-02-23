import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  {
    name: "Face Angle",
    icon: "◎",
    desc: "The single biggest factor in putt accuracy. Even 1° open means you miss a 10-footer by 3 inches. OnePuttPro measures your face angle at impact to 0.1° precision.",
  },
  {
    name: "Tempo Ratio",
    icon: "⟡",
    desc: "Tour players maintain a 2:1 backswing-to-forward ratio. Most amateurs are at 3:1 or worse. The sensor tracks your tempo and shows you the trend over time.",
  },
  {
    name: "Stroke Arc",
    icon: "⌒",
    desc: "Straight back, straight through? Slight arc? It doesn't matter which — it matters that you're consistent. We measure your arc pattern across every putt.",
  },
  {
    name: "Putter Path",
    icon: "→",
    desc: "Path at impact determines your start line. Even with a square face, an inside-out path sends the ball right. Now you can see it and fix it.",
  },
  {
    name: "Loft Angle",
    icon: "∠",
    desc: "Too much dynamic loft makes the ball bounce before rolling. Too little and it skids. Tour average is 3-4° at impact. What's yours?",
  },
  {
    name: "Consistency Score",
    icon: "▦",
    desc: "A proprietary composite metric that measures how repeatable your stroke is across all five data points. The number that actually predicts putting improvement.",
  },
];

const MetricsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="metrics" className="py-32 px-6 bg-card">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Six Metrics
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            What the <span className="text-gradient-silver">Pros</span> See
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="border border-border bg-background p-8 hover:border-primary/30 transition-colors group"
            >
              <span className="font-mono text-3xl text-primary/60 group-hover:text-primary transition-colors">
                {m.icon}
              </span>
              <h3 className="font-display text-2xl text-foreground mt-4 mb-3">{m.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
