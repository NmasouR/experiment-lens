import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Rocket,
  Hammer,
  Terminal,
  FlaskConical,
  Sparkles,
  Workflow,
  Brain,
  FileText,
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

export function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" /> {t.header.back}
          </Link>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
            <FileText className="h-4 w-4 text-sky-600" />
            {t.header.brand}
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-10">
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

        <main className="col-span-12 space-y-20 md:col-span-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              {t.intro.eyebrow}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
              {t.intro.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              {t.intro.body}
            </p>
          </div>

          {t.docSections.map((s) => (
            <DocSection
              key={s.id}
              id={s.id}
              eyebrow={s.eyebrow}
              title={s.title}
              description={s.description}
              subBlocks={"subBlocks" in s ? s.subBlocks : undefined}
            />
          ))}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            {t.placeholderNote}
          </div>
        </main>
      </div>
    </div>
  );
}

function DocSection({
  id,
  eyebrow,
  title,
  description,
  subBlocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  subBlocks?: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      {subBlocks && subBlocks.length > 0 ? (
        <div className="mt-6 space-y-4">
          {subBlocks.map((title) => (
            <SubBlock key={title} title={title} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm italic text-slate-400">
          {t.emptySectionPlaceholder}
        </div>
      )}
    </section>
  );
}

function SubBlock({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs italic text-slate-400">
        {t.subBlockPlaceholder}
      </p>
    </div>
  );
}
