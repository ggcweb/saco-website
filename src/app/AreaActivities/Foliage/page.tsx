"use client"

import * as React from "react"
import { type StaticImageData } from "next/image";
import { MultiImageSlider } from "~/app/_components/multiImageCar";
import foliage from "~/static/Pictures/foliage/foliage.gif"
import cathedral from "~/static/Pictures/foliage/CATHEDRALLEDGE.jpg"
import kanc from "~/static/Pictures/foliage/fullsizerender.jpg"
import dianas from "~/static/Pictures/foliage/tn.jpg"
import crawford from "~/static/Pictures/foliage/FRANK.jpg"
import mtWash from "~/static/Pictures/foliage/img_0350.jpg"
import frank from "~/static/Pictures/foliage/fullsizerender_000.jpg"

type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};

export default function Foliage() {
  const trails: cardData[] = [
    { name: "Foliage", link: "", picture: foliage },
    { name: "Diana's Baths", link: "", picture: dianas },
    { name: "Kancamagus Highway", link: "", picture: kanc },
    { name: "Mount Washington", link: "", picture: mtWash },
    { name: "Franconia Notch", link: "", picture: frank },
    { name: "Cathedral Ledge", link: "", picture: cathedral },
    { name: "Crawford Notch", link: "", picture: crawford },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            New England Foliage
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Witness the brilliant crimsons and golds of fall
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-12">

            <div className="text-center max-w-3xl">
              <h2 className="text-2xl font-display font-semibold text-ocean-deep mb-4">
                Spectacular Autumn Views
              </h2>
              <p className="text-lg text-muted-foreground">
                New Hampshire is one of the best places in the world to witness the seasonal transformation.
                From the Kancamagus Highway to Crawford Notch, the White Mountains come alive with color.
              </p>
            </div>

            <div className="w-full">
              <MultiImageSlider
                data={trails}
                backColor={"white"}
                cardColor={"white"}
                textColor={"black"}
                link={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
