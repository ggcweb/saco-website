"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Waves, Flame, TreePine, Users, Snowflake, Dog, Wifi, Car } from "lucide-react"
import P1 from "~/static/Pictures/amenities/bbq-area.jpg"
import P2 from "~/static/Pictures/amenities/picnic.jpg"
import P3 from "~/static/Pictures/amenities/playground-1.jpg"
import P4 from "~/static/Pictures/amenities/pool-new.jpg"

const amenities = [
  {
    icon: Waves,
    title: "Saco River Access",
    description: "Swim, canoe, kayak, or tube down the beautiful Saco River located right next to us"
  },
  {
    icon: TreePine,
    title: "Large Pool",
    description: "One of the largest pools in the Mount Washington Valley for your enjoyment"
  },
  {
    icon: Flame,
    title: "Fire Pits & Grills",
    description: "BBQ stations and fire pits for roasting marshmallows and family cookouts"
  },
  {
    icon: Users,
    title: "Playground",
    description: "Full playground for children plus soccer field for outdoor fun"
  },
  {
    icon: Snowflake,
    title: "Ski Packages",
    description: "Special deals with Attitash, Wildcat, Cranmore and Shawnee Peak"
  },
  {
    icon: Dog,
    title: "Pet Friendly",
    description: "Dogs welcome! Additional cleaning fees apply - ask for details"
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed wireless internet access throughout the property"
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Convenient parking right at your door, no additional fees"
  },
]

const images = [
  { src: P4, alt: "Large outdoor swimming pool at Saco River Motor Lodge - one of the biggest pools in Mt Washington Valley", title: "Swimming Pool" },
  { src: P1, alt: "BBQ grilling station at Saco River Motor Lodge with charcoal grills for guest use in Conway NH", title: "BBQ Area" },
  { src: P2, alt: "Spacious picnic area with tables at Saco River Motor Lodge for family gatherings and outdoor dining", title: "Picnic Area" },
  { src: P3, alt: "Children's playground at Saco River Motor Lodge with swings and play equipment in Conway NH", title: "Playground" },
]

export default function Amenities() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep">
        <div className="container mx-auto max-w-6xl px-4 text-center text-white">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Our Amenities
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Our family-friendly grounds feature everything you need for a relaxing New Hampshire getaway
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.title}
                className="group flex flex-col items-center p-6 rounded-2xl bg-secondary/50 text-center card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ocean-deep to-ocean-light text-white transition-transform duration-300 group-hover:scale-110">
                  <amenity.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ocean-deep mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-ocean-deep text-center mb-12">
            Explore Our Grounds
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <article
                key={image.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="img-zoom aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold">{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
            Ready to Experience Our Amenities?
          </h2>
          <p className="text-white/90 mb-8">
            Book your stay today and enjoy everything the Saco River Motor Lodge has to offer
          </p>
          <Link
            href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
            className="btn-primary bg-white text-ocean-deep hover:bg-white/90 inline-block"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
