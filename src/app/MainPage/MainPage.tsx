"use client"
import * as React from "react"
import Link from "next/link"
// Shadcn
import { Button } from "~/components/ui/button";
// Sliders
import train from "~/static/Pictures/north-conway-Train-station.jpg"
import { ImageSlider } from "~/app/_components/carousel";
import crOne from "~/static/Pictures/ImageSliderPics/north-conway-black-mountain-snow-dance.jpg"
import crTwo from "~/static/Pictures/ImageSliderPics/conway-village.jpg"
import crThree from "~/static/Pictures/ImageSliderPics/north-conway-cranmore-tubing.jpg"
import crFour from "~/static/Pictures/ImageSliderPics/north-conway-mount-washington.jpg"
import crFive from "~/static/Pictures/ImageSliderPics/north-conway-polar-express.jpg"
import crSix from "~/static/Pictures/ImageSliderPics/north-conway-scenic-train.jpg"
import { MultiImageSlider } from "~/app/_components/multiImageCar";
import Image, { type StaticImageData } from "next/image";
// Activities
import mtWashington from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png";
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg";
import cranmore from "~/static/Pictures/Carousel-Pictures/cranmore.jpg";
import settlersGreen from "~/static/Pictures/Carousel-Pictures/10041125475_94c67c205d_m.jpg";
import dine from "~/static/Pictures/Carousel-Pictures/dine.jpg";
import foliage from "~/static/Pictures/Carousel-Pictures/foliage.png";
import fair from "~/static/Pictures/Carousel-Pictures/fryeburgfair.png";
import kayak from "~/static/Pictures/Carousel-Pictures/saco-river-canoe.jpg";
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg";
// Room Types
import suite from "~/static/Pictures/Room-Pictures/suite-living-room.jpg"
import kingRoom from "~/static/Pictures/Room-Pictures/king-room.jpg"
import doubleRoom from "~/static/Pictures/Room-Pictures/double-angle.jpg"
type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};
export default function MainPage() {
  const activities : cardData[] = [
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

  const rooms : cardData[] = [
    {name: "Suites", link: "", picture: {suite}.suite},
    {name: "King Rooms", link:"", picture: {kingRoom}.kingRoom},
    {name: "Double Rooms", link:"", picture:{doubleRoom}.doubleRoom}
  ]

  return (
    <>
      <ImageSlider images={[{crOne}.crOne, {crTwo}.crTwo, {crThree}.crThree, {crFour}.crFour, {crFive}.crFive, {crSix}.crSix]} carWidth={"w-full"} styling={"className=flex flex-row justify-center"} speed={5000}/>
        <div className="flex lg:flex-row w-full text-black flex-col">
          <div className="flex flex-col lg:w-1/2 text-center p-4 text-xs md:text-base">
            <h3 className="text-sm lg:text-2xl">Welcome to the White Mountains and the Saco River Motel Lodge & Suites!</h3>
            <br/>
            <p>The Saco River Motor Lodge is nestled in the beautiful woods on the peaceful Saco River. As a young
              family, we wanted to create and design our grounds with families in mind. Our grounds has a large pool,
              playground for kids, firepits for roasting marshmellows, grills for barbeques and picnic table for added
              comfort. There is a little soccor field behind the building for kids to play on. Sit and relax by our
              large pool or swim, canoe, kayak and tube down the beautiful Saco River located right next to us. In the
              winter we have ski packages with many major ski mountains; Attitash, Wildcat, Cranmore and Shawnee Peak.
              All kinds of activities going on in and around the valley. Check out the links below to see some of what
              the Mount Washington Valley has to offer.</p>
            <br/>
            <p>Located near North Conway, the lodge sits only minutes away from all the fun and adventures activities
              the area has to offer. A partial list of what is nearby includes 5 Major ski resorts, over 100 shopping
              outlets, hundreds of miles of hiking and cross country skiing trails, snowmobiling, summertime river
              canoeing and kayaking, legendary nightspots and over 60 restaurants to choose from. You name it and you
              can find it here in the Mt. Washington Valley. Spend the day shopping with your friends at Settler’s Green
              Tax free outlets, and ask us about our shopping deals!</p>
            <br/>
            <p>If you are looking to go out for the evening, we have many fine restaurants in the Mt. Washington Valley
              area and also Western Maine; check out the Lodge Amenities page for discounts just for our guests at
              Applebees, Shalimar and the Fryeburg House of Pizza.</p>
          </div>
            {/*Events*/}
            <Image src={train} alt="Random" className="lg:w-1/2 w-full"/>
        </div>
        <div className="bg-endings pt-4">
          <h2 className="text-lg lg:text-2xl text-white text-center font-bold">
            Whether you are looking for a rigorous outdoor adventure, a fun filled family vacation, or just a quiet or romantic get-away, Conway NH and the Mount Washington Valley area has just what you are looking for
          </h2>
        </div>
        <MultiImageSlider data={activities} backColor={"rgb(4, 97, 154)"} cardColor={"rgb(4, 97, 154)"} link={true}/>
      {/* Room Info */}
      <div className="flex flex-col justify-evenly p-2 pt-4 text-center">
        <h3 className="text-lg lg:text-2xl font-bold">Our Rooms</h3>
          <MultiImageSlider data={rooms} backColor={"white"} cardColor={"rgb(4, 97, 154)"} link={false}/>
        <Link href="/RoomsandSuites" className="pt-4"><Button className="bg-endings p-4 pt-6 pb-6 text-base hover:bg-white hover:text-endings hover:outline hover:outline-2 hover:outline-offset-2">More Information</Button></Link>
      </div>
    </>
  )
}

