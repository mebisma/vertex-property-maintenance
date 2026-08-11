import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { Counter, PageHero, useReveal } from "@/components/site/primitives";
import { REVIEWS } from "@/lib/site-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Vertex Property Maintenance Inc." },
      {
        name: "description",
        content:
          "Read what property owners, facility managers and asset managers say about working with Vertex Property Maintenance Inc.",
      },
      {
        property: "og:title",
        content: "Client Reviews | Vertex Property Maintenance Inc.",
      },
      {
        property: "og:description",
        content:
          "4.9/5 average rating across 480+ reviews from commercial and residential clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Rated by the people who"
        accent="run the buildings."
        lead="Facility managers, owners and asset managers on what it's actually like to work with us."
      >
        <div
          data-reveal
          data-reveal-delay="220"
          className="reveal mt-12 flex flex-wrap gap-10"
        >
          {[
            { v: 49, k: "Average rating", fmt: true },
            { v: 480, k: "Verified reviews", s: "+" },
            { v: 98, k: "Would recommend", s: "%" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-4xl font-black text-ember">
                {s.fmt ? "4.9" : <Counter to={s.v} suffix={s.s ?? ""} />}
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-white/45">
                {s.k}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              data-reveal
              data-reveal-delay={String((i % 3) * 90)}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ember/0 blur-2xl transition-all duration-700 group-hover:bg-ember/20" />

              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-4 w-4 fill-ember text-ember"
                  />
                ))}
              </div>

              <blockquote className="mt-5 leading-relaxed text-foreground/85">
                "{r.quote}"
              </blockquote>

              <figcaption className="mt-7 border-t border-border pt-5 text-sm">
                <span className="block font-display font-extrabold">
                  {r.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted py-20">
        <div
          data-reveal
          className="reveal mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="font-display text-3xl font-black md:text-5xl">
            Join them.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Start with a single work order and see how the process feels.
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
