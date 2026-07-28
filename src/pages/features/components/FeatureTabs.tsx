import { Bot, FlaskConical } from "lucide-react";

import t from "@/content/features.json";

export type FeatureTab = "agents" | "ml";

export function FeatureTabs({
  active,
  onChange,
}: {
  active: FeatureTab;
  onChange: (tab: FeatureTab) => void;
}) {
  const tabs: { id: FeatureTab; label: string; icon: typeof Bot }[] = [
    { id: "agents", label: t.tabs.agents, icon: Bot },
    { id: "ml", label: t.tabs.ml, icon: FlaskConical },
  ];

  return (
    <div className="sticky top-16 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl justify-center px-6 py-4">
        <div
          role="tablist"
          aria-label={t.tabs.eyebrow}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm"
        >
          {tabs.map(({ id, label, icon: Icon }) => {
            const selected = active === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  onChange(id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{cursor: selected ? "default" : "pointer"}}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
