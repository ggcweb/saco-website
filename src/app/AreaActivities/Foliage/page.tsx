"use client"

import * as React from "react"
import { type StaticImageData } from "next/image";
import { MultiImageSlider } from "~/app/_components/multiImageCar";
import foliage from "~/static/Pictures/foliage/foliage.gif"
import cathedral from "~/static/Pictures/foliage/CATHEDRALLEDGE.jpg"
import kanc from "~/static/Pictures/foliage/fullsizerender.jpg"
import dianas from "~/static/Pictures/foliage/tn.jpg"
import crawford from "~/static/Pictures/foliage/FRANK.jpg"
import mtWash from "~/static/Pictures/foliage/img_0350.jpg"
import frank from "~/static/Pictures/foliage/fullsizerender_000.jpg"
type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};

export default function Foliage() {
  const trails : cardData[] = [
    {name: "Foliage", link: "", picture: {foliage}.foliage},
    {name: "Dianas Bath", link: "", picture: {dianas}.dianas},
    {name: "Kancamangus Highway", link: "", picture: {kanc}.kanc},
    {name: "Mount Washington", link: "", picture: {mtWash}.mtWash},
    {name: "Franconia Notch", link: "", picture:{frank}.frank},
    {name: "Cathedral Ledge", link: "", picture: {cathedral}.cathedral},
    {name: "Crawford Notch", link: "", picture: {crawford}.crawford},
  ]
  return (
    <>
      <div className="flex flex-col items-center bg-input">
        <h3 className="text-sm lg:text-2xl pt-4 underline font-bold">FOLIAGE IN NEW ENGLAND </h3>
        <h3 className="text-sm lg:text-lg pt-4 font-bold">New Hampshire is one of the best places in the world to witness the brilliant crimsons and golds of fall</h3>
        <MultiImageSlider data={trails} backColor={"#E5E5E5"} cardColor={"#E5E5E5"} textColor={"black"} link={false} />
      </div>
    </>
  )
}

