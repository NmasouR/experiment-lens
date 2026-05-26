import { ArrowRight, Github } from "lucide-react";

import common from "@/content/common.json";
import t from "@/content/index.json";
import { SectionHeader } from "./SectionHeader";

export function Repos() {
  return (
    <section id="repos" className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.repos.eyebrow}
          title={t.repos.title}
          subtitle={t.repos.subtitle}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.repos.items.map((r) => (
            <a
              key={r.name}
              href={common.repos[r.repoKey as keyof typeof common.repos]}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-900 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 text-slate-900">
                <Github className="h-5 w-5" />
                <span className="font-mono text-sm">{r.name}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {r.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900">
                {t.repos.viewCta}{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
