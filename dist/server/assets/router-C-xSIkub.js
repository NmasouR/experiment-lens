import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/experiment-lens/assets/styles-CRAP4tGj.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const meta$2 = { "title": "Features — ExperimentLens", "description": "Every capability ExperimentLens ships: parallel-coordinates run analysis, comparative views, explainability (PDP, ALE, counterfactuals), experiment catalogue, workflow drill-down and an extensible adapter API.", "ogTitle": "Features — ExperimentLens", "ogDescription": "The full feature surface of ExperimentLens — visual analytics & explainability for ML experiments." };
const hero$1 = { "eyebrow": "Features", "title": "The full surface of ExperimentLens.", "subtitle": "ExperimentLens is the <strong>visualization layer</strong> on top of your MLflow tracking server and Kubeflow execution engine. It doesn't compute metrics for you — it makes every metric, parameter and artifact <em>you</em> log explorable, comparable and explainable." };
const showcase = { "eyebrow": "Capabilities", "title": "What you can do in ExperimentLens.", "subtitle": "", "features": [{ "eyebrow": "Run & configuration analysis", "title": "Hundreds of runs, one parallel-coordinates plot.", "body": "Sort, filter and group runs by any parameter or by any metric you logged to MLflow. The linked parallel-coordinates view reveals which configuration choices actually move the numbers you care about.", "bullets": ["Multi-axis parallel coordinates with brushing", "Group-by variability points (criterion, normalization, …)", "Live filtering between table and chart"], "image": "screenOverview" }, { "eyebrow": "Comparative analysis", "title": "Compare runs side-by-side across metrics, models and data.", "body": "Select any subset of runs and switch between Metrics, Models and Data tabs. Mosaic and stacked layouts let you spot regressions and tradeoffs in the metrics you logged.", "bullets": ["Mosaic & stacked metric layouts", "Cross-run model & dataset diffs", "Status-aware comparison (completed / scheduled)"], "image": "screenComparative" }, { "eyebrow": "Explainability", "title": "PDP, ALE and feature importance — wired to your runs.", "body": "Open the Explainability tab to see global and local post-hoc explanations attached to the same experiment context. No notebooks, no glue code.", "bullets": ["Feature importance per variability point", "Partial Dependence Plots (PDP)", "Accumulated Local Effects (ALE) & counterfactuals"], "image": "screenExplainability" }, { "eyebrow": "Experiments catalogue", "title": "Every experiment, every workflow, in one place.", "body": "A central catalogue of all tracked experiments with status, owner and last-update — backed by MLflow runs and Kubeflow pipeline executions.", "bullets": ["MLflow- and Kubeflow-backed runs unified", "Search & status filtering", "One click into the full experiment view"], "image": "screenExperiments" }, { "eyebrow": "Workflow details", "title": "Drill into a single workflow's parameters, metrics & artifacts.", "body": "Inspect the exact parameters, metrics and artifacts that the run logged to MLflow. Ratings and status help curate the runs that matter.", "bullets": ["Parameters, metrics & artifacts pane", "Run rating & status surfacing", "Direct link from any comparative view"], "image": "screenWorkflow" }] };
const deep = { "eyebrow": "In depth", "title": "The full feature surface.", "subtitle": "Everything ExperimentLens currently ships, at a glance.", "kubeflowBadge": "Kubeflow only", "items": [{ "icon": "GitCompare", "title": "Comparative analysis", "body": "Mosaic & stacked layouts to diff metrics, models and datasets across selected runs." }, { "icon": "Sliders", "title": "Variability points", "body": "Treat hyperparameters and engine settings as first-class axes you can group, color and filter by." }, { "icon": "Filter", "title": "Linked filtering", "body": "Brush the chart, the table follows. Filter the table, the chart updates. One mental model." }, { "icon": "LineChart", "title": "Any metric you log", "body": "Every metric ExperimentLens shows comes from what your runs log to MLflow — accuracy, fairness, latency, custom KPIs. Nothing is hard-coded." }, { "icon": "Activity", "title": "Pipeline monitoring", "body": "Track pipeline progress (completed / running / failed) and steer human-in-the-loop refinements.", "kubeflowOnly": true }, { "icon": "Database", "title": "Artifact & data inspection", "body": "Preview inputs, outputs, predictions and intermediate artifacts in context with the run." }, { "icon": "Lightbulb", "title": "Counterfactuals & PDP / ALE", "body": "Apply post-hoc explainability methods directly inside the experiment context." }, { "icon": "Boxes", "title": "Extensible adapter API", "body": "Add a new tracker or engine without touching the frontend — the adapter contract is the only seam." }, { "icon": "Layers", "title": "Human-in-the-loop", "body": "Use diagnostic views to adjust configurations and re-launch refined pipelines as part of the same experiment.", "kubeflowOnly": true }] };
const cta = { "title": "See these features on a real experiment.", "subtitle": "A public deployment running a real fairness-aware classification experiment.", "primary": "Open the live demo", "secondary": "Source on GitHub", "tertiary": "Docs" };
const t$2 = {
  meta: meta$2,
  hero: hero$1,
  showcase,
  deep,
  cta
};
const $$splitComponentImporter$2 = () => import("./features-D_Fgunrg.js");
const Route$2 = createFileRoute("/features")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: t$2.meta.title
    }, {
      name: "description",
      content: t$2.meta.description
    }, {
      property: "og:title",
      content: t$2.meta.ogTitle
    }, {
      property: "og:description",
      content: t$2.meta.ogDescription
    }]
  })
});
const meta$1 = { "title": "Docs — ExperimentLens", "description": "ExperimentLens documentation: quick start, building the app, example experiments with MLflow and Kubeflow, and an explainability guide." };
const header = { "back": "Back to home", "brand": "ExperimentLens · Docs" };
const intro = { "eyebrow": "Documentation", "title": "ExperimentLens docs", "body": "Learn how to run ExperimentLens, build the app from source, ship your first experiment with MLflow and Kubeflow, and understand what the explainability views are telling you." };
const groups = ["Getting started", "Experiments", "Concepts"];
const sections = [{ "id": "overview", "title": "Overview", "icon": "Rocket", "group": "Getting started" }, { "id": "build-app", "title": "Build the app", "icon": "Hammer", "group": "Getting started" }, { "id": "quick-start", "title": "Quick start", "icon": "Terminal", "group": "Getting started" }, { "id": "exp-mlflow-basic", "title": "MLflow: metrics & params", "icon": "FlaskConical", "group": "Experiments" }, { "id": "exp-mlflow-explain", "title": "MLflow + explainability", "icon": "Sparkles", "group": "Experiments" }, { "id": "exp-kubeflow", "title": "MLflow + Kubeflow", "icon": "Workflow", "group": "Experiments" }, { "id": "exp-kubeflow-actions", "title": "Kubeflow-only actions", "icon": "Zap", "group": "Experiments" }, { "id": "explainability", "title": "How explainability works", "icon": "Brain", "group": "Concepts" }];
const docSections = [{ "id": "overview", "eyebrow": "Getting started", "title": "Overview", "description": "Run ExperimentLens locally against an existing MLflow deployment in a few minutes." }, { "id": "build-app", "eyebrow": "Getting started", "title": "Build the app", "description": "Build the frontend, API and explainability module from source — useful for self-hosting and contributing.", "subBlocks": ["Prerequisites", "Clone the repositories", "Configure environment", "Run the stack"] }, { "id": "quick-start", "eyebrow": "Getting started", "title": "Quick start", "description": "A concise step-by-step guide to get ExperimentLens running in minutes.", "subBlocks": ["Start the services", "Connect to MLflow", "Open the UI"] }, { "id": "exp-mlflow-basic", "eyebrow": "Experiments", "title": "A simple MLflow experiment", "description": "Log parameters and metrics to MLflow and open the run in ExperimentLens.", "subBlocks": ["Set up MLflow tracking", "Log params & metrics", "View the run in ExperimentLens"] }, { "id": "exp-mlflow-explain", "eyebrow": "Experiments", "title": "MLflow experiment with explainability", "description": "Extend the previous example to also log explainability artifacts the module can consume.", "subBlocks": ["Install the explainability module", "Generate & log explanations", "Inspect explanations in the UI"] }, { "id": "exp-kubeflow", "eyebrow": "Experiments", "title": "MLflow + Kubeflow", "description": "Wrap the same experiment as a Kubeflow pipeline, track runs in MLflow, and view the orchestrated workflow in ExperimentLens.", "subBlocks": ["Author the Kubeflow pipeline", "Connect MLflow tracking", "Submit & monitor runs", "Compare runs across configurations"] }, { "id": "exp-kubeflow-actions", "eyebrow": "Experiments", "title": "Kubeflow-only actions", "description": "Actions you can perform inside ExperimentLens only when the experiment is backed by Kubeflow.", "subBlocks": ["Start and stop a run", "Create a new run from the UI", "Spawn a workflow from counterfactuals"] }, { "id": "explainability", "eyebrow": "Concepts", "title": "How explainability works", "description": "What ExperimentLens computes, how to read the charts, and what the answers actually mean.", "subBlocks": ["What we explain (and what we don't)", "Feature importance", "SHAP values", "Reading the model card", "Fairness metrics"] }];
const placeholderNote = "This is a structural placeholder — the project team will fill in commands, code snippets and screenshots for each section.";
const subBlockPlaceholder = "Content to be added.";
const emptySectionPlaceholder = "Content to be added.";
const t$1 = {
  meta: meta$1,
  header,
  intro,
  groups,
  sections,
  docSections,
  placeholderNote,
  subBlockPlaceholder,
  emptySectionPlaceholder
};
const $$splitComponentImporter$1 = () => import("./docs-DE2RCrMZ.js");
const Route$1 = createFileRoute("/docs")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: t$1.meta.title
    }, {
      name: "description",
      content: t$1.meta.description
    }]
  })
});
const meta = { "title": "ExperimentLens — Visual analytics & explainability for ML experiments", "description": "An extensible visual analytics dashboard for ML experiments. Plug in MLflow as a tracker and Kubeflow as an execution engine, then compare runs, inspect data, and explain models — all in one UI." };
const hero = { "titlePre": "Explore, monitor and", "titleHighlight": "explain", "titlePost": "complex ML pipelines.", "subtitle": "ExperimentLens is a lightweight visual dashboard for ML experiment management. Plug in <strong>MLflow</strong> as your tracker and <strong>Kubeflow</strong> as your execution engine, then compare hundreds of runs, inspect datasets and artifacts, and apply explainability methods — all from one UI.", "primaryCta": "Open live demo", "secondaryCta": "Create your first experiment", "imageAlt": "ExperimentLens overview dashboard with parallel coordinates plot across 108 runs", "imageCaption": "Overview tab — 108 runs of a fairness-aware classification experiment, parallel coordinates linked to the runs table." };
const valueProps = { "eyebrow": "Why ExperimentLens", "title": "A single lens over your entire ML experimentation loop.", "subtitle": "From orchestration to explanation — without leaving the browser.", "items": [{ "icon": "Plug", "title": "Tracker- & engine-agnostic", "body": "Adapter interface to MLflow today, with Kubeflow as the execution engine. Airflow and other backends are on the roadmap." }, { "icon": "BarChart3", "title": "Visual analytics, not just tables", "body": "Parallel coordinates, comparative metric views, group-by, filters and color encodings — designed to make 100s of runs legible at a glance." }, { "icon": "Lightbulb", "title": "Explainability built-in", "body": "Feature importance, Partial Dependence (PDP), Accumulated Local Effects (ALE) and counterfactual views wired directly to your runs." }] };
const featuresPreview = { "eyebrow": "Features", "title": "Built for the whole experiment lifecycle.", "subtitle": "From first run to final explanation — everything in one UI.", "slides": [{ "title": "Visualize the metrics you log.", "image": "screenOverview" }, { "title": "Browse and compare experiments.", "image": "screenExperiments" }, { "title": "Analyze runs side-by-side.", "image": "screenComparative" }, { "title": "Explain your model decisions.", "image": "screenExplainability" }, { "title": "Inspect your workflows.", "image": "screenWorkflow" }], "exploreCta": "Explore all features" };
const integrations = { "eyebrow": "Integrations", "title": "Works with the stack you already run.", "subtitle": "ExperimentLens consumes runs from your tracker and orchestrates them through your engine.", "cards": [{ "icon": "LineChart", "tag": "Tracker", "name": "MLflow", "body": "Logs runs, parameters, metrics and artifacts. ExperimentLens reads MLflow experiments directly so every visualization, comparison and explanation maps back to a real MLflow run.", "points": ["Experiment & run discovery", "Parameters, metrics, tags & artifacts", "Per-run lineage into the UI"] }, { "icon": "Workflow", "tag": "Execution engine", "name": "Kubeflow", "body": "Runs the underlying pipelines on Kubernetes. ExperimentLens surfaces Kubeflow pipeline executions as first-class workflows you can inspect, compare and explain.", "points": ["Kubeflow Pipelines as experiments", "Task-level status & artifact tracking", "Re-launch / steer modified pipelines"] }], "footnote": "Adapter-based design — additional trackers and engines (e.g. Airflow) can be added without changing the UI." };
const howItWorks = { "eyebrow": "How it works", "title": "From pipeline to insight in three steps.", "steps": [{ "n": "01", "icon": "Workflow", "title": "Orchestrate", "body": "Author your experiment as a Kubeflow pipeline. ExperimentLens picks it up as a first-class workflow." }, { "n": "02", "icon": "LineChart", "title": "Track", "body": "Each run logs parameters, metrics and artifacts to MLflow — automatically surfaced in the dashboard." }, { "n": "03", "icon": "Eye", "title": "Explore & explain", "body": "Compare runs visually, drill into artifacts and apply explainability methods without leaving the UI." }], "architecture": [{ "icon": "Workflow", "title": "Kubeflow", "sub": "Execution engine" }, { "icon": "LineChart", "title": "MLflow", "sub": "Tracking server" }, { "icon": "Server", "title": "vis-api", "sub": "Adapter & REST" }, { "icon": "Eye", "title": "ExperimentLens", "sub": "vis-frontend UI" }] };
const demoStrip = { "eyebrow": "Live showcase", "title": "See it on a real experiment.", "subtitle": "A public deployment running a 108-run fairness experiment.", "cards": [{ "title": "Fairness-aware classification", "sub": "108 runs · parallel coordinates", "image": "screenOverview" }, { "title": "Side-by-side comparison", "sub": "Mosaic vs stacked metrics", "image": "screenComparative" }, { "title": "Explainability surface", "sub": "Feature importance · PDP · ALE", "image": "screenExplainability" }], "cta": "Open the live demo" };
const repos = { "eyebrow": "Open source", "title": "Three repositories, one platform.", "subtitle": "ExperimentLens is developed in the open within the ExtremeXP project.", "viewCta": "View on GitHub", "items": [{ "name": "vis-frontend", "desc": "The ExperimentLens React frontend — dashboards, charts and explainability views.", "repoKey": "frontend" }, { "name": "vis-api", "desc": "Backend adapter API connecting MLflow, Kubeflow and the frontend.", "repoKey": "api" }, { "name": "extremexp-explainability-module", "desc": "Explainability methods (PDP, ALE, feature importance, counterfactuals) powering the Explainability tab.", "repoKey": "explain" }] };
const footer = { "tagline": "Visual analytics & explainability for ML experiments. Built within the ExtremeXP project.", "copyright": "ExperimentLens · ExtremeXP consortium.", "columns": [{ "title": "Product", "links": [{ "label": "Features", "href": "#features" }, { "label": "Integrations", "href": "#integrations" }, { "label": "How it works", "href": "#how" }, { "label": "Live demo", "hrefKey": "liveDemo", "external": true }] }, { "title": "Resources", "links": [{ "label": "Docs", "href": "/docs", "internal": true }, { "label": "vis-frontend", "hrefKey": "repoFrontend", "external": true }, { "label": "vis-api", "hrefKey": "repoApi", "external": true }, { "label": "Explainability module", "hrefKey": "repoExplain", "external": true }] }, { "title": "Project", "links": [{ "label": "ATHENA Research Center", "href": "https://www.athenarc.gr/", "external": true }, { "label": "ExtremeXP (Horizon Europe)", "href": "https://extremexp.eu/", "external": true }] }] };
const t = {
  meta,
  hero,
  valueProps,
  featuresPreview,
  integrations,
  howItWorks,
  demoStrip,
  repos,
  footer
};
const $$splitComponentImporter = () => import("./index-Brb9qCm3.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: t.meta.title
    }, {
      name: "description",
      content: t.meta.description
    }]
  })
});
const FeaturesRoute = Route$2.update({
  id: "/features",
  path: "/features",
  getParentRoute: () => Route$3
});
const DocsRoute = Route$1.update({
  id: "/docs",
  path: "/docs",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  DocsRoute,
  FeaturesRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  t$1 as a,
  t as b,
  router as r,
  t$2 as t
};
