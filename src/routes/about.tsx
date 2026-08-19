import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";

import heroCrew from "@/assets/hero-crew.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import { Counter, PageHero, useReveal } from "@/components/site/primitives";
import { LAYERS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vertex Property Maintenance Inc. — Our Story & Standards" },
      {
        name: "description",
        content:
          "Founded in 2003, Vertex Property Maintenance Inc. runs 140 in-house tradespeople across ten disciplines with 24/7 dispatch and documented close-out on every job.",
      },
      { property: "og:title", content: "About Vertex Property Maintenance Inc." },
      {
        property: "og:description",
        content:
          "Licensed, bonded and insured. Our own crews, our own standards, one accountable partner for your buildings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, t: "Accountability", d: "One contract, one coordinator, one signature on the close-out. Nobody points at a subcontractor." },
  { icon: Award, t: "Craft", d: "Licensed tradespeople on payroll, trained to a written standard and reviewed on every job." },
  { icon: HeartHandshake, t: "Straight pricing", d: "Scoped estimates, no change-order games, and invoices you can hand to an auditor." },
  { icon: Leaf, t: "Stewardship", d: "Preventive programs and efficient equipment that lower spend and extend building life." },
];

const TEAM = [
  { img: team1, name: "Maria Vance", role: "President & Founder" },
  { img: team2, name: "Renee Okafor", role: "Director of Operations" },
  { img: team3, name: "Rue Jacob", role: "Head of Trades & Safety" },
];

const TIMELINE = [
  {
    y: "2003",
    t: "Where It Started",
    d: "Vertex began with services and a simple goal: deliver dependable maintenance without the runaround."
  },
  {
    y: "2009",
    t: "Building Our Own Team",
    d: "We brought core trades in-house, expanding our capabilities across electrical, HVAC, carpentry, and general repairs."
  },
  {
    y: "2015",
    t: "Maintenance, Around the Clock",
    d: "Our 24/7 dispatch operation launched, giving property teams a real person to call when something could not wait."
  },
  {
    y: "2020",
    t: "More Than Maintenance",
    d: "We expanded into commercial landscaping, tree removal, and seasonal snow services to keep properties covered year-round."
  },
  {
    y: "2026",
    t: "Built for Property Managers",
    d: "Today, our growing network supports 1,800+ properties with 140+ skilled tradespeople and thousands of work orders completed each year."
  },
];

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We are Vertex Property"
        accent="Maintenance Inc."
        lead="Twenty-two years of keeping other people's buildings running — built on our own crews, our own standards and a phone that someone always answers."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-12">
          <div data-reveal className="reveal md:col-span-6">
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
              The company, layer by layer.
            </h2>
            <div className="mt-10 space-y-8">
              {LAYERS.map((l) => (
                <div key={l.n} className="border-l-2 border-ember/30 pl-6 transition-colors duration-500 hover:border-ember">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {l.n} · {l.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-reveal-delay="120" className="reveal md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroCrew}
                alt="Vertex Property Maintenance crew"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { v: 22, s: "+", k: "Years" },
                { v: 140, s: "", k: "Tradespeople" },
                { v: 11, s: "", k: "Trades" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <p className="font-display text-3xl font-black text-ember">
                    <Counter to={s.v} suffix={s.s} />
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-midnight py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 data-reveal className="reveal font-display text-3xl font-black md:text-5xl">
            What we hold ourselves to.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.t}
                data-reveal
                data-reveal-delay={String(i * 90)}
                className="reveal group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50"
              >
                <v.icon className="h-7 w-7 text-ember transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-5 font-display text-lg font-extrabold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 data-reveal className="reveal font-display text-3xl font-black md:text-5xl">
            How we got here.
          </h2>
          <ol className="mt-14 grid gap-6 md:grid-cols-5">
            {TIMELINE.map((t, i) => (
              <li
                key={t.y}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="reveal relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="font-display text-2xl font-black text-ember">{t.y}</span>
                <h3 className="mt-3 font-display text-base font-extrabold">{t.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      
<section className="border-t border-border bg-muted py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div data-reveal className="reveal mt-16 text-center">
      <Link
        to="/contact"
        className="inline-flex rounded-xl bg-ember px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-ember"
      >
        Work with us
      </Link>
    </div>
  </div>
</section>


    </>
  );
}
