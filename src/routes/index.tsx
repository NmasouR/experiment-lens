import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/home/HomePage";
import t from "@/content/index.json";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
    ],
  }),
});
