import { type Metadata } from "next";
import hiking from "~/static/Pictures/Carousel-Pictures/7405778508_4977b9aea7_m.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hiking Trails in White Mountains NH",
  description: "Discover the best hiking trails near North Conway and the White Mountains. From easy walks to challenging climbs, explore the outdoors near Saco River Motor Lodge.",
};

export default function Hiking() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Local Hikes
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Explore the trails of the White Mountains
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 container mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12">

          <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl w-full">
            <Image
              src={hiking}
              alt="Hiking in White Mountains"
              className="w-full h-auto object-cover max-h-[500px]"
              placeholder="blur"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Left Column */}
            <div className="space-y-6">
              <HikeItem
                title="Mountain Division Trail"
                distance="10.3 miles"
                desc="Named for the railroad line it parallels, the Mountain Division Trail will one day span 52 miles between Fryeburg and Portland. Two sections of the trail are currently open."
              />
              <HikeItem
                title="Conway Branch Rail Trail"
                distance="21 miles"
                desc="The Conway Branch trail runs for 21 miles along an old rail corridor between State Route 113 in Conway and Polly's Crossing in Ossipee. The trail is popular with snowmobiles and rail car clubs."
              />
              <HikeItem
                title="East Branch & Zealand Valley Railroad Hike"
                distance="18 miles"
                desc="Are you looking for a multi-day hike on beautiful rail-trails through pristine wilderness of the White Mountains? Look no further. At midpoint, the nearest road is 7 miles in either direction."
              />
              <HikeItem
                title="Guinea Pond & Flat Mountain Trails"
                distance="11.5 miles"
                desc="These connecting trails follow the bed of the old Beebe River Railroad up to Flat Mountain Pond, a large, remote pool high in the Sandwich Range Wilderness. This is a great trip for advanced mountain bikers."
              />
              <HikeItem
                title="The Oliverian Brook Trail"
                distance="3.5 miles"
                desc="The Oliverian Brook Trail follows the course of Oliverian Brook through the dense forest of White Mountain National Forest. The trail, open to cross-country skiing in winter, heads toward Passaconaway Cutoff."
              />
              <HikeItem
                title="Rob Brook Trail"
                distance="2 miles"
                desc="The Rob Brook Trail is mostly flat, following the bottomlands of its namesake creek through the White Mountains National Forest. The trail is open to mountain biking and hiking, with cross-country skiing in winter."
              />
              <HikeItem
                title="Sawyer River Trail"
                distance="7.5 miles"
                desc="The Sawyer River Trail offers a memorable 7.5-mile journey through a pristine mountain valley. Following the old Sawyer River Railroad logging line, the trail is popular with mountain bikers, and hikers."
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <HikeItem
                title="Baldface Loop"
                distance=""
                desc=""
              />
              <HikeItem
                title="Rocky Branch Trail"
                distance="9 miles"
                desc="From the National Forest Service: Rocky Branch Trail was severely damaged during Tropical Storm Irene. The trail is currently closed from the end of Rocky Branch Road (Jericho Road) to Rocky Branch Shelter #2."
              />
              <HikeItem
                title="Wild River Trail"
                distance="15 miles"
                desc="Most of the Wild River Trail falls within the Wild River Wilderness and is off-limits to bikes. At its southern end, the trail meets the Wildcat River Trail, near Bog Brook."
              />
              <HikeItem
                title="Presidential Range Rail Trail"
                distance="18 miles"
                desc="This 18-mile Presidential Range Trail runs between Cherry Pond, a great bird-watching venue, and Gorham. The trail skirts the Presidential Range along the edge of the White Mountain National Forest and passes through Silvio O."
              />
              <HikeItem
                title="Cotton Valley Railtrail"
                distance="7.3 miles"
                desc="On the banks of Lake Winnipesaukee in central New Hampshire, Wolfeboro bills itself as 'America's Oldest Summer Resort.' Vacationers have been escaping to this quaint village since passenger rail service began in 1872."
              />
              <HikeItem
                title="Lincoln Woods Trail"
                distance="2.7 miles"
                desc="The Lincoln Woods Trail runs for 2.6 miles along the east branch of the Pemigewasset River. You can combine the trail with other trails that run through the forest in the White Mountains of New Hampshire, just northeast of Lincoln."
              />
              <HikeItem
                title="Black Pond Trail"
                distance="0.8 miles"
                desc="The Black Pond Trail itself is short but it can be linked with other trails that run through the forest in the White Mountains of New Hampshire, just northeast of Lincoln."
              />
              <HikeItem
                title="Franconia Brook Trail"
                distance="7.2 miles"
                desc="The Franconia Brook Trail runs from just north of the confluence of the east branch of the Pemigewasset River and Franconia Branch. Note that bicycling is not permitted along the route."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HikeItem({ title, distance, desc }: { title: string, distance: string, desc: string }) {
  return (
    <div className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
      <h3 className="font-display text-lg font-bold text-ocean-deep flex flex-wrap justify-between items-baseline gap-2">
        {title}
        {distance && <span className="text-sm font-normal text-muted-foreground bg-white px-2 py-1 rounded-full">{distance}</span>}
      </h3>
      {desc && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>}
    </div>
  )
}
