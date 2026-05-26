import {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server,
  Check,
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

function IntegrationCard({
  icon: Icon,
  tag,
  name,
  body,
  points,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  name: string;
  body: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            {tag}
          </p>
          <p className="text-xl font-semibold text-slate-900">{name}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{body}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Integrations() {
  return (
    <section
      id="integrations"
      className="border-b border-slate-200 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.integrations.eyebrow}
          title={t.integrations.title}
          subtitle={t.integrations.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.integrations.cards.map((c) => (
            <IntegrationCard
              key={c.name}
              icon={ICONS[c.icon]}
              tag={c.tag}
              name={c.name}
              body={c.body}
              points={c.points}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          {t.integrations.footnote}
        </p>
      </div>
    </section>
  );
}
