import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import screenOverview from "@/assets/screen-overview.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenExplainability from "@/assets/screen-explainability.png";
import screenExperiments from "@/assets/screen-experiments.png";
import screenWorkflow from "@/assets/screen-workflow.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/content/carousel";
import t from "@/content/index.json";
import { BrowserFrame } from "../../../components/ui/content/BrowserFrame";


const IMAGES: Record<string, string> = {
  screenOverview,
  screenComparative,
  screenExplainability,
  screenExperiments,
  screenWorkflow,
};

export function FeaturesPreview() {
  const slides = t.featuresPreview.slides;
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [api, setApi] = useState<CarouselApi>();
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

  return (
    <section id="features" className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
            {t.featuresPreview.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.featuresPreview.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {t.featuresPreview.subtitle}
          </p>
        </div>

        <div
          className="mt-12 rounded-2xl p-4 ring-1 ring-slate-200 sm:p-6"
          style={{
            backgroundColor: "#eef2ff",
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 90% 100%, rgba(99,102,241,0.18), transparent 55%), repeating-linear-gradient(135deg, rgba(15,23,42,0.05) 0 1px, transparent 1px 10px)",
          }}
        >
          <div className="flex items-center justify-between gap-4 px-1 pb-4 sm:px-2">
            <h3 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
              {slides[selected]?.title}
            </h3>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to ${s.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected
                      ? "w-6 bg-slate-900"
                      : "w-4 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[autoplay.current]}
          >
            <CarouselContent>
              {slides.map((s) => (
                <CarouselItem key={s.title}>
                  <BrowserFrame>
                    <img
                      src={IMAGES[s.image]}
                      alt={s.title}
                      className="block w-full"
                    />
                  </BrowserFrame>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {t.featuresPreview.exploreCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
