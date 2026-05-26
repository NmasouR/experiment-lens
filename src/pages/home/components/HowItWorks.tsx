import {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import t from "@/content/index.json";
import { SectionHeader } from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server,
};

function ArchitectureDiagram() {
  const Block = ({
    icon: Icon,
    title,
    sub,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  }) => (
    <div className="flex min-w-[180px] flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
      <Icon className="h-5 w-5 text-slate-700" />
      <p className="mt-2 text-sm font-semibold text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
  const blocks = t.howItWorks.architecture;
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
      {blocks.map((b, i) => (
        <span key={b.title} className="flex items-center gap-3">
          <Block icon={ICONS[b.icon]} title={b.title} sub={b.sub} />
          {i < blocks.length - 1 && <ArrowRight className="h-5 w-5" />}
        </span>
      ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-slate-200 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map(({ n, icon, title, body }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={n}
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="absolute right-4 top-4 text-xs font-mono text-slate-300">
                  {n}
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
