import t from "@/content/features.json";

export function FeaturesHero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          {t.hero.eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.hero.title}
        </h1>
        <p
          className="mt-4 text-lg leading-relaxed text-slate-600"
          dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
        />
      </div>
    </section>
  );
}
