import { CheckCircle2 } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { PriorityForm } from "./PriorityForm";
import { Quote } from "./Quote";
import { FeatureStrip } from "./FeatureStrip";

const CHECKLIST = [
  "Early Access Registration",
  "2026 Camp Calendar",
  "Exclusive Founder Offers",
  "Limited Rider Capacity",
  "Premium Member Benefits",
];

function ColumnHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-xs font-semibold uppercase tracking-label text-velovia-pink ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * Cream panel: three columns (checklist / countdown / CTA + quote) above a
 * divider and the feature strip.
 */
export function LaunchPanel() {
  return (
    <div className="px-6 pb-8 pt-6 sm:px-10 lg:px-14 lg:pb-9">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-[1fr_1.15fr_1.1fr] lg:gap-x-12">
        {/* Column A — Launching soon checklist */}
        <div>
          <ColumnHeading>Launching Soon</ColumnHeading>
          <ul className="mt-5 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-velovia-pink" />
                <span className="text-sm text-velovia-gray">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column B — Countdown */}
        <div className="flex flex-col items-center lg:border-x lg:border-velovia-ink/10 lg:px-12">
          <ColumnHeading className="text-center">
            Opening Registrations In
          </ColumnHeading>
          <div className="mt-6 w-full">
            <CountdownTimer />
          </div>
        </div>

        {/* Column C — CTA + quote */}
        <div className="flex flex-col gap-6">
          <PriorityForm />
          <div className="border-t border-velovia-ink/10 pt-5">
            <Quote />
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="mt-8 border-t border-velovia-ink/10 pt-6">
        <FeatureStrip />
      </div>
    </div>
  );
}
