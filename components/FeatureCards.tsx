import {
  Mountain,
  Home,
  UtensilsCrossed,
  Flower2,
  Users,
  type LucideIcon,
} from "lucide-react";

type Card = {
  icon: LucideIcon;
  label: string;
  accent?: boolean;
};

const CARDS: Card[] = [
  { icon: Mountain, label: "Exclusive\nRoutes" },
  { icon: Home, label: "Luxury\nVillas" },
  { icon: UtensilsCrossed, label: "Chef\nExperiences" },
  { icon: Flower2, label: "Recovery &\nWellness", accent: true },
  { icon: Users, label: "Small Private\nGroups", accent: true },
];

/**
 * Row of five glassy feature cards that straddle the seam between the hero
 * and the cream panel. Background imagery can later be dropped into
 * public/images/cards/ — until then each card uses a layered dark gradient.
 */
export function FeatureCards({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 ${className}`}
    >
      {CARDS.map(({ icon: Icon, label, accent }, i) => (
        <div
          key={label}
          className="reveal group relative flex h-28 flex-col justify-between overflow-hidden rounded-xl border border-white/10 p-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 ease-out hover:-translate-y-1 lg:h-32"
          style={{ "--delay": `${600 + i * 90}ms` } as React.CSSProperties}
        >
          {/* Layered atmospheric background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-velovia-ink/85 via-velovia-ink/70 to-velovia-ink/90" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <Icon
            className={`h-6 w-6 lg:h-7 lg:w-7 ${
              accent ? "text-velovia-pink" : "text-white"
            }`}
            strokeWidth={1.5}
          />
          <span className="text-[10px] font-semibold uppercase leading-tight tracking-label text-white/95 lg:text-[11px]">
            {label.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
