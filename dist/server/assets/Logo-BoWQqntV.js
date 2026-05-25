import { jsx } from "react/jsx-runtime";
const screenOverview = "/experiment-lens/assets/screen-overview-DFe8-Az2.png";
const screenComparative = "/experiment-lens/assets/screen-comparative-DPYWMEAQ.png";
const screenExplainability = "/experiment-lens/assets/screen-explainability-CAFEZU4T.png";
const screenExperiments = "/experiment-lens/assets/screen-experiments-CrOVkTrN.png";
const screenWorkflow = "/experiment-lens/assets/screen-workflow-BqP1cIuD.png";
const logoUrl = "/experiment-lens/assets/logo-ed8FS0bt.png";
const brand = "ExperimentLens";
const liveDemoUrl = "https://extreme-viz.pulsar.imsi.athenarc.gr/706300898836261706/monitoring";
const repos = { "frontend": "https://github.com/extremexp-HORIZON/vis-frontend", "api": "https://github.com/extremexp-HORIZON/vis-api", "explain": "https://github.com/extremexp-HORIZON/extremexp-explainability-module" };
const browserFrameUrl = "extreme-viz.pulsar.imsi.athenarc.gr / experimentlens";
const nav = { "features": "Features", "docs": "Docs", "liveDemo": "Live demo", "github": "GitHub" };
const common = {
  brand,
  liveDemoUrl,
  repos,
  browserFrameUrl,
  nav
};
function Logo({ className = "h-8 w-8" }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoUrl,
      alt: `${common.brand} logo`,
      className: `${className} object-contain`
    }
  );
}
export {
  Logo as L,
  screenExperiments as a,
  screenExplainability as b,
  common as c,
  screenOverview as d,
  screenWorkflow as e,
  screenComparative as s
};
