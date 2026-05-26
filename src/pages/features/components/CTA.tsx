import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, Play } from "lucide-react";

import common from "@/content/common.json";
import t from "@/content/features.json";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-base text-slate-600">
          {t.cta.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={common.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Play className="h-4 w-4" /> {t.cta.primary}
          </a>
          <a
            href={common.repos.frontend}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            <Github className="h-4 w-4" /> {t.cta.secondary}
          </a>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            {t.cta.tertiary} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
