import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <div
        className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-ink/85 shadow-lift backdrop-blur-xl"
            : "border-white/10 bg-ink/45 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="group flex items-center gap-1 text-white">
          <img src="/logo-icon.png" className="h-12 w-auto object-contain" />
          <span className="leading-none">
            <span className="block font-display text-base font-extrabold tracking-tight">
              VERTEX
            </span>
            <span className="block text-[10px] uppercase tracking-[0.24em] text-white/50">
              Property Maintenance
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/65 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-white" }}
              className="relative transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+18884499349"
            className="hidden items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-ember hover:text-white md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            (888) 449-9349
          </a>
          <Link
            to="/request"
            className="group inline-flex items-center gap-2 rounded-xl bg-ember px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-ember hover:-translate-y-0.5"
          >
            Work order
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden animate-scale-in">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-white/5 text-white" }}
              className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
