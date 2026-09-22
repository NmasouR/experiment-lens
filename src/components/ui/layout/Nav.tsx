import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Play, Menu, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import common from "@/content/common.json";
import { useIsMobile } from "@/hooks/use-mobile";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-base font-semibold tracking-tight">
            {common.brand}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <Link to="/features" className="hover:text-slate-900">
            {common.nav.features}
          </Link>
          <Link to="/docs" className="hover:text-slate-900">
            {common.nav.docs}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={common.liveDemoUrlAgents}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
          >
            <Play className="h-4 w-4" /> {common.nav.liveDemo}
          </a>
          <a
            href={common.repos.frontend}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            <Github className="h-4 w-4" /> {common.nav.github}
          </a>
          <button
            className="ml-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <nav className="mt-4 flex flex-col gap-4 text-sm text-slate-600">
            <Link
              to="/features"
              className="rounded-md px-3 py-2 hover:bg-slate-50 hover:text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {common.nav.features}
            </Link>
            <Link
              to="/docs"
              className="rounded-md px-3 py-2 hover:bg-slate-50 hover:text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {common.nav.docs}
            </Link>
            <a
              href={common.liveDemoUrlAgents}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2 hover:bg-slate-50 hover:text-slate-900 sm:hidden"
            >
              {common.nav.liveDemo}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
