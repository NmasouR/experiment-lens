import {
  GitCompare,
  Lightbulb,
  Activity,
  Database,
  Layers,
  Filter,
  Sliders,
  Boxes,
  LineChart,
  GitBranch,
  FileCheck,
  Waypoints,
  Scale,
  ListChecks,
  Gauge,
  Coins,
  MessageSquare,
  Repeat2,
  PenLine,
  type LucideIcon,
} from "lucide-react";

import t from "@/content/features.json";
import { SectionHeader } from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  GitCompare,
  Lightbulb,
  Activity,
  Database,
  Layers,
  Filter,
  Sliders,
  Boxes,
  LineChart,
  GitBranch,
  FileCheck,
  Waypoints,
  Scale,
  ListChecks,
  Gauge,
  Coins,
  MessageSquare,
  Repeat2,
  PenLine,
};

function ExecutionEngineBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
      {t.deep.ExecutionEngineBadge}
    </span>
  );
}

type DeepData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Array<{
    icon: string;
    title: string;
    body: string;
    kubeflowOnly?: boolean;
  }>;
};

export function DeepFeatures({ data = t.deep }: { data?: DeepData }) {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          subtitle={data.subtitle}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  {item.kubeflowOnly && <ExecutionEngineBadge />}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
