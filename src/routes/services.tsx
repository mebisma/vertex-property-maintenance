import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Wrench } from "lucide-react";
import { useState } from "react";

import { PageHero, useReveal } from "@/components/site/primitives";
import { SERVICES as BASE_SERVICES } from "@/lib/site-data";

// Custom extra service added to the list
const APPLIANCE_REPAIR_SERVICE = {
  slug: "appliance-repair",
  title: "Appliance Repair",
  blurb:
    "Expert diagnostics and repair for commercial and residential appliances, including refrigerators, washers, dryers, and ranges.",
  icon: Wrench,
  points: [
    "Commercial & Residential",
    "Fast Diagnostic turnaround",
    "OEM Parts Replacement",
    "Preventative Maintenance",
  ],
};

// Merged array containing original services + new Appliance Repair card
const ALL_SERVICES = [...BASE_SERVICES, APPLIANCE_REPAIR_SERVICE];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Electrical, HVAC, Cleaning & More | Vertex Property Maintenance" },
      {
        name: "description",
        content:
          "Electricians, Appliance, carpentry and lumber, HVAC, handyman, cleaning, tree removal, snow removal, painting and plumbing — all delivered in-house by Vertex Property Maintenance Inc.",
      },
      { property: "og:title", content: "Property Maintenance Services | Vertex" },
      {
        property: "og:description",
        content:
          "Complete property maintenance for commercial and residential properties, with multiple trades and dependable emergency support when you need it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ALL_SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ALL_SERVICES.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Multiple trades."
        accent="One accountable partner."
        lead="No brokering, no mystery subcontractors. Every service below is delivered by Vertex crews, scheduled from one queue and documented the same way."
      />

      {/* COMPACT CAROUSEL SECTION WITH SOLID LIGHT ORANGE CARDS AT 100% OPACITY */}
      <section className="relative overflow-hidden bg-background py-16">
        <div className="relative mx-auto flex h-[480px] max-w-6xl items-center justify-center px-4">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous service"
            className="absolute left-2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur transition-all hover:bg-card hover:scale-110 active:scale-95 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Carousel Track */}
          <div className="relative flex h-full w-full items-center justify-center">
            {ALL_SERVICES.map((s, i) => {
              const offset = i - activeIndex;
              const isActive = offset === 0;
              const isPrev =
                offset === -1 || (activeIndex === 0 && i === ALL_SERVICES.length - 1);
              const isNext =
                offset === 1 || (activeIndex === ALL_SERVICES.length - 1 && i === 0);

              let transformClass = "opacity-0 pointer-events-none scale-75 z-0";

              if (isActive) {
                transformClass =
                  "z-20 scale-100 opacity-100 translate-x-0 shadow-xl";
              } else if (isPrev) {
                transformClass =
                  "z-10 scale-85 opacity-100 -translate-x-[55%] md:-translate-x-[65%] shadow-md cursor-pointer";
              } else if (isNext) {
                transformClass =
                  "z-10 scale-85 opacity-100 translate-x-[55%] md:translate-x-[65%] shadow-md cursor-pointer";
              }

              return (
                <article
                  key={s.slug}
                  id={s.slug}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    if (isNext) handleNext();
                  }}
                  /* Solid light orange background with 100% opacity */
                  className={`absolute top-1/2 -mt-[210px] flex h-[420px] w-full max-w-sm flex-col justify-between rounded-2xl border border-orange-200/80 bg-[#fff7ed] p-6 transition-all duration-500 ease-out md:p-7 ${transformClass}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100">
                        <s.icon className="h-5 w-5 text-ember" />
                      </div>
                      <span className="font-display text-3xl font-black text-muted-foreground/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-xl font-black md:text-2xl">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {s.blurb}
                    </p>

                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-1.5 text-xs">
                          <Check className="h-3.5 w-3.5 shrink-0 text-ember" />
                          <span className="truncate">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      to="/request"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ember hover:underline"
                    >
                      Request {s.title.toLowerCase()} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next service"
            className="absolute right-2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur transition-all hover:bg-card hover:scale-110 active:scale-95 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          {ALL_SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 rounded-full bg-ember"
                  : "w-1.5 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
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