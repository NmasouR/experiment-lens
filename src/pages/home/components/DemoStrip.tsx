import { ArrowRight, Play } from "lucide-react";

import screenOverview from "@/assets/screen-overview.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenExplainability from "@/assets/screen-explainability.png";
import common from "@/content/common.json";
import t from "@/content/index.json";
import { SectionHeader } from "./SectionHeader";

const IMAGES: Record<string, string> = {
  screenOverview,
  screenComparative,
  screenExplainability,
};

export function DemoStrip() {
  return (
    <section id="demo" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.demoStrip.eyebrow}
          title={t.demoStrip.title}
          subtitle={t.demoStrip.subtitle}
          dark
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.demoStrip.cards.map((c) => (
            <a
              key={c.title}
              href={common.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/30"
            >
              <div className="overflow-hidden border-b border-white/10">
                <img
                  src={IMAGES[c.image]}
                  alt={c.title}
                  className="block w-full transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="text-xs text-white/60">{c.sub}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={common.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            <Play className="h-4 w-4" /> {t.demoStrip.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
