import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Zap, Brain, Workflow, Sparkles, FlaskConical, Terminal, Hammer, Rocket } from "lucide-react";
import { a as t } from "./router-C-xSIkub.js";
import "@tanstack/react-query";
const ICONS = {
  Rocket,
  Hammer,
  Terminal,
  FlaskConical,
  Sparkles,
  Workflow,
  Brain,
  Zap
};
function DocsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-slate-900", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-14 max-w-7xl items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
            " ",
            t.header.back
          ]
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-semibold text-slate-900", children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-sky-600" }),
        t.header.brand
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-10", children: [
      /* @__PURE__ */ jsx("aside", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsx("nav", { className: "sticky top-20 space-y-6 text-sm", children: t.groups.map((group) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400", children: group }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: t.sections.filter((s) => s.group === group).map((s) => {
          const Icon = ICONS[s.icon];
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `#${s.id}`,
              className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5 text-slate-400" }),
                s.title
              ]
            }
          ) }, s.id);
        }) })
      ] }, group)) }) }),
      /* @__PURE__ */ jsxs("main", { className: "col-span-12 space-y-20 md:col-span-9", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: t.intro.eyebrow }),
          /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-semibold tracking-tight text-slate-900", children: t.intro.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-base leading-relaxed text-slate-600", children: t.intro.body })
        ] }),
        t.docSections.map((s) => /* @__PURE__ */ jsx(
          DocSection,
          {
            id: s.id,
            eyebrow: s.eyebrow,
            title: s.title,
            description: s.description,
            subBlocks: "subBlocks" in s ? s.subBlocks : void 0
          },
          s.id
        )),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600", children: t.placeholderNote })
      ] })
    ] })
  ] });
}
function DocSection({
  id,
  eyebrow,
  title,
  description,
  subBlocks
}) {
  return /* @__PURE__ */ jsxs("section", { id, className: "scroll-mt-24", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-tight text-slate-900", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-slate-600", children: description }),
    subBlocks && subBlocks.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: subBlocks.map((title2) => /* @__PURE__ */ jsx(SubBlock, { title: title2 }, title2)) }) : /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm italic text-slate-400", children: t.emptySectionPlaceholder })
  ] });
}
function SubBlock({ title }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-900", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs italic text-slate-400", children: t.subBlockPlaceholder })
  ] });
}
const SplitComponent = DocsPage;
export {
  SplitComponent as component
};
