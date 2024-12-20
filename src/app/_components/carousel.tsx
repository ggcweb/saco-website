import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import Image, { type StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay"

import React from "react";

type ImageProps = {
  images: StaticImageData[];
  carWidth: string;
  styling: string;
  speed: number;
}
export const ImageSlider: React.FC<ImageProps> = ({ images, carWidth, styling, speed }) => {
  // const arr = [{crOne}.crOne, {crTwo}.crTwo, {crThree}.crThree];
  const plugin = React.useRef(
    Autoplay({ delay: speed, stopOnInteraction: false, stopOnMouseEnter: true }),
  )
  return(
    // This is the default
    // className="flex flex-row justify-center"
    <div className={styling}>
      <Carousel  plugins={[plugin.current]}
                 className={carWidth}>
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index} >
              <div>
                {/*<Card>*/}
                {/*  <CardContent className="flex aspect-square items-center justify-center p-6">*/}
                    <Image src={_}  alt="" className={carWidth}/>
                    {/*<span className="text-4xl font-semibold">{index + 1}</span>*/}
                {/*  </CardContent>*/}
                {/*</Card>*/}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}