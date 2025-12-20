"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import hobo from "~/static/Pictures/train-pics/conductorleo.jpg"
import conwayScenic from "~/static/Pictures/train-pics/photo.jpg"
import cog from "~/static/Pictures/train-pics/new_photo.jpg"
import central from "~/static/Pictures/train-pics/WMCRRAnniversary-069-300x249.jpg"

type cardData = {
  title: string;
  picture: StaticImageData;
  location: string;
  desc: string;
  link: string;
  linkBool: boolean;
}

export default function Train() {
  const trainArr: cardData[] = [
    {
      title: "Conway Scenic Railroad",
      picture: conwayScenic,
      location: "North Conway, New Hampshire",
      desc: "CSRR's Notch Train travels through the heart of the White Mountains. A separate Valley Train explores the countryside with trips to Conway and Bartlett. Highlights include dining cars on both routes and the first-class Notch dome car. Trains operate seasonally. Selected features: rail museum, dinner trips, holiday/event excursions, train charters, gift shop, snack bar, wheelchair access.",
      link: "https://www.conwayscenic.com/",
      linkBool: true,
    },
    {
      title: "Hobo Railroad",
      picture: hobo,
      location: "Lincoln, New Hampshire",
      desc: "The Hobo trails along the Pemigewasset River on a memorable journey through the heart of the White Mountains. Highlights include Hobo Picnic Lunches available onboard. Trains operate seasonally. Selected features: holiday/event excursions, train charters, gift shop, snack bar.",
      linkBool: true,
      link: "https://gsscenic.com/",
    },
    {
      title: "Mount Washington Cog Railway",
      picture: cog,
      location: "Bretton Woods, New Hampshire",
      desc: "Eco-friendly biodiesel locomotives grip the world's oldest mountain cog railway, taking passengers on a spellbinding thrill-ride to Mt. Washington's mile-high summit. Historic coal-fired steam engines run at least once a day. Highlights include mountain-top observatory access. Trains operate seasonally. Selected features: rail museum, holiday/event excursions, train charters, gift shop, snack bar.",
      linkBool: true,
      link: "https://www.thecog.com/"
    },
    {
      title: "White Mountain Central Railroad",
      picture: central,
      location: "Lincoln, New Hampshire",
      desc: "Pulled by a rare gear-driven steam locomotive, the train's woodland route takes it across a unique covered railroad bridge. The WMCRR is part of the Clark's Trading Post fun park. Other attractions include a bear show, bumper boats and a circus. Trains operate seasonally. Selected features: event excursions, train charters, gift shop, snack bar.",
      linkBool: true,
      link: "https://whitemountaincentralrr.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Scenic Train Rides
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            All Aboard for White Mountain Adventures
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainArr.map((train, index) => (
              <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-ocean-deep text-white text-center pb-6">
                  <CardTitle className="font-display tracking-wide">{train.title}</CardTitle>
                  <CardDescription className="text-white/80 mt-2 font-medium">
                    {train.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 p-6 flex-grow bg-white">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src={train.picture}
                      alt={train.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-full gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {train.desc}
                    </p>
                    {train.linkBool && train.link && (
                      <Link
                        href={train.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-deep hover:text-red-500 transition-colors self-start"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
