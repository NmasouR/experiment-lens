import t from "@/content/docs.json";
import screenOverview from "@/assets/screen-overview.png";
import { HtmlContent } from "@/components/ui/content/HtmlContent";

function SubBlock({ title, content }: { title: string; content?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <HtmlContent html={content || t.subBlockPlaceholder} />
    </div>
  );
}

const IMAGES: Record<string, string> = {
  screenOverview,
};


export function DocSection({
  id,
  eyebrow,
  title,
  description,
  image,
  subBlocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  subBlocks?: {
    title: string;
    content?: string;
  }[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {image && (
        <img
          src={IMAGES[image]}
          alt={title}
          className="mt-6 rounded-lg border border-slate-200 shadow-sm"
        />
      )}
      {subBlocks && subBlocks.length > 0 ? (
        <div className="mt-6 space-y-4">
          {subBlocks.map((subBlock) => (
            <SubBlock key={subBlock.title} title={subBlock.title} content={subBlock.content} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
