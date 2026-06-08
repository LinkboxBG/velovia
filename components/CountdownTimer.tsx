"use client";

import { useEffect, useState } from "react";
import { LAUNCH_DATE } from "@/lib/config";

type TimeLeft = { days: number; hours: number; minutes: number };

function computeTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      {/* key on value triggers the subtle flip animation when it changes */}
      <span
        key={text}
        className="digit-animate font-display text-5xl font-bold tabular-nums text-velovia-ink sm:text-6xl lg:text-7xl"
      >
        {text}
      </span>
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-label text-velovia-gray">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-display text-4xl font-bold text-velovia-pink sm:text-5xl lg:text-6xl">
      :
    </span>
  );
}

/**
 * Live countdown to LAUNCH_DATE. Hydration-safe: the time is only computed
 * on the client (after mount), so the server and first client render agree.
 */
export function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(computeTimeLeft());
    const id = setInterval(() => setTime(computeTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Before mount, render a stable placeholder to avoid SSR mismatch.
  if (!mounted) {
    return (
      <div
        className="flex items-start justify-center gap-3 sm:gap-4"
        aria-hidden
      >
        <Unit value={0} label="Days" />
        <Separator />
        <Unit value={0} label="Hours" />
        <Separator />
        <Unit value={0} label="Minutes" />
      </div>
    );
  }

  if (!time) {
    return (
      <p className="font-display text-4xl font-bold text-velovia-pink sm:text-5xl">
        We Are Live
      </p>
    );
  }

  return (
    <div
      className="flex items-start justify-center gap-3 sm:gap-4"
      role="timer"
      aria-label="Time until registrations open"
    >
      <Unit value={time.days} label="Days" />
      <Separator />
      <Unit value={time.hours} label="Hours" />
      <Separator />
      <Unit value={time.minutes} label="Minutes" />
    </div>
  );
}
