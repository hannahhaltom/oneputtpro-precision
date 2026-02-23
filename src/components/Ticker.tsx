const items = [
  "Face Angle",
  "Tempo Ratio",
  "Stroke Arc",
  "Putter Path",
  "Loft Angle",
  "Consistency Score",
  "Bluetooth Sync",
  "No Subscription",
];

const Ticker = () => {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/30 py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {item}
            <span className="ml-8 text-primary">///</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
