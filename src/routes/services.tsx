import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero, useReveal } from "@/components/site/primitives";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Electrical, HVAC, Cleaning & More | Vertex Property Maintenance" },
      {
        name: "description",
        content:
          "Electricians, carpentry and lumber, HVAC, handyman, cleaning, tree removal, snow removal, painting and plumbing — all delivered in-house by Vertex Property Maintenance Inc.",
      },
      { property: "og:title", content: "Property Maintenance Services | Vertex" },
      {
        property: "og:description",
        content:
          "Ten trades under one contract with 24/7 emergency dispatch for commercial and residential properties.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ten trades."
        accent="One accountable partner."
        lead="No brokering, no mystery subcontractors. Every service below is delivered by Vertex crews, scheduled from one queue and documented the same way."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              data-reveal
              data-reveal-delay={String((i % 2) * 90)}
              className="reveal group scroll-mt-32 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted transition-colors duration-500 group-hover:bg-ember">
                  <s.icon className="h-6 w-6 text-ember transition-colors duration-500 group-hover:text-white" />
                </div>
                <span className="font-display text-4xl font-black text-muted-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 font-display text-2xl font-black md:text-3xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.blurb}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-ember" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/request"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember hover:underline"
              >
                Request {s.title.toLowerCase()} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted py-20">
        <div data-reveal className="reveal mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-black md:text-5xl">
            Not sure which trade you need?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose "Other / Not sure" on the work order form and describe the problem — our
            coordinators will route it to the right crew.
          </p>
          <Link
            to="/request"
            className="mt-8 inline-flex rounded-xl bg-ember px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-ember"
          >
            Submit a work order
          </Link>
        </div>
      </section>
    </>
  );
}
