import {
  Rocket,
  Hammer,
  Terminal,
  FlaskConical,
  Sparkles,
  Workflow,
  Brain,
  Zap,
  type LucideIcon,
} from "lucide-react";

import t from "@/content/docs.json";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Hammer,
  Terminal,
  FlaskConical,
  Sparkles,
  Workflow,
  Brain,
  Zap,
};

export function DocsSidebar() {
  return (
    <aside className="col-span-12 md:col-span-3">
      <nav className="sticky top-20 space-y-6 text-sm">
        {t.groups.map((group) => (
          <div key={group}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {group}
            </p>
            <ul className="space-y-1">
              {t.sections
                .filter((s) => s.group === group)
                .map((s) => {
                  const Icon = ICONS[s.icon];
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <Icon className="h-3.5 w-3.5 text-slate-400" />
                        {s.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
