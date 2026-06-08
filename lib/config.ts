/**
 * Velovia Premium — site configuration.
 *
 * LAUNCH_DATE drives the countdown timer. It is computed once at module load
 * as "now + LAUNCH_OFFSET_DAYS" so the timer always starts near the mockup's
 * ~90 : 12 : 48 reading regardless of when the site is opened.
 *
 * To pin a real launch instead, replace the body with a fixed date, e.g.:
 *   export const LAUNCH_DATE = new Date("2026-09-06T00:00:00Z");
 */
export const LAUNCH_OFFSET_DAYS = 90;

// Extra hours/minutes so the initial reading matches the reference mockup.
const OFFSET_MS =
  LAUNCH_OFFSET_DAYS * 24 * 60 * 60 * 1000 +
  12 * 60 * 60 * 1000 +
  48 * 60 * 1000;

export const LAUNCH_DATE = new Date(Date.now() + OFFSET_MS);

export const SITE = {
  name: "Velovia Premium",
  tagline: "Premium Cycling Camps in Bulgaria",
} as const;
