import { Bot, FlaskConical } from "lucide-react";

import t from "@/content/docs.json";

export type DocTab = "ml" | "agents";

export function DocTabs({
  active,
  onChange,
}: {
  active: DocTab;
  onChange: (tab: DocTab) => void;
}) {
  const tabs: { id: DocTab; label: string; icon: typeof Bot }[] = [
    { id: "agents", label: t.docTabs.agents, icon: Bot },
    { id: "ml", label: t.docTabs.ml, icon: FlaskConical },
  ];

  return (
    <div
      role="tablist"
      aria-label={t.docTabs.eyebrow}
      className="mb-4 inline-flex w-full items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm"
    >
      {tabs.map(({ id, label, icon: Icon }) => {
        const selected = active === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(id)}
            style={{cursor: selected ? "default" : "pointer"}}
            className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              selected
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
