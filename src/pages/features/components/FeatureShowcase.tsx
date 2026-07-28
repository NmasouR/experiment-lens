import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import screenOverview from "@/assets/screen-overview.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenExplainability from "@/assets/screen-explainability.png";
import screenExperiments from "@/assets/screen-experiments.png";
import screenWorkflow from "@/assets/screen-workflow.png";
import instanceView from "@/assets/instance-view.png";
import agentsOverview from "@/assets/agents-overview.png";
import agentsTraceGraph from "@/assets/agents-trace-graph.png";
import agentsTraceEval from "@/assets/agents-trace-eval.png";
import agentsVerdictDiff from "@/assets/agents-verdict-diff.png";
import agentsTracesQuality from "@/assets/agents-traces-quality.png";
import agentsTracesAgents from "@/assets/agents-traces-agents.png";
import agentsTraceReplay from "@/assets/agents-trace-replay.png";
import t from "@/content/features.json";
import { SectionHeader } from "./SectionHeader";
import { BrowserFrame } from "../../../components/ui/content/BrowserFrame";

const IMAGES: Record<string, string> = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow,
  instanceView,
  agentsOverview,
  agentsTraceGraph,
  agentsTraceEval,
  agentsVerdictDiff,
  agentsTracesQuality,
  agentsTracesAgents,
};

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
};

function StickyFeatureScroller({ features }: { features: Feature[] }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const viewportAnchor = window.innerHeight * 0.48;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemAnchor = rect.top + rect.height * 0.38;
        const distance = Math.abs(itemAnchor - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [features.length]);

  return (
    <>
      <div
        ref={wrapperRef}
        className="mt-16 hidden grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] gap-20 lg:grid"
      >
        <div className="space-y-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              className="flex min-h-[72vh] flex-col justify-center border-t border-slate-200 py-20 last:border-b"
            >
              <div
                className={`max-w-xl transition-all duration-500 ${
                  active === i ? "opacity-100" : "opacity-45"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {f.eyebrow}
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {f.body}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-slate-300" />
                  <span className="tabular-nums">
                    {String(features.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center">
          <div className="relative aspect-[16/10] w-full">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  active === i
                    ? "translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-3 scale-95 opacity-0"
                }`}
                aria-hidden={active !== i}
              >
                <BrowserFrame>
                  <img src={f.image} alt={f.title} className="block w-full" />
                </BrowserFrame>
              </div>
            ))}

            <div className="absolute -bottom-9 left-0 flex items-center gap-1.5">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => {
                    const target = itemRefs.current[i];
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`h-1.5 cursor-pointer rounded-full transition-all hover:bg-slate-700 ${
                    active === i ? "w-7 bg-slate-900" : "w-3 bg-slate-300"
                  }`}
                  aria-label={`Go to ${f.title}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-16 lg:hidden">
        {features.map((f) => (
          <div key={f.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              {f.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {f.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {f.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <BrowserFrame>
                <img
                  src={f.image}
                  alt={f.title}
                  className="block aspect-[16/9] w-full object-cover object-top"
                />
              </BrowserFrame>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

type ShowcaseData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: Array<{
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    image: string;
  }>;
};

export function FeatureShowcase({ data = t.showcase }: { data?: ShowcaseData }) {
  const features: Feature[] = data.features.map((f) => ({
    eyebrow: f.eyebrow,
    title: f.title,
    body: f.body,
    bullets: f.bullets,
    image: IMAGES[f.image],
  }));
  return (
    <section className="border-b border-slate-200 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          subtitle={data.subtitle}
        />
        <StickyFeatureScroller features={features} />
      </div>
    </section>
  );
}
