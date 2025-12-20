"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Flower2, Sun, Leaf, Snowflake, MapPin, ExternalLink, ShoppingBag, Music, Tent } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import type { StaticImageData } from "next/image"

// Images
import settlers from "~/static/Pictures/outlet.png"
import stonemount from "~/static/Pictures/stonemount.png"
import fair from "~/static/Pictures/fryeburgfair_001.png"
import winter from "~/static/Pictures/amenities/PagePics/winter.png"
import fall from "~/static/Pictures/amenities/PagePics/fall.png"
import mtWashington from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png"
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg"
import settlersGreen from "~/static/Pictures/Carousel-Pictures/10041125475_94c67c205d_m.jpg"
import dine from "~/static/Pictures/Carousel-Pictures/dine.jpg"
import foliage from "~/static/Pictures/Carousel-Pictures/foliage.png"
import train from "~/static/Pictures/north-conway-Train-station.jpg"
import kayak from "~/static/Pictures/Carousel-Pictures/saco-river-canoe.jpg"
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg"

type cardDataTwo = {
  name: string
  picture: StaticImageData
  link: string
}

const seasons = [
  {
    id: "spring",
    name: "Spring",
    icon: Flower2,
    color: "from-green-400 to-emerald-500",
    description: "Spring is a great time to take advantage of the warm weather and blooming flowers. Mt. Washington Valley offers shopping, river rafting, biking, and more!",
    activities: ["Scenic Hiking", "Bike Riding", "Canoeing/Kayaking", "Tax-Free Outlet Shopping"]
  },
  {
    id: "summer",
    name: "Summer",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    description: "Summer is perfect at Saco River Motor Lodge. With direct river access, swim or canoe the gentle waters of the Saco. Canoe and kayak rentals available for guests!",
    activities: ["Rock Climbing", "Hiking", "Cycling", "Golfing", "River Activities", "Family Reunions"]
  },
  {
    id: "fall",
    name: "Fall",
    icon: Leaf,
    color: "from-orange-400 to-red-500",
    description: "Experience New England's famous fall foliage! Don't miss the Fryeburg Fair, Sherman Farm Corn Maze, and Haunted Hay Rides.",
    activities: ["Leaf Peeping", "Fryeburg Fair", "Corn Maze", "Haunted Hay Ride"],
    image: fall
  },
  {
    id: "winter",
    name: "Winter",
    icon: Snowflake,
    color: "from-blue-400 to-blue-600",
    description: "We're open year-round, just minutes from 8 major ski areas. Ski Attitash, Cranmore, Wildcat, Black Mountain, and Shawnee Peak!",
    activities: ["Attitash Mountain", "Wildcat Mountain", "Mt Cranmore", "Shawnee Peak", "Snowmobiling", "Cross-Country Skiing"],
    image: winter
  }
]

const highlights = [
  { icon: ShoppingBag, title: "Settler's Green Outlets", description: "Tax-free outlet shopping at over 60 stores including Old Navy, Gap, Banana Republic, and more.", image: settlers },
  { icon: Music, title: "Stone Mountain Arts Center", description: "A timber frame music hall hosting national acts in a beautiful setting.", image: stonemount },
  { icon: Tent, title: "Fryeburg Fair", description: "8 days of entertainment, great food, games, prizes, and rides for all ages.", image: fair },
]

const nearbyAttractions = [
  { name: "Saco River", distance: "Right behind us!" },
  { name: "Saco Canoe Rental", distance: "5.5 miles", link: "https://www.sacocanoerental.com/" },
  { name: "Saco Bound Canoe & Kayak", distance: "Across the road", link: "https://www.sacobound.com/" },
  { name: "Settler's Green Outlets", distance: "6.0 miles", link: "https://www.settlersgreen.com/" },
  { name: "Stone Mountain Art Center", distance: "9.6 miles", link: "https://stonemountainartscenter.com/" },
  { name: "Fryeburg Fairgrounds", distance: "4.2 miles", link: "https://www.fryeburgfair.org/" },
  { name: "Kancamagus Highway", distance: "8.1 miles", link: "https://kancamagushighway.com/" },
  { name: "Cathedral Ledge", distance: "9.9 miles" },
  { name: "Mt Washington Observatory", distance: "8.2 miles", link: "https://mountwashington.org/" },
  { name: "Diana's Baths", distance: "10.6 miles", link: "https://northconwaynh.com/dianas-baths.html" },
  { name: "Conway Scenic Railroad", distance: "8.0 miles", link: "https://www.conwayscenic.com/" },
  { name: "Storyland", distance: "14.2 miles", link: "https://www.storylandnh.com/" },
  { name: "Pirate's Cove Mini Golf", distance: "6.6 miles", link: "https://www.piratescove.net/north-conway/" },
]

