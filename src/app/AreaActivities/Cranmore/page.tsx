import { type Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Cranmore Mountain Resort - Skiing & Adventures",
  description: "Experience Cranmore Mountain Resort in North Conway. Skiing, tubing, mountain adventures and more, just minutes from Saco River Motor Lodge.",
};

export default function Cranmore() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Cranmore Mountain Resort
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Skiing, Tubing & Mountain Adventure Park
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 container mx-auto max-w-4xl text-center">
        <div className="prose prose-lg mx-auto mb-8">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Cranmore Mountain Resort is located in the heart of North Conway Village.
            Renowned for its family-friendly atmosphere, Cranmore offers skiing and snowboarding in the winter,
            along with a tubing park and mountain adventure park. In the summer, enjoy the mountain coaster,
            scenic chairlift rides, and the aerial adventure park.
          </p>
        </div>

        <Link
          href="https://cranmore.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-primary bg-ocean-deep text-white hover:bg-ocean-deep/90"
        >
          Visit Official Website
          <ExternalLink className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}
