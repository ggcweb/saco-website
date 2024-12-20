import * as React from "react"
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image, { type StaticImageData } from "next/image";
import Link from "next/link"

// Type of cards
type cardData = {
  name: string;
  picture: StaticImageData;
  link: string;
};

type cards = {
  data : cardData[];
  cardColor: string;
  backColor: string;
  link: boolean;
}
export const MultiImageSlider: React.FC<cards> = ({ data, cardColor, backColor, link }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false }),
  )

  return (
    <Carousel className="w-full max-w-full pt-2" style={{background: backColor}} plugins={[plugin.current]}>
      <CarouselContent className="-ml-1" >
        {data.map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              {link && (
                <Link href={_.link}>
                  <Card className="border-none">
                    <CardContent className="flex aspect-square items-center justify-center p-4 flex-col gap-4 text-white rounded-xl" style={{background: cardColor}}>
                      <span className="text-2xl font-semibold">{_.name}</span>
                      <Image src={_.picture} alt="" className="w-80 h-80"/>
                    </CardContent>
                  </Card>
                </Link>
              )}
              {!link && (
                  <Card className="border-none">
                    <CardContent className="flex aspect-square items-center justify-center p-4 flex-col gap-4 text-white rounded-xl" style={{background: cardColor}}>
                      <span className="text-2xl font-semibold">{_.name}</span>
                      <Image src={_.picture} alt="" className="w-80 h-80"/>
                    </CardContent>
                  </Card>
              )}

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
