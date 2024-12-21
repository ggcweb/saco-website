"use client"

import * as React from "react"
import Image, {type StaticImageData } from "next/image";
import saco from "~/static/Pictures/SummerFun/saco-river-canoe.jpg"
import attitash from "~/static/Pictures/SummerFun/1604957_10152250495069979_8273798884093520395_n.jpg"
import monkeyTrunks from "~/static/Pictures/SummerFun/chocorua1.jpg"
import cranmore from "~/static/Pictures/SummerFun/mtn-coast-pg.jpg"
import alpine from "~/static/Pictures/SummerFun/3-t.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
type cardData = {
  title: string;
  picture: StaticImageData;
  desc: string;
}
export default function Kayak() {
  const funArr : cardData[] = [
    {title: "THE SACO RIVER", picture: {saco}.saco, desc: "The Saco River is full of fun activities. Canoing, kayaking and tubing. Spend a beautiful day paddling or floating down the gentle waters of the Saco River. Along the way enjoy a nice picnic on the sandy beaches and take in the great views. A great activity for the whole family. Please call us for great saco river rental prices."},
    {title: "ATTITASH MOUNTAIN RESORT", picture: {attitash}.attitash, desc: "New Hampshire's Orginal Summer Fun Spot. Loads of fun for the entire family; Mountain Coaster, Alpine Slide, Waterslides, Horseback Riding, Moutain Biking, Climbing Wall, EuroBungy Trampoline, Scenic Chair Ride Slacklines, Airbag Jump and much more."},
    {title: "ALPINE ADVENTURES", picture: {alpine}.alpine, desc: "Alpine Adventures will take you out of your comfort zone, where you can fly from tree to tree like birds, go off-roading in a Swiss army vehicle, practice your misty flip into our new BigAirbag© Stunt Zone, challenge yourself in the Thrillsville Aerial Park, or watch the action from the deck of the Bird House, right on Main Street."},
    {title: "MONKEY TRUNKS", picture: {monkeyTrunks}.monkeyTrunks, desc: "Monkey Trunks in Chocorua, NH, offers adventure for visitors of all ages. In 2012 we converted all three of our courses (formerly known as the Mini-Monkey, King-Kong and Jungle) into one complete experience."},
    {title: "CRANMORE MOUNTAIN", picture: {cranmore}.cranmore, desc: "Thousands of feet of twisting, turning fun flying through the woods. You control the speed for a leisurely ride or a screaming fast run through to the end."},
  ]
  return (
    <>
      <h3 className="text-sm lg:text-2xl pt-4 underline font-bold text-center bg-input">Local Restaurants</h3>
      <div className="grid p-4 grids-col-1 lg:grid-cols-2 items-center flex-wrap bg-input">
        {funArr.map((rest, index) => (
          <Card key={index} className="flex flex-col justify-center items-center p-2 text-center bg-endings text-white">
            <CardHeader>
              <CardTitle>{rest.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row items-center justify-center">
              <Image src={rest.picture} alt="" className="w-80 h-80" />
              <p className="text-sm items-baseline p-4">{rest.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

