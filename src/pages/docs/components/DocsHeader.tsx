import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

import t from "@/content/docs.json";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> {t.header.back}
        </Link>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
          <FileText className="h-4 w-4 text-sky-600" />
          {t.header.brand}
        </span>
      </div>
    </header>
  );
}
