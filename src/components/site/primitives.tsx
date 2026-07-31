import { useEffect, useRef, useState, type ReactNode } from "react";

/* Reveal-on-scroll: add data-reveal + className="reveal" to any element */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(() => el.classList.add("reveal-in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (ents) => {
        if (!ents[0].isIntersecting) return;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1400);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
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

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light
          ? "border-white/15 bg-white/5 text-white/70"
          : "border-border bg-muted text-muted-foreground"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ember-pulse" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full bg-ember/25 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44">
        <div data-reveal className="reveal">
          <Eyebrow light>{eyebrow}</Eyebrow>
        </div>
        <h1
          data-reveal
          data-reveal-delay="80"
          className="reveal mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl"
        >
          {title} {accent ? <span className="text-flame">{accent}</span> : null}
        </h1>
        {lead ? (
          <p data-reveal data-reveal-delay="160" className="reveal mt-6 max-w-2xl text-lg text-white/65">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
