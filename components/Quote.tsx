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
          Velovia is more than a camp. It&apos;s a journey of performance,
          connection &amp; transformation.
        </blockquote>
        <figcaption className="mt-2 font-display text-sm italic text-velovia-pink">
          Chef Ivaylo Petkov
        </figcaption>
      </div>
      <Image
        src="/images/chef-ivaylo.jpg"
        alt="Chef Ivaylo Petkov"
        width={593}
        height={510}
        className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-velovia-ink/10"
      />
    </figure>
  );
}
