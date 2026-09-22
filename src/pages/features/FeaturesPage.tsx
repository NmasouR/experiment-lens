import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

import { Nav } from "@/components/ui/layout/Nav";
import { FeaturesHero } from "./components/FeaturesHero";
import { FeatureTabs, type FeatureTab } from "./components/FeatureTabs";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { DeepFeatures } from "./components/DeepFeatures";
import { Footer } from "@/components/ui/layout/Footer";
import { CTA } from "./components/CTA";
import t from "@/content/features.json";

export function FeaturesPage() {
  const { hash } = useLocation();
  const [tab, setTab] = useState<FeatureTab>("agents");

  useEffect(() => {
    if (hash === "ml" || hash === "agents") setTab(hash);
    window.scrollTo({ top: 0 });
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <FeaturesHero />
      <FeatureTabs active={tab} onChange={setTab} />
      {tab === "agents" ? (
        <>
          <FeatureShowcase data={t.agents.showcase} />
          <DeepFeatures data={t.agents.deep} />
        </>
      ) : (
        <>
          <FeatureShowcase />
          <DeepFeatures />
        </>
      )}
      <CTA tab={tab} />
      <Footer />
    </div>
  );
}
