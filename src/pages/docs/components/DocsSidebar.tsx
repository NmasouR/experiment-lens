import { useState } from "react";
import {
  Brain,
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Hammer,
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
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

type DocSectionLink = {
  id: string;
  title: string;
  icon: string;
  group: string;
};

type SidebarSectionItem = {
  id: string;
};

type SidebarGroupItem = {
  title: string;
  children: SidebarItem[];
};

type SidebarItem = SidebarSectionItem | SidebarGroupItem;

type SidebarGroup = {
  title: string;
  children: SidebarItem[];
};

const sectionsById = new Map(
  (t.sections as DocSectionLink[]).map((section) => [section.id, section]),
);

function isSectionItem(item: SidebarItem): item is SidebarSectionItem {
  return "id" in item;
}

function SectionLink({
  id,
  nested = false,
  activeSectionId,
}: {
  id: string;
  nested?: boolean;
  activeSectionId: string | null;
}) {
  const section = sectionsById.get(id);

  if (!section) return null;

  const Icon = ICONS[section.icon] ?? Terminal;
  const isActive = activeSectionId === section.id;

  return (
    <a
      href={`#${section.id}`}
      aria-current={isActive ? "true" : undefined}
      className={
        isActive
          ? "flex items-center gap-2 rounded-md bg-sky-50 px-2 py-1.5 font-medium text-sky-700 ring-1 ring-sky-100"
          : "flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }
    >
      <Icon
        className={
          isActive
            ? "h-3.5 w-3.5 shrink-0 text-sky-600"
            : "h-3.5 w-3.5 shrink-0 text-slate-400"
        }
      />
      <span className={nested ? "text-xs" : undefined}>{section.title}</span>
    </a>
  );
}

function CollapsibleSidebarGroup({
  group,
  defaultOpen = true,
  nested = false,
  activeSectionId,
}: {
  group: SidebarGroup | SidebarGroupItem;
  defaultOpen?: boolean;
  nested?: boolean;
  activeSectionId: string | null;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ChevronIcon = open ? ChevronDown : ChevronRight;

  return (
    <div className={nested ? "space-y-1" : undefined}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={
          nested
            ? "mb-1 flex w-full items-center gap-1 rounded-md px-2 py-1 text-left text-xs font-semibold uppercase tracking-widest text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            : "mb-2 flex w-full items-center gap-1 rounded-md px-0 py-1 text-left text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-slate-700"
        }
        aria-expanded={open}
      >
        <ChevronIcon className="h-3.5 w-3.5 shrink-0" />
        {group.title}
      </button>

      {open && (
        <ul
          className={
            nested
              ? "space-y-1 border-l border-slate-200 pl-3"
              : "space-y-1"
          }
        >
          {group.children.map((item) =>
            isSectionItem(item) ? (
              <li key={item.id}>
                <SectionLink
                  id={item.id}
                  nested={nested}
                  activeSectionId={activeSectionId}
                />
              </li>
            ) : (
              <li key={item.title}>
                <CollapsibleSidebarGroup
                  group={item}
                  nested
                  activeSectionId={activeSectionId}
                />
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar({
  activeSectionId,
}: {
  activeSectionId: string | null;
}) {
  return (
    <aside className="col-span-12 md:col-span-3">
      <nav className="sticky top-20 space-y-6 text-sm">
        {(t.groups as SidebarGroup[]).map((group) => (
          <CollapsibleSidebarGroup
            key={group.title}
            group={group}
            activeSectionId={activeSectionId}
          />
        ))}
      </nav>
    </aside>
  );
}
