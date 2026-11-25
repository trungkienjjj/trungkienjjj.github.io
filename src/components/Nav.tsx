import { useEffect, useRef, useState } from "react";
import { publicCvPath } from "../data/profile";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Capabilities", "#capabilities"],
  ["Contact", "#contact"]
] as const;

function GraphMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <path d="M8 9 24 8M8 9l7 15m9-16-9 16" className="stroke-teal" strokeWidth="1.5" />
      <circle cx="8" cy="9" r="3" className="fill-amber" />
      <circle cx="24" cy="8" r="3" className="fill-teal" />
      <circle cx="15" cy="24" r="3" className="fill-paper" />
    </svg>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">(
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0B0F17" : "#F6F4EE");
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;
    firstNavLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-page items-center gap-5 px-5 sm:px-7">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold text-paper">
          <GraphMark />
          <span className="hidden sm:inline">NTTK</span>
          <span className="sr-only">Nguyen Tran Trung Kien, home</span>
        </a>

        <nav
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-5 right-5 top-[4.5rem] flex-col gap-1 border border-line/10 bg-surface p-3 shadow-ledger md:static md:ml-auto md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              ref={href === navItems[0][1] ? firstNavLinkRef : undefined}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-muted transition hover:text-paper focus-visible:text-paper"
            >
              {label}
            </a>
          ))}
          <a
            href={publicCvPath}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 border-t border-line/10 px-3 pt-3 font-mono text-xs uppercase tracking-[0.12em] text-teal md:hidden"
          >
            Download public CV
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            className="icon-button"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
              strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42m-11.3 11.3-1.42 1.42" />
                </>
              ) : (
                <path d="M20.8 14A8.9 8.9 0 0 1 10 3.2 9 9 0 1 0 20.8 14Z" />
              )}
            </svg>
          </button>
          <a
            className="button-secondary hidden md:inline-flex"
            href={publicCvPath}
            download
          >
            Download public CV
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button md:hidden"
            aria-label={`${menuOpen ? "Close" : "Menu"}: toggle navigation`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