const quickLinks = [
  { name: "Cranmore Mountain", link: "https://cranmore.com/" },
  { name: "Conway Scenic Railroad", link: "https://www.conwayscenic.com/" },
  { name: "Saco Bound", link: "https://www.sacobound.com/" },
  { name: "Fryeburg Fair", link: "https://www.fryeburgfair.org/" },
  { name: "Mt Washington Observatory", link: "https://mountwashington.org/" },
  { name: "Covered Bridges", link: "https://www.visitnh.gov/coveredbridges" },
  { name: "Great Glen Trails", link: "https://mt-washington.com/" },
  { name: "Attitash Bear Peak", link: "https://www.attitash.com/" },
  { name: "Mt Washington Cog Railway", link: "https://www.thecog.com/" },
  { name: "Clark's Trading Post", link: "https://clarksbears.com/" },
]

export default function Activities() {
  const activities: cardDataTwo[] = [
    { name: "Mt Washington", picture: mtWashington, link: "/AreaActivities/MtWashington" },
    { name: "Hiking", picture: hiking, link: "/AreaActivities/Hiking" },
    { name: "Settlers Green", picture: settlersGreen, link: "/AreaActivities/SettlersGreen" },
    { name: "Dining", picture: dine, link: "/AreaActivities/Dining" },
    { name: "Foliage", picture: foliage, link: "/AreaActivities/Foliage" },
    { name: "Fryeburg Fair", picture: fair, link: "/AreaActivities/Fair" },
    { name: "Train", picture: train, link: "/AreaActivities/Train" },
    { name: "Summer Fun", picture: kayak, link: "/AreaActivities/Kayak" },
    { name: "Storyland", picture: storyland, link: "/AreaActivities/Storyland" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep">
        <div className="container mx-auto max-w-6xl px-4 text-center text-white">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Area Activities
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Come enjoy all the seasons with us in the Mt. Washington Valley!
          </p>
        </div>
      </section>

      {/* Activities Carousel */}
      {/* Activities Grid */}
      <section className="section-padding bg-white relative z-10 -mt-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.name}
                href={activity.link}
                className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={activity.picture}
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {activity.name}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Explore <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-ocean-deep text-center mb-8">
            Activities by Season
          </h2>

          <Accordion type="multiple" className="space-y-4">
            {seasons.map((season) => (
              <AccordionItem
                key={season.id}
                value={season.id}
                className="border rounded-2xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className={`px-6 py-4 bg-gradient-to-r ${season.color} text-white hover:no-underline`}>
                  <div className="flex items-center gap-3">
                    <season.icon className="w-6 h-6" />
                    <span className="text-xl font-display font-semibold">{season.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 bg-secondary/30">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-muted-foreground mb-4">{season.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {season.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2 text-sm">
                            <span className="text-red-500">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {season.image && (
                      <div className="rounded-xl overflow-hidden">
                        <Image
                          src={season.image}
                          alt={`${season.name} activities`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-ocean-deep text-center mb-12">
            Featured Attractions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-ocean-deep/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-ocean-deep" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ocean-deep">{item.title}</h3>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-contain mb-4"
                />
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distances & Links */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-ocean-deep text-center mb-12">
            <MapPin className="inline-block w-8 h-8 mr-2 mb-1" />
            What&apos;s Nearby
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Distances */}
            <div>
              <h3 className="font-display text-xl font-semibold text-ocean-deep mb-6">
                Distances from SRML
              </h3>
              <div className="bg-secondary/30 rounded-2xl p-6">
                <ul className="space-y-3">
                  {nearbyAttractions.map((item) => (
                    <li key={item.name} className="flex items-center justify-between py-2 border-b border-white/50 last:border-0">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ocean-deep hover:text-red-500 transition-colors flex items-center gap-1"
                        >
                          {item.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-foreground">{item.name}</span>
                      )}
                      <span className="text-sm text-muted-foreground">{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl font-semibold text-ocean-deep mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl hover:bg-ocean-deep hover:text-white transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-ocean-deep group-hover:text-white" />
                    <span className="text-sm">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
            Ready to Explore the Mt. Washington Valley?
          </h2>
          <p className="text-white/90 mb-8">
            Book your stay and experience everything our beautiful region has to offer
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
