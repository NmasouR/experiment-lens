import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import common from "@/content/common.json";
import t from "@/content/index.json";

const HREF_KEYS: Record<string, string> = {
  liveDemo: common.liveDemoUrl,
  repoFrontend: common.repos.frontend,
  repoApi: common.repos.api,
  repoExplain: common.repos.explain,
};

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
    internal?: boolean;
  }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {l.internal ? (
              <Link to={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="hover:text-white"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-white">
            <Logo />
            <span className="font-semibold">{common.brand}</span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
            {t.footer.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
          {t.footer.columns.map((col) => (
            <FooterCol
              key={col.title}
              title={col.title}
              links={col.links.map((l) => {
                const link = l as {
                  label: string;
                  href?: string;
                  hrefKey?: string;
                  external?: boolean;
                  internal?: boolean;
                };
                return {
                  label: link.label,
                  href:
                    (link.hrefKey ? HREF_KEYS[link.hrefKey] : link.href) ?? "#",
                  external: link.external,
                  internal: link.internal,
                };
              })}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}
