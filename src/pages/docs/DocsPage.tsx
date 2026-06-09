import { memo, useEffect, useRef, useState } from "react";

import { DocsHeader } from "./components/DocsHeader";
import { DocsSidebar } from "./components/DocsSidebar";
import { DocSection } from "./components/DocSection";
import { Footer } from "@/components/ui/layout/Footer";
import t from "@/content/docs.json";

const DocsContent = memo(function DocsContent() {
  return (
    <main className="col-span-12 space-y-12 md:col-span-9 md:space-y-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          {t.intro.eyebrow}
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t.intro.title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
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
  );
});

export function DocsPage() {
  const initialSectionId = t.docSections[0]?.id ?? null;

  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    initialSectionId,
  );

  const activeSectionIdRef = useRef<string | null>(initialSectionId);
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

      let nextActiveSectionId = sections[0].id;

      for (const section of sections) {
        if (section.top <= scrollPosition) {
          nextActiveSectionId = section.id;
        } else {
          break;
        }
      }

      if (activeSectionIdRef.current === nextActiveSectionId) return;

      activeSectionIdRef.current = nextActiveSectionId;
      setActiveSectionId(nextActiveSectionId);
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

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6 sm:px-6 sm:py-8 md:gap-10 md:py-10">
        <DocsSidebar activeSectionId={activeSectionId} />

        <DocsContent />
      </div>
      <Footer />
    </div>
  );
}
