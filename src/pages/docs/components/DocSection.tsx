import t from "@/content/docs.json";

function SubBlock({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs italic text-slate-400">
        {t.subBlockPlaceholder}
      </p>
    </div>
  );
}

export function DocSection({
  id,
  eyebrow,
  title,
  description,
  subBlocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  subBlocks?: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      {subBlocks && subBlocks.length > 0 ? (
        <div className="mt-6 space-y-4">
          {subBlocks.map((title) => (
            <SubBlock key={title} title={title} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm italic text-slate-400">
          {t.emptySectionPlaceholder}
        </div>
      )}
    </section>
  );
}
