"use client"

import * as React from "react"
import fairLogo from "~/static/Pictures/FairPics/fair-logo.png"
import Image, { type StaticImageData } from "next/image";
export default function Fair() {
  return (
    <>
      <div className="flex flex-col items-center bg-input">
        <h3 className="text-sm lg:text-2xl pt-4 underline font-bold">Fryeburg Fair</h3>
        <h3 className="text-xs lg:text-sm pt-4">Sept 27 - Oct 25 2025</h3>
        <h3 className="text-xs lg:text-sm pt-4">Closest Motel to the Fryeburg Fair!</h3>
        <Image src={fairLogo} alt="" className="w-6/12 pt-4 pb-4" />
        <div className="text-center font-bold text-xl p-8">
          Fryeburg Fair has grown to become Maine's largest agricultural fair complete with six days of harness racing, a farm museum second to none, the world's largest steer and oxen show and a reputation known throughout North America.
        </div>
      </div>
    </>
  )
}

