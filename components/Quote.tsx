import Image from "next/image";
import { Quote as QuoteIcon } from "lucide-react";

/**
 * Chef testimonial: oversized pink quotation mark, the quote, the signature,
 * and the chef's portrait.
 */
export function Quote() {
  return (
    <figure className="flex items-start gap-4">
      <QuoteIcon
        className="mt-1 h-7 w-7 shrink-0 fill-velovia-pink text-velovia-pink"
        aria-hidden
      />
      <div className="flex-1">
        <blockquote className="text-sm leading-relaxed text-velovia-gray">
          I look forward to welcoming you personally to the Rhodope Mountains.
        </blockquote>
        <figcaption className="mt-2 font-display text-sm italic text-velovia-pink">
          Evgeni Gaydov, Founder of Velovia
        </figcaption>
      </div>
      <Image
        src="/images/ceo-evgeni-gaydov.jpg"
        alt="Evgeni Gaydov, Founder of Velovia"
        width={400}
        height={400}
        className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-velovia-ink/10 transition-transform duration-300 ease-out hover:scale-110"
      />
    </figure>
  );
}
