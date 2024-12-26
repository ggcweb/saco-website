"use client"

import * as React from "react"
import { MultiImageSlider } from "~/app/_components/multiImageCar";
import type { StaticImageData } from "next/image";

// Images
// Doubles
import DA from "~/static/Pictures/Room-Pictures/double-angle.jpg"
import DB from "~/static/Pictures/Room-Pictures/double.jpeg"
import DC from "~/static/Pictures/Room-Pictures/double-angle-2.jpg"
// Kings
import KA from "~/static/Pictures/Room-Pictures/king-room.jpg"
import KB from "~/static/Pictures/Room-Pictures/single-angle.jpg"
import KC from "~/static/Pictures/Room-Pictures/toilet.jpg"
// Suites
import SA from "~/static/Pictures/Room-Pictures/suite-living-room.jpg"
import SB from "~/static/Pictures/Room-Pictures/suite-big-picture.jpg"
import SC from "~/static/Pictures/Room-Pictures/suite-kitchen-2.jpg"
import SD from "~/static/Pictures/Room-Pictures/suite-kitchen.jpg"
import SE from "~/static/Pictures/Room-Pictures/suite-room-2.jpg"
import SF from "~/static/Pictures/Room-Pictures/suite-room.jpg"
import SG from "~/static/Pictures/Room-Pictures/suite-single-2.jpg"
import SH from "~/static/Pictures/Room-Pictures/suite-single.jpg"
import { ImageSlider } from "~/app/_components/carousel";
import { DialogDescription } from "~/components/ui/dialog";

