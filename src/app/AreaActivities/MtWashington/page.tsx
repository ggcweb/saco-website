import { type Metadata } from "next";
import mtWash from "~/static/Pictures/Carousel-Pictures/mtwashington_001.png"
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export const metadata: Metadata = {
  title: "Mount Washington - Auto Road, Hiking & Tours",
  description: "Experience Mount Washington, the highest peak in the Northeast. Hike, drive the Auto Road, or take a guided tour. Just minutes from Saco River Motor Lodge.",
};

export default function MtWashington() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Mount Washington
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            The Highest Peak in the Northeast
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10">

          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-3xl transform hover:scale-[1.01] transition-transform duration-300">
            <Image
              src={mtWash}
              alt="Mount Washington"
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>

          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Mount Washington is your gateway to all this American icon has to offer. At the base you can enjoy the Glen View café,
              and the Red Barn Museum of Auto Road history featuring stagecoaches from the 1800’s up through today.
            </p>
            <p className="mb-4">
              Take a guided tour in an Auto Road van with an experienced and knowledgeable driver and learn about the mountain’s
              ecology, history, legends, and lore. Or you can drive your own vehicle and receive an audio tour on cassette or CD -
              AND the world famous &quot;THIS CAR CLIMBED MT. WASHINGTON&quot; bumper sticker!
            </p>
            <p>
              The Auto Road is the oldest manmade attraction in America. Guided tours in Auto Road vans are available from
              8:30 am until 5 pm and take approximately 2 hours round trip including 1 hour on the summit.
              Just 25 scenic minutes north of North Conway village on Rt. 16 in Pinkham Notch.
            </p>
          </div>

          <div className="w-full max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="hiking" className="border rounded-xl px-4 py-2 shadow-sm">
                <AccordionTrigger className="text-xl font-display font-semibold text-ocean-deep hover:text-ocean-deep/80 hover:no-underline">
                  Hiking Trails
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-base text-muted-foreground space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">From the East:</h4>
                    <p>
                      From the eastern side of the mountain, the two most popular trails are the Tuckerman Ravine Trail and the Lion Head Trail.
                      A hiker can do an up-and-back trip using only one of the routes, or can do a loop trip using them both.
                      The Tuckerman Ravine Trail begins at the Appalachian Mountain Club Pinkham Notch Visitor Center on Route 16.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">From the West:</h4>
                    <p>
                      The official parking lot for the Ammonoosuc Ravine Trail and the Jewell Trail is a U.S. Forest Service parking area on the Base Road.
                      The Ammonoosuc Ravine Trail begins at the Base Road parking lot (2500 feet). It travels at first with easy to moderate grades,
                      up to Gem Pool. The Jewell Trail also ascends Mount Washington from the west. Of the major, direct trails, it is the longest,
                      but probably the least difficult in terms of terrain.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  )
}
