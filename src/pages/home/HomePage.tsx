import { Nav } from "@/components/ui/layout/Nav";
import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { FeaturesPreview } from "./components/FeaturesPreview";
import { Integrations } from "./components/Integrations";
import { HowItWorks } from "./components/HowItWorks";
import { DemoStrip } from "./components/DemoStrip";
import { Repos } from "./components/Repos";
import { Footer } from "@/components/ui/layout/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <ValueProps />
      <FeaturesPreview />
      <Integrations />
      <HowItWorks />
      <DemoStrip />
      <Repos />
      <Footer />
    </div>
  );
}
