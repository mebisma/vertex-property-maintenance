import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHero, useReveal } from "@/components/site/primitives";
import { WorkOrderForm } from "@/components/site/WorkOrderForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vertex Property Maintenance Inc. — 24/7 Dispatch" },
      {
        name: "description",
        content:
          "Call (800) 555-0142 or send a request. Vertex Property Maintenance Inc. answers 24/7 for emergency maintenance across all trades.",
      },
      { property: "og:title", content: "Contact Vertex Property Maintenance Inc." },
      {
        property: "og:description",
        content: "Staffed 24/7 dispatch, same-day scheduling, and one coordinator per account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  {
    icon: Phone,
    t: "Dispatch line",
    v: "(888) 869-5039",
    href: "tel:+18888695039",
    note: "Staffed 24 hours a day, every day",
  },
  {
    icon: Mail,
    t: "Email",
    v: "contact@vertexpropertymaint.com",
    href: "mailto:contact@vertexpropertymaint.com",
    note: "Replies within one business hour",
  },
  {
    icon: Clock,
    t: "Office hours",
    v: "Mon–Fri, 7:00am – 6:00pm",
    note: "Emergency crews available around the clock",
  },
];

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a"
        accent="coordinator."
        lead="No phone trees, no ticket black holes. Call the dispatch line or send your request below and our coordinator picks it up."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {DETAILS.map((d, i) => (
                <div
                  key={d.t}
                  data-reveal
                  data-reveal-delay={String(i * 80)}
                  className="reveal group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted transition-colors duration-500 group-hover:bg-ember">
                      <d.icon className="h-5 w-5 text-ember transition-colors duration-500 group-hover:text-white" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {d.t}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block font-display text-lg font-extrabold hover:text-ember">
                          {d.v}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-lg font-extrabold">{d.v}</p>
                      )}
                      <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal className="reveal mt-6 rounded-2xl border border-ember/30 bg-ember/5 p-6">
              <p className="font-display text-lg font-extrabold">Emergency?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Burst pipe, power loss, storm damage or a blocked entry — call the dispatch line and
                mark your ticket as Emergency. Crews roll in under 60 minutes.
              </p>
              <Link to="/request" className="mt-4 inline-block text-sm font-semibold text-ember hover:underline">
                Open the work order form →
              </Link>
            </div>
          </div>

          <div data-reveal data-reveal-delay="120" className="reveal lg:col-span-7">
            <div className="overflow-hidden rounded-3xl bg-midnight p-1">
              <div className="rounded-[22px] bg-ink/60 p-1">
                <WorkOrderForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
