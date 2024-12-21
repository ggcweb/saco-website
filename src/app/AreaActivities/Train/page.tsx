"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
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
      title: "Conway Scenic Railways",
      picture: { conwayScenic }.conwayScenic,
      location: "North Conway, New Hampshire",
      desc: "CSRR's Notch Train travels through the heart of the White Mountains. A separate Valley Train explores the countryside with trips to Conway and Bartlett. Highlights include dining cars on both routes and the first-class Notch dome car. Trains operate seasonally. Selected features: rail museum, dinner trips, holiday/event excursions, train charters, gift shop, snack bar, wheelchair access.",
      link: "",
      linkBool: false,
    },
    {
      title: "Hobo Railroad",
      picture: { hobo }.hobo,
      location: "Lincoln, New Hampshire",
      desc: "The Hobo trails along the Pemigewasset River on a memorable journey through the heart of the White Mountains. Highlights include Hobo Picnic Lunches available onboard. Trains operate seasonally. Selected features: holiday/event excursions, train charters, gift shop, snack bar.",
      linkBool: true,
      link: "https://gsscenic.com/",
    },
    {
      title: " Mount Washington Cog Railways",
      picture: { cog }.cog,
      location: "Bretton Woods, New Hampshire",
      desc: "Eco-friendly biodiesel locomotives grip the world's oldest mountain cog railway, taking passengers on a spellbinding thrill-ride to Mt. Washington's mile-high summit. Historic coal-fired steam engines run at least once a day. Highlights include mountain-top observatory access. Trains operate seasonally. Selected features: rail museum, holiday/event excursions, train charters, gift shop, snack bar.",
      linkBool: false,
      link: ""
    },
    {
      title: "White Mountain Central Railroad",
      picture: {central}.central,
      location: "Lincoln, New Hampshire",
      desc: "Pulled by a rare gear-driven steam locomotive, the train's woodland route takes it across a unique covered railroad bridge. The WMCRR is part of the Clark's Trading Post fun park. Other attractions include a bear show, bumper boats and a circus. Trains operate seasonally. Selected features: event excursions, train charters, gift shop, snack bar.",
      linkBool: true,
      link: "https://whitemountaincentralrr.com/"
    }
  ];
  return (
    <>
      <h3 className="text-sm lg:text-2xl pt-4 underline font-bold text-center bg-input">Trains</h3>
      <div className="grid p-4 grids-col-1 lg:grid-cols-2 items-center flex-wrap bg-input">
        {trainArr.map((train, index) => (
          <Card key={index} className="flex flex-col justify-center items-center p-2 text-center bg-endings text-white">
            <CardHeader>
              <CardTitle>{train.title}</CardTitle>
              <CardDescription className="text-white">
                {train.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row items-center justify-center">
              <Image src={train.picture} alt="" className="w-80 h-80" />
              <p className="text-sm items-baseline p-4">{train.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

