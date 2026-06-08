import Image from "next/image";
import { VeloviaBadge } from "./VeloviaBadge";

/**
 * Hero — full-bleed mountain road photo with the brand lockup, eyebrow,
 * the oversized Playfair headline and the supporting subtitle.
 *
 * Leaves generous bottom padding so the overlapping FeatureCards row
 * (rendered by the page) tucks against the seam with the cream panel.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero.png"
        alt="Cyclists climbing a mountain road in the Rhodope Mountains at golden hour"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Left-to-right light wash for headline legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/80 via-white/35 to-transparent" />
      {/* Soft top vignette so the top bar reads */}
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/40 to-transparent" />

      <div className="flex min-h-[30rem] flex-col px-6 pt-7 pb-28 sm:px-10 sm:pt-9 lg:min-h-[32rem] lg:px-14 lg:pt-8 lg:pb-28">
        {/* Top bar */}
        <header className="reveal flex items-start justify-between gap-4" style={{ "--delay": "80ms" } as React.CSSProperties}>
          <Image
            src="/images/logo-dark.png"
            alt="Velovia — Premium Cycling Camps"
            width={600}
            height={507}
            priority
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
          <div className="hidden sm:block">
            <VeloviaBadge />
          </div>
        </header>

        {/* Headline block */}
        <div className="mt-8 max-w-2xl sm:mt-10 lg:mt-9">
          <p
            className="reveal text-xs font-semibold uppercase tracking-label text-velovia-pink sm:text-sm"
            style={{ "--delay": "200ms" } as React.CSSProperties}
          >
            Premium Cycling Camps in Bulgaria
          </p>

          <h1
            className="reveal mt-4 font-display text-[2.7rem] leading-[1] font-bold text-velovia-ink sm:text-6xl sm:leading-[0.98] lg:text-[5.5rem]"
            style={{ "--delay": "320ms" } as React.CSSProperties}
          >
            <span className="block">Something</span>
            <span className="block text-velovia-pink italic">Exceptional</span>
            <span className="block">Is Coming</span>
          </h1>

          <p
            className="reveal mt-6 max-w-md text-sm leading-relaxed text-velovia-gray sm:text-base"
            style={{ "--delay": "460ms" } as React.CSSProperties}
          >
            Premium Cycling Experiences in the Rhodope Mountains. Luxury
            accommodation. Professional coaching. Curated routes. Limited
            availability.
          </p>
        </div>
      </div>
    </section>
  );
}
