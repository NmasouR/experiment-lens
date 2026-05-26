import { Nav } from "@/components/ui/layout/Nav";
import { FeaturesHero } from "./components/FeaturesHero";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { DeepFeatures } from "./components/DeepFeatures";
import { Footer } from "@/components/ui/layout/Footer";
import { CTA } from "./components/CTA";

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <FeaturesHero />
      <FeatureShowcase />
      <DeepFeatures />
      <CTA />
      <Footer />
    </div>
  );
}
