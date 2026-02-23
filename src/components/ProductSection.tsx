import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { title: "9-Axis IMU Sensor", desc: "Military-grade accelerometer, gyroscope, and magnetometer in a 12g package." },
  { title: "Bluetooth 5.3", desc: "Instant sync. No lag. Real-time data to your phone, every stroke." },
  { title: "40hr Battery", desc: "USB-C rechargeable. One charge lasts an entire month of practice." },
  { title: "Companion App", desc: "Session history, trend analysis, drill recommendations. iOS and Android." },
  { title: "Any Putter", desc: "Universal clip fits blade, mallet, or counterbalanced. No modifications." },
  { title: "No Subscription", desc: "Full feature access, forever. One price. No recurring fees. Ever." },
];

const ProductSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="product" className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            The Device
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Precision. <span className="text-gradient-silver">Miniaturized.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            {features.slice(0, 3).map((f, i) => (
              <div key={i} className="border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center: device representation */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square flex items-center justify-center border border-border bg-card">
              <div className="text-center p-8">
                <div className="w-20 h-32 border-2 border-accent/30 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary animate-pulse" />
                </div>
                <p className="font-display text-3xl text-foreground">12g</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Sensor Weight
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    38mm x 22mm x 12mm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.slice(3).map((f, i) => (
              <div key={i} className="border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
