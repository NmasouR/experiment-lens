import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Play, LineChart, Boxes, Sliders, Filter, Layers, Database, Activity, Lightbulb, GitCompare, Github, ArrowRight, Check } from "lucide-react";
import { L as Logo, c as common, e as screenWorkflow, a as screenExperiments, b as screenExplainability, s as screenComparative, d as screenOverview } from "./Logo-BoWQqntV.js";
import { t } from "./router-C-xSIkub.js";
import "@tanstack/react-query";
const ICONS = {
  GitCompare,
  Lightbulb,
  Activity,
  Database,
  Layers,
  Filter,
  Sliders,
  Boxes,
  LineChart
};
const IMAGES = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow
};
function KubeflowBadge() {
  return /* @__PURE__ */ jsx("span", { className: "ml-2 inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10", children: t.deep.kubeflowBadge });
}
function FeaturesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-slate-900", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(FeaturesHero, {}),
    /* @__PURE__ */ jsx(FeatureShowcase, {}),
    /* @__PURE__ */ jsx(DeepFeatures, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-tight", children: common.brand })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 text-sm text-slate-600 md:flex", children: [
      /* @__PURE__ */ jsx(Link, { to: "/features", className: "font-medium text-slate-900", children: common.nav.features }),
      /* @__PURE__ */ jsx(Link, { to: "/docs", className: "hover:text-slate-900", children: common.nav.docs })
    ] }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: common.liveDemoUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800",
        children: [
          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
          " ",
          common.nav.liveDemo
        ]
      }
    )
  ] }) });
}
function FeaturesHero() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 py-16 text-center md:py-24", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: t.hero.eyebrow }),
    /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-semibold tracking-tight sm:text-5xl", children: t.hero.title }),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: "mt-4 text-lg leading-relaxed text-slate-600",
        dangerouslySetInnerHTML: { __html: t.hero.subtitle }
      }
    )
  ] }) });
}
function FeatureShowcase() {
  const features = t.showcase.features.map((f) => ({
    eyebrow: f.eyebrow,
    title: f.title,
    body: f.body,
    bullets: f.bullets,
    image: IMAGES[f.image]
  }));
  return /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200 bg-slate-50/60 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.showcase.eyebrow,
        title: t.showcase.title,
        subtitle: t.showcase.subtitle
      }
    ),
    /* @__PURE__ */ jsx(StickyFeatureScroller, { features })
  ] }) });
}
function StickyFeatureScroller({ features }) {
  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: wrapperRef,
        className: "mt-16 hidden grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] gap-20 lg:grid",
        children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: features.map((f, i) => /* @__PURE__ */ jsx(
            "div",
            {
              ref: (node) => {
                itemRefs.current[i] = node;
              },
              className: "flex min-h-[72vh] flex-col justify-center border-t border-slate-200 py-20 last:border-b",
              children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `max-w-xl transition-all duration-500 ${active === i ? "opacity-100" : "opacity-45"}`,
                  children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: f.eyebrow }),
                    /* @__PURE__ */ jsx("h3", { className: "mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl", children: f.title }),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-slate-600", children: f.body }),
                    /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-slate-700", children: f.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 flex-none text-emerald-500" }),
                      /* @__PURE__ */ jsx("span", { children: b })
                    ] }, b)) }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-2 text-xs font-medium text-slate-500", children: [
                      /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: String(i + 1).padStart(2, "0") }),
                      /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-slate-300" }),
                      /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: String(features.length).padStart(2, "0") })
                    ] })
                  ]
                }
              )
            },
            f.title
          )) }),
          /* @__PURE__ */ jsx("div", { className: "sticky top-24 flex h-[calc(100vh-7rem)] items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] w-full", children: [
            features.map((f, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `absolute inset-0 transition-all duration-500 ease-out ${active === i ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"}`,
                "aria-hidden": active !== i,
                children: /* @__PURE__ */ jsx(BrowserFrame, { children: /* @__PURE__ */ jsx("img", { src: f.image, alt: f.title, className: "block w-full" }) })
              },
              f.title
            )),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-9 left-0 flex items-center gap-1.5", children: features.map((f, i) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  const target = itemRefs.current[i];
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                },
                className: `h-1.5 cursor-pointer rounded-full transition-all hover:bg-slate-700 ${active === i ? "w-7 bg-slate-900" : "w-3 bg-slate-300"}`,
                "aria-label": `Go to ${f.title}`,
                type: "button"
              },
              f.title
            )) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-16 lg:hidden", children: features.map((f) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: f.eyebrow }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl", children: f.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-slate-600", children: f.body }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-slate-700", children: f.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 flex-none text-emerald-500" }),
        /* @__PURE__ */ jsx("span", { children: b })
      ] }, b)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(BrowserFrame, { children: /* @__PURE__ */ jsx("img", { src: f.image, alt: f.title, className: "block w-full" }) }) })
    ] }, f.title)) })
  ] });
}
function BrowserFrame({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2", children: [
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400" }),
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400" }),
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400" }),
      /* @__PURE__ */ jsx("span", { className: "ml-3 truncate text-[11px] text-slate-400", children: common.browserFrameUrl })
    ] }),
    children
  ] });
}
function DeepFeatures() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200 bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.deep.eyebrow,
        title: t.deep.title,
        subtitle: t.deep.subtitle
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: t.deep.items.map((item) => {
      const Icon = ICONS[item.icon];
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-xl border border-slate-200 bg-white p-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-900", children: item.title }),
              item.kubeflowOnly && /* @__PURE__ */ jsx(KubeflowBadge, {})
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-slate-600", children: item.body })
          ]
        },
        item.title
      );
    }) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "bg-slate-950 py-20 text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: t.cta.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-white/70", children: t.cta.subtitle }),
    /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: common.liveDemoUrl,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
            " ",
            t.cta.primary
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: common.repos.frontend,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
            " ",
            t.cta.secondary
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/docs",
          className: "inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10",
          children: [
            t.cta.tertiary,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-3 text-base leading-relaxed text-slate-600", children: subtitle })
  ] });
}
const SplitComponent = FeaturesPage;
export {
  SplitComponent as component
};
