import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { SERVICES } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember font-display text-xl font-black">
                V
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                VERTEX PROPERTY MAINTENANCE INC.
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Every trade, one contract, one accountable partner. Licensed, bonded and insured —
              serving owners, managers and facility teams since 2003.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href="tel:+18005550142" className="flex items-center gap-3 hover:text-ember">
                <Phone className="h-4 w-4 text-ember" /> (800) 555-0142
              </a>
              <a href="mailto:dispatch@vertexpm.com" className="flex items-center gap-3 hover:text-ember">
                <Mail className="h-4 w-4 text-ember" /> dispatch@vertexpm.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-ember" /> 1840 Foundry Ave, Suite 300
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-white/45">Services</h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-white/65">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" hash={s.slug} className="transition-colors hover:text-ember">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-white/45">Company</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/65">
              {[
                { to: "/about", label: "About us" },
                { to: "/work", label: "Our work" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact us" },
                { to: "/request", label: "Submit a work order" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-ember">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vertex Property Maintenance Inc. All rights reserved.</p>
          <p>Licensed · Bonded · Insured · 24/7 emergency dispatch</p>
        </div>
      </div>
    </footer>
  );
}
