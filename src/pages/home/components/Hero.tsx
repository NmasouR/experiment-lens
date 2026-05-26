import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Play } from "lucide-react";

import screenOverview from "@/assets/screen-overview.png";
import common from "@/content/common.json";
import t from "@/content/index.json";
import { BrowserFrame } from "../../../components/ui/content/BrowserFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {t.hero.titlePre}{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titlePost}
          </h1>
          <p
            className="mt-5 text-lg leading-relaxed text-slate-600"
            dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
          />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={common.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <Play className="h-4 w-4" /> {t.hero.primaryCta}
            </a>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              {t.hero.secondaryCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute -inset-x-10 -top-6 -bottom-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-200/40 via-indigo-200/30 to-fuchsia-200/30 blur-2xl" />
          <BrowserFrame>
            <img
              src={screenOverview}
              alt={t.hero.imageAlt}
              className="block w-full"
            />
          </BrowserFrame>
          <p className="mt-3 text-center text-xs italic text-slate-500">
            {t.hero.imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
