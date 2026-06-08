"use client";

import { useRef, useState } from "react";
import { Bike, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Priority-list capture. The two CTAs both reveal the same inline email field
 * (and focus it). Submitting POSTs to /api/subscribe and shows a success state
 * without requiring a real backend.
 */
export function PriorityForm() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function reveal() {
    setExpanded(true);
    // focus after the field has mounted
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      inputRef.current?.focus();
      return;
    }
    setError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) throw new Error("Subscription failed");
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 rounded-xl border border-velovia-pink/30 bg-velovia-pink/5 px-5 py-4"
        role="status"
      >
        <CheckCircle2 className="h-6 w-6 shrink-0 text-velovia-pink" />
        <p className="text-sm font-medium text-velovia-ink">
          You&apos;re on the list. We&apos;ll be in touch soon. ✓
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={reveal}
        className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-velovia-pink px-6 py-3.5 text-xs font-semibold uppercase tracking-label text-white shadow-md transition-colors duration-200 hover:bg-velovia-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velovia-pink focus-visible:ring-offset-2 focus-visible:ring-offset-velovia-cream"
      >
        <Bike className="h-4 w-4" strokeWidth={2} />
        Join the Priority List
      </button>

      <button
        type="button"
        onClick={reveal}
        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-velovia-ink/20 bg-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-label text-velovia-ink transition-colors duration-200 hover:border-velovia-ink/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velovia-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-velovia-cream"
      >
        Be the First to Know
        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      {expanded && (
        <form onSubmit={handleSubmit} noValidate className="mt-1">
          <label htmlFor="priority-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              ref={inputRef}
              id="priority-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              disabled={status === "submitting"}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              aria-invalid={status === "error"}
              aria-describedby={error ? "priority-email-error" : undefined}
              className="min-w-0 flex-1 rounded-xl border border-velovia-ink/15 bg-white px-4 py-3 text-sm text-velovia-ink placeholder:text-velovia-gray/50 focus:border-velovia-pink focus:outline-none focus:ring-2 focus:ring-velovia-pink/30 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-velovia-pink px-5 py-3 text-xs font-semibold uppercase tracking-label text-white transition-colors duration-200 hover:bg-velovia-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velovia-pink focus-visible:ring-offset-2 focus-visible:ring-offset-velovia-cream disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                "Notify Me"
              )}
            </button>
          </div>
          {error && (
            <p
              id="priority-email-error"
              className="mt-2 text-xs font-medium text-velovia-pink-dark"
            >
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
