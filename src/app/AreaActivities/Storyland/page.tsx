import { type Metadata } from "next";
import { type StaticImageData } from "next/image";
import storyland from "~/static/Pictures/Carousel-Pictures/storyland.jpg";
import P1 from "~/static/Pictures/Storyland/img.png"
import P2 from "~/static/Pictures/Storyland/img_1.png"
import P3 from "~/static/Pictures/Storyland/img_2.png"
import P4 from "~/static/Pictures/Storyland/img_3.png"
import P5 from "~/static/Pictures/Storyland/img_4.png"
import P6 from "~/static/Pictures/Storyland/img_5.png"
import P7 from "~/static/Pictures/Storyland/img_6.png"
import { MultiImageSlider } from "~/app/_components/multiImageCar";

type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};

export const metadata: Metadata = {
  title: "Story Land - Family Theme Park in NH",
  description: "Visit Story Land, the premier children's theme park in New Hampshire. Enjoy rides, shows, and attractions just a short drive from Saco River Motor Lodge.",
};

export default function Storyland() {
  const imageArr: cardData[] = [
    { name: "", picture: storyland, link: "" },
    { name: "", picture: P1, link: "" },
    { name: "", picture: P2, link: "" },
    { name: "", picture: P3, link: "" },
    { name: "", picture: P4, link: "" },
    { name: "", picture: P5, link: "" },
    { name: "", picture: P6, link: "" },
    { name: "", picture: P7, link: "" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-deep text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="heading-display mb-4 animate-fade-in-up">
            Story Land
          </h1>
          <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Where Fantasy Lives!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-12">

            <div className="w-full">
              <MultiImageSlider
                data={imageArr}
                backColor={"white"}
                cardColor={"white"}
                link={false}
                textColor={"black"}
              />
            </div>

            <div className="prose prose-lg text-center max-w-3xl">
              <p className="text-xl leading-relaxed font-medium text-ocean-deep">
                A dream come true for all children.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Flying Fish, Humpty Dumpty, Bamboo Chutes, Cinderella and her Castle and Pumpkin Coach,
                the Polar Caster, Mother Goose, Huff Puff and Whistle Railroad, and so many more...
                Story Land is open every summer: weekends from Memorial Day Weekend through mid June;
                every day from mid June to Labor Day; and then Saturdays & Sundays from Labor Day through Columbus Day.
                With 21 wonderfully themed rides, three lively shows, countless unique play areas, and acres of
                beautifully landscaped gardens and immaculate grounds, Story Land is the perfect place to create
                family memories to last a lifetime. A New England favorite for generations of families for more than 55 years.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
