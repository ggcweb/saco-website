"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tv, Wind, Coffee, Refrigerator, Wifi, Check, Dog } from "lucide-react"

// Images
import DA from "~/static/Pictures/Room-Pictures/double-angle.jpg"
import DB from "~/static/Pictures/Room-Pictures/double.jpeg"
import DC from "~/static/Pictures/Room-Pictures/double-angle-2.jpg"
import KA from "~/static/Pictures/Room-Pictures/king-room.jpg"
import KB from "~/static/Pictures/Room-Pictures/single-angle.jpg"
import SA from "~/static/Pictures/Room-Pictures/suite-living-room.jpg"
import SB from "~/static/Pictures/Room-Pictures/suite-big-picture.jpg"
import SC from "~/static/Pictures/Room-Pictures/suite-kitchen-2.jpg"
import SD from "~/static/Pictures/Room-Pictures/suite-kitchen.jpg"

const roomFeatures = [
  { icon: Tv, label: "Flat Screen TV with Cable" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Refrigerator, label: "Mini Fridge & Microwave" },
  { icon: Wifi, label: "Free WiFi" },
]

const suiteFeatures = [
  "2 or 3 bedrooms with queen beds",
  "Queen size pull out couch",
  "Full kitchen with stovetop & toaster oven",
  "Full size fridge with freezer",
  "Radiant floor heat in winter",
  "Private deck overlooking 50 acres of woodland",
]

export default function RoomAndSuites() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep">
        <div className="container mx-auto max-w-6xl px-4 text-center text-white">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Rooms & Suites
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Comfortable accommodations designed with your family in mind
          </p>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Double & King Rooms */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Double Rooms */}
            <div className="animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 img-zoom">
                <Image
                  src={DA}
                  alt="Double Room at Saco River Motor Lodge with two full beds"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-deep/90 to-transparent">
                  <h3 className="text-2xl font-display font-semibold text-white">Double Rooms</h3>
                  <p className="text-white/80">2 Full Beds</p>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                <Image src={DB} alt="Double room alternate view" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                <Image src={DC} alt="Double room bathroom" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              </div>
            </div>

            {/* King Rooms */}
            <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 img-zoom">
                <Image
                  src={KA}
                  alt="King Room at Saco River Motor Lodge with king bed"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-deep/90 to-transparent">
                  <h3 className="text-2xl font-display font-semibold text-white">King Rooms</h3>
                  <p className="text-white/80">1 King Bed</p>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                <Image src={KB} alt="King room alternate view" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Room Features */}
          <div className="bg-secondary/50 rounded-2xl p-8 mb-16">
            <h3 className="font-display text-xl font-semibold text-ocean-deep mb-6 text-center">
              All Rooms Include
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {roomFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-ocean-deep" />
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto">
              All king rooms and double bedrooms are equipped with either 1 king bed or 2 full beds, flat screen TVs with cable, microwaves, mini-fridges, coffee makers, air conditioners, and bathroom with large showers.
            </p>
          </div>
        </div>
      </section>

      {/* Suites Section */}
      <section className="section-padding bg-ocean-deep text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="heading-section text-white mb-4">
              Luxury Suites
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Perfect for family gatherings, retreats, and business travelers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[SA, SB, SC, SD].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl img-zoom animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={img}
                  alt={`Suite view ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Suite Features</h3>
              <ul className="space-y-3">
                {suiteFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-white/90 leading-relaxed">
                Our Saco Suites are located away from the lodge in a separate new building with its own small deck looking onto 50 acres of woodland. The suites have either 2 or 3 bedrooms each with a queen size bed, a sitting area with a queen size pull out couch or a daybed, cable TV, and free high speed wireless internet access.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                The kitchen area comprises a double sink, full size fridge with freezer, microwave, toaster oven, cook top and coffeemaker. All rooms in the suite have air conditioners and radiant floor heat during the winter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-ocean-deep text-center mb-12">
            Policies & Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* General Policies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-xl font-semibold text-ocean-deep mb-6">
                Reservation Policies
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  All reservations must be made with a credit card
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Cancellations must be made by phone to a staff member
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  No cancellation after 48 hours for rooms and 7 days for suites
                </li>
                <li className="flex gap-3 font-semibold text-ocean-deep">
                  <span className="text-red-500 font-bold">•</span>
                  No cancellation allowed during Fryeburg Fair week
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Check in: 4 PM - 9 PM | Check out: 10 AM (Rooms) / 10:30 AM (Suites)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  All rooms are non-smoking
                </li>
              </ul>
            </div>

            {/* Pet Policy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Dog className="w-6 h-6 text-ocean-deep" />
                <h3 className="font-display text-xl font-semibold text-ocean-deep">
                  Pet Policy
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Maximum of 2 dogs per room/suite
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Cleaning fee: <strong>$25/night</strong> for rooms, <strong>$50/night</strong> for suites
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Dogs must be on leash at all times
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Dogs are not allowed in the pool area
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Dogs should not be left unattended in rooms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white/90 mb-8">
            Choose from our comfortable rooms or spacious suites for your White Mountains getaway
          </p>
          <Link
            href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
            className="btn-primary bg-white text-ocean-deep hover:bg-white/90 inline-block"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </>
  )
}
