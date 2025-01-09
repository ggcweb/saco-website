"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image";
import blackCap from "~/static/Pictures/Restaurants/blackcapgrill-300x143.jpg"
import horsefeathers from "~/static/Pictures/Restaurants/horsefeathers.jpg"
import ThreeOTwo from "~/static/Pictures/Restaurants/302.jpg"
import beas from "~/static/Pictures/Restaurants/beas.jpg"
import banners from "~/static/Pictures/Restaurants/banners.jpg"
import delaneys from "~/static/Pictures/Restaurants/delaneys.png"
import leos from "~/static/Pictures/Restaurants/leos.jpg"
import jalisco from "~/static/Pictures/Restaurants/JALISCO.jpg"
import haveli from "~/static/Pictures/Restaurants/open-haveli.webp"
import oxford from "~/static/Pictures/Restaurants/oxford.jpg"
import peaches from "~/static/Pictures/Restaurants/peaches.jpg"
import stonehust from "~/static/Pictures/Restaurants/stonehurst.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
type cardData = {
  title: string;
  picture: StaticImageData;
  location: string;
  contact: string;
  desc: string;
}
export default function Dining() {
  const restArr : cardData[] = [
    {title: "BLACK CAP GRILLE", picture: {blackCap}.blackCap, location: "147 MAIN ST. CONWAY NH", contact:"603-356-2225", desc: "You’ll find New England’s freshest and healthiest locally sourced ingredients in each entree, and every highly original special."},
    {title: "HORSEFEATHERS", picture: {horsefeathers}.horsefeathers, location: "2679 WHITE MOUNTAIN HIGHWAY NORTH CONWAY NH", contact: "603-356-2687", desc: "Landmark restaurant serving Sustenance, Merriment & Cheer to Valley folk for over 26 years. A must stop of any Mt. Washington Valley Vacation."},
    {title: "JALISCO", picture: {jalisco}.jalisco, location: "6 MOUNTAIN VALLEY BLVD NORTH CONWAY, NH", contact: "603-733-5550", desc: "Mexican restaurant in North Conway. Love Food. Fresh and fun Mexican fare."},
    {title: "HAVELI INDIAN CUISINE", picture: {haveli}.haveli, location: "1857 White Mountain Hwy, North Conway, NH".toUpperCase(), contact: "603) 307-1016", desc: "Our staff is dedicated to presenting the best of Indian Cuisine. Whether it be street food or classic indian dishes, we make it all with authentic ingredients from India. Come and dine with us for the closest experience of India in New Hampshire."},
    {title: "OXFORD HOUSE", picture: {oxford}.oxford, location: "548 MAIN ST FRYEBURG, ME", contact: "207-935-3442", desc: "Spectacular White Mountain views, a romantic candlelit dining room with fireplace and warm, professional service have established The Oxford House Inn as a dining destination. A hand selected wine list, creative specialty house cocktails and local & imported beer selection are available."},
    // {title: "SHALIMAR INIDAN RESTUARANT", picture: {shalimar}.shalimar, location: "2197 WHITE MOUTAIN HIGHWAY NORTH CONWAY, NH", contact: "603-356-0123", desc: "Our business is family owned and operated. From time to time we have been known to give tours of the kitchen to show the Tandoor (Clay Oven) that we use for baking our breads. Every Item is made to order from scratch."},
    {title: "DELANEY'S HOLE IN THE WALL", picture: {delaneys}.delaneys, location: "2966 WHITE MOUNTAIN HIGWAY NORTH CONWAY, NH", contact: "603-356-7776", desc: "Our kitchen staffs are creative and committed to providing you with the tastiest food in the valley, and the Delaney’s are committed to providing you with the greatest dining experience possible."},
    {title: "STONEHURST MANOR", picture: {stonehust}.stonehust, location: "3351 WHITE MT. HIGHWAY NORTH CONWAY, NH", contact: "603-356-3113", desc: "Stonehurst Manor Wood-fired gourmet pizzas, wood oven baked breads and pit-smoked aged prime rib."},
    {title: "302 WEST SMOKEHOUSE", picture: {ThreeOTwo}.ThreeOTwo, location: "636 MAIN ST FRYEBURG, ME", contact: "207-935-3021", desc: "We are a fun local hang out and a deliciously unique eatery, rolled into one fabulous Restaurant and Tavern, located on Maine Route 302 in the heart of Fryeburg Village. We invite everyone to come and share our passion for great food and good times!"},
    {title: "FRYEBURG HOUSE OF PIZZA", picture: {leos}.leos, location: "11 PORTLAND ST FRYEBURG ME", contact: "207-935-4172", desc: ""},
    {title: "PEACH'S RESTAURANT", picture: {peaches}.peaches, location: "506 White Mountain Hwy, North Conway, NH 03860".toUpperCase(), contact: "(603) 356-5860", desc: "Peach's is a family owned and operated restaurant in North Conway, NH dedicated to serving creative and quality dishes. We invite you to join us for a scrumptious breakfast or lunch and we hope you'll feel right at home! "},
    {title: "BEA'S CAFE", picture: {beas}.beas, location: "White Mountain Hwy, Conway, NH 03818".toUpperCase(), contact: "(603) 447-4900", desc: ""},
    {title: "BANNER'S RESTAURANT", picture: {banners}.banners, location: "621 White Mountain Highway, Conway, NH 03818".toUpperCase(), contact: "(603) 447-6993", desc: "Come see why Banners Restaurant is a favorite among locals and visitors to the Mt. Washington Valley, serving hearty breakfasts and mouth watering lunches. Every meal is prepared with the freshest ingredients, serving up tasty traditional favorites and innovative, new offerings, that will leave you looking forward to your next visit. We're one of life's little comforts."},
  ]
  return (
    <>
      <h3 className="text-sm lg:text-2xl pt-4 underline font-bold text-center bg-input">Local Restaurants</h3>
      <div className="grid p-4 grids-col-1 lg:grid-cols-2 items-center flex-wrap bg-input">
        {restArr.map((rest, index) => (
          <Card key={index} className="flex flex-col justify-center items-center p-2 text-center bg-endings text-white">
            <CardHeader>
              <CardTitle>{rest.title}</CardTitle>
              <CardDescription className="text-white">
                {rest.location} <br/> {rest.contact}
              </CardDescription>
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

