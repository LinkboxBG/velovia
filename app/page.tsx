import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { LaunchPanel } from "@/components/LaunchPanel";

export default function Home() {
  return (
    <main className="grain relative min-h-screen bg-velovia-dark px-3 py-3 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
      {/* Atmospheric radial glow behind the card */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(214,51,108,0.10), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-velovia-cream shadow-2xl ring-1 ring-white/5">
        <Hero />

        {/* Cream panel slightly overlaps the hero; the cards lift out of it
            onto the hero to straddle the seam. */}
        <div className="relative z-10 -mt-8 rounded-t-[2.5rem] bg-velovia-cream">
          <div className="px-6 sm:px-10 lg:px-14">
            <FeatureCards className="relative z-30 -mt-[5.5rem] lg:-mt-24" />
          </div>
          <LaunchPanel />
        </div>
      </div>
    </main>
  );
}
