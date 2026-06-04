import { useEffect, useRef, useState } from "react";

import { DocsHeader } from "./components/DocsHeader";
import { DocsSidebar } from "./components/DocsSidebar";
import { DocSection } from "./components/DocSection";
import { Footer } from "@/components/ui/layout/Footer";
import t from "@/content/docs.json";

export function DocsPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    t.docSections[0]?.id ?? null,
  );

  const tickingRef = useRef(false);

  useEffect(() => {
    const sectionIds = t.docSections.map((section) => section.id);

    function getSectionPositions() {
      return sectionIds
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return null;

          return {
            id,
            top: element.offsetTop,
          };
        })
        .filter(
          (
            section,
          ): section is {
            id: string;
            top: number;
          } => Boolean(section),
        );
    }

    function updateActiveSection() {
      const sections = getSectionPositions();

      if (sections.length === 0) return;

      const headerOffset = 200;
      const scrollPosition = window.scrollY + headerOffset;

      let currentSectionId = sections[0].id;

      for (const section of sections) {
        if (section.top <= scrollPosition) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      setActiveSectionId(currentSectionId);
    }

    function requestUpdateActiveSection() {
      if (tickingRef.current) return;

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();
        tickingRef.current = false;
      });
    }

    updateActiveSection();

    window.addEventListener("scroll", requestUpdateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdateActiveSection);
    window.addEventListener("load", requestUpdateActiveSection);

    return () => {
      window.removeEventListener("scroll", requestUpdateActiveSection);
      window.removeEventListener("resize", requestUpdateActiveSection);
      window.removeEventListener("load", requestUpdateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DocsHeader />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-10">
        <DocsSidebar activeSectionId={activeSectionId} />

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
              image={"image" in s ? s.image : undefined}
              subBlocks={"subBlocks" in s ? s.subBlocks : undefined}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
