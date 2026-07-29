import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Wrench,
  Wallet,
  ShieldCheck,
  Users,
  ClipboardCheck,
  KeyRound,
  BarChart3,
  Sparkles,
  Quote as QuoteIcon,
  Check,
  Play,
} from "lucide-react";

import hero from "@/assets/hero-building.jpg";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import prop4 from "@/assets/property-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halcyon — Property Management for Modern Portfolios" },
      {
        name: "description",
        content:
          "Halcyon manages residential and commercial properties end-to-end: leasing, maintenance, rent collection, and owner reporting.",
      },
      { property: "og:title", content: "Halcyon — Property Management for Modern Portfolios" },
      {
        property: "og:description",
        content:
          "Full-service property management with a bold, tech-forward approach. Higher occupancy, happier residents, healthier returns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

/* ---------------- Reveal-on-scroll hook ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- Counter animation ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (ents) => {
        if (ents[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-6 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ember font-display text-lg font-black text-white">
            H
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">Halcyon</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {["Services", "Portfolio", "Team", "Pricing", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="transition-colors hover:text-white relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember after:transition-all hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-ember"
        >
          Get a quote
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-ember/30 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-40 md:grid-cols-12 md:pt-48">
        <div className="md:col-span-7">
          <div
            data-reveal
            className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ember-pulse" />
            Since 2003 · Portfolio Care
          </div>

          <h1
            data-reveal
            className="reveal mt-6 font-display text-6xl font-black leading-[0.95] tracking-tight md:text-8xl"
          >
            Property <br />
            management,{" "}
            <span className="text-flame">reimagined</span>.
          </h1>

          <p
            data-reveal
            className="reveal mt-6 max-w-xl text-lg text-white/70"
          >
            We run buildings the way owners wish they could — proactive maintenance,
            resident-first leasing, and month-end reports you'll actually read.
          </p>

          <div data-reveal className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white shadow-ember transition-transform hover:-translate-y-0.5"
            >
              Request a proposal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white/90"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:bg-ember group-hover:border-ember">
                <Play className="h-4 w-4" />
              </span>
              See our portfolio
            </a>
          </div>

          <dl data-reveal className="reveal mt-14 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: "Units managed", v: 2400, s: "+" },
              { k: "Occupancy", v: 98, s: "%" },
              { k: "Owner NPS", v: 72, s: "" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-widest text-white/50">{s.k}</dt>
                <dd className="mt-2 font-display text-4xl font-black text-white">
                  <Counter to={s.v} suffix={s.s} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-lift">
            <img
              src={hero}
              alt="Modern residential tower at dusk"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">Now leasing</p>
                  <p className="mt-1 font-display text-xl font-bold">The Kestrel Residences</p>
                </div>
                <span className="rounded-full bg-ember px-3 py-1 text-xs font-semibold">7 left</span>
              </div>
            </div>
          </div>
          <div className="absolute -left-8 -bottom-8 hidden h-24 w-24 rounded-2xl bg-ember shadow-ember animate-float md:block" />
          <div className="absolute -top-6 -right-6 hidden h-20 w-20 rounded-full border-4 border-white/20 animate-tilt md:block" />
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-y border-white/10 bg-ink/60 py-6">
        <div className="flex overflow-hidden">
          <div className="ticker flex shrink-0 gap-16 pr-16">
            {[
              "Kestrel Group",
              "Aster Holdings",
              "Northwind REIT",
              "Vaulton Capital",
              "Meridian Living",
              "Bayline Trust",
              "Kestrel Group",
              "Aster Holdings",
              "Northwind REIT",
              "Vaulton Capital",
              "Meridian Living",
              "Bayline Trust",
            ].map((n, i) => (
              <span
                key={i}
                className="font-display text-2xl font-extrabold uppercase tracking-widest text-white/40"
              >
                {n} <span className="text-ember">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  {
    icon: KeyRound,
    title: "Leasing & Marketing",
    desc: "Professional photography, syndicated listings, and rigorous tenant screening to fill units fast.",
  },
  {
    icon: Wrench,
    title: "24/7 Maintenance",
    desc: "In-house techs and a vetted vendor network keep response times under 4 hours, day or night.",
  },
  {
    icon: Wallet,
    title: "Rent Collection",
    desc: "Auto-pay, late-fee automation, and direct owner disbursements land by the 10th, every month.",
  },
  {
    icon: BarChart3,
    title: "Owner Reporting",
    desc: "Live dashboards, monthly P&Ls, and year-end tax packets. No spreadsheets required.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Legal",
    desc: "Fair housing, local ordinances, and eviction handling by licensed partners in every market.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspections",
    desc: "Move-in, move-out, and quarterly walk-throughs with photo-documented reports.",
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              What we do
            </p>
            <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
              Six services. <br />
              <span className="text-flame">One flat fee.</span>
            </h2>
          </div>
          <p data-reveal className="reveal max-w-md text-muted-foreground">
            Every plan includes the full stack of property management — no à la carte
            invoices, no upcharges on maintenance markups.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              className="reveal group relative bg-card p-8 transition-colors hover:bg-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ember/10 text-ember transition-all group-hover:bg-ember group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-6xl font-black text-muted/60 transition-colors group-hover:text-ember/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 text-2xl group-hover:text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/70">
                {s.desc}
              </p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition-all group-hover:text-ember group-hover:rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Committed / About band ---------------- */
function About() {
  return (
    <section className="relative overflow-hidden bg-midnight py-28 text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-ember/20 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            Why Halcyon
          </p>
          <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
            Buildings run smoother when someone actually cares.
          </h2>
          <p data-reveal className="reveal mt-6 max-w-lg text-white/70">
            We're not a franchise. Every portfolio gets a named senior manager, a
            dedicated maintenance crew, and quarterly strategy calls with owners.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              "Flat 6% management fee — no maintenance markups",
              "Dedicated senior manager per portfolio",
              "72-hour make-ready turnover guarantee",
              "Annual capex planning built into your fee",
            ].map((l, i) => (
              <li
                key={l}
                data-reveal
                className="reveal flex items-start gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-white/85">{l}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div data-reveal className="reveal overflow-hidden rounded-3xl border border-white/10 shadow-lift">
            <img
              src={prop2}
              alt="Interior of a managed loft"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-3xl border border-white/15 bg-ink/90 p-6 shadow-lift md:block">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-ember" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                23-year track record
              </span>
            </div>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">
              "The most attentive PM we've hired in two decades."
            </p>
            <p className="mt-2 text-xs text-white/60">— M. Alvarado, Vaulton Capital</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */
const portfolio = [
  { img: prop1, name: "Rowan Townhomes", meta: "48 units · Denver, CO", tag: "Residential" },
  { img: prop3, name: "Meridian Towers", meta: "312 units · Chicago, IL", tag: "High-rise" },
  { img: prop4, name: "Hearthstone Estates", meta: "22 homes · Austin, TX", tag: "Single-family" },
  { img: prop2, name: "The Kestrel Lofts", meta: "84 units · Brooklyn, NY", tag: "Mixed-use" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Portfolio
            </p>
            <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
              Properties we run.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 text-sm font-semibold text-ink hover:text-ember md:inline-flex"
          >
            View all 46 properties <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.map((p, i) => (
            <a
              key={p.name}
              href="#contact"
              data-reveal
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={p.img}
                alt={p.name}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                <div>
                  <span className="inline-block rounded-full bg-ember px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-3xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.meta}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition-all group-hover:bg-ember group-hover:border-ember">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
const team = [
  { name: "Nadia Fournier", role: "Head of Operations", img: team1 },
  { name: "Marcus Vale", role: "Director of Maintenance", img: team2 },
  { name: "Priya Suresh", role: "Portfolio Manager", img: team3 },
];

function Team() {
  return (
    <section id="team" className="bg-ink py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            The people
          </p>
          <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
            Real humans, on call.
          </h2>
          <p data-reveal className="reveal mt-4 text-white/70">
            Meet the people who'll actually pick up the phone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={t.img}
                alt={t.name}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <span className="inline-block rounded-full bg-ember px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                  {t.role}
                </span>
                <h3 className="mt-3 text-2xl">{t.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* stats row */}
        <div className="mt-20 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-4">
          {[
            { v: 188, s: "+", k: "Buildings" },
            { v: 27, s: "yrs", k: "In business" },
            { v: 19, s: "", k: "Staff on payroll" },
            { v: 24, s: "/7", k: "Support line" },
          ].map((s, i) => (
            <div key={s.k} data-reveal className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-display text-5xl font-black text-ember">
                <Counter to={s.v} suffix={s.s} />
              </p>
              <p className="mt-2 text-sm text-white/60">{s.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process (Quote request) ---------------- */
function Quote() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div data-reveal className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            How we onboard
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl">Three weeks, from handshake to handoff.</h2>
          <ol className="mt-12 space-y-8">
            {[
              { t: "Discovery", d: "Portfolio walk-through and financial audit." },
              { t: "Transition", d: "Tenant introductions, vendor migration, systems setup." },
              { t: "Operate", d: "Day one of managed operations — you get your evenings back." },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-6 border-t border-border pt-6">
                <span className="font-display text-3xl font-black text-ember">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{s.t}</h3>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div
          id="contact"
          data-reveal
          className="reveal relative rounded-3xl border border-border bg-card p-10 shadow-lift"
        >
          <div className="absolute -top-6 -right-6 grid h-16 w-16 place-items-center rounded-2xl bg-ember text-white shadow-ember animate-float">
            <Building2 className="h-7 w-7" />
          </div>
          <h3 className="text-3xl">Request a proposal</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll respond within one business day with pricing and next steps.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <Field label="Full name" placeholder="Jane Doe" />
            <Field label="Email" placeholder="jane@company.com" type="email" />
            <Field label="Company" placeholder="Vaulton Capital" />
            <Field label="Units" placeholder="e.g. 42" />
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about the portfolio..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ember"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-sm font-semibold text-white shadow-ember transition-transform hover:-translate-y-0.5 sm:col-span-2"
            >
              Send proposal request
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ember"
      />
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
const quotes = [
  {
    body: "Turnover time dropped from 3 weeks to 6 days after Halcyon took over. Our cap rate finally reflects the pro-forma.",
    name: "Elena Marsh",
    role: "Owner, Marsh Holdings — 84 units",
  },
  {
    body: "The monthly reports are so clear my accountant asked who built them. We've since moved our second building over.",
    name: "David Okafor",
    role: "Managing Partner, Northwind REIT",
  },
  {
    body: "A resident had a leak at 2am — someone was there by 3:15. I've never had a PM move that fast.",
    name: "Sara Lindqvist",
    role: "Investor, Aster Holdings",
  },
];

function Testimonials() {
  return (
    <section className="bg-midnight py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Owners talk
            </p>
            <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
              A few nice things they said.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              data-reveal
              className="reveal group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-ember"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <QuoteIcon className="h-8 w-8 text-ember transition-colors group-hover:text-white" />
              <blockquote className="mt-6 text-lg leading-relaxed text-white/90">
                "{q.body}"
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-4">
                <p className="font-semibold">{q.name}</p>
                <p className="text-sm text-white/60 group-hover:text-white/80">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
const plans = [
  {
    name: "Starter",
    price: "6%",
    unit: "/ collected rent",
    for: "1–10 units",
    perks: ["Leasing & marketing", "Maintenance coordination", "Monthly reports", "Owner portal"],
  },
  {
    name: "Portfolio",
    price: "5%",
    unit: "/ collected rent",
    for: "11–50 units",
    featured: true,
    perks: [
      "Everything in Starter",
      "Dedicated senior manager",
      "Quarterly capex reviews",
      "Priority 24/7 line",
      "Vendor markup rebates",
    ],
  },
  {
    name: "Institutional",
    price: "Custom",
    unit: "",
    for: "50+ units",
    perks: [
      "Everything in Portfolio",
      "On-site maintenance team",
      "Custom reporting stack",
      "Named CS & ops lead",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            Pricing
          </p>
          <h2 data-reveal className="reveal mt-3 text-5xl md:text-6xl">
            Flat fees. <span className="text-flame">Zero surprises.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              data-reveal
              className={`reveal group relative flex flex-col rounded-3xl border p-8 transition-all ${
                p.featured
                  ? "border-ember bg-ink text-white shadow-ember md:-translate-y-4"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-lift"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <h3 className={`text-2xl ${p.featured ? "text-white" : ""}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>
                {p.for}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className={`font-display text-6xl font-black ${p.featured ? "text-ember" : "text-ink"}`}>
                  {p.price}
                </span>
                <span className={`mb-2 text-sm ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  {p.unit}
                </span>
              </div>
              <ul className={`mt-8 space-y-3 text-sm ${p.featured ? "text-white/85" : ""}`}>
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-ember text-white"
                    : "border border-ink text-ink hover:bg-ink hover:text-white"
                }`}
              >
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / Footer ---------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div data-reveal className="reveal text-center">
          <Users className="mx-auto h-8 w-8 text-ember" />
          <h2 className="mt-6 font-display text-6xl font-black leading-[0.95] md:text-8xl">
            Let's run your <br />
            <span className="text-flame">building better.</span>
          </h2>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold shadow-ember transition-transform hover:-translate-y-0.5"
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ember font-display text-lg font-black">
                H
              </span>
              <span className="font-display text-lg font-extrabold">Halcyon</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Full-service property management for owners who care about their buildings —
              and their evenings.
            </p>
          </div>
          <FooterCol
            title="Company"
            links={["About", "Team", "Careers", "Press"]}
          />
          <FooterCol
            title="Services"
            links={["Leasing", "Maintenance", "Reporting", "Compliance"]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Halcyon Property Group. All rights reserved.</p>
          <p>Licensed real estate broker in CA · NY · TX · IL · CO</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-ember">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Page ---------------- */
function Landing() {
  useReveal();
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Quote />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
