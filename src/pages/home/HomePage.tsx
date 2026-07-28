import { useState } from "react";

import { Nav } from "@/components/ui/layout/Nav";
import { AgenticHero } from "./components/AgenticHero";
import { HomeFeatureTabs, type HomeTab } from "./components/HomeFeatureTabs";
import { AgenticValueProps } from "./components/AgenticValueProps";
import { AgenticShowcase } from "./components/AgenticShowcase";
import { ValueProps } from "./components/ValueProps";
import { FeaturesPreview } from "./components/FeaturesPreview";
import { Integrations } from "./components/Integrations";
import { HowItWorks } from "./components/HowItWorks";
import { DemoStrip } from "./components/DemoStrip";
import { Repos } from "./components/Repos";
import { Footer } from "@/components/ui/layout/Footer";

export function HomePage() {
  const [tab, setTab] = useState<HomeTab>("agents");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <AgenticHero />
      <HomeFeatureTabs active={tab} onChange={setTab} />
      {tab === "agents" ? (
        <>
          <AgenticValueProps />
          <AgenticShowcase />
        </>
      ) : (
        <>
          <ValueProps />
          <FeaturesPreview />
        </>
      )}
      <Integrations />
      <HowItWorks />
      <DemoStrip />
      <Repos />
      <Footer />
    </div>
  );
}
