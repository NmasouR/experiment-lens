import {
  Waypoints,
  Scale,
  GitCompare,
  Gauge,
  type LucideIcon,
} from "lucide-react";

import t from "@/content/index.json";
import { SectionHeader } from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  Waypoints,
  Scale,
  GitCompare,
  Gauge,
};

export function AgenticValueProps() {
  return (
    <section className="border-b border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.agenticValueProps.eyebrow}
          title={t.agenticValueProps.title}
          subtitle={t.agenticValueProps.subtitle}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.agenticValueProps.items.map(({ icon, title, body }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
              >
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
      </div>
    </section>
  );
}
