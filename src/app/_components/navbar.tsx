"use client"

import * as React from "react"
import Link from "next/link"
import logo from "~/static/Pictures/srml_logo.jpg";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
export function Navbar() {
  return (
    <>
      <header>
        <ul className="flex flex-col items-center justify-around bg-endings text-white md:flex-row md:p-2">
          <li>
            <Link href="/" legacyBehavior passHref>
              <Image src={logo} alt="logo" className="cursor-pointer" />
            </Link>
          </li>
          <Link
            href="/RoomsandSuites"
            className="hidden cursor-pointer p-2 hover:bg-white hover:text-endings md:flex"
          >
            Rooms and Suites
          </Link>
          <Link
            href="/Amenities"
            className="hidden cursor-pointer p-2 hover:bg-white hover:text-endings md:flex"
          >
            Amenities
          </Link>
          <Link
            href="/AreaActivities"
            className="hidden cursor-pointer p-2 hover:bg-white hover:text-endings md:flex"
          >
            Area Activities
          </Link>

          {/*Popup for rules cause another page is too much for something like this*/}
          <Dialog>
            <DialogTrigger>
              <li>
                <a className="cursor-pointer p-2 hover:bg-white hover:text-endings">
                  Rules and Policies
                </a>
              </li>
            </DialogTrigger>
            <DialogContent className="w-full max-w-full overflow-y-scroll lg:w-1/2">
              <DialogHeader>
                <DialogTitle className="items-center text-center text-endings">
                  Rules and Policies
                </DialogTitle>
                <Tabs defaultValue="gen">
                  <TabsList className="flex w-full flex-row justify-center bg-none">
                    <TabsTrigger value="gen">General Policies</TabsTrigger>
                    <TabsTrigger value="dogs">Dog Policies</TabsTrigger>
                  </TabsList>
                  <TabsContent value="gen">
                    <DialogDescription className="flex flex-col items-center justify-evenly overflow-y-scroll p-2 text-center text-xs text-endings lg:text-sm">
                      <ul>
                        <li className="p-2">
                          ALL RESERVATIONS MUST BE MADE WITH A CREDIT CARD.
                        </li>
                        <li className="p-2">
                          CANCELLATIONS MUST BE MADE BY PHONE TO A MEMBER OF
                          STAFF AT THE LODGE (NO EMAIL OR VOICE MAIL MESSAGES
                          ACCEPTED).
                        </li>
                        <li className="p-2">
                          THERE IS NO CANCELLATION AFTER 48 HOURS FOR ROOMS AND
                          7 DAYS FOR THE SUITES, IF THE RESERVATION IS CANCELLED
                          AFTER 48 HOURS FOR ROOMS AND 7 DAYS FOR SUITES THE
                          FULL AMOUNT OF THE STAY WILL BE CHARGED.
                        </li>
                        <li className="p-2">
                          <b className="text-base">
                            No cancellation allowed during Fryeburg Fair week
                          </b>
                        </li>
                        <li className="p-2">
                          CHECK IN IS ANYTIME AFTER 4 P.M. TO 9 P.M. CHECK OUT
                          IS 10 A.M. (ROOMS) 10.30 A.M. (SUITES)
                        </li>
                        <li className="p-2">
                          ALL ROOMS ARE NON-SMOKING. SHOULD GUESTS WISH TO
                          SMOKE, SEATING IS PROVIDED OUTSIDE.
                        </li>
                        <li className="p-2">
                          IN THE EVENT OF A LATE ARRIVAL PLEASE NOTIFY THE FRONT
                          DESK AND WE WILL MAKE NECESSARY ARRANGEMENTS
                        </li>
                        <li className="text-xs">
                          Saco River Motor Lodge will not be held liable for any
                          injury, damage or loss involving the Canoeing,
                          kayaking, and tubing activities.
                        </li>
                      </ul>
                    </DialogDescription>
                  </TabsContent>
                  <TabsContent value="dogs">
                    <DialogDescription
                      className="flex w-full flex-col items-center justify-evenly p-2 text-center text-xs text-endings lg:text-sm">
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
                    </DialogDescription>
                  </TabsContent>
                </Tabs>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Link
            href="#footer"
            className="hidden cursor-pointer p-2 hover:bg-white hover:text-endings md:flex"
          >
            Contact Us
          </Link>
          <Link
            className="cursor-pointer bg-red-600 p-2 hover:bg-white hover:text-endings"
            href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
          >
            Make a Reservation
          </Link>
        </ul>
      </header>
    </>
  );
}


//                   <h3 className="underline">Dog Policies</h3>

//                   </ul>
