import { Mountain } from "lucide-react";

/**
 * Small outlined pill shown top-right over the hero: "RIDE. RECOVER. BELONG."
 * Dark text on a faintly frosted surface so it reads over the bright sky.
 */
export function VeloviaBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-velovia-ink/15 bg-white/40 px-4 py-2 text-[10px] font-semibold tracking-label text-velovia-ink/70 backdrop-blur-sm ${className}`}
    >
      <Mountain className="h-3.5 w-3.5 text-velovia-ink/60" strokeWidth={1.75} />
      RIDE. RECOVER. BELONG.
    </span>
  );
}
