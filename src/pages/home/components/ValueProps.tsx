import {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server,
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

export function ValueProps() {
  return (
    <section className="border-b border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.valueProps.eyebrow}
          title={t.valueProps.title}
          subtitle={t.valueProps.subtitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.valueProps.items.map(({ icon, title, body }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600">
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