type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};
export default function RoomAndSuites() {
  const doubleRooms = [{DA}.DA, {DB}.DB, {DC}.DC];
  const kingRooms = [{KA}.KA, {KB}.KB, {KC}.KC,];
  const suites : cardData[] = [
    {name:"", link:"", picture: {SA}.SA},
    {name:"", link:"", picture: {SB}.SB},
    {name:"", link:"", picture: {SC}.SC},
    {name:"", link:"", picture: {SD}.SD},
    {name:"", link:"", picture: {SE}.SE},
    {name:"", link:"", picture: {SF}.SF},
    {name:"", link:"", picture: {SG}.SG},
    {name:"", link:"", picture: {SH}.SH}
  ];
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col pt-4 text-center lg:w-1/2">
          <h3 className="text-2xl font-bold">Double Rooms</h3>
          <ImageSlider
            images={doubleRooms}
            carWidth={"w-96 h-96"}
            speed={4000}
            styling={"flex flex-row justify-center"}
          />
        </div>

        <div className="flex w-full flex-col pt-4 text-center lg:w-1/2">
          <h3 className="text-2xl font-bold">King Rooms</h3>
          <ImageSlider
            images={kingRooms}
            carWidth={"w-96 h-96"}
            speed={4000}
            styling={"flex flex-row items-center justify-center"}
          />
        </div>
      </div>
      <p className="w-full p-4 text-center">
        Don’t miss your chance to visit New England this fall and stay at the
        Saco River Motor Lodge. All king rooms and double bedrooms are equipped
        with either 1 king bed or 2 full beds, flat screen TVs with cable,
        microwaves, mini-fridges, coffee makers, air conditioners, and bathroom
        with large showers.
      </p>
      <div className="flex w-full flex-col border-b-4 border-endings bg-endings pb-4 pt-4 text-center text-white">
        <h3 className="text-2xl font-bold">Suites</h3>
        <MultiImageSlider
          link={false}
          backColor={"rgb(4, 97, 154)"}
          cardColor={"rgb(4, 97, 154)"}
          data={suites}
        />
      </div>
      <p className="w-full bg-endings p-4 text-center text-white">
        For family gatherings, retreats and business travelers our Saco Suites
        are the perfect accommodation. Our suites are located away from the
        lodge in a separate new building with its own small deck looking onto 50
        acres of woodland. The suites have either 2 or 3 bedrooms each with a
        queen size bed, a sitting area with a queen size pull out couch or a
        daybed, cable TV, and free high speed wireless internet access. The
        kitchen area comprises a double sink, full size fridge with freezer,
        microwave, toaster oven, cook top and coffeemaker. The suite bathrooms
        consist of a full bath with shower on tiled floors. All rooms in the
        suite have air conditioners and radiant floor heat during the winter.
      </p>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col overflow-y-scroll p-2 text-xs lg:text-sm">
          <h1 className="text-lg font-bold underline">Rules and Policies</h1>
          <ul>
            <li className="p-2">
              ALL RESERVATIONS MUST BE MADE WITH A CREDIT CARD.
            </li>
            <li className="p-2">
              CANCELLATIONS MUST BE MADE BY PHONE TO A MEMBER OF STAFF AT THE
              LODGE (NO EMAIL OR VOICE MAIL MESSAGES ACCEPTED).
            </li>
            <li className="p-2">
              THERE IS NO CANCELLATION AFTER 48 HOURS FOR ROOMS AND 7 DAYS FOR
              THE SUITES, IF THE RESERVATION IS CANCELLED AFTER 48 HOURS FOR
              ROOMS AND 7 DAYS FOR SUITES THE FULL AMOUNT OF THE STAY WILL BE
              CHARGED.
            </li>
            <li className="p-2">
              <b className="text-base">
                No cancellation allowed during Fryeburg Fair week
              </b>
            </li>
            <li className="p-2">
              CHECK IN IS ANYTIME AFTER 4 P.M. TO 9 P.M. CHECK OUT IS 10 A.M.
              (ROOMS) 10.30 A.M. (SUITES)
            </li>
            <li className="p-2">
              ALL ROOMS ARE NON-SMOKING. SHOULD GUESTS WISH TO SMOKE, SEATING IS
              PROVIDED OUTSIDE.
            </li>
            <li className="p-2">
              IN THE EVENT OF A LATE ARRIVAL PLEASE NOTIFY THE FRONT DESK AND WE WILL MAKE NECESSARY ARRANGEMENTS
            </li>
            <li className="text-xs">
              Saco River Motor Lodge will not be held liable for any injury,
              damage or loss involving the Canoeing, kayaking, and tubing
              activities.
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col p-2 text-xs lg:text-sm">
          <h1 className="text-lg font-bold underline">
            Saco River Motor Lodge Welcomes Responsible Dogs
          </h1>
          <ul>
            <li className="p-2">MAXIMUM OF 2 DOGS PER ROOM AND SUITE</li>
            <li className="p-2">
              WE ACCEPT DOGS IN SOME MOTEL ROOMS AND SUITES. YOU MUST LET US
              KNOW WHEN MAKING A RESERVATION THAT YOU INTEND TO BRING YOUR DOG
              WITH YOU. THE ONLY CHARGE IS AN ADDITIONAL CLEANING FEE OF{" "}
              <b>$25/night</b> FOR THE ROOMS AND <b>$50/night</b> FOR THE SUITES
              NO MATTER HOW LONG YOU STAY.
            </li>
            <li className="p-2">
              SACO RIVER MOTOR LODGE WELCOMES RESPONSIBLE DOG OWNERS AND THE
              FOLLOWING GUIDELINES ARE SET OUT TO ENABLE BOTH YOUR DOGS AND
              OTHER GUESTS TO ENJOY THEIR STAY WITH US:
            </li>
            <li className="p-2">DOGS MUST BE KEPT ON A LEASH AT ALL TIMES</li>
            <li className="p-2">
              DOGS SHOULD BE WALKED ON THE FIELD AT THE SIDE OF THE MOTEL, AND
              GUESTS MUST CLEAN UP AFTER THEIR DOGS.
            </li>
            <li className="p-2">PLEASE KEEP YOUR DOGS OFF THE BEDS.</li>
            <li className="p-2">
              PLEASE DO NOT USE OUR ROOM TOWELS ON YOUR DOG
            </li>
            <li className="p-2">DOGS ARE NOT ALLOWED IN THE POOL AREA.</li>

            <li className="p-2">
              DOGS SHOULD NOT, UNDER ANY CIRCUMSTANCES, BE LEFT UNATTENDED IN A
              ROOM, NOT EVEN IN A CRATE, AS EXCESSIVE BARKING CAN DISTURB OTHER
              GUESTS.
            </li>
            <li className="text-xs">
              Saco River Motor Lodge will not be held liable for any injury,
              damage or loss involving the Canoeing, kayaking, and tubing
              activities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

