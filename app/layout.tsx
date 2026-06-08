import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velovia.bg"),
  title: "Velovia Premium — Something Exceptional Is Coming",
  description:
    "Premium cycling experiences in the Rhodope Mountains, Bulgaria. Luxury accommodation, professional coaching, curated routes. Join the priority list.",
  openGraph: {
    title: "Velovia Premium — Cycling Camps",
    description:
      "Premium cycling experiences in the Rhodope Mountains. Ride. Recover. Belong.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
