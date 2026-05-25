import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Lightbulb,
  Plug,
  ArrowRight,
  Github,
  Play,
  Check,
  Workflow,
  LineChart,
  Eye,
  Sparkles,
  Server,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import screenOverview from "@/assets/screen-overview.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenExplainability from "@/assets/screen-explainability.png";
import screenExperiments from "@/assets/screen-experiments.png";
import screenWorkflow from "@/assets/screen-workflow.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/content/carousel";
import { Logo } from "@/components/Logo";

import common from "@/content/common.json";
import t from "@/content/index.json";

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server,
};

const IMAGES: Record<string, string> = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow,
};

const HREF_KEYS: Record<string, string> = {
  liveDemo: common.liveDemoUrl,
  repoFrontend: common.repos.frontend,
  repoApi: common.repos.api,
  repoExplain: common.repos.explain,
};

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <ValueProps />
      <FeaturesPreview />
      <Integrations />
      <HowItWorks />
      <DemoStrip />
      <Repos />
      <Footer />
    </div>
  );
}

function FeaturesPreview() {
  const slides = t.featuresPreview.slides;
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="features" className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
            {t.featuresPreview.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.featuresPreview.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {t.featuresPreview.subtitle}
          </p>
        </div>

        <div
          className="mt-12 rounded-2xl p-4 ring-1 ring-slate-200 sm:p-6"
          style={{
            backgroundColor: "#eef2ff",
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 90% 100%, rgba(99,102,241,0.18), transparent 55%), repeating-linear-gradient(135deg, rgba(15,23,42,0.05) 0 1px, transparent 1px 10px)",
          }}
        >
          <div className="flex items-center justify-between gap-4 px-1 pb-4 sm:px-2">
            <h3 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
              {slides[selected]?.title}
            </h3>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to ${s.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected
                      ? "w-6 bg-slate-900"
                      : "w-4 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[autoplay.current]}
          >
            <CarouselContent>
              {slides.map((s) => (
                <CarouselItem key={s.title}>
                  <BrowserFrame>
                    <img src={IMAGES[s.image]} alt={s.title} className="block w-full" />
                  </BrowserFrame>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {t.featuresPreview.exploreCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
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
          <Link to="/features" className="hover:text-slate-900">{common.nav.features}</Link>
          <Link to="/docs" className="hover:text-slate-900">
            {common.nav.docs}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={common.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
          >
            <Play className="h-4 w-4" /> {common.nav.liveDemo}
          </a>
          <a
            href={common.repos.frontend}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            <Github className="h-4 w-4" /> {common.nav.github}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            {t.hero.badge}
          </span> */}
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

function ValueProps() {
  return (
    <section className="border-b border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.valueProps.eyebrow}
          title={t.valueProps.title}
          subtitle={t.valueProps.subtitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.valueProps.items.map(({ icon, title, body }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
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

function HowItWorks() {
  return (
    <section id="how" className="border-b border-slate-200 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map(({ n, icon, title, body }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={n}
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="absolute right-4 top-4 text-xs font-mono text-slate-300">
                  {n}
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  const Block = ({
    icon: Icon,
    title,
    sub,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  }) => (
    <div className="flex min-w-[180px] flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
      <Icon className="h-5 w-5 text-slate-700" />
      <p className="mt-2 text-sm font-semibold text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
  const blocks = t.howItWorks.architecture;
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
      {blocks.map((b, i) => (
        <span key={b.title} className="flex items-center gap-3">
          <Block icon={ICONS[b.icon]} title={b.title} sub={b.sub} />
          {i < blocks.length - 1 && <ArrowRight className="h-5 w-5" />}
        </span>
      ))}
    </div>
  );
}

function DemoStrip() {
  return (
    <section id="demo" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t.demoStrip.eyebrow}
          title={t.demoStrip.title}
          subtitle={t.demoStrip.subtitle}
          dark
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.demoStrip.cards.map((c) => (
            <a
              key={c.title}
              href={common.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/30"
            >
              <div className="overflow-hidden border-b border-white/10">
                <img
                  src={IMAGES[c.image]}
                  alt={c.title}
                  className="block w-full transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="text-xs text-white/60">{c.sub}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={common.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            <Play className="h-4 w-4" /> {t.demoStrip.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Repos() {
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

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Logo />
            <span className="font-semibold">{common.brand}</span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
            {t.footer.tagline}
          </p>
        </div>
        {t.footer.columns.map((col) => (
          <FooterCol
            key={col.title}
            title={col.title}
            links={col.links.map((l) => {
              const link = l as {
                label: string;
                href?: string;
                hrefKey?: string;
                external?: boolean;
                internal?: boolean;
              };
              return {
                label: link.label,
                href: (link.hrefKey ? HREF_KEYS[link.hrefKey] : link.href) ?? "#",
                external: link.external,
                internal: link.internal,
              };
            })}
          />
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
    internal?: boolean;
  }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {l.internal ? (
              <Link to={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="hover:text-white"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-semibold uppercase tracking-widest ${
          dark ? "text-sky-300" : "text-sky-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            dark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
