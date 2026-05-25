import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPage } from "@/pages/features/FeaturesPage";
import t from "@/content/features.json";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.ogTitle },
      { property: "og:description", content: t.meta.ogDescription },
    ],
  }),
});
