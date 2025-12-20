import { type Metadata } from "next";
import settlers from "~/static/Pictures/outlet.png"
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Settlers Green Outlet Village - Tax-Free Shopping",
  description: "Shop at Settlers Green Outlet Village in North Conway, NH. Over 60 brands, tax-free shopping, and dining just minutes from Saco River Motor Lodge.",
};

export default function SettlersGreen() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-ocean-deep text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="heading-display mb-4 animate-fade-in-up">
              Settlers Green Outlet Village
            </h1>
            <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Tax-Free Shopping in North Conway, NH
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={settlers}
                alt="Settlers Green Outlet Village"
                className="w-full h-auto"
                placeholder="blur"
              />
            </div>

            <div className="prose prose-lg text-center max-w-2xl">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Settlers Green Outlet Village is a courtyard inspired outlet shopping center in North Conway, New Hampshire.
                Shop more than 60 national brand name outlet stores and specialty shops and save 30%-60% every day on fashions,
                accessories, jewelry, home furnishings, intimate apparel, shoes, children&apos;s fashions and more.
              </p>
            </div>

            <Link
              href="https://www.settlersgreen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary bg-ocean-deep text-white hover:bg-ocean-deep/90 mt-4"
            >
              Visit Official Website
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Featured Stores Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="heading-section text-ocean-deep mb-12">Featured Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Adidas", "Coach", "J.Crew Factory", "Kate Spade New York",
                "Michael Kors", "Nike Factory Store", "Polo Ralph Lauren",
                "Under Armour", "Columbia Factory Store", "Levi's Outlet",
                "Banana Republic Factory", "New Balance Factory Store",
                "Old Navy Outlet", "REI Co-Op", "American Eagle Outfitters"
              ].map((store) => (
                <a
                  key={store}
                  href="https://www.settlersgreen.com/directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[80px] group"
                >
                  <span className="font-semibold text-ocean-deep group-hover:text-red-600 transition-colors text-center">{store}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              Plus over 50 more stores, restaurants and services!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
