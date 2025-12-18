"use client"

import * as React from "react"
import Image from "next/image";
import P1 from "~/static/Pictures/amenities/bbq-area.jpg"
import P2 from "~/static/Pictures/amenities/picnic.jpg"
import P3 from "~/static/Pictures/amenities/playground-1.jpg"
import P4 from "~/static/Pictures/amenities/pool-new.jpg"

export default function Amenities() {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-bold text-center pt-2">Saco River Motor Lodge Amenities</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto px-4 mt-2">
        Our family-friendly grounds feature everything you need for a relaxing New Hampshire getaway
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-6">
        <article className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P1 }.P1} alt="BBQ grilling station at Saco River Motor Lodge with charcoal grills for guest use in Conway NH" />
          <p className="text-center">A barbecue station for delicious meals together</p>
        </article>
        <article className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P2 }.P2} alt="Spacious picnic area with tables at Saco River Motor Lodge for family gatherings and outdoor dining" />
          <p className="text-center">A large picnic area fantastic for family gatherings</p>
        </article>
        <article className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P3 }.P3} alt="Children's playground at Saco River Motor Lodge with swings and play equipment in Conway NH" />
          <p className="text-center">A full playground for children to enjoy</p>
        </article>
        <article className="flex flex-col justify-evenly items-center p-2">
          <Image src={{ P4 }.P4} alt="Large outdoor swimming pool at Saco River Motor Lodge - one of the biggest pools in Mt Washington Valley" />
          <p className="text-center">One of the largest pools in the Mount Washington Valley</p>
        </article>
      </div>
    </section>
  );
}

