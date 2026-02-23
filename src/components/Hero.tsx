import heroImage from "@/assets/hero-golf.jpg";

const statPills = [
  { value: "6", label: "Metrics" },
  { value: "1st", label: "Session" },
  { value: "$0", label: "Subscription" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with ken burns */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Putter on putting green in dramatic lighting"
          className="w-full h-full object-cover animate-kenburns opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Smart Bluetooth Putting Sensor
          </p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-foreground mb-6">
            Know What's<br />
            <span className="text-gradient-silver">Actually</span><br />
            Wrong
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
            You've changed putters, changed grips, watched hours of YouTube.
            The problem isn't feel — it's data. OnePuttPro gives you the same
            six metrics a tour caddie tracks, for the price of a sleeve of Pro V1s.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {statPills.map((pill) => (
              <div
                key={pill.label}
                className="border border-border bg-secondary/50 px-5 py-3 flex items-baseline gap-2"
              >
                <span className="font-display text-2xl text-foreground">{pill.value}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{pill.label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest px-10 py-4 hover:bg-primary/90 transition-colors cursor-crosshair"
          >
            Pre-Order — $149
          </button>
        </div>

        {/* Right: floating data badge */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="animate-float bg-card border border-border p-6 w-72 shadow-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Face Angle — Session 1
            </p>
            <div className="flex items-end gap-3 mb-2">
              <span className="font-display text-5xl text-primary">3.2°</span>
              <svg className="w-6 h-6 text-muted-foreground mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="font-display text-5xl text-foreground">0.4°</span>
            </div>
            <div className="w-full bg-secondary h-1 mt-4">
              <div className="bg-primary h-1 w-[87%] transition-all duration-1000" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              87% improvement after 1 session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
