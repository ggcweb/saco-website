import { type Metadata } from "next";
import fairLogo from "~/static/Pictures/FairPics/fair-logo.png"
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Fryeburg Fair Lodging - Closest Motel",
  description: "Stay at the closest motel to the Fryeburg Fair. Saco River Motor Lodge offers comfortable lodging just minutes from Maine's largest agricultural fair.",
};

export default function Fair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Fryeburg Fair
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            September 27 - October 25, 2025
          </p>
          <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="font-semibold">Closest Motel to the Fryeburg Fair!</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <Image
              src={fairLogo}
              alt="Fryeburg Fair Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="prose prose-lg max-w-2xl">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Fryeburg Fair has grown to become Maine's largest agricultural fair complete with six days of harness racing,
              a farm museum second to none, the world's largest steer and oxen show and a reputation known throughout North America.
            </p>
          </div>

          <Link
            href="https://www.fryeburgfair.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary bg-ocean-deep text-white hover:bg-ocean-deep/90"
          >
            Visit Official Fair Website
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
