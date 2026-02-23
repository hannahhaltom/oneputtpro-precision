import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import MetricsSection from "@/components/MetricsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ProblemSection />
        <ProductSection />
        <MetricsSection />
        <HowItWorks />
        <Testimonials />
        <ComparisonTable />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
