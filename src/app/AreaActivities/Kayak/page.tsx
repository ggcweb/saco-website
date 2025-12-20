"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image";
import saco from "~/static/Pictures/SummerFun/saco-river-canoe.jpg"
import attitash from "~/static/Pictures/SummerFun/1604957_10152250495069979_8273798884093520395_n.jpg"
import monkeyTrunks from "~/static/Pictures/SummerFun/chocorua1.jpg"
import cranmore from "~/static/Pictures/SummerFun/mtn-coast-pg.jpg"
import alpine from "~/static/Pictures/SummerFun/3-t.jpg"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type cardData = {
  title: string;
  picture: StaticImageData;
  desc: string;
}

export default function Kayak() {
  const funArr: cardData[] = [
    { title: "THE SACO RIVER", picture: saco, desc: "The Saco River is full of fun activities. Canoing, kayaking and tubing. Spend a beautiful day paddling or floating down the gentle waters of the Saco River. Along the way enjoy a nice picnic on the sandy beaches and take in the great views. A great activity for the whole family. Please call us for great saco river rental prices." },
    { title: "ATTITASH MOUNTAIN RESORT", picture: attitash, desc: "New Hampshire's Orginal Summer Fun Spot. Loads of fun for the entire family; Mountain Coaster, Alpine Slide, Waterslides, Horseback Riding, Moutain Biking, Climbing Wall, EuroBungy Trampoline, Scenic Chair Ride Slacklines, Airbag Jump and much more." },
    { title: "ALPINE ADVENTURES", picture: alpine, desc: "Alpine Adventures will take you out of your comfort zone, where you can fly from tree to tree like birds, go off-roading in a Swiss army vehicle, practice your misty flip into our new BigAirbag© Stunt Zone, challenge yourself in the Thrillsville Aerial Park, or watch the action from the deck of the Bird House, right on Main Street." },
    { title: "MONKEY TRUNKS", picture: monkeyTrunks, desc: "Monkey Trunks in Chocorua, NH, offers adventure for visitors of all ages. In 2012 we converted all three of our courses (formerly known as the Mini-Monkey, King-Kong and Jungle) into one complete experience." },
    { title: "CRANMORE MOUNTAIN", picture: cranmore, desc: "Thousands of feet of twisting, turning fun flying through the woods. You control the speed for a leisurely ride or a screaming fast run through to the end." },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Summer Fun
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Kayaking, Adventure Parks, and Outdoor Excitement
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8">
            {funArr.map((item, index) => (
              <Card key={index} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto">
                  <Image
                    src={item.picture}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-0 flex flex-col">
                  <CardHeader className="bg-ocean-deep/5 pb-4">
                    <CardTitle className="font-display text-xl tracking-wide text-ocean-deep">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 flex-grow bg-white">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
