import { useEffect, useState } from "react";

const navLinks = ["Product", "Metrics", "How It Works", "Compare"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-2xl tracking-widest text-foreground cursor-crosshair">
          ONEPUTT<span className="text-primary">PRO</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-crosshair"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-primary/90 transition-colors cursor-crosshair"
          >
            Pre-Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
