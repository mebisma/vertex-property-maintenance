import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, FileCheck2, PhoneCall, ShieldCheck } from "lucide-react";

import heroCrew from "@/assets/hero-crew.jpg";
import snow from "@/assets/service-snow.jpg";
import tree from "@/assets/service-tree.jpg";
import electric from "@/assets/service-electric.jpg";
import { Counter, Eyebrow, useReveal } from "@/components/site/primitives";
import { LAYERS, PROJECTS, REVIEWS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertex Property Maintenance Inc. — Every Trade, One Contract" },
      {
        name: "description",
        content:
          "Vertex Property Maintenance Inc. provides electrical, carpentry, HVAC, handyman, cleaning, tree removal and snow removal services for commercial and residential properties.",
      },
      { property: "og:title", content: "Vertex Property Maintenance Inc. — Every Trade, One Contract" },
      {
        property: "og:description",
        content:
          "Licensed, bonded and insured property maintenance crews with 24/7 dispatch. Submit a work order online in under two minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <Layers />
      <ServicesStrip />
      <Process />
      <ProofStrip />
      <WorkTeaser />
      <ReviewTeaser />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-[560px] w-[560px] rounded-full bg-ember/25 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-28 pt-36 md:grid-cols-12 md:pt-44">
        <div className="md:col-span-7">
          <div data-reveal className="reveal">
            <Eyebrow light>Est. 2003 · Licensed · Bonded · Insured</Eyebrow>
          </div>
          <h1
            data-reveal
            data-reveal-delay="80"
            className="reveal mt-6 font-display text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-8xl"
          >
            Every trade.
            <br />
            One <span className="text-flame">contract</span>.
          </h1>
          <p data-reveal data-reveal-delay="160" className="reveal mt-6 max-w-xl text-lg text-white/65">
            Vertex Property Maintenance Inc. keeps buildings running — electrical, carpentry,
            HVAC, handyman, cleaning, tree and snow removal — dispatched from one queue and
            invoiced on one statement.
          </p>

          <div data-reveal data-reveal-delay="240" className="reveal mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/request"
              className="group inline-flex items-center gap-3 rounded-xl bg-ember px-7 py-4 text-sm font-semibold text-white shadow-ember transition-transform duration-300 hover:-translate-y-0.5"
            >
              Submit a work order
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-ember hover:text-white"
            >
              Explore services
            </Link>
          </div>

          <dl data-reveal data-reveal-delay="320" className="reveal mt-14 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: "Properties served", v: 1800, s: "+" },
              { k: "Work orders / yr", v: 24000, s: "" },
              { k: "Client retention", v: 98, s: "%" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[11px] uppercase tracking-widest text-white/45">{s.k}</dt>
                <dd className="mt-2 font-display text-3xl font-black md:text-4xl">
                  <Counter to={s.v} suffix={s.s} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal data-reveal-delay="180" className="reveal relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-lift">
            <img
              src={heroCrew}
              alt="Vertex maintenance crew outside a commercial building at dusk"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Live dispatch</p>
              <p className="mt-2 font-display text-2xl font-black">
                <Counter to={4} suffix="h" /> average response
              </p>
              <p className="mt-1 text-xs text-white/60">Emergency crews rolling in under 60 minutes.</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-6 top-10 hidden animate-float rounded-2xl border border-white/15 bg-ink/80 px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Trades in-house</p>
            <p className="font-display text-3xl font-black text-ember">10</p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-ink/60 py-4">
        <div className="flex w-max ticker gap-12 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-white/35">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s.title}
              <span className="h-1 w-1 rounded-full bg-ember" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Layers() {
  return (
    <section className="relative bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="reveal max-w-2xl">
          <Eyebrow>Layer by layer</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            What Vertex Property Maintenance Inc. is <span className="text-ember">all about</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Four layers, stacked. Scroll through and the whole company comes into focus.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {LAYERS.map((l, i) => (
            <article
              key={l.n}
              data-reveal
              data-reveal-delay={String(i * 90)}
              className="reveal group sticky rounded-3xl border border-border bg-card p-8 shadow-lift transition-all duration-500 hover:-translate-y-1 md:p-12"
              style={{ top: `${96 + i * 18}px` }}
            >
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-2">
                  <span className="font-display text-6xl font-black text-ember/25 transition-colors duration-500 group-hover:text-ember/60">
                    {l.n}
                  </span>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {l.label}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl font-black md:text-4xl">{l.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
                <div className="md:col-span-3">
                  <div className="rounded-2xl border border-border bg-muted p-6">
                    <p className="font-display text-4xl font-black text-ember">
                      <Counter to={l.stat.v} suffix={l.stat.s} />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {l.stat.k}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesStrip() {
  return (
    <section className="relative overflow-hidden bg-midnight py-28 text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal className="reveal max-w-xl">
            <Eyebrow light>Services</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
              The full trade stack.
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-ember"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              data-reveal
              data-reveal-delay={String(i * 70)}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/0 blur-2xl transition-all duration-700 group-hover:bg-ember/30" />
              <s.icon className="h-7 w-7 text-ember transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-5 font-display text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { img: electric, label: "Electrical" },
            { img: tree, label: "Tree removal" },
            { img: snow, label: "Snow removal" },
          ].map((m, i) => (
            <div
              key={m.label}
              data-reveal
              data-reveal-delay={String(i * 80)}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={m.img}
                alt={`${m.label} service`}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute bottom-5 left-5 font-display text-lg font-extrabold">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: PhoneCall, t: "Submit", d: "Send a work order online or call dispatch. Pick the trade, describe the job." },
    { icon: Clock, t: "Dispatch", d: "A named coordinator schedules a crew and confirms the window with you." },
    { icon: ShieldCheck, t: "Execute", d: "Licensed tradespeople complete the work with before-and-after photos." },
    { icon: FileCheck2, t: "Close out", d: "Documented sign-off, one invoice, and a log your auditors accept." },
  ];
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="reveal max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From request to closed in four moves.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.t}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="reveal group relative rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="font-display text-xs font-black tracking-widest text-muted-foreground">
                0{i + 1}
              </span>
              <s.icon className="mt-5 h-7 w-7 text-ember transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
              <h3 className="mt-4 font-display text-xl font-extrabold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-border bg-muted py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {[
          { v: 22, s: "+", k: "Years in business" },
          { v: 140, s: "", k: "Tradespeople on staff" },
          { v: 24, s: "/7", k: "Emergency dispatch" },
          { v: 96, s: "%", k: "First-visit fix rate" },
        ].map((s, i) => (
          <div key={s.k} data-reveal data-reveal-delay={String(i * 80)} className="reveal">
            <p className="font-display text-4xl font-black text-ember md:text-5xl">
              <Counter to={s.v} suffix={s.s} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkTeaser() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal className="reveal max-w-xl">
            <Eyebrow>Our work</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
              Programs we run for other companies.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ember"
          >
            See all case studies
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <article
              key={p.title}
              data-reveal
              data-reveal-delay={String(i * 90)}
              className="reveal group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.year}</p>
              <h3 className="mt-4 font-display text-xl font-extrabold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.scope}</p>
              <p className="mt-5 border-l-2 border-ember pl-4 text-sm font-medium">{p.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewTeaser() {
  return (
    <section className="overflow-hidden bg-midnight py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="reveal">
          <Eyebrow light>Reviews</Eyebrow>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <figure
              key={r.name}
              data-reveal
              data-reveal-delay={String(i * 90)}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40"
            >
              <div className="text-ember">{"★".repeat(r.rating)}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/75">"{r.quote}"</blockquote>
              <figcaption className="mt-6 text-xs text-white/45">
                <span className="block font-semibold text-white">{r.name}</span>
                {r.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-3xl bg-ember px-8 py-16 text-center text-white md:px-16"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <h2 className="relative font-display text-4xl font-black leading-tight md:text-6xl">
            Something broken? Start the ticket.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/85">
            Pick a trade, describe the work, and a coordinator confirms your schedule — usually the
            same business day.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/request"
              className="rounded-xl bg-ink px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Submit a work order
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/40 px-8 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
