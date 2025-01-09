"use client"

import * as React from "react"
import { type StaticImageData } from "next/image";
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg";
import P1 from "~/static/Pictures/Storyland/img.png"
import P2 from "~/static/Pictures/Storyland/img_1.png"
import P3 from "~/static/Pictures/Storyland/img_2.png"
import P4 from "~/static/Pictures/Storyland/img_3.png"
import P5 from "~/static/Pictures/Storyland/img_4.png"
import P6 from "~/static/Pictures/Storyland/img_5.png"
import P7 from "~/static/Pictures/Storyland/img_6.png"
import { MultiImageSlider } from "~/app/_components/multiImageCar";
type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};
export default function Storyland() {
  const imageArr : cardData[] = [
    {name: "", picture:{storyland}.storyland, link: ""},
    {name: "", picture:{P1}.P1, link: ""},
    {name: "", picture:{P2}.P2, link: ""},
    {name: "", picture:{P3}.P3, link: ""},
    {name: "", picture:{P4}.P4, link: ""},
    {name: "", picture:{P5}.P5, link: ""},
    {name: "", picture:{P6}.P6, link: ""},
    {name: "", picture:{P7}.P7, link: ""}
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-input">
        <h3 className="text-2xl pt-4 underline font-bold">Storyland</h3>
        <MultiImageSlider data={imageArr} backColor={"#E5E5E5"} cardColor={"#E5E5E5"} link={false} textColor={"black"}/>
        <div className="text-center font-bold text-xl pt-2 p-14">
          A dream come true for all children.
          <br/>
          The Flying Fish, Humpty Dumpty, Bamboo Chutes, Cinderella and her Castle and Pumpkin Coach, the Polar Caster, Mother Goose, Huff Puff and Whistle Railroad, and so many more... Story Land is open every summer: weekends from Memorial Day Weekend through mid June; every day from mid June to Labor Day; and then Saturdays & Sundays from Labor Day through Columbus Day. With 21 wonderfully themed rides, three lively shows, countless unique play areas, and acres of beautifully landscaped gardens and immaculate grounds, Story Land is the perfect place to create family memories to last a lifetime. A New England favorite for generations of families for more than 55 years.
        </div>

      </div>
    </>
  )
}

