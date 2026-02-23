const footerCols = [
  {
    title: "Product",
    links: ["Features", "Metrics", "App", "Compatibility"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Careers", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Setup Guide", "Warranty", "Returns"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-xl tracking-widest text-foreground mb-3">
            ONEPUTT<span className="text-primary">PRO</span>
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Democratized pro-level putting technology. The same six metrics a tour caddie
            tracks, without the $5,000 lab system.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors cursor-crosshair"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          2025 OnePuttPro. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          oneputtpro.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
