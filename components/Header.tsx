"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/0",
      ].join(" ")}
    >
      <div className="container-content flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-charcoal transition-colors hover:text-accent"
          aria-label="Heng Chhay — home"
        >
          HC
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-graphite transition-colors hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-smooth group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-accent-soft md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col items-end gap-[5px]">
            <span
              className={[
                "h-0.5 w-5 bg-current transition-all duration-300 ease-smooth",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 bg-current transition-all duration-300 ease-smooth",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 bg-current transition-all duration-300 ease-smooth",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={[
          "fixed inset-0 top-16 z-40 bg-canvas transition-all duration-300 ease-smooth md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <nav
          className="container-content flex flex-col gap-2 pt-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40 + 60}ms` : "0ms" }}
              className={[
                "border-b border-line py-4 text-2xl font-semibold text-charcoal transition-all duration-300 ease-smooth hover:text-accent",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
