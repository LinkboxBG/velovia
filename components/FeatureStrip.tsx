import {
  UserRound,
  ChefHat,
  BedDouble,
  MountainSnow,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; label: string };

const ITEMS: Item[] = [
  { icon: UserRound, label: "Professional\nCycling Coaches" },
  { icon: ChefHat, label: "Chef Prepared Meals\nby Chef Ivaylo Petkov" },
  { icon: BedDouble, label: "Luxury\nAccommodation" },
  { icon: MountainSnow, label: "Carefully Selected\nMountain Routes" },
];

/**
 * Bottom strip of the cream panel — four icon + two-line label pairs.
 */
export function FeatureStrip() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
      {ITEMS.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-3">
          <Icon
            className="h-7 w-7 shrink-0 text-velovia-ink/70"
            strokeWidth={1.5}
          />
          <span className="text-[10px] font-semibold uppercase leading-tight tracking-label text-velovia-gray">
            {label.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
