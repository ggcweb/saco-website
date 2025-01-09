"use client"

import * as React from "react"
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg";
import Image from "next/image";
export default function Hiking() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-2 text-xl text-center font-bold pt-4">LOCAL HIKES</p>
      <Image src={hiking} alt="" className="w-1/2" />
    <div className="w-full flex flex-row justify-center items-center">
      <div className="w-1/2 items-center text-center p-4">
        <p className="p-2"><b>Mountain Division Trail</b>- 10.3 Named for the railroad line it
          parallels, the Mountain Division Trail will one day span 52 miles between Fryeburg and Portland. Two sections
          of
          the trail are currently open.</p>
        <p className="p-2"><b>Conway Branch Rail Trail</b>: 21 miles The Conway Branch trail runs
          for 21 miles along an old rail corridor between State Route 113 in Conway and Polly&#39;s Crossing in Ossipee. The
          trail is popular with snowmobiles and rail car clubs.</p>
        <p className="p-2"><b>East Branch & Zealand Valley Railroad Hike</b>: 18 miles Are you
          looking for a multi-day hike on beautiful rail-trails through pristine wilderness of the White Mountains? Look
          no further. At midpoint, the nearest road is 7 miles in either direction.</p>
        <p className="p-2"><b>Guinea Pond & flat Mountain trails</b>: 11.5 miles These connecting
          trails follow the bed of the old Beebe River Railroad up to Flat Mountain Pond, a large, remote pool high in
          the
          Sandwich Range Wilderness. This is a great trip for advanced mountain bikers.</p>
        <p className="p-2"><b>The Oliverian Brook Trail</b>- 3.5 miles The Oliverian Brook Trail
          follows the course of Oliverian Brook through the dense forest of White Mountain National Forest. The trail,
          open to cross-country skiing in winter, heads toward Passaconaway Cutoff.</p>
        <p className="p-2"><b>Rob Brook Trail</b>- 2 miles The Rob Brook Trail is mostly flat,
          following the bottomlands of its namesake creek through the White Mountains National Forest. The trail is open
          to mountain biking and hiking, with cross-country skiing in winter.</p>
        <p className="p-2"><b>Sawyer River Trial</b>- 7.5 miles The Sawyer River Trail offers a
          memorable 7.5-mile journey through a pristine mountain valley. Following the old Sawyer River Railroad logging
          line, the trail is popular with mountain bikers, and hikers.</p>
      </div>
      <div className="w-1/2 items-center text-center p-4">
        <p className="p-2"><b>Baldface Loop</b></p>
        <p className="p-2"><b>Rocky Branch Trial</b>- 9 miles From the National Forest Service:
          Rocky Branch Trail was severely damaged during Tropical Storm Irene. The trail is currently closed from the
          end
          of Rocky Branch Road (Jericho Road) to Rocky Branch Shelter #2.</p>
        <p className="p-2"><b>Wild River Tail</b>- 15 miles Most of the Wild River Trail falls
          within the Wild River Wilderness and is off-limits to bikes. At it&#39;s southern end, the trail meets the Wildcat
          River Trail, near Bog Brook.</p>
        <p className="p-2"><b>Presidential Range Rail Trail</b>- 18 miles This 18-mile
          Presidential Range Trail runs between Cherry Pond, a great bird-watching venue, and Gorham. The trail skirts
          the
          Presidential Range along the edge of the White Mountain National Forest and passes through Silvio O.</p>
        <p className="p-2"><b>Cotton Valley Railtrail</b>- 7.3 miles On the banks of Lake
          Winnipesaukee in central New Hampshire, Wolfeboro bills itself as &#34;America&#39;s Oldest Summer Resort.&#34;
          Vacationers
          have been escaping to this quaint village since passenger rail service began in 1872.</p>
        <p className="p-2"><b>Lincoln Woods Trail</b>- 2.7 miles The Lincoln Woods Trail runs for
          2.6 miles along the east branch of the Pemigewasset River. You can combine the trail with other trails that
          run
          through the forest in the White Mountains of New Hampshire, just northeast of Lincoln.</p>
        <p className="p-2"><b>Black Pond Trail</b>- .08 miles The Black Pond Trail itself is
          short but it can be linked with other trails that run through the forest in the White Mountains of New
          Hampshire, just northeast of Lincoln.</p>
        <p className="p-2"><b>Franconia Brook Trail</b>- 7.2 miles The Franconia Brook Trail runs
          from just north of the confluence of the east branch of the Pemigewasset River and Franconia Branch. Note that
          bicycling is not permitted along the route.</p>
      </div>
    </div>
    </div>
  )
}

