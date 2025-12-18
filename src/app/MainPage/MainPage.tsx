"use client"
import * as React from "react"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { Waves, Trees, Mountain, Car, UtensilsCrossed, Snowflake, Dog, Wifi } from "lucide-react"

// Components
import { HeroSection } from "~/app/_components/HeroSection"
import { FeatureCard } from "~/app/_components/FeatureCard"
import { RoomCard } from "~/app/_components/RoomCard"
import { MultiImageSlider } from "~/app/_components/multiImageCar"

// Images
import heroImage from "~/static/Pictures/ImageSliderPics/north-conway-mount-washington.jpg"
import train from "~/static/Pictures/north-conway-Train-station.jpg"
// Activities
import mtWashington from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png"
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg"
import settlersGreen from "~/static/Pictures/Carousel-Pictures/10041125475_94c67c205d_m.jpg"
import dine from "~/static/Pictures/Carousel-Pictures/dine.jpg"
import foliage from "~/static/Pictures/Carousel-Pictures/foliage.png"
import fair from "~/static/Pictures/Carousel-Pictures/fryeburgfair.png"
import kayak from "~/static/Pictures/Carousel-Pictures/saco-river-canoe.jpg"
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg"
// Room Types
import suite from "~/static/Pictures/Room-Pictures/suite-living-room.jpg"
import kingRoom from "~/static/Pictures/Room-Pictures/king-room.jpg"
import doubleRoom from "~/static/Pictures/Room-Pictures/double-angle.jpg"

type cardData = {
  name: string
  picture: StaticImageData
  link: string
}

export default function MainPage() {
  const activities: cardData[] = [
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

  const rooms = [
    { name: "Luxury Suites", image: suite, description: "Spacious living with full amenities" },
    { name: "King Rooms", image: kingRoom, description: "Comfortable and cozy for two" },
    { name: "Double Rooms", image: doubleRoom, description: "Perfect for families" }
  ]

  const features = [
    { icon: Waves, title: "Saco River Access", description: "Swim, kayak, canoe or tube down our beautiful riverfront" },
    { icon: Snowflake, title: "Ski Packages", description: "Attitash, Wildcat, Cranmore & Shawnee Peak deals" },
    { icon: Trees, title: "Outdoor Pool", description: "Large pool with playground and picnic areas" },
    { icon: Dog, title: "Pet Friendly", description: "We welcome your furry family members" },
    { icon: Mountain, title: "White Mountains", description: "Hiking trails and scenic views nearby" },
    { icon: UtensilsCrossed, title: "Fire Pits & Grills", description: "BBQ and marshmallow roasting areas" },
    { icon: Car, title: "Free Parking", description: "Convenient parking right at your door" },
    { icon: Wifi, title: "Free WiFi", description: "Stay connected during your stay" }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroImage}
        title="Welcome to Saco River Motor Lodge & Suites"
        subtitle="Experience the beauty of the White Mountains from our peaceful riverside retreat in Conway, NH"
      />

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="heading-section text-ocean-deep mb-6">
                Your Family Retreat in the White Mountains
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Saco River Motor Lodge is nestled in the beautiful woods on the peaceful Saco River. As a young family, we wanted to create and design our grounds with families in mind.
                </p>
                <p>
                  Our grounds has a large pool, playground for kids, firepits for roasting marshmallows, grills for barbeques and picnic tables for added comfort. There is a little soccer field behind the building for kids to play on. Sit and relax by our large pool or swim, canoe, kayak and tube down the beautiful Saco River located right next to us.
                </p>
                <p>
                  In the winter we have ski packages with many major ski mountains; Attitash, Wildcat, Cranmore and Shawnee Peak. All kinds of activities going on in and around the valley.
                </p>
              </div>
              <Link
                href="/Amenities"
                className="inline-flex items-center gap-2 mt-6 text-ocean-deep font-semibold hover:text-red-600 transition-colors group"
              >
                View Our Amenities
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Image
                src={train}
                alt="Historic North Conway Train Station - scenic railroad tours through the White Mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="heading-section text-ocean-deep mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Family-friendly amenities and unbeatable location make us the perfect base for your White Mountains adventure
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Callout */}
      <section className="bg-ocean-deep py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-display font-semibold mb-4">
            Whether you are looking for a rigorous outdoor adventure, a fun filled family vacation, or just a quiet or romantic get-away
          </h2>
          <p className="text-white/80 text-lg">
            Conway NH and the Mount Washington Valley area has just what you are looking for
          </p>
        </div>
      </section>

      {/* Area Activities */}
      <section className="py-12 bg-ocean-deep" aria-label="Area Activities">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="heading-section text-white text-center mb-8">
            Explore the Area
          </h2>
        </div>
        <MultiImageSlider
          data={activities}
          backColor={"rgb(12, 74, 110)"}
          textColor={"white"}
          cardColor={"rgb(12, 74, 110)"}
          link={true}
        />
      </section>

      {/* Room Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="heading-section text-ocean-deep mb-4">
              Our Accommodations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comfortable rooms and spacious suites designed with your family in mind
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <RoomCard
                  name={room.name}
                  image={room.image}
                  description={room.description}
                  link="/RoomsandSuites"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/RoomsandSuites" className="btn-red inline-block">
              View All Rooms & Suites
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="heading-section text-ocean-deep mb-6">
              The Perfect Location
            </h2>
            <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
              <p>
                Located near North Conway, the lodge sits only minutes away from all the fun and adventures the area has to offer. A partial list of what is nearby includes 5 major ski resorts, over 100 shopping outlets, hundreds of miles of hiking and cross country skiing trails, snowmobiling, summertime river canoeing and kayaking, legendary nightspots and over 60 restaurants to choose from.
              </p>
              <p>
                You name it and you can find it here in the Mt. Washington Valley. Spend the day shopping with your friends at Settler&apos;s Green Tax-free outlets, and ask us about our shopping deals!
              </p>
            </div>
            <Link href="/AreaActivities" className="btn-primary mt-8 inline-block">
              Explore Area Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
