import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  { feature: "Face Angle Tracking", opp: true, capto: true, sam: true, lesson: false },
  { feature: "Real-Time Feedback", opp: true, capto: true, sam: false, lesson: false },
  { feature: "Fully Portable", opp: true, capto: true, sam: false, lesson: false },
  { feature: "No Subscription", opp: true, capto: false, sam: false, lesson: true },
  { feature: "Works With Any Putter", opp: true, capto: false, sam: false, lesson: true },
  { feature: "Price", opp: "$149", capto: "$3,200", sam: "$5,000+", lesson: "$150/hr" },
];

const Check = () => <span className="text-primary font-display text-xl">Yes</span>;
const Cross = () => <span className="text-muted-foreground font-mono text-sm">No</span>;

const ComparisonTable = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="compare" className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Compare
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Same Data. <span className="text-gradient-silver">Different Price.</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-mono text-xs uppercase tracking-widest text-muted-foreground py-4 pr-4" />
                <th className="font-display text-lg text-primary py-4 px-4">OnePuttPro</th>
                <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground py-4 px-4">Capto GEN3</th>
                <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground py-4 px-4">SAM PuttLab</th>
                <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground py-4 px-4">Coaching</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="font-body text-sm text-foreground py-4 pr-4">{row.feature}</td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    {typeof row.opp === "boolean" ? (row.opp ? <Check /> : <Cross />) : (
                      <span className="font-display text-2xl text-primary">{row.opp}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof row.capto === "boolean" ? (row.capto ? <Check /> : <Cross />) : (
                      <span className="font-mono text-sm text-muted-foreground">{row.capto}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof row.sam === "boolean" ? (row.sam ? <Check /> : <Cross />) : (
                      <span className="font-mono text-sm text-muted-foreground">{row.sam}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof row.lesson === "boolean" ? (row.lesson ? <Check /> : <Cross />) : (
                      <span className="font-mono text-sm text-muted-foreground">{row.lesson}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
