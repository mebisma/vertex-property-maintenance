import { createFileRoute, Link } from "@tanstack/react-router";

import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import prop4 from "@/assets/property-4.jpg";
import snow from "@/assets/service-snow.jpg";
import tree from "@/assets/service-tree.jpg";
import { Counter, PageHero, useReveal } from "@/components/site/primitives";
import { PROJECTS } from "@/lib/site-data";

const IMAGES = [prop1, snow, tree, prop2, prop3, prop4];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Maintenance Programs & Case Studies | Vertex" },
      {
        name: "description",
        content:
          "See the maintenance programs Vertex Property Maintenance Inc. runs for residential portfolios, commercial parks, medical offices and student housing.",
      },
      { property: "og:title", content: "Our Work | Vertex Property Maintenance Inc." },
      {
        property: "og:description",
        content:
          "Case studies from 42-building portfolio programs to 640-unit summer turnovers and 1.2M sq ft of winter operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Work we've delivered for"
        accent="other companies."
        lead="Long-running programs, not one-off jobs. Here is what the partnerships actually produced."
      />

      <section className="border-b border-border bg-muted py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { v: 1800, s: "+", k: "Properties served" },
            { v: 24000, s: "", k: "Work orders per year" },
            { v: 42, s: "", k: "Buildings, largest program" },
            { v: 72, s: "h", k: "Storm recovery record" },
          ].map((s, i) => (
            <div key={s.k} data-reveal data-reveal-delay={String(i * 80)} className="reveal">
              <p className="font-display text-4xl font-black text-ember">
                <Counter to={s.v} suffix={s.s} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              data-reveal-delay={String((i % 2) * 80)}
              className="reveal group grid gap-8 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-12"
            >
              <div className={`relative aspect-[16/10] overflow-hidden md:col-span-5 md:aspect-auto ${i % 2 ? "md:order-2" : ""}`}>
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt={`${p.client} project`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-70" />
              </div>
              <div className="p-8 md:col-span-7 md:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.year}
                  </span>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.16em] text-ember">
                  {p.client}
                </p>
                <h2 className="mt-3 font-display text-2xl font-black leading-snug md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.scope}</p>
                <p className="mt-6 border-l-2 border-ember pl-5 font-medium">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted py-20">
        <div data-reveal className="reveal mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-black md:text-5xl">Want a program like these?</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your portfolio and we'll scope a maintenance program around it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-xl bg-ember px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-ember"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
