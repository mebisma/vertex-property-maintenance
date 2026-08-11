import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { PRIORITIES, WORK_ORDER_TYPES } from "@/lib/site-data";

// Google Apps Script web app URL (must end in /exec)
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpiC9PatvIIxDSs0JlandSOxkawwNQWromabTdzXxAUhFdT_euEgqsp6sUHi0A1qcO/exec";

type Fields = {
  name: string;
  email: string;
  phone: string;
  property: string;
  type: string;
  priority: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  property: "",
  type: "",
  priority: "Routine",
  message: "",
};

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Please enter your name";
  else if (f.name.trim().length > 100) e.name = "Name is too long";
  if (!f.email.trim()) e.email = "Please enter your email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address";
  if (f.phone && f.phone.trim().length > 25) e.phone = "Phone number is too long";
  if (!f.property.trim()) e.property = "Please enter the property address";
  if (!f.type) e.type = "Select a work order type";
  if (!f.message.trim()) e.message = "Describe the work required";
  else if (f.message.trim().length < 12) e.message = "Please add a little more detail";
  else if (f.message.trim().length > 1500) e.message = "Please keep it under 1500 characters";
  return e;
}

const field =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-ember focus:bg-white/[0.07] focus:ring-2 focus:ring-ember/25";

export function WorkOrderForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  const set = (k: keyof Fields) => (v: string) => {
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSending(true);

    const ref = `WO-${Math.floor(100000 + Math.random() * 899999)}`;

    // Map this form's field names to the columns code.gs expects
    const payload = {
      fullName: f.name,
      email: f.email,
      phone: f.phone,
      address: f.property,
      service: f.type,
      priority: f.priority,
      description: `[${ref}] ${f.message}`,
    };

    try {
      // mode: "no-cors" is required because Apps Script web apps don't send
      // CORS headers. We can't read the response, so we optimistically
      // treat a resolved fetch as success — network/DNS errors still throw.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" }, // avoids a CORS preflight
        body: JSON.stringify(payload),
      });

      setSending(false);
      setDone(ref);
      setF(EMPTY);
      toast.success(`Work order ${ref} submitted`, {
        description: "A coordinator will confirm your ticket shortly.",
      });
    } catch (err) {
      console.error("Work order submission failed:", err);
      setSending(false);
      toast.error("Something went wrong submitting your request", {
        description: "Please try again or call us directly.",
      });
    }
  };

  if (done) {
    return (
      <div className="animate-scale-in rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-ember animate-ember-pulse">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="mt-6 font-display text-3xl font-black text-white">Request received</h3>
        <p className="mt-3 text-sm text-white/60">
          Your reference number is{" "}
          <span className="font-display text-lg font-bold text-ember">{done}</span>. A dispatch
          coordinator will confirm scheduling — emergencies are contacted within the hour.
        </p>
        <button
          onClick={() => setDone(null)}
          className="mt-8 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-ember"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            className={field}
            value={f.name}
            maxLength={100}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Jordan Blake"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            className={field}
            type="email"
            value={f.email}
            maxLength={255}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone (optional)" error={errors.phone}>
          <input
            className={field}
            value={f.phone}
            maxLength={25}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="(555) 123-4567"
          />
        </Field>
        <Field label="Property / site address" error={errors.property}>
          <input
            className={field}
            value={f.property}
            maxLength={200}
            onChange={(e) => set("property")(e.target.value)}
            placeholder="1840 Foundry Ave, Building C"
          />
        </Field>

        <Field label="Work order type" error={errors.type}>
          <div className="relative">
            <select
              className={`${field} appearance-none pr-10 [&>option]:bg-ink`}
              value={f.type}
              onChange={(e) => set("type")(e.target.value)}
            >
              <option value="">Select a service…</option>
              {WORK_ORDER_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
              ▾
            </span>
          </div>
        </Field>

        <Field label="Priority">
          <div className="flex flex-wrap gap-2">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => set("priority")(p)}
                className={`rounded-xl border px-2 py-3 text-xs font-semibold transition-all duration-300 ${
                  f.priority === p
                    ? "border-ember bg-ember text-white shadow-ember"
                    : "border-white/12 bg-white/[0.03] text-white/60 hover:border-white/30"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Describe the work required" error={errors.message}>
          <textarea
            className={`${field} min-h-40 resize-y`}
            value={f.message}
            maxLength={1500}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Tell us what needs doing — location on site, access notes, and anything we should bring."
          />
          <p className="mt-2 text-right text-[11px] text-white/35">{f.message.length}/1500</p>
        </Field>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-ember px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-ember disabled:opacity-70 sm:w-auto"
      >
        {sending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
        {sending ? "Submitting…" : "Submit work order"}
      </button>
      <p className="mt-4 text-xs text-white/40">
        Emergency? Call{" "}
        <a href="tel:+18005550142" className="text-ember hover:underline">
          (800) 555-0142
        </a>{" "}
        — our line is staffed 24/7.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-ember">{error}</span> : null}
    </label>
  );
}