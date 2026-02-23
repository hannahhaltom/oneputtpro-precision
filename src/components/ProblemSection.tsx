import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          The Problem
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8 leading-[0.95]">
          Eleven Years.<br />Four Putters.<br />
          <span className="text-gradient-silver">Still Left.</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          You've tried the heavy one, the mallet, the blade with the sight line. You've
          tried the claw grip, the arm-lock, the belly putter before they banned it.
          You've watched every "fix your putting in 5 minutes" video on the internet.
          None of it worked — because you never knew what was actually wrong.
        </p>
        <div className="border border-border bg-card p-8 inline-block">
          <p className="font-display text-6xl md:text-8xl text-primary">3°</p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
            Avg. amateur face angle open at impact
          </p>
          <p className="font-body text-sm text-muted-foreground mt-1">
            That's 6 inches off-line from 10 feet. Every. Single. Putt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
