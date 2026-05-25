import { createFileRoute } from "@tanstack/react-router";
import { DocsPage } from "@/pages/docs/DocsPage";
import t from "@/content/docs.json";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
    ],
  }),
});
