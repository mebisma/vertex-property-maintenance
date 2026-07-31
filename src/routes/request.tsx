import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, ClipboardList, Headset } from "lucide-react";

import { PageHero, useReveal } from "@/components/site/primitives";
import { WorkOrderForm } from "@/components/site/WorkOrderForm";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Submit a Work Order — Vertex Property Maintenance Inc." },
      {
        name: "description",
        content:
          "Submit a maintenance work order online: choose your service type, set a priority and describe the work. Vertex coordinators confirm scheduling the same business day.",
      },
      { property: "og:title", content: "Submit a Work Order | Vertex Property Maintenance Inc." },
      {
        property: "og:description",
        content:
          "Pick a trade, set the priority, describe the job. Emergency requests are contacted within the hour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RequestPage,
});

const STEPS = [
  { icon: ClipboardList, t: "Pick the trade", d: "Select any service from the dropdown — or 'Other' if you're unsure." },
  { icon: Headset, t: "Describe the work", d: "Tell us the location, access notes and what needs doing." },
  { icon: CalendarClock, t: "Get scheduled", d: "A coordinator confirms your window, usually the same business day." },
];

function RequestPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Work order request"
        title="Submit your"
        accent="work order."
        lead="Two minutes to file, one coordinator to own it. Every request gets a reference number and a documented close-out."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div
                key={s.t}
                data-reveal
                data-reveal-delay={String(i * 90)}
                className="reveal group rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <s.icon className="h-7 w-7 text-ember transition-transform duration-500 group-hover:scale-110" />
                <h2 className="mt-5 font-display text-lg font-extrabold">
                  {String(i + 1).padStart(2, "0")} · {s.t}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="reveal mt-10 overflow-hidden rounded-3xl bg-midnight p-1"
          >
            <div className="rounded-[22px] bg-ink/60 p-1">
              <WorkOrderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
