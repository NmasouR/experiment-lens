import { DocsHeader } from "./components/DocsHeader";
import { DocsSidebar } from "./components/DocsSidebar";
import { DocSection } from "./components/DocSection";
import { Footer } from "@/components/ui/layout/Footer";
import t from "@/content/docs.json";

export function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DocsHeader />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-10">
        <DocsSidebar />

        <main className="col-span-12 space-y-20 md:col-span-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              {t.intro.eyebrow}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
              {t.intro.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              {t.intro.body}
            </p>
          </div>

          {t.docSections.map((s) => (
            <DocSection
              key={s.id}
              id={s.id}
              eyebrow={s.eyebrow}
              title={s.title}
              description={s.description}
              subBlocks={"subBlocks" in s ? s.subBlocks : undefined}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
