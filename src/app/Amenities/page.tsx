"use client"

import * as React from "react"
import Image from "next/image";
import P1 from "~/static/Pictures/amenities/bbq-area.jpg"
import P2 from "~/static/Pictures/amenities/picnic.jpg"
import P3 from "~/static/Pictures/amenities/playground-1.jpg"
import P4 from "~/static/Pictures/amenities/pool-new.jpg"
export default function Amenities() {
  return (
    <>
      <h3 className="text-2xl font-bold text-center pt-2">Saco River Motor Lodge Amenities</h3>
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
       <div className="flex flex-col justify-evenly items-center p-2">
        <Image src={{ P1 }.P1} alt="" />
        <p className="text-center">A barbecue station for delicious meals together</p>
       </div>
        <div className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P2 }.P2} alt="" />
          <p className="text-center">A large picnic area fantastic for family gatherings</p>
        </div>
        <div className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P3 }.P3} alt="" />
          <p className="text-center">A full playground for children to enjoy</p>
        </div>
        <div className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P4 }.P4} alt="" />
          <p className="text-center">One of the largest pools in the Mount Washington Valley</p>
        </div>
      </div>
    </>
);
}

