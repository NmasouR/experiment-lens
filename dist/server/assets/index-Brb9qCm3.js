import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play, Github, Server, Eye, LineChart, Workflow, Plug, Lightbulb, BarChart3, Check } from "lucide-react";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { L as Logo, c as common, d as screenOverview, e as screenWorkflow, a as screenExperiments, b as screenExplainability, s as screenComparative } from "./Logo-BoWQqntV.js";
import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { b as t } from "./router-C-xSIkub.js";
import "@tanstack/react-query";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const ICONS = {
  BarChart3,
  Lightbulb,
  Plug,
  Workflow,
  LineChart,
  Eye,
  Server
};
const IMAGES = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow
};
const HREF_KEYS = {
  liveDemo: common.liveDemoUrl,
  repoFrontend: common.repos.frontend,
  repoApi: common.repos.api,
  repoExplain: common.repos.explain
};
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-slate-900", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ValueProps, {}),
    /* @__PURE__ */ jsx(FeaturesPreview, {}),
    /* @__PURE__ */ jsx(Integrations, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(DemoStrip, {}),
    /* @__PURE__ */ jsx(Repos, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function FeaturesPreview() {
  const slides = t.featuresPreview.slides;
  const autoplay = useRef(
    Autoplay({ delay: 2e3, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [api, setApi] = useState();
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
  return /* @__PURE__ */ jsx("section", { id: "features", className: "border-b border-slate-200 bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: t.featuresPreview.eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl", children: t.featuresPreview.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-base leading-relaxed text-slate-600", children: t.featuresPreview.subtitle })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "mt-12 rounded-2xl p-4 ring-1 ring-slate-200 sm:p-6",
        style: {
          backgroundColor: "#eef2ff",
          backgroundImage: "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 90% 100%, rgba(99,102,241,0.18), transparent 55%), repeating-linear-gradient(135deg, rgba(15,23,42,0.05) 0 1px, transparent 1px 10px)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 px-1 pb-4 sm:px-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "truncate text-base font-semibold text-slate-900 sm:text-lg", children: slides[selected]?.title }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: slides.map((s, i) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => api?.scrollTo(i),
                "aria-label": `Go to ${s.title}`,
                className: `h-1.5 rounded-full transition-all ${i === selected ? "w-6 bg-slate-900" : "w-4 bg-slate-300 hover:bg-slate-400"}`
              },
              s.title
            )) })
          ] }),
          /* @__PURE__ */ jsx(
            Carousel,
            {
              setApi,
              opts: { align: "center", loop: true },
              plugins: [autoplay.current],
              children: /* @__PURE__ */ jsx(CarouselContent, { children: slides.map((s) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(BrowserFrame, { children: /* @__PURE__ */ jsx("img", { src: IMAGES[s.image], alt: s.title, className: "block w-full" }) }) }, s.title)) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/features",
        className: "inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800",
        children: [
          t.featuresPreview.exploreCta,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    ) })
  ] }) });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-tight", children: common.brand })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 text-sm text-slate-600 md:flex", children: [
      /* @__PURE__ */ jsx(Link, { to: "/features", className: "hover:text-slate-900", children: common.nav.features }),
      /* @__PURE__ */ jsx(Link, { to: "/docs", className: "hover:text-slate-900", children: common.nav.docs })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: common.liveDemoUrl,
          target: "_blank",
          rel: "noreferrer",
          className: "hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
            " ",
            common.nav.liveDemo
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: common.repos.frontend,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800",
          children: [
            /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
            " ",
            common.nav.github
          ]
        }
      )
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pb-14 pt-16 md:pt-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl", children: [
          t.hero.titlePre,
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent", children: t.hero.titleHighlight }),
          " ",
          t.hero.titlePost
        ] }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-5 text-lg leading-relaxed text-slate-600",
            dangerouslySetInnerHTML: { __html: t.hero.subtitle }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: common.liveDemoUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800",
              children: [
                /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
                " ",
                t.hero.primaryCta
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/docs",
              className: "inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50",
              children: [
                t.hero.secondaryCta,
                " ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-14 max-w-6xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-x-10 -top-6 -bottom-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-200/40 via-indigo-200/30 to-fuchsia-200/30 blur-2xl" }),
        /* @__PURE__ */ jsx(BrowserFrame, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: screenOverview,
            alt: t.hero.imageAlt,
            className: "block w-full"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-xs italic text-slate-500", children: t.hero.imageCaption })
      ] })
    ] })
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
function ValueProps() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.valueProps.eyebrow,
        title: t.valueProps.title,
        subtitle: t.valueProps.subtitle
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: t.valueProps.items.map(({ icon, title, body }) => {
      const Icon = ICONS[icon];
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm",
          children: [
            /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-semibold text-slate-900", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-slate-600", children: body })
          ]
        },
        title
      );
    }) })
  ] }) });
}
function Integrations() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "integrations",
      className: "border-b border-slate-200 bg-white py-20",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            eyebrow: t.integrations.eyebrow,
            title: t.integrations.title,
            subtitle: t.integrations.subtitle
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: t.integrations.cards.map((c) => /* @__PURE__ */ jsx(
          IntegrationCard,
          {
            icon: ICONS[c.icon],
            tag: c.tag,
            name: c.name,
            body: c.body,
            points: c.points
          },
          c.name
        )) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-center text-sm text-slate-500", children: t.integrations.footnote })
      ] })
    }
  );
}
function IntegrationCard({
  icon: Icon,
  tag,
  name,
  body,
  points
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-slate-900 text-white", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-slate-400", children: tag }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-slate-900", children: name })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-slate-600", children: body }),
    /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5 text-sm text-slate-700", children: points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 flex-none text-sky-500" }),
      /* @__PURE__ */ jsx("span", { children: p })
    ] }, p)) })
  ] });
}
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "border-b border-slate-200 bg-slate-50/60 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.howItWorks.eyebrow,
        title: t.howItWorks.title
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: t.howItWorks.steps.map(({ n, icon, title, body }) => {
      const Icon = ICONS[icon];
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-4 text-xs font-mono text-slate-300", children: n }),
            /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-semibold text-slate-900", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-slate-600", children: body })
          ]
        },
        n
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10", children: /* @__PURE__ */ jsx(ArchitectureDiagram, {}) })
  ] }) });
}
function ArchitectureDiagram() {
  const Block = ({
    icon: Icon,
    title,
    sub
  }) => /* @__PURE__ */ jsxs("div", { className: "flex min-w-[180px] flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-center", children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-slate-700" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold text-slate-900", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: sub })
  ] });
  const blocks = t.howItWorks.architecture;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-3 text-slate-400", children: blocks.map((b, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx(Block, { icon: ICONS[b.icon], title: b.title, sub: b.sub }),
    i < blocks.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
  ] }, b.title)) });
}
function DemoStrip() {
  return /* @__PURE__ */ jsx("section", { id: "demo", className: "bg-slate-950 py-20 text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.demoStrip.eyebrow,
        title: t.demoStrip.title,
        subtitle: t.demoStrip.subtitle,
        dark: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: t.demoStrip.cards.map((c) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: common.liveDemoUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/30",
        children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-b border-white/10", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: IMAGES[c.image],
              alt: c.title,
              className: "block w-full transition group-hover:scale-[1.02]"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: c.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-white/60", children: c.sub })
            ] }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white" })
          ] })
        ]
      },
      c.title
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: common.liveDemoUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100",
        children: [
          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
          " ",
          t.demoStrip.cta
        ]
      }
    ) })
  ] }) });
}
function Repos() {
  return /* @__PURE__ */ jsx("section", { id: "repos", className: "border-b border-slate-200 bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: t.repos.eyebrow,
        title: t.repos.title,
        subtitle: t.repos.subtitle
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: t.repos.items.map((r) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: common.repos[r.repoKey],
        target: "_blank",
        rel: "noreferrer",
        className: "group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-900 hover:shadow-sm",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-900", children: [
            /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-sm", children: r.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-slate-600", children: r.desc }),
          /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900", children: [
            t.repos.viewCta,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
          ] })
        ]
      },
      r.name
    )) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-slate-950 py-12 text-sm text-slate-400", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: common.brand })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-xs leading-relaxed text-slate-500", children: t.footer.tagline })
      ] }),
      t.footer.columns.map((col) => /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: col.title,
          links: col.links.map((l) => {
            const link = l;
            return {
              label: link.label,
              href: (link.hrefKey ? HREF_KEYS[link.hrefKey] : link.href) ?? "#",
              external: link.external,
              internal: link.internal
            };
          })
        },
        col.title
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-slate-500", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      t.footer.copyright
    ] })
  ] });
}
function FooterCol({
  title,
  links
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-slate-300", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: l.internal ? /* @__PURE__ */ jsx(Link, { to: l.href, className: "hover:text-white", children: l.label }) : /* @__PURE__ */ jsx(
      "a",
      {
        href: l.href,
        target: l.external ? "_blank" : void 0,
        rel: l.external ? "noreferrer" : void 0,
        className: "hover:text-white",
        children: l.label
      }
    ) }, l.label)) })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `text-xs font-semibold uppercase tracking-widest ${dark ? "text-sky-300" : "text-sky-600"}`,
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: `mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsx(
      "p",
      {
        className: `mt-3 text-base leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`,
        children: subtitle
      }
    )
  ] });
}
const SplitComponent = HomePage;
export {
  SplitComponent as component
};
