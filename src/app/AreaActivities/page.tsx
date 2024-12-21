"use client"

import * as React from "react"
// ShadCN
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Image, { type StaticImageData } from "next/image";
// import Link from "next/link"
// import logo from "~/static/Pictures/srml_logo.jpg";
// import Image from "next/image";
import settlers from "~/static/Pictures/outlet.png"
import stonemount from "~/static/Pictures/stonemount.png"
import fair from "~/static/Pictures/fryeburgfair_001.png"
import winter from "~/static/Pictures/amenities/PagePics/winter.png"
import fall from "~/static/Pictures/amenities/PagePics/fall.png"
import { Card, CardContent } from "~/components/ui/card";
import Link from "next/link";
import mtWashington from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png";
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg";
import cranmore from "~/static/Pictures/Carousel-Pictures/cranmore.jpg";
import settlersGreen from "~/static/Pictures/Carousel-Pictures/10041125475_94c67c205d_m.jpg";
import dine from "~/static/Pictures/Carousel-Pictures/dine.jpg";
import foliage from "~/static/Pictures/Carousel-Pictures/foliage.png";
import train from "~/static/Pictures/north-conway-Train-station.jpg";
import kayak from "~/static/Pictures/Carousel-Pictures/saco-river-canoe.jpg";
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg";
import { MultiImageSlider } from "~/app/_components/multiImageCar";
type cardData = {
  picture : StaticImageData;
  desc: string;
}
type cardDataTwo = {
  name: string;
  picture: StaticImageData;
  link: string;
};
export default function Activities() {
  const mainThing : cardData[] = [
    {picture: {settlers}.settlers, desc: "Stay at Saco River Motor Lodge and receive a coupon booklet to shop at Settler’s Green Outlet Village which offers tax free outlet shopping at over 60 factory outlet stores. Shop with all the top brands; from Old Navy, Gap, Banana Republic, adidas, AMERICAN EAGLE OUTFITTERS, Bass, BROOKS BROTHERS, Carters, Dressbarn and many more."},
    {picture: {stonemount}.stonemount, desc: "Nestled in the foothills of the White Mountains, the Stone Mountain Arts Center is a beautiful timber frame music hall hosting national acts up close and personal in an equally beautiful setting."},
    {picture: {fair}.fair, desc: "Come enjoy a week’s worth of fun that Maine’s famous Fryeburg Fair has to offer. 8 days of daily entertainment, great food, tons of games and prizes, and rides for all ages. For more information visit: www.fryebrugfair.org"}
  ]

  const activities : cardDataTwo[] = [
    {name: "Mt Washington", picture: {mtWashington}.mtWashington, link: "/AreaActivities/MtWashington"},
    {name: "Hiking", picture: {hiking}.hiking, link: "/AreaActivities/Hiking"},
    {name: "Cranmore", picture: {cranmore}.cranmore, link: "/AreaActivities/Cranmore"},
    {name: "Settlers Green", picture: {settlersGreen}.settlersGreen, link: "/AreaActivities/SettlersGreen"},
    {name: "Dining", picture: {dine}.dine, link: "/AreaActivities/Dining"},
    {name: "Foliage", picture: {foliage}.foliage, link: "/AreaActivities/Foliage"},
    {name: "Fryeburg Fair", picture: {fair}.fair, link: "/AreaActivities/Fair"},
    {name: "Train", picture: {train}.train, link: "/AreaActivities/Train"},
    {name: "Kayaking", picture: {kayak}.kayak, link: "/AreaActivities/Kayak"},
    {name: "Storyland", picture: {storyland}.storyland, link: "/AreaActivities/Storyland"}
  ]
  return (
    <>
      <h3 className="pt-2 text-center text-2xl font-bold">
        Come enjoy all the seasons with us!
      </h3>
      <MultiImageSlider data={activities} backColor={"white"} cardColor={"rgb(4, 97, 154)"} link={true}/>
      <Accordion type="multiple">
        <AccordionItem value="spring">
          <AccordionTrigger className="m-8 mb-0 mt-2 w-8/12 bg-red-600 text-white">
            <p className="w-8/12 pl-4">Spring</p>
          </AccordionTrigger>
          <AccordionContent className="ml-8 mr-8 bg-accent p-4">
            <div className="p-4 text-center text-lg">
              Spring is a great time to take advantage of the warm weather and
              blooming flowers. Mt. Washington Valley offers a variety of
              activities to do this time of year including shopping, river
              rafting, biking, and more!
              Settler’s Green Outlets: Its a shoppers paradise where you will find sales in over 100 tax-free outlets, country stores, and boutiques.
            </div>
            <div>
              <ul className="flex flex-row justify-evenly font-bold underline">
                <li>Scenic Hiking</li>
                <li>Bike Riding</li>
                <li>Canoeing/Kayaking</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="summer">
          <AccordionTrigger className="m-8 mb-0 mt-0 w-8/12 bg-red-600 text-white">
            <p className="w-8/12 pl-4">Summer</p>
          </AccordionTrigger>
          <AccordionContent className="ml-8 mr-8 bg-accent p-4">
            <div className="p-4 text-center text-lg">
              Summer is the perfect time to spend in Mt. Washington Valley and
              especially at Saco River Motor Lodge and Suites. Our Lodge is a
              special resting place away from the crowds and congestion. With
              direct river access, you can swim or canoe the gentle waters of
              the Saco. Canoe and kayak rentals are available for our guests and
              Conway Lake is only just over a mile away. The Saco River Lodge
              and Suites is also a great place to have a family reunion.
            </div>
            <div className="flex flex-col justify-evenly lg:flex-row">
              <ul>
                <li className="font-bold underline">The Great Outdoors</li>
                <li>Rock Climbing</li>
                <li>Hiking</li>
                <li>Cycling</li>
                <li>Northern Extremes Canoe and Kayak</li>
              </ul>
              <ul>
                <li className="font-bold underline">Golfing</li>
                <li>Androscoggin Valley Country Club</li>
                <li>Hale’s Location Golf Course</li>
                <li>North Conway Country Club</li>
                <li>Province Lake Golf Course</li>
                <li>Indian Mound Golf Club</li>
                <li>Waumbek Golf Club</li>
                <li>Wentworth Golf Club</li>
                <li>Mountain View Grand Resort & Spa Golf Course</li>
                <li> Bridgton Highlands Country Club</li>
                <li>Lake Kezar Country Club</li>
                <li>Omni Mount Washington Golf Club</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fall">
          <AccordionTrigger className="m-8 mb-0 mt-0 w-8/12 bg-red-600 text-white">
            <p className="w-8/12 pl-4">Fall</p>
          </AccordionTrigger>
          <AccordionContent className="ml-8 mr-8 bg-accent p-4">
            <div className="flex flex-col">
              <Image src={fall} alt="" className="w-full"></Image>
              <div className="p-4 text-center text-lg">
                Leaf Peeking in New England, <b>FRYEBURG FAIR</b>, Sherman Farm
                Corn Maze and Haunted Hay Ride
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="winter">
          <AccordionTrigger className="m-8 mb-0 mt-0 w-8/12 bg-red-600 text-white">
            <p className="w-8/12 pl-4">Winter</p>
          </AccordionTrigger>
          <AccordionContent className="ml-8 mr-8 bg-accent p-4">
            <div className="flex flex-col justify-center">
              <Image src={winter} alt="" className="w-full"></Image>
              <div className="p-4 text-center text-lg">
                We’re open year round, and we’re just minutes away from 8 major
                ski areas. Ski the world-class slopes of Attitash/Bear Peak,
                Cranmore, Wildcat, Black Mountain, and Shawnee Peak. If
                cross-country skiing or snowmobiling are your passion, over 65
                kilometers of groomed trails are available throughout the
                area.Here in the Mount Washington Valley, there’s something for
                everyone!
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-base">
                  <ul>
                    <li className="font-bold underline">
                      Ski Season/ Snowboarding
                    </li>
                    <li>Attitash Mountain</li>
                    <li>Black Mountain</li>
                    <li>Mt Cranmore</li>
                    <li>Wildcat Mountain</li>
                    <li>King Pine</li>
                    <li>Shawnee Peak</li>
                    <li>Bretton Woods</li>
                    <li>Bear Notch Jackson</li>
                  </ul>
                </div>

                <div className="flex flex-col text-base">
                  <ul>
                    <li className="font-bold underline">Snowmobiling</li>
                    <li>Fryeburg Snowmobile Rental</li>
                    <li>Northern Extremes Snowmobiling</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col justify-evenly lg:flex-row">
        {mainThing.map((card, index) => (
          <Card className="border-none" key={index}>
            <CardContent className="flex flex-col items-center justify-center rounded-xl p-4 text-center">
              <Image src={card.picture} alt="" className="h-40 w-40" />
              <p className="text-sm">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center lg:items-baseline lg:flex-row justify-evenly text-center">
        <div className="flex w-1/2 flex-col p-8">
          <h3 className="pt-2 text-xl font-bold">
            What to Do and How Far it is From SRML
          </h3>
          <ul>
            <li>SACO RIVER Right behind us!</li>
            <li>
              <Link
                href="https://www.sacocanoerental.com/"
                className="text-endings underline"
              >
                SACO CANOE RENTAL COMPANY{" "}
              </Link>
              5.5 miles- 8 minutes
            </li>
            <li>
              <Link
                href="https://www.sacobound.com/"
                className="text-endings underline"
              >
                SACO BOUND CANOE AND KAYAK
              </Link>{" "}
              right across the road
            </li>
            <li>
              <Link
                href="https://www.settlersgreen.com/"
                className="text-endings underline"
              >
                SETTLER’S GREEN OUTLET SHOPPING CENTER
              </Link>{" "}
              6.0 miles- 10 minutes
            </li>
            <li>
              <Link
                href="https://stonemountainartscenter.com/"
                className="text-endings underline"
              >
                STONE MOUNTAIN ART CENTER 9.6 miles
              </Link>
              - 21 minutes
            </li>
            <li>WESTON’S BEACH 3.3 miles- 5 minutes</li>
            <li>
              <Link
                href="https://www.traillink.com/trail/mountain-division-trail/"
                className="text-endings underline"
              >
                MOUNTAIN DIVISION TRAIL
              </Link>{" "}
              (4.2 MILES OF PAVED RD) 4.1 miles- 7 minutes
            </li>
            <li>
              <Link
                href="https://www.fryeburgfair.org/"
                className="text-endings underline"
              >
                FRYEBURG FAIRGROUNDS
              </Link>{" "}
              4.2 miles- 7 minutes
            </li>
            <li>
              <Link
                href="https://kancamagushighway.com/"
                className="text-endings underline"
              >
                KANCAMAGUS HIGHWAY
              </Link>
              - RT 112 8.1 miles- 13 minutes
            </li>
            <li>CATHEDRAL LEDGE 9.9 miles- 18 minutes</li>
            <li>
              <Link
                href="https://mountwashington.org/"
                className="text-endings underline"
              >
                MT WASHINGTON OBSERVATORY WEATHER DISCOVER CENTER
              </Link>{" "}
              8.2 miles- 13 minutes
            </li>
            <li>
              <Link
                href="https://northconwaynh.com/dianas-baths.html"
                className="text-endings underline"
              >
                DIANA’S BATHS 10.6 miles
              </Link>
              - 19 minutes
            </li>
            <li>
              <Link
                href="https://www.mwvmoosetours.com/"
                className="text-endings underline"
              >
                MWV MOOSE BUS TOURS, LLC 8.6 miles
              </Link>
              - 14 minutes
            </li>
            <li>
              <Link
                href="https://www.tripadvisor.com/Attraction_Review-g46186-d624365-Reviews-Schouler_Park-North_Conway_Conway_New_Hampshire.html"
                className="text-endings underline"
              >
                SCHOULER PARK 8.0 miles
              </Link>
              - 14 minutes
            </li>
            <li>
              <Link
                href="https://www.mwvchildrensmuseum.org/"
                className="text-endings underline"
              >
                MWV CHILDREN’S MUSEUM 9.5 miles
              </Link>
              - 15 minutes
            </li>
            <li>
              <Link
                href="https://www.conwayscenic.com/"
                className="text-endings underline"
              >
                CONWAY SCENIC RAILROAD 8.0 miles
              </Link>
              - 14 minutes
            </li>
            <li>
              <Link
                href="https://perfectdomain.com/domain/yourtheatre.com"
                className="text-endings underline"
              >
                M&D PRODUCTIONS 6.3 miles
              </Link>
              - 10 minutes
            </li>
            <li>
              <Link
                href="https://www.summitpost.org/whitehorse-ledge/151832"
                className="text-endings underline"
              >
                WHITE HORSE LEDGE 11.4 miles
              </Link>
              - 21 minutes
            </li>
            <li>
              <Link
                href="https://northconwaycountryclub.com/"
                className="text-endings underline"
              >
                NORTH CONWAY COUNTRY CLUB 8.0 miles
              </Link>
              - 14 minutes
            </li>
            <li>
              <Link
                href="https://www.piratescove.net/north-conway/"
                className="text-endings underline"
              >
                PIRATE’S COVE ADVENTURE MINI GOLF 6.6 miles
              </Link>
              - 10 minutes
            </li>
            <li>
              <Link
                href="https://www.minigolfpros.com/banana-village-north-conway-nh/"
                className="text-endings underline"
              >
                BANANA VILLAGE MINI GOLF 6.2 miles
              </Link>
              - 10 minutes
            </li>
            <li>MT. WASHINGTON VALLEY THEATRE CO 7.5 miles- 12 minutes</li>
            <li>
              <Link
                href="https://www.storylandnh.com/"
                className="text-endings underline"
              >
                STORYLAND 14.2 miles
              </Link>
              - 24 minutes
            </li>
            <li>
              <Link
                href="https://www.santasvillage.com/"
                className="text-endings underline"
              >
                SANTA’S VILLAGE 54.7 miles
              </Link>
              - 1:34 minutes
            </li>
            <li>
              <Link
                href="https://alpinezipline.com/"
                className="text-endings underline"
              >
                ALPINE ADVENTURES 45 miles
              </Link>
              - 1:01 minutes
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 flex-col p-8">
          <h3 className="pt-2 text-xl font-bold">Other Links</h3>
          <ul className="text-endings underline">
            <li>
              <Link href="https://cranmore.com/">Cranmore Rock climbing</Link>
            </li>
            <li>
              <Link href="https://www.conwayscenic.com/">
                Conway Scenic Railroad
              </Link>
            </li>
            <li>
              <Link href="https://www.sacobound.com/">Canoe and Kayak</Link>
            </li>
            <li>
              <Link href="https://www.fryeburgfair.org/">Fryeburg Fairf</Link>
            </li>
            <li>
              <Link href="https://mountwashington.org/">
                Mount Washington Observatory
              </Link>
            </li>
            <li>
              <Link href="https://www.visitnh.gov/coveredbridges">
                Covered Bridges
              </Link>
            </li>
            <li>
              <Link href="https://mt-washington.com/">Great Glen Trails</Link>
            </li>
            <li>
              <Link href="https://www.northernextremes.com/">
                Outward bound
              </Link>
            </li>
            <li>
              <Link href="https://www.attitash.com/">Attitash Bear Peak</Link>
            </li>
            <li>
              <Link href="https://www.thecog.com/">
                Mt Washington Cog Railway
              </Link>
            </li>
            <li>
              <Link href="https://clarksbears.com/">Clark’s Trading Post</Link>
            </li>
            <li>
              <Link href="https://cranmore.com/">Cranmore Mountain</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

