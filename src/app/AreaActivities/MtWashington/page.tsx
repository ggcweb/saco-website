"use client"

import * as React from "react"
import mtWash from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png"
import Image, { type StaticImageData } from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
export default function MtWashington() {
  return (
    <>
      <div className="flex flex-col items-center bg-input">
        <h3 className="text-sm lg:text-2xl pt-4 underline font-bold">Mount Washington</h3>
        <Image src={mtWash} alt="" className="w-6/12 pt-4 pb-4" />
        <p className="text-center p-4 text-lg">
          The Mount Washington is your gateway to all this American icon has to offer. At the base you can enjoy the Glen View café, and the Red Barn Museum of Auto Road history featuring stagecoaches from the 1800’s up through today. Take a guided tour in an Auto Road van with an experienced and knowledgeable driver and learn about the mountain’s ecology, history, legends, and lore. Or you can drive your own vehicle and receive an audio tour on cassette or CD - AND the world famous "THIS CAR CLIMBED MT. WASHINGTON" bumper sticker! The Auto Road is the oldest manmade attraction in America. Guided tours in Auto Road vans are available from 8:30 am until 5 pm and take approximately 2 hours round trip including 1 hour on the summit.
          Just 25 scenic minutes north of North Conway village on Rt. 16 in Pinkham Notch.
        </p>

        <Accordion type="multiple" className="w-full pb-4">
          <AccordionItem value="mtWash">
            <AccordionTrigger className="m-8 mb-0 mt-2 w-8/12 bg-input text-xl outline outline-offset-2">
              <p className="w-8/12 pl-4 flex flex-row items-center">HIKING TRAILS</p>
            </AccordionTrigger>
            <AccordionContent className="ml-8 mr-8 mb-2 bg-input p-4 outline outline-offset-2 text-lg">
              <p>From the east:</p>
              <p>From the eastern side of the mountain, the two most popular trails are the Tuckerman Ravine Trail and the Lion Head Trail. A hiker can do an up-and-back trip using only one of the routes, or can do a loop trip using them both, thus seeing some different terrain and different views. The Tuckerman Ravine Trail begins at the Appalachian Mountain Club Pinkham Notch Visitor Center on Route 16. The Visitor Center has public restrooms, a small shop selling books, snacks, and trail supplies, and has public information staff available for last-minute questions. The Lion Head is the other popular route from the east. The Lion Head Trail actually begins and ends on the Tuckerman Ravine Trail, so you need to start on the Tuckerman Ravine Trail at Pinkham Notch (2032 feet).</p>
              <br/>
              <p>From the west:</p>
              <p>The official parking lot for the following two trails - the Ammonoosuc Ravine Trail and the Jewell Trail --is a U.S. Forest Service parking area on the Base Road. Please note that parking at this trailhead requires a U.S. Forest Service parking pass, available at several locations thought the White Mountains and also available (for a short-term pass) at the trailhead. The Ammonoosuc Ravine Trail begins at the Base Road parking lot (2500 feet). It travels at first with easy to moderate grades, though the footway is rough, up to Gem Pool (3450 feet), 2.1 miles from the parking area. From this point on the trail travels up the headwall of Ammonoosuc Ravine, which is continually steep, rough, with sometimes slabby rock, and several stream crossings. The Jewell Trail also ascends Mount Washington from the west. Of the major, direct trails, it is the longest, but probably the least difficult in terms of terrain, with moderate grades throughout.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
)
}

