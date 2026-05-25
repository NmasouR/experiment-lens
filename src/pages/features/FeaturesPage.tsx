import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GitCompare,
  Lightbulb,
  Activity,
  Database,
  ArrowRight,
  Github,
  Play,
  Check,
  Layers,
  Filter,
  Sliders,
  Boxes,
  LineChart,
  type LucideIcon,
} from "lucide-react";

import screenOverview from "@/assets/screen-overview.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenExplainability from "@/assets/screen-explainability.png";
import screenExperiments from "@/assets/screen-experiments.png";
import screenWorkflow from "@/assets/screen-workflow.png";
import { Logo } from "@/components/Logo";

import common from "@/content/common.json";
import t from "@/content/features.json";

const ICONS: Record<string, LucideIcon> = {
  GitCompare,
  Lightbulb,
  Activity,
  Database,
  Layers,
  Filter,
  Sliders,
  Boxes,
  LineChart,
};

const IMAGES: Record<string, string> = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow,
};

function KubeflowBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
      {t.deep.kubeflowBadge}
    </span>
  );
}

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <FeaturesHero />
      <FeatureShowcase />
      <DeepFeatures />
      <CTA />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-base font-semibold tracking-tight">
            {common.brand}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <Link to="/features" className="font-medium text-slate-900">
            {common.nav.features}
          </Link>
          <Link to="/docs" className="hover:text-slate-900">
            {common.nav.docs}
          </Link>
        </nav>
        <a
          href={common.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          <Play className="h-4 w-4" /> {common.nav.liveDemo}
        </a>
      </div>
    </header>
  );
}

function FeaturesHero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          {t.hero.eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.hero.title}
        </h1>
        <p
          className="mt-4 text-lg leading-relaxed text-slate-600"
          dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
        />
      </div>
    </section>
  );
}

function FeatureShowcase() {
  const features: Feature[] = t.showcase.features.map((f) => ({
    eyebrow: f.eyebrow,
    title: f.title,
    body: f.body,
    bullets: f.bullets,
    image: IMAGES[f.image],
  }));
  return (
    <section className="border-b border-slate-200 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.showcase.eyebrow}
          title={t.showcase.title}
          subtitle={t.showcase.subtitle}
        />
        <StickyFeatureScroller features={features} />
      </div>
    </section>
  );
}

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
};

function StickyFeatureScroller({ features }: { features: Feature[] }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const viewportAnchor = window.innerHeight * 0.48;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemAnchor = rect.top + rect.height * 0.38;
        const distance = Math.abs(itemAnchor - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [features.length]);

  return (
    <>
      <div
        ref={wrapperRef}
        className="mt-16 hidden grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] gap-20 lg:grid"
      >
        <div className="space-y-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              className="flex min-h-[72vh] flex-col justify-center border-t border-slate-200 py-20 last:border-b"
            >
              <div
                className={`max-w-xl transition-all duration-500 ${
                  active === i ? "opacity-100" : "opacity-45"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {f.eyebrow}
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {f.body}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-slate-300" />
                  <span className="tabular-nums">
                    {String(features.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center">
          <div className="relative aspect-[16/10] w-full">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  active === i
                    ? "translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-3 scale-95 opacity-0"
                }`}
                aria-hidden={active !== i}
              >
                <BrowserFrame>
                  <img src={f.image} alt={f.title} className="block w-full" />
                </BrowserFrame>
              </div>
            ))}

            <div className="absolute -bottom-9 left-0 flex items-center gap-1.5">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => {
                    const target = itemRefs.current[i];
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`h-1.5 cursor-pointer rounded-full transition-all hover:bg-slate-700 ${
                    active === i ? "w-7 bg-slate-900" : "w-3 bg-slate-300"
                  }`}
                  aria-label={`Go to ${f.title}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-16 lg:hidden">
        {features.map((f) => (
          <div key={f.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              {f.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {f.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {f.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <BrowserFrame>
                <img src={f.image} alt={f.title} className="block w-full" />
              </BrowserFrame>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate text-[11px] text-slate-400">
          {common.browserFrameUrl}
        </span>
      </div>
      {children}
    </div>
  );
}

function DeepFeatures() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.deep.eyebrow}
          title={t.deep.title}
          subtitle={t.deep.subtitle}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.deep.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  {item.kubeflowOnly && <KubeflowBadge />}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-base text-white/70">
          {t.cta.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={common.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            <Play className="h-4 w-4" /> {t.cta.primary}
          </a>
          <a
            href={common.repos.frontend}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> {t.cta.secondary}
          </a>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.cta.tertiary} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
